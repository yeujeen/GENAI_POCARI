"use client"

import { useState, Dispatch, SetStateAction } from "react"
import { Sparkles, RefreshCw, Music, User, AlertCircle } from "lucide-react"
import MainPage from "@/components/MainPage"
import ResultsPage from "@/components/ResultsPage"

// AI 응답 데이터 타입 정의 (백엔드 응답 구조와 일치)
export interface AiResult {
  playlistTitle: string;
  playlistDescription: string;
  similarity: number;
  similarityReason: string;
  // 새로 추가된 시각화용 데이터
  fuseColor?: { 
    primary: string; 
    secondary: string; 
    background: string; 
  }; 
  keywords?: string[];
  
  playlist: { 
    rank: number; 
    title: string; 
    artist: string; 
    reason: string; // 백엔드에서 reason을 주도록 했으므로 다시 추가
  }[]; 
}

// MainPage에 전달할 Setter 함수의 타입 정의
export type UserDataSetter = Dispatch<SetStateAction<string[]>>;


export default function Home() {
  const [currentPage, setCurrentPage] = useState<"main" | "results">("main");
  
  const [userAData, setUserAData] = useState<string[]>(["", "", "", "", ""]);
  const [userBData, setUserBData] = useState<string[]>(["", "", "", "", ""]);
  
  const [aiResult, setAiResult] = useState<AiResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFuse = async () => {
    const userAInputs = userAData.filter(item => item.trim() !== "");
    const userBInputs = userBData.filter(item => item.trim() !== "");

    if (userAInputs.length === 0 || userBInputs.length === 0) {
        setErrorMsg("User A와 User B 모두 최소 1개 이상의 취향을 입력해야 분석할 수 있습니다.");
        return;
    }
    
    setIsLoading(true);
    setErrorMsg(null); 

    try {
        const response = await fetch("/api/fuse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userAData: userAInputs, userBData: userBInputs }), 
        });

        const data = await response.json(); 

        if (!response.ok) {
            throw new Error(data.error || `서버 에러 (${response.status} ${response.statusText})`);
        }

        setAiResult(data as AiResult);
        setCurrentPage("results");

    } catch (error) {
        console.error("Fuse Mix 요청 오류:", error);
        const message = error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";
        setErrorMsg(`AI 분석 실패: ${message}`);
    } finally {
        setIsLoading(false);
    }
  }

  const handleReset = () => {
    setCurrentPage("main");
    setUserAData(["", "", "", "", ""]);
    setUserBData(["", "", "", "", ""]);
    setAiResult(null); 
    setErrorMsg(null);
  }

  const userAInputs = userAData.filter(item => item.trim() !== ""); 
  const userBInputs = userBData.filter(item => item.trim() !== "");

  if (isLoading) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 text-center">
              {/* 💡 수정: 스피너를 단일 요소로 간결하게 수정 */}
              <div className="animate-spin rounded-full h-16 w-16 md:h-20 md:w-20 border-t-4 border-b-4 border-purple-600 border-opacity-70"></div>
              
              <h2 className="mt-8 text-xl md:text-2xl font-bold text-slate-800 dark:text-white animate-pulse">
                취향 분석 중...
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 break-keep">
                AI가 두 분을 위한 최적의 트랙을 선별하고 있습니다. 🎧
              </p>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      {errorMsg && (
          <div className="fixed top-4 left-4 right-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl flex items-start shadow-lg animate-in slide-in-from-top-2">
            <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm font-medium flex-1 break-keep">{errorMsg}</span>
            <button onClick={() => setErrorMsg(null)} className="ml-2 font-bold hover:text-red-900 p-1">✕</button>
          </div>
      )}

      {currentPage === "main" ? (
        <MainPage
          userAData={userAData}
          userBData={userBData}
          setUserAData={setUserAData}
          setUserBData={setUserBData}
          onFuse={handleFuse} 
        />
      ) : (
        <ResultsPage 
          userAData={userAInputs} 
          userBData={userBInputs} 
          onReset={handleReset} 
          aiResult={aiResult} 
        />
      )}
    </div>
  )
}