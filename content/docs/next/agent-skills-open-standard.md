---
title: "[블] Agent Skills 오픈 표준 — Anthropic이 AI 에이전트 공통 언어를 공개했어요"
description: "2026년 10월 Anthropic이 Agent Skills 오픈 표준을 Agentic AI Foundation에 기부. ChatGPT·GitHub Copilot·VS Code 등 70+ 플랫폼이 이미 통합 (2025년 12월 발표 기준)"
tags: ["자동생성", "AgentSkills", "오픈표준", "에이전트", "생태계", "2026"]
category: "next"
order: 18
lastUpdated: "2026-11-15"
---

<div class="note-star">
★ <strong>[블]</strong> 2026년 10월 22일 anthropic.com/news 발표 기준.<br/>
★ Agent Skills 표준은 2025년 12월 처음 발표, 70+ 플랫폼이 통합 완료된 상태에서 오픈 재단에 기부됨.<br/>
★ Claude Code의 Skills 기능과 연관이 있지만, 더 넓은 AI 에이전트 생태계를 위한 표준이에요.
</div>

## 한 문장 요약

> AI 에이전트들이 "공통 언어"로 서로 대화하는 표준이 생겼어요. Anthropic이 만들어서 오픈 재단에 기부했고, ChatGPT·GitHub Copilot·VS Code 등 70개 이상의 플랫폼이 이미 쓰고 있어요.

---

## Agent Skills가 뭔가요?

**Agent Skills**는 AI 에이전트에게 "전문 지식과 워크플로우"를 패키지로 전달하는 오픈 표준이에요.

> 🧩 **비유로 설명하면**: 레고 블록을 떠올려보세요. 레고는 어떤 회사 세트든 동일한 규격의 돌기 덕분에 서로 붙일 수 있잖아요. Agent Skills는 AI 에이전트들이 서로 "능력"을 주고받을 수 있도록 만든 공통 규격이에요.

---

## 주요 사실 (공식 발표 기준)

| 항목 | 내용 |
|---|---|
| 최초 발표 | 2025년 12월 |
| 오픈 재단 기부 | 2026년 10월 22일 |
| 기부 대상 | Agentic AI Foundation |
| 통합 플랫폼 수 | **70개 이상** |
| 주요 통합 플랫폼 | ChatGPT, Cursor, GitHub Copilot, VS Code |

---

## Claude Code와의 연결

Claude Code에 이미 있는 **Skills 기능**이 이 표준의 클로드 측 구현이에요.

```
Claude Code의 Skills
         ↕
Agent Skills 오픈 표준
         ↕
ChatGPT / GitHub Copilot / VS Code / Cursor...
```

즉, Claude Code에서 만든 Skill을 다른 AI 에이전트가 쓸 수도 있고, 반대로 다른 플랫폼의 Skill을 Claude Code에서 활용할 수도 있는 미래를 향한 발걸음이에요.

---

## 왜 중요한가요?

### 현재 (표준 없이)
```
Claude Code ← (클로드만의 Skills)
GitHub Copilot ← (GitHub만의 플러그인)
Cursor ← (Cursor만의 확장)
```
각 플랫폼이 서로 다른 방식으로 에이전트 능력을 확장 → 개발자가 플랫폼마다 별도 설정 필요

### 미래 (오픈 표준으로)
```
Agent Skills 표준
   ↓↓↓
Claude Code / GitHub Copilot / Cursor / VS Code
모두 같은 Skill 패키지를 이해하고 실행
```

---

## Agentic AI Foundation이란?

Anthropic이 Agent Skills를 기부한 단체예요.

- 오픈 표준의 거버넌스(관리 규칙)를 담당
- 특정 회사 소유가 아닌 중립적 재단
- AI 에이전트 생태계의 오픈 발전 목표

> ℹ️ **추정**: 재단의 세부 구조와 거버넌스는 공식 발표에서 더 확인이 필요해요.

---

## 개발자에게 의미하는 것

```
지금 Claude Code에서 Skill을 하나 만들면
→ 미래엔 ChatGPT나 GitHub Copilot도 같은 Skill을 쓸 수 있을 수 있어요
```

이건 아직 "미래 가능성"이지만, 70개 이상 플랫폼이 이미 표준을 도입했다는 건 꽤 빠른 속도로 현실이 되고 있다는 뜻이에요.

---

## 한국 개발자에게 실용 팁

지금 당장 행동으로 옮길 것:
1. Claude Code에서 나만의 Skill 만들어보기 (`/skills` 명령어)
2. 공식 문서에서 Skills 작성법 확인: `code.claude.com/docs/en/skills`
3. 이미 나온 커뮤니티 Skills 갤러리 탐색

---

> 출처: anthropic.com/news/donating-agent-skills-to-agentic-ai-foundation (Oct 22, 2026) `[블]`
