---
title: "[공] Claude Projects — 여러 작업을 한 대화에서 동시에 관리하기"
description: "Projects는 연관된 코딩 세션을 하나의 대화로 묶어 병렬 처리해주는 새 기능이에요. Pro/Max 공개 베타 중"
tags: ["자동생성", "projects", "클로드프로젝트", "병렬에이전트", "cloud-session", "베타", "고급"]
category: "advanced"
order: 27
lastUpdated: "2026-10-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 10월 현재 Pro/Max 공개 베타 중. <code>[공]</code><br />
★ Team/Enterprise 플랜은 아직 미출시. 사이드바에 <strong>Projects</strong>가 없으면 대기자 명단 신청 가능.
</div>

## Projects가 뭔가요?

> 🍱 **비유**: 혼자 모든 일을 하던 개인 개발자(기존 Claude Code)가, 이제는 **프로젝트 매니저**가 돼서 여러 직원들(클라우드 세션)에게 동시에 일을 나눠주는 것과 같아요.

**Projects**는 연관된 여러 작업을 **하나의 대화**에서 관리하는 기능이에요.

대화 하나를 만들면, Claude가 각 업무마다 **스레드(thread)**를 만들어요. 각 스레드는 보통 **클라우드 세션**으로 실행돼요. 스레드들은 **병렬로** 동시에 실행되고, 스마트폰에서 진행 상황을 확인하거나 방향을 조정할 수 있어요.

---

## 일반 세션 vs Projects 비교

| 구분 | 일반 Claude Code 세션 | Claude Projects |
|---|---|---|
| 작업 수 | 한 번에 하나씩 | 여러 개 동시 병렬 |
| 실행 위치 | 내 컴퓨터 | 클라우드 (또는 내 컴퓨터) |
| 노트북 닫으면 | 중단됨 | **클라우드 스레드는 계속 실행** |
| 모바일 접근 | 제한적 | 스마트폰에서 확인·조정 가능 |
| 플랜 | 모든 플랜 | Pro/Max (베타, 단계적 배포) |

---

## 어떻게 작동하나요?

### 기본 흐름

```
내가 Project 대화 시작
       ↓
Claude가 각 작업별 스레드 생성
       ↓
스레드 A     스레드 B     스레드 C
(결제 버그)  (테스트 작성)  (문서 업데이트)
병렬 실행↓   병렬 실행↓    병렬 실행↓
       ↓         ↓          ↓
완료 시 Project 대화에 결과 보고
```

### 스레드 실행 방식

- **클라우드 스레드** (기본): 내 컴퓨터 없이 클라우드에서 실행 → 노트북 닫아도 계속 진행
- **내 컴퓨터 스레드**: 내 기기에만 있는 것이 필요할 때 (Remote Control 사용)

> 🍱 **비유**: 클라우드 스레드는 외주 직원처럼 회사 밖에서 독립적으로 일해요. 내 컴퓨터 스레드는 사무실 직원처럼 내가 있을 때만 일할 수 있어요.

---

## 어디서 사용하나요?

| 접근 경로 | 방법 |
|---|---|
| 웹 | [claude.ai/code](https://claude.ai/code) → 왼쪽 사이드바 **Projects** |
| 데스크톱 앱 | Code 탭 → Projects |
| 모바일 앱 | Code 탭 → Projects (확인 및 조정) |

<div class="note-circle">
○ 사이드바에 <strong>Projects</strong>가 없으면 아직 내 계정에 배포되지 않은 거예요<br />
○ 대기자 명단: <a href="https://claude.com/form/projects" target="_blank">claude.com/form/projects</a><br />
○ 그 전까지는 <a href="https://code.claude.com/docs/en/agents">병렬 에이전트</a> 기능을 참고하세요
</div>

---

## 언제 쓰면 좋을까요?

### ✅ 이럴 때 유용해요

- 🏗️ **대규모 리팩토링** — 여러 모듈을 동시에 수정할 때
- 🧪 **병렬 테스트 작성** — 코드 수정 + 테스트 작성을 동시에
- 📦 **멀티 패키지 마이그레이션** — 여러 의존성을 한꺼번에 업데이트
- 🔍 **코드베이스 분석** — 다양한 관점에서 동시에 분석
- 🌙 **야간 배포 작업** — 자는 동안 여러 PR을 병렬로 준비

### ❌ 이럴 때는 일반 세션으로

- 단일 파일 수정
- 빠른 질문·답변
- 순차적으로 진행해야 하는 작업

---

## 현재 제약 사항

<div class="note-circle">
○ <strong>Pro/Max 플랜만</strong> — Team/Enterprise는 아직 준비 중<br />
○ <strong>단계적 배포 중</strong> — 클라우드 세션을 사용해본 계정부터 순차 출시<br />
○ <strong>claude.ai 채팅의 기존 Projects와 별개</strong> — 이미 claude.ai에서 Projects를 쓰던 계정은 다음 배포 대상
</div>

---

## 관련 링크

- [공식 문서: Claude Projects](https://code.claude.com/docs/en/claude-projects) `[공]`
- [병렬 에이전트 (Projects 대안)](https://code.claude.com/docs/en/agents) `[공]`
- [클라우드 세션 소개](https://code.claude.com/docs/en/claude-code-on-the-web) `[공]`
- [Remote Control](https://code.claude.com/docs/en/remote-control) `[공]`
