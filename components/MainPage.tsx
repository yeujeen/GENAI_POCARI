"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sparkles, ChevronDown } from "lucide-react"
import { useState } from "react"

interface MainPageProps {
  userAData: string[]
  userBData: string[]
  setUserAData: (data: string[]) => void
  setUserBData: (data: string[]) => void
  onFuse: () => void
}

export default function MainPage({ userAData, userBData, setUserAData, setUserBData, onFuse }: MainPageProps) {
  const [expandedUserA, setExpandedUserA] = useState(true)
  const [expandedUserB, setExpandedUserB] = useState(true)

  const handleUserAChange = (index: number, value: string) => {
    const newData = [...userAData]
    newData[index] = value
    setUserAData(newData)
  }

  const handleUserBChange = (index: number, value: string) => {
    const newData = [...userBData]
    newData[index] = value
    setUserBData(newData)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="px-4 py-3">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <div className="text-center">
              <h1 className="text-xl font-bold text-foreground">Friendship FUSE</h1>
              <p className="text-xs text-muted-foreground">두 사람의 취향을 음악으로 연결하세요</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-4">
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-900">
          <h2 className="text-base font-bold text-foreground mb-3">어떻게 작동하나요?</h2>

          <div className="space-y-3">
            {/* Step 1 */}
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">취향 입력</p>
                <p className="text-xs text-muted-foreground">User A와 B의 음악 취향을 입력하세요</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">AI 분석</p>
                <p className="text-xs text-muted-foreground">두 사람의 취향 유사도를 계산합니다</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">플레이리스트 생성</p>
                <p className="text-xs text-muted-foreground">맞춤형 10곡 플레이리스트를 추천합니다</p>
              </div>
            </div>
          </div>
        </Card>

        {/* User A Section - Collapsible */}
        <Card className="border-2 border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 overflow-hidden">
          <button
            onClick={() => setExpandedUserA(!expandedUserA)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors active:scale-95"
          >
            <div className="text-left">
              <h2 className="text-base font-bold text-blue-600 dark:text-blue-400">User A</h2>
              <p className="text-xs text-muted-foreground">당신이 좋아하는 음악</p>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${expandedUserA ? "rotate-180" : ""}`} />
          </button>

          {expandedUserA && (
            <div className="px-4 py-4 border-t border-blue-100 dark:border-blue-900 space-y-3">
              {userAData.map((value, index) => (
                <div key={index}>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">선호 항목 {index + 1}</label>
                  <Input
                    placeholder={`예: 아이유, 팝, 발라드...`}
                    value={value}
                    onChange={(e) => handleUserAChange(index, e.target.value)}
                    className="h-10 text-sm"
                  />
                </div>
              ))}

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-900">
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  💡 팁: 좋아하는 아티스트, 장르, 분위기를 입력해주세요
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* User B Section - Collapsible */}
        <Card className="border-2 border-pink-200 dark:border-pink-900 bg-white dark:bg-slate-900 overflow-hidden">
          <button
            onClick={() => setExpandedUserB(!expandedUserB)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors active:scale-95"
          >
            <div className="text-left">
              <h2 className="text-base font-bold text-pink-600 dark:text-pink-400">User B</h2>
              <p className="text-xs text-muted-foreground">상대방이 좋아하는 음악</p>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${expandedUserB ? "rotate-180" : ""}`} />
          </button>

          {expandedUserB && (
            <div className="px-4 py-4 border-t border-pink-100 dark:border-pink-900 space-y-3">
              {userBData.map((value, index) => (
                <div key={index}>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">선호 항목 {index + 1}</label>
                  <Input
                    placeholder={`예: 뉴진스, 인디, 힙합...`}
                    value={value}
                    onChange={(e) => handleUserBChange(index, e.target.value)}
                    className="h-10 text-sm"
                  />
                </div>
              ))}

              <div className="mt-4 p-3 bg-pink-50 dark:bg-pink-950/30 rounded-lg border border-pink-100 dark:border-pink-900">
                <p className="text-xs text-pink-600 dark:text-pink-400">💡 팁: 상대방의 음악 취향을 입력해주세요</p>
              </div>
            </div>
          )}
        </Card>

        <div className="flex justify-center pt-2">
          <Button
            onClick={onFuse}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-base font-bold rounded-full shadow-lg active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            FUSE!
          </Button>
        </div>
      </div>
    </main>
  )
}
