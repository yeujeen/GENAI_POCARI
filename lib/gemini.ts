// lib/gemini.ts

import { GoogleGenAI } from '@google/genai';

// Gemini 클라이언트를 초기화하는 함수
export function getGeminiClient() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error("GEMINI_API_KEY 환경 변수가 설정되지 않았습니다. .env 파일을 확인하세요.");
    }

    return new GoogleGenAI({ apiKey });
}