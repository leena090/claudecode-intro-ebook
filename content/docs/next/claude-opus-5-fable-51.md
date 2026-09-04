---
title: "[공][블] Claude Opus 5 + Fable 5.1·Mythos 5.1 출시 — 2026년 7~9월 모델 업데이트"
description: "2026년 7월 Claude Opus 5가 나왔고, 9월에는 Fable 5.1·Mythos 5.1이 등장했어요. Fast Mode도 Opus 5 기준으로 가격이 크게 낮아졌습니다"
tags: ["자동생성", "Opus5", "Fable5.1", "Mythos5.1", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-09-04"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5 출시: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)<br />
★ <strong>[블]</strong> Fable 5.1·Mythos 5.1 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)<br />
★ <strong>[공]</strong> Fast Mode 업데이트: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (공식 마케팅 페이지 확인)
</div>

## 한 눈에 보는 7~9월 모델 변화

| 날짜 | 내용 |
|---|---|
| 2026-07-24 | **Claude Opus 5** 공식 출시 |
| 2026-07-24 | **Fast Mode** → Opus 5 기준으로 변경 (가격 대폭 인하) |
| 2026-09-01 | **Claude Fable 5.1** + **Claude Mythos 5.1** 출시 |

---

## 1. Claude Opus 5 (2026년 7월 24일) `[블]`

### 무엇이 달라졌나요?

Opus 5는 기존 Opus 4.8보다 **장기 에이전트 작업**과 **코딩**, **전문 업무** 전반에서 크게 향상된 모델이에요.

| 항목 | Opus 4.8 | **Opus 5** |
|------|----------|-----------|
| 코딩 실력 | 강력함 | 더 강력함 ⬆️ |
| 장기 에이전트 실행 | 좋음 | **한 단계 도약** ⬆️ |
| 전문 업무 성능 | 좋음 | 향상됨 ⬆️ |
| Fast Mode 지원 | ❌ (4.8까지) | ✅ **신규** |

> 🚀 **비유**: Opus 4.8이 "장거리 버스"라면, Opus 5는 "KTX"예요 — 같은 목적지를 더 빠르고 정확하게 달립니다. 그리고 이제 "고속 급행 KTX(Fast Mode)"도 Opus 5에서만 달려요.

### Claude Code에서 어떻게 달라지나요?

Opus 5는 특히 **여러 작업을 연속으로 오래 맡기는** 에이전트 워크플로우에서 강점을 발휘해요.

```bash
# Opus 5 명시적 선택 (소비 기반 플랜)
claude --model claude-opus-5

# 또는 설정 파일로 고정
# ~/.claude/settings.json
{
  "model": "claude-opus-5"
}
```

---

## 2. Fast Mode: Opus 4.8 → Opus 5, 가격도 달라졌어요 `[공]`

### Fast Mode가 뭔가요?

Fast Mode는 **Claude Code에서 Opus 모델을 2.5배 빠르게** 실행하는 고속 설정이에요. 단, 속도가 빠른 만큼 토큰당 비용이 높아요.

### 가격 변화 (공식 마케팅 페이지 기준)

| | 이전 (Opus 4.8) | **이후 (Opus 5)** |
|---|---|---|
| 대상 모델 | Opus 4.8 | **Opus 5** |
| 입력 가격 | $30/백만 토큰 | **$10/백만 토큰** ⬇️ |
| 출력 가격 | $150/백만 토큰 | **$50/백만 토큰** ⬇️ |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |

> 💡 **중요**: Opus 5 기반으로 바뀌면서 가격이 **⅓로** 낮아졌어요! 같은 돈으로 3배 더 많은 작업을 할 수 있는 셈이에요.

### 어떤 플랜에서 쓸 수 있나요?

- **리서치 프리뷰** 단계 — Claude Code에서 제공
- **소비 기반(Consumption) 플랜** 사용자
- 구독 플랜 사용자는 **Usage Credits** 방식으로 사용 가능

> ⚠️ **추정**: Fast Mode 가격은 공식 마케팅 페이지 기준입니다. 출시 초기 리서치 프리뷰 가격이므로 정식 출시 시 변경될 수 있어요.

---

## 3. Claude Fable 5.1 + Claude Mythos 5.1 (2026년 9월 1일) `[블]`

### 이름에 ".1"이 붙은 이유는?

Fable 5.1과 Mythos 5.1은 6월에 발표된 Fable 5·Mythos 5의 **업그레이드 버전**이에요.

| 항목 | Fable 5 / Mythos 5 | **Fable 5.1 / Mythos 5.1** |
|------|-------------------|--------------------------|
| 코딩 성능 | 최고 수준 | 더 향상됨 ⬆️ |
| 지식 업무 | 최고 수준 | 더 향상됨 ⬆️ |
| 과학 연구 역량 | - | **새로 강화** ⬆️ |
| 출시 날짜 | 2026-06-09 | **2026-09-01** |

공식 발표에 따르면, 5.1 버전은 특히 **과학 연구** 분야에서 AI 모델이 앞으로 어떻게 기여할 수 있는지를 **미리 엿볼 수 있는** 수준의 능력을 보여준다고 해요.

> 🔬 **비유**: 5.0이 "뛰어난 연구 조교"라면, 5.1은 "논문도 직접 쓸 수 있는 연구 파트너"에요. 과학 분야에서의 AI 역할이 한 단계 더 올라간 거예요.

### 2026년 모델 전체 라인업 (2026-09-04 기준)

```
최상위 │ Fable 5.1   ← 코딩+지식+과학 연구 최강 (Sep 1, 2026)
       │ Mythos 5.1  ← 복잡한 추론 특화 최강 (Sep 1, 2026)
       │
상위   │ Opus 5      ← 장기 에이전트·전문 업무 (Jul 24, 2026)
       │
중위   │ Sonnet 5    ← 기본 코딩·에이전트 (Jun 30, 2026)
       │             → Claude Code 기본 모델 (Jul 1, 2026~)
       │
경량   │ Haiku 4.5   ← 빠른 응답·가벼운 작업
```

> ⚠️ **주의**: 이 라인업은 공식 발표 + 추정 기반입니다. Fable·Mythos 5.1 접근성(수출통제 해제 여부 등)은 공식 채널에서 확인하세요.

---

## 정리: 지금 Claude Code 사용자에게 의미하는 것

| 상황 | 추천 모델 |
|---|---|
| 일반 코딩 (기본) | **Sonnet 5** (기본 제공) |
| 복잡한 장기 작업 | **Opus 5** |
| 빠른 Opus 필요 | **Opus 5 + Fast Mode** |
| 최상위 성능 필요 | **Fable 5.1** (플랜 확인 필요) |
| 가벼운 빠른 응답 | **Haiku 4.5** |

Fast Mode 가격이 $30/$150에서 $10/$50로 대폭 낮아졌으니, 빠른 고성능 작업이 필요한 분들에게 좋은 소식이에요! 🎉

---

*출처: [블] anthropic.com/news (Jul 24, 2026 / Sep 1, 2026), [공] claude.com/claude-code 마케팅 페이지 (2026-09-04 확인)*
