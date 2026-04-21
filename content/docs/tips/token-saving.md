---
title: "Claude Code 토큰 절약 — 6가지 무기 + 추천 전략"
description: "/btw, 플랜 모드, /ultraplan, /rewind, /compact, /session-handoff — Claude Code 토큰 절약의 6가지 핵심 무기와 조합 전략"
tags: ["토큰", "비용", "절약", "컨텍스트관리", "ultraplan", "rewind", "compact", "btw", "플랜모드", "session-handoff"]
category: "tips"
order: 4
lastUpdated: "2026-04-21"
---


## 이 챕터는 Claude Code (터미널) 전용이에요

<div class="callout insight">
<div class="callout-head"><span class="stamp">🎯</span>대상 독자</div>
<p>이 챕터는 <strong>Claude Code CLI 구독자</strong>(터미널에서 <code>claude</code> 실행해 쓰는 분)를 위한 거예요. claude.ai 웹앱·데스크탑 앱 사용자라면 <a href="/docs/tips/token-saving-web-cowork">웹·코워크·아티팩트 토큰 절약</a> 챕터로 가세요.</p>
</div>

---

## 먼저 현황부터 — `/cost`

Claude Code 안에서 언제든 현재 세션의 사용량을 확인할 수 있어요.

```
/cost
```

출력 예시 (v2.1.92+):
```
Models:
  claude-opus-4-7:    $5.00   (cache hit: 78%)   ← 캐시 히트율이 핵심
  claude-sonnet-4-6:  $7.50   (cache hit: 45%)
Context: 47% used · Session: 28m
```

**캐시 히트율 70%↑** = 건강 / **40% 미만** = 캐시 계속 깨지는 중 → 대응 필요

---

## 📋 6가지 핵심 무기 (상황별 선택)

Claude Code에는 **토큰/컨텍스트를 아끼기 위한 6가지 내장 무기**가 있어요. 각각 쓰임새가 다르니 상황에 맞게 꺼내 쓰세요.

| # | 무기 | 어떤 상황에? | 효과 |
|---|---|---|---|
| 1 | **`/btw`** | 작업 중 잠깐 딴 질문 할 때 | 메인 기록 안 남김 → 최대 50% 절감 |
| 2 | **플랜 모드** | 복잡한 작업 시작 전 | 헛걸음 방지로 "잘못된 코드" 토큰 0 |
| 3 | **`/ultraplan`** | 아주 큰 계획 수립 | 로컬 터미널 컨텍스트 소비 **0** |
| 4 | **`/rewind`** | 잘못된 방향 갔을 때 | 실패 경로 통째로 증발 |
| 5 | **`/compact`** | 긴 대화 정리 | 앞부분 요약해서 공간 확보 |
| 6 | **`/session-handoff`** | 세션 종료·이관 | 다음 세션에서 0부터 재개 안 해도 됨 |

---

### 1️⃣ `/btw` — 사이드 질문 (기록 안 남김)

Claude가 한창 코드 짜고 있는데 갑자기 **"잠깐, 이거 뭐였지?"** 궁금해진 적 있죠. 평소처럼 물으면 그 질문·답변이 **메인 대화 기록에 그대로 남아서** 이후 모든 턴에서 재처리됩니다. 컨텍스트 오염.

`/btw`는 이걸 **오버레이로 답변**만 받고 기록에 안 남겨요.

```bash
❌ 나쁜 예 (메인 오염)
> (Claude가 인증 기능 만드는 중)
> 잠깐, JWT가 정확히 뭐였지?
→ 이 질의응답이 계속 컨텍스트로 누적됨

✅ 좋은 예 (오염 없음)
> /btw JWT가 정확히 뭔가요?
→ 답변만 보고 기록엔 안 남음
```

<div class="note-circle">
○ <strong>토큰 절감 효과</strong>: 공식 안내 기준 최대 <strong>50%</strong>. 사이드 질문을 많이 하는 분일수록 효과 큼.
<br />○ 비슷한 친척: <code>/fork</code>(분기해서 다른 접근 시도) / <code>/rewind</code>(되돌리기)
</div>

→ 상세: [/btw + /fork + /rewind 3종 세트](/docs/tips/btw-side-questions)

---

### 2️⃣ 플랜 모드 — 코드 쓰기 전 설계

**Shift+Tab 두 번** 또는 `claude --permission-mode plan`으로 시작하면 플랜 모드 진입. 이 모드에서는:

- Claude가 **파일 수정·실행 권한 없음** — 오직 "읽고 설계"만
- 내가 승인하기 전까지 코드 한 줄도 안 바뀜
- 복잡한 작업일수록 **시작 전에 Claude와 계획 맞추기** → 잘못된 방향 출발 차단

