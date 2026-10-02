---
title: "[블] Claude Sonnet 5.5 · Opus 5.5 · Fable 5.1 — 2026년 9월 모델 대업데이트"
description: "2026년 9월, Claude Fable 5.1/Mythos 5.1에 이어 Opus 5.5와 Sonnet 5.5가 연달아 출시됐어요. Fast Mode 요금도 Opus 5.5 기준으로 바뀌었어요"
tags: ["자동생성", "Sonnet5.5", "Opus5.5", "Fable5.1", "모델업데이트", "FastMode"]
category: "next"
order: 17
lastUpdated: "2026-10-02"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Fable 5.1 + Mythos 5.1: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)
<br />★ <strong>[블]</strong> Claude Opus 5.5: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 22, 2026)
<br />★ <strong>[블]</strong> Claude Sonnet 5.5: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 28, 2026)
<br />★ <strong>[공]</strong> Fast Mode 요금 갱신: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Oct 2026)
</div>

## 한 눈에 보는 9월 모델 변화

비유로 먼저 설명하면, Claude 모델은 마치 **자동차 라인업**과 같아요.

- **Sonnet** = 연비 좋은 중형 세단 🚗 (가성비, 빠름)
- **Opus** = 고급 대형 세단 🚙 (무겁지만 강력)
- **Fable/Mythos** = 최고급 스포츠카 🏎️ (가장 강력, 최상위)

9월에는 세단 라인 전체가 새로 출시됐어요.

| 날짜 | 모델 | 핵심 내용 |
|---|---|---|
| Sep 1, 2026 | **Claude Fable 5.1 / Mythos 5.1** | 최상위 모델 업그레이드, 과학 연구 능력 대폭 강화 |
| Sep 22, 2026 | **Claude Opus 5.5** | Fable 5.1 수준 성능, 이전 Opus 5보다 40% 저렴 |
| Sep 28, 2026 | **Claude Sonnet 5.5** | Sonnet 5보다 30% 빠르고 최대 30% 저렴 |

---

## Claude Fable 5.1 + Mythos 5.1 (Sep 1)

### 무엇이 달라졌나요?

**Claude Fable 5.1** (`claude-fable-5-1`)과 **Claude Mythos 5.1** (`claude-mythos-5-1`)은 기존 Fable 5/Mythos 5의 마이너 업그레이드예요.

- **코딩·지식 작업** 부문에서 최고 성능 유지
- **과학 연구 능력** 강화: AI가 과학적 진보에 기여하는 방법의 초기 모습을 보여준다고 Anthropic이 설명
- Mythos 5.1은 최고 수준의 추론·연구 작업에 특화

### Claude Code에서의 영향

Claude Code에서 `/fast` 모드 외 일반 대화 시 최상위 작업에 활용될 수 있는 모델이에요.

---

## Claude Opus 5.5 (Sep 22)

### 핵심 포인트

> "Fable 5.1 수준의 성능이면서 Opus 5보다 40% 저렴하다"  
> — Anthropic 공식 발표 기준

**이전 Opus 5**가 출시됐을 때는 "Fable 5.1보다 한 단계 아래지만 가성비"가 셀링 포인트였어요. **Opus 5.5**는 그 간격을 좁히면서 비용도 낮춘 거예요.

```
claude-opus-5-5  (모델 ID 추정)
```

> ⚠️ 공식 모델 ID는 출시 공지 기준. 변경될 수 있어요.

---

## Claude Sonnet 5.5 (Sep 28)

### 핵심 포인트

> "Sonnet 5보다 30% 빠르고, 대부분 작업에서 최대 30% 저렴하다"  
> — Anthropic 공식 발표 기준

Claude Code의 **기본 모델**은 현재 `claude-sonnet-5`예요. Sonnet 5.5 출시 이후 기본 모델 교체 여부는 공식 발표를 확인하세요.

> ✅ 지금 기본 모델 확인: `/model` 명령어로 현재 사용 중인 모델을 볼 수 있어요

### 속도가 30% 빠르면 얼마나 차이날까요?

예를 들어 "이 파일 전체 리뷰해줘" 요청이 Sonnet 5에서 10초 걸렸다면, Sonnet 5.5에서는 약 **7초**예요. 작은 것 같지만, 하루에 수십 번 반복되는 개발 작업에서는 체감이 달라요.

---

## Fast Mode 요금 변경 🚨

마케팅 페이지(claude.com/claude-code) 기준으로 Fast Mode 정보가 바뀌었어요.

| 구분 | 이전 (2026-07-18 기준) | 현재 (2026-10 기준) |
|---|---|---|
| 대상 모델 | Opus 4.8 | **Opus 5.5** |
| 요금 | $30/$150 per M tokens | **$8/$40 per M tokens** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 상태 | 리서치 프리뷰 | 리서치 프리뷰 |

> 📌 **공식 발표 기준**: 마케팅 페이지 확인 내용. 요금은 변동될 수 있어요.

Fast Mode는 Claude Code에서 `/fast` 명령어로 활성화할 수 있어요. Opus 5.5 기준으로 바뀌었다는 건, 이제 Fast Mode가 **한 단계 더 강력한 모델**을 빠르게 쓸 수 있다는 의미예요.

---

## 현재 Claude Code 모델 라인업 (2026년 10월 기준)

| 모델 | 특징 | 위치 |
|---|---|---|
| claude-fable-5-1 | 최상위, 과학 연구 특화 | 최고급 |
| claude-mythos-5-1 | 최상위, 추론 특화 | 최고급 |
| claude-opus-5-5 | Fable 5.1 수준 성능, 40% 저렴 | 고급 |
| **claude-sonnet-5** | 현재 기본 모델 | 균형 |
| claude-sonnet-5-5 | 30% 빠름, 최대 30% 저렴 | 균형 (신규) |
| claude-haiku-4-5 | 경량, 빠른 작업용 | 경량 |

> ⚠️ Sonnet 5.5가 기본 모델로 전환됐을 수 있어요. `/model` 명령어로 현재 상태를 확인하세요.

---

## 다음에 나올 수 있는 것들

Fable 5.1 발표에서 "AI가 과학적 진보에 기여하는 초기 모습"이라는 표현이 나왔어요. Anthropic이 연구·과학 분야에 AI를 적극 활용하는 방향으로 가고 있다는 신호예요. 코딩 도구이기도 하지만, 점점 더 복잡한 추론과 장기 작업을 해내는 방향으로 발전하고 있어요.
