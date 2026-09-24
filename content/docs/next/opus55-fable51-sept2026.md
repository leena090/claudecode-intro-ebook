---
title: "[블][공] Claude Opus 5.5 + Fable 5.1 — 2026년 9월 모델 대격변"
description: "Fable 5.1·Mythos 5.1 출시(9월 1일)에 이어 Opus 5.5가 9월 22일 공개됐어요. Fable 5.1 수준 성능을 40% 저렴하게 쓸 수 있고, Fast Mode도 Opus 5.5 기반으로 가격이 내려갔어요"
tags: ["자동생성", "Opus5.5", "Fable5.1", "Mythos5.1", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-09-24"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Fable 5.1 + Mythos 5.1 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)<br />
★ <strong>[블]</strong> Claude Opus 5.5 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 22, 2026)<br />
★ <strong>[공]</strong> Fast Mode 변경: <a href="https://code.claude.com/docs/en/fast-mode">code.claude.com/docs/en/fast-mode</a>
</div>

## 한 눈에 보는 9월 모델 변화

| 날짜 | 내용 |
|---|---|
| 2026-09-01 | **Claude Fable 5.1** + **Claude Mythos 5.1** 공식 출시 |
| 2026-09-22 | **Claude Opus 5.5** 공식 출시 |
| 2026-09-~~ | **Fast Mode** 기준 모델이 Opus 4.8 → **Opus 5.5**로 교체, 가격 인하 |

---

## Claude Fable 5.1 / Mythos 5.1 — 최상위 라인업 갱신

### 무엇이 달라졌나요?

**Claude Fable 5.1**(`claude-fable-5-1`)과 **Claude Mythos 5.1**(`claude-mythos-5-1`)은 Anthropic의 최상위 모델 라인을 한 단계 더 끌어올린 버전이에요.

> 🏆 **비유로 설명하면**: Fable 5가 "전국 1등 선수"였다면, Fable 5.1은 **"세계 대회를 앞두고 더 훈련한 그 선수"** 예요.

공식 발표에 따르면, 이 모델들은 코딩과 지식 작업에서 **최첨단 성능**을 내면서 **과학 연구에도 AI가 기여할 수 있다는 가능성**을 처음으로 보여준다고 해요 (공식 발표 기준).

| 항목 | Fable 5.1 | Mythos 5.1 |
|---|---|---|
| **강점** | 코딩 · 지식 작업 최전선 | 코딩 · 지식 작업 최전선 |
| **특징** | 연구 능력 강화 | 연구 능력 강화 |
| **출시일** | 2026년 9월 1일 | 2026년 9월 1일 |

<div class="note-star">
★ W36(2026-09-01~04) 업데이트: Claude Code Desktop에서 <strong>Fable 5.1로 전환</strong>하는 버튼이 생겼어요. Desktop 설정에서 바로 바꿀 수 있어요.
</div>

---

## Claude Opus 5.5 — "Fable 5.1 수준, 40% 저렴"

### 왜 중요한가요?

**Claude Opus 5.5**는 Anthropic 블로그 기준으로 다음과 같이 설명해요:

> "대부분의 작업에서 **Claude Fable 5.1과 동등한 수준**으로 수행하며, Opus 5 대비 **40% 저렴**합니다."

> 💰 **비유로 설명하면**: Fable 5.1이 "프리미엄 레스토랑 코스 요리"라면, Opus 5.5는 **"같은 셰프가 만든 런치 세트"** 예요 — 거의 같은 맛인데 가격이 훨씬 합리적이에요.

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5-5` |
| **성능** | Fable 5.1 수준 (대부분 작업 기준) |
| **가격** | Opus 5 대비 40% 저렴 |
| **출시일** | 2026년 9월 22일 |

### Claude Code에서 사용하기

```bash
# 모델 전환
/model claude-opus-5-5
```

또는 설정 파일로 고정:
```json
{
  "model": "claude-opus-5-5"
}
```

---

## Fast Mode도 바뀌었어요 — Opus 5.5 + 가격 인하

마케팅 페이지 공식 발표 기준으로, Fast Mode가 크게 바뀌었어요:

| 항목 | 이전 (Opus 4.8 기준) | 이후 (Opus 5.5 기준) |
|---|---|---|
| **기준 모델** | claude-opus-4-8 | **claude-opus-5-5** |
| **속도** | 2.5배 빠름 | 2.5배 빠름 |
| **가격** | $30/$150 per M tokens | **$8/$40 per M tokens** |
| **상태** | 리서치 프리뷰 | 리서치 프리뷰 |

> 📉 **가격이 무려 73% 내려갔어요!** Opus 5.5 모델이 이전 Opus 4.8보다 효율적이어서 비용이 크게 줄었어요 (공식 발표 기준).

Fast Mode 켜기:
```bash
/fast
```

---

## 현재 모델 라인업 정리 (2026년 9월 기준)

| 등급 | 모델 | 특징 |
|---|---|---|
| 🥇 최상위 | `claude-fable-5-1` | 코딩·연구 최전선 |
| 🥇 최상위 | `claude-mythos-5-1` | 코딩·연구 최전선 |
| 🥈 고성능 | `claude-opus-5-5` | Fable 5.1급 성능, 40% 저렴 |
| 🥉 균형형 | `claude-sonnet-5` | 기본 모델, 빠름 |
| ⚡ 경량 | `claude-haiku-4-5` | 가장 빠르고 저렴 |

<div class="note-star">
★ Claude Code 기본 모델은 여전히 <strong>Sonnet 5</strong>예요. Opus 5.5나 Fable 5.1은 더 어려운 작업이나 더 높은 성능이 필요할 때 수동으로 전환하세요.
</div>

---

## 정리

2026년 9월에 Anthropic은 최상위 모델을 Fable 5.1/Mythos 5.1로 갱신하고, 그 수준의 성능을 40% 저렴하게 쓸 수 있는 Opus 5.5를 출시했어요. Fast Mode도 이 흐름에 맞춰 Opus 5.5 기반으로 전환되면서 가격이 크게 내려갔답니다.
