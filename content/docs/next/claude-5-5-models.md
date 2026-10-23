---
title: "[블] Claude 5.5 시리즈 — Opus·Sonnet·Haiku 5.5와 Fable 5.1 완전 정리"
description: "2026년 9~10월 출시된 Claude 5.5 모델 3종과 Fable 5.1을 한번에 정리합니다. 코딩 성능은 올라가고 가격은 내려갔어요."
tags: ["자동생성", "모델", "Opus5.5", "Sonnet5.5", "Haiku5.5", "Fable5.1", "Mythos", "2026"]
category: "next"
order: 17
lastUpdated: "2026-10-23"
---

<div class="note-star">
★ <strong>[블] 공식 발표 기준</strong> — anthropic.com/news 블로그 발표(2026-09-15 ~ 10-07) 기반. 세부 수치는 공식 발표문에서 직접 인용.
</div>

## 한 줄 요약

2026년 9~10월, Claude 모델 라인업이 **대대적으로 갱신**됐어요.

> 🎂 **비유로 설명하면**: 스마트폰 번호 뒤에 '5'가 붙으면 카메라도 좋아지고 배터리도 오래가는데 가격은 비슷하거나 더 싼 것처럼, Claude도 '5.5' 버전이 나오면서 성능은 올라가고 비용은 내려갔어요.

---

## 📦 새 모델 한눈에 보기

| 모델 | 발표일 | 특징 | 이전 대비 |
|------|--------|------|-----------|
| **Claude Mythos + Fable 5.1** | 2026-09-15 | 코딩·지식 최고 성능, 과학 연구 특화 | 신규 최상위 계층 |
| **Claude Opus 5.5** | 2026-09-22 | 에이전트 코딩 선도 | Opus 5 대비 **40% 저렴** |
| **Claude Sonnet 5.5** | 2026-09-28 | 균형형 업무·코딩 | **30%+ 빠름**, **30% 저렴** |
| **Claude Haiku 5.5** | 2026-10-07 | 고속 소형 모델 | 요약·서브에이전트·브라우저 사용 최적 |

---

## 🥇 Claude Mythos + Fable 5.1 (2026-09-15 발표)

### 무엇이 달라졌나요?

Mythos와 Fable 5.1은 **코딩과 지식 작업 최고 성능**을 목표로 합니다. 일반 AI가 기사를 읽는다면, 이 모델은 **논문을 쓰는 수준**이에요.

- 과학 연구 분야에서 AI가 직접 **연구에 기여**하는 첫 사례를 보여줌 (공식 발표 기준)
- Fable 5.1: Claude Code에서 `fable` 별칭으로 선택 가능

```text Claude Code
> /model fable
```

> ⚠️ **주의**: Claude Apps Gateway 세션에서는 `fable` 별칭이 여전히 Fable 5를 선택해요. Fable 5.1을 쓰려면 `/model claude-fable-5-1`로 직접 지정하세요.

---

## 🧠 Claude Opus 5.5 (2026-09-22 발표)

### 어떤 분이 쓰면 좋아요?

**에이전트 코딩**(Claude가 혼자 긴 작업을 끝내는 것)과 **지식 업무** 최고 성능을 원하는 분께 적합해요.

### 핵심 변화

- **Opus 5 대비 40% 저렴** — 같은 결과를 내면서 비용이 줄었어요
- 에이전트 코딩 성능 1위 (공식 발표 기준)

```text Claude Code
> /model claude-opus-5-5
```

---

## ⚡ Claude Sonnet 5.5 (2026-09-28 발표)

### 어떤 분이 쓰면 좋아요?

속도와 품질 모두 챙기고 싶은 **일상 코딩·업무** 사용자에게 좋아요.

### 핵심 변화

- **Sonnet 5 대비 30%+ 빠름** — 같은 시간에 더 많은 일을 할 수 있어요
- **Sonnet 5 대비 최대 30% 저렴** — 대부분의 작업에서 비용 절감

```text Claude Code
> /model claude-sonnet-5-5
```

---

## 🐇 Claude Haiku 5.5 (2026-10-07 발표)

### 어떤 분이 쓰면 좋아요?

**빠른 처리가 필요한 반복 작업** — 요약, 서브에이전트, 브라우저 사용 같은 고속·고용량 작업에 최적화되어 있어요.

> 🏃 **비유**: Haiku는 '빠른 택배'예요. 무거운 짐(복잡한 추론)은 Opus나 Sonnet이 맡고, 가볍고 빠른 건 Haiku가 처리해요. Dynamic Workflows에서 여러 서브에이전트를 돌릴 때 비용 효율이 높아요.

```text Claude Code
> /model claude-haiku-5-5
```

---

## 💰 Fast Mode 가격 변화 (2026 연도별)

Fast Mode는 Opus 모델 고속 실행 버전이에요. 올해 두 차례 변경됐어요:

| 기준 | Fast Mode 대상 | 가격 (per MTok) |
|------|----------------|-----------------|
| 2026-05 이전 | Opus 4.8 | $30/$150 |
| 2026-07-20 (W30) | **Opus 5** | **$10/$50** |
| 2026-10 (현재) | **Opus 5.5** | **$8/$40** |

> 📌 구독 플랜(Pro/Max/Team/Enterprise) 사용자는 사용량 크레딧으로 Fast Mode 이용 가능.

---

## 🗺️ 모델 선택 가이드

```
나 어떤 모델 써야 하지?
├─ 복잡한 코딩·긴 에이전트 작업 → Opus 5.5
├─ 빠른 일상 코딩·업무 균형 → Sonnet 5.5 (기본값)
├─ 빠른 반복 작업·서브에이전트 → Haiku 5.5
└─ 최고 성능이 필요한 연구·보안 → Fable 5.1 / Mythos
```

---

## 📚 관련 문서

- [공식] [모델 설정](https://code.claude.com/docs/en/model-config) — `/model` 명령어 사용법
- [공식] [Fast Mode 설명](https://code.claude.com/docs/en/fast-mode)
- [공식] [W36 주간 업데이트 (Fable 5.1 출시)](https://code.claude.com/docs/en/whats-new/2026-w36)
