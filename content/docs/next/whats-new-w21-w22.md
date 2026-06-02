---
title: "[공] 2026년 Week 21–22 업데이트 — Opus 4.8 출시·다이나믹 워크플로우·보안 플러그인"
description: "Opus 4.8이 기본 모델로 등극, AI 여러 개가 팀으로 작업하는 Dynamic Workflows 리서치 프리뷰, Fast mode 가격 인하($30→$10), 보안 취약점 자동 검사 플러그인"
tags: ["업데이트", "2026", "week21", "week22", "opus4.8", "dynamic-workflows", "security-guidance", "fast-mode", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-02"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 22) + Week 22 (2026-05-25 ~ 29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서 W21</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">공식 문서 W22</a>
</div>

---

## 🌟 이번 두 주의 핵심 변경 한눈에 보기

| 주차 | 주인공 | 한 줄 요약 |
|------|--------|-----------|
| **W22** | **Opus 4.8** | 더 똑똑한 최신 모델이 기본으로 |
| **W22** | **다이나믹 워크플로우** | AI 여러 개가 팀을 이뤄 큰 일 처리 |
| **W22** | **Fast mode 가격 인하** | $30 → $10/백만 토큰 (3분의 1로!) |
| **W22** | **보안 플러그인** | 코드 짤 때 보안 구멍 자동 발견 |
| **W21** | **Auto mode Pro 확대** | Pro 플랜에서도 자동 모드 사용 가능 |
| **W21** | **/code-review** | AI가 직접 코드 버그 리뷰 |

---

## 1️⃣ Claude Opus 4.8 출시 — 더 강해진 최신 모델 `[공]`

**Opus 4.8**이 새로 나왔어요. Max·Team Premium·Enterprise·API 요금제에서 **기본 모델**로 바뀌었어요.

> 🍱 **비유**: 이전까지 쓰던 스마트폰이 Opus 4.7이었다면, 이번 달 새 폰이 출시됐는데 그게 Opus 4.8이에요. 같은 요금제인데 더 좋은 폰으로 자동 업그레이드된 느낌이에요.

**모델 전환 방법:**
```bash
# 대화 중에 바로 전환
/model claude-opus-4-8

# 어려운 작업엔 더 높은 사고 단계 요청
/effort xhigh
```

**어느 요금제에서 쓸 수 있나요?**

| 요금제 | Opus 4.8 |
|--------|---------|
| Max (5x · 20x) | ✅ 기본 |
| Team Premium | ✅ 기본 |
| Enterprise (사용량 과금) | ✅ 기본 |
| Anthropic API | ✅ 기본 |
| Pro | ✅ 포함 (Sonnet 4.6과 함께) |

<div class="note-circle">
○ Opus 4.8로 전환하려면 Claude Code <strong>v2.1.154 이상</strong>이 필요해요. <code>claude update</code>로 먼저 업데이트하세요.
</div>

---

## 2️⃣ 다이나믹 워크플로우(Dynamic Workflows) — AI 팀이 큰 일을 처리해요 `[공]`

> ⚗️ **리서치 프리뷰** — 아직 실험 단계이지만 유료 플랜이면 누구나 써볼 수 있어요. Pro 플랜은 `/config`에서 먼저 켜야 해요.

**다이나믹 워크플로우(Dynamic Workflows)**란, Claude가 여러 개의 AI 에이전트(대리인)를 만들어 **큰 작업을 팀처럼 병렬로 처리**하는 기능이에요.

> 🍱 **비유**: 혼자 5시간 걸릴 일을 5명에게 나눠주면 1시간에 끝나는 것처럼 — 코드베이스 전체 보안 점검, 대규모 파일 마이그레이션, 여러 출처 교차 조사 같은 일을 AI 팀이 병렬로 처리해요.

### 가장 쉽게 시작하는 법 — `/deep-research`

```bash
# 큰 질문을 여러 출처로 조사
/deep-research Node.js v20에서 v22로 넘어갈 때 뭐가 바뀌었나요?
```

실행하면 AI 여러 개가 동시에 웹 검색 → 출처 교차 검증 → 인용 보고서 작성까지 자동으로 해줘요.

### `ultracode` 키워드로 내 작업을 워크플로우로

```bash
# 프롬프트에 ultracode를 넣으면 자동으로 워크플로우가 만들어져요
ultracode: src/routes/ 아래 모든 API 엔드포인트에서 인증 체크 빠진 것 찾아줘

# 또는 자연어로도 OK
fetch() 호출을 모두 새 HttpClient로 교체하는 워크플로우 만들어줘
```

### 실행 현황 보기

```bash
# 워크플로우 목록과 진행 상황 확인
/workflows
```

> 🍱 **비유**: `/workflows`는 배달 앱의 "주문 현황" 화면이에요 — 주문이 접수됐는지, 요리 중인지, 배달 중인지 실시간으로 볼 수 있어요.

📄 자세한 사용법 → [다이나믹 워크플로우 완전 가이드](/docs/advanced/dynamic-workflows)

---

## 3️⃣ Fast Mode 가격 인하 — Opus 4.8 기준 3분의 1로! `[공]`

**Fast Mode(패스트 모드)**가 이제 **Opus 4.8 기반으로 바뀌면서 가격이 크게 내렸어요.**

| 항목 | 이전 (Opus 4.7) | 이번 (Opus 4.8) | 변화 |
|------|----------------|----------------|------|
| 입력 토큰 | $30/백만 | **$10/백만** | ⬇️ 3분의 1 |
| 출력 토큰 | $150/백만 | **$50/백만** | ⬇️ 3분의 1 |
| 속도 | 2.5배 빠름 | 2.5배 빠름 | 동일 |

<div class="note-star">
★ Opus 4.6 Fast mode는 <strong>이번 주로 서비스 종료(Deprecated)</strong>돼요.<br />
★ Opus 4.7 Fast mode는 기존 가격($30/$150)으로 계속 사용 가능해요.
</div>

```bash
# Fast mode 켜기/끄기
/fast
```

---

## 4️⃣ security-guidance 플러그인 — 코드 짤 때 보안 구멍 자동 발견 `[공]`

**security-guidance** 플러그인을 설치하면, Claude가 코드를 수정할 때마다 **보안 취약점을 자동으로 검사**해줘요.

> 🍱 **비유**: 타이핑을 하면서 맞춤법 검사기가 빨간 줄로 표시해주는 것처럼 — 코드를 수정할 때마다 "이 부분은 SQL 인젝션 위험이 있어요", "여기는 XSS 가능성" 같이 알려줘요.

**검사 단계가 3중으로:**
1. **매 수정 시**: 빠른 패턴 검사
2. **각 응답 끝**: 모델 기반 검토
3. **커밋·푸시 시**: 심층 에이전트 검사

**설치 방법:**
```bash
# 공식 마켓플레이스에서 설치
/plugin install security-guidance@claude-plugins-official

# 현재 세션에 즉시 적용
/reload-plugins
```

**프로젝트별 보안 규칙 추가:**
```markdown
<!-- .claude/claude-security-guidance.md -->
이 프로젝트는 금융 데이터를 다루므로 암호화 없는 민감 데이터 전송은 모두 차단하세요.
```

---

## 5️⃣ Auto mode — 이제 Pro 플랜에서도 `[공]`

**Auto mode(오토 모드)** 가 이전에는 Max 이상 플랜만 쓸 수 있었는데, 이번 Week 21에서 **Pro 플랜 + Sonnet 4.6**에서도 사용 가능해졌어요.

> 🍱 **비유**: "자동 기어 변속"처럼 — 직접 허락을 눌러줘야 했던 루틴 작업들을 Claude가 알아서 판단하고 처리해요. 위험해 보이는 것만 멈추고 물어봐요.

```bash
# Claude Code 업데이트 후
claude update

# 모드 전환: Shift+Tab으로 순환 (Normal → Accept Edits → Auto)
```

📄 자세한 내용 → [Auto mode 완전 가이드](/docs/advanced/auto-mode-config)

---

## 6️⃣ /code-review — AI가 직접 코드 버그 잡아주기 `[공]`

새로운 **`/code-review`** 명령어가 생겼어요. 현재 변경된 코드를 검사해서 **버그·보안 이슈를 찾아줘요**.

```bash
# 기본 리뷰
/code-review

# 더 꼼꼼하게 (high effort)
/code-review high

# GitHub PR에 인라인 코멘트로 바로 달기
/code-review --comment
```

> 🍱 **비유**: 코드 제출 전에 선생님한테 숙제 검토 받는 것처럼 — 눈에 안 띄던 실수를 잡아줘요.

<div class="note-circle">
○ <code>/simplify</code>는 계속 유지됩니다 — <code>/code-review</code>는 버그·보안, <code>/simplify</code>는 코드 정리·단순화용이에요.
</div>

---

## 7️⃣ /usage-credits — 이름이 바뀌었어요 `[공]`

"Extra usage(추가 사용량)"라는 용어가 **"usage credits(사용 크레딧)"** 으로 통일됐어요.

| 이전 | 이후 |
|------|------|
| `/extra-usage` | `/usage-credits` |
| "Extra usage" 표시 | "Usage credits" 표시 |

> 구 이름(`/extra-usage`)도 아직 작동해요. 서서히 전환되는 중이에요.

또한 **`/usage`** 명령어가 더 똑똑해졌어요 — 어떤 도구가 사용량을 많이 쓰는지 카테고리별로 보여줘요.

```bash
/usage
# 스킬·서브에이전트·플러그인·MCP 서버별 사용량 표시
```

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **백그라운드 세션 `/resume`에 표시** | 백그라운드로 실행 중인 세션도 `/resume`에서 `bg` 표시로 확인 가능 |
| **Vim 모드 `/` 역방향 검색** | NORMAL 모드에서 `/`를 누르면 이전 명령어 역방향 검색 (Bash/Zsh vi-mode와 동일) |
| **`.claude/skills/` 자동 로드** | 마켓플레이스 없이 프로젝트 폴더 안 스킬 자동 인식 |
| **`/reload-skills` 명령어** | 재시작 없이 스킬 디렉토리 다시 스캔 |
| **Chrome에서 브라우저 선택** | `/chrome` → "Select browser…"로 연결된 브라우저 중 선택 가능 |
| **`--fallback-model` 세션 유지** | 주 모델 오류 시 폴백 모델로 세션 끝까지 이어감 (이전: 매 요청 실패) |

---

## 이번 두 주 요약

```
✅ Opus 4.8 출시 — Max/Team Premium/Enterprise/API 기본 적용
✅ Dynamic Workflows — ultracode 키워드로 AI 팀 작업 (리서치 프리뷰)
✅ Fast mode 가격 인하 — Opus 4.8 기준 $10/$50/MTok (이전 $30/$150)
✅ security-guidance 플러그인 — 코드 수정 시 3단계 보안 검사
✅ Auto mode Pro 확대 — Sonnet 4.6도 지원
✅ /code-review — 버그·보안 검토 + GitHub PR 인라인 코멘트
✅ /usage-credits — "Extra usage" 이름 변경
```

업데이트 방법:
```bash
claude update
claude --version  # v2.1.150 이상인지 확인
```
