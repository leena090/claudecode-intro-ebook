---
title: "[공] 주간 업데이트: 2026년 5월 25일 ~ 29일 (Week 22)"
description: "Claude Opus 4.8 출시·기본 모델 교체, 동적 워크플로우 리서치 프리뷰, 보안 가이던스 플러그인, Fast Mode Opus 4.8 가격 인하"
tags: ["업데이트", "2026", "week22", "opus-4-8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-05-31"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w22</a>
</div>

## 이번 주 핵심 변경 (4대 업데이트)

---

### 1️⃣ Claude Opus 4.8 출시 🆕 — 새 플래그십 모델

**Claude Opus 4.8**이 출시됐어요. Max, Team Premium, Enterprise 유료과금, Anthropic API에서 새 기본 모델로 적용돼요.

```bash
# 최신 버전으로 업데이트 (v2.1.154 이상 필요)
claude update

# Opus 4.8로 명시적 전환
/model claude-opus-4-8

# 더 어려운 작업엔 최고 effort 사용
/effort xhigh
```

> 🚀 **비유**: 스마트폰 운영체제 업그레이드처럼 — iOS 18에서 iOS 19로 올라간 것처럼, Claude의 두뇌가 4.7에서 4.8로 업그레이드됐어요. 같은 요청에도 더 정확하고 깊이 있는 결과를 받을 수 있어요.

| 항목 | 이전 | 이번 (Week 22) |
|------|------|----------------|
| Max/Team 기본 모델 | claude-opus-4-7 | **claude-opus-4-8** 🆕 |
| 기본 effort | high | high (동일) |
| 최고 effort | — | `/effort xhigh` 추가 |
| 최소 CLI 버전 | — | **v2.1.154 이상** |

<div class="note-circle">
○ Pro 플랜 사용자는 계속 Sonnet 4.6이 기본이에요<br />
○ Opus 4.8 사용에는 <code>claude update</code>로 업데이트 필수
</div>

---

### 2️⃣ 동적 워크플로우(Dynamic Workflows) 🆕 — 수백 개 에이전트 자동 지휘

**리서치 프리뷰**: Claude가 알아서 오케스트레이션 스크립트를 작성하고, 수십~수백 개의 서브에이전트(부하 에이전트)가 백그라운드에서 동시에 작업해요.

```bash
# 프롬프트에 "workflow" 단어만 포함하면 자동 트리거
> src/routes/ 아래 모든 API 엔드포인트에서 인증 체크 빠진 곳을 찾는 workflow 실행해줘

# 내장 딥리서치 워크플로우 (여러 출처 검색 후 교차검증 리포트)
/deep-research Node.js v20과 v22의 퍼미션 모델 차이는?

# 실행 중인 워크플로우 현황 보기
/workflows
```

> 🏭 **비유**: 공장 라인처럼 — 내가 "이 부품 1000개 조립해줘"라고 하면, Claude가 공정표를 짜고 여러 조립 라인에 자동 배분해서 동시에 작업해요. 내 화면엔 진행 현황만 나오고, 나는 그사이 다른 일을 할 수 있어요.

| 구분 | 서브에이전트 | 스킬 | **워크플로우** |
|------|------------|------|-------------|
| 계획 작성자 | Claude (매 턴) | Claude (매 턴) | **스크립트 자체** |
| 중간 결과 위치 | 컨텍스트 | 컨텍스트 | **스크립트 변수** |
| 재실행 가능 | ❌ | ❌ | **✅** |
| 동시 실행 규모 | 몇 개 | 몇 개 | **최대 16개 동시** |

<div class="note-circle">
○ Pro 플랜은 <code>/config</code>에서 Dynamic workflows 행을 켜야 사용 가능<br />
○ Claude Code v2.1.154 이상 필요<br />
○ 저장한 워크플로우는 <code>/명령어이름</code> 형태로 재사용 가능<br />
○ ultracode(<code>/effort ultracode</code>) 설정 시 모든 작업에 자동 워크플로우 적용
</div>

📄 상세 가이드 → [동적 워크플로우 완전 정복](/docs/advanced/dynamic-workflows)

---

### 3️⃣ 보안 가이던스 플러그인(security-guidance) 🆕

Claude가 코드를 작성하는 **그 순간**에 자동으로 보안 취약점을 검사하고, 같은 세션에서 바로 수정해요.

```bash
# 설치 (공식 Anthropic 마켓플레이스에서)
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 즉시 적용
/reload-plugins
```

> 🛡️ **비유**: 워드 맞춤법 검사기처럼 — 글을 쓰면서 빨간 밑줄이 즉시 그어지는 것처럼, Claude가 코드를 작성하자마자 보안 문제가 있으면 바로 표시하고 고쳐줘요.

| 검사 시점 | 방식 | 특징 |
|-----------|------|------|
| **파일 편집마다** | 패턴 매칭 | 즉시, 추가 비용 없음 |
| **매 대화 턴 종료 후** | AI 리뷰 | 백그라운드 실행, 인젝션·SSRF 등 탐지 |
| **git commit/push 시** | 심층 AI 리뷰 | 주변 코드 맥락까지 분석 |

<div class="note-circle">
○ 프로젝트 전용 보안 규칙은 <code>.claude/claude-security-guidance.md</code>에 추가 가능<br />
○ 커스텀 패턴은 <code>.claude/security-patterns.yaml</code>에 정의 가능
</div>

📄 상세 가이드 → [보안 가이던스 플러그인](/docs/advanced/security-guidance-plugin)

---

### 4️⃣ Fast Mode — Opus 4.8 기준 가격 인하 💰

Fast Mode(패스트 모드)가 이제 **Opus 4.8이 기본**이 됐고, 가격도 크게 내려갔어요.

```bash
/fast
```

| 모델 | Fast Mode 가격 | 속도 | 상태 |
|------|---------------|------|------|
| **Opus 4.8** 🆕 | **$10/$50** per MTok | 약 2.5배 빠름 | **신규 기본** |
| Opus 4.7 | $30/$150 per MTok | 2.5배 빠름 | 유지 (구 기본) |
| Opus 4.6 | $30/$150 per MTok | 2.5배 빠름 | **Deprecated** ⚠️ |

> 💡 최신 모델(Opus 4.8)의 Fast Mode가 이전 모델(Opus 4.7)보다 **3배 저렴**해요!

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **백그라운드 셸 명령** | `claude agents`에서 `!명령어` → 백그라운드 잡으로 실행, 붙기·떼기 가능 |
| **`.claude/skills` 자동 로드** | 마켓플레이스 없이 `.claude/skills/` 폴더에 넣으면 자동 로드됨 |
| **`/reload-skills`** | 재시작 없이 스킬 디렉토리 재스캔 |
| **`MessageDisplay` 훅** | 어시스턴트 메시지 텍스트를 화면에 표시하기 전에 변환하거나 숨기는 훅 |
| **폴백 모델 개선** | 기본 모델 미발견 시 `--fallback-model`로 세션 전체 전환 (이전: 매 요청마다 실패) |
| **Vim 모드 히스토리** | NORMAL 모드에서 `/` 키로 역방향 히스토리 검색 (Bash/Zsh vi-mode와 동일) |
| **스트리밍 항상 활성화** | Bedrock·Vertex·Foundry 포함 모든 환경에서 스트리밍 도구 실행 기본 활성화 |
| **Chrome — 브라우저 선택** | `/chrome` → "브라우저 선택…"으로 여러 연결된 브라우저 중 선택 가능 |

---

## 이번 주 요약

```
✅ Claude Opus 4.8: 새 플래그십 모델, Max/Team/Enterprise 기본 적용
✅ Dynamic Workflows: 대규모 작업 자동 오케스트레이션 (리서치 프리뷰)
✅ 보안 가이던스 플러그인: 코드 작성 중 실시간 3단계 보안 점검
✅ Fast Mode Opus 4.8: $10/$50 per MTok (기존 $30/$150에서 대폭 인하!)
```

버전 확인 및 업데이트:
```bash
claude update  # v2.1.150 ~ v2.1.157 범위
claude --version
```
