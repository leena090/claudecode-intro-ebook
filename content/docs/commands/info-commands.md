---
title: "정보 확인 명령어"
description: "Claude Code 사용 현황, 비용, 통계를 한눈에 파악하기"
category: "commands"
order: 4
tags: ["정보", "통계", "비용", "명령어"]
lastUpdated: "2026-03-22"
---

> 📅 최종 업데이트: 2026년 3월 22일

## 정보 확인이 왜 중요한가?

Claude Code를 사용하면서 궁금한 점들이 많아요:
- "지금까지 얼마나 썼을까?"
- "현재 어떤 모델을 쓰고 있지?"
- "컨텍스트가 얼마나 남았지?"

이런 정보를 확인하는 명령어들입니다.

---

## 정보 확인 명령어 7가지

### 1️⃣ `/status` — 현재 상태 한눈에 보기

```bash
/status
```

**역할:** Claude Code의 현재 상태를 모두 표시

<div class="note-circle">
○ 가장 많이 사용하는 정보 확인 명령어입니다
</div>

**표시되는 정보:**
- 현재 사용 중인 AI 모델
- 현재 세션 이름
- 토큰 사용량 (지금까지 사용한 데이터 양)
- 남은 크레딧 (유료 사용자)
- 응답 시간 (얼마나 빠른가)

**사용 예시:**
```bash
/status

→ 결과:
Model: claude-sonnet
Session: 파이썬 배우기
Tokens Used: 2,450 / 4,000
Credits: $5.20
Response Time: 1.2s
```

**언제 사용할까?**
- 비용이 얼마나 들고 있는지 확인할 때
- 현재 모델이 맞는지 확인할 때
- 응답이 느린 이유를 조사할 때

---

### 2️⃣ `/cost` — 비용 내역 상세 보기

```bash
/cost
```

**역할:** 비용 사용 내역을 상세하게 표시

<mark>요금 결제를 하는 사용자라면 정기적으로 확인해야 합니다</mark>

**표시되는 정보:**
- 오늘 사용 비용
- 이번 주 총 비용
- 이번 달 총 비용
- 모델별 비용 분석
- 추정 남은 크레딧

**사용 예시:**
```bash
/cost

→ 결과:
Today: $0.45
This Week: $3.20
This Month: $12.50
Claude-Opus: $5.00
Claude-Sonnet: $7.50
```

**절약 팁:**
- 빠른 작업은 `claude-haiku` 사용
- `/compact`로 대화 압축해 토큰 줄이기
- 불필요한 맥락은 `/clear`로 제거

---

### 3️⃣ `/usage` — 사용량 통계 보기

```bash
/usage
```

**역할:** 토큰 사용량, 대화 횟수 등의 상세 통계

**표시되는 정보:**
- 총 토큰 사용량
- 입력 토큰 vs 출력 토큰 비율
- 평균 응답 길이
- 총 대화 횟수
- 가장 많이 사용한 모델

**사용 예시:**
```bash
/usage

→ 결과:
Total Tokens: 15,240
Input Tokens: 3,500
Output Tokens: 11,740
Average Response: 2.8s
Total Conversations: 24
Top Model: Claude-Sonnet
```

**활용 방법:**
- 어떤 모델을 가장 많이 썼는지 알기
- 평균 응답 시간 확인
- 비용 최적화 계획 세우기

---

### 4️⃣ `/stats` — 종합 통계 보기

```bash
/stats
```

**역할:** 사용 패턴과 추세를 종합적으로 분석

**표시되는 정보:**
- 이번 주/달/년 트렌드
- 가장 활발한 사용 시간
- 주로 사용하는 기능
- 평균 세션 길이
- 성공률

**사용 예시:**
```bash
/stats

→ 결과:
Most Active: Weekday 2PM-4PM
Avg Session Length: 15 minutes
Feature Usage:
  - Code Writing: 45%
  - Explanation: 30%
  - Debug: 25%
Success Rate: 94%
```

---

### 5️⃣ `/context` — 컨텍스트 정보 보기

```bash
/context
```

**역할:** 현재 대화의 메모리 상태 확인

<div class="note-circle">
○ "컨텍스트(Context)"는 AI가 기억하고 있는 정보를 뜻합니다
</div>

**표시되는 정보:**
- 현재 로드된 메모리 크기
- 최근 메시지 개수
- 총 토큰 수
- 남은 컨텍스트 윈도우 (더 입력할 수 있는 여유)

