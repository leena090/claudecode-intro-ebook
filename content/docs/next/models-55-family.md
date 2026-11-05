---
title: "[블] Claude 5.5 패밀리 — Opus·Sonnet·Haiku 5.5 한눈에 보기"
description: "2026년 가을 출시된 Claude 5.5 시리즈 세 모델의 특징, 성능, 요금을 입문자 눈높이로 정리"
tags: ["자동생성", "모델", "opus5.5", "sonnet5.5", "haiku5.5", "5.5", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-11-05"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Anthropic 공식 뉴스 기반. <code>[블]</code><br />
👉 <a href="https://www.anthropic.com/news/claude-opus-5-5" target="_blank">Opus 5.5 발표</a> · <a href="https://www.anthropic.com/news/claude-sonnet-5-5" target="_blank">Sonnet 5.5 발표</a> · <a href="https://www.anthropic.com/news/claude-haiku-5-5" target="_blank">Haiku 5.5 발표</a>
</div>

## Claude 5.5 시리즈가 뭔가요?

2026년 가을, Anthropic이 세 모델을 연달아 발표했어요.  
**Haiku → Sonnet → Opus**, 순서대로 작은 것부터 큰 것 순이에요.

> 🍱 **비유**: 치킨집 메뉴처럼 생각해 보세요.  
> - **Haiku** = 순살 1인 세트 (빠르고 가볍고 저렴)  
> - **Sonnet** = 반마리 세트 (가성비 최고, 가장 많이 주문)  
> - **Opus** = 한마리 세트 (무겁고 정교한 작업에 최적)

---

## 세 모델 비교표

| 모델 | 발표일 | 특징 | 쓰임새 |
|------|--------|------|--------|
| **Claude Haiku 5.5** | 2026-10-07 | 가장 빠른 소형 모델 | 서브에이전트, 요약, 브라우저 작업 |
| **Claude Sonnet 5.5** | 2026-09-28 | 30%+ 빠름, 최대 30% 저렴 | 일반 코딩, 에이전트, 전문 업무 |
| **Claude Opus 5.5** | 2026-09-22 | 에이전트 코딩 최고 성능 | 복잡한 멀티스텝 작업, 코드 리뷰 |

---

## 각 모델 자세히 보기

### 🔵 Claude Opus 5.5 — 에이전트 코딩의 왕

**"Opus 5보다 40% 저렴하면서 성능은 더 좋아졌어요"**

Opus 5.5는 아주 복잡한 작업에서 진가를 발휘해요.  
여러 단계를 거쳐야 하는 코딩 작업, 오랜 시간 혼자 돌아가는 에이전트 작업에 최고예요.

- Claude Code의 **Fast Mode(패스트 모드)** 는 이제 Opus 5.5 기반
- Fast Mode 가격: **$8/$40 per million tokens** (이전 Opus 4.8 대비 대폭 인하!)
- Max, Team, Enterprise 플랜에서 사용 가능

> 💡 **입문자 팁**: 복잡한 버그를 오래 고민하거나, 큰 코드베이스를 분석할 때 써보세요.

---

### 🟢 Claude Sonnet 5.5 — 가성비 최강

**"빠른데 저렴하다고요? 맞아요"**

Sonnet 5.5는 대부분의 개발자에게 "기본 선택"이에요.

- Sonnet 5 대비 **30%+ 빠름**
- 대부분 작업에서 **최대 30% 저렴**
- 코딩, 에이전트 실행, 전문 업무 전방위 활약

> 💡 **입문자 팁**: 뭘 써야 할지 모르겠다면 Sonnet 5.5를 기본으로 쓰세요.

---

### 🟡 Claude Haiku 5.5 — 빠르고 가벼운 조수

**"서브에이전트용 최적 모델"**

Haiku 5.5는 단독으로 쓰기보다, 큰 모델과 팀을 이뤄 쓸 때 빛나요.

- 가장 빠른 소형 모델
- 요약, 분류, 브라우저 조작처럼 **반복적이고 단순한 작업** 담당
- Dynamic Workflows에서 서브에이전트로 대량 투입 가능

> 💡 **비유**: Haiku는 "심부름꾼"이에요. 10명의 Haiku가 동시에 여러 파일을 열어 요약하고, Sonnet이 그 결과를 종합해요.

---

## Fast Mode가 훨씬 저렴해졌어요

| 항목 | 이전 (Opus 4.8 기준) | 현재 (Opus 5.5 기준) |
|------|--------------------|--------------------|
| Fast Mode 모델 | Opus 4.8 | **Opus 5.5** |
| 입력 토큰 (1M당) | $30 | **$8** |
| 출력 토큰 (1M당) | $150 | **$40** |
| 속도 | 약 2.5배 빠름 | 약 2.5배 빠름 |

> ⚠️ **주의**: Fast Mode는 현재 리서치 프리뷰(research preview) 단계이며 소비 기반 플랜(consumption-based plan)에서 사용 가능해요.

---

## 모델 선택 가이드

```
어떤 모델을 써야 할까?
├── 많은 양의 간단한 작업 → Haiku 5.5
├── 일반 코딩/분석/글쓰기 → Sonnet 5.5 (기본값)
└── 복잡한 멀티스텝 작업 → Opus 5.5
    └── 빠르게 하고 싶다? → Opus 5.5 Fast Mode
```

---

## Claude Code에서 모델 바꾸는 방법

```text
# 모델 직접 지정
> /model claude-opus-5-5
> /model claude-sonnet-5-5
> /model claude-haiku-5-5

# 또는 모델 선택 UI 열기
> /model
```

---

> 📌 **정리**: 2026년 가을 Claude 5.5 시리즈 출시로 모델 성능은 올라가고 가격은 내려갔어요.  
> 특히 Fast Mode가 $30 → $8로 대폭 인하된 건 많이 쓰는 개발자에게 큰 혜택이에요.
