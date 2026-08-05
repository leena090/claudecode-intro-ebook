---
title: "[블][공] Claude Opus 5 출시 — 오래 걸리는 복잡한 작업의 새 기준"
description: "2026년 7월 24일 출시된 Claude Opus 5. 코딩·전문 업무에서 한 단계 도약하고 Fast mode는 Opus 5로 전환, 가격도 대폭 인하"
tags: ["자동생성", "Opus5", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-08-05"
---

<div class="note-star">
★ <strong>[블]</strong> "Introducing Claude Opus 5" — <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jul 24, 2026)<br />
★ <strong>[공]</strong> Fast mode Opus 5 전환 + 가격 변경 — claude.com/claude-code 마케팅 페이지 (2026-08-05 기준 확인)
</div>

## 한 눈에 보는 Opus 5 주요 변화

| 항목 | 이전 (Opus 4.8) | 신규 (Opus 5) |
|---|---|---|
| **출시일** | 2026-05-28 | 2026-07-24 |
| **강점** | 복잡한 코딩, 멀티 에이전트 | 장기 실행 에이전트, 코딩·전문 업무 향상 |
| **Fast mode** | ✅ (Opus 4.8 기반) | ✅ (Opus 5 기반, 새 가격) |
| **Fast mode 가격** | $30/$150 per M tokens | **$10/$50 per M tokens** (3배 인하!) |

---

## Claude Opus 5 — 무엇이 달라졌나요?

**Claude Opus 5** (`claude-opus-5`)는 2026년 7월 24일 공식 출시됐어요.

> 🍱 **비유로 설명하면**: 기존 Opus 4.8이 "능력 있는 시니어 개발자"였다면, Opus 5는 **"몇 날 며칠 이어서 일해도 지치지 않는 슈퍼 개발자"** 예요 — 특히 오래 걸리는 복잡한 작업에서 실력이 더 빛납니다.

### 핵심 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **주요 강점** | 장기 실행 에이전트 작업, 코딩, 전문 업무 |
| **포지션** | 최고 성능 티어 (Fable 5와 Sonnet 5 사이) |
| **출시일** | 2026년 7월 24일 |

### Opus 5가 특히 뛰어난 상황

Anthropic이 강조한 Opus 5의 장점은 **장기 실행 에이전트(long-running agents)** 작업이에요:

```
✅ 수십 개 파일을 수정하는 대규모 리팩토링
✅ 여러 도구를 연달아 쓰는 복잡한 자동화
✅ 오랜 시간 이어가는 디버깅 세션
✅ 전문적인 문서 작성·분석·업무
```

---

## Claude Code에서 Opus 5 쓰기

```bash
# 모델 확인 및 전환
/model                 # 현재 모델 확인
/model claude-opus-5   # Opus 5로 전환

# 또는 settings.json에서 고정
```

**settings.json에서 기본 모델 설정:**
```json
{
  "model": "claude-opus-5"
}
```

<div class="note-star">
★ Claude Code 기본 모델은 여전히 <strong>Sonnet 5</strong>예요. Opus 5는 특별히 어렵거나 오래 걸리는 작업에 선택적으로 쓰세요.
</div>

---

## Fast Mode 대변화 — Opus 5 + 가격 3배 인하

### 뭐가 달라졌나요?

마케팅 페이지에서 확인된 내용:

> "Fast mode is a high-speed configuration for **Opus 5**, making the model 2.5x faster at a higher cost per token."

| 항목 | 이전 (Opus 4.8) | 현재 (Opus 5) |
|---|---|---|
| **기준 모델** | Opus 4.8 | **Opus 5** |
| **속도** | 2.5배 빠름 | 2.5배 빠름 (동일) |
| **입력 가격** | $30 per M tokens | **$10 per M tokens** |
| **출력 가격** | $150 per M tokens | **$50 per M tokens** |
| **제공 방식** | 리서치 프리뷰 | 리서치 프리뷰 (유지) |

> 🍱 **비유로 설명하면**: Opus 4.8을 "비싸고 빠른 급행 택시"였다면, 이제 Opus 5 Fast mode는 **"더 좋은 차에 가격도 3배 싸진 급행"** 이에요.

### Fast Mode 켜는 법

```
Claude Code 우측 하단 또는 상단 모드 선택 → Fast mode 켜기
```

또는 설정에서:
```json
{
  "fastMode": true
}
```

<div class="note-star">
⚠️ <strong>가격 주의</strong>: Fast mode는 소비(consumption) 기반 플랜이나 API 사용자에게 적용돼요. Pro·Max 구독은 사용 크레딧으로 차감되는 방식이에요. 정확한 내용은 공식 청구 페이지를 확인하세요. (공식 발표 기준)
</div>

---

## 현재 Claude 모델 라인업 전체 정리

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| **Claude Fable 5** | 최상위 | 가장 어려운 기업급 작업 |
| **Claude Opus 5** ⭐ | 고성능 장기 에이전트 | **복잡한 코딩, 오래 걸리는 자동화** |
| **Claude Sonnet 5** | 균형형 기본값 | 일상 코딩, 빠른 응답 |
| **Claude Haiku 4.5** | 경량·저렴 | 단순 반복 작업 |

---

## 입문자를 위한 모델 선택 가이드

| 상황 | 추천 모델 |
|---|---|
| 처음 시작 | Sonnet 5 (기본값 그대로) |
| 파일 50개 이상 수정하는 리팩토링 | Opus 5 |
| 여러 도구 연달아 쓰는 에이전트 작업 | Opus 5 |
| 빠른 일상 코딩 | Sonnet 5 |
| 간단한 반복 스크립트 | Haiku 4.5 |

> 🍱 **정리하면**: 대부분의 경우 기본값인 Sonnet 5로 충분해요. "이 작업 왜 이렇게 오래 걸리고 중간에 포기하지?" 싶을 때 Opus 5로 바꿔보세요.

---

<div class="note-star">
★ Claude Opus 5 공식 발표: "Introducing Claude Opus 5" — <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Jul 24, 2026)<br />
★ Fast mode Opus 5 전환 + 가격: claude.com/claude-code 마케팅 페이지 (공식 발표 기준, 2026-08-05 확인)<br />
★ Fast mode 상세: <a href="https://code.claude.com/docs/en/fast-mode">code.claude.com/docs/en/fast-mode</a>
</div>
