---
title: "[공][블] Claude Opus 5 & Fable 5.1 출시 — 2026년 7~9월 모델 대격변"
description: "Opus 5가 최대 100만 토큰 컨텍스트로 새 기본 Opus 모델이 되었고, Fable 5.1과 Mythos 5.1이 코딩·지식 작업의 최정상에 올랐어요"
tags: ["자동생성", "Opus5", "Fable5.1", "Mythos5.1", "신규모델", "모델업데이트", "1M컨텍스트", "FastMode"]
category: "next"
order: 17
lastUpdated: "2026-09-11"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5 출시: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)
<br />★ <strong>[공]</strong> W30 What's New: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a> (Jul 20–24, 2026)
<br />★ <strong>[블]</strong> Fable 5.1 & Mythos 5.1: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)
</div>

## 2026년 7~9월, 모델이 한 단계 점프했어요

2026년 7월 24일, **Claude Opus 5**가 공식 출시됐어요.  
그리고 2026년 9월 1일, **Fable 5.1**과 **Mythos 5.1**까지 등장하면서 Claude 모델 라인업이 완전히 새로워졌습니다.

> 🚂 **비유로 설명하면**: 기존 기차(Opus 4.8)가 빠른 새마을호였다면, Opus 5는 KTX, Fable 5.1은 **자기부상열차**예요. 같은 선로(Claude Code)를 달리지만, 속도와 능력이 완전히 다른 레벨이에요.

---

## 한 눈에 보는 변화

| 날짜 | 내용 |
|---|---|
| 2026-07-24 | **Claude Opus 5** 공식 출시 — 새 기본 Opus 모델 |
| 2026-07-24 | **Fast Mode**가 Opus 5로 이동, 가격 **$10/$50** per MTok으로 인하 |
| 2026-09-01 | **Claude Fable 5.1 & Mythos 5.1** 출시 — 코딩·지식 최정상 |

---

## 🆕 Claude Opus 5 — 에이전트를 위한 새 심장

### 무엇이 바뀌었나요?

`claude-opus-5`가 **Max, Team Premium, Enterprise, Anthropic API**의 새 기본 Opus 모델이 됐어요.

| 항목 | Opus 4.8 | **Opus 5** |
|---|---|---|
| 기본 모델 여부 | ✅ (이전) | ✅ (현재) |
| 컨텍스트 창 | 200K 토큰 | **최대 1M 토큰** |
| Fast Mode 지원 | ✅ | ✅ (이동됨) |
| Fast Mode 가격 | $30/$150 per MTok | **$10/$50 per MTok** 🎉 |
| 주요 강점 | 코딩 · 에이전트 | **장시간 에이전트 + 코딩 + 전문 업무** |

> 💡 **1M 토큰 컨텍스트**란? 소설 한 권이 약 10만 단어, 약 15만 토큰이에요. Opus 5는 소설 7권 분량을 한 번에 읽고 이해할 수 있는 셈이에요.

### Fast Mode가 더 저렴해졌어요! 📉

이전에 Fast Mode는 Opus 4.8 기준으로 **$30/$150**(입력/출력, per million tokens)이었는데,  
Opus 5로 이동하면서 **$10/$50**으로 **크게 낮아졌어요**.

- 연구 프리뷰로 Claude Code에서 제공
- 소비 기반 플랜(consumption-based)에서 사용 가능
- 구독 플랜 사용자는 usage credits로 사용

```bash
# Opus 5로 직접 전환하기
/model claude-opus-5

# Fast Mode 켜기 (Opus 5 고속 버전)
/fast
```

### 어디에 쓰면 좋을까요?

| 용도 | 추천 이유 |
|---|---|
| 오래 걸리는 에이전트 작업 | 긴 대화 맥락을 잊지 않음 |
| 대용량 코드베이스 분석 | 파일 수백 개를 한 번에 파악 |
| 복잡한 리팩토링 | 전체 프로젝트를 이해한 채로 수정 |
| API 기반 자동화 | AWS Bedrock·Google Cloud Agent Platform 지원 |

---

## 🆕 Claude Fable 5.1 & Mythos 5.1 — 최정상 업그레이드

### 어떤 모델이에요?

2026년 9월 1일, **Fable 5.1**과 **Mythos 5.1**이 출시됐어요.  
이들은 "코딩과 지식 작업에서 가장 앞서 나간 모델들"로 소개됐고,  
동시에 **과학 연구에서 AI가 어떻게 기여할 수 있는지 보여주는 첫 사례**로 평가받았어요.

> 🔬 공식 발표 기준으로, 이 두 모델은 **과학적 진보에 기여하는 AI 모델의 초기 모습**을 보여준다고 Anthropic이 밝혔어요. (추정 포함)

| 항목 | Fable 5 | **Fable 5.1** |
|---|---|---|
| 출시 | 2026-06-30 | **2026-09-01** |
| 주요 강점 | 코딩·에이전트·추론 | 코딩·지식·과학 연구 향상 |
| 버전 업그레이드 | — | ✅ 점진적 개선 |

| 항목 | Mythos 5 | **Mythos 5.1** |
|---|---|---|
| 출시 | 2026-06-09 | **2026-09-01** |
| 주요 강점 | 최고급 지식·추론 | 최고급 지식·과학 기여 향상 |

---

## 현재 Claude Code 모델 라인업 (2026년 9월 기준)

| 모델 | 특징 | 용도 |
|---|---|---|
| `claude-haiku-4-5` | 초고속, 경량 | 간단한 자동화, 비용 절감 |
| `claude-sonnet-5` | 균형형, 기본 모델 | 일상 코딩, 에이전트 |
| `claude-opus-5` | 강력한 에이전트, 1M 컨텍스트 | 복잡한 장시간 작업 |
| `claude-fable-5-1` | 최정상 코딩·지식 | 최고 성능이 필요한 작업 |
| `claude-mythos-5-1` | 최정상 추론·과학 | 연구, 복잡한 분석 |

---

## 어떻게 써볼까요?

```bash
# Opus 5 — 긴 프로젝트 분석
/model claude-opus-5
이 저장소 전체 구조를 분석하고 개선점을 찾아줘

# Fable 5.1 — 최고 성능 코딩
/model claude-fable-5-1
이 알고리즘을 최적화해줘
```

> ⚠️ **주의**: Fable 5.1과 Mythos 5.1은 Plan 종류에 따라 접근 가능 여부가 다를 수 있어요.  
> 공식 [pricing 페이지](https://claude.ai/pricing)에서 최신 정보를 확인하세요.

---

## 정리

| 변경 사항 | 내용 |
|---|---|
| 새 기본 Opus | Opus 4.8 → **Opus 5** |
| 컨텍스트 확장 | 200K → **1M 토큰** (API·Max·Team·Enterprise) |
| Fast Mode 이동 | Opus 4.8 → **Opus 5** |
| Fast Mode 가격 | $30/$150 → **$10/$50** per MTok ↓ |
| 신규 최정상 모델 | **Fable 5.1, Mythos 5.1** (Sep 1, 2026) |
