---
title: "[블] 신규 모델 총정리: Opus 4.8, Fable 5, Mythos 5, Sonnet 5 (2026년 5~7월)"
description: "Opus 4.8, Fable 5·Mythos 5 발표, 수출통제 후 Fable 5 재배포, 그리고 Claude Sonnet 5 출시까지 한 번에 정리"
tags: ["모델", "opus-4-8", "fable5", "mythos5", "sonnet5", "2026", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-07-02"
---

<div class="note-star">
★ <strong>블로그 공식 발표 기준</strong> — Opus 4.8 (2026-05-28), Fable 5·Mythos 5 (2026-06-09), Fable 5 재배포 (2026-06-30), Sonnet 5 출시 (2026-06-30). <code>[블]</code><br />
✅ <strong>최신 알림 (2026-06-30)</strong> — Fable 5가 전 세계 재배포됐어요! 수출통제가 해소됐어요.<br />
🆕 <strong>Sonnet 5 출시</strong> — 코딩·에이전트·전문 업무에서 최전선 성능을 대규모로 제공하는 새 모델이에요.
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

## 3. Claude Fable 5 재배포 (2026년 6월 30일) `[블]`

<div class="note-star">
✅ <strong>재배포 완료</strong> — 2026년 6월 30일, Fable 5가 전 세계에 재배포됐어요. 수출통제 이슈가 해소됐습니다!
</div>

2026년 6월 12일에 미국 정부 수출통제로 일시 정지됐던 Fable 5가 **6월 30일 전 세계 사용자에게 다시 배포**됐어요. Anthropic은 Amazon, Microsoft, Google, Glasswing 파트너들과 함께 **업계 전반의 취약점 심각도 점수 체계(jailbreak severity scoring framework)**도 제안했어요.

```bash
# 이제 Fable 5 다시 사용 가능!
/model fable

# 또는 Advisor로
/advisor fable
```

---

## 4. Claude Sonnet 5 출시 (2026년 6월 30일) `[블]`

Anthropic이 새 모델 **Claude Sonnet 5**를 발표했어요. Sonnet 계열이지만, **코딩·에이전트·전문 업무에서 최전선(frontier) 성능을 대규모로** 제공하는 게 특징이에요.

> 🍱 **비유**: 이전까지 "Sonnet"이 "균형 잡힌 중급 세단"이었다면, Sonnet 5는 **스포츠 모드가 탑재된 럭셔리 세단** — 가격 대비 성능비가 크게 올라간 느낌이에요.

### Sonnet 5의 강점

| 항목 | 내용 |
|------|------|
| 코딩 성능 | 최전선 수준 |
| 에이전트 작업 | 최전선 수준 |
| 전문 업무 처리 | 대규모 스케일에서 강점 |
| 위치 | Opus와 Sonnet 기존 사이 (또는 동등 이상) |

```bash
# Claude Code에서 Sonnet 5 사용
/model claude-sonnet-5
```

<div class="note-circle">
○ 정확한 모델 ID는 공식 문서에서 확인 필요 (<code>claude-sonnet-5</code> 추정)<br />
○ 가격·API 사용 가능 여부는 추후 공식 확인 필요 <code>[공식 발표 기준]</code>
</div>

---

## ⚠️ 이전 수출 통제 경과 (2026년 6월 12일 → 6월 30일 해소)

| 날짜 | 내용 |
|------|------|
| 2026-06-09 | Fable 5·Mythos 5 출시 |
| 2026-06-12 | 미국 정부 수출통제 지시 — Fable 5·Mythos 5 접근 일시 정지 |
| 2026-06-30 | **Fable 5 전 세계 재배포** ✅ 수출통제 해소 |

Mythos 5에 대한 재배포 공식 발표는 현재 확인되지 않아요 (추정).

---

## 전체 모델 현황 (2026-07-02 기준)

| 모델 | 강점 | 현재 상태 | Claude Code 사용 가능? |
|------|------|----------|----------------------|
| Fable 5 | 최상위 성능 | ✅ 재배포 완료 (2026-06-30) | ✅ |
| Mythos 5 | 최상위 성능 (특화) | ⚠️ 상태 미확인 (추정) | 미확인 |
| **Sonnet 5** | 코딩·에이전트 최전선 | ✅ 출시 (2026-06-30) | ✅ (추정) |
| **Opus 4.8** | 코딩·에이전트 강력 | ✅ 정상 | ✅ 기본 모델 |
| Sonnet 4.6 | 균형형 | ✅ 정상 | ✅ |
| Haiku 4.5 | 경량·빠름 | ✅ 정상 | ✅ |

---

## 마케팅 페이지 변경 사항

공식 Claude Code 마케팅 페이지(claude.com/claude-code)에서도 모델 정보가 업데이트됐어요:

- **"Which models does Claude Code use?"** FAQ가 Fable 5, Opus 4.8, Sonnet 4.6, Haiku 4.5로 업데이트
- Fast Mode FAQ가 Opus 4.8 기준으로 변경 (가격: $30/$150 per MTok — 공식 문서 $10/$50와 불일치, 모니터링 중)

<div class="note-circle">
○ 마케팅 페이지 변경 감지: 2026-06-15 (이전: Opus 4.7 기준이었음)<br />
○ Fable 5 재배포(2026-06-30) 이후 마케팅 페이지 업데이트는 모니터링 필요
</div>
