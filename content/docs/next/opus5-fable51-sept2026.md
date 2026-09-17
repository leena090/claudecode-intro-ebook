---
title: "[공][블] Claude Opus 5 · Fable 5.1 · Mythos 5.1 — 2026년 7~9월 모델 대격변"
description: "Opus 5 출시(7월 24일), Fable 5.1 · Mythos 5.1 등장(9월 1일), Fast Mode 가격 인하까지 — 3개월 만에 모델 라인업이 통째로 바뀌었어요"
tags: ["자동생성", "Opus5", "Fable5.1", "Mythos5.1", "신규모델", "Fast Mode", "모델업데이트"]
category: "next"
order: 17
lastUpdated: "2026-09-17"
---

<div class="note-star">
★ <strong>[블]</strong> Claude Opus 5 출시: <a href="https://www.anthropic.com/news/claude-opus-5">anthropic.com/news/claude-opus-5</a> (Jul 24, 2026)
<br />★ <strong>[블]</strong> Claude Fable 5.1 · Mythos 5.1 출시: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Sep 1, 2026)
<br />★ <strong>[공]</strong> Fable 5.1 Claude Code 적용: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a>
<br />★ Fast Mode: Opus 4.8($30/$150) → <strong>Opus 5($10/$50)</strong> 전환 (2026-09 기준)
</div>

## 한 눈에 보는 7~9월 모델 타임라인

| 날짜 | 내용 |
|---|---|
| 2026-07-24 | **Claude Opus 5** 공식 출시 |
| 2026-08말 | Fast Mode 기준 모델: Opus 4.8 → **Opus 5** 전환 |
| 2026-09-01 | **Claude Fable 5.1** + **Claude Mythos 5.1** 공식 출시 |
| 2026-09 | Enterprise 플랜 기본 모델 → **Opus 5** |
| v2.1.257 | Claude Code에 Fable 5.1 적용, `fable` 별칭이 5.1 선택 |

---

## Claude Opus 5 — 장기 에이전트를 위한 새 Opus

### 무엇이 달라졌나요?

**Claude Opus 5** (`claude-opus-5`)는 코딩과 전문 업무 성능을 높이면서 **장기 실행 에이전트**를 안정적으로 구동하기 위해 설계된 새 Opus 모델이에요.

> 🍱 **비유로 설명하면**: 기존 Opus 4.8이 "학원 특기 강사"였다면, Opus 5는 **"야근도 거뜬한 풀스택 시니어 개발자"** 예요. 한 세션에서 길고 복잡한 작업을 끝까지 처리하는 능력이 크게 향상됐어요.

### 핵심 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **강점** | 장기 실행 에이전트 · 코딩 · 전문 업무 |
| **Enterprise** | 좌석 기반 Enterprise 플랜의 기본 모델로 지정 |
| **Fast Mode** | Opus 5 고속 버전, 2.5배 빠름 — $10/$50 / 백만 토큰 |

### Fast Mode 가격이 크게 내렸어요

| 구분 | 이전 (Opus 4.8) | 현재 (Opus 5) |
|---|---|---|
| **대상 모델** | claude-opus-4-8 | **claude-opus-5** |
| **입력 / 출력** | $30 / $150 | **$10 / $50** |
| **속도** | 2.5배 빠름 | 2.5배 빠름 (동일) |

> 💡 Opus 5 기반 Fast Mode는 리서치 프리뷰 중이에요. 소비 기반 플랜 사용자와 구독 플랜의 사용 크레딧으로 이용할 수 있어요. (공식 발표 기준 / 추후 변동 가능)

---

## Claude Fable 5.1 · Mythos 5.1 — 코딩과 과학 연구의 최전선

### Fable 5.1: 코딩·지식 업무 최강자

**Claude Fable 5.1** (`claude-fable-5-1`)은 코딩과 지식 업무에서 Anthropic의 가장 앞선 모델이에요. 기존 Fable 5 대비 능력이 전반적으로 향상됐어요.

> 🍱 **비유로 설명하면**: Fable 5가 "올림픽 국가대표 프로그래머"였다면, Fable 5.1은 **"세계 신기록을 세운 그 다음 해 버전"** 이에요.

#### Claude Code에서 Fable 5.1 사용하기

```bash
# 현재 세션에서 Fable 5.1로 전환하고 기본값으로 저장
/model fable
```

> ⚠️ v2.1.257 이상 필요. `fable` 별칭은 이제 Fable 5.1을 선택해요. Claude Apps Gateway 세션에서는 `fable`이 여전히 Fable 5를 선택하므로, Gateway가 5.1을 제공하는 경우 `/model claude-fable-5-1`을 직접 입력하세요.

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-fable-5-1` |
| **컨텍스트 창** | **1M 토큰** (Fable 5와 동일) |
| **강점** | 코딩 · 지식 업무 · 복잡한 에이전트 작업 |
| **별칭** | `/model fable` → 자동으로 5.1 선택 |

### Mythos 5.1: 과학 연구를 위한 AI

**Claude Mythos 5.1** (`claude-mythos-5-1`)은 AI 모델이 과학적 연구에 기여하는 초기 모습을 보여주는 모델이에요. 특히 연구 역량(research capabilities)에 집중돼 있어요.

> 💡 Mythos 5.1은 Claude Code 일반 사용보다는 과학 연구 환경(예: Claude Science 워크벤치)에서 주로 쓰여요. 일반 코딩 작업에는 Fable 5.1이 더 적합해요.

---

## 지금 Claude Code에서 쓸 수 있는 모델 정리

| 모델 | 별칭 | 용도 |
|---|---|---|
| `claude-fable-5-1` | `fable` | 최고 성능, 코딩·복잡 에이전트 |
| `claude-opus-5` | — | 장기 실행 에이전트, Enterprise 기본 |
| `claude-sonnet-5` | — | 균형형, Claude Code 일반 기본 |
| `claude-haiku-4-5-20251001` | — | 가볍고 빠른 작업 |

> 📅 위 내용은 2026년 9월 기준 공식 발표 내용이에요. 모델 라인업과 별칭은 추후 변경될 수 있으니 [`/model`](https://code.claude.com/docs/en/model-config) 명령어로 현재 사용 가능한 모델 목록을 직접 확인하세요.
