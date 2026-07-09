---
title: "[블] Claude Sonnet 5 출시 — 새 기본 모델이 왔어요"
description: "2026년 6월 30일 발표된 Claude Sonnet 5. 코딩·에이전트·전문 업무에서 최전선(frontier) 성능 제공"
tags: ["모델", "sonnet5", "claude-sonnet-5", "신규", "2026", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Anthropic 블로그 2026-06-30 발표. <code>[블]</code><br />
👉 블로그: <a href="https://www.anthropic.com/news/claude-sonnet-5" target="_blank">anthropic.com/news/claude-sonnet-5</a><br />
⚠️ 세부 가격·플랜 포함 범위는 공식 발표를 확인하세요 — 일부 내용은 추정입니다.
</div>

## Claude Sonnet 5가 뭔가요?

2026년 6월 30일, Anthropic이 **Claude Sonnet 5**를 발표했어요.

공식 설명: **"코딩, 에이전트, 대규모 전문 업무에서 최전선(frontier) 성능 제공"**

> 🍱 **비유로 설명하면**: Sonnet 4.6이 "열심히 일하는 대리"였다면, Sonnet 5는 "경험과 실력을 모두 갖춘 과장"이에요. 같은 회사 소속이지만 처리 능력이 한 단계 올라간 거예요.

## 모델 이름

```
claude-sonnet-5
```

API나 `--model` 플래그에서 이 이름으로 부를 수 있어요.

## 어디에 강할까요?

Anthropic 발표에 따르면 Sonnet 5는 다음 영역에서 특히 강해졌어요:

| 분야 | 설명 |
|---|---|
| 🖥️ 코딩 (Coding) | 코드 이해, 작성, 디버깅 능력 향상 |
| 🤖 에이전트 (Agents) | 자동화된 다단계 작업 처리 |
| 💼 전문 업무 (Professional work at scale) | 대규모 비즈니스 작업 |

## Sonnet 시리즈 변화

```
Sonnet 4.5 → Sonnet 4.6 → Sonnet 5   ← 지금 여기
```

Sonnet 시리즈는 Claude Code에서 **균형 잡힌 기본 모델** 역할을 해왔어요. 속도와 성능 모두를 잡은 자리예요.

<div class="note-circle">
○ Pro/Max 플랜에서의 정확한 포함 범위는 공식 발표를 확인하세요<br />
○ 기존 Sonnet 4.6과 직접 비교한 수치는 아직 추정 중<br />
○ 모델 선택: Claude Code에서 <code>/model</code> 또는 <code>--model claude-sonnet-5</code>로 지정
</div>

## 저한테 바로 영향이 있을까요?

Claude Code를 Pro나 Max 플랜으로 쓰고 있다면, 앞으로 Sonnet 5가 기본 선택지에 등장할 가능성이 높아요.

이미 나와 있는 모델 라인업:

| 모델 | 특징 |
|---|---|
| claude-fable-5 | 최상위 (수출통제 해제 후 7월 1일 복귀) |
| claude-opus-4-8 | 최신 Opus — 고난이도 작업 |
| **claude-sonnet-5** | **신규 — 균형형 최전선 모델** |
| claude-sonnet-4-6 | 이전 균형형 |
| claude-haiku-4-5 | 경량·빠름 |

<div class="note-circle">
○ Fable 5/Mythos 5는 별도 발표로 수출통제 이슈가 있었어요 → <a href="/docs/next/fable5-redeployed">Fable 5 복귀 소식</a> 참고
</div>
