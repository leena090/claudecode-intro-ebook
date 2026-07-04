---
title: "[블] 신규 모델 총정리: Opus 4.8, Fable 5, Mythos 5, Sonnet 5 (2026년 5~7월)"
description: "Opus 4.8·Fable 5·Mythos 5 발표, 수출통제로 일시 정지됐던 Fable 5의 2026-07-01 전 세계 복귀, 그리고 Sonnet 5 출시까지 한 번에 정리"
tags: ["모델", "opus-4-8", "fable5", "mythos5", "sonnet-5", "2026", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-07-04"
---

<div class="note-star">
★ <strong>블로그 공식 발표 기준</strong> — Opus 4.8 (2026-05-28), Fable 5·Mythos 5 (2026-06-09), Fable 5 복귀 (2026-06-30), Sonnet 5 (2026-06-30). <code>[블]</code><br />
✅ <strong>2026-07-01 업데이트</strong> — <strong>Fable 5가 전 세계에서 복귀</strong>했어요! 수출통제 해제 및 Sonnet 5 출시 내용이 추가됐어요.
</div>

## 한 달 새 모델이 3개나? 무슨 일이죠?

2026년 5~6월 사이에 Anthropic이 새 모델 3종을 연달아 발표했어요. 하나씩 정리할게요.

---

## 1. Claude Opus 4.8 (2026년 5월 28일) `[블]`

### 무엇이 달라졌나요?

| 항목 | Opus 4.7 (이전) | Opus 4.8 (신규) |
|------|----------------|----------------|
| 코딩 실력 | 강력함 | 더 강력함 |
| 에이전트 작업 | 좋음 | 더 좋음 |
| 긴 작업 일관성 | 보통 | 향상됨 |
| Claude Code 기본 모델 | ✅ | ✅ (Max/Team Premium/Enterprise/API) |

> 🍱 **비유**: 스마트폰에 비유하면, Opus 4.7이 "iPhone 16"이라면 Opus 4.8은 "iPhone 16 Pro"예요 — 같은 세대지만 한 단계 더 강력해요.

### Claude Code에서 어떻게 쓰나요?

```bash
# 최신 버전으로 업데이트 (v2.1.154 이상 필요)
claude update

# 모델 선택
/model claude-opus-4-8

# 어려운 작업엔 최대 노력 레벨로
/effort xhigh
```

### Fast Mode 가격 (2026-07-04 확정)

| 모델 | Fast Mode 가격 (입/출 per 백만 토큰) | 상태 |
|------|-------------------------------------|------|
| Opus 4.8 Fast | **$30 / $150** | ✅ 현재 기본 |
| Opus 4.7 Fast | $30 / $150 | 유지 |
| Opus 4.6 Fast | $30 / $150 | ⚠️ Deprecated |

<div class="note-circle">
○ Opus 4.8 Fast Mode 가격은 공식 마케팅 페이지 기준 <strong>$30/$150</strong>으로 확정됐어요<br />
○ 리서치 프리뷰 / 소비 기반 플랜 적용
</div>

---

## 2. Claude Fable 5 & Mythos 5 (2026년 6월 9일) `[블]`

### 완전히 새로운 모델 티어가 등장했어요

Fable 5와 Mythos 5는 Opus 위에 있는 **새로운 최상위 모델 티어**예요. Anthropic이 "Fable" 계열과 "Mythos" 계열이라는 완전히 새로운 이름을 사용했어요.

```
모델 계층 (2026-07-04 기준):
────────────────────────────────────
🥇 Fable 5 / Mythos 5    ← 최상위 (2026-07-01 복귀!)
⭐ Sonnet 5              ← 신규! 코딩·에이전트 프론티어
🥈 Opus 4.8              ← 강력한 에이전트 모델
🥉 Sonnet 4.6            ← 균형형
   Haiku 4.5             ← 경량형
```

> 🍱 **비유**: 지금까지 "Opus"가 프리미엄 스포츠카였다면, Fable·Mythos는 **슈퍼카** 티어예요. 완전히 다른 카테고리로 올라온 거예요.

### Claude Code에서 Fable 5 사용하기

```bash
# Claude Code v2.1.170 이상 필요
claude update

# 모델 선택
/model fable

# Advisor로 사용 (아래 참고)
/advisor fable
```

<div class="note-circle">
○ Fable 5는 /advisor 선택 목록에 나타나지 않아요 — 직접 타이핑으로 설정해야 해요<br />
○ <code>--advisor fable</code> 또는 설정에서 <code>"advisorModel": "fable"</code> 로 설정
</div>

---

## ✅ Fable 5 복귀! (2026년 6월 30일 ~ 7월 1일)

<div class="note-star">
✅ <strong>좋은 소식</strong> — 2026년 6월 30일, Anthropic이 Fable 5의 전 세계 복귀를 발표했어요. <strong>2026년 7월 1일부터 전 세계에서 Fable 5를 사용</strong>할 수 있어요! <code>[블]</code>
</div>

### 복귀 경위 요약

| 날짜 | 이벤트 |
|------|--------|
| 2026-06-09 | Fable 5·Mythos 5 발표 |
| 2026-06-12 | 미국 정부 수출통제 → 접근 일시 정지 |
| 2026-06-30 | Anthropic "Redeploying Fable 5" 발표 |
| **2026-07-01** | **Fable 5 전 세계 복귀** ✅ |

**Anthropic 공식 발표** (2026-06-30):
> "Fable 5 returns globally July 1."

### Fable 5 재사용 방법

```bash
# 최신 버전으로 업데이트
claude update

# Fable 5 선택
/model fable
```

<div class="note-circle">
○ 복귀와 함께 Amazon, Microsoft, Google, Glasswing 파트너와의 업계 공통 보안 프레임워크도 발표됐어요<br />
○ <code>[공식 발표 기준]</code> — 2026-06-30 Anthropic 블로그
</div>

---

## 2026년 6월 12일 수출통제 (참고: 해제됨)

<details>
<summary>당시 수출통제 상황 보기</summary>

2026년 6월 12일 미국 정부가 Fable 5·Mythos 5에 대한 수출통제 지시를 발령했어요. 약 19일 후인 7월 1일에 Fable 5가 전 세계 복귀했어요.

</details>

---

## 전체 모델 현황 (2026-07-04 기준)

| 모델 | 강점 | 현재 상태 | Claude Code 사용 가능? |
|------|------|----------|----------------------|
| **Fable 5** | 최상위 성능 | ✅ 전 세계 복귀 (2026-07-01~) | ✅ |
| Mythos 5 | 최상위 성능 (특화) | 공식 발표 기준 확인 필요 | 공식 발표 기준 확인 필요 |
| **Sonnet 5** | 코딩·에이전트 프론티어 | ✅ 신규 출시 (2026-06-30) | ✅ |
| **Opus 4.8** | 코딩·에이전트 강력 | ✅ 정상 | ✅ |
| Sonnet 4.6 | 균형형 | ✅ 정상 | ✅ |
| Haiku 4.5 | 경량·빠름 | ✅ 정상 | ✅ |

---

## 마케팅 페이지 변경 사항

공식 Claude Code 마케팅 페이지(claude.com/claude-code)에서도 모델 정보가 업데이트됐어요:

- **"Which models does Claude Code use?"** FAQ가 Fable 5, Opus 4.8, Sonnet 4.6, Haiku 4.5로 업데이트
- Fast Mode FAQ가 Opus 4.8 기준으로 변경 (가격: $10/$50 per MTok)

<div class="note-circle">
○ 마케팅 페이지 변경 감지: 2026-06-15 (이전: Opus 4.7 기준이었음)<br />
○ Fable 5 접근 정지 상황은 마케팅 페이지에 별도 공지 없음 — Anthropic 뉴스룸 참조
</div>
