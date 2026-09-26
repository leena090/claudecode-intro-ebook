---
title: "[공][블] Claude Opus 5.5 + Fable 5.1·Mythos 5.1 — 2026년 9월 모델 대격변"
description: "Fable 5.1과 Mythos 5.1이 등장하고, Opus 5.5가 Fable 5.1 수준을 40% 저렴하게 제공합니다. Fast Mode도 Opus 5.5로 전환됐어요"
tags: ["자동생성", "Opus5.5", "Fable5.1", "Mythos5.1", "모델업데이트", "신규모델", "FastMode"]
category: "next"
order: 17
lastUpdated: "2026-09-26"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Fable 5.1 + Mythos 5.1: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)
<br />★ <strong>[블]</strong> Claude Opus 5.5: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 22, 2026)
<br />★ <strong>[공]</strong> Fable 5.1 Claude Code 적용: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a> (Aug 31, 2026)
<br />★ <strong>[공]</strong> Fast Mode → Opus 5.5: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Sep 2026)
</div>

## 한 눈에 보는 9월 모델 변화

| 날짜 | 내용 |
|---|---|
| 2026-09-01 | **Claude Fable 5.1** + **Mythos 5.1** 공식 출시 |
| 2026-09-01 | W36: `fable` 별칭이 자동으로 Fable 5.1 선택 |
| 2026-09-22 | **Claude Opus 5.5** 출시 — Fable 5.1 수준, 40% 저렴 |
| 2026-09 | **Fast Mode** → Opus 5.5로 전환, 요금 $8/$40 per MTok |

---

## Claude Fable 5.1 + Mythos 5.1 — 코딩·지식 작업 최강 모델

### 무엇이 달라졌나요?

**Claude Fable 5.1** (`claude-fable-5-1`)과 **Claude Mythos 5.1**은 Anthropic의 **현재 최상위 모델** 이에요. 코딩과 지식 업무에서 최고 성능을 내며, 과학 연구 지원 기능도 강화됐어요.

> 🍱 **비유로 설명하면**: Fable 5가 "최강 직원"이었다면, Fable 5.1은 **"그 직원이 대학원을 더 다녀온 버전"** 이에요. 하던 일은 더 잘하고, 과학적 추론까지 더해졌어요.

### 주요 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-fable-5-1` |
| **컨텍스트** | **1M 토큰** (백만 토큰 — 소설 10권 분량) |
| **강점** | 코딩 · 지식 작업 · 과학적 추론 |
| **별칭** | `/model fable` → 자동으로 Fable 5.1 선택 |
| **출시일** | 2026년 9월 1일 |

### Claude Code에서 바로 쓰기

```bash
# Fable 5.1로 전환 (가장 간단)
/model fable

# 또는 전체 모델명으로
/model claude-fable-5-1
```

<div class="note-star">
★ <strong>주의</strong> — Claude Apps Gateway 세션에서는 <code>fable</code> 별칭이 여전히 Fable 5를 가리킬 수 있어요. 반드시 Fable 5.1을 원한다면 <code>/model claude-fable-5-1</code>로 명시하세요.
</div>

---

## Claude Opus 5.5 — "Fable 5.1 수준, 40% 더 저렴"

### 가장 중요한 포인트

> 💡 **공식 발표**: "Opus 5.5는 대부분의 업무에서 Fable 5.1 수준으로 동작하며, Opus 5보다 **40% 저렴**합니다."

즉, 최고 모델과 **비슷한 성능**을 **훨씬 저렴하게** 쓸 수 있는 모델이에요.

### 주요 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5-5` |
| **성능** | Fable 5.1 수준 (대부분 작업) |
| **비용** | Opus 5 대비 **40% 절감** |
| **출시일** | 2026년 9월 22일 |

### 어떤 분들께 좋을까요?

| 상황 | 추천 모델 |
|---|---|
| **최고 성능이 꼭 필요** | Fable 5.1 |
| **비용 효율을 원함** | **Opus 5.5** ← 대부분의 사람들에게 최선 |
| **빠른 응답이 중요** | Sonnet 5 |
| **가벼운 작업** | Haiku 4.5 |

> 🍱 **비유로 설명하면**: Fable 5.1이 "5성급 레스토랑"이라면, Opus 5.5는 **"같은 셰프가 운영하는 4.8성급 레스토랑인데 가격은 40% 싼 곳"** 이에요.

---

## Fast Mode — Opus 5.5로 전환, 요금도 바뀌었어요

Fast Mode가 **Opus 5.5 기반**으로 전환됐어요.

| 항목 | 이전 | 지금 |
|---|---|---|
| **대상 모델** | Opus 5 | **Opus 5.5** |
| **속도** | 2.5배 빠름 | 동일 (2.5배 빠름) |
| **요금** | $10/$50 per MTok | **$8/$40 per MTok** |

<div class="note-star">
★ Fast Mode는 소비 기반 플랜(consumption-based plan) 또는 사용 크레딧(usage credits)으로 이용 가능해요. 정액 구독(Pro/Max/Team)에서는 크레딧 방식으로 사용합니다.
</div>

```bash
# Fast Mode 켜기/끄기
/fast
```

---

## 9월 기준 전체 모델 라인업 정리

| 모델 | 특징 | 적합 상황 |
|---|---|---|
| `claude-fable-5-1` | 최상위, 과학·코딩 최강 | 최고 품질 필요할 때 |
| `claude-opus-5-5` | Fable 5.1 수준, 40% 저렴 | **일반적으로 최선의 선택** |
| `claude-sonnet-5` | 기본 모델, 빠르고 균형 잡힘 | 일상적인 코딩 작업 |
| `claude-haiku-4-5` | 경량, 빠름 | 단순 자동화 작업 |

---

## 무엇부터 해볼까요?

1. **먼저 Opus 5.5 써보기**: 기존 Opus 5 사용자라면 그냥 `/model claude-opus-5-5`로 전환하면 돼요
2. **Heavy 작업엔 Fable 5.1**: 복잡한 아키텍처 설계나 긴 코드베이스 분석엔 `/model fable`
3. **Fast Mode 확인**: `/fast` 켜면 Opus 5.5 고속 버전이 활성화돼요