#### 토큰 절약 관점

**"잘못 짠 코드 디버깅" = 가장 비싼 토큰 낭비**예요. 플랜 모드는 이걸 원천 차단:

- ❌ 바로 코드 → 틀림 → 수정 → 또 틀림 → 디버깅 (컨텍스트 10배 팽창)
- ✅ 플랜 모드로 먼저 합의 → 한 번에 올바른 방향 → 작은 수정만

#### 사용 예

```bash
# 새 기능 설계용 세션
claude --permission-mode plan

> 결제 모듈을 Stripe에서 Toss로 이전하는 계획을 짜줘.
> 영향받는 파일, 테스트 순서, 롤백 전략까지.
```

Claude가 플랜만 작성 → 내가 확인 → 승인 후 실행.

→ 상세: [권한 모드 가이드](/docs/advanced/permission-modes)

---

### 3️⃣ `/ultraplan` — 클라우드로 계획 위임 ⭐ (신기능, v2.1.91+)

**2026년 3월 공개된 공식 research preview 기능**이에요. 플랜 모드의 업그레이드판인데 **가장 강력한 토큰 절약** 무기입니다.

#### 뭐가 다른가?

일반 플랜 모드는 **내 로컬 터미널의 컨텍스트**를 쓰지만, `/ultraplan`은:

- 계획을 **Anthropic 클라우드 세션**에서 짜게 위임
- 내 로컬 터미널 컨텍스트 **0 소비** — 다른 작업과 병행 가능
- 브라우저에서 **섹션별 인라인 코멘트·이모지 리액션**으로 정밀 검토
- 승인 후 **터미널로 텔레포트**해서 실행 가능

#### 사용법 3가지

```bash
# 1. 명시적 커맨드
/ultraplan Stripe → Toss 결제 이전 계획 짜줘

# 2. 키워드만 끼워 넣기
> ultraplan 으로 인증 리팩토링 계획 세워줘

# 3. 로컬 플랜 승인 창에서 "Refine with Ultraplan" 선택
# (플랜 모드로 시작했다가 더 정교하게 다듬고 싶을 때)
```

#### 진행 상태 표시

프롬프트 입력 아래에 상태 표시자가 뜹니다.

| 표시 | 의미 |
|---|---|
| `◇ ultraplan` | 클라우드에서 코드 탐색·플랜 작성 중 |
| `◇ ultraplan needs your input` | 질문 있음 — 브라우저에서 응답 필요 |
| `◆ ultraplan ready` | 플랜 완성 — 브라우저에서 검토 |

#### 완성 후 3가지 선택

브라우저에서 플랜 승인 시:

- **Execute on the web** — 클라우드 세션에서 바로 구현 + PR 생성
- **Teleport back to terminal** — 내 터미널로 플랜 전송 → `Implement here` / `Start new session` / `Cancel(파일 저장)` 중 선택

#### 필요 조건

- Claude Code v2.1.91+
- **Claude Code on the web** 계정 (Pro/Max/Team/Enterprise)
- **GitHub 레포** 연결 필수
- Anthropic 클라우드만 (Bedrock/Vertex/Foundry 불가)

<div class="callout insight">
<div class="callout-head"><span class="stamp">💰</span>왜 이게 최강 토큰 절약인가</div>
<p>"큰 계획 수립"은 원래 가장 비싼 작업이에요 — 전체 코드베이스 훑고, 영향도 분석하고, 순서 정하고… Ultraplan은 이 무거운 작업을 <strong>내 5시간 한도 밖</strong>(클라우드 쿼터)에서 처리하고, 나에겐 완성된 결과만 가져다줍니다. 특히 <strong>구독자에게는 "공짜 플래너"</strong>인 셈.</p>
</div>

