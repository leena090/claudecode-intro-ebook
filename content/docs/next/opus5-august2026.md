---
title: "[공][블] Claude Opus 5 출시 — 2026년 7월 최상위 모델 업데이트"
description: "2026년 7월 24일 Claude Opus 5가 공식 출시됐어요. Fast Mode도 Opus 5로 업데이트되며 가격도 변경됐습니다"
tags: ["자동생성", "Opus5", "모델업데이트", "FastMode", "신규모델"]
category: "next"
order: 17
lastUpdated: "2026-08-02"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5 출시: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)
<br />★ <strong>[공]</strong> Fast Mode 업데이트: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 마케팅 페이지 기준 (2026-08-02 확인)
</div>

## 한 눈에 보는 7월 모델 업데이트

| 날짜 | 내용 |
|---|---|
| 2026-07-24 | **Claude Opus 5** 공식 출시 |
| 2026-07-24 이후 | **Fast Mode** 대상: Opus 4.8 → **Opus 5** |
| 2026-07-24 이후 | **Fast Mode 가격**: $30/$150 → **$10/$50** per million tokens |

---

## Claude Opus 5 — 장기 에이전트의 새로운 왕

### 무엇이 달라졌나요?

**Claude Opus 5** (`claude-opus-5`)는 Anthropic이 2026년 7월 24일 공식 출시한 **Opus 계열 최신 모델**이에요.

공식 발표에 따르면, Opus 5는 **장기 실행 에이전트(에이전트 — 스스로 작업하는 AI)** 에서 큰 도약을 이루었고, 코딩과 전문 업무에서도 성능이 한 단계 올라갔어요.

> 🏋️ **비유로 설명하면**: Sonnet 5가 "빠르고 만능인 에이스 직원"이라면, Opus 5는 **"밤새도록 복잡한 프로젝트를 끝까지 해내는 체력왕 전문가"** 예요. 짧은 작업보다 길고 복잡한 작업일수록 Opus 5가 빛납니다.

### 주요 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **강점** | 장기 실행 에이전트 · 코딩 · 전문 업무 전반 |
| **출시일** | 2026년 7월 24일 |
| **출처** | 공식 발표 기준 |

### Claude Code에서 Opus 5 사용하기

세션 안에서 모델을 바꾸는 건 간단해요:

```bash
# Opus 5로 전환
/model claude-opus-5

# 기본 Sonnet 5로 되돌리기
/model claude-sonnet-5
```

또는 `/config`에서 기본 모델을 영구 설정할 수 있어요.

---

## Fast Mode 업데이트 — Opus 5 고속 버전

### Fast Mode(패스트 모드)가 뭐예요?

**Fast Mode**는 Opus 모델을 **2.5배 더 빠르게** 실행하는 고속 구성 옵션이에요. 속도가 빨라지는 대신 토큰 비용이 일반 요금보다 높아요.

> 🚄 **비유로 설명하면**: 일반 Opus 5가 "KTX"라면, Fast Mode Opus 5는 **"KTX 특급 직통"** 이에요. 더 빠른 대신 요금이 다르죠.

### 이번 변경 내용

| 항목 | 이전 (7월 이전) | 현재 (7월 이후) |
|---|---|---|
| **대상 모델** | Opus 4.8 | **Opus 5** |
| **가격 (입력, input)** | $30/M tokens | **$10/M tokens** |
| **가격 (출력, output)** | $150/M tokens | **$50/M tokens** |
| **상태** | 리서치 프리뷰 | 리서치 프리뷰 |
| **이용 조건** | 소비 기반 플랜 | 소비 기반 플랜 |

<div class="note-star">
💡 <strong>가격이 내려갔어요!</strong> Opus 5로 업데이트되면서 Fast Mode 가격이 $30/$150에서 <strong>$10/$50</strong>으로 낮아졌어요. Opus 5 자체 성능도 높아지면서 가격까지 합리적으로 조정된 것입니다.
</div>

### Fast Mode 켜는 방법

```bash
# 슬래시 명령어로 토글
/fast
```

또는 `/config` 메뉴의 **Fast mode** 항목에서 토글할 수 있어요. Pro·Max·Team·Enterprise 플랜에서 이용 가능합니다 (소비 기반 플랜 또는 구독 플랜의 사용 크레딧 방식).

---

## 현재 Claude Code 모델 라인업 (2026년 8월 기준)

| 모델 | 특징 | 언제 쓰나요? |
|---|---|---|
| `claude-sonnet-5` | ⭐ **기본** — 빠르고 만능 | 대부분의 코딩·문서 작업 |
| `claude-opus-5` | 강력 — 장기 에이전트 최적화 | 복잡한 다중 단계 자동화 |
| `claude-fable-5` | 최상위 — 최고 성능 | 가장 어렵고 창의적인 작업 |
| `claude-haiku-4-5` | 경량 — 초고속 | 간단한 반복 작업 |

<div class="note-star">
★ <strong>모델 선택 팁</strong>: 대부분의 코딩·문서 작업은 Sonnet 5로도 충분합니다. 에이전트가 여러 단계를 자율적으로 처리하는 복잡한 업무일 때 Opus 5를 고려하세요.
</div>

---

## 이전 모델 업데이트 기록

| 날짜 | 모델 | 내용 |
|---|---|---|
| 2026-06-09 | Fable 5 | 최상위 모델 발표 |
| 2026-06-12 | Fable 5 | 수출통제로 일시 정지 |
| 2026-06-30 | Sonnet 5 | 공식 출시 |
| 2026-07-01 | Fable 5 | 글로벌 복귀 |
| 2026-07-01 | Sonnet 5 | Claude Code 기본 모델 전환 |
| **2026-07-24** | **Opus 5** | **공식 출시** |
