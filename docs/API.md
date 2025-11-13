# API 명세

## POST /api/fuse

* **설명:** 두 사용자의 취향 데이터를 받아 FUSE Mix 결과를 반환합니다.
* **Request Body:**

```json
{
  "userA": ["아이유", "태연", "찰리 푸스", "K-Pop", "팝"],
  "userB": ["요아소비", "찰리 푸스", "J-Pop", "팝", "신나는"]
}

Response Body (Success):

JSON

{
  "similarity": 45,
  "mixTitle": "서울과 도쿄의 감성 교차로",
  "mixDescription": "두 분의 '팝'과 '찰리 푸스' 사랑이 만났네요!",
  "playlist": [
    { "artist": "찰리 푸스", "title": "Attention" },
    { "artist": "아이유", "title": "Love wins all" },
    { "artist": "요아소비", "title": "Idol" },
    // ... (총 10곡)
  ],
  "visualization": {
    "vennData": { "A": 10, "B": 10, "AB": 5 } // 벤 다이어그램 생성용 데이터
  }
}