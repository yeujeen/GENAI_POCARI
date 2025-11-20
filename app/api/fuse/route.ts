// app/api/fuse/route.ts
import { getGeminiClient } from '@/lib/gemini';
import { NextRequest, NextResponse } from 'next/server';

// AI가 반환할 플레이리스트 데이터의 타입 정의
interface PlaylistTrack {
    rank: number;
    title: string;
    artist: string;
}
interface FuseMixResponse {
    playlistTitle: string;
    playlistDescription: string;
    similarity: number;
    playlist: PlaylistTrack[];
}

// POST 요청 처리 (클라이언트로부터 데이터 받기)
export async function POST(request: NextRequest) {
  try {
    // 1. 요청 본문(Body)에서 userAData와 userBData를 추출
    const { userAData, userBData } = await request.json();

    if (!userAData || !userBData) {
      return NextResponse.json({ error: "두 사용자의 취향 데이터가 필요합니다." }, { status: 400 });
    }
    
    // 빈 값 제거 및 데이터 형식 정리
    const userATastes = userAData.filter((item: string) => item.trim() !== "").join(', ');
    const userBTastes = userBData.filter((item: string) => item.trim() !== "").join(', ');


    // 2. 🧠 Gemini에게 전달할 프롬프트 구성
    const prompt = `
      당신은 두 사용자의 음악 취향을 분석하고 공통점을 찾아 최적의 공동 플레이리스트를 생성하는 AI 큐레이터입니다.
      
      User A의 선호 취향: [${userATastes}]
      User B의 선호 취향: [${userBTastes}]
      
      요구 사항:
      1. 두 취향을 아우르는 **'FUSE MIX' 플레이리스트 10곡**을 생성하세요.
      2. 두 취향이 얼마나 잘 섞이는지 **유사도(Similarity)를 30에서 85 사이의 퍼센트(%) 값**으로 추정하세요.
      3. 플레이리스트에 어울리는 **제목(playlistTitle)**과 **설명(playlistDescription)**을 만들어주세요.
      4. 응답은 반드시 다음 TypeScript 인터페이스에 맞는 **JSON 형식**으로만 반환해야 합니다.

      interface FuseMixResponse {
          playlistTitle: string;
          playlistDescription: string;
          similarity: number;
          playlist: { rank: number; title: string; artist: string }[];
      }
    `;

    // 3. Gemini API 호출
    const gemini = getGeminiClient();

    const result = await gemini.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.8,
      }
    });

    const responseText = await result.text;

    console.log("--- RAW GEMINI RESPONSE TEXT ---");
    console.log(responseText);
    console.log("----------------------------------");

    // 4. Gemini 응답 파싱 및 반환
    if (!responseText || responseText.trim() === '') {
      throw new Error('Gemini API로부터 빈 응답을 받았습니다.');
    }

    const fuseMix: FuseMixResponse = JSON.parse(responseText);

    return NextResponse.json(fuseMix, { status: 200 });

  } catch (error) {
    console.error("[API_FUSE_ERROR]: 서버 내부 오류 발생");
    // 🚨 오류 객체 자체를 출력하여 원인을 진단
    console.error(error); 
    
    // 개발 편의를 위해 오류 메시지를 자세히 반환
    return NextResponse.json(
      { error: "AI 플레이리스트 생성 중 서버 오류 발생. 콘솔 로그를 확인하세요." }, 
      { status: 500 }
    );
  }
}