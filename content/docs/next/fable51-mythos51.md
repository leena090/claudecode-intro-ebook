---
title: "[블][공] Claude Fable 5.1 & Mythos 5.1 — 코딩·연구 최강 모델 등장"
description: "2026년 9월 1일 발표된 Claude Fable 5.1과 Mythos 5.1. 코딩과 지식 업무용 최고 성능 모델로, Claude Code에서 /model fable 명령 하나로 바로 전환 가능"
tags: ["자동생성", "Fable5.1", "Mythos5.1", "신규모델", "1M컨텍스트", "코딩모델", "Fast Mode"]
category: "next"
order: 17
lastUpdated: "2026-09-18"
---

<div class="note-star">
★ <strong>[블]</strong> Anthropic News: "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (Sep 1, 2026)<br />
★ <strong>[공]</strong> Claude Code w36 업데이트: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a> (Aug 31, 2026)<br />
★ <strong>[공]</strong> Fast Mode 업데이트: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (공식 마케팅 페이지)
</div>

## 한 눈에 보는 변화 (2026년 9월)

| 항목 | 이전 | 현재 (2026-09-01~) |
|---|---|---|
| 최상위 모델 | Fable 5 | **Fable 5.1** |
| `/model fable` alias | Fable 5 선택 | **Fable 5.1 선택** |
| 컨텍스트 창 | — | **1M 토큰** |
| Fast Mode 대상 모델 | Opus 4.8 | **Opus 5** |
| Fast Mode 가격 | $30 / $150 per M | **$10 / $50 per M** 🎉 |
| Enterprise 기본 모델 | — | **Opus 5** (좌석제 기준) |

---

## Fable 5.1이란?

> 🍱 **비유로 설명하면**: 음식점 주방장이 새로운 칼(Fable 5.1)을 받았어요. 기존 칼(Fable 5)보다 더 정교하고 예리합니다. 이번 칼은 특히 **코딩 요리**와 **지식 작업**에 특화되어 있고, **과학 연구**라는 새로운 요리 분야도 조금씩 맛볼 수 있어요.

Anthropic이 2026년 9월 1일 발표한 **Claude Fable 5.1**과 **Claude Mythos 5.1**은:

- 🔧 **코딩과 지식 업무** 분야 최고 성능 모델
- 🔬 **연구 기능**이 탑재되어, AI가 과학적 발전에 기여하는 미래를 미리 엿볼 수 있어요
- 📖 **1M(100만) 토큰 컨텍스트** — 책 한 권 분량의 코드 전체를 한 번에 읽어요

---

## Claude Code에서 바로 쓰는 방법

### 방법 1: 명령어로 전환

```text
> /model fable
```

- **v2.1.257 이상** 필요
- `fable` 단축어가 이제 Fable 5.1을 가리켜요
- 클로드 앱스 게이트웨이(기업용 프록시) 환경에서는 여전히 Fable 5를 선택하므로, 5.1이 필요하면 `/model claude-fable-5-1`을 직접 입력

### 방법 2: 설정 파일로 기본값 지정

```json
// .claude/settings.json
{
  "model": "claude-fable-5-1"
}
```

> 📌 **팁**: 현재 쓰고 있는 모델을 확인하려면 터미널에서 `/model`만 입력하면 돼요.

---

## Fast Mode 대폭 업데이트! 💰

> 🚗 **비유**: 고속도로 통행료가 갑자기 확 내렸어요. Opus 5 전용 급행차선(Fast Mode)이 생겼는데, 요금은 오히려 더 싸졌습니다!

**Fast Mode**가 Opus 4.8에서 **Opus 5**로 업그레이드되고, 가격도 크게 내렸어요:

| 구분 | 이전 (Opus 4.8) | 현재 (Opus 5) |
|---|---|---|
| 입력 토큰 | $30 / 1M | **$10 / 1M** |
| 출력 토큰 | $150 / 1M | **$50 / 1M** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |

- 리서치 프리뷰 중
- 소비 기반(Consumption) 플랜에서 사용 가능
- 구독 플랜 사용자는 사용 크레딧으로 이용

---

## 모델 선택 가이드 (2026년 9월 기준)

```
📊 작업별 추천 모델

💻 코딩 · 복잡한 에이전트 작업
  → Fable 5.1 (최고 성능, 1M 컨텍스트)
  → Fable 5.1 Fast Mode (속도 우선 시)

🛠️ 일상적인 코딩 · 분석
  → Sonnet 5 (기본값, 빠르고 저렴)

⚡ 간단한 작업
  → Haiku 4.5 (경량 · 초고속)

🏢 Enterprise 기본값
  → Opus 5 (좌석제 플랜)
```

---

## Mythos 5.1은 뭐가 달라요?

**Claude Mythos 5.1**은 Fable 5.1의 형제 모델로, 특히 **연구 및 과학적 추론**에 특화되어 있어요.

- Fable 5.1이 **코딩과 일반 지식 업무** 최강이라면
- Mythos 5.1은 **심층 연구와 과학적 분석** 분야에서 두각을 보여요
- Anthropic은 이 모델들이 "AI가 과학적 발전에 기여하는 방식의 초기 청사진"이라고 밝혔어요

> 🔬 **추정**: Mythos 5.1은 현재 Claude Code에서 직접 선택하기보다는, Claude Science 같은 전문 플랫폼을 통해 활용되는 경우가 많을 것으로 보여요. 공식 발표 기준으로 정확한 사용법은 Anthropic 공식 문서를 확인하세요.

---

## 자주 묻는 질문

**Q: Fable 5와 Fable 5.1 성능 차이는 얼마나 커요?**
공식 벤치마크는 발표되지 않았지만, Anthropic은 코딩과 지식 업무에서 의미 있는 향상이 있다고 밝혔어요. 복잡한 코딩 작업에서 체감할 수 있을 거예요.

**Q: Fable 5.1을 쓰면 비용이 더 많이 드나요?**
Fable 5.1의 자세한 개별 API 가격은 공식 발표 기준으로 확인하세요. Fast Mode(Opus 5 기반)는 오히려 이전보다 저렴해졌어요.

**Q: 기존 Fable 5로 돌아가려면?**
```text
> /model claude-fable-5
```
