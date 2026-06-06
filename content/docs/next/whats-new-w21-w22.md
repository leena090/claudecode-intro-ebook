---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 29일 (Week 21–22)"
description: "Auto mode가 Pro 플랜까지 확대, /code-review 명령어 등장, Claude Opus 4.8 출시, 동적 워크플로우, 보안 지도 플러그인까지 2주치 핵심 요약"
tags: ["업데이트", "2026", "week21", "week22", "opus4.8", "자동생성", "동적워크플로우", "보안", "auto-mode"]
category: "next"
order: 9
lastUpdated: "2026-06-06"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) + Week 22 (2026-05-25 ~ 2026-05-29) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: Week 21</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w22" target="_blank">Week 22</a>
</div>

## 2주 핵심 변경 한눈에 보기

| 주차 | 핵심 소식 |
|------|-----------|
| **Week 21** | Auto mode → Pro 플랜도 OK, /usage 상세 내역, /code-review 명령어 |
| **Week 22** | 🚀 **Claude Opus 4.8 출시**, 동적 워크플로우, 보안 지도 플러그인, Fast Mode 가격 변화 |

---

## Week 21 (5월 18일~22일)

### 1️⃣ Auto mode — 이제 Pro 플랜에서도 쓸 수 있어요!

이전까지 **Auto mode(자동 모드)** 는 Max 플랜 가입자만 쓸 수 있었어요. 이번 Week 21부터 **Pro 플랜과 Sonnet 4.6**에서도 사용 가능합니다. `[공]`

> 🍱 **비유**: 이전에는 비즈니스 석 승객만 쓸 수 있던 자동 무빙워크가, 이제 일반 석 승객도 탈 수 있게 된 거예요.

**Auto mode 켜는 방법:**
```bash
# 터미널에서
claude --auto

# 또는 세션 중에
/mode auto
```

Auto mode는 Claude가 파일 수정·명령 실행 허가를 매번 묻지 않고 **혼자 판단해서 진행**하는 모드예요. 위험한 작업 전에는 내부 안전 분류기가 자동으로 멈춰줍니다.

<div class="note-circle">
○ Pro 플랜에서 Auto mode를 쓸 때는 Sonnet 4.6 모델만 지원돼요 (Max 플랜은 Opus 4.8도 가능)<br />
○ 처음엔 작은 프로젝트에서 먼저 실험해보는 걸 추천해요
</div>

📄 자세한 설정 → [Auto mode 설정 가이드](/docs/advanced/auto-mode-config)

---

### 2️⃣ `/usage` — 무엇이 사용량을 잡아먹는지 한눈에

`/usage` 명령어가 **스킬·서브에이전트·MCP 서버별**로 사용량을 나눠 보여줘요.

```bash
/usage
```

출력 예시:
```
📊 사용량 내역
  총 토큰: 45,230
  ├─ 스킬 (Skills):     12,500  (27.6%)
  ├─ 서브에이전트:       8,200  (18.1%)
  ├─ MCP 서버:           3,100  (6.9%)
  └─ 직접 대화:         21,430  (47.4%)
```

> 🍱 **비유**: 월말 카드 명세서에서 어떤 가게에서 얼마 썼는지 항목별로 보는 것처럼 — 어디서 사용량이 많이 나오는지 한눈에 알 수 있어요.

---

### 3️⃣ `/code-review` — AI가 내 코드 변경을 직접 리뷰해줘요

새 내장 스킬 **`/code-review`** 가 추가됐어요.

```bash
# 현재 변경 사항 리뷰
/code-review

# 심층 멀티 에이전트 리뷰
/code-review ultra
```

> 🍱 **비유**: 예전엔 직접 팀원한테 "이 코드 봐줘" 라고 부탁해야 했는데, 이제는 Claude가 알아서 꼼꼼히 읽고 문제점을 짚어줘요.

`/code-review ultra`는 여러 에이전트가 동시에 전체 코드베이스를 분석하는 심층 리뷰예요. 중요한 변경 사항이나 PR 전에 쓰면 좋아요. `[공]`

---

## Week 22 (5월 25일~29일)

### 4️⃣ 🚀 Claude Opus 4.8 출시!

2026년 5월 28일, **Claude Opus 4.8**이 공식 출시됐어요.

