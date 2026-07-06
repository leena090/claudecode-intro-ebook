---
title: "[블] 신규 모델 총정리: Opus 4.8, Fable 5, Mythos 5, Sonnet 5 (2026년 5~7월)"
description: "Opus 4.8 정식 출시, Fable 5·Mythos 5 발표·수출통제·재복귀, Sonnet 5 출시까지 한 번에 정리"
tags: ["모델", "opus-4-8", "fable5", "mythos5", "sonnet-5", "2026", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-07-06"
---

<div class="note-star">
★ <strong>블로그 공식 발표 기준</strong> — Opus 4.8 (2026-05-28), Fable 5·Mythos 5 (2026-06-09). <code>[블]</code><br />
⚠️ <strong>중요 알림</strong> — 2026-06-12 미국 정부 수출통제 지시로 <strong>Fable 5·Mythos 5 접근이 일시 정지</strong>됐어요. 아래 자세히 설명합니다.
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

## ⚠️ 중요: 미국 정부 수출 통제 (2026년 6월 12일)

<div class="note-star">
⚠️ <strong>주의</strong> — 2026년 6월 12일, 미국 정부가 Fable 5·Mythos 5에 대한 수출통제 지시를 발령했어요. 현재 이 모델들에 대한 <strong>접근이 일시 정지</strong>된 상태예요.
</div>

### 상황 요약

| 항목 | 내용 |
|------|------|
| 발령 기관 | 미국 정부 (수출통제 지시) |
| 대상 모델 | Fable 5, Mythos 5 |
| 현재 상태 | 접근 일시 정지 |
| 영향 범위 | 미국 외 국가 포함 (공식 발표 기준) |

**Anthropic 공식 입장** (2026-06-12 발표):
> 미국 정부의 수출통제 지시를 준수하여 Fable 5·Mythos 5에 대한 모든 접근을 일시 정지합니다.

### 한국 사용자는 어떻게 하나요?

현재로선 **Opus 4.8을 사용**하시는 것을 권장해요:
- Opus 4.8은 수출통제 영향을 받지 않아요
- 코딩 작업에서는 Opus 4.8도 충분히 강력해요
- 수출통제 상황이 해소되면 Fable 5 접근이 재개될 수 있어요

<div class="note-circle">
○ 상황이 변경될 수 있어요 — Anthropic 공식 뉴스룸에서 최신 정보 확인하세요<br />
○ "추정"이 아닌 공식 발표 기준 정보예요 <code>[공식 발표 기준]</code>
</div>

---

## ✅ Fable 5 복귀 (2026년 7월 1일) `[블]`

<div class="note-star">
✅ <strong>업데이트</strong> — 2026-07-01: Fable 5가 전 세계에 재배포됐어요! 약 3주 만에 돌아왔어요.
</div>

2026년 6월 12일 미국 정부 수출통제 지시로 접근이 일시 정지됐던 **Fable 5가 2026년 7월 1일 전 세계 재배포됐어요**.

Anthropic은 2026년 6월 30일 공식 발표를 통해 수출통제 상황과 사이버 보안 프레임워크를 함께 발표했어요. Fable 5는 Amazon, Microsoft, Google 등 업계 파트너들과 함께 마련한 **취약점 심각도 평가 프레임워크**와 함께 돌아왔어요.

```bash
# Fable 5로 전환
/model fable
```

---

## 🆕 Claude Sonnet 5 출시 (2026년 6월 30일) `[블]`

같은 날인 2026년 6월 30일, **Claude Sonnet 5**도 공식 발표됐어요.

Sonnet 5는 코딩·에이전트·전문 업무에서 프런티어 성능을 제공하는 새로운 균형형 모델이에요. 자세한 내용은 **[Claude Sonnet 5 출시 문서](./sonnet5-release.md)**를 참조하세요.

---

## 전체 모델 현황 (2026-07-06 업데이트)

| 모델 | 강점 | 현재 상태 | Claude Code 사용 가능? |
|------|------|----------|----------------------|
| Fable 5 | 최상위 성능 | ✅ 복귀 (2026-07-01) | ✅ |
| Mythos 5 | 최상위 성능 (특화) | ✅ 복귀 (2026-07-01) | ✅ |
| **Opus 4.8** | 코딩·에이전트 최강 | ✅ 정상 | ✅ 기본 모델 |
| **Sonnet 5** | 균형형 최강 (신규) | ✅ 정상 (2026-06-30 출시) | ✅ |
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
