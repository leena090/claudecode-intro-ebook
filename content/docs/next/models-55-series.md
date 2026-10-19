---
title: "[공] Claude 5.5 시리즈 — Opus·Sonnet·Haiku 한꺼번에 업그레이드"
description: "2026년 9~10월 공개된 Claude 5.5 3총사: Opus 5.5(9/22), Sonnet 5.5(9/28), Haiku 5.5(10/7). Fast Mode 가격도 $8/$40으로 대폭 인하."
tags: ["자동생성", "모델", "Opus 5.5", "Sonnet 5.5", "Haiku 5.5", "Fast Mode", "가격"]
category: "next"
order: 17
lastUpdated: "2026-10-19"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong>: Opus 5.5(2026-09-22), Sonnet 5.5(2026-09-28), Haiku 5.5(2026-10-07)<br />
★ 마케팅 페이지 확인 기준 가격 — 이후 변경 가능
</div>

## 5.5 시리즈란?

**2026년 가을, Anthropic이 세 모델을 연달아 출시**했습니다. 스마트폰으로 치면 같은 브랜드의 Pro·일반·라이트 라인업이 동시에 업그레이드된 셈이에요.

> 🚗 **비유로 설명하면**: 자동차 회사가 플래그십(제네시스), 준중형(아반떼), 경차(캐스퍼)를 6주 사이에 모두 새 모델로 교체한 거예요. 용도별로 골라 타면 됩니다.

---

## 세 모델 한눈에 비교

| 모델 | 공개일 | 특징 | 주 용도 |
|------|-------|------|---------|
| **Claude Opus 5.5** | 2026-09-22 | Fable 5.1 수준 성능, Opus 5보다 **40% 저렴** | 복잡한 추론·코드·연구 |
| **Claude Sonnet 5.5** | 2026-09-28 | Sonnet 5보다 **30% 빠름**, 최대 **30% 저렴** | 일상적 코딩·문서 작업 |
| **Claude Haiku 5.5** | 2026-10-07 | 가장 빠르고 저렴한 소형 모델 | 대량 처리·간단한 자동화 |

---

## Opus 5.5 — "플래그십의 가성비화"

공식 발표: *"Fable 5.1 수준의 대부분 작업을 Opus 5보다 40% 낮은 비용으로 실행"*

- 기존 Opus 5로 하던 고강도 추론·코드 리뷰 작업을 더 저렴하게 이어갈 수 있어요.
- Fast Mode(고속 실행)의 기준 모델이 **Opus 4.8 → Opus 5.5로 변경**됐습니다.

---

## Sonnet 5.5 — "속도와 가격 모두 개선"

공식 발표: *"Sonnet 5의 명확한 업그레이드 — 대부분 작업에서 30% 빠르고 최대 30% 저렴"*

- Claude Code의 실질적인 **일상 주력 모델**이에요.
- 빠른 응답이 필요한 반복 작업(테스트, PR 리뷰, 질의응답)에 최적화.

---

## Haiku 5.5 — "가장 빠르고, 가장 저렴하게"

공식 발표: *"지금까지 가장 빠르고 저렴한 소형 모델 — 대용량·비용 민감 작업용"*

- 대량의 문서 분류, 간단한 코드 생성, 로그 분석 등 **비용이 민감한 자동화**에 적합.
- Routines나 Scheduled tasks에서 가성비 좋은 선택지.

---

## 🔥 Fast Mode 가격 대폭 인하

Fast Mode는 Opus 5.5를 **2.5배 빠르게** 실행하는 고속 옵션입니다.

| 구분 | 변경 전 (Opus 4.8 기준) | 변경 후 (Opus 5.5 기준) |
|------|----------------------|----------------------|
| Input 가격 | $30 / 100만 토큰 | **$8 / 100만 토큰** |
| Output 가격 | $150 / 100만 토큰 | **$40 / 100만 토큰** |
| 대상 모델 | Opus 4.8 | **Opus 5.5** |

> 💡 **소비 기반 플랜** 사용자에게 적용됩니다. 구독 플랜은 사용 크레딧으로 적용.

---

## Auto mode가 기본값으로

2026년 9월 17일부터 **Pro·Max·Team 플랜에서 Auto mode가 기본 설정**으로 바뀌었습니다.

- Auto mode: Claude가 더 오래 작업하면서도 위험한 명령은 스스로 잡아냄
- 이전에는 수동으로 켜야 했지만, 이제는 처음부터 켜진 상태로 시작

---

## Claude Code에서 모델 선택 방법

```bash
# Sonnet 5.5 사용 (기본값)
claude

# Opus 5.5 명시
claude --model claude-opus-5-5

# Haiku 5.5 (가성비 자동화)
claude --model claude-haiku-5-5

# Fast Mode (Opus 5.5 고속, 소비 기반 플랜)
/fast
```

---

## 어떤 모델을 언제 쓸까?

| 상황 | 추천 모델 |
|------|---------|
| 매일 하는 코딩·PR 리뷰 | Sonnet 5.5 (기본) |
| 복잡한 아키텍처 설계·긴 코드 리팩터링 | Opus 5.5 |
| Routines 자동화·대량 파일 처리 | Haiku 5.5 |
| 긴 작업을 빠르게 끝내고 싶을 때 | Opus 5.5 + Fast Mode |

---

## 참고 링크

- [공식 모델 비교](https://code.claude.com/docs/en/model-config) (code.claude.com)
- 이전 모델 발표: [content/docs/next/sonnet5-fable5-july2026.md](/docs/next/sonnet5-fable5-july2026) (Sonnet 5·Fable 5, 2026-07)
- [Fast Mode 공식 문서](https://code.claude.com/docs/en/fast-mode) (code.claude.com)
