import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "");

export async function POST(request: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json({ error: "API Key가 설정되지 않았습니다." }, { status: 500 });
    }

    const { userAData, userBData } = await request.json();

    // ✅ [정정] 2025년 12월 기준 최신 표준 모델은 'gemini-2.5-flash' 입니다.
    // 선생님의 통찰력이 맞았습니다!
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
      generationConfig: { responseMimeType: "application/json" } 
    });

    const prompt = `
      당신은 'Friendship Fuse'의 AI 음악 전문 큐레이터입니다.
      
      [입력 데이터]
      User A 취향: ${userAData.join(", ")}
      User B 취향: ${userBData.join(", ")}

      [지시 사항]
      1. **언어:** 모든 분석 내용과 설명은 반드시 **'자연스러운 한국어'**로 작성하세요. (노래 제목과 가수명은 원어 그대로 유지)
      2. **분석:** 두 사람의 취향을 분석하여 공통된 무드와 키워드를 찾아내세요.
      3. **추천:** 두 사람 모두 만족할만한 플레이리스트를 **정확히 5곡** 엄선하여 추천하세요. 3곡이나 10곡이 아닙니다. 무조건 5곡입니다.

      [출력 JSON 형식]
      반드시 아래 형식을 지키세요.
      {
        "playlistTitle": "한국어 제목 (예: 감성적인 새벽 드라이브)",
        "playlistDescription": "이 플레이리스트를 추천하는 이유와 분위기를 설명하는 한국어 문장 (2~3문장)",
        "similarity": 85 (0~100 사이 숫자),
        "similarityReason": "점수 부여 사유 (한국어)",
        "fuseColor": { "primary": "#Hex", "secondary": "#Hex", "background": "#Hex" },
        "keywords": ["키워드1", "키워드2", "키워드3"],
        "playlist": [
          { "rank": 1, "title": "곡 제목", "artist": "가수", "reason": "추천 이유 (한국어)" },
          { "rank": 2, "title": "곡 제목", "artist": "가수", "reason": "추천 이유 (한국어)" },
          // ... 반드시 10개가 되도록 채우세요 ...
          { "rank": 10, "title": "곡 제목", "artist": "가수", "reason": "추천 이유 (한국어)" }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // JSON 파싱 (안전장치)
    let jsonResponse;
    try {
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        jsonResponse = JSON.parse(cleanedText);
    } catch (e) {
        console.error("JSON 파싱 실패:", text);
        throw new Error("AI 응답을 JSON으로 변환하지 못했습니다.");
    }

    return NextResponse.json(jsonResponse);

  } catch (error: any) {
    console.error("Gemini API Error (Server):", error);
    return NextResponse.json(
      { error: error.message || "AI 서버 오류 발생" },
      { status: 500 }
    );
  }
}