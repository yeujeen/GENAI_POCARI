// app/page.tsx

"use client"

import { useState } from "react"
import MainPage from "@/components/MainPage"
import ResultsPage from "@/components/ResultsPage" 

export default function Home() {
// ... 나머지 코드
  const [currentPage, setCurrentPage] = useState<"main" | "results">("main")
  const [userAData, setUserAData] = useState<string[]>(["", "", "", "", ""])
  const [userBData, setUserBData] = useState<string[]>(["", "", "", "", ""])

  const handleFuse = () => {
    if (userAData.some((item) => item.trim()) && userBData.some((item) => item.trim())) {
      setCurrentPage("results")
    }
  }

  const handleReset = () => {
    setCurrentPage("main")
    setUserAData(["", "", "", "", ""])
    setUserBData(["", "", "", "", ""])
  }

  return (
    <div className="min-h-screen bg-background">
      {currentPage === "main" ? (
        <MainPage
          userAData={userAData}
          userBData={userBData}
          setUserAData={setUserAData}
          setUserBData={setUserBData}
          onFuse={handleFuse}
        />
      ) : (
        <ResultsPage userAData={userAData} userBData={userBData} onReset={handleReset} />
      )}
    </div>
  )
}
