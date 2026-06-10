---
title: "[블] Claude Fable 5 & Mythos 5 — 차세대 모델 등장"
description: "2026년 6월 9일 발표된 Anthropic의 차세대 모델 Claude Fable 5와 Claude Mythos 5. 복잡한 지식 작업과 코딩 문제를 위한 새로운 세대의 인공지능"
tags: ["모델", "fable5", "mythos5", "claude", "신규모델", "자동생성"]
category: "next"
order: 11
lastUpdated: "2026-06-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 6월 9일 Anthropic 공식 발표. <code>[블]</code><br />
★ 공식 발표 제목: "Claude Fable 5 and Claude Mythos 5"<br />
★ 세부 사양·가격은 공식 발표 기준이며, 추가 정보는 추후 업데이트 예정.
</div>

## Claude Fable 5와 Mythos 5가 뭔가요?

2026년 6월 9일, Anthropic이 **Claude Fable 5**와 **Claude Mythos 5**를 공식 발표했어요.

> 🍱 **비유**: 컴퓨터 CPU가 새 세대로 넘어가는 것처럼 (예: 1세대 → 2세대 → 3세대), Claude도 "3.x → 4.x → **Fable 5**"로 완전히 새로운 세대의 지능 구조로 넘어갔어요.

Anthropic의 공식 설명:
> *"Our next generation of intelligence for the hardest knowledge work and coding problems."*
> (가장 어려운 지식 작업과 코딩 문제를 위한 차세대 지능)

---

## 두 모델은 어떻게 다른가요?

| 모델 | 특징 | 주요 용도 |
|------|------|----------|
| **Claude Fable 5** | 복잡한 코딩 + 지식 작업에 최적화 | 개발자, 연구자, 전문 업무 |
| **Claude Mythos 5** | (공식 발표 기준) 고도 추론·창의적 작업 | 복잡한 분석, 멀티스텝 추론 |

<div class="note-circle">
○ Fable 5와 Mythos 5의 세부 성능 벤치마크는 공식 발표 기준으로 추후 보완 예정<br />
○ Claude Code에서의 지원 시점은 별도 업데이트 공지 확인 필요 (공식 발표 기준)
</div>

---

## Claude Code에서의 모델 변화 흐름

Anthropic이 새 모델을 발표하면, 보통 수 주 안에 Claude Code에서도 사용 가능해져요. 2026년 6월 기준 Claude Code 공식 지원 모델은 마케팅 페이지 기준:

```
Fable 5, Opus 4.8, Sonnet 4.6, Haiku 4.5
```

> 🍱 **비유**: 스마트폰 제조사가 새 칩셋을 발표하면, 기존 스마트폰 앱들이 하나씩 "이제 새 칩도 지원해요" 라고 업데이트를 올리는 것처럼 — Claude Code도 새 모델이 나오면 순차적으로 연동돼요.

---

## Fable 5가 코딩에서 특별히 다른 점

공식 발표 기준으로 Fable 5는 **"가장 어려운 코딩 문제"** 를 위해 설계됐어요:

| 능력 | 설명 |
|------|------|
| 📐 **깊은 아키텍처 이해** | 수십만 줄 규모의 코드베이스 전체 구조 파악 |
| 🐛 **복잡한 버그 추적** | 5~10단계 이상 연결된 버그도 원인 역추적 |
| 🔀 **대규모 리팩토링** | 수백 개 파일에 걸친 일관된 변경 |
| 🧩 **장시간 에이전틱 작업** | 몇 시간짜리 자동 실행 작업도 일관성 유지 |

---

## 어떻게 사용하나요?

Claude Code에서 Fable 5를 사용하려면 (지원 시작 후):

```bash
# Fable 5로 전환
/model claude-fable-5

# 또는 CLI 실행 시
claude --model claude-fable-5
```

마케팅 페이지 FAQ에는 이미 **"Claude Code works with the Fable 5, Opus 4.8, Sonnet 4.6, and Haiku 4.5 models"** 로 명시돼 있어요.

---

## Mythos 5는요?

**Claude Mythos 5** 도 함께 발표됐어요. 공식 발표 기준으로 Fable 5와는 다른 특성을 가진 모델이에요.

> 🍱 **비유**: Fable 5가 "공학적 정밀함"에 집중된 모델이라면, Mythos 5는 "창의적 추론과 깊은 분석"에 특화된 모델 — 마치 이과 천재와 문과 천재를 각각 두는 것처럼요.

<div class="note-circle">
○ Mythos 5의 Claude Code 연동 여부·시점은 추후 공식 발표 기준으로 확인 필요<br />
○ 현재(2026-06-10 기준) Claude Code 마케팅 페이지에는 "Fable 5"만 모델 목록에 있음
</div>

---

## 모델 선택 가이드 (2026-06 기준)

```
가장 어려운 코딩 문제  →  Fable 5  (신규)
복잡한 전문 업무        →  Opus 4.8
일반적인 코딩          →  Sonnet 4.6  (기본값)
빠른 답변/가벼운 작업  →  Haiku 4.5
```

---

## 앞으로의 업데이트

Fable 5와 Mythos 5의 세부 성능, 가격, Claude Code 내 활용 가이드는 공식 문서가 업데이트되는 대로 이 전자책에도 반영할게요. `[공식 발표 기준]`

👉 공식 뉴스룸: https://anthropic.com/news
