---
title: "[블] 신규 모델 총정리: Opus 4.8, Fable 5, Mythos 5, Sonnet 5 (2026년 5~7월)"
description: "Opus 4.8, Fable 5·Mythos 5, 그리고 Claude Sonnet 5 출시. Fable 5 수출통제 해제 재배포까지 한 번에 정리"
tags: ["모델", "opus-4-8", "fable5", "mythos5", "sonnet5", "2026", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-07-05"
---

<div class="note-star">
★ <strong>블로그 공식 발표 기준</strong> — Opus 4.8 (2026-05-28), Fable 5·Mythos 5 (2026-06-09), Sonnet 5 (2026-06-30). <code>[블]</code><br />
🔔 <strong>최신 업데이트</strong> — 2026-06-30 Fable 5가 <strong>재배포</strong>됐어요 (수출통제 해제). Claude Sonnet 5도 동시 출시!
</div>

## 두 달 새 모델이 4개나? 무슨 일이죠?

2026년 5~7월 사이에 Anthropic이 새 모델을 연달아 발표했어요. 하나씩 정리할게요.

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

---

## 3. Claude Sonnet 5 (2026년 6월 30일) `[블]`

<div class="note-star">
🆕 <strong>신규 출시</strong> — 공식 발표 기준 (2026-06-30). <code>[블]</code>
</div>

### 무엇이 달라졌나요?

Claude Sonnet 5는 **코딩·에이전트·전문 업무 전반에서 최전선(frontier) 성능**을 대규모로 제공하는 모델이에요.

> 🍱 **비유**: Opus가 "고급 전문가"라면, Sonnet 5는 **"빠르고 유능한 시니어 엔지니어"** 예요. 성능은 최고 수준이면서도 대규모로 쓸 수 있는 균형을 잡았어요.

| 항목 | Sonnet 4.6 (이전) | Sonnet 5 (신규) |
|------|------------------|----------------|
| 코딩 성능 | 강력함 | 최전선 수준 |
| 에이전트 작업 | 좋음 | 크게 향상 |
| 전문 업무 | 좋음 | 대규모 처리 가능 |
| 위치 | 균형형 | 고성능 균형형 |

### Claude Code에서 사용하기

```bash
# 최신 버전 업데이트
claude update

# Sonnet 5 선택
/model claude-sonnet-5
```

<div class="note-circle">
○ 공식 블로그 발표 기준 — 세부 성능 수치는 공식 문서 참조<br />
○ 기존 Sonnet 4.6보다 코딩과 에이전트 작업에서 큰 향상
</div>

---

## 4. Fable 5 재배포 — 수출통제 해제 (2026년 6월 30일~7월 1일) `[블]`

<div class="note-star">
🔔 <strong>중요 업데이트</strong> — 2026-06-12에 일시 정지됐던 Fable 5가 <strong>2026-07-01에 전 세계 재배포</strong>됐어요. <code>[블]</code>
</div>

### 무슨 일이 있었나요?

```
2026-06-09  Fable 5 & Mythos 5 발표
2026-06-12  미국 정부 수출통제 → 접근 일시 정지 ⚠️
2026-06-30  Anthropic "Fable 5 재배포" 공식 발표
2026-07-01  전 세계 재배포 완료 ✅
```

> 🍱 **비유**: 해외 출시됐던 최신 스마트폰이 세관 통관 문제로 잠깐 판매 중지됐다가, 문제가 해결돼서 다시 살 수 있게 된 상황이에요.

### 보안 프레임워크 발표 (2026-07-02)

Fable 5 재배포와 함께 **Anthropic이 Amazon, Microsoft, Google 등과 함께 잼브레이크(jailbreak) 심각도 평가 프레임워크**를 제안했어요.

- 업계 공통 기준으로 AI 보안 취약점 심각도를 수치화하는 틀
- Glasswing 파트너들과 함께 표준화 추진 중 (공식 발표 기준)

<div class="note-circle">
○ Fable 5 접근이 복원됐으니 이제 정상 사용 가능해요<br />
○ 잼브레이크 프레임워크는 개발자·사용자보다 정책 관련 내용이에요 — 직접 영향은 없어요
</div>

---

## 전체 모델 현황 (2026-07-05 기준)

| 모델 | 강점 | 현재 상태 | Claude Code 사용 가능? |
|------|------|----------|----------------------|
| **Fable 5** | 최상위 성능 | ✅ 재배포 (2026-07-01) | ✅ |
| Mythos 5 | 최상위 성능 (특화) | 공식 상태 확인 필요 | 확인 필요 |
| **Sonnet 5** | 최전선 균형형 | ✅ 신규 출시 | ✅ |
| **Opus 4.8** | 코딩·에이전트 최강 | ✅ 정상 | ✅ |
| Sonnet 4.6 | 균형형 | ✅ 정상 | ✅ |
| Haiku 4.5 | 경량·빠름 | ✅ 정상 | ✅ |

---

## 마케팅 페이지 변경 사항

공식 Claude Code 마케팅 페이지(claude.com/claude-code)에서도 모델 정보가 업데이트됐어요:

- **"Which models does Claude Code use?"** FAQ가 Fable 5, Opus 4.8, Sonnet 4.6, Haiku 4.5로 업데이트
- Fast Mode FAQ가 Opus 4.8 기준으로 변경 (가격: $30/$150 per MTok — 마케팅 페이지 표기)

<div class="note-circle">
○ Fast Mode 가격: 공식 문서(code.claude.com)는 $10/$50, 마케팅 페이지는 $30/$150로 표기 불일치 상태 — 최신 공식 발표 기준으로 확인 필요<br />
○ Fable 5는 2026-07-01 재배포 완료
</div>
