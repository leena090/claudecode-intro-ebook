---
title: "[블][공] Claude Opus 5 · Fable 5.1 · Mythos 5.1 출시 — 2026년 9월 모델 업데이트"
description: "Claude Opus 5(7월 24일), Fable 5.1 & Mythos 5.1(9월 1일) 출시 소식과 Fast Mode Opus 5 전환(가격 $10/$50)을 한국어로 정리했어요"
tags: ["자동생성", "Opus5", "Fable5.1", "Mythos5.1", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-09-07"
---

<div class="note-star">
★ <strong>[블]</strong> "Introducing Claude Opus 5" — <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jul 24, 2026)
<br />★ <strong>[블]</strong> "Introducing Claude Fable 5.1 and Claude Mythos 5.1" — <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)
<br />★ <strong>[공]</strong> Fast Mode 변경 — <a href="https://code.claude.com/docs/en/fast-mode">code.claude.com/docs/en/fast-mode</a> (Jul 24, 2026)
<br />★ <strong>[공]</strong> W30 What's New — <a href="https://code.claude.com/docs/en/whats-new/2026-w30">whats-new/2026-w30</a>
</div>

## 한 눈에 보는 2026년 하반기 모델 변화

| 날짜 | 모델 | 내용 |
|---|---|---|
| 2026-07-24 | **Claude Opus 5** | 새 기본 Opus 모델 출시, 1M 토큰 컨텍스트 |
| 2026-07-24 | Fast Mode | Opus 4.8 → **Opus 5** 전환, 가격 $10/$50 per MTok |
| 2026-09-01 | **Claude Fable 5.1** | 코딩·지식 작업 최상위 모델 업그레이드 |
| 2026-09-01 | **Claude Mythos 5.1** | 과학 연구 특화 최고 모델 업그레이드 |

> 🗺️ **현재 Claude Code 모델 라인업**: Haiku 4.5(경량) → Sonnet 5(기본·균형) → Opus 5(심층 작업) → Fable 5.1(최고 코딩) → Mythos 5.1(과학 연구 최강)

---

## Claude Opus 5 — 장시간 에이전트 작업의 새 기준

### 무엇이 달라졌나요?

**Claude Opus 5** (`claude-opus-5`)는 2026년 7월 24일 출시된 새 Opus 계층 기본 모델이에요.

> 🏋️ **비유로 설명하면**: Sonnet 5가 빠르고 균형 잡힌 '전문 러너'라면, Opus 5는 무거운 짐을 지고 장거리를 완주하는 '철인 운동선수'예요. 복잡하고 오래 걸리는 작업일수록 진가가 드러나요.

**핵심 특징:**
- ✅ **장시간 에이전트(long-running agents)** 구동 최적화
- ✅ **코딩·전문 업무** 대폭 향상
- ✅ **1M 토큰 컨텍스트 창** (Max, Team, Enterprise 플랜 + Anthropic API)
- ✅ **기본 Opus 모델** — Max, Team Premium, Enterprise, API에서 자동 적용

### 어디서 사용 가능한가요?

| 플랫폼 | 가용 여부 |
|---|---|
| Anthropic API | ✅ (1M 컨텍스트) |
| Max/Team/Enterprise 플랜 | ✅ (1M 컨텍스트) |
| Amazon Bedrock | ✅ (1M 변형 따로 선택) |
| Google Cloud Agent Platform | ✅ (1M 변형 따로 선택) |
| Claude Platform on AWS | ✅ |

```bash
# Claude Code에서 Opus 5로 전환
/model claude-opus-5
```

---

## Fast Mode — Opus 4.8에서 Opus 5로 전환

Fast Mode도 함께 업그레이드됐어요. 가장 중요한 변화:

| 항목 | 이전 (v2.1.218 이하) | 이후 (v2.1.219+) |
|---|---|---|
| 대상 모델 | Claude Opus 4.8 | **Claude Opus 5** |
| 입력 가격 | $30/MTok | **$10/MTok** |
| 출력 가격 | $150/MTok | **$50/MTok** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (유지) |

