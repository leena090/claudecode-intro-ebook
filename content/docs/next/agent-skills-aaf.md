---
title: "[블] Agent Skills, AI 재단에 기증 — 70개 플랫폼이 함께 쓰는 오픈 표준"
description: "Anthropic이 Agent Skills 표준을 Agentic AI Foundation에 기증 — ChatGPT·Cursor·GitHub Copilot 등 70개 이상이 이미 통합"
tags: ["자동생성", "Agent Skills", "오픈표준", "Agentic AI Foundation", "에이전트", "플러그인"]
category: "next"
order: 20
lastUpdated: "2026-10-30"
---

<div class="note-star">
★ <strong>공식 발표</strong>: 2026-10-22 (Anthropic 블로그)<br />
★ <strong>원본 링크</strong>: https://www.anthropic.com/news/donating-agent-skills-agentic-ai-foundation (URL 추정)
</div>

## 무슨 일이 있었나요?

Anthropic이 2025년 12월에 공개한 **Agent Skills 표준**을 **Agentic AI Foundation (AAF)** 에 기증했습니다.

> 🏗️ **비유로 설명하면**: "LEGO 브릭 설계도"를 공개 재단에 넘긴 것과 같아요. 이제 레고가 아닌 회사들도 같은 규격의 브릭을 만들 수 있고, 어떤 장난감(AI 에이전트)이든 같은 브릭을 끼울 수 있게 됩니다.

---

## Agent Skills가 뭔가요?

**AI 에이전트에게 전문 지식과 워크플로우를 추가해주는 표준(프로토콜)** 입니다.

Claude Code에서 `/skills` 명령으로 쓰는 그 Skills와 관련된 표준이에요.

```
┌─────────────────────────────────────┐
│  AI 에이전트 (Claude, GPT, Copilot) │
│         ↕ Agent Skills 표준          │
│  [Skill A] [Skill B] [Skill C] ...  │
└─────────────────────────────────────┘
```

---

## 얼마나 퍼져 있나요?

공식 발표에 따르면, **70개 이상의 AI 플랫폼**이 이미 Agent Skills를 통합했습니다:

| 플랫폼 유형 | 사례 |
|-------------|------|
| AI 코딩 도구 | GitHub Copilot, Cursor, Devin Desktop |
| AI 어시스턴트 | ChatGPT |
| 코드 에디터 | VS Code |
| 기타 에이전트 플랫폼 | 60개 이상 (공식 발표 기준) |

> 📌 표준이 공개된 지 10개월 만에 70개 이상이 채택한 것은 굉장히 빠른 속도입니다.

---

## 왜 Claude Code 사용자에게 중요한가요?

### 1. Skills 생태계가 커진다

Claude Code의 `/skills` 기능은 이 표준을 기반으로 합니다. 재단으로 이전되면 더 많은 개발자가 Skills를 만들고, **Claude Code에서도 더 다양한 Skills를 쓸 수 있게** 됩니다.

### 2. 크로스 플랫폼 호환

앞으로 나올 Skills는 Claude Code, ChatGPT, GitHub Copilot 등에서 **공통으로 사용 가능**합니다. 한번 만들면 여러 AI에서 써요.

### 3. 오픈 거버넌스

Anthropic 단독이 아닌 **재단이 표준을 관리**하므로 더 중립적이고 안정적입니다.

---

## Agentic AI Foundation (AAF)이란?

- AI 에이전트 관련 오픈 표준을 관리하는 비영리 재단 (공식 발표 기준)
- Agent Skills 외에도 에이전트 간 협업, 도구 연동 표준 등을 다룰 예정 (추정)
- 여러 AI 기업이 공동 참여하는 형태

---

## Claude Code에서 Skills 사용하기

```bash
# 현재 사용 가능한 Skills 목록 보기
/skills

# 특정 Skill 실행
/code-review
/ultraplan
/dataviz
```

> 💡 Claude Code에서 Skills를 직접 만들어 배포하는 방법은 [Skills 가이드](/docs/config/skills-guide)를 참고하세요.
