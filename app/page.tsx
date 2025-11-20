// app/page.tsx

"use client"

import { useState } from "react"
import MainPage from "@/components/MainPage"
import ResultsPage from "@/components/ResultsPage"

// AI 응답 데이터의 타입을 정의합니다. (Route Handler의 FuseMixResponse와 일치)
interface AiResult {
  playlistTitle: string;
  playlistDescription: string;
  similarity: number;
  playlist: { rank: number; title: string; artist: string }[];
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"main" | "results">("main");
  const [userAData, setUserAData] = useState<string[]>(["", "", "", "", ""]);
  const [userBData, setUserBData] = useState<string[]>(["", "", "", "", ""]);
  
  // 💡 추가: AI 응답 데이터와 로딩 상태
  const [aiResult, setAiResult] = useState<AiResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 🔌 API 호출 로직 (핵심)
  const handleFuse = async () => {
    // 최소한 하나의 입력이 있는지 확인
    const isDataValid = userAData.some((item) => item.trim()) || userBData.some((item) => item.trim());

    if (!isDataValid) {
        alert("User A와 User B 중 최소 하나 이상의 취향을 입력해 주세요.");
        return;
    }
    
    setIsLoading(true); // 로딩 시작

    try {
        // 백엔드 Route Handler 호출
        const response = await fetch('/api/fuse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userAData: userAData,
                userBData: userBData,
            }),
        });

        const data = await response.json();

        if (response.ok && data.playlist) { // 응답 성공 및 플레이리스트 데이터 확인
            setAiResult(data);              // AI 응답 저장
            setCurrentPage("results");      // 결과 페이지로 전환
        } else {
            // API 호출 실패 또는 AI 오류 처리
            console.error("API Error:", data.error);
            alert(`AI 분석 실패: ${data.error || "서버에서 유효하지 않은 응답을 받았습니다."}`);
        }
    } catch (error) {
        console.error("API 호출 중 오류:", error);
        alert("네트워크 오류 또는 서버 연결에 실패했습니다. 서버 콘솔을 확인하세요.");
    } finally {
        setIsLoading(false); // 로딩 종료
    }
  }

  const handleReset = () => {
    setCurrentPage("main");
    setUserAData(["", "", "", "", ""]);
    setUserBData(["", "", "", "", ""]);
    setAiResult(null); // 결과 데이터도 초기화
  }

  // 💡 로딩 화면 추가
  if (isLoading) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
              <p className="mt-4 text-xl font-semibold text-purple-600 dark:text-purple-400">
                  AI가 FUSE MIX를 생성하는 중... 🎶
              </p>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-background">
      {currentPage === "main" ? (
        <MainPage
          userAData={userAData}
          userBData={userBData}
          setUserAData={setUserAData}
          setUserBData={setUserBData}
          onFuse={handleFuse} // API 호출 함수 전달
        />
      ) : (
        <ResultsPage 
          userAData={userAData} 
          userBData={userBData} 
          onReset={handleReset} 
          aiResult={aiResult} // 💡 AI 결과 데이터 전달
        />
      )}
    </div>
  )
}