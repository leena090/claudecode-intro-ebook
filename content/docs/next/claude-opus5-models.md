---
title: "[블] 신규 모델 총정리: Opus 5, Fable 5.1, Mythos 5.1 (2026년 7~9월)"
description: "Claude Opus 5 출시, Fast Mode 가격 대폭 인하, 그리고 최강 모델 Fable 5.1·Mythos 5.1 등장까지 한국어로 정리"
tags: ["자동생성", "모델", "opus5", "fable5.1", "mythos5.1", "fast-mode", "2026"]
category: "next"
order: 18
lastUpdated: "2026-09-09"
---

<div class="note-star">
★ <strong>[블]</strong> 이 글은 Anthropic 공식 블로그 발표 기준입니다. 공식 발표 기준으로 작성되었으며, 세부 사항은 추후 변경될 수 있습니다.
<br />★ 출처: Anthropic News (Opus 5: 2026-07-24, Fable 5.1/Mythos 5.1: 2026-09-01)
</div>

## 새 모델이 또 나왔나요? 🆕

2026년 7~9월 사이에 Anthropic이 새 모델을 연달아 발표했어요. 한 줄 요약부터 볼게요:

| 모델 | 발표일 | 한 줄 요약 |
|---|---|---|
| **Claude Opus 5** | 2026-07-24 | 장시간 에이전트 작업의 새 기준 |
| **Claude Fable 5.1** | 2026-09-01 | 코딩·지식 업무 최강 모델 |
| **Claude Mythos 5.1** | 2026-09-01 | 연구·과학적 추론 특화 |

---

## 1. Claude Opus 5 (2026년 7월 24일) `[블]`

### 무엇이 달라졌나요?

Anthropic은 Opus 5를 "**Opus 티어의 단계적 도약**"이라고 표현했어요.

| 항목 | Opus 4.8 (이전) | Opus 5 (신규) |
|------|----------------|---------------|
| 장시간 에이전트 작업 | 좋음 | **크게 향상됨** |
| 코딩 실력 | 강력함 | **더 강력함** |
| 전문 업무 | 우수 | **향상됨** |
| Claude Code 기본 Opus | W22~ | **W30~** (2026-07-21~) |

> 🏋️ **비유**: Opus 4.8이 튼튼한 운동 선수라면, Opus 5는 그 선수가 6개월 더 훈련한 버전이에요.

### Fast Mode 가격이 대폭 낮아졌어요! 💸

Fast Mode가 **Opus 4.8 → Opus 5** 기반으로 바뀌면서 가격이 크게 인하됐어요:

| 항목 | 이전 (Opus 4.8) | 지금 (Opus 5) |
|---|---|---|
| 대상 모델 | Opus 4.8 고속 | **Opus 5 고속** |
| 입력 토큰 | $30 / 백만 | **$10 / 백만** |
| 출력 토큰 | $150 / 백만 | **$50 / 백만** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |

> 💰 **핵심 요점**: 더 좋은 모델(Opus 5)을 더 싸게($30→$10) 빠르게 쓸 수 있어요!
>
> Fast Mode는 **소비 기반 플랜(Consumption-based plan)** 또는 **구독 플랜의 사용 크레딧**으로 이용 가능.

```bash
/fast  # Fast Mode 켜기/끄기 전환
```

### Claude Code에서의 변화

- W30(2026-07-21~)부터 Opus 5가 기본 Opus 모델
- Fast Mode 사용 시 자동으로 Opus 5 고속 버전 적용
- 설정 변경 없이 자동 전환

---

## 2. Claude Fable 5.1 & Mythos 5.1 (2026년 9월 1일) `[블]`

### 새 최강 모델 등장!

Anthropic이 **Fable 5.1**과 **Mythos 5.1**을 발표했어요. 기존 Fable 5·Mythos 5에서 한 단계 더 업그레이드된 버전입니다.

> ⚠️ **참고**: 기존 Fable 5·Mythos 5는 2026-06-12 미국 수출통제로 한때 접근이 중단됐다가 Fable 5는 2026-07-01 복귀했었어요. 5.1 버전은 그 후속 모델입니다.

| 모델 | 특기 |
|---|---|
| **Fable 5.1** | 코딩, 지식 업무에서 최고 성능 |
| **Mythos 5.1** | 과학적 연구·추론 특화 + AI가 과학 발전에 기여하는 모습 첫 공개 |

### Claude Code에서 Fable 5.1 사용하기

```bash
claude --model claude-fable-5-1  # Fable 5.1 지정 사용
```

또는 `/config`에서 모델 변경 가능.

### 모델 전체 라인업 (2026년 9월 기준)

> 🔍 공식 발표 기준 / 상세 가격은 Anthropic 공식 사이트 확인 권장

| 모델 | 용도 | 특징 |
|---|---|---|
| **Haiku 4.5** | 빠른 단순 작업 | 가볍고 저렴 |
| **Sonnet 5** | 일상적인 코딩 (기본) | 속도·품질 균형 |
| **Opus 5** | 복잡한 장시간 작업 | 고성능 |
| **Fable 5.1** | 최고 코딩·지식 업무 | 최강 성능 |
| **Mythos 5.1** | 과학 연구·추론 | 전문 연구 특화 |

> 🎯 **입문자 추천**: 처음에는 기본 모델(Sonnet 5)로 시작하세요. Opus나 Fable는 정말 어렵고 복잡한 작업에만 사용하는 게 비용 효율적이에요.

---

## 3. "오픈 웨이트 모델"에 대한 Anthropic 입장 (2026년 7월 27일)

개발자 커뮤니티에서 뜨거운 주제인 "**오픈소스 AI 모델**"에 대해 Anthropic이 공식 입장을 발표했어요.

> 📌 **핵심**: Anthropic은 "오픈 웨이트(공개 가중치) 모델"의 장단점을 투명하게 논의하고, 안전성과 혁신 사이의 균형을 고민하겠다는 입장을 밝혔어요.

이 주제는 한국어 코딩 입문 전자책과 직접 관련은 낮지만, AI 업계 트렌드로 참고하세요.

---

## 빠른 참고 표

| 항목 | 내용 |
|---|---|
| Opus 5 출시일 | 2026-07-24 |
| Claude Code 기본 적용 | W30~ (2026-07-21~) |
| Fast Mode 새 가격 | $10/$50 per million tokens |
| Fast Mode 대상 모델 | Opus 5 (기존 Opus 4.8에서 변경) |
| Fable 5.1/Mythos 5.1 | 2026-09-01 출시 |

---

## 🔖 관련 공식 링크

- [Introducing Claude Opus 5 (블로그)](https://www.anthropic.com/news/claude-opus-5)
- [Introducing Claude Fable 5.1 and Mythos 5.1 (블로그)](https://www.anthropic.com/news)
- [Fast Mode 공식 문서](https://code.claude.com/docs/en/fast-mode)
- [모델 설정 문서](https://code.claude.com/docs/en/model-config)
- [이전 모델 정리 (Opus 4.8, Fable 5, Sonnet 5)](new-models-2026-06.md)
