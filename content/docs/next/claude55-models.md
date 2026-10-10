---
title: "[공/블] Claude 5.5 시리즈: Haiku·Sonnet·Opus 한 번에 정리"
description: "2026년 9~10월 출시된 Claude 5.5 모델 3종 — Haiku 5.5, Sonnet 5.5, Opus 5.5 — 의 특징과 활용 가이드"
tags: ["자동생성", "모델", "Haiku5.5", "Sonnet5.5", "Opus5.5", "2026-Q4"]
category: "next"
order: 10
lastUpdated: "2026-10-10"
---

## 한 달 새 새 모델이 세 개나 나왔어요! 🎉

2026년 9월 22일부터 10월 7일까지, Anthropic이 Claude 5.5 시리즈를 연달아 발표했습니다. 마치 **라면 작은 것·보통 것·큰 것** 세트처럼, 용도와 예산에 맞게 고를 수 있어요.

| 모델 | 출시일 | 특징 | 기존 대비 |
|---|---|---|---|
| **Claude Opus 5.5** | 2026-09-22 | 최고 성능, Fable 5.1 수준 | 40% 비용 절감 |
| **Claude Sonnet 5.5** | 2026-09-28 | 균형형 | 30% 빠름, 최대 30% 저렴 |
| **Claude Haiku 5.5** | 2026-10-07 | 가장 빠르고 저렴 | 대용량·비용 민감 업무용 |

> **[공] 공식 발표 기준** — Anthropic 뉴스룸 2026-09-22/09-28/10-07 발표

---

## Opus 5.5 — "비싼 거 그대로, 가격만 내렸어요"

**출시일**: 2026년 9월 22일

Opus 5.5는 기존 Fable 5.1 수준의 성능을 내면서 **Opus 5보다 40% 저렴**하게 나왔습니다. 마치 명품 브랜드 정기 세일처럼 — 품질은 그대로, 부담은 줄었어요.

### 언제 쓰면 좋을까요?
- 📝 복잡한 코드베이스 전체 분석
- 🔍 정교한 멀티스텝 에이전트 작업
- 💼 엔터프라이즈 중요 업무

```bash
# Claude Code에서 Opus 5.5 선택
/model claude-opus-5-5
```

---

## Sonnet 5.5 — "더 빠르고, 더 싸고, 성능도 올랐어요"

**출시일**: 2026년 9월 28일

Sonnet 5.5는 **Sonnet 5에서 30% 빨라지고, 대부분 작업에서 최대 30% 저렴**해졌습니다. Claude Code의 기본 모델로 가장 많이 쓰이는 Sonnet 계열이 확실히 업그레이드됐네요.

### 실제 차이는?
버스와 택시로 비유하면: Sonnet 5가 버스였다면, Sonnet 5.5는 **급행버스** 수준으로 같은 노선을 더 빠르게 달리면서 요금도 내렸어요.

```bash
# Claude Code 기본 모델 설정
/model claude-sonnet-5-5
```

---

## Haiku 5.5 — "가장 빠르고 가장 가성비 좋은 모델"

**출시일**: 2026년 10월 7일

Haiku 5.5는 Anthropic의 설명에 따르면 "**가장 빠르고, 가장 저렴하고, 가장 능력 있는 소형 모델**"입니다. 대용량 처리나 비용이 민감한 환경에 딱입니다.

### 이럴 때 Haiku 5.5를
- 💬 코드 자동완성 (빠른 응답 중요)
- 📊 대량 파일 분류·태깅
- 🔄 반복 작업 자동화 파이프라인
- 🏢 API 호출이 많은 엔터프라이즈 서비스

```bash
# Haiku 5.5로 대량 파일 요약
claude -p "이 파일들을 한 줄로 요약해줘" --model claude-haiku-5-5
```

---

## Fast Mode도 업데이트됐어요

마케팅 페이지 기준, Fast Mode는 이제 **Opus 5.5** 기반으로 2.5배 빠르게 실행됩니다. 가격도 **$8/$40 per million tokens** (리서치 프리뷰, 소비 기반 플랜)으로 변경됐습니다.

> **이전(2026-07 기준)**: Opus 4.8, $30/$150 per million tokens  
> **현재(2026-10 기준)**: Opus 5.5, $8/$40 per million tokens

---

## 어떤 모델을 선택할까요? 🤔

```
🚀 빠른 응답이 최우선    → Haiku 5.5
⚖️ 성능과 가격 균형     → Sonnet 5.5  (Claude Code 기본 추천)
🏆 최고 품질이 필요할 때 → Opus 5.5
⚡ Opus를 초고속으로     → Fast Mode (Opus 5.5 기반)
```

대부분의 Claude Code 일상 업무에는 **Sonnet 5.5가 기본값**으로 충분합니다. 복잡한 리팩터링이나 중요 마이그레이션 작업에만 Opus 5.5를 쓰세요.

---

> 📌 **출처**: Anthropic 뉴스룸 [공식 발표 기준]  
> - Opus 5.5: anthropic.com/news/introducing-claude-opus-5-5 (2026-09-22)  
> - Sonnet 5.5: anthropic.com/news/introducing-claude-sonnet-5-5 (2026-09-28)  
> - Haiku 5.5: anthropic.com/news/introducing-claude-haiku-5-5 (2026-10-07)