**사용 예시:**
```bash
/context

→ 결과:
Memory Loaded: 2.4 KB
Recent Messages: 12
Total Tokens: 850
Remaining Window: 3,150 tokens
```

**언제 사용할까?**
- 대화가 너무 길어졌을 때 (`/compact`로 압축 검토)
- AI가 이전 내용을 기억하지 못할 때
- 메모리 정리가 필요할 때

---

### 6️⃣ `/doctor` — 진단 및 건강 체크

```bash
/doctor
```

**역할:** Claude Code의 현재 상태를 진단

<mark>문제가 있는지 자동으로 확인해줍니다</mark>

**진단 항목:**
- 네트워크 연결 상태
- API 응답 시간
- 메모리 사용량
- 파일 시스템 접근
- 권한 설정

**사용 예시:**
```bash
/doctor

→ 결과:
Network: ✓ OK
API Response: ✓ Normal (1.2s)
Memory: ✓ Good (64%)
File Access: ✓ Allowed
Permissions: ✓ Configured
All Systems Nominal!
```

**문제가 있으면:**
```
Network: ✗ Slow (connection latency)
API Response: ✗ Timeout
Suggestion: Check internet connection
```

---

### 7️⃣ `/help` — 모든 명령어 도움말 보기

```bash
/help
```

**역할:** 사용 가능한 모든 명령어의 목록과 설명 표시

**표시되는 정보:**
- 모든 슬래시 커맨드 목록
- 각 명령어의 짧은 설명
- 사용 방법
- 예시

**사용 예시:**
```bash
/help

→ 결과:
COMMANDS:
/clear     - Clear conversation history
/status    - Show current status
/model     - Change AI model
/help      - Show this help message
... (모든 명령어 목록)
```

**언제 사용할까?**
- 명령어 기억이 안 날 때 (가장 흔함)
- 새로운 기능을 알고 싶을 때
- 명령어 문법을 확인하고 싶을 때

---

## 📊 정보 확인 명령어 비교

어떤 명령어를 언제 쓸까요?

| 명령어 | 용도 | 사용 시기 |
|--------|------|----------|
| `/status` | 빠른 상태 확인 | 매번 시작할 때 |
| `/cost` | 비용 상세 보기 | 주 1회 (비용 체크) |
| `/usage` | 통계 분석 | 월 1회 (패턴 분석) |
| `/stats` | 추세 분석 | 월 1회 (최적화 검토) |
| `/context` | 메모리 상태 | 대화가 길어질 때 |
| `/doctor` | 문제 진단 | 뭔가 안 될 때 |
| `/help` | 명령어 확인 | 명령어 까먹었을 때 |

---

## 💡 쉽게 이해하기

### 정보 확인을 운전면허 검사로 비유하면?

Claude Code의 정보 확인 명령어는 **차량 검사소의 각종 검진**과 같습니다:

- **`/status`** = 간단한 외관 점검 (빨리 끝남)
- **`/cost`** = 유지비 내역 확인
- **`/usage`** = 상세한 정비 기록 확인
- **`/stats`** = 주기적인 성능 테스트
- **`/context`** = 연료/배터리 상태 확인
- **`/doctor`** = 종합 점검 (뭔가 문제 있을 때)
- **`/help`** = 검사 가이드북

### 예를 들어...

**상황 1: 요금이 걱정될 때**
```bash
> 이번 달에 얼마나 썼을까?
/cost
→ 이번 달: $12.50 (예상치보다 적음, 안심)
```

**상황 2: 응답이 느릴 때**
```bash
> 왜 응답이 이렇게 느려?
/doctor
→ API Response: ✗ Timeout
→ 인터넷 연결 확인 필요
```

**상황 3: 대화가 너무 길어졌을 때**
```bash
> AI가 예전 내용을 자꾸 까먹어...
/context
→ Remaining Window: 200 tokens (거의 다 찼음)
→ /compact로 압축하거나 /clear로 초기화
```

---

## 정보 확인의 실용 팁

### 매일 확인하기
```bash
/status
(세션 시작 시 - 30초)
```

### 주 1회 비용 검토
```bash
/cost
(월요일 아침 - 가계부 같은 느낌)
```

### 월 1회 최적화 검토
```bash
/stats
(월말 - 지난달 패턴 분석)
```

### 문제 발생 시
```bash
/doctor
(뭔가 안 될 때 - 자동 진단)
```

---

## 다음 단계

정보 확인 명령어를 배웠습니다!

다음으로 배울 명령어:
- **파일 & 코드 명령어** — 작업을 더 효율적으로
- **특수 명령어** — 고급 기능 활용하기
