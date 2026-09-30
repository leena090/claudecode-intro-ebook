---
title: "[공] 자체 인프라 실행(Self-hosted environments) + Projects — 팀·기업용 고급 기능"
description: "사내 서버에서 Claude Code 클라우드 세션을 돌리거나, 여러 작업을 Projects로 한 번에 관리하는 법을 설명해요"
tags: ["자동생성", "self-hosted", "프로젝트", "Projects", "기업", "클라우드세션", "병렬"]
category: "advanced"
order: 40
lastUpdated: "2026-09-30"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com 공식 문서 기반
<br />★ Self-hosted environments는 공개 베타, Projects는 GA 상태예요. 공식 발표 기준으로 정리했어요.
</div>

## 이 문서에서 다루는 두 가지

1. **Self-hosted environments** — 사내 인프라에서 Claude Code 클라우드 세션 실행
2. **Projects** — 여러 관련 코딩 작업을 한 대화 흐름에서 묶어서 관리

---

## 🏠 Self-hosted environments (자체 인프라 실행)

> 🍱 **비유로 설명하면**: Claude Code 클라우드 세션은 원래 Anthropic 서버에서 실행됐어요. Self-hosted는 "우리 회사 주방에서 요리해줘"처럼, Anthropic의 레시피(AI 모델)는 그대로 쓰면서 주방(인프라)은 내 것으로 바꾸는 거예요.

### 왜 필요한가요?

- **보안 규정**: 코드·데이터가 외부 서버로 나가면 안 되는 금융·의료·정부 환경
- **내부 서비스 접근**: 사내 API, 데이터베이스에 Claude가 직접 접근해야 할 때
- **네트워크 제어**: 특정 도메인만 허용하는 폐쇄망 환경

### 작동 방식

```
[사용자] → [Claude Code CLI/Web] → [Anthropic 오케스트레이터]
                                           ↓
                                   [회사 자체 러너(Runner)]
                                    ← 사내 인프라 내부 →
```

### 기본 설정 (공식 문서 기준)

```bash
# 1. 자체 환경 생성
claude env create my-company-env

# 2. 러너 설치 및 시작
# (서버에서 실행)
claude runner start --env my-company-env

# 3. 세션을 자체 환경으로 라우팅
claude --env my-company-env "태스크 시작해줘"
```

<div class="note-star">
★ 상세 설정은 공식 문서 <a href="https://code.claude.com/docs/en/self-hosted-environments">self-hosted-environments</a> 참조. <code>[공식]</code>
<br />★ 현재 공개 베타 단계예요. 엔터프라이즈 계획 대상.
</div>

---

## 📁 Projects — 여러 작업을 하나로 묶기

> 🍱 **비유로 설명하면**: 예전엔 여러 심부름을 각각 다른 도우미에게 부탁했다면, Projects는 "우리 팀 한 명이 전체 프로젝트 맥락을 알고 여러 작업을 병렬로 처리해줘"예요.

### Projects란?

- 연관된 코딩 작업들을 **하나의 대화 흐름**으로 묶는 기능 `[공]`
- Claude가 여러 **클라우드 병렬 세션**으로 동시 진행
- 저장소·지시사항·메모리를 세션 간 **공유**
- Claude Code **Desktop App**에서 사용 가능

### 활용 사례

```
프로젝트: "쇼핑몰 리팩토링"
├── 세션 1: 결제 모듈 분리
├── 세션 2: 장바구니 API 개선
├── 세션 3: 테스트 커버리지 확대
└── 세션 4: 문서 업데이트
```

### Desktop에서 Projects 사용

```
Claude Code Desktop App
→ 사이드바에서 Projects 탭
→ 새 Project 생성
→ 저장소·지시사항 설정
→ 작업 항목 추가
→ Claude가 병렬 세션으로 자동 진행
```

<div class="note-star">
★ Projects는 Claude Code Desktop App에서만 사용 가능해요. <code>[공식]</code>
<br />★ Pro, Max, Team, Enterprise 플랜 지원.
</div>

---

## 비교: 어떤 걸 써야 할까요?

| 상황 | 추천 |
|---|---|
| 개인 개발자, 여러 PR 동시에 | **Dynamic Workflows** 또는 **Agent View** |
| 팀·기업, 반복되는 관련 작업 묶기 | **Projects** |
| 코드가 외부로 나가면 안 되는 환경 | **Self-hosted environments** |
| 완전 자동화, 스케줄 실행 | **Routines** |

---

## 더 알아보기

- [Self-hosted environments 공식 문서](https://code.claude.com/docs/en/self-hosted-environments)
- [Self-hosted environments 빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [Projects 공식 문서](https://code.claude.com/docs/en/claude-projects)
- [병렬 에이전트 실행](/docs/advanced/agents-parallel)
- [Dynamic Workflows](/docs/advanced/dynamic-workflows)
- [Routines](/docs/advanced/routines)
