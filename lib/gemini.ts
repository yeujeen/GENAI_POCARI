// lib/gemini.ts

import { GoogleGenAI } from '@google/genai';

// Gemini 클라이언트를 초기화하는 함수
export function getGeminiClient() {
    // process.env를 통해 환경 변수를 읽어옵니다.
    const apiKey = process.env.GEMINI_API_KEY;

    // 🚨 [임시 디버깅 코드 시작]
    // 이 코드를 추가한 후 서버를 재시작하고 터미널의 출력을 확인하세요.
    console.log("--- ENV CHECK START ---");
    console.log("process.env.GEMINI_API_KEY:", apiKey ? "🔑 로드 성공 (Key is present)" : "❌ 로드 실패 (Key is missing)"); 
    console.log("--- ENV CHECK END ---");
    // 🚨 [임시 디버깅 코드 끝]

    if (!apiKey) {
        throw new Error("GEMINI_API_KEY 환경 변수가 설정되지 않았습니다. .env 파일을 확인하세요.");
    }

    return new GoogleGenAI({ apiKey });
}