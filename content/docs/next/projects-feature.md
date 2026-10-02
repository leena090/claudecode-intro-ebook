---
title: "[공] Projects — 여러 Claude Code 세션을 한 번에 관리하기"
description: "Claude Code Desktop의 Projects 기능으로 관련된 코딩 작업을 묶고, 여러 AI 에이전트를 한 화면에서 감독할 수 있어요"
tags: ["자동생성", "Projects", "멀티에이전트", "세션관리", "Desktop", "신규기능"]
category: "next"
order: 18
lastUpdated: "2026-10-02"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 공식 안내: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Latest feature announcements)
<br />★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
</div>

## Projects가 뭔가요?

비유로 설명할게요. 기존 Claude Code는 **대화 창 한 개**에서 한 가지 작업을 하는 거예요. 마치 손님 한 명이 있는 카페 창구죠.

**Projects**는 여러 창구를 한 눈에 보는 **카운터 관리자 화면**이에요. 연관된 코딩 세션들을 하나의 프로젝트로 묶고, 여러 Claude 에이전트가 동시에 일하는 걸 한 화면에서 감독할 수 있어요.

> 📌 **공식 설명 기준**: "Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop."

---

## 어떻게 쓰나요?

Projects는 **Claude Code Desktop 앱**에서만 사용할 수 있어요 (CLI는 지원 안 함).

```
1. Claude Code Desktop 실행
2. 왼쪽 사이드바에서 [Projects] 선택
3. 새 프로젝트 생성 → 코딩 세션 추가
4. 여러 세션을 동시에 실행하고 감독
```

---

## 어떤 상황에서 유용할까요?

| 상황 | 기존 방식 | Projects 활용 |
|---|---|---|
| 프론트엔드 + 백엔드 동시 작업 | 창 2개 열어서 왔다갔다 | 하나의 프로젝트에 2개 세션 |
| 기능 개발 + 테스트 작성 | 번갈아 진행 | 병렬로 동시 진행 |
| 큰 리팩터링 여러 파트 | 순차 진행 | 각 파트를 에이전트에 분배 |
| 버그 조사 + 수정 | 하나씩 | 조사 에이전트와 수정 에이전트 분리 |

---

## Agent view와의 차이점

이전에 소개된 **Agent view** (`content/docs/advanced/agent-view.md`)는 모든 Claude Code 세션을 한 화면에서 보는 기능이었어요.

**Projects**는 그보다 한 단계 더 나아가서:
- 세션들을 **논리적으로 묶어** 관리
- 프로젝트 단위로 **문맥을 공유**할 수 있는 구조
- 여러 에이전트를 동시에 **감독**하는 역할에 초점

쉽게 말하면, Agent view가 "여러 직원 목록"이라면, Projects는 "팀별 부서 관리"예요.

---

## 주의사항

> ⚠️ Projects는 현재 Claude Code Desktop에서만 사용 가능합니다. CLI(`claude` 명령어)와 웹 버전(claude.ai/code)에서는 지원하지 않아요.

Desktop 앱 다운로드: [code.claude.com/docs/en/desktop-quickstart](https://code.claude.com/docs/en/desktop-quickstart)

---

## 입문자에게 드리는 조언

Projects는 처음에는 "굳이 왜 필요하지?"라고 느낄 수 있어요. 하지만 작업이 커질수록 진가가 나타나요.

예를 들어 쇼핑몰 사이트를 만든다고 해봐요:
- 세션 1: 상품 목록 페이지 개발
- 세션 2: 결제 로직 개발  
- 세션 3: 관리자 화면 개발

Projects 없이는 세 개 창을 오가며 각각 진행 상황을 확인해야 해요. Projects를 쓰면 하나의 "쇼핑몰 프로젝트"로 묶어 한 화면에서 세 에이전트가 일하는 걸 볼 수 있어요.
