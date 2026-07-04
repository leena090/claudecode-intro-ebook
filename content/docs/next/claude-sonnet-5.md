---
title: "[블] Claude Sonnet 5 출시 — 코딩·에이전트 프론티어 성능"
description: "2026년 6월 30일 발표된 Claude Sonnet 5. 코딩, 에이전트, 전문적 작업에서 최첨단 성능을 제공하는 신규 모델 소개"
tags: ["모델", "sonnet-5", "claude5", "신기능", "2026", "자동생성"]
category: "next"
order: 15
lastUpdated: "2026-07-04"
---

<div class="note-star">
★ <strong>Anthropic 공식 블로그 발표 기준</strong> (2026-06-30). <code>[블]</code><br />
★ 모델 ID: <code>claude-sonnet-5</code> — Claude 5 패밀리 소속
</div>

## Claude Sonnet 5가 출시됐어요 🎉

**2026년 6월 30일**, Anthropic이 **Claude Sonnet 5**를 발표했어요.

공식 소개는 이래요:

> "Sonnet 5 delivers frontier performance across coding, agents, and professional work at scale."
> (Sonnet 5는 코딩, 에이전트, 대규모 전문 작업에서 최첨단 성능을 제공합니다.)

---

## Sonnet 5는 어떤 모델인가요?

Sonnet 5는 **Claude 5 패밀리**에 속하는 고성능 모델이에요. Fable 5와 함께 Claude의 최신 5세대 모델군을 구성해요.

> 🍱 **비유**: 자동차에 비유하면, 기존 Sonnet 4.6이 "중형 세단"이었다면 Sonnet 5는 **"스포츠 세단"**이에요 — 실용적이면서도 성능이 훨씬 뛰어난 버전이죠.

### 핵심 강점 3가지

| 강점 | 설명 |
|------|------|
| 🖥️ 코딩 | 코드 작성·리팩토링·디버깅에서 프론티어급 성능 |
| 🤖 에이전트 작업 | 여러 단계를 자동으로 처리하는 복잡한 작업 |
| 💼 전문적 작업 | 분석, 계획, 대규모 업무 처리 |

---

## 모델 라인업 현황 (2026-07-04 기준)

```
모델 계층:
────────────────────────────────────
🥇 Fable 5          ← 최상위 (2026-07-01 전 세계 복귀)
⭐ Sonnet 5         ← 신규! 코딩·에이전트 프론티어
🥈 Opus 4.8         ← 강력한 에이전트 모델
🥉 Sonnet 4.6       ← 균형형 (Pro/Max 기본)
   Haiku 4.5        ← 경량·빠름
```

<div class="note-circle">
○ Sonnet 5의 Opus 4.8과의 정확한 성능 비교는 "공식 발표 기준"으로 계속 업데이트 예정이에요<br />
○ 모델 등급 표기는 공식 문서 기준으로 조정될 수 있어요
</div>

---

## Claude Code에서 Sonnet 5 사용하기

```bash
# 최신 버전으로 업데이트
claude update

# 모델 선택
/model claude-sonnet-5

# 또는 세션 시작 시 지정
claude --model claude-sonnet-5
```

---

## 어떤 작업에 Sonnet 5를 쓰면 좋을까요?

### ✅ Sonnet 5가 빛나는 상황

- **코드 리뷰 & 리팩토링**: 대규모 코드베이스 분석
- **에이전트 자동화 작업**: 여러 파일을 수정하는 복잡한 작업
- **전문 문서 작성**: 기술 문서, 분석 보고서
- **속도가 중요한 작업**: Fable 5보다 빠를 수 있어요 (공식 발표 기준 확인 필요)

### 🤔 Fable 5와의 차이는?

Fable 5는 현재 확인된 최상위 모델이에요. 매우 어렵고 복잡한 문제에는 Fable 5가, 일반적인 코딩/에이전트 작업에는 Sonnet 5가 훌륭한 선택일 수 있어요.

> ⚠️ 두 모델의 정확한 성능 비교는 추가 공식 발표가 나오는 대로 업데이트할게요.

---

## 지원 요금제

Sonnet 5는 Claude 5 패밀리로서 Max, Team, Enterprise 등 프리미엄 플랜에서 사용 가능해요.

| 요금제 | Sonnet 5 사용 가능? |
|--------|-------------------|
| Pro ($17/월~) | 공식 발표 기준 확인 필요 |
| Max 5x ($100/월) | ✅ 추정 |
| Max 20x ($200/월) | ✅ 추정 |
| Team / Enterprise | ✅ 추정 |
| Claude API | ✅ (토큰 과금) |

<div class="note-circle">
○ 요금제별 정확한 포함 여부는 공식 가격 페이지에서 확인하세요<br />
○ <code>[블]</code> — Anthropic 블로그 2026-06-30 발표 기준
</div>

---

## 📎 관련 가이드

- [신규 모델 총정리: Opus 4.8, Fable 5 (2026년 5~6월)](/docs/next/new-models-2026-06)
- [주간 업데이트 Week 26 (2026-06-22~26)](/docs/next/whats-new-w26)
- [모델 설정 — 내가 원하는 모델로 바꾸는 법](/docs/config/model-config)
