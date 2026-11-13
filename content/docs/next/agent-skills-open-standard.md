---
title: "[공] Agent Skills 오픈 표준 — AI 에이전트들의 공통 언어가 생겼습니다"
description: "ChatGPT, Cursor, GitHub Copilot, VS Code까지 70개 넘는 AI 플랫폼이 함께 쓰는 에이전트 스킬 표준. 그 의미를 쉽게 설명합니다."
tags: ["자동생성", "agent-skills", "오픈표준", "에이전트", "생태계"]
category: "next"
order: 18
lastUpdated: "2026-11-13"
---

# Agent Skills 오픈 표준 🤝

> 출처: anthropic.com/news [공] — 2026년 10월 22일 공식 발표 기준

Anthropic이 **Agent Skills**(에이전트 스킬즈) 표준을 **Agentic AI Foundation**(에이전틱 AI 파운데이션)에 기증했습니다.

쉽게 말하면, Anthropic이 개발한 "AI 에이전트용 플러그인 규격"을 오픈소스로 세상에 내어놓은 것입니다.

---

## 왜 이게 중요한가요?

### 비유: USB 충전기 표준화

예전에는 삼성 폰 충전기, 애플 폰 충전기, LG 폰 충전기가 모두 달랐습니다.  
지금은 USB-C 하나로 대부분 충전됩니다.

Agent Skills가 하려는 일도 비슷합니다.

| 항목 | Agent Skills 이전 | Agent Skills 이후 |
|------|------------------|------------------|
| 스킬 개발 | 각 AI 플랫폼마다 별도 개발 | 한 번 만들면 여러 AI에서 사용 |
| 호환성 | ChatGPT용 플러그인 ≠ Claude용 스킬 | 표준 형식으로 호환 |
| 생태계 | 분산·파편화 | 70개+ 플랫폼이 같은 표준 사용 |

---

## 어떤 플랫폼들이 함께하나요?

발표 시점(2026년 10월)에 Agent Skills를 통합한 주요 플랫폼:

- **ChatGPT** (OpenAI)
- **Cursor** (AI 코드 에디터)
- **GitHub Copilot** (Microsoft)
- **VS Code** (Microsoft)
- 그 외 70개 이상의 에이전트 플랫폼

> 🔎 **흥미로운 점**: 경쟁사인 ChatGPT까지 같은 표준을 채택했다는 것은 이 표준이 그만큼 유용하다는 증거입니다.

Agent Skills 표준은 2025년 12월에 처음 공개됐고, 약 10개월 만에 70개+ 플랫폼이 통합했습니다.

---

## Claude Code 사용자에게 의미하는 것

Claude Code의 Skills 기능을 사용하고 계신다면, 앞으로 만들어진 스킬들이 더 다양한 AI 플랫폼에서도 활용 가능해질 수 있습니다.

현재 Claude Code의 `/skills` 명령어나 `.claude/agents/*.md` 파일로 스킬을 관리하는 방식은 유지되며, 오픈 표준과의 호환성이 점차 넓어질 전망입니다.

---

## Agentic AI Foundation이란?

Anthropic이 Agent Skills를 기증한 단체입니다.

- AI 에이전트 생태계의 오픈 표준을 관리하는 비영리 재단
- ChatGPT, Cursor, Copilot 등 주요 AI 플랫폼들이 참여
- Agent Skills 외에도 에이전트 간 상호운용성(Interoperability) 표준을 발전시킬 예정

> ⚠️ **추정**: Agentic AI Foundation의 세부 운영 방식과 미래 로드맵은 공개 발표 기준이며, 구체적인 내용은 변경될 수 있습니다.
