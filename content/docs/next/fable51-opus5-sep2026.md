---
title: "[블] Fable 5.1·Mythos 5.1·Opus 5 — 2026년 7~9월 모델 대업데이트"
description: "Claude Opus 5 (Jul 24), Fable 5.1·Mythos 5.1 (Sep 1) 출시. Fast Mode가 Opus 5 기준으로 전환되고 가격도 $10/$50로 내려갔어요"
tags: ["자동생성", "Fable5.1", "Mythos5.1", "Opus5", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-09-10"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5 출시: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)
<br />★ <strong>[블]</strong> Claude Fable 5.1 & Mythos 5.1 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)
<br />★ <strong>[공]</strong> Fast Mode 기준 변경: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 마케팅 페이지 (2026-09-10 확인)
</div>

## 한눈에 보는 7~9월 모델 변화

| 날짜 | 새 모델 | 핵심 특징 |
|---|---|---|
| 2026-07-24 | **Claude Opus 5** | 장기 실행 에이전트·코딩·전문 업무 향상 |
| 2026-09-01 | **Claude Fable 5.1** | 코딩·지식 업무 최고 수준, 과학 연구 역량 |
| 2026-09-01 | **Claude Mythos 5.1** | 연구·복잡 추론 특화, 과학 진보 미리보기 |

---

## 1️⃣ Claude Opus 5 — 장기 에이전트를 위한 모델 (Jul 24)

> 🍱 **비유로 설명하면**: 지금까지 단거리 100m 달리기 선수가 있었다면, Opus 5는 **철인 3종 경기 선수**예요. 오래 달리면서도 코딩, 전문 리서치, 분석까지 모두 잘해요.

Anthropic 공식 발표에 따르면 (공식 발표 기준):

- **장기 실행 에이전트** 구동에 특화 — 수십 단계가 이어지는 복잡한 작업도 안정적으로 처리
- **코딩 성능 대폭 향상** — 이전 Opus 4.8 대비 눈에 띄는 품질 개선
- **전문 업무**(법률 문서 검토, 금융 분석, 의학 연구 정리 등)에서 강점

### Opus 5와 Fast Mode

가장 큰 실용적 변화입니다!

| 항목 | 이전 (Opus 4.8 기준) | 현재 (Opus 5 기준) |
|---|---|---|
| Fast Mode 대상 모델 | claude-opus-4-8 | **claude-opus-5** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |
| 가격 (input/output) | $30 / $150 per M tokens | **$10 / $50 per M tokens** |

> 💡 **이게 왜 중요하냐면**: Fast Mode 가격이 **1/3 수준으로 내려갔어요**! 속도는 그대로인데 비용이 대폭 줄었으니, 소비 기반(consumption-based) 플랜 사용자에게 특히 반가운 소식이에요.

Fast Mode 사용법은 변함없어요:

```bash
# Claude Code에서 Fast Mode 켜기
/fast   # 토글 — 켜거나 끄거나
```

---

## 2️⃣ Claude Fable 5.1 & Mythos 5.1 — 9월 최상위 모델 업데이트 (Sep 1)

> 🍱 **비유로 설명하면**: 스마트폰이 갤럭시 S25에서 S25 Ultra로 바뀐 것처럼, Fable 5→5.1·Mythos 5→5.1은 **같은 계열의 성능 업그레이드 버전**이에요.

Anthropic 공식 발표 기준:

### Fable 5.1
- **코딩과 지식 업무** 최전선 성능
- **과학 연구 역량** 초기 탑재 — AI가 과학 분야에서 기여하는 방향의 '미리보기'
- Fable 5 대비 전반적 품질 향상

### Mythos 5.1
- **연구·복잡 추론** 특화 모델
- **과학적 진보** 가능성을 보여주는 연구 역량
- Mythos 5 대비 더 깊은 분석 능력

### 모델 이름과 ID (추정 — 공식 API 문서 확인 필요)

```
claude-fable-5-1
claude-mythos-5-1
```

> ⚠️ **추정**: 정확한 모델 ID는 공식 API 문서에서 확인하세요. 이름 형식은 기존 패턴(`claude-fable-5`, `claude-mythos-5`)을 따를 가능성이 높아요.

---

## 3️⃣ 현재 모델 라인업 정리 (2026-09-10 기준)

| 모델 | 특징 | Claude Code 용도 |
|---|---|---|
| **claude-fable-5-1** | 최상위·코딩·지식·과학 | 가장 어려운 코딩 과제 |
| **claude-mythos-5-1** | 연구·복잡 추론 | 심층 분석·리서치 |
| **claude-sonnet-5** | 균형형 기본 모델 | 일상 코딩 (기본값) |
| **claude-opus-5** | 장기 에이전트 | 복잡한 자동화 워크플로우 |
| **claude-haiku-4-5** | 경량·빠른 응답 | 간단한 반복 작업 |

> 💡 **입문자 팁**: 특별히 설정하지 않으면 **Sonnet 5가 기본값**으로 사용돼요. 대부분의 업무에는 Sonnet 5로 충분해요. Fable 5.1·Opus 5는 정말 어렵거나 오래 걸리는 작업에 쓰는 '특수 장비'예요.

---

## 4️⃣ 이 업데이트가 나에게 영향이 있나요?

### ✅ 일반 구독자 (Pro/Max)
- **기본 모델(Sonnet 5) 변화 없음** — 일상 사용은 그대로예요
- Fast Mode 관련 변화도 **소비 기반 플랜**에만 해당 — 구독 플랜은 영향 없음

### 💰 소비 기반(API/Console) 사용자
- Fast Mode 사용 시 Opus 5로 자동 전환
- **요금이 기존 대비 1/3로 내려갔어요** — 같은 예산으로 3배 더 쓸 수 있어요!

### 🏢 엔터프라이즈/팀 플랜
- Fable 5.1·Mythos 5.1 접근 가능 여부는 플랜 및 조직 설정에 따라 다를 수 있어요

---

## 참고 링크

| 내용 | 링크 |
|---|---|
| Opus 5 공식 발표 | [anthropic.com/news/claude-opus-5](https://www.anthropic.com/news/claude-opus-5) |
| Fable 5.1·Mythos 5.1 발표 | [anthropic.com/news](https://www.anthropic.com/news) (Sep 1, 2026) |
| 공식 모델 문서 | [code.claude.com/docs/en/model-config](https://code.claude.com/docs/en/model-config) |
| Fast Mode 상세 | [code.claude.com/docs/en/fast-mode](https://code.claude.com/docs/en/fast-mode) |
