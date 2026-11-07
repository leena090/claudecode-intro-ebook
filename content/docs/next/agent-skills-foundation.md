---
title: "[블] Agent Skills 오픈 표준 — AI 에이전트 생태계의 공통 언어"
description: "Anthropic이 Agent Skills를 오픈 표준으로 Agentic AI Foundation에 기증했어요. ChatGPT·Cursor·GitHub Copilot 등 70개 이상 플랫폼이 이미 연동했습니다"
tags: ["자동생성", "AgentSkills", "오픈표준", "AgenticAIFoundation", "생태계", "표준화"]
category: "next"
order: 20
lastUpdated: "2026-11-07"
---

<div class="note-star">
★ <strong>[블]</strong> 공식 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Oct 22, 2026)<br />
★ Agent Skills 표준 최초 공개: 2025년 12월
</div>

## 무슨 일이 있었나요?

2026년 10월 22일, Anthropic이 **Agent Skills 표준을 Agentic AI Foundation에 기증**한다고 발표했어요.

> 🌐 **공식 발표 기준**: ChatGPT, Cursor, GitHub Copilot, VS Code를 포함한 **70개 이상의 에이전트 플랫폼**이 2025년 12월 표준 공개 이후 Agent Skills를 연동했어요.

---

## Agent Skills가 뭔가요?

**AI 에이전트에게 전문 지식과 작업 흐름을 패키지로 전달하는 오픈 표준**이에요.

지금까지 각 AI 플랫폼은 "어떻게 에이전트에게 도메인 지식을 줄까"를 각자의 방식으로 해결했어요. Agent Skills는 이 방법을 하나의 공통 표준으로 정리한 거예요.

> 🔌 **비유로 설명하면**: USB 표준이 등장하기 전에는 제조사마다 다른 케이블을 써야 했죠. Agent Skills는 AI 에이전트 세계의 "USB Type-C" 같은 거예요. 한 번 만들면 여러 플랫폼에서 쓸 수 있어요.

---

## 왜 중요한가요?

### 개발자 입장에서

내가 만든 Skills(전문 지식·작업 흐름 패키지)를 한 번만 만들면:
- Claude Code에서도 쓸 수 있고
- GitHub Copilot에서도 쓸 수 있고
- Cursor에서도 쓸 수 있어요

**한 번 만들어 여러 플랫폼에 배포** — 개발 비용이 크게 줄어요.

### 사용자 입장에서

내가 쓰는 AI 도구가 뭐든 "Claude Code의 그 플러그인"과 같은 고품질 Skills를 쓸 수 있어요.

---

## Agentic AI Foundation이란?

> 📋 **추정**: 여러 AI 플랫폼이 참여하는 중립적인 비영리 단체로, Agent Skills 오픈 표준을 관리·발전시키는 역할을 할 것으로 보여요. Anthropic이 표준을 주도했지만, 중립적인 거버넌스를 위해 재단에 이관했습니다.

---

## Claude Code에서 Skills

Claude Code에서는 이미 Skills를 `SKILL.md` 파일 형태로 사용하고 있어요.

```
.claude/
└── skills/
    └── deploy-checklist/
        └── SKILL.md  ← 배포 전 체크리스트 등 전문 지식 담음
```

스킬 사용법:
```
/deploy-checklist  ← 등록된 스킬 실행
```

Agent Skills 오픈 표준이 확산되면, 이런 Skills를 다른 AI 도구에서도 그대로 쓸 수 있게 될 가능성이 높아요.

---

## 정리

Agent Skills 오픈 표준의 의미:

1. **70개+ 플랫폼 연동** — AI 에이전트 생태계에서 빠르게 채택
2. **재단 기증** — 특정 회사 소유가 아닌 중립적인 표준으로 발전
3. **Claude Code 사용자에게** — 내가 만든 Skills가 더 넓은 생태계에서 활용 가능해질 전망

> 💡 AI 도구들이 각자 섬처럼 고립되어 있던 시대에서, 서로 연결되는 생태계로 넘어가는 흐름의 한 걸음이에요.
