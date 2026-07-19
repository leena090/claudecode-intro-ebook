---
title: "[블] Sonnet 5 출시 & Fable 5 복귀 — 2026년 7월 모델 업데이트"
description: "Sonnet 5가 Claude Code 기본 모델로 전환(2026-07-01), Fable 5 글로벌 복귀, 새 모델 계층 정리"
tags: ["모델", "sonnet5", "fable5", "2026", "기본모델", "자동생성"]
category: "next"
order: 13
lastUpdated: "2026-07-19"
---

<div class="note-star">
★ <strong>공식·블로그 발표 기준</strong> — Sonnet 5 출시 (2026-06-30), Fable 5 글로벌 복귀 (2026-07-01). <code>[블]+[공]</code><br />
⚠️ Fable 5 수출통제 해제는 2026-07-01 공식 발표 기준이에요.
</div>

> 💡 **이전 모델 정리**는 → **[신규 모델 총정리: Opus 4.8, Fable 5 (2026년 5~6월)]** 문서를 먼저 보세요.

---

## 한 줄 요약부터

| 날짜 | 무슨 일 |
|------|--------|
| 2026-06-30 | Sonnet 5 정식 출시 |
| 2026-07-01 | Sonnet 5가 Claude Code 기본 모델로 전환 |
| 2026-07-01 | Fable 5 글로벌 복귀 (6월 12일 수출통제 해제) |

---

## Claude Sonnet 5 — 이제 기본 모델이에요

### 뭐가 달라졌나요?

Sonnet 5는 **코딩·에이전트·전문 업무 전반에서** 이전 Sonnet 세대 대비 대폭 향상된 성능을 제공해요. Anthropic은 이를 "at scale"에서도 유지되는 프론티어 성능이라고 설명했어요 (블로그 공식 발표 기준).

> 🍱 **비유**: Opus 4.8이 "베테랑 개발자"였다면, Sonnet 5는 "더 빠르고 더 넓은 분야에 능통한 신예"예요. 대부분의 작업엔 Sonnet 5로 충분해요.

**모델 계층 (2026-07-01 이후):**

```
🏆 Fable 5       ← 최상위 (복잡한 연구·초고난도 작업)
🥈 Opus 4.8      ← 고성능 (대형 코드베이스, 장기 작업)
✅ Sonnet 5      ← 기본값 (대부분의 코딩 작업에 적합)
   Haiku 4.5     ← 경량 (빠른 질의응답)
```

### Claude Code에서 모델 확인·전환

```bash
# 현재 모델 확인
/model

# Sonnet 5 명시 선택
/model claude-sonnet-5

# Opus 4.8로 전환 (더 까다로운 작업 시)
/model claude-opus-4-8

# Fable 5로 전환 (최고 성능이 필요할 때)
/model claude-fable-5
```

<div class="note-circle">
○ settings.json에 <code>"model"</code>이 명시돼 있으면 그게 우선이에요<br />
○ 기본값만 바뀐 것 — 이전 모델도 계속 사용 가능해요
</div>

---

## Fable 5 글로벌 복귀

### 그동안 무슨 일이 있었나요?

2026년 6월 9일에 Fable 5가 공개됐지만, 불과 사흘 뒤인 6월 12일 미국 정부 수출통제 지시로 전 세계에서 접근이 차단됐어요.

그리고 7월 1일, Fable 5가 **전 세계에 다시 정식 복귀**했어요.

### 잼브레이크 프레임워크도 함께 발표

Anthropic은 Fable 5 복귀와 함께 **잼브레이크(Jailbreak) 심각도 평가 업계 공통 프레임워크**를 제안했어요. Amazon, Microsoft, Google 등 주요 AI 기업들과 공동으로 만든 기준이에요 (공식 발표 기준).

> 쉽게 말하면: AI 보안을 평가하는 "공통 기준표"를 만든 거예요. 업계 전반이 같은 잣대로 AI 보안을 평가하게 돼요.

### Fable 5는 언제 쓰면 좋나요?

| 상황 | 추천 모델 |
|------|----------|
| 평소 코딩 작업 | Sonnet 5 (기본) |
| 복잡한 리팩터링, 대형 코드베이스 분석 | Opus 4.8 |
| 초고난도 설계, 연구 수준 작업 | Fable 5 |
| 빠른 질의응답, 간단한 편집 | Haiku 4.5 |

<div class="note-circle">
○ Fable 5는 소비 기반(usage-based) 요금제나 API에서 이용 가능해요<br />
○ 일반 Pro/Max 구독은 사용량 제한이 적용될 수 있어요 — 공식 요금 페이지 확인
</div>

---

## 마케팅 페이지 변경 사항

공식 마케팅 페이지(claude.com/claude-code) 기준으로 확인된 내용이에요:

| 항목 | 이전 | 현재 (2026-07-01~) |
|------|------|-------------------|
| 기본 모델 | Opus 4.8 | **Sonnet 5** |
| 사용 가능 모델 | Fable 5 (중단), Opus 4.8, Sonnet 4.6, Haiku 4.5 | Fable 5 (복귀), Opus 4.8, **Sonnet 5**, Haiku 4.5 |
| Fast Mode 대상 | Opus 4.8 | Opus 4.8 유지 |

---

## 정리: 내가 지금 어떤 모델 써야 할까?

> 🍱 **처음 시작하는 분**: 아무것도 설정 안 해도 돼요. Sonnet 5가 자동으로 적용돼요.

> 🍱 **코딩 작업이 빡빡한 분**: `settings.json`에 `"model": "claude-opus-4-8"` 추가해보세요.

> 🍱 **최고 성능이 필요한 분**: `/model fable`로 전환하되, 비용이 높을 수 있어요.

<div class="note-circle">
○ 모델별 성능·가격 차이는 공식 요금 페이지(code.claude.com/docs/en/costs)에서 확인<br />
○ Sonnet 5 공식 블로그: <a href="https://www.anthropic.com/news/claude-sonnet-5" target="_blank">anthropic.com/news/claude-sonnet-5</a> [블]<br />
○ Fable 5 복귀 공식 블로그: <a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank">anthropic.com/news/redeploying-fable-5</a> [블]
</div>
