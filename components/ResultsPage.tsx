// components/ResultsPage.tsx

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Share2, RotateCcw, Music } from "lucide-react"
import { useEffect, useState } from "react" // useEffect는 이제 모킹 데이터 제거용으로 필요하지 않습니다.

// AI 응답 데이터의 타입 정의를 Props에 추가
interface AiResult {
  playlistTitle: string;
  playlistDescription: string;
  similarity: number;
  playlist: { rank: number; title: string; artist: string }[];
}

interface ResultsPageProps {
  userAData: string[]
  userBData: string[]
  onReset: () => void
  aiResult: AiResult | null // 💡 aiResult를 Props로 받음
}

export default function ResultsPage({ userAData, userBData, onReset, aiResult }: ResultsPageProps) {
  
  // 💡 임시 상태 관리 (모킹 코드)를 제거합니다.
  // const [similarity, setSimilarity] = useState(0); 
  // const [playlistTitle, setPlaylistTitle] = useState("");
  // ... (다른 useState 제거)

  // 💡 useEffect를 제거합니다. 데이터는 Props로 전달받습니다.
  /* useEffect(() => {
    // 기존의 모든 모킹 데이터 생성 로직 제거
  }, [userAData, userBData]);
  */
  
  // aiResult가 null이면 임시 에러 화면 표시 (데이터가 넘어오지 않은 경우)
  if (!aiResult) {
      return (
          <div className="min-h-screen flex items-center justify-center">
              <p className="text-red-500">오류: AI 결과 데이터를 불러오지 못했습니다.</p>
              <Button onClick={onReset} className="ml-4">돌아가기</Button>
          </div>
      );
  }


  // 🚀 이제 aiResult의 데이터를 직접 사용합니다.
  const { similarity, playlistTitle, playlistDescription, playlist } = aiResult;


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold text-foreground text-center">FUSE 결과</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-4">
        {/* Similarity Section */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-900">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">취향 유사도</p>
            <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {similarity}%
            </div>
            <p className="text-xs text-muted-foreground">당신들의 음악 취향은 {similarity}% 일치합니다</p>
          </div>

          {/* Venn Diagram (SVG 코드 유지) */}
          <div className="mt-6 flex justify-center">
            <svg width="280" height="200" viewBox="0 0 300 250" className="text-slate-300 dark:text-slate-700">
              {/* ... SVG Definitions and Circles ... */}
              <circle
                cx="100"
                cy="125"
                r="80"
                fill="url(#blueGradient)"
                opacity="0.3"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="125"
                r="80"
                fill="url(#pinkGradient)"
                opacity="0.3"
                stroke="currentColor"
                strokeWidth="2"
              />

              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>

              {/* Labels (유사도 변수 사용) */}
              <text
                x="60"
                y="130"
                fontSize="14"
                fontWeight="bold"
                fill="currentColor"
                className="text-blue-600 dark:text-blue-400"
              >
                A
              </text>
              <text
                x="220"
                y="130"
                fontSize="14"
                fontWeight="bold"
                fill="currentColor"
                className="text-pink-600 dark:text-pink-400"
              >
                B
              </text>
              <text
                x="145"
                y="135"
                fontSize="12"
                fontWeight="bold"
                fill="currentColor"
                className="text-purple-600 dark:text-purple-400"
              >
                {similarity}%
              </text>
            </svg>
          </div>
        </Card>

        {/* AI Generated Mix */}
        <Card className="p-4 bg-white dark:bg-slate-900">
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">{playlistTitle}</h2>
            <p className="text-xs text-muted-foreground">{playlistDescription}</p>
          </div>

          {/* Buttons (공유하기/다시하기 버튼 유지) */}
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full h-10 text-sm active:scale-95 bg-transparent"
              onClick={() =>
                navigator.share
                  ? navigator.share({
                        title: playlistTitle,
                        text: playlistDescription,
                        url: window.location.href,
                      })
                  : alert("공유 기능은 지원되는 브라우저에서만 사용 가능합니다.")
              }
            >
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
            <Button variant="outline" className="w-full h-10 text-sm active:scale-95 bg-transparent" onClick={onReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              다시하기
            </Button>
          </div>
        </Card>

        {/* Playlist (실제 AI 데이터 매핑) */}
        <Card className="overflow-hidden bg-white dark:bg-slate-900">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Music className="w-4 h-4" />
              생성된 플레이리스트 (10곡)
            </h3>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {playlist.map((song, index) => ( // 💡 playlist 데이터 사용
              <div
                key={index}
                className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-3 active:scale-95"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                  {song.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{song.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
                </div>
                <Music className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </Card>

        {/* Footer Actions */}
        <div className="mt-6 text-center pb-6">
          <p className="text-xs text-muted-foreground mb-4">이 결과를 친구와 공유하고 함께 음악을 즐겨보세요!</p>
          <Button
            onClick={onReset}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-base font-bold active:scale-95 transition-all"
          >
            새로운 FUSE 시작하기
          </Button>
        </div>
      </div>
    </main>
  )
}