---
title: "[블] Claude Fable 5.1 & Mythos 5.1 출시 — 2026년 9월 신규 모델"
description: "2026년 9월 1일 Anthropic이 Fable 5.1과 Mythos 5.1을 발표했어요. 코딩과 지식 작업에 가장 뛰어난 모델로, 과학 연구에도 도전합니다"
tags: ["자동생성", "Fable51", "Mythos51", "신규모델", "모델업데이트", "최신"]
category: "next"
order: 17
lastUpdated: "2026-09-22"
---

<div class="note-star">
★ <strong>[블]</strong> Anthropic 공식 발표: anthropic.com/news (Sep 1, 2026)<br />
★ <strong>[공]</strong> Claude Code 적용: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a> (Sep 1–4, 2026)<br />
★ 공식 발표 기준 정보를 담았어요.
</div>

## Fable 5.1과 Mythos 5.1이 뭔가요?

2026년 9월 1일, Anthropic이 **Claude Fable 5.1**과 **Claude Mythos 5.1**을 공식 발표했어요.

비유하자면, 기존 Fable 5 · Mythos 5가 "스포츠카"라면 Fable 5.1 · Mythos 5.1은 **"레이싱카"** 수준으로 업그레이드된 버전이에요. 코딩과 전문 지식 작업 성능이 더 강화됐고, AI가 과학 연구에 기여할 수 있는 가능성도 처음으로 보여줬어요.

---

## Claude Code에서의 변경 사항

### Fable 5.1이 기본값으로

**W36 (2026년 9월 1~4일)** 업데이트로 Claude Code에서 `fable` 별칭이 이제 **Fable 5.1**을 가리켜요.

```text
> /model fable
```

위 명령어를 실행하면 자동으로 Fable 5.1이 선택돼요.

> **주의**: Claude Apps Gateway 환경에서는 `fable`이 아직 Fable 5를 가리킬 수 있어요. 게이트웨이가 Fable 5.1을 지원하는지 확인한 후 직접 `/model claude-fable-5-1`로 지정하세요.

### 1M 토큰 컨텍스트 창

Fable 5.1은 **100만 토큰 컨텍스트 창(1M context window)** 을 지원해요. 엄청나게 큰 코드베이스나 긴 문서도 한 번에 이해할 수 있어요.

| 상황 | 활용 예 |
|---|---|
| 대형 코드베이스 분석 | 수만 줄짜리 레거시 코드 전체 파악 |
| 긴 문서 처리 | 수백 페이지 PDF를 한 번에 요약 |
| 복잡한 프로젝트 | 여러 파일 간 의존성 추적 |

---

## 새 모델 활용하기

### 모델 전환 방법

```text
# Fable 5.1로 전환
> /model fable

# 또는 모델 ID 직접 지정
> /model claude-fable-5-1
```

### 어떤 작업에 써야 할까요?

| 작업 유형 | 추천 모델 |
|---|---|
| 일상적인 코딩 | Sonnet 5 (기본값) |
| 복잡한 설계·리팩토링 | Fable 5.1 |
| 대규모 마이그레이션 | Fable 5.1 |
| 과학 연구 보조 | Fable 5.1 / Mythos 5.1 |

### 요금 고려사항

> ⚠️ Fable 5.1과 Mythos 5.1은 Fable 5보다 더 높은 성능을 제공하는 대신, 소비 기반(API) 플랜에서 더 많은 토큰 비용이 발생할 수 있어요. 공식 [요금 정책](https://claude.ai)을 확인하세요.

---

## Mythos 5.1은 무엇인가요?

Mythos는 Fable 계열과 별개의 최상위 모델 라인이에요. (공식 발표 기준)

- **Fable 5.1**: 코딩과 일반 지식 작업에 최적화
- **Mythos 5.1**: 더욱 깊은 추론과 연구 작업에 특화

Claude Code에서 Mythos는 주로 긴 기간 동안 깊은 사고가 필요한 작업에 사용해요.

---

## 한 눈에 보는 모델 라인업 (2026년 9월 기준)

| 모델 | 특징 | Claude Code 기본 |
|---|---|---|
| **Haiku 4.5** | 빠르고 경제적 | ❌ |
| **Sonnet 5** | 균형형 최전선 | ✅ |
| **Opus 5** | 강력한 Opus 계열 최신 | ❌ |
| **Fable 5.1** | 최고 코딩·지식 작업 | ❌ |
| **Mythos 5.1** | 최고 추론·연구 | ❌ |

> 💡 **팁**: 대부분의 작업은 Sonnet 5로 충분해요. 복잡한 설계나 장기간 마이그레이션에만 Fable 5.1을 켜보세요.

---

## 관련 내용

- [Sonnet 5 + Fable 5 출시 정리](/docs/next/sonnet5-fable5-july2026) — 직전 모델 업데이트
- [Fast 모드](/docs/advanced/voice-fast) — Opus 5 고속 실행 설정
- [모델 설정](/docs/config/settings-json) — 기본 모델 변경 방법
