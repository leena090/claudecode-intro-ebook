---
title: "정보 확인 명령어"
description: "Claude Code 사용 현황, 비용, 통계를 한눈에 파악하기 (/usage 한도 유발 요인 분석 및 /cost·/stats 통합 반영)"
category: "commands"
order: 4
tags: ["정보", "통계", "비용", "명령어"]
lastUpdated: "2026-04-27"
---

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

### 2️⃣ `/cost` — 비용 내역 상세 보기 (⭐ v2.1.92 + v2.1.119 통합)

```bash
/cost
```

**역할:** 비용 사용 내역을 상세하게 표시

<mark>요금 결제를 하는 사용자라면 정기적으로 확인해야 합니다</mark>

<div class="note-star">
★ <strong>v2.1.92 업데이트</strong>: 구독 사용자에게 <strong>모델별 + 캐시 히트율</strong>이 분리되어 상세 표시됩니다.
<br />★ <strong>v2.1.119 업데이트</strong>: <code>/cost</code>는 <code>/usage</code>에 통합됐어요. <code>/cost</code>를 입력하면 자동으로 <code>/usage</code>의 cost 탭으로 이동합니다.
</div>

**표시되는 정보 (v2.1.92+):**
- 오늘 / 이번 주 / 이번 달 사용 비용
- **모델별 세부 내역** — Opus 4.7 / Sonnet 4.6 / Haiku 4.5 각각
- **캐시 히트율** — 프롬프트 캐시로 절약한 비율
- 추정 남은 크레딧

**사용 예시:**
```bash
/cost

→ 결과 (v2.1.92 포맷):
Today: $0.45  (cache saved: 32%)
This Week: $3.20  (cache saved: 28%)
This Month: $12.50

Models:
  claude-opus-4-6:    $5.00  (cache hit: 45%)
  claude-sonnet-4-6:  $7.50  (cache hit: 22%)
  claude-haiku-4-5:   $0.00
```

> 🍱 **캐시 히트율이 뭔가요?** 같은 질문·같은 파일을 여러 번 봤을 때, Claude가 기억하고 있던 걸 재활용한 비율이에요. 높을수록 돈이 절약돼요. 식당에서 같은 메뉴를 여러 번 시킬 때 주방에서 미리 재료를 준비해두는 것과 비슷해요.

**절약 팁:**
- 빠른 작업은 Haiku 4.5 사용 (`/model claude-haiku-4-5`)
- `/compact`로 대화 압축해 토큰 줄이기
- 불필요한 맥락은 `/clear`로 제거
- **캐시 히트율이 낮다면** → 대화를 자주 초기화하지 말고 한 세션을 길게 쓰기

---

### 3️⃣ `/usage` — 사용량 + 한도 유발 요인 분석 (⭐ v2.1.116 대폭 개선)

```bash
/usage
```

**역할:** 토큰 사용량·비용·통계를 통합해서 보여주고, **무엇이 내 한도를 잡아먹고 있는지** 분석

<div class="note-star">
★ <strong>2026-04-22 v2.1.116 업데이트</strong>: 이제 <code>/usage</code>가 단순 통계를 넘어 <strong>한도 유발 요인을 항목별로 분석</strong>해줍니다. 병렬 세션·서브에이전트·캐시 미스·긴 컨텍스트 중 뭐가 사용량을 끌어올리는지 퍼센트와 함께 표시해요.
<br />★ <strong>v2.1.119 업데이트</strong>: <code>/cost</code>와 <code>/stats</code>가 <code>/usage</code>에 통합됐어요. 옛날 이름으로 입력하면 해당 탭으로 바로 이동합니다.
</div>

> 🍱 **비유로 설명하면**: 예전엔 "이번 달 전기요금: 45,000원" 처럼 총액만 보여줬다면, 이제는 "에어컨 35%, 냉장고 20%, TV 15%, 세탁기 10%..." 처럼 **무엇이 얼마나 쓰는지**를 항목별로 알려줘요.

**표시되는 정보 (v2.1.116+):**
- **한도 유발 요인 분석** — 병렬 세션 / 서브에이전트 / 캐시 미스 / 긴 컨텍스트 (각 항목별 퍼센트)
- 최적화 팁 (항목별 절약 방법 제안)
- 비용·통계 탭 (기존 /cost, /stats 내용 포함)

**키 단축키:**
- `d` → 일간 뷰로 전환
- `w` → 주간 뷰로 전환

**사용 예시:**
```bash
/usage

→ 결과 (v2.1.116 포맷):
Usage breakdown (last 24h)
────────────────────────────
Parallel sessions   38%  ↑ Tip: use /resume instead of opening new sessions
Subagents           27%  ↑ Tip: set maxSubagents for long-running tasks
Cache misses        22%  ↑ Tip: keep sessions open longer to improve cache reuse
Long context        13%

/cost 탭 → 비용 상세
/stats 탭 → 사용 패턴 분석
```

**언제 사용할까?**
- 사용량 한도에 자주 부딪힐 때 (원인 파악)
- 비용이 갑자기 올랐을 때
- 최적화 방법을 알고 싶을 때

---

### 4️⃣ `/stats` — 종합 통계 보기 (→ 이제 `/usage` 안에 통합)

```bash
/stats
(또는 /usage 입력 후 stats 탭 선택)
```

<div class="note-circle">
○ <strong>v2.1.119부터 <code>/stats</code>는 <code>/usage</code>의 탭으로 통합됐어요.</strong> 기존처럼 <code>/stats</code>를 입력해도 작동하지만, 실제로는 <code>/usage</code>를 열고 stats 탭으로 이동합니다.
</div>

**역할:** 사용 패턴과 추세를 종합적으로 분석

**표시되는 정보:**
- 가장 활발한 사용 시간
- 주로 사용하는 기능
- 평균 세션 길이

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
| `/cost` | 비용 상세 보기 → `/usage` cost 탭 | 주 1회 (비용 체크) |
| `/usage` | **한도 유발 요인 분석 + 통계** | 한도 문제 생길 때·주 1회 |
| `/stats` | 추세 분석 → `/usage` stats 탭 | 월 1회 (최적화 검토) |
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
