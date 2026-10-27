---
title: "[블] Agent Skills, 오픈 표준이 되다 — Anthropic이 공익 재단에 기증"
description: "Anthropic이 AI 에이전트에게 전문 지식을 부여하는 Agent Skills 표준을 Agentic AI Foundation에 기증했습니다. ChatGPT, Cursor, GitHub Copilot 등 70개 이상 플랫폼이 이미 통합했어요"
tags: ["자동생성", "AgentSkills", "오픈표준", "에이전트", "기증", "AgenticAIFoundation", "Claude Code", "Skills"]
category: "next"
order: 19
lastUpdated: "2026-10-27"
---

## 🎁 Agent Skills를 세상에 공유합니다

2026년 10월 22일, Anthropic이 **Agent Skills** 오픈 표준을 **Agentic AI Foundation(에이전틱 AI 재단)**에 기증했습니다.

> **출처**: anthropic.com/news 공식 발표 (2026-10-22)
> "We're donating Agent Skills, the open standard that gives AI agents specialized knowledge and workflows, to the Agentic AI Foundation."

---

## 🤔 Agent Skills가 뭔가요?

Claude Code를 쓰다 보면 **스킬(Skills, `/skills`)** 이라는 개념을 보셨을 거예요.

스킬은 마치 **직업 교육 자격증**과 같아요. 일반 AI에게 "배포하는 방법"이나 "코드 리뷰 체크리스트"를 알려주면, 그 AI는 그 분야의 전문 지식을 갖게 되죠.

**Agent Skills** 는 이런 스킬을 어떻게 정의하고, 공유하고, AI 에이전트에게 전달하는지에 대한 **공통 표준**이에요.

---

## 🌍 왜 중요한가요?

Anthropic이 이 표준을 2025년 12월에 처음 공개했을 때, 이미 엄청난 반응이 있었어요:

> **70개 이상의 에이전트 플랫폼이 통합** — ChatGPT, Cursor, GitHub Copilot, VS Code 등

즉, 여러분이 만든 스킬 하나가:
- Claude Code에서도 작동하고
- GitHub Copilot에서도 작동하고
- Cursor에서도 작동할 수 있다는 뜻이에요

마치 USB 포트처럼, **어떤 AI 에이전트 환경에서도 꽂아서 쓸 수 있는 표준**을 만든 거예요.

---

## 🏛️ 공익 재단에 기증하는 이유

Anthropic이 이 표준을 **Agentic AI Foundation**이라는 독립 기관에 기증한 건, 이 표준이 특정 회사에 묶이지 않고 **누구나 자유롭게 쓸 수 있도록** 하기 위해서예요.

마치 **인터넷의 HTTP 프로토콜**이 특정 회사 소유가 아닌 것처럼, Agent Skills도 AI 생태계 전체의 공통 언어가 되는 거죠.

---

## 📦 Claude Code에서의 스킬

Claude Code에서 스킬을 쓰려면:

```bash
# 스킬 목록 확인
/skills

# 스킬 불러오기 (예: 코드 리뷰 스킬)
/code-review

# 스킬 직접 불러오기
Skill({ skill: "code-review" })
```

> 🔗 자세히 알아보기: [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills)

---

## 🔑 요약

| 항목 | 내용 |
|------|------|
| 표준 이름 | Agent Skills |
| 원 개발사 | Anthropic |
| 현재 관리 기관 | Agentic AI Foundation |
| 최초 발표 | 2025년 12월 |
| 통합 플랫폼 | 70개 이상 |
| Claude Code 연결 | `/skills`, `Skill()` 도구 |

**출처**: [anthropic.com/news](https://www.anthropic.com/news) — 공식 발표 기준 (2026-10-22)
