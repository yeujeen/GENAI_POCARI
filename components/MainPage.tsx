"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sparkles, CheckCircle2 } from "lucide-react" // ChevronDown 제거
import { useState } from "react"

interface MainPageProps {
  userAData: string[]
  userBData: string[]
  setUserAData: (data: string[] | ((prev: string[]) => string[])) => void
  setUserBData: (data: string[] | ((prev: string[]) => string[])) => void
  onFuse: () => void
}

// 💡 수정 2: 작동 방식 (How-to) 데이터 정의 (아이콘 제거를 위해 CheckCircle2는 템플릿에서 제거)
const HOW_TO_STEPS = [
  { num: 1, title: "취향 입력", desc: "키워드를 입력합니다", color: "bg-blue-600" },
  { num: 2, title: "AI 분석", desc: "유사도를 계산합니다", color: "bg-purple-600" },
  { num: 3, title: "믹스 추천", desc: "5곡 리스트를 받습니다", color: "bg-pink-600" }
]

export default function MainPage({ userAData, userBData, setUserAData, setUserBData, onFuse }: MainPageProps) {
  
  // 💡 수정 3: 5칸 입력으로 되돌리므로, index를 사용한 변경 함수로 수정
  const handleUserAChange = (index: number, value: string) => {
    const newData = [...userAData];
    newData[index] = value;
    // 배열의 길이를 유지하면서 업데이트
    setUserAData(newData);
  }

  const handleUserBChange = (index: number, value: string) => {
    const newData = [...userBData];
    newData[index] = value;
    // 배열의 길이를 유지하면서 업데이트
    setUserBData(newData);
  }

  // 💡 수정 5: 더 친근하고 매력적인 예시 텍스트
  const INPUT_PLACEHOLDER = "좋아하는 아티스트, 곡, 또는 장르를 자유롭게 입력해 보세요";


  return (
    // 💡 수정 1: 헤더 상단 여백 제거 (pt-0 유지)
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pb-20 pt-0">
      
      {/* Header (여백 조정) */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="px-4 py-3">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <div className="text-center">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Friendship Fuse</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">두 사람의 취향을 음악으로 연결하세요</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-5 max-w-md mx-auto">
        
        {/* How-to Section (작동 방식) */}
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-900 shadow-sm">
          <h2 className="text-sm font-bold text-foreground mb-3 flex items-center">
            <span className="mr-2">🎵</span> 어떻게 작동하나요?
          </h2>

          {/* 💡 수정 2: V표시 아이콘 제거 및 숫자 적절한 위치 배치 */}
          <div className="flex justify-between space-x-2">
            {HOW_TO_STEPS.map((step, idx) => (
              <div key={idx} className="flex-1 text-center min-w-0 px-1 py-1 rounded-lg transition-all hover:bg-white/50 dark:hover:bg-slate-800/50">
                <div className={`w-6 h-6 mx-auto rounded-full ${step.color} text-white flex items-center justify-center text-xs font-bold mb-1.5`}>
                  {step.num}
                </div>
                <p className="text-xs font-semibold text-foreground truncate">{step.title}</p>
                <p className="text-[10px] text-muted-foreground hidden sm:block">{step.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* User A Section */}
        <Card className="border-2 border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="text-left flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-xs font-bold px-2 py-1 rounded">A</span>
              <div>
                <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200">User A</h2>
                <p className="text-[10px] text-muted-foreground">당신의 음악 취향</p>
              </div>
            </div>
          </div>

          <div className="px-4 pb-5 pt-1 space-y-3">
            {/* 💡 수정 3, 4: 5칸 입력 필드, 예시 텍스트 및 레이블 수정 */}
            {userAData.map((value, index) => (
              <div key={index}>
                <Input
                  // 첫째 줄만 예시 텍스트 표시
                  placeholder={index === 0 ? INPUT_PLACEHOLDER : ""} 
                  value={value}
                  onChange={(e) => handleUserAChange(index, e.target.value)}
                  className="h-11 text-base md:text-sm bg-slate-50 dark:bg-slate-950 border-slate-200 focus:border-blue-500 transition-all"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* User B Section */}
        <Card className="border-2 border-pink-200 dark:border-pink-900 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
          <div className="w-full px-4 py-4 flex items-center justify-between">
            <div className="text-left flex items-center gap-2">
              <span className="bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300 text-xs font-bold px-2 py-1 rounded">B</span>
              <div>
                <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200">User B</h2>
                <p className="text-[10px] text-muted-foreground">상대방의 음악 취향</p>
              </div>
            </div>
          </div>

          <div className="px-4 pb-5 pt-1 space-y-3">
            {/* 💡 수정 3, 4: 5칸 입력 필드, 예시 텍스트 및 레이블 수정 */}
            {userBData.map((value, index) => (
              <div key={index}>
                <Input
                  placeholder={index === 0 ? INPUT_PLACEHOLDER : ""}
                  value={value}
                  onChange={(e) => handleUserBChange(index, e.target.value)}
                  className="h-11 text-base md:text-sm bg-slate-50 dark:bg-slate-950 border-slate-200 focus:border-pink-500 transition-all"
                />
              </div>
            ))}
          </div>
        </Card>

        <div className="sticky bottom-4 pt-2 z-10">
          <Button
            onClick={onFuse}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-14 md:h-12 text-lg font-bold rounded-full shadow-xl shadow-purple-200 dark:shadow-none active:scale-95 transition-all"
          >
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            FUSE MIX 만들기
          </Button>
        </div>
      </div>
    </main>
  )
}