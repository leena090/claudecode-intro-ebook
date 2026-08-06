---
title: "[공][블] Claude Opus 5 출시 + Fast Mode 가격 대폭 인하 (2026년 7월)"
description: "2026년 7월 24일 Claude Opus 5가 출시됐어요. Fast Mode도 Opus 4.8에서 Opus 5로 전환되고 가격이 3분의 1 수준으로 낮아졌습니다"
tags: ["자동생성", "Opus5", "FastMode", "모델업데이트", "가격변경", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-08-06"
---

<div class="note-star">
★ <strong>[블]</strong> Introducing Claude Opus 5: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jul 24, 2026)<br />
★ <strong>[공]</strong> Fast Mode 공식 문서: <a href="https://code.claude.com/docs/en/fast-mode">code.claude.com/docs/en/fast-mode</a><br />
★ <strong>[공]</strong> 마케팅 페이지: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (2026-08-06 확인)
</div>

## 한 눈에 보는 변화

| 항목 | 이전 (2026-07-18) | 현재 (2026-08-06) |
|------|-----------------|-----------------|
| **Fast Mode 대상 모델** | Claude Opus 4.8 | **Claude Opus 5** |
| **Fast Mode 가격** | $30/$150 per M tokens | **$10/$50 per M tokens** |
| **Opus 최신 모델** | Opus 4.8 | **Opus 5** |

> 💡 **공식 발표 기준** — Fast Mode 가격 변경은 마케팅 페이지에서 확인된 정보이며, Anthropic의 정책에 따라 변경될 수 있습니다.

---

## Claude Opus 5란?

**Claude Opus 5**는 Opus 티어의 새 버전으로, 2026년 7월 24일에 공식 출시됐어요.

> 🏋️ **비유로 설명하면**: Opus는 Claude 모델 가족 중 "대형 마트의 전문 컨설턴트"예요. 코딩이나 에이전트처럼 오래 생각해야 하는 무거운 일을 처리하는 데 강점이 있죠. Opus 5는 그 전문 컨설턴트가 5세대로 업그레이드된 것입니다.

### Opus 5의 특징

- 📋 **장기 에이전트 작업**에 강함 — 여러 단계를 거치는 자동화 흐름
- 💻 **코딩·전문 업무** 성능 개선
- ⚡ **Fast Mode** 지원 (Opus 4.8과 동일, 하지만 더 저렴해졌어요)

> ⚠️ **추정**: Opus 5의 세부 벤치마크와 성능 차이는 공식 발표 전문을 참조하세요. 제목과 카테고리 설명을 기반으로 작성한 내용입니다.

---

## Fast Mode — 무엇이 바뀌었나요?

### Fast Mode가 뭔가요?

Claude Code에서 Fast Mode를 켜면 **같은 Opus 모델을 2.5배 빠르게** 사용할 수 있어요. 대신 토큰당 비용이 일반 모드보다 높아집니다.

> 🚗 **비유로 설명하면**: 고속도로 하이패스 전용 차선 같아요. 같은 목적지(Opus 5)에 도달하는데, 평소보다 2.5배 빠르게 달리는 차선이죠. 요금(비용)은 조금 더 내지만, 급할 때는 확실히 유용합니다.

### 가격 변화: $30/$150 → $10/$50

이번 Opus 5 출시와 함께 Fast Mode 가격이 **3분의 1 수준**으로 대폭 낮아졌어요.

| 구분 | 기존 (Opus 4.8) | 신규 (Opus 5) |
|------|--------------|------------|
| 입력 토큰 (1M) | $30 | **$10** |
| 출력 토큰 (1M) | $150 | **$50** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 |

> 💡 **공식 발표 기준**: 마케팅 페이지 FAQ에서 "$10/$50 per million tokens"로 확인. 소비 기반(consumption-based) 플랜에 적용. 구독 플랜 사용자는 사용 크레딧 방식으로 이용 가능.

### Fast Mode는 어떻게 켜나요?

```
/fast
```

Claude Code 세션에서 `/fast` 명령어를 입력하면 Fast Mode가 활성화돼요. 다시 입력하면 해제됩니다.

또는 `/config` 메뉴에서도 설정할 수 있어요.

---

## 현재 Claude Code의 모델 라인업

2026년 8월 기준 Claude Code에서 사용 가능한 모델이에요:

| 모델 | 특징 | 용도 |
|------|------|------|
| **claude-fable-5** | 최상위 티어 | 최고난도 문제 (2026-07-01 글로벌 복귀) |
| **claude-opus-5** | Opus 최신 | 장기 에이전트·전문 코딩 |
| **claude-sonnet-5** | 기본 모델 | 일상 코딩·에이전트 (2026-07-01부터 기본) |
| **claude-haiku-4-5** | 경량 | 빠른 응답 필요 시 |

> 💡 Claude Code의 기본 모델은 **Sonnet 5**예요. Opus 5는 더 무거운 작업에 선택적으로 사용합니다.

---

## 오픈 웨이트(Open-weights) 모델 정책

2026년 7월 27일, Anthropic이 오픈 웨이트 모델에 대한 공식 입장을 발표했어요.

> ⚠️ **추정**: 발표 제목("Our position on open-weights models")만 확인됐습니다. 세부 내용은 공식 발표를 확인하세요.

오픈 웨이트 모델이란 모델의 가중치(내부 파라미터)를 공개하는 방식으로, Meta의 Llama 시리즈가 대표적이에요. Claude는 현재 오픈 웨이트가 아니지만, Anthropic이 이 주제에 대한 입장을 공개적으로 밝혔다는 점이 주목할 만합니다.

---

## 요약

- 🆕 **Opus 5** 출시 — Opus 티어 최신 버전 (Jul 24, 2026)
- ⚡ **Fast Mode** 모델 변경: Opus 4.8 → **Opus 5**
- 💸 **Fast Mode 가격** 인하: $30/$150 → **$10/$50** (1M tokens 기준)
- 🌍 오픈 웨이트 모델 관련 공식 입장 발표 (Jul 27, 2026)

Claude Code를 자주 사용하면서 Fast Mode를 쓰신다면, 이번 가격 인하가 상당히 반가운 소식일 거예요! 📉
