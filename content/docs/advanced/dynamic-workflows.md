---
title: "[공] 동적 워크플로우(Dynamic Workflows) — Claude가 팀장 되어 수백 개의 서브에이전트 지휘하기"
description: "한 번의 지시로 Claude가 지휘 스크립트를 직접 작성하고, 여러 서브에이전트가 동시에 대규모 작업을 처리하는 동적 워크플로우를 알아봐요"
tags: ["고급", "dynamic-workflows", "워크플로우", "서브에이전트", "대규모작업", "자동생성"]
category: "advanced"
order: 20
lastUpdated: "2026-06-13"
---

<div class="note-star">
★ <strong>공식 기능</strong> — Week 22 (2026-05-25) 리서치 프리뷰로 공개. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/workflows" target="_blank">공식 문서: code.claude.com/docs/en/workflows</a>
</div>

## 동적 워크플로우가 뭔가요?

**동적 워크플로우(Dynamic Workflows)**는 Claude가 여러분의 대규모 작업을 처리하기 위해 **직접 지휘 스크립트를 작성**하고, 그 스크립트대로 수많은 서브에이전트(Claude 분신들)가 백그라운드에서 동시에 작업하는 방식이에요.

> 🍱 **비유로 설명하면**: 혼자서 아파트 단지 전체를 청소하라고 하면 몇 달이 걸리겠죠. 하지만 청소 회사에 맡기면 팀장이 "101동은 팀A, 102동은 팀B, 화단은 팀C" 하고 역할을 나눠서 하루 만에 끝내요. 동적 워크플로우에서 Claude가 바로 그 **팀장** 역할을 해요.

---

## 언제 쓰면 좋을까요?

**한 번의 대화로 처리하기엔 너무 큰 작업**일 때 써요.

| 상황 | 예시 |
|---|---|
| 🗂️ 전체 코드베이스 감사 | "모든 파일에서 사용 중단된 API 호출 찾아줘" |
| 🔄 대규모 마이그레이션 | "구형 fetch() 호출 전부 새 HttpClient 방식으로 바꿔줘" |
| 🔬 교차 검증 연구 | "이 알고리즘이 맞는지 여러 각도로 검증해줘" |
| 📝 일괄 문서화 | "모든 함수에 JSDoc 주석 달아줘" |

**이럴 때는 쓰지 않아도 돼요:**
- 파일 몇 개 수정 (일반 Claude Code로 충분)
- 간단한 버그 수정 1개
- 질문에 대한 답변

---

## 쓰는 법

### 1단계: 워크플로우 요청

```bash
# 자연어로 설명하면 Claude가 알아서 워크플로우를 만들어요
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 또는 한국어로
> 전체 코드베이스에서 사용 중단된 API 호출을 찾아서 최신 버전으로 교체하는 워크플로우를 만들어줘
```

Claude가 할 일:
1. 작업 분석
2. 서브에이전트에게 나눠줄 스크립트 작성
3. 서브에이전트들 실행

### 2단계: 워크플로우 관리

```bash
# 워크플로우 목록 확인
/workflows

# 진행 상황 모니터링
# 각 서브에이전트가 무엇을 하는지 실시간으로 볼 수 있어요
```

> 🍱 **비유**: `/workflows`는 CCTV 모니터 화면처럼 — 여러 현장에서 동시에 작업하는 팀들의 현황을 한눈에 보는 거예요.

---

## 일반 서브에이전트 vs 동적 워크플로우

| 항목 | 일반 서브에이전트 | 동적 워크플로우 |
|---|---|---|
| **규모** | 소수 (2~5개) | 대규모 (수십~수백) |
| **지휘 스크립트** | 수동 지정 | Claude가 자동 작성 |
| **재실행** | 매번 다시 설정 | 스크립트 재사용 가능 |
| **백그라운드** | 선택적 | 항상 백그라운드 |
| **적합한 작업** | 단순 병렬 작업 | 복잡한 대규모 작업 |

---

## 실전 예시

### 예시 1: 코드 마이그레이션

```bash
> create a workflow to migrate all class components to React hooks in the src/components directory
```

Claude의 행동:
- `src/components` 전체 스캔 스크립트 작성
- 각 파일마다 서브에이전트 배정
- 모든 변환 결과 취합

### 예시 2: 보안 감사

```bash
> create a workflow that audits every file for SQL injection vulnerabilities and generates a report
```

Claude의 행동:
- 파일 목록 추출
- 파일 그룹마다 서브에이전트 배정 (SQL 패턴 검색)
- 취약점 보고서 생성

---

## 주의사항

<div class="note-star">
★ <strong>리서치 프리뷰(Research Preview)</strong> 상태예요 — 아직 공식 출시 전이라 동작이 변할 수 있어요. <code>[공]</code><br />
★ 대규모 작업이므로 <strong>토큰 소비가 많아요</strong> — 실행 전에 /usage로 한도 확인 권장.<br />
★ Opus 4.8 이상에서 최적으로 작동해요.
</div>

---

## 더 알아보기

- [공식 문서 — Dynamic Workflows](https://code.claude.com/docs/en/workflows)
- [서브에이전트란?](/docs/advanced/agents-parallel)
- [Week 22 업데이트](/docs/next/whats-new-w22)
