---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 새 기본 모델 출시, 다이나믹 워크플로우 리서치 프리뷰, 보안 가이드 플러그인, Fast Mode 가격 인하"
tags: ["업데이트", "2026", "week22", "opus4.8", "workflows", "ultracode", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. 버전 v2.1.150 → v2.1.157. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경 4가지

---

### 1️⃣ Claude Opus 4.8 — 새 기본 모델 출시 🎉

**Opus 4.8**(클로드 오퍼스 포인트에잇)이 출시됐어요. 코딩, 에이전트 작업, 전문적인 업무 전반에서 성능이 향상됐고, 장시간 실행 작업에서의 일관성도 개선됐어요.

| 항목 | 내용 |
|---|---|
| 기본 모델로 전환 플랜 | Max, Team Premium, Enterprise pay-as-you-go, Anthropic API |
| 기본 effort | `high` (변경 없음) |
| 더 어려운 작업 | `/effort xhigh` 사용 |
| 최소 버전 | v2.1.154 이상 |

**모델 전환 방법:**
```bash
# 이름으로 직접 지정
/model claude-opus-4-8

# 모델 선택기에서 고르기
/model
```

> 🍱 **비유**: 스마트폰 출시처럼, Galaxy S24가 S25로 업그레이드됐는데 가격은 그대로예요. 더 빠르고 더 똑똑하게.

<div class="note-star">
★ <strong>Opus 4.8 특징</strong> — 기본값이 <code>high</code> effort예요. 아주 복잡한 작업엔 <code>/effort xhigh</code>를 쓰세요. 예전 모델(4.7, 4.6)도 계속 사용 가능해요. <code>[공식 발표 기준]</code>
</div>

---

### 2️⃣ 다이나믹 워크플로우(Dynamic Workflows) — 리서치 프리뷰 🔬

수십~수백 개의 에이전트를 동시에 움직여야 할 만큼 **큰 작업**에 쓰는 기능이에요. Claude가 직접 **오케스트레이션 스크립트**를 짜고, 그 스크립트대로 에이전트들이 백그라운드에서 일해요.

> 🍱 **비유**: 혼자 심부름 10가지를 하나씩 순서대로 하는 것(기존 방식) vs. 직원 10명에게 동시에 "너는 1번 심부름, 너는 2번 심부름..." 하고 역할을 나눠서 한꺼번에 시키는 것(다이나믹 워크플로우). 나는 지시만 내리고, 완료 보고를 기다리면 돼요.

**사용 방법:**
```bash
# "workflow"라고 말하거나 자연어로 요청
create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# ultracode 키워드로 명시적 트리거
ultracode: 이 레포 전체에서 deprecated API 호출 찾아서 전부 신규 버전으로 교체해줘

# 실행 중 워크플로우 관리
/workflows

# 번들 포함 딥리서치 워크플로우
/deep-research Node.js v20에서 v22 사이에 권한 모델이 어떻게 바뀌었나요?
```

**워크플로우 vs 기존 방식 비교:**

| | 서브에이전트 | 스킬 | 에이전트 팀 | **워크플로우** |
|---|---|---|---|---|
| 계획 주체 | Claude (턴마다) | Claude | 리드 에이전트 | **스크립트** |
| 중간 결과 저장 위치 | 컨텍스트 창 | 컨텍스트 창 | 공유 태스크 | **스크립트 변수** |
| 재실행 | 에이전트 정의 | 지시문 | 팀 정의 | **오케스트레이션 자체** |
| 규모 | 소규모 | 소규모 | 소수의 장기 실행 | **수십~수백 에이전트** |

<div class="note-star">
★ <strong>Pro 플랜</strong>에서 사용하려면 <code>/config</code>에서 Dynamic workflows 항목을 켜야 해요. <code>[공]</code><br />
★ 모든 유료 플랜(Pro, Max, Team, Enterprise)에서 사용 가능하며 Bedrock, Vertex AI, Microsoft Foundry도 지원. <code>[공식 발표 기준]</code>
</div>

---

### 3️⃣ Security Guidance Plugin — AI가 코드 취약점 직접 감시

**보안 가이드 플러그인**(시큐리티 가이던스 플러그인)이 공식 마켓플레이스에 출시됐어요. Claude가 코드를 수정할 때마다 **자동으로 보안 취약점을 검사**하고, 문제가 있으면 **같은 세션에서 바로 수정**해줘요.

**설치 방법:**
```bash
# 공식 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 로드
/reload-plugins
```

**검사 타이밍:**

| 시점 | 검사 수준 |
|---|---|
| 편집할 때마다 | 빠른 패턴 검사 |
| 턴 끝마다 | 모델 기반 심층 검토 |
| commit 또는 push 시 | 에이전트 기반 깊은 검토 |

프로젝트별 보안 규칙은 `.claude/claude-security-guidance.md`에 작성하면 돼요.

> 🍱 **비유**: 요리할 때 옆에서 식품 위생사가 서서 "이 재료 유통기한 지났어요", "이렇게 쓰면 교차오염이에요" 하고 실시간으로 알려주는 것처럼, 코드를 쓸 때마다 보안 전문가가 옆에서 감시해줘요.

---

### 4️⃣ Fast Mode on Opus 4.8 — 가격 인하! 💰

Fast Mode(패스트 모드)가 **Opus 4.8 기준으로 대폭 저렴해졌어요**.

| 모델 | Fast Mode 가격 (입력/출력) |
|---|---|
| **Opus 4.8** (신규) | **$10/$50 per MTok** ← 기존보다 70% 저렴! |
| Opus 4.7 | $30/$150 per MTok (유지) |
| Opus 4.6 | $30/$150 per MTok (deprecated 예정) |

<div class="note-star">
★ <strong>Opus 4.6 Fast Mode는 Deprecated 예정</strong>이에요. 사용 중이라면 Opus 4.8로 전환하세요. <code>[공]</code><br />
★ 속도는 표준 대비 약 2.5배 빠르고, 가격은 표준 대비 약 2배. <code>[공식 발표 기준]</code>
</div>

```bash
# Fast Mode 토글 (이제 Opus 4.8 기본 적용)
/fast
```

---

## 그 외 개선 사항

| 항목 | 변경 내용 |
|---|---|
| Background 작업 | `claude agents`에서 `!` 접두사로 셸 명령을 백그라운드 job으로 실행. `claude --bg --exec 'pytest -x'`도 가능 |
| 스킬 자동 로드 | `.claude/skills/` 폴더의 플러그인이 마켓플레이스 없이 자동 로드. `claude plugin init <name>`으로 스캐폴딩 |
| 스킬 리로드 | `/reload-skills` 신규 명령어 — 재시작 없이 스킬 디렉토리 재스캔 |
| MessageDisplay hook | 어시스턴트 메시지 텍스트 표시 시 훅으로 변환·숨김 가능 |
| Fallback model | `--fallback-model` 설정 — 기본 모델 없을 때 자동 전환 (이전: 요청마다 실패) |
| Vim mode | Normal 모드에서 `/`로 히스토리 역방향 검색 (Bash·Zsh vi-mode 동작과 동일) |
| 스트리밍 | 텔레메트리 비활성화 및 Bedrock·Vertex·Foundry에서도 스트리밍 툴 실행 항상 활성화 |
| 플러그인 설정 | `defaultEnabled: false` — 설치 후 직접 켜기 전까지 비활성 상태로 설치 |

---

## 한 줄 요약

> **이번 주 하이라이트**: Opus 4.8이 새 기본 모델로 등장했고, Fast Mode 가격이 크게 내려갔어요. 대규모 작업을 수백 개 에이전트에 맡기는 Dynamic Workflows도 리서치 프리뷰로 공개됐어요.

---

## 더 알아보기

- [다이나믹 워크플로우 상세 가이드](/docs/advanced/dynamic-workflows)
- [Week 21 업데이트](/docs/next/whats-new-w21) — Auto Mode Pro 지원, /code-review
- [공식 문서 changelog v2.1.150–v2.1.157](https://code.claude.com/docs/en/changelog#2-1-150)
- [공식: Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
