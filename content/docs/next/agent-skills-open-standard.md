---
title: "[블] Agent Skills 오픈 표준 기부 — ChatGPT·Cursor·GitHub Copilot도 쓰는 공개 표준이 됐어요"
description: "Anthropic이 AI 에이전트에게 전문 지식과 워크플로를 주는 Agent Skills 표준을 Agentic AI Foundation에 오픈소스로 기부했어요"
tags: ["자동생성", "AgentSkills", "오픈표준", "에이전트", "생태계", "Cursor", "GitHubCopilot"]
category: "next"
order: 20
lastUpdated: "2026-11-21"
---

<div class="note-star">
★ <strong>[블]</strong> 발표: <a href="https://www.anthropic.com/news">anthropic.com/news</a> (Oct 22, 2026)<br />
★ <strong>[공]</strong> Skills 공식 문서: <a href="https://code.claude.com/docs/en/skills">code.claude.com/docs/en/skills</a>
</div>

## 무슨 일이 생겼나요?

Anthropic이 2026년 10월 22일, **Agent Skills 표준**을 **Agentic AI Foundation**이라는 비영리 기관에 기부했어요.

> 🎁 **비유로 설명하면**: Anthropic이 만든 "AI 에이전트용 플러그인 규격"이 한 회사의 독점 기술에서 **전 세계가 함께 쓰는 공개 표준**으로 전환됐어요. USB 규격처럼요 — 어떤 기기든 USB를 꽂으면 되듯, 어떤 AI 에이전트든 Agent Skills를 쓸 수 있게 됩니다.

---

## Agent Skills가 뭔가요?

**AI 에이전트에게 전문 지식과 워크플로를 제공하는 표준 규격**이에요.

Claude Code의 Skills 기능을 직접 써보신 분들은 이미 알고 계실 거예요. 예를 들면:
- `/code-review` 를 실행하면 "코드 리뷰 방법"이라는 Skills가 작동
- `/deploy` 를 설정하면 배포 절차 Skills가 작동

---

## 얼마나 많이 퍼졌나요?

Agent Skills 표준은 **2025년 12월 발표 이후 10개월 만에** 70개 이상의 AI 플랫폼에 통합됐어요.

| 플랫폼 | 종류 |
|---|---|
| **ChatGPT** | AI 어시스턴트 |
| **Cursor** | AI 코드 에디터 |
| **GitHub Copilot** | AI 코딩 보조도구 |
| **VS Code** | 코드 에디터 |
| + 70개 이상 플랫폼 | — |

> 🌐 **의미**: 이제 여러분이 Claude Code에서 만든 Skills는 이론적으로 Cursor나 GitHub Copilot에서도 작동할 수 있는 토대가 마련됐어요.

---

## Agentic AI Foundation이란?

Agent Skills 표준을 중립적으로 관리하는 **비영리 기관**이에요.

특정 회사(Anthropic, OpenAI 등) 대신 독립 재단이 표준을 운영함으로써:
- 모든 회사가 공평하게 표준에 기여 가능
- 특정 회사의 사업 이해관계에서 독립적인 발전

---

## Claude Code 사용자에게 미치는 영향

### 현재: 그대로 작동

기존에 쓰던 Skills는 아무 변경 없이 동일하게 작동해요.

### 미래: 더 넓은 생태계

```
Agent Skills 표준 (오픈)
  ├── Claude Code (Anthropic)
  ├── Cursor
  ├── GitHub Copilot
  ├── ChatGPT
  └── + 더 많은 플랫폼들...
```

내가 만든 Skills를 여러 플랫폼에서 재사용하고, 커뮤니티가 만든 Skills를 모든 플랫폼에서 쓸 수 있는 생태계가 만들어지는 중이에요.

---

## Skills 직접 사용해보기

```bash
# Claude Code에서 사용 가능한 Skills 확인
/list-skills

# 특정 Skills 실행
/code-review
/deploy
```

공식 Skills 문서: [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills)
