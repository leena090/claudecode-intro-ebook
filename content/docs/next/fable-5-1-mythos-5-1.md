---
title: "[블] Claude Fable 5.1 & Mythos 5.1 — 코딩·지식업무 최상위 모델 업데이트"
description: "2026년 9월 1일 Claude Fable 5.1과 Mythos 5.1이 출시됐어요. 코딩과 지식업무에서 최고 성능 + AI가 과학 연구에 기여하는 청사진을 처음으로 보여준 모델이에요"
tags: ["자동생성", "Fable5.1", "Mythos5.1", "모델업데이트", "신규모델", "코딩", "과학연구"]
category: "next"
order: 18
lastUpdated: "2026-09-12"
---

<div class="note-star">
★ <strong>[블]</strong> 공식 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> — "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (Sep 1, 2026)<br />
※ 공식 Anthropic 발표 기준. 내부 벤치마크 등 세부 수치는 추후 공개 정보에 따라 달라질 수 있어요.
</div>

## 한 줄 요약

**Claude Fable 5.1**과 **Claude Mythos 5.1**은 2026년 9월 1일 발표된 Anthropic 최상위 모델이에요.

> 🍱 **비유**: Fable 5.1과 Mythos 5.1은 "올림픽 금메달 선수"예요 — Opus 5가 이미 뛰어난 본부장이라면, 이 둘은 국가대표급 전문가에요.

공식 설명 요약:
> "Our most advanced models for coding and knowledge work. Their research capabilities also offer an early glimpse of how AI models will contribute to scientific progress."

---

## 두 모델의 차이

| 항목 | **Fable 5.1** | **Mythos 5.1** |
|---|---|---|
| 방향성 | 코딩·개발 중심 | 지식업무·연구 중심 |
| 강점 | 코드 작성·리뷰·리팩토링 | 문서·분석·과학 연구 보조 |
| Claude Code | ✅ 주력 사용 | 분석·문서 작업에 활용 |

> 💡 **Claude Code 사용자에게**: Fable 5.1이 코딩에 특화돼 있어요. 복잡한 코드 아키텍처 작업, 대규모 리팩토링, 멀티 파일 에이전트 작업에서 진가를 발휘해요.

---

## 무엇이 달라졌나요?

### 1️⃣ 코딩 능력 또 한 단계 상향

Fable 5.1은 코딩에서 **Fable 5 대비 한 단계 향상**됐어요.

> 🍱 **비유**: Fable 5가 "설계도만 주면 건물 짓는 건축가"였다면, Fable 5.1은 **"설계도 없이도 요구사항만 듣고 건물 짓는 건축가"** 에요.

이런 작업에서 특히 강해요:
- 처음 보는 레거시 코드베이스 빠르게 파악·수정
- 여러 마이크로서비스 걸친 복잡한 버그 추적
- 테스트 없는 코드에 테스트 추가하기

### 2️⃣ 과학 연구 보조 능력 (Mythos 5.1)

Mythos 5.1은 **AI가 과학 연구에 기여하는 새 방향**을 처음으로 보여준 모델이에요.

> 🍱 **비유**: 지금까지 AI가 "논문 요약 도우미"였다면, Mythos 5.1은 **"공동 연구자 수준"** 으로 격상된 느낌이에요.

주요 연구 보조 능력:
- 복잡한 실험 설계 검토·제안
- 방대한 논문 데이터 교차 분석
- 가설 검증을 위한 통계 분석 지원

### 3️⃣ 지식업무 전반 강화

Fable 5.1과 Mythos 5.1 모두 문서 작성, 법률·금융 분석, 기술 보고서 등에서도 성능이 올라갔어요.

---

## Claude Code에서 어떻게 써요?

```bash
# Fable 5.1 명시적 사용 (모델 ID는 공식 발표 후 확정)
/model claude-fable-5-1

# Mythos 5.1 사용 (지식업무·분석 중심 작업)
/model claude-mythos-5-1
```

> ⚠️ **참고**: 모델 ID(`claude-fable-5-1` 등)는 공식 발표 기준 추정이에요. 실제 사용 시 `/model` 명령어에서 목록을 확인하세요.

### 언제 어떤 모델을 선택할까요?

| 작업 종류 | 추천 모델 |
|---|---|
| 일상적인 코딩·버그 수정 | Sonnet 5 (기본) |
| 복잡한 에이전트 작업 | Opus 5 |
| **최고 품질 코드 작업** | **Fable 5.1** |
| 대규모 분석·연구 보조 | Mythos 5.1 |

---

## 플랜별 사용 가능 여부

| 플랜 | Fable 5.1 / Mythos 5.1 |
|---|---|
| Pro | ❌ (Sonnet 5 기본) |
| Max 5x / 20x | ✅ |
| Team / Enterprise | ✅ |
| API | ✅ (토큰 과금) |

---

## 모델 라인업 현황 (2026년 9월 기준)

```
🏆 Fable 5.1 / Mythos 5.1  ← 최상위 최신 (Sep 1, 2026)
🔶 Opus 5                   ← Opus 계열 최신 (Jul 24, 2026)
⚡ Sonnet 5                  ← 기본 모델 (균형·속도)
🌱 Haiku 4.5                 ← 경량 (빠른 간단 작업)
```

---

## "과학 연구 청사진"이 왜 중요한가요?

공식 발표문에는 이런 표현이 있어요:

> "Their research capabilities also offer an early glimpse of how AI models will contribute to scientific progress."

이건 단순히 "더 좋은 모델"을 넘어, **AI가 인간의 과학 연구를 보조하는 역할**로 진화하고 있다는 신호예요.

> 🍱 **비유**: 지금까지 AI가 "계산기"였다면, Mythos 5.1은 **"함께 실험을 설계하는 조교"** 역할로 한 발 다가선 거예요.

<div class="note-circle">
○ <strong>Claude Code 입문자에게</strong>: Fable 5.1 / Mythos 5.1은 최상위 모델이라 무조건 좋아 보이지만, 일상 코딩에는 Sonnet 5로도 충분해요. 정말 복잡하고 중요한 작업에 선택적으로 쓰는 게 비용 효율적이에요.
</div>

---

## 핵심 정리

| 포인트 | 내용 |
|---|---|
| Fable 5.1 | 코딩·개발 최상위 모델 |
| Mythos 5.1 | 지식업무·연구 최상위 모델 |
| 발표일 | 2026년 9월 1일 |
| Claude Code 활용 | Fable 5.1 → 복잡한 코드 작업, Mythos 5.1 → 분석·문서 |
| 플랜 | Max 5x 이상 / Enterprise / API |
