---
title: "[공][블] Claude Fable 5 & Opus 4.8 출시 — 새 모델 라인업 정리"
description: "2026년 5~6월, Claude 새 모델 2종 출시: Opus 4.8(2026-05-28)과 Fable 5(2026-06-09). Claude Code 지원 모델 업데이트 정리"
tags: ["모델", "Fable 5", "Opus 4.8", "업데이트", "2026", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Opus 4.8은 2026-05-28 Anthropic 공식 발표, Fable 5는 2026-06-09 공식 발표. <code>[공][블]</code><br />
★ Claude Code 마케팅 페이지(claude.com/claude-code) 모델 목록 반영 확인 완료.
</div>

## 무슨 일이 있었나요?

2026년 5월과 6월, Anthropic이 새 Claude 모델을 연달아 출시했어요.

| 모델 | 발표일 | 모델 ID | 출처 |
|------|--------|---------|------|
| Claude Opus 4.8 | 2026-05-28 | `claude-opus-4-8` | `[블]` Anthropic 공식 발표 |
| Claude Fable 5 | 2026-06-09 | `claude-fable-5` | `[블]` Anthropic 공식 발표 |
| Claude Mythos 5 | 2026-06-09 | (리서치 프리뷰) | `[블]` Anthropic 공식 발표 |

---

## Claude Opus 4.8 — 코딩 성능 향상

> 🍱 **비유**: 스마트폰 운영체제가 업그레이드된 것처럼 — 같은 Opus 시리즈지만 코딩·분석·추론이 더 좋아졌어요.

**Opus 4.8의 특징:**
- Opus 4.7보다 코딩 및 복잡한 작업 성능 향상
- Fast Mode에서 Opus 4.7보다 낮은 가격으로 사용 가능
- Claude Code Week 22(2026-05-25)부터 공식 지원

```bash
# Opus 4.8 사용
/model claude-opus-4-8
```

---

## Claude Fable 5 — 새 세대 지능

**Fable 5**는 Anthropic의 완전히 새로운 세대 모델이에요.

> 🍱 **비유**: 4.x 시리즈가 "갤럭시 S24, S24+, S24 Ultra" 시리즈였다면, Fable 5는 "갤럭시 S25" — 같은 회사 제품이지만 새로운 세대예요.

**Anthropic 공식 발표 내용:**
> "Our next generation of intelligence for the hardest knowledge work and coding problems."
> 가장 어려운 지식 작업과 코딩 문제를 위한 차세대 지능 — `[블]`

**Claude Code에서의 위치:**
- Claude Code 지원 모델에 Fable 5 추가됨 (마케팅 페이지 확인)
- 복잡한 코딩 프로젝트나 어려운 문제 해결에 추천

```bash
# Fable 5 사용
/model claude-fable-5
```

---

## Claude Mythos 5 — 리서치 프리뷰

**Mythos 5**도 동시에 발표됐지만, 현재는 **리서치 프리뷰** 단계예요 — 일반 사용자에게 아직 정식 출시 전이에요.

> 🍱 **비유**: 리서치 프리뷰는 자동차 신모델 시승 행사 같은 것 — 아직 판매는 안 하지만 일부 사람들이 먼저 써볼 수 있어요.

---

## 2026년 6월 기준 Claude Code 지원 모델 전체

| 모델 | 모델 ID | 포지션 |
|------|---------|--------|
| **Fable 5** ⭐ NEW | `claude-fable-5` | 차세대, 고난이도 작업 |
| **Opus 4.8** ⭐ NEW | `claude-opus-4-8` | 고성능, 복잡한 코딩 |
| Sonnet 4.6 | `claude-sonnet-4-6` | 균형형, 일상 작업 |
| Haiku 4.5 | `claude-haiku-4-5-20251001` | 경량, 빠른 답변 |

<div class="note-circle">
○ 처음엔 Sonnet 4.6으로 시작하는 것이 비용·성능 균형상 추천이에요<br />
○ 복잡한 아키텍처 설계나 어려운 버그는 Opus 4.8 또는 Fable 5 시도<br />
○ Mythos 5는 리서치 프리뷰라 일반 플랜에서 아직 사용 제한 가능
</div>

---

## 모델 바꾸는 방법

```bash
# 대화 중 모델 변경
/model

# 목록에서 원하는 모델 선택
# 또는 바로 지정
/model claude-fable-5
```

**또는 settings.json에서 기본 모델 지정:**

```json
{
  "model": "claude-fable-5"
}
```