→ 공식 문서: [Plan in the cloud with ultraplan](https://code.claude.com/docs/en/ultraplan)

---

### 4️⃣ `/rewind` — 잘못된 길 통째로 지우기

Claude가 엉뚱한 방향으로 갔을 때 — 그 시도가 실패했는데 **대화 기록엔 남아서** 이후 모든 턴에서 재처리됩니다. 토큰 먹는 귀신.

`/rewind` (또는 **Esc 두 번**)로 체크포인트 시점으로 돌아가면서 4가지 옵션:

| 옵션 | 효과 | 언제? |
|---|---|---|
| Restore code + conversation | 완전 되돌리기 | 전면 리셋 |
| Restore conversation | 대화만 지우기 | 대화 오염만 제거 |
| Restore code | 파일만 되돌리기 | 대화는 유지하고 싶을 때 |
| **Summarize from here** ⭐ | 이후 대화만 요약 압축 | **가장 정밀한 토큰 회복** |

#### Summarize from here vs /compact

`/compact`는 **전체 대화**를 요약하지만, `/rewind` → Summarize from here는 **선택 지점 이후만** 요약해요. 초반 맥락(CLAUDE.md 해석·설계 결정 등)은 그대로 유지. **캐시 히트도 유지**되는 큰 장점.

#### 주의

- **bash 명령어로 변경된 파일은 추적 안 됨** (rm/mv/cp)
- **외부 수정도 추적 안 됨**
- Git 대체품 아님 — 세션 내 "빠른 취소"용

→ 상세: [컨텍스트 위생 3종](/docs/tips/btw-side-questions) · [공식 checkpointing](https://code.claude.com/docs/en/checkpointing)

---

### 5️⃣ `/compact` — 긴 대화 요약 압축

대화가 수백 턴 이어지면 컨텍스트가 꽉 차요. `/compact`는 **지금까지의 대화를 AI 요약으로 교체**해서 공간을 확보합니다.

```bash
/compact
```

#### 작동 방식

- 이전 대화 전체 → 핵심만 담은 요약으로 대체
- 원본은 transcript에 보존 (필요하면 참조 가능)
- 맥락은 유지, 토큰은 **대폭 감소**

#### 언제 쓰나

- 컨텍스트 80% 넘겼을 때
- 같은 주제로 더 이어갈 건데 앞부분은 참조 빈도 낮음
- `/cost`에서 캐시 히트율 떨어지기 시작할 때

#### /compact vs /rewind → Summarize vs 새 대화

| 방법 | 앞부분 | 뒷부분 | 캐시 |
|---|---|---|---|
| `/compact` | 요약 | 요약 | 거의 깨짐 |
| `/rewind → Summarize from here` | **원본 유지** | 요약 | **앞부분 캐시 유지** |
| `/clear` → 새 대화 | 버림 | 버림 | 완전 새로 시작 |

**우선순위**: `/rewind → Summarize` > `/compact` > `/clear`

---

### 6️⃣ `/session-handoff` — 세션 간 이어가기

작업이 길어지거나 내일 이어서 할 예정이면, 지금 세션의 **맥락을 구조화 문서로 저장**. 다음 세션에서 그 문서만 보면 바로 이어 작업 가능.

```bash
# 풀 스펙 (10 섹션)
/session-handoff

# 간단 (5줄)
/session-handoff quick

# 복원 (다음 세션에서)
/session-handoff resume
```

저장 위치: 프로젝트의 `.claude/handoffs/handoff-YYYYMMDD-HHMM.md`

#### 10 섹션 포함

🎯 목표 / ✅ 완료 / ⏳ 남은 것 / ❌ 시도 실패 / 💡 핵심 결정 / 🗺️ 현재 상태 / 📂 코드 맥락 / ▶️ 이어가기 지침 / ⚙️ 환경 설정 / ⚠️ 함정

#### 토큰 절약 관점

- 다음 세션이 **0부터 재탐색** 안 해도 됨 → 탐색 토큰 절감
- 실패 경로 기록으로 **같은 실수 반복** 방지
- 여러 날 걸리는 프로젝트에서 누적 효과 큼

<div class="note-star">
⭐ <strong>/memory-update</strong>와는 다른 용도예요. memory-update는 "장기 기억 정리"(며칠~몇 주), session-handoff는 "지금 세션 → 다음 세션"(당장 이어 쓰기). 둘 다 쓰면 짝 맞음.
</div>

→ 이 스킬은 커뮤니티에서 제작된 버전을 노모어매뉴얼 스타일로 이식했어요. 설치는 `~/.claude/commands/session-handoff.md`에 SKILL.md 하나면 끝.

---

## 🏆 추천 전략 — 상황별 조합 워크플로우

6가지 무기를 **언제·어떻게 섞어 쓰는지**가 고수의 영역입니다. 제가 추천하는 5가지 조합입니다.

### A. 새 기능 개발 (가장 기본)

```
1. /ultraplan 으로 설계 (로컬 토큰 0)
2. 브라우저에서 검토·수정
3. Teleport back to terminal → Start new session
4. 실행하며 /btw로 의문점 해소
5. 막힌 부분은 /rewind → 다시 시도
6. 세션 끝나면 /session-handoff quick
```

**효과**: 전통적 방식 대비 **세션당 30~50% 토큰 절약**. 특히 설계 단계가 커서 컨텍스트 꽉 차는 일 사라짐.

---

### B. 긴 디버깅 세션

```
1. 플랜 모드로 시작 (Shift+Tab 두 번)
2. 원인 추정·수정안 합의
3. 승인 후 실행
4. 실패하면 /rewind 1 로 한 턴만 되감고 다시 시도
5. 2시간 넘어가면 /rewind → Summarize from here 로 앞부분 보존 + 뒷부분 압축
6. 해결 못 하고 내일 이어할 거면 /session-handoff
```

**효과**: "같은 실패 반복"을 구조적으로 차단. 디버깅이 컨텍스트 블랙홀이 되는 걸 방지.

---

### C. 리팩토링 / 마이그레이션 (큰 작업)

```
1. /ultraplan — 영향도 분석 + 순서 설계 (클라우드 쿼터 사용)
2. 큰 그림을 GitHub Issue에 복사 (동료 공유)
3. 터미널로 텔레포트 → Start new session
4. 단계별로 쪼개서 실행 (각 단계 끝나면 /compact 대신 새 채팅)
5. 각 단계 마무리 시 /session-handoff — 다음 단계로 전달
```

**효과**: 컨텍스트 쪼개기 + 클라우드 위임 조합. 일주일 프로젝트도 한도 안 터뜨리고 완주.

---

### D. 빠른 수정·자잘한 요청

```
1. 플랜 모드 스킵 (오버헤드 아까움)
2. 자연어 한 줄 지시
3. 잘못 가면 /rewind 한 방
4. 끝나면 그 채팅 닫기 (새 작업은 새 채팅)
```

**효과**: 작은 작업을 큰 세션에 끌어들이지 말 것. 오염 방지.

---

### E. 탐색·학습 중심 세션

```
1. /btw 를 적극 활용 (학습 질문은 전부 /btw)
2. 메인 대화는 실제 결정·실행만
3. 세션 끝나면 /session-handoff — "오늘 배운 것" 섹션에 정리
```

**효과**: 학습과 실행을 분리해서 실행 세션이 학습으로 오염되지 않게.

---

## 📋 하루 루틴 체크리스트

<div class="callout good">
<div class="callout-head"><span class="stamp">☀️</span>아침 — 세션 시작</div>
<ol>
<li><code>/cost</code> 로 전날 잔량 확인</li>
<li>큰 작업이면 <code>/ultraplan</code> 또는 플랜 모드부터</li>
<li>전날 <code>/session-handoff</code> 있으면 <code>resume</code></li>
</ol>
</div>

<div class="callout tip">
<div class="callout-head"><span class="stamp">🌤️</span>작업 중</div>
<ol>
<li>딴 질문은 <code>/btw</code></li>
<li>잘못 가면 <code>/rewind</code> — 미련 없이</li>
<li>컨텍스트 게이지 🟡 나오면 <code>/rewind → Summarize from here</code></li>
<li>주제 바뀌면 새 채팅</li>
</ol>
</div>

<div class="callout insight">
<div class="callout-head"><span class="stamp">🌙</span>저녁 — 마무리</div>
<ol>
<li><code>/session-handoff</code> 로 구조화된 인수인계</li>
<li>장기 프로젝트면 <code>/memory-update</code> 로 장기 기억 정리</li>
<li><code>/cost</code> 마지막 확인</li>
</ol>
</div>

---

## 2026년 4월 한도 사태 — 짧은 배경

2026-04-01 Anthropic **공식 인정**: *"people are hitting usage limits in Claude Code way faster than expected."*

원인 3가지:
1. 3/28 2x 프로모션 종료
2. 피크타임 쿼터 축소
3. 캐시 무효화 버그 2개 (비용 10~20배 증가)

이 사태 이후로 **캐시 히트율 관리**가 그 어느 때보다 중요해졌고, 이 챕터의 6가지 무기 + 조합 전략이 실질적인 대응책입니다.

---

## 📎 관련 가이드

- [웹·코워크·아티팩트 토큰 절약](/docs/tips/token-saving-web-cowork) — claude.ai 웹 구독자용
- [/btw + /fork + /rewind 3종 세트](/docs/tips/btw-side-questions)
- [컨텍스트 게이지 바 설치](/docs/config/statusline-setup) — 시각화로 타이밍 판단
- [권한 모드 가이드](/docs/advanced/permission-modes) — 플랜 모드 상세
- [1M 컨텍스트 완벽 가이드](/docs/advanced/one-million-context)
- [FAQ](/docs/tips/faq) — 요금 소진 관련 Q&A

## 참고 자료 (공식)

- [Plan in the cloud with ultraplan — Claude Code Docs](https://code.claude.com/docs/en/ultraplan)
- [Checkpointing & /rewind — Claude Code Docs](https://code.claude.com/docs/en/checkpointing)
- [Permission modes (Plan mode) — Claude Code Docs](https://code.claude.com/docs/en/permission-modes)
- [Usage limit best practices — Claude Help Center](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)
