---
title: "[블] 신규 모델 총정리: Sonnet 5, Opus 4.8, Fable 5, Mythos 5 (2026년 5~7월)"
description: "Sonnet 5 기본 모델 전환(7월), Opus 4.8 정식 출시(5월), Fable 5·Mythos 5 발표 후 수출통제·복귀(6~7월) 전체 정리"
tags: ["모델", "sonnet5", "opus-4-8", "fable5", "mythos5", "2026", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-07-11"
---

<div class="note-star">
★ <strong>블로그·공식 문서 기준</strong> — Sonnet 5 (2026-06-30), Opus 4.8 (2026-05-28), Fable 5·Mythos 5 (2026-06-09). <code>[블]</code><br />
✅ <strong>최신 상태 (2026-07-11)</strong> — Fable 5가 2026년 7월 1일 글로벌 재개됐어요. Sonnet 5가 기본 모델이에요.
</div>

## 두 달 새 모델이 4개? 무슨 일이죠?

2026년 5월~7월 사이에 Anthropic이 새 모델 소식을 연달아 발표했어요. 가장 최근 것부터 정리할게요.

---

## 0. Claude Sonnet 5 (2026년 6월 30일) `[블·공]` ← 지금 기본 모델!

### 무엇이 달라졌나요?

Sonnet 5는 **Pro·Team Standard·Enterprise 구독 기본 모델**이 됐어요 (2026년 6월 29일 적용).

| 항목 | Sonnet 4.6 (이전) | Sonnet 5 (신규·기본) |
|------|------------------|---------------------|
| 컨텍스트 창 | 200K 토큰 | **100만 토큰 (1M)** |
| 기본 사고 기능 | 선택 | **Adaptive thinking 켜짐** |
| 코딩 실력 | 우수 | 최고 수준 (Opus 급) |
| 기본 모델 여부 | ✅ (이전) | ✅ (현재 기본) |
| API 홍보 가격 | 기존 | **$2/$10 per MTok** (2026-08-31까지) |

> 🍱 **비유**: 이전에는 성능 좋은 중형차(Sonnet 4.6)가 기본이었다면, 이제 스포츠카 수준의 기술을 탑재한 새 중형차(Sonnet 5)가 기본이 됐어요. 가격은 그대로 중형차예요.

### Claude Code에서 어떻게 쓰나요?

```bash
# 최소 버전 확인 (v2.1.197 이상 필요)
claude update

# 명시적으로 Sonnet 5 선택
/model claude-sonnet-5
```

<div class="note-circle">
○ Pro·Max·Team Standard·Enterprise 구독 기본 모델로 자동 전환됨<br />
○ Sonnet 5 사용하려면 Claude Code v2.1.197 이상으로 업데이트 필요
</div>

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

### Fast Mode 가격 변화

Opus 4.8 Fast Mode는 이전 Opus 4.7보다 **훨씬 저렴**해요:

| 모델 | Fast Mode 가격 (입/출 per 백만 토큰) | 상태 |
|------|-------------------------------------|------|
| Opus 4.8 Fast | **$10 / $50** | ✅ 현재 기본 |
| Opus 4.7 Fast | $30 / $150 | 유지 |
| Opus 4.6 Fast | $30 / $150 | ⚠️ Deprecated |

---

## 2. Claude Fable 5 & Mythos 5 (2026년 6월 9일) `[블]`

### 완전히 새로운 모델 티어가 등장했어요

Fable 5와 Mythos 5는 Opus 위에 있는 **새로운 최상위 모델 티어**예요. Anthropic이 "Fable" 계열과 "Mythos" 계열이라는 완전히 새로운 이름을 사용했어요.

```
모델 계층 (2026-06-09 기준):
────────────────────────────
🥇 Fable 5 / Mythos 5    ← 신규 최상위
🥈 Opus 4.8              ← 기존 최고
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

## ✅ 수출 통제 → 해소: Fable 5 복귀 (2026년 7월 1일)

<div class="note-star">
✅ <strong>업데이트</strong> — 2026년 6월 30일 Anthropic 발표: <strong>Fable 5가 2026년 7월 1일부터 글로벌 재개</strong>됐어요. 수출통제 문제가 해소됐습니다.<br />
📅 수출통제 기간: 2026-06-12 ~ 2026-06-30 (약 18일)
</div>

### 수출통제 상황 요약 (이미 해소)

| 항목 | 내용 |
|------|------|
| 수출통제 발령 | 2026-06-12 (미국 정부 지시) |
| **복귀** | **2026-07-01 (글로벌 재개)** |
| 함께 발표된 것 | Glasswing 파트너들과 함께 잼브레이크 심각도 평가 프레임워크 제안 |
| 현재 상태 | ✅ **정상 접근 가능** |

**Anthropic 공식 발표** (2026-06-30):
> Fable 5가 7월 1일부터 전 세계에 다시 돌아옵니다. 아울러 Amazon, Microsoft, Google 등 Glasswing 파트너들과 함께 잼브레이크 심각도 평가 산업 표준 프레임워크를 제안합니다.

<div class="note-circle">
○ Fable 5 재개 소식: <code>[블]</code> Anthropic 뉴스룸 2026-06-30 발표 기준<br />
○ 접근이 안 된다면 Claude Code를 최신 버전으로 업데이트해보세요: <code>claude update</code>
</div>

---

## 전체 모델 현황 (2026-07-11 기준)

| 모델 | 강점 | 현재 상태 | Claude Code 사용 가능? |
|------|------|----------|----------------------|
| Fable 5 | 최상위 성능 | ✅ 정상 (7월 1일 복귀) | ✅ |
| Mythos 5 | 최상위 성능 (특화) | ✅ 정상 (7월 1일 복귀) | ✅ |
| Opus 4.8 | 코딩·에이전트 최강 | ✅ 정상 | ✅ |
| **Sonnet 5** | 코딩·도구 최고 수준 | ✅ 정상 | ✅ **기본 모델** |
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
