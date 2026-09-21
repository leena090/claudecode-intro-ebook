---
title: "[블] Claude Fable 5.1 · Mythos 5.1 · Opus 5 — 2026년 하반기 신규 모델 총정리"
description: "2026년 7~9월 발표된 Opus 5(기본 모델 교체), Fable 5.1, Mythos 5.1까지 한 번에 정리"
tags: ["자동생성", "신규모델", "Opus 5", "Fable 5.1", "Mythos 5.1", "fast mode", "모델업데이트"]
category: "next"
order: 17
lastUpdated: "2026-09-21"
---

<div class="note-star">
★ <strong>[블] Fable 5.1 · Mythos 5.1</strong> — 2026-09-01 Anthropic 공식 발표 기준<br />
★ <strong>[공] Opus 5</strong> — 2026-07-24 Claude Code 공식 문서 (v2.1.219) 기준<br />
★ <strong>추정 포함</strong> — Fable 5.1 · Mythos 5.1 세부 벤치마크는 공개 발표 내용이 제한적으로, 발표 원문 기준으로만 정리했어요.
</div>

## 새 모델들이 왜 중요한가요?

2026년 하반기에 Anthropic이 모델을 세 번 업그레이드했어요.  
가장 쉽게 이해하는 방법은 **차량 라인업**에 비유하는 거예요.

> 🚗 **비유로 설명하면**: 현대차가 "아반떼"를 팔다가 "아반떼 N"을 출시하고, "제네시스 GV80"을 업그레이드한 것처럼, Anthropic도 기존 Fable 5·Opus 4.8 라인업을 **Opus 5 · Fable 5.1 · Mythos 5.1**로 갱신했어요.

---

## 1. Claude Opus 5 (2026년 7월, Week 30)

### 무엇이 바뀌었나요?

| 항목 | 이전 (Opus 4.8) | 현재 (Opus 5) |
|---|---|---|
| **기본 Opus 모델** | claude-opus-4-8 | **claude-opus-5** |
| **기본 컨텍스트** | 200K | **1M 토큰** (Pro·Max·Enterprise) |
| **Fast Mode 대상** | Opus 4.8 | **Opus 5** |
| **Fast Mode 가격** | $30/$150/MTok | **$10/$50/MTok** |
| **적용 플랜** | 전체 | Max, Team Premium, Enterprise, API |

> 💰 **Fast Mode 가격이 3분의 1로 줄었어요!** Opus 5 도입과 함께 Fast Mode($10/$50) 요금이 크게 낮아졌어요. 이전 $30/$150에서 대폭 인하된 공식 요금입니다.

### 어떻게 바꾸나요?

```text
> /model claude-opus-5
```

또는 모델 피커에서 선택하면 돼요.

### 1M 컨텍스트 창이란?

> 📚 **비유로 설명하면**: 예전에는 소설 한 권 분량(200K)만 한 번에 올릴 수 있었다면, 이제는 소설 **다섯 권**을 한 번에 펼쳐놓고 클로드와 얘기할 수 있어요. 대형 코드베이스 전체를 컨텍스트에 올리는 게 가능해졌어요.

- Amazon Bedrock, Google Cloud Agent Platform에서도 사용 가능 (1M 모델 변형 선택 필요)

---

## 2. Claude Fable 5.1 · Mythos 5.1 (2026년 9월)

### 공식 발표 (추정 최소화)

2026년 9월 1일 Anthropic 공식 발표 내용:

> *"Our most advanced models for coding and knowledge work. Their research capabilities also offer an early glimpse of how AI models will contribute to scientific progress."*

**핵심 문장 번역**: "코딩과 지식 작업을 위한 가장 발전된 모델들. 연구 기능은 AI 모델이 과학적 발전에 기여할 수 있는 방식의 초기 모습을 보여줌."

### 모델 위치 정리

```
Mythos 5.1 (최상위 — 연구·고난도 추론)
    ↑
Fable 5.1 (코딩·지식 작업 최전선)
    ↑
Sonnet 5 (일상 코딩 · 균형잡힌 성능)
    ↑
Opus 5 (기본 Opus — 멀티태스킹·긴 컨텍스트)
    ↑
Haiku 4.5 (빠른 응답·가벼운 작업)
```

### Claude Code에서는?

- Claude Code의 기본 모델은 **Sonnet 5** (2026-07-01 이후)
- `/model claude-fable-5-1` 또는 `/model claude-mythos-5-1`로 전환 가능
- 과금: 토큰 소비 기반 (소비 기반 플랜 또는 사용 크레딧)

---

## 3. 마케팅 페이지에서 확인된 변경

마케팅 공식 페이지(claude.com/claude-code)에서 아래 내용이 갱신됐어요 (2026-09-21 기준):

| 변경 항목 | 이전 | 현재 |
|---|---|---|
| **Fast Mode 대상 모델** | Opus 4.8 | **Opus 5** |
| **Fast Mode 가격** | $30/$150/MTok | **$10/$50/MTok** |
| **최신 기능 하이라이트** | Dynamic workflows, Agent view | **Projects**, Auto mode 기본값화, Self-hosted environments, Artifacts |

---

## 4. Auto mode — 이제 기본값!

> 🔒 **예전**: Claude Code 처음 설치하면 매 명령마다 허락을 물어봤어요.  
> ✅ **지금**: **Pro·Max·Team 플랜에서는 Auto mode가 기본값**이에요. 클로드가 더 길게 일하면서도 위험한 명령은 알아서 잡아줘요. (2026-09-17 공식 발표)

Auto mode 설정 방법은 → [auto-mode-config](/docs/advanced/auto-mode-config) 참고

---

## 정리

| 이벤트 | 날짜 | 핵심 변화 |
|---|---|---|
| Opus 5 출시 | 2026-07-24 | 기본 Opus 교체, Fast Mode $10/$50, 1M 컨텍스트 |
| Fable 5.1 + Mythos 5.1 | 2026-09-01 | 최상위 모델 업그레이드 |
| Auto mode 기본값화 | 2026-09-17 | Pro·Max·Team 자동 활성화 |

> 📌 **입문자 요약**: 모델 이름 복잡해 보여도 걱정 마세요. Claude Code 열면 자동으로 최신 모델(Sonnet 5)이 쓰여요. 더 어려운 작업엔 `/model claude-fable-5-1`을 써보세요.
