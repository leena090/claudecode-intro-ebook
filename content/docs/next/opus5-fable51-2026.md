---
title: "[블] Claude Opus 5 & Fable 5.1 — 2026년 하반기 신모델 완전 정리"
description: "2026년 7~9월 출시된 Opus 5, Fable 5.1, Mythos 5.1까지 — Claude Code에서 달라진 모델 선택 가이드"
tags: ["자동생성", "opus5", "fable5.1", "mythos5.1", "신모델", "블로그", "fast-mode", "기본모델"]
category: "next"
order: 17
lastUpdated: "2026-09-16"
---

<div class="note-star">
★ <strong>[블] Anthropic 공식 블로그 발표 기준</strong> (Opus 5: 2026-07-24 / Fable 5.1·Mythos 5.1: 2026-09-01)<br />
★ <strong>[공] 마케팅 페이지</strong>: Fast Mode 가격 및 대상 모델 업데이트 반영 (2026-09-16 확인)
</div>

---

## 2026년 하반기, Claude 모델 라인업이 완전히 바뀌었어요

2026년 7월~9월 사이, Anthropic이 새 모델 3개를 잇달아 내놓았어요. Claude Code를 사용하는 분이라면 꼭 알아둬야 할 변화예요.

| 모델 | 출시일 | 특징 |
|---|---|---|
| **Claude Opus 5** | 2026-07-24 | 장시간 에이전트 작업 + 코딩·전문 업무 향상 |
| **Claude Fable 5.1** | 2026-09-01 | 코딩·지식 작업 최상위, 과학 연구 미리보기 |
| **Claude Mythos 5.1** | 2026-09-01 | Fable 5.1과 함께 출시된 쌍둥이 최상위 모델 |

---

## 1️⃣ Claude Opus 5 (2026년 7월 24일)

Anthropic 공식 발표 내용:

> "Opus 5 is a step change improvement for the Opus tier powering long-running agents while delivering improvements in coding and professional work."
> (Opus 5는 장시간 실행 에이전트에 동력을 제공하는 Opus 계층의 획기적인 개선이에요. 코딩과 전문 업무에서도 향상됐습니다.)

### 무엇이 달라졌나요?

🍱 **비유로 설명하면**: 이전 Opus가 "단거리 달리기 선수"였다면, Opus 5는 "마라톤 선수"예요. 짧은 작업도 잘하지만, **긴 작업을 끊임없이 이어가는 능력**이 특히 좋아졌어요.

| 항목 | 설명 |
|---|---|
| 🤖 **장시간 에이전트** | 여러 단계를 거치는 복잡한 자동화 작업에 최적 |
| 💻 **코딩 향상** | 코드 작성·리뷰·수정 능력 전반 개선 |
| 🏢 **전문 업무** | 분석, 리서치, 복잡한 추론 등 |

### Claude Code에서의 변화

**2026년 7월 20일부터 Opus 5가 기본 Opus 모델로 전환됐어요.**

```bash
# Opus 5를 명시적으로 지정
claude --model claude-opus-5

# 또는 settings.json에서
# { "model": "claude-opus-5" }
```

---

## 2️⃣ Claude Fable 5.1 & Mythos 5.1 (2026년 9월 1일)

Anthropic 공식 발표 내용:

> "Our most advanced models for coding and knowledge work. Their research capabilities also offer an early glimpse of how AI models will contribute to scientific progress."
> (코딩과 지식 작업을 위한 가장 발전된 모델이에요. 연구 역량은 AI 모델이 과학적 발전에 어떻게 기여할지 미리 보여줍니다.)

🍱 **비유로 설명하면**: Fable 5가 "1등 학생"이었다면, Fable 5.1은 "연구자의 자질도 갖춘 1등 학생"이에요. 코딩·지식 작업을 잘 하는 것에 더해, **과학 연구에 기여하는 능력**도 보이기 시작했어요.

### Claude Code에서 Fable 5.1 사용하기

```bash
# Fable 5.1 사용
claude --model claude-fable-5-1

# w36(2026-08-31) 업데이트 이후
# "Switch to Claude Fable 5.1" 기능으로 Desktop에서도 쉽게 전환 가능
```

<div class="note-circle">
○ Fable 5(구버전)는 2026년 6월 수출통제로 일시 중단됐다가 글로벌 복귀했었어요. 5.1은 그 후속 버전으로, 더 안정적인 접근이 가능해요. 자세한 내용은 <a href="/docs/next/sonnet5-fable5-july2026">Sonnet 5 & Fable 5 안내</a> 참고.
</div>

---

## 3️⃣ Fast Mode — 대상 모델과 가격이 바뀌었어요

Fast Mode(빠른 모드)의 대상 모델과 가격이 변경됐어요.

| 항목 | 이전 | 현재 (2026-09 기준) |
|---|---|---|
| 대상 모델 | Opus 4.8 | **Opus 5** |
| 가격 (input/output) | $30/$150 per M tokens | **$10/$50 per M tokens** |
| 속도 | 2.5배 빠름 | 동일 |
| 제공 방식 | 리서치 프리뷰, 소비 기반 플랜 | 동일 |

> 공식 문서 기준: "Fast mode is a high-speed configuration for Opus 5, making the model 2.5x faster at a higher cost per token. Fast mode is available: In research preview on Claude Code, and is priced at $10/$50 per million tokens."

🍱 **비유로 설명하면**: Fast Mode는 "급행열차"예요. 이전에는 구형 열차(Opus 4.8)로 달렸는데, 이제는 더 빠른 신형 열차(Opus 5)로 교체되면서 오히려 **가격도 내려갔어요**.

---

## 현재 모델 라인업 정리 (2026-09 기준)

| 모델 | 특징 | Claude Code에서 용도 |
|---|---|---|
| **Fable 5.1** | 최상위 (코딩·지식·연구) | 복잡한 아키텍처, 심화 연구 |
| **Sonnet 5** | 기본 모델 (2026-07-01 전환) | 일반 코딩, 하루 일과 |
| **Opus 5** | Opus 계층 (장시간 에이전트) | 장기 자동화, 복잡한 리팩터링 |
| **Haiku 4.5** | 경량·빠름 | 간단한 작업, API 비용 절감 |

---

## 📎 관련 가이드

- [Sonnet 5 & Fable 5 안내](/docs/next/sonnet5-fable5-july2026)
- [주간 업데이트 W30~W37](/docs/next/whats-new-w30-w37) — 이 기간의 기능 업데이트 전체 요약
- [Fast Mode — 빠른 모드 사용하기](/docs/advanced/voice-fast)
- [공식 문서 — fast-mode](https://code.claude.com/docs/en/fast-mode)
