---
title: "[블] Agent Skills 오픈 표준 — 70개 AI 플랫폼이 함께 쓰는 공통 언어"
description: "Anthropic이 AI 에이전트 전용 오픈 표준 'Agent Skills'를 Agentic AI Foundation에 기증했어요. ChatGPT, Cursor, GitHub Copilot, VS Code 등 70개+ 플랫폼이 이미 도입"
tags: ["자동생성", "AgentSkills", "오픈표준", "AgenticAI", "생태계", "신규소식"]
category: "next"
order: 18
lastUpdated: "2026-11-08"
---

<div class="note-star">
★ <strong>[블]</strong> Agent Skills 재단 기증 발표: anthropic.com/news (Oct 22, 2026)<br/>
★ <strong>[블]</strong> 표준 최초 발표: 2025년 12월 (Anthropic 공식 발표 기준)
</div>

## Agent Skills란 무엇인가요?

**Agent Skills(에이전트 스킬)**는 AI 에이전트에게 **전문 지식과 작업 흐름**을 전달하는 **오픈 표준**이에요.

공식 발표 내용:
> "AI 에이전트에게 특화된 지식과 워크플로우를 제공하는 오픈 표준. 2025년 12월 발표 이후 ChatGPT, Cursor, GitHub Copilot, VS Code를 포함한 70개 이상의 에이전트 플랫폼이 통합됐습니다."

---

## 💡 쉽게 이해하기: USB 표준

Agent Skills는 **USB 표준**과 같습니다.

```
USB 표준 이전:
  모든 기기마다 충전기가 달랐음 😩
  
USB 표준 이후:
  어느 기기든 하나의 충전기로 OK! 😊

Agent Skills 이전:
  각 AI 플랫폼마다 스킬 형식이 달랐음
  
Agent Skills 이후:
  어느 AI 플랫폼에서나 같은 스킬 작동!
```

---

## 왜 중요한가요?

### 70개 이상의 플랫폼이 이미 도입

| 플랫폼 | 카테고리 |
|---|---|
| **Claude Code** | Anthropic 공식 |
| **ChatGPT** | OpenAI |
| **Cursor** | AI 코드 에디터 |
| **GitHub Copilot** | GitHub (Microsoft) |
| **VS Code** | Microsoft IDE |
| + 65개 이상의 플랫폼 | 다양한 AI 도구 |

이 표준이 중요한 이유: **한 번 만든 스킬이 여러 AI 플랫폼에서 작동**해요!

---

## Agentic AI Foundation이란?

Anthropic은 Agent Skills 표준을 **Agentic AI Foundation(에이전틱 AI 재단)**에 기증했어요.

이 재단은:
- AI 에이전트 생태계의 오픈 표준을 관리
- 특정 회사에 종속되지 않고 중립적으로 운영 (추정)
- 다양한 AI 회사들이 함께 참여하는 거버넌스 구조 (추정)

<div class="note-star">
★ 재단의 세부 구조와 거버넌스는 공식 발표 내용 외 세부 사항은 추정입니다.
</div>

---

## Claude Code 사용자에게 의미하는 것

### 현재 (2026-11-08 기준)

```
Claude Code의 Skills 기능
  ↕ (Agent Skills 표준 기반)
다른 AI 플랫폼의 스킬들
  → 호환 가능한 스킬 생태계
```

### 실용적인 혜택

| 혜택 | 설명 |
|---|---|
| 더 많은 스킬 선택 | 70개 플랫폼 커뮤니티가 만든 스킬 사용 가능 |
| 이식성 | Claude Code용으로 만든 스킬을 다른 AI에서도 |
| 표준화 | 형식 걱정 없이 스킬 개발에 집중 |

---

## Skills 사용하기 (Claude Code)

```bash
# 사용 가능한 스킬 목록 보기
/skills list

# 스킬 설치 (URL 또는 이름)
/skill install <스킬명>

# 스킬 사용
/<스킬명>
```

### 예시: 코드 리뷰 스킬

```bash
# 코드 리뷰 스킬 실행
/code-review

# 결과: 에이전트가 diff를 분석하고
# 버그, 성능, 보안 문제를 보고해줍니다
```

---

## 직접 스킬 만들기

Agent Skills 표준에 따라 스킬을 만들면 70개+ 플랫폼과 호환됩니다:

```yaml
# skill.yaml (기본 구조, 추정 — 공식 문서 확인 권장)
name: "my-review-skill"
description: "한국어로 코드 리뷰해주는 스킬"
version: "1.0.0"
instructions: |
  당신은 시니어 한국어 코드 리뷰어입니다.
  모든 피드백은 한국어로 작성하고,
  초보자도 이해할 수 있게 쉽게 설명하세요.
```

<div class="note-star">
★ 스킬 작성 형식의 세부 사항은 Agent Skills 공식 명세를 확인하세요.
  Claude Code에서는 <code>/skills</code> 명령어로 도움말을 볼 수 있습니다.
</div>

---

## 오픈 표준의 의미 — 더 넓은 AI 생태계

```
2025년 12월: Anthropic이 표준 발표
     ↓
2026년 초:   업계 주요 플랫폼들이 도입 시작
     ↓
2026년 10월: 70개+ 플랫폼 통합 완료
     ↓
     ↓ Anthropic이 재단에 기증
     ↓
앞으로:      특정 회사 종속 없이 오픈 생태계로 성장
```

이는 AI 에이전트 세계에서 **HTTP가 웹을 하나로 연결한 것**과 같은 의미를 가질 수 있어요. (추정)

---

## 다음 단계

Agent Skills 오픈 표준을 이해했다면, **Claude의 IPO 소식**도 확인해보세요 — Anthropic이 더 큰 도약을 준비하고 있습니다!
