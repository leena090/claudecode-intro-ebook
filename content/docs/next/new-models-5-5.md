---
title: "[공][블] Claude 5.5 모델 패밀리 완성 — Opus·Sonnet·Haiku 5.5 출시"
description: "2026년 9~10월 Claude 5.5 시리즈가 완성됐어요. Opus 5.5·Sonnet 5.5·Haiku 5.5 각각의 특징과 Claude Code에서 어떻게 활용할지 정리합니다"
tags: ["자동생성", "모델업데이트", "Opus5.5", "Sonnet5.5", "Haiku5.5", "5.5시리즈", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-10-14"
---

<div class="note-star">
★ <strong>[공]</strong> Claude Opus 5.5 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 22, 2026)<br />
★ <strong>[공]</strong> Claude Sonnet 5.5 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 28, 2026)<br />
★ <strong>[공]</strong> Claude Haiku 5.5 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Oct 7, 2026)
</div>

## 2026년 가을, 5.5 삼총사 등장

2026년 9~10월 사이에 Claude 모델 5.5 시리즈가 차례로 등장했어요. Opus → Sonnet → Haiku 순서로 발표되면서 5.5 세대가 완성됐습니다.

> 🚀 **비유로 설명하면**: 스마트폰 신제품 발표처럼, 고급형(Opus)·중간형(Sonnet)·보급형(Haiku) 세 모델이 동시에 세대를 올린 거예요. 다 같은 세대라서 서로 호환이 잘 되고, 각자 맡은 역할에서 이전보다 확실히 좋아졌습니다.

---

## 모델별 특징 한눈에

| 모델 | 출시일 | 핵심 특징 |
|---|---|---|
| **Claude Opus 5.5** | Sep 22, 2026 | Fable 5.1 수준 성능, Opus 5 대비 **40% 저렴** |
| **Claude Sonnet 5.5** | Sep 28, 2026 | Sonnet 5 대비 **30% 빠르고** 최대 30% 저렴 |
| **Claude Haiku 5.5** | Oct 7, 2026 | 역대 가장 빠르고 저렴한 소형 모델, 대량 처리 특화 |

---

## Claude Opus 5.5 — "같은 성능, 더 낮은 가격"

### 왜 중요한가요?

공식 발표 기준: **"대부분의 작업에서 Claude Fable 5.1 수준으로 작동하면서 Opus 5 대비 40% 저렴"** 합니다.

> 🏪 **비유**: 맛은 똑같은데 가격만 40% 내린 식당이 생긴 거예요. Fable 5.1이 '특선 코스'라면, Opus 5.5는 '같은 셰프가 만드는 합리적 메뉴'입니다.

### Claude Code에서 Opus 5.5 쓰기

```bash
# 모델 직접 지정
claude --model claude-opus-5-5

# settings.json에서 기본 모델 변경
{
  "model": "claude-opus-5-5"
}
```

⚡ **Fast Mode**도 이제 Opus 5.5 기준입니다 — 2.5배 빠른 속도, **$8/$40 per million tokens** (연구 프리뷰, 소비 기반 플랜 기준).

---

## Claude Sonnet 5.5 — "더 빠르고 더 저렴한 균형형"

### 왜 중요한가요?

공식 발표 기준: **"Sonnet 5 대비 30% 빠르고 대부분 작업에서 최대 30% 저렴"** 합니다.

> 🚂 **비유**: 기존 고속열차에서 더 빠른 KTX 신형으로 바뀐 느낌이에요. 요금은 내려가고 속도는 올라갔습니다.

Claude Code의 **기본 모델은 현재 `claude-sonnet-5`** 예요. 5.5 전환 시기는 공식 발표를 기다려야 합니다 (추정).

---

## Claude Haiku 5.5 — "소형이지만 역대 최강"

### 왜 중요한가요?

공식 발표 기준: **"역대 가장 빠르고 저렴하며 가장 유능한 소형 모델. 대량·비용 민감한 작업에 특화"** 입니다.

> 🏃 **비유**: 마라톤 선수를 스프린터 수준으로 훈련시킨 것처럼, 빠른 속도와 낮은 비용을 동시에 달성했어요.

### 어떤 상황에 쓰면 좋을까요?

| 상황 | 추천 이유 |
|---|---|
| 파일 수백 개 반복 처리 | 빠르고 저렴해서 대량 작업에 최적 |
| 간단한 코드 수정·포맷팅 | 과도한 모델 낭비 없이 빠른 처리 |
| 에이전트 서브태스크 | 서브에이전트를 Haiku 5.5로 지정해 비용 절감 |

```bash
# 서브에이전트에 Haiku 5.5 지정 (Agent SDK 예시)
{
  "subagents": [
    { "name": "formatter", "model": "claude-haiku-5-5" }
  ]
}
```

---

## 5.5 시리즈로 넘어가야 할까요?

| 현재 사용 중 | 권장 전환 |
|---|---|
| claude-opus-5 | → claude-opus-5-5 (성능 유지, 비용↓) |
| claude-sonnet-5 | → claude-sonnet-5-5 (속도↑, 비용↓) |
| claude-haiku-4-5 | → claude-haiku-5-5 (성능↑, 비용 유사) |

**공식 기준**: 5.5가 각 계층에서 더 나은 가성비를 보여주니, 특별한 이유가 없다면 5.5로 전환을 추천합니다 (추정 기준).

---

## Fast Mode 업데이트 (Opus 5.5 기준)

마케팅 페이지 공식 확인 기준으로 Fast Mode가 바뀌었어요:

| 항목 | 이전 (Opus 4.8) | 현재 (Opus 5.5) |
|---|---|---|
| 기준 모델 | claude-opus-4-8 | **claude-opus-5-5** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |
| 가격 | $30/$150 /M tokens | **$8/$40 /M tokens** |

> 💡 가격이 크게 내렸어요. 소비 기반 플랜 사용자는 Fast Mode가 훨씬 더 경제적입니다.
