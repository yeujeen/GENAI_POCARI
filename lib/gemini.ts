// lib/gemini.ts

import { GoogleGenAI } from '@google/genai';

// 서버 환경 변수에서 API 키를 읽어옵니다.
const apiKey = process.env.GEMINI_API_KEY; 

if (!apiKey) {
    // API 키가 설정되지 않았다면 명확한 오류를 던집니다.
    throw new Error("GEMINI_API_KEY 환경 변수가 설정되지 않았습니다. .env.local 파일을 확인하세요.");
}

// Gemini 클라이언트를 초기화하고 내보냅니다.
export const gemini = new GoogleGenAI({ apiKey });