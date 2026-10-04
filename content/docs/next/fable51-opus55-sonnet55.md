---
title: "[블] Fable 5.1·Opus 5.5·Sonnet 5.5 — 2026년 가을 모델 대거 업데이트"
description: "2026년 9월, Fable 5.1과 Opus 5.5, Sonnet 5.5가 줄줄이 출시됐어요. Fast Mode도 Opus 5.5 기반으로 바뀌며 가격이 크게 내렸습니다"
tags: ["자동생성", "Fable5.1", "Opus5.5", "Sonnet5.5", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 19
lastUpdated: "2026-10-04"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Fable 5.1 + Mythos 5.1: anthropic.com/news (Sep 1, 2026)<br />
★ <strong>[블]</strong> Claude Opus 5.5: anthropic.com/news (Sep 22, 2026)<br />
★ <strong>[블]</strong> Claude Sonnet 5.5: anthropic.com/news (Sep 28, 2026)<br />
★ <strong>[공]</strong> Fast Mode 가격 변경: claude.com/claude-code (Oct 2026 확인)
</div>

## 한눈에 보는 2026년 9월 모델 변화

| 날짜 | 모델 | 핵심 내용 |
|---|---|---|
| 2026-09-01 | **Claude Fable 5.1 + Mythos 5.1** | 코딩·지식작업 최강 모델 업그레이드 |
| 2026-09-22 | **Claude Opus 5.5** | Fable 5.1 수준 성능, Opus 5 대비 비용 40% 절감 |
| 2026-09-28 | **Claude Sonnet 5.5** | Sonnet 5 대비 30% 빠르고 최대 30% 저렴 |

---

## 1. Claude Fable 5.1 + Mythos 5.1 (Sep 1, 2026)

> 🍱 **비유로 설명하면**: 스마트폰 "Pro Max" 라인업이 1년 만에 Pro Max 2세대로 업그레이드된 것과 같아요. 최상위 라인이 더 강해진 거예요.

공식 소개 문구: **"Our most advanced models for coding and knowledge work"** (코딩과 지식 작업을 위한 가장 발전된 모델)

### 무엇이 달라졌나요?

- **Fable 5.1**: Fable 5의 업그레이드 버전. 코딩 능력 향상 + 과학 연구 분야 성능 개선이 포함됐어요. Anthropic은 "AI 모델이 과학적 발전에 기여하는 초기 모습을 보여준다"고 설명했어요.
- **Mythos 5.1**: Mythos 5의 업그레이드 버전. 동일 라인업 강화.

### Claude Code에서 쓰는 방법

Claude Code Desktop에서 모델을 전환하거나:

```bash
claude --model claude-fable-5-1
```

또는 `settings.json`에서:

```json
{
  "model": "claude-fable-5-1"
}
```

---

## 2. Claude Opus 5.5 (Sep 22, 2026)

> 🍱 **비유로 설명하면**: 플래그십 스마트폰의 "S" 모델이 나온 것처럼, 기존 Opus 5보다 더 빠르고 저렴하게 비슷한 성능을 내는 버전이에요.

공식 소개 문구: **"Opus 5.5 performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5."**

| 항목 | Opus 5 | Opus 5.5 |
|---|---|---|
| 성능 | 최상위 | Fable 5.1 수준 |
| 비용 | 기준 | **40% 절감** |
| Fast Mode | 미지원 | **지원** ($8/$40/백만 토큰) |

### Fast Mode 가격 변경 — 중요!

Fast Mode가 **Opus 4.8 기반 ($30/$150/백만 토큰)** 에서 **Opus 5.5 기반 ($8/$40/백만 토큰)** 으로 변경됐어요.

- 2.5배 빠른 응답 속도는 그대로
- **가격은 약 73% 내려갔어요** ($30 → $8)

> 💡 **소비 기반 플랜** (API, Enterprise 등)에서만 사용 가능하며 구독 플랜 사용자도 사용 크레딧으로 이용할 수 있어요. (공식 발표 기준, 변동 가능)

---

## 3. Claude Sonnet 5.5 (Sep 28, 2026)

> 🍱 **비유로 설명하면**: 일상적으로 쓰는 중급 스마트폰이 같은 가격에 더 빨라지고 더 저렴해진 거예요. 가장 많은 사람이 쓰는 모델이 업그레이드됐으니 체감 효과가 가장 클 수 있어요.

공식 소개 문구: **"A clear upgrade over Sonnet 5 that runs 30% faster and costs up to 30% less for most work."**

| 항목 | Sonnet 5 | Sonnet 5.5 |
|---|---|---|
| 속도 | 기준 | **30% 빠름** |
| 비용 | 기준 | **최대 30% 절감** |
| 역할 | Claude Code 기본 모델 | 기본 모델 유지 추정 |

---

## 4. 모델 라인업 정리 (2026년 10월 기준)

| 모델 | 포지션 | 특징 |
|---|---|---|
| **Claude Fable 5.1** | 최상위 코딩 특화 | 과학 연구 능력 포함 |
| **Claude Mythos 5.1** | 최상위 지식 작업 | Fable 5.1과 동급 라인 |
| **Claude Opus 5.5** | 상위 범용 | Fable 5.1 수준, 40% 저렴 |
| **Claude Sonnet 5.5** | 일상 업무 | 빠르고 저렴한 업그레이드 |
| **Claude Haiku 4.5** | 경량 | 빠른 응답, 저비용 |

> ⚠️ **추정**: 모델 ID, 기본 모델 여부 등 세부 사항은 공식 변경 발표 전까지 변동 가능합니다. 항상 [공식 문서](https://code.claude.com/docs/en/model-config)를 확인하세요.

---

## 더 알아보기

- [공식 문서 — 모델 설정](https://code.claude.com/docs/en/model-config)
- [공식 문서 — Fast Mode](https://code.claude.com/docs/en/fast-mode)
- [이전 모델 업데이트 — Sonnet 5·Fable 5](/docs/next/sonnet5-fable5-july2026)
