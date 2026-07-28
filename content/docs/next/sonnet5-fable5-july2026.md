---
title: "[공][블] Claude Sonnet 5 출시 + Fable 5 복귀 — 2026년 6~7월 모델 업데이트"
description: "2026년 6월 30일 Claude Sonnet 5가 출시되고 Fable 5가 복귀했어요. 7월부터 Sonnet 5가 Claude Code 기본 모델로 전환됩니다"
tags: ["자동생성", "Sonnet5", "Fable5", "모델업데이트", "기본모델", "신규모델"]
category: "next"
order: 16
lastUpdated: "2026-07-18"
---

<div class="note-star">
★ <strong>[공]</strong> Claude Sonnet 5 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jun 30, 2026)
<br />★ <strong>[공]</strong> Fable 5 복귀: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jun 30 – Jul 1, 2026)
<br />★ <strong>[공]</strong> Sonnet 5 기본 모델 전환: <a href="https://code.claude.com/docs/en/whats-new/2026-w27">whats-new/2026-w27</a> (Jul 1, 2026)
</div>

## 한 눈에 보는 6~7월 모델 변화

| 날짜 | 내용 |
|---|---|
| 2026-06-30 | **Claude Sonnet 5** 공식 출시 |
| 2026-07-01 | **Fable 5** 글로벌 복귀 (수출통제 해제) |
| 2026-07-01 | **Sonnet 5**가 Claude Code 기본 모델로 전환 |

---

## Claude Sonnet 5 — 새로운 균형형 최강자

### 무엇이 달라졌나요?

**Claude Sonnet 5** (`claude-sonnet-5`)는 코딩, 에이전트 작업, 전문 업무에서 **최전선(frontier) 성능**을 내면서도 빠른 응답 속도를 유지하는 모델이에요.

> 🍱 **비유로 설명하면**: 기존 Sonnet 4.6이 "빠르고 쓸 만한 직원"이었다면, Sonnet 5는 **"Opus급 실력인데 속도도 빠른 에이스 직원"** 이에요.

### 주요 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-sonnet-5` |
| **강점** | 코딩 · 에이전트 · 전문 업무 전반 |
| **속도** | Sonnet 계열 특유의 빠른 응답 |
| **가격** | Sonnet 계열 기준 (Opus보다 저렴) |
| **출시일** | 2026년 6월 30일 |

### Claude Code에서의 위치

2026년 7월 1일(W27)부터 **Sonnet 5가 Claude Code 기본 모델**이 됐어요.

```
이전: claude-opus-4-8 (기본)
이후: claude-sonnet-5 (기본)
```

<div class="note-star">
★ <strong>이미 다른 모델로 설정해두셨다면?</strong> 기존 설정이 그대로 유지됩니다. 별도 설정이 없는 분들만 자동으로 Sonnet 5로 전환됩니다.
</div>

**모델 변경하기:**
```bash
# 세션에서 바로 변경
/model claude-opus-4-8    # 다시 Opus로
/model claude-sonnet-5    # Sonnet 5로
```

---

## Fable 5 복귀 — 수출통제 해제

### 잠깐, Fable 5가 뭐였죠?

Fable 5는 2026년 6월 9일 발표된 **Anthropic의 최상위 모델**이에요. Opus 위에 위치한, 가장 강력한 클로드예요.

그런데 발표 직후 미국 정부의 수출통제 조치로 **글로벌 접근이 일시 정지**됐었어요 (2026년 6월 12일).

### 2026년 7월 1일 — 글로벌 복귀

6월 30일 Anthropic이 발표했어요:

> "Fable 5가 2026년 7월 1일부터 전 세계에서 다시 사용 가능해집니다."

함께 발표된 내용:
- **잼브레이크(jailbreak) 심각도 프레임워크**: Anthropic, Amazon, Microsoft, Google 등 주요 AI 기업이 공동으로 제안
- Fable 5의 사이버 보안 안전장치 상세 공개

> 🍱 **비유로 설명하면**: 새로 출시된 특별 요리가 식품 허가 심사 때문에 잠깐 판매 중단됐다가 **안전 검증 완료 후 정식 판매 재개**된 것과 같아요.

### Fable 5는 누가 쓰나요?

| 대상 | 이유 |
|---|---|
| **기업 고객** | 가장 복잡한 작업, 코드베이스 마이그레이션 |
| **연구·개발** | 최고 성능이 필요한 작업 |
| **Claude API** | 토큰 기반 과금으로 사용 |

<div class="note-star">
★ 한국에서도 Fable 5 사용이 가능해요. 다만 Claude Code 기본 플랜에는 포함되지 않고, API 과금 방식이에요.
<br />★ 모델 ID: <code>claude-fable-5</code>
</div>

---

## 현재 Claude 모델 라인업 정리

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| **Claude Fable 5** | 최상위 | 가장 어려운 작업, 기업 |
| **Claude Opus 5** 🆕 | 에이전트 최강 | 장시간 에이전트, 복잡 코딩 |
| **Claude Opus 4.8** | 고성능 전 세대 | (Opus 5로 대체 권장) |
| **Claude Sonnet 5** ⭐ | 균형형 | **일상 코딩 (기본값)** |
| **Claude Haiku 4.5** | 경량 | 빠른 단순 작업 |

---

## 입문자에게 어떤 모델이 맞을까요?

대부분의 경우 **기본값인 Sonnet 5**를 그냥 쓰시면 돼요.

| 상황 | 추천 |
|---|---|
| 처음 시작 | Sonnet 5 (기본값) |
| 복잡한 리팩토링 | Opus 4.8으로 변경 |
| 빠른 단순 작업 | Haiku 4.5 |
| 예산 부족 | Sonnet 5 유지 |

> 🍱 **비유로 설명하면**: 새 스마트폰 사면 기본 설정으로도 잘 작동하는 것처럼, Claude Code도 기본 모델로 대부분 충분해요. 뭔가 느리거나 아쉬울 때 더 좋은 모델로 바꾸면 됩니다.

---

<div class="note-star">
★ Claude Sonnet 5 공식 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jun 30, 2026)
<br />★ Fable 5 복귀 발표: "Redeploying Fable 5" — <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jun 30, 2026)
<br />★ W27 기본 모델 전환: <a href="https://code.claude.com/docs/en/whats-new/2026-w27">code.claude.com/docs/en/whats-new/2026-w27</a>
</div>