| 항목 | 내용 |
|------|------|
| **출시일** | 2026년 5월 28일 |
| **강화된 부분** | 코딩, 에이전트 작업, 전문적 업무 |
| **장기 실행 일관성** | 긴 작업 중에도 흔들리지 않아요 |
| **이전 모델** | Opus 4.7을 대체 |
| **사용 플랜** | Pro, Max, Team, Enterprise |

> 🍱 **비유**: 4.7이 능숙한 숙련공이었다면, 4.8은 그 위에 지구력까지 갖춘 마라톤 선수예요 — 긴 작업을 끝까지 밀고 나가는 힘이 붙었어요.

```bash
# Opus 4.8로 전환
/model opus

# 버전 확인
claude --version
```

📄 자세한 출시 내용 → [Claude Opus 4.8 출시 안내](/docs/next/opus-4-8-release)

---

### 5️⃣ 동적 워크플로우(Dynamic Workflows) — 대규모 작업을 스크립트로 자동화

Claude가 **여러 서브에이전트를 조율하는 스크립트를 직접 작성**하고, 나중에 다시 실행(rerun)할 수 있어요.

```bash
# 동적 워크플로우 시작
/workflow 이 코드베이스 전체의 보안 취약점을 감사해줘
```

> 🍱 **비유**: 이전에는 Claude한테 "지금 이 작업 해줘"라고 해야 했다면, 이제는 Claude가 "이 작업을 어떻게 할지 설계도를 그리고, 여러 조수를 고용해서 동시에 진행" 한 뒤 설계도를 저장해 두는 거예요. 내일 다시 같은 방식으로 쓸 수 있어요.

**주요 사용 사례:**
- 📁 대형 코드베이스 보안 감사
- 🔄 레거시 코드 대규모 마이그레이션
- 🔍 교차 검증이 필요한 리서치

📄 자세한 사용법 → [동적 워크플로우 가이드](/docs/advanced/dynamic-workflows)

---

### 6️⃣ 보안 지도 플러그인(Security-Guidance Plugin) — Claude가 코드를 쓰면서 스스로 보안 검토

**`security-guidance`** 플러그인을 설치하면, Claude가 코드를 작성하는 동안 **자동으로 보안 취약점을 검토하고 같은 세션에서 바로 수정**해요. `[공]`

```bash
# 플러그인 설치
claude plugin install security-guidance
```

> 🍱 **비유**: 요리사가 음식을 만들면서 동시에 식약처 위생 기준을 스스로 체크하는 것처럼 — 코드를 짜는 동시에 보안 검토가 함께 돌아가요.

📄 자세한 설정 → [보안 지도 플러그인 가이드](/docs/advanced/security-guidance-plugin)

---

### 7️⃣ Fast Mode — 이제 Opus 4.8에서, 그리고 더 저렴하게

Fast Mode(패스트 모드)의 기본 대상 모델이 **Opus 4.7 → Opus 4.8**로 바뀌었어요.

| 항목 | Week 20 이전 | Week 22 이후 |
|------|-------------|-------------|
| Fast Mode 대상 | Opus **4.7** | Opus **4.8** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |
| 가격 | 높음 | **더 저렴** `[공]` |

<div class="note-circle">
○ 공식 문서에서 "lower price"로 발표됐어요 — 정확한 가격은 공식 요금 페이지 확인을 권장해요<br />
○ Fast Mode 토글: <code>/fast</code> 또는 데스크톱 앱에서 <code>Ctrl+Shift+F</code>
</div>

---

## 2주 요약

```
Week 21 ✅
  - Auto mode: Pro 플랜 + Sonnet 4.6 에서 사용 가능
  - /usage: 스킬·서브에이전트·MCP별 사용량 상세
  - /code-review: 내장 코드 리뷰 스킬

Week 22 ✅
  - Claude Opus 4.8 출시 (코딩·에이전트 강화, 장기 실행 일관성)
  - 동적 워크플로우: Claude가 스크립트 작성 → 여러 에이전트 조율
  - security-guidance 플러그인: 코드 작성 중 보안 자동 검토
  - Fast Mode: Opus 4.8 기본 적용, 더 저렴한 가격
```

버전 확인:
```bash
claude --version
```
