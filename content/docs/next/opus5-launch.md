---
title: "[블] Claude Opus 5 출시 — 에이전트와 장기 작업의 새 기준"
description: "2026년 7월 24일, 에이전트 실행과 코딩·전문 업무에서 한 단계 더 강력해진 Claude Opus 5가 공식 출시됐어요"
tags: ["자동생성", "Opus5", "모델업데이트", "신규모델", "에이전트", "fast-mode"]
category: "next"
order: 17
lastUpdated: "2026-08-03"
---

<div class="note-star">
★ <strong>[블]</strong> Anthropic 공식 블로그 "Introducing Claude Opus 5" (2026-07-24)<br />
★ <strong>[공]</strong> 마케팅 페이지 Fast Mode 업데이트 확인 (2026-08-03 감지)<br />
★ 상세 벤치마크·가격 공식 발표 기준 (일부 미공개 사항은 "추정" 명시)
</div>

## Opus 5, 무엇이 달라졌나요?

Anthropic이 2026년 7월 24일 **Claude Opus 5**를 발표했어요.

공식 설명:

> "Opus 5 is a step change improvement for the Opus tier, powering long-running agents while delivering improvements in coding and professional work."

"Step change"라는 표현에 주목해요 — 같은 계열에서 한 단계 개선된 게 아니라, **완전히 다른 수준으로 도약**했다는 의미예요.

> 🍱 **비유로 설명하면**: 이전 Opus가 "믿을 수 있는 시니어 개발자"였다면, Opus 5는 **"여러 프로젝트를 동시에 맡겨도 끝까지 해내는 팀 리드"** 예요. 특히 여러 단계에 걸쳐 스스로 판단하며 진행하는 **에이전트 작업**에서 크게 강해졌어요.

---

## 주요 특징

| 항목 | 내용 |
|---|---|
| **모델 ID** | `claude-opus-5` |
| **출시일** | 2026년 7월 24일 |
| **강점** | 장기 에이전트 실행, 코딩, 전문 업무 |
| **Fast Mode** | Opus 5 기준으로 전환 ($10/$50 per MTok) |
| **출처** | Anthropic 공식 블로그 `[블]` |

---

## 어디서 특히 강해졌나요?

### 1. 장기 에이전트 작업 `[블]`

Opus 5는 수십 단계에 걸쳐 스스로 판단하며 진행하는 **장기 에이전트 작업**에 특화됐어요.

> 🍱 **비유**: 심부름꾼에게 "편의점에서 물 사와줘"라고 하는 게 일반 작업이라면, 에이전트 작업은 "이번 달 팀 회식 준비 전체 다 해줘 — 장소 예약, 식단 조사, 초대장 발송까지"처럼 복잡한 미션을 통째로 맡기는 거예요. Opus 5는 이런 긴 여정을 **중간에 헤매지 않고** 끝까지 수행해요.

### 2. 코딩 성능 향상 `[블]`

이전 Opus 4.8 대비 코딩 성능이 향상됐어요. 대규모 리팩토링, 멀티파일 수정, 복잡한 버그 추적 등에서 효과가 크게 나타납니다.

### 3. 전문 업무 전반 `[블]`

법률 문서 검토, 복잡한 분석 리포트, 심층 리서치 등 전문 직종 작업에서도 향상됐어요.

---

## Claude Code에서 사용하기

```bash
# Claude Code 업데이트 (최신 버전 권장)
claude update

# Opus 5로 모델 변경
/model claude-opus-5

# 복잡한 에이전트 작업에는 높은 effort 레벨 조합 권장
/model claude-opus-5
/effort high
```

<div class="note-circle">
○ Sonnet 5가 아직 Claude Code 기본 모델이에요 — 일반 코딩에는 Sonnet 5 그대로 써도 충분해요<br />
○ Opus 5는 <strong>복잡하고 긴 작업</strong>에서 진가를 발휘해요
</div>

---

## 모델 선택 가이드 (2026-08-03 기준)

```
언제 어떤 모델을 쓸까?
────────────────────────────────────────
🏃 Haiku 4.5      간단한 질문, 빠른 답변
🔄 Sonnet 5       일상 코딩 (기본 모델)
🤔 Opus 5         복잡한 에이전트·장기 작업
🚀 Fable 5        최상위 성능 (전체 티어 최강)
────────────────────────────────────────
```

| 상황 | 추천 모델 |
|------|---------|
| 파일 하나 수정, 간단한 버그 | Sonnet 5 (기본) |
| 대규모 리팩토링 | Opus 5 |
| 수십 단계 에이전트 워크플로우 | Opus 5 |
| 절대 최강이 필요한 순간 | Fable 5 |

---

## Fast Mode 업데이트 — Opus 5로 전환 `[공]`

<div class="note-star">
★ <strong>[공] 2026-08-03 마케팅 페이지 확인</strong> — Fast Mode 기준 모델이 <strong>Opus 4.8 → Opus 5</strong>로 전환됐어요.
</div>

Opus 5 출시와 함께 `/fast` 명령어의 기준 모델도 자동으로 업데이트됐어요:

| 항목 | 이전 | 현재 |
|------|------|------|
| Fast Mode 기준 모델 | Opus 4.8 | **Opus 5** |
| 속도 | 2.5배 빠름 | 2.5배 빠름 (동일) |
| Fast Mode 가격 | $30/$150 per MTok (마케팅 기재) | **$10/$50 per MTok** |
| 제공 방식 | 리서치 프리뷰 | 리서치 프리뷰 (동일) |

> 🍱 **비유**: 기존 고속도로가 "4.8세대 버스"로 운행하다가, 이제 더 좋은 "5세대 버스"로 업그레이드된 거예요. 속도(2.5배)는 같지만 버스 자체의 성능이 올라갔어요.

Fast Mode 사용법:
```bash
/fast        # Fast Mode 토글 — 이제 Opus 5 기준으로 실행
```

<div class="note-circle">
○ Fast Mode 가격이 $30/$150에서 $10/$50로 대폭 하락했어요 (공식 발표 기준)<br />
○ 이전에 Opus 4.8 Fast를 쓰던 분들은 자동으로 Opus 5 Fast로 전환됩니다<br />
○ 리서치 프리뷰 상태 — 소비 기반 플랜 또는 구독 크레딧으로 사용 가능
</div>

---

## 오픈소스 공개 여부 — Anthropic 공식 입장 `[블]`

2026년 7월 27일, Anthropic이 **오픈 가중치(open-weights) 모델**에 대한 공식 입장을 발표했어요.

요약하면 **최전선(frontier) 모델은 공개하지 않겠다**는 입장이에요 (공식 발표 기준 `[블]`).

이는 Opus 5 · Fable 5 · Sonnet 5 같은 현재 최강 모델들은 Anthropic이 직접 API와 Claude Code를 통해서만 제공한다는 의미예요.

---

## 전체 모델 현황 (2026-08-03 기준)

| 모델 | 특징 | Claude Code 현황 |
|------|------|----------------|
| **Fable 5** | 전체 최강 | ✅ 사용 가능 (`/model fable`) |
| **Opus 5** | 에이전트·장기작업 특화 | ✅ **신규 출시** |
| **Sonnet 5** | 균형형 (기본 모델) | ✅ 기본 모델 |
| Haiku 4.5 | 경량·고속 | ✅ 사용 가능 |

<div class="note-circle">
○ Mythos 5는 이 문서 작성 시점 기준 정보 미확인 — Anthropic 공식 발표 확인 필요<br />
○ 모델 가용성은 구독 플랜에 따라 다를 수 있어요
</div>
