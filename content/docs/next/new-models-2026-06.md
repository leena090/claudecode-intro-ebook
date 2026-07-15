---
title: "[블] 신규 모델 총정리: Opus 4.8 · Sonnet 5 · Fable 5 복귀 (2026년 5~7월)"
description: "Opus 4.8 출시, Fable 5 수출통제 해제·재배포, 새 기본 모델 Sonnet 5까지 — 2026년 5~7월 Claude 모델 대업데이트 총정리"
tags: ["모델", "opus-4-8", "fable5", "sonnet5", "2026", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-07-15"
---

<div class="note-star">
★ <strong>블로그 공식 발표 기준</strong> — Opus 4.8 (2026-05-28), Fable 5·Mythos 5 (2026-06-09), Sonnet 5 (2026-06-30). <code>[블]</code><br />
✅ <strong>2026-07-01 업데이트</strong> — Fable 5 수출통제 해제, 전 세계 재배포 완료!<br />
🆕 <strong>2026-06-30 추가</strong> — 새 기본 모델 Sonnet 5 (소넷 파이브) 출시됐어요.
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

---

## 3. Claude Sonnet 5 (소넷 파이브) — 2026년 6월 30일 `[블]`

### 새 기본 모델이 왔어요!

Sonnet 5는 2026년 6월 30일 출시된 **새로운 기본 모델**이에요. Pro, Team Standard, Enterprise 구독 사용자는 이제 Sonnet 5가 기본으로 적용돼요.

> 🎓 **비유**: 학교에서 쓰는 교과서가 갑자기 "개정판"으로 바뀐 것처럼, 기본 모델이 한 단계 업그레이드됐어요 — 그것도 더 저렴하게!

### 뭐가 달라졌나요?

| 항목 | Sonnet 4.6 (이전 기본) | **Sonnet 5 (새 기본)** |
|------|------------------------|------------------------|
| 코딩 실력 | 좋음 | 최상위급 (Opus와 비슷!) |
| 컨텍스트 창 | 200K 토큰 | **100만 (1M) 토큰** 🔥 |
| 사고 기능 | 별도 설정 필요 | **기본 활성화** |
| API 가격 | $3/$15 per MTok | **$2/$10 per MTok** (8/31까지 프로모션) |
| 기본 모델 대상 | — | Pro·Team Standard·Enterprise ✅ |

> 💡 **"100만 토큰"이 뭔가요?** A4 용지 약 2,000장 분량의 텍스트를 한 번에 처리할 수 있어요. 대형 코드베이스 전체를 올려놓고 분석 가능한 규모예요.

### Claude Code에서 사용하기

```bash
# 버전 업데이트 (v2.1.197 이상 필요)
claude update

# Sonnet 5 명시 선택
/model claude-sonnet-5
```

<div class="note-circle">
○ 모델 ID: <code>claude-sonnet-5</code><br />
○ Pro·Team Standard 구독자 → 자동으로 Sonnet 5가 기본 모델<br />
○ Max·Enterprise → Opus 4.8이 기본 (고급 작업용)
</div>

---

## ✅ 수출통제 해제 & Fable 5 전 세계 재배포 (2026년 7월 1일)

<div class="note-star">
✅ <strong>좋은 소식</strong> — 2026년 7월 1일, Fable 5가 전 세계에 재배포됐어요! 수출통제 상황이 해소됐습니다.
</div>

### 경과 정리

| 날짜 | 사건 |
|------|------|
| 2026-06-09 | Fable 5·Mythos 5 최초 출시 |
| 2026-06-12 | 미국 정부 수출통제 지시 → 접근 일시 정지 |
| 2026-06-30 | Anthropic, 재배포 계획 발표 + 젤브레이크(jailbreak) 심각도 평가 프레임워크 제안 |
| **2026-07-01** | **Fable 5 전 세계 재배포 완료** 🎉 |

**Anthropic 공식 입장** (2026-06-30 발표):
> Fable 5가 2026년 7월 1일부터 전 세계적으로 다시 이용 가능합니다. Amazon, Microsoft, Google 등과 함께 산업 전반의 젤브레이크 심각도 평가 프레임워크를 제안합니다.

<div class="note-circle">
○ Fable 5: ✅ 재배포 완료 (2026-07-01 공식 발표 기준)<br />
○ Mythos 5 상태: 아직 불명확 — 별도 공식 발표 없음 (추정)<br />
○ 일반 코딩 작업엔 Sonnet 5 또는 Opus 4.8 권장
</div>

---

## 전체 모델 현황 (2026-07-15 기준)

| 모델 | 강점 | 현재 상태 | Claude Code 사용 가능? |
|------|------|----------|----------------------|
| Fable 5 | 최상위 성능 | ✅ 재배포 완료 (7/1~) | ✅ |
| Mythos 5 | 최상위 성능 (특화) | 🔍 상태 불명확 | 불명확 (추정) |
| Opus 4.8 | 코딩·에이전트 최강 | ✅ 정상 | ✅ (Max·Enterprise) |
| **Sonnet 5** | 코딩·균형형 | ✅ 정상 | ✅ **기본 모델** (Pro·Team) |
| Sonnet 4.6 | 균형형 | ✅ 정상 | ✅ |
| Haiku 4.5 | 경량·빠름 | ✅ 정상 | ✅ |

---

## 마케팅 페이지 참고

공식 Claude Code 마케팅 페이지(claude.com/claude-code)는 아직 Sonnet 5 기반으로 업데이트되지 않은 상태예요 (2026-07-15 기준).

<div class="note-circle">
○ 마케팅 페이지 기능 하이라이트: Dynamic workflows (5/28), Agent view (5/11) 등 이전 기준 유지 중<br />
○ Fast Mode 가격은 마케팅 페이지에서 $30/$150(Opus 4.8) 기재 중 — 공식 문서와 불일치 상태 모니터링 중
</div>
