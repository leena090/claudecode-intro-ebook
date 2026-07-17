---
title: "[블] Claude Sonnet 5 출시 + Fable 5 수출통제 해제"
description: "2026년 6월 30일 발표: 코딩·에이전트 성능이 향상된 Sonnet 5, 그리고 수출통제에서 풀린 Fable 5 재배포 소식"
tags: ["블로그", "2026", "sonnet5", "fable5", "모델", "수출통제", "자동생성"]
category: "next"
order: 21
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>블로그 발표 기준</strong> — 2026-06-30 Anthropic 공식 블로그 게재. <code>[블]</code><br />
★ 원문: "Introducing Claude Sonnet 5" / "Redeploying Fable 5"
</div>

## 두 가지 큰 발표가 같은 날 나왔어요

2026년 6월 30일, Anthropic이 하루에 두 가지 큰 소식을 발표했어요.

---

## 1️⃣ Claude Sonnet 5 — 코딩·에이전트 분야 성능 대폭 향상

> 🍱 **비유**: Sonnet 4.6이 "웬만한 요리 다 잘하는 가정용 요리사"였다면, Sonnet 5는 "코딩 요리(소프트웨어 개발)에서 레스토랑급 기술을 갖춘 전문 셰프"예요.

**Sonnet 5의 특징:**

| 항목 | 내용 |
|---|---|
| 코딩 성능 | SWE-bench 등 코딩 벤치마크에서 최고 수준 |
| 에이전트 작업 | 복잡한 다단계 작업 처리 능력 향상 |
| 전문 업무 | 분석·리포트·복잡한 추론 향상 |
| 응답 속도 | Sonnet 4.6과 유사한 속도 유지 |
| 비용 | Sonnet 4.6과 동일 비용 (공식 발표 기준) |

**Claude Code와의 관계:**
- Week 27부터 Claude Code의 **기본 모델**이 Sonnet 5로 전환됐어요
- 별도 설정 없이도 자동으로 Sonnet 5를 사용해요

```bash
# 현재 모델 확인
/model

# Sonnet 5로 명시 지정 (이미 기본값이지만)
/config model claude-sonnet-5
```

<div class="note-circle">
○ 공식 모델 ID: <code>claude-sonnet-5</code><br />
○ API 기준: 입력 $3 / 출력 $15 per million tokens (공식 발표 기준 — 변동 가능)
</div>

---

## 2️⃣ Fable 5 재배포 — 수출통제에서 해제돼 돌아왔어요 🌍

2026년 6월 12일, 미국 정부 지시로 Fable 5와 Mythos 5에 대한 접근이 일시 정지됐었어요. 약 3주 만에 **Fable 5가 전 세계에 다시 배포**됐어요.

> 🍱 **비유**: 이사할 때 일부 가전제품을 창고에 넣어뒀다가 이사가 끝나고 다시 꺼내는 것과 같아요. 잠깐 사용 못 했지만 지금은 다시 쓸 수 있어요.

**재배포와 함께 발표된 것들:**
- **업계 공동 취약점 등급 체계**: Amazon, Microsoft, Google, Anthropic이 함께 제안한 AI 보안 취약점 심각도 점수 체계
- **Glasswing 파트너십 확대**: 소프트웨어 보안 이니셔티브 계속 진행

**한국 사용자에게 미치는 영향:**

| 기간 | 상태 |
|---|---|
| ~ 2026-06-12 | 정상 사용 가능 |
| 2026-06-12 ~ 2026-06-30 | 일시 접근 불가 |
| 2026-07-01 ~ | **정상 사용 가능** ✅ |

<div class="note-circle">
⚠️ 수출통제 정책은 앞으로도 다시 발동될 수 있어요 — 최신 상황은 공식 채널에서 확인하세요<br />
○ Fable 5 공식 모델 ID: <code>claude-fable-5</code><br />
○ Mythos 5는 별도 발표 예정 (추정 — 공식 확인 필요)
</div>
