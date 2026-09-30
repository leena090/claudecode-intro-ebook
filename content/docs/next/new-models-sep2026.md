---
title: "[공][블] 2026년 9월 신규 모델 총정리 — Fable 5.1 · Opus 5.5 · Sonnet 5.5 + Fast Mode 가격 인하"
description: "2026년 9월 Claude 모델 3종 신규 출시 및 Fast Mode 요금이 $8/$40으로 대폭 인하됐어요"
tags: ["자동생성", "Fable5.1", "Opus5.5", "Sonnet5.5", "신규모델", "FastMode", "모델업데이트"]
category: "next"
order: 17
lastUpdated: "2026-09-30"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com 공식 문서 기반 &nbsp;|&nbsp; <strong>[블]</strong> anthropic.com/news 블로그 기반
<br />★ 공식 발표 기준 — 세부 사양은 실제 사용 시 다를 수 있어요.
</div>

## 한 줄 요약

| 모델 | 출시일 | 특징 |
|---|---|---|
| **Claude Fable 5.1 + Mythos 5.1** | 2026-09-01 | 코딩·지식 업무 최고 성능 |
| **Claude Opus 5.5** | 2026-09-22 | Fable 5.1 수준 성능, 비용 40% 절감 |
| **Claude Sonnet 5.5** | 2026-09-28 | Sonnet 5 대비 30% 빠르고 최대 30% 저렴 |
| **Fast Mode 가격 변경** | 2026-09 | Opus 5.5 기반, $8/$40 (이전 $30/$150) |

---

## 🆕 Claude Fable 5.1 + Mythos 5.1 — 최상위 모델 업그레이드

> 🍱 **비유로 설명하면**: 지난번 Fable 5가 '특급 셰프'였다면, Fable 5.1은 '미슐랭 3스타 특급 셰프'예요. 같은 방향인데 더 정밀해졌어요.

**2026년 9월 1일 공식 출시.** `[블]`

- 코딩 + 지식 업무에서 최고 성능 발휘
- 과학 연구에서 AI 기여 방향을 미리 보여주는 수준
- Claude Code 기본 모델 스택의 최상단

### Claude Code에서 쓰는 법

```bash
# 모델 선택
/model claude-fable-5-1

# 설정 파일로 영구 지정
# ~/.claude/settings.json
{
  "model": "claude-fable-5-1"
}
```

---

## 🆕 Claude Opus 5.5 — 성능은 Fable 5.1 수준, 비용은 40% 절감

> 🍱 **비유로 설명하면**: Fable 5.1이 '특급 식당'이라면, Opus 5.5는 '실력은 거기에 버금가는데 가격이 40% 저렴한 맛집'이에요.

**2026년 9월 22일 공식 출시.** `[블]`

- 대부분의 작업에서 Fable 5.1 수준 성능
- Opus 5 대비 비용 **40% 절감**
- Fast Mode(고속 모드) 기준 모델 → **$8/$40 per million tokens**

### Fast Mode 요금 변경 (중요!)

| 구분 | 이전 (Opus 4.8 기준) | 현재 (Opus 5.5 기준) |
|---|---|---|
| 기준 모델 | claude-opus-4-8 | **claude-opus-5-5** |
| Input 가격 | $30/M tokens | **$8/M tokens** |
| Output 가격 | $150/M tokens | **$40/M tokens** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |

<div class="note-star">
★ Fast Mode는 소비 기반 플랜에서 사용 가능한 리서치 프리뷰예요. <code>[공식]</code>
<br />★ 이전에 $30/$150로 표시되던 가격이 $8/$40으로 대폭 인하됐어요.
</div>

---

## 🆕 Claude Sonnet 5.5 — Sonnet 5 대비 30% 빠르고 최대 30% 저렴

> 🍱 **비유로 설명하면**: 원래도 빠른 배달을 30% 더 빠르게, 가격은 30% 내렸어요.

**2026년 9월 28일 공식 출시.** `[블]`

- Sonnet 5 대비 **30% 빠름**
- 대부분 작업에서 비용 **최대 30% 절감**
- 일상적인 코딩·에이전트 작업의 실용적 선택지

---

## 현재 Claude Code 모델 라인업 (2026-09 기준)

| 모델 | 용도 | 특징 |
|---|---|---|
| **claude-fable-5-1** | 최고 성능 필요 시 | 최상위, 코딩+지식 |
| **claude-opus-5-5** | 고성능 + 비용 균형 | Fable 5.1 수준, 40% 절감 |
| **claude-sonnet-5-5** | 일반 코딩 작업 | 빠르고 저렴 |
| **claude-sonnet-5** | 기존 기본 모델 | 안정적 |
| **claude-haiku-4-5** | 경량 작업 | 가장 빠름·저렴 |

---

## 더 알아보기

- [공식 — Claude Fable 5.1 발표](https://www.anthropic.com/news/claude-fable-5-1-mythos-5-1)
- [공식 — Claude Opus 5.5 발표](https://www.anthropic.com/news/claude-opus-5-5)
- [공식 — Claude Sonnet 5.5 발표](https://www.anthropic.com/news/claude-sonnet-5-5)
- [Fast Mode 공식 문서](https://code.claude.com/docs/en/fast-mode)
- [모델 설정 문서](https://code.claude.com/docs/en/model-config)
