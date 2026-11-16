---
title: "[공] Agent Skills 오픈 표준 — ChatGPT·Cursor·GitHub Copilot도 쓰는 공개 표준"
description: "Anthropic이 Agent Skills 오픈 표준을 Agentic AI Foundation에 기증했어요. ChatGPT, Cursor, GitHub Copilot 포함 70개 이상 플랫폼이 채택 (2026년 10월)"
tags: ["자동생성", "Agent Skills", "에이전트스킬", "오픈표준", "AgenticAI", "ChatGPT", "Cursor", "GitHub Copilot"]
category: "next"
order: 18
lastUpdated: "2026-11-16"
---

<div class="note-star">
★ <strong>[블]</strong> Agent Skills 기증 발표: <a href="https://www.anthropic.com/news/donating-agent-skills">anthropic.com/news/donating-agent-skills</a> (Oct 22, 2026)
<br />★ <strong>[공]</strong> 표준 최초 발표: <a href="https://www.anthropic.com/news">anthropic.com</a> (Dec 2025)
</div>

## Agent Skills가 뭔가요?

> 📖 **비유로 설명하면**: 도서관에 "표준 도서 분류법"이 있잖아요. 어느 도서관에 가든 같은 분류 체계로 책을 찾을 수 있는 것처럼요. Agent Skills는 AI 에이전트가 **어느 플랫폼에서든 같은 방식으로 전문 지식과 작업 흐름을 사용할 수 있도록** 만든 표준이에요.

**Agent Skills**는 AI 에이전트에게 **전문 지식과 작업 흐름**을 패키지로 전달하는 오픈 표준이에요.

Anthropic이 2025년 12월에 처음 발표했고, 2026년 10월 22일 **Agentic AI Foundation**이라는 비영리 재단에 오픈 표준으로 기증했어요.

---

## 왜 중요한가요?

### "AI 플러그인의 공통 언어"

현재 AI 도구들은 각자 다른 방식으로 확장 기능을 추가해요. Claude Code는 Skills, OpenAI는 GPT Actions, 기타 도구들은 각자의 플러그인 시스템을 가지고 있어요.

Agent Skills는 이 모든 플랫폼이 **하나의 공통 형식**을 쓸 수 있게 해요.

### 채택 현황 (2026년 10월 기준)

**70개 이상의 플랫폼이 Agent Skills를 통합**했어요:

| 플랫폼 | 종류 |
|---|---|
| **ChatGPT** | 대화형 AI |
| **Cursor** | AI 코드 에디터 |
| **GitHub Copilot** | 코딩 보조 |
| **VS Code** | 개발 환경 |
| + 66개 이상 | 기타 에이전트 플랫폼 |

---

## Claude Code와의 연관성

Claude Code에서 쓰는 **Skills 기능**이 바로 이 표준을 기반으로 해요.

```bash
# Claude Code에서 Skill 불러오기 예시
/skill-doctor
```

Claude Code의 Skills가 이제 **업계 표준**이 되어, 다른 AI 도구에서도 같은 Skill을 재사용할 수 있는 가능성이 열렸어요.

---

## Agentic AI Foundation이란?

**Agentic AI Foundation**은 AI 에이전트 생태계의 오픈 표준을 관리하는 비영리 재단이에요.

Anthropic이 Agent Skills 표준의 소유권을 이 재단에 넘김으로써:
- Anthropic 단독 결정이 아닌 **업계 전체가 함께 발전**시키는 표준이 됐어요
- Claude가 사라지더라도 표준 자체는 계속 유지돼요
- 경쟁 AI 도구들도 같은 표준을 채택할 동기가 생겼어요

---

## 나에게 미치는 영향

**지금 당장**:
- Claude Code에서 쓰던 Skills가 더 풍부해질 것 (더 많은 개발자가 Skills를 만듦)
- Cursor, GitHub Copilot 등 다른 AI 도구에서 만든 Skills를 Claude Code에서도 쓸 가능성

**앞으로**:
- AI 도구를 바꿔도 Skills 자산이 유지됨
- 회사에서 만든 커스텀 Skill을 여러 AI 도구에서 재사용 가능

---

## 자주 묻는 질문

**Q: Claude Code의 Skills가 ChatGPT에서도 그냥 작동하나요?**
A: 표준을 채택한 플랫폼에서 호환 가능성이 높아지지만, 모든 Skills가 즉시 모든 플랫폼에서 작동하지는 않아요. 각 플랫폼의 구현 수준에 따라 달라요.

**Q: 이미 만들어진 Claude Code Skills를 계속 쓸 수 있나요?**
A: 네! 오픈 표준화는 기존 Skills를 더 넓은 생태계로 확장하는 것이지, 없애는 게 아니에요.

**Q: 기업에서 커스텀 Skill을 만들어 쓰고 있는데 영향이 있나요?**
A: 직접적인 영향은 없어요. 오픈 표준이 완성되면 같은 Skill을 다른 AI 도구에도 배포하기 쉬워지는 장점이 생겨요.