> 💡 **가격이 오히려 낮아졌어요!** Opus 5 Fast Mode는 이전 Opus 4.8 Fast Mode보다 훨씬 저렴해졌어요. Opus 4.7 Fast Mode는 2026년 6월 25일 지원 종료, 7월 24일 완전 제거됐어요.

```bash
# Fast Mode 켜기
/fast
# ↯ 아이콘이 상태바에 표시되면 활성화된 것
```

**알아두세요:**
- Fast Mode는 연구 프리뷰(Research Preview) — 가격·사양 변경될 수 있음
- Pro/Max/Team/Enterprise: 사용 크레딧(usage credits)에서 차감
- Amazon Bedrock, Google Cloud 등 서드파티 플랫폼에서는 **지원 안 됨**

---

## Claude Fable 5.1 & Mythos 5.1 — 최상위 모델 업그레이드

2026년 9월 1일, Anthropic이 **Fable 5.1**과 **Mythos 5.1**을 공식 발표했어요.

### Claude Fable 5.1 — 코딩·지식 작업 최강

> 🏆 **비유로 설명하면**: Fable 5.1은 '소프트웨어 개발 올림픽 금메달리스트'예요. 복잡한 코드베이스 탐색, 대형 프로젝트 리팩토링, 전문 지식 작업에서 가장 강력한 성능을 발휘해요.

**주요 특징:**
- ✅ 코딩 성능 업그레이드 (Fable 5 대비 향상)
- ✅ 지식 집약적 전문 업무 성능 강화
- ✅ AI 모델의 과학 연구 기여 가능성 초기 사례 제시
- 🔒 Enterprise 플랜에서 사용 가능

### Claude Mythos 5.1 — 과학 연구 특화 최강

> 🔬 **비유로 설명하면**: Mythos 5.1은 '세계 최고 연구소의 AI 동료'예요. 과학 데이터 분석, 가설 검증, 연구 논문 이해에 특화돼 있어요.

**주요 특징:**
- ✅ 과학 연구 능력 대폭 강화
- ✅ Claude Science(과학자용 AI 워크벤치)에서 활용
- 🔒 Enterprise 플랜에서 사용 가능

### 현재 모델 선택 가이드

| 작업 유형 | 추천 모델 | 이유 |
|---|---|---|
| 일상 코딩, 빠른 질답 | **Sonnet 5** (기본) | 빠르고 균형 잡힘 |
| 복잡한 에이전트, 장시간 작업 | **Opus 5** | 심층 추론, 1M 컨텍스트 |
| 최고 코딩 성능 필요 | **Fable 5.1** | 코딩·지식 작업 최강 |
| 과학 연구·데이터 분석 | **Mythos 5.1** | 과학 특화 최강 |
| 빠른 응답 중시 | **Opus 5 + Fast Mode** | 2.5배 빠름, $10/$50 |

---

## 자주 묻는 질문

**Q. Opus 5를 사용하면 요금이 더 많이 나오나요?**

사용 중인 플랜에 포함된 사용량 안에서는 추가 요금 없어요. 다만 Opus 5는 Sonnet 5보다 처리 비용이 더 들기 때문에, 무거운 작업에는 Opus 5, 일반 작업에는 Sonnet 5를 구분해서 쓰면 비용을 아낄 수 있어요.

**Q. Fable 5.1과 Mythos 5.1은 지금 쓸 수 있나요?**

2026년 9월 1일 공식 발표됐으며, Enterprise 플랜 사용자를 대상으로 우선 제공됩니다. 공식 발표 기준으로 작성됐으며 정확한 가용 범위는 추후 변경될 수 있어요.

**Q. Fast Mode가 Opus 5로 바뀌었는데 Opus 4.8로 Fast Mode 쓸 수 있나요?**

네, Opus 4.8도 Fast Mode를 지원해요 (가격 동일, $10/$50). `/model claude-opus-4-8`로 전환 후 `/fast`를 켜면 됩니다.
