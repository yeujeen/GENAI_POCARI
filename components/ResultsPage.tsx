import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { AiResult } from '@/app/page';

// 매치 스코어 카운팅 애니메이션을 위한 유틸리티 함수
// 매치 스코어를 동적으로 표시하기 위해 'animateScore' 함수를 사용합니다.
const useAnimatedScore = (targetScore: number) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (targetScore === 0) {
      setAnimatedScore(0);
      return;
    }

    const duration = 1500; // 1.5초 동안 애니메이션
    const start = 0;
    const end = targetScore;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentScore = Math.floor(percentage * (end - start) + start);

      setAnimatedScore(currentScore);

      if (percentage < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetScore]);

  return animatedScore;
};

// 카드 컴포넌트
function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  // cn 함수는 ui/card.tsx에서 가져온다고 가정합니다.
  return <div className={`bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 ${className}`}>{children}</div>;
}

// 💡 ResultsPageProps 인터페이스 정의
interface ResultsPageProps {
  userAData: string[];
  userBData: string[];
  onReset: () => void;
  aiResult: AiResult | null;
}

export default function ResultsPage({ userAData, userBData, onReset, aiResult }: ResultsPageProps) {
  // AI 결과 데이터 추출 및 5곡으로 제한
  const fullPlaylist = aiResult?.playlist || [];
  const playlist = fullPlaylist.slice(0, 5); // 💡 5곡만 표시하도록 수정
  
  const targetSimilarity = aiResult?.similarity || 0;
  const animatedSimilarity = useAnimatedScore(targetSimilarity); // 💡 동적 애니메이션 훅 사용
  
  const playlistTitle = aiResult?.playlistTitle || "FUSE MIX 플레이리스트";
  const playlistDescription = aiResult?.playlistDescription || "두 분의 취향을 융합한 맞춤형 추천 곡입니다.";

  return (
    <div className="w-full max-w-lg mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 pt-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          {playlistTitle}
        </h1>
        {/* 💡 수정: 상단 텍스트만 표시 */}
        <p className="text-slate-500 text-sm">{playlistDescription}</p>
      </div>

      {/* Match Score Card (애니메이션 적용) */}
      <Card className="p-6 text-center border-2 border-purple-300 dark:border-purple-800 shadow-xl">
        <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4 tracking-wider uppercase">
          Match Score
        </div>
        {/* 💡 수정: 애니메이션 점수 표시 */}
        <div className="text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
          {animatedSimilarity}%
        </div>
        
        {/* 💡 수정: 매치 스코어 아래의 분석 텍스트 블록 제거 */}
        
        {/* 입력 요약 표시 */}
        <div className="flex justify-center gap-3 text-xs text-slate-500 mt-4">
          <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">A: {userAData.slice(0, 3).join(', ')}...</span>
          <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">B: {userBData.slice(0, 3).join(', ')}...</span>
        </div>
      </Card>


      {/* Playlist List */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center">
          {/* 💡 수정: 5곡 추천으로 문구 변경 */}
          <h2 className="font-semibold text-slate-900 dark:text-white">🎵 FUSE MIX 추천 5곡</h2>
          <span className="text-xs text-slate-400">Youtube Search</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {playlist.length > 0 ? (
            playlist.map((song, index) => (
              <a 
                key={index}
                // YouTube 검색 정확도 향상: 'Official MV' 키워드 추가
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(song.title + " " + song.artist + " Official MV")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-3.5 hover:bg-purple-50/50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-3 active:scale-[0.99] cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 group-hover:bg-purple-600 group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {song.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm truncate group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {song.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    {song.artist}
                  </p>
                  {/* 💡 수정: 추천 이유 설명 텍스트 제거 (song.reason) */}
                </div>
              </a>
            ))
          ) : (
            <div className="p-4 text-center text-slate-500">추천 플레이리스트가 없습니다.</div>
          )}
        </div>
      </Card>
      
      {/* Reset Button */}
      <button 
        onClick={onReset} 
        className="w-full py-3 mt-8 flex items-center justify-center gap-2 text-slate-500 font-semibold hover:text-purple-600 transition-colors text-sm"
      >
        <RefreshCw className="w-4 h-4" />
        처음으로 돌아가기
      </button>
    </div>
  );
}