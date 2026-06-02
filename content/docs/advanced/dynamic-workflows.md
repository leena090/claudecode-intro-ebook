---
title: "[공] 다이나믹 워크플로우(Dynamic Workflows) — AI 팀이 큰 일을 처리하는 방법"
description: "ultracode 키워드와 /workflows 명령으로 수십 개의 서브에이전트가 팀처럼 병렬 작업 — 코드베이스 전체 점검, 대규모 마이그레이션, 교차 검증 리서치에 최적"
tags: ["고급", "workflows", "dynamic-workflows", "ultracode", "deep-research", "서브에이전트", "리서치프리뷰", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-02"
---

<div class="note-star">
★ <strong>리서치 프리뷰</strong> — 2026-05-25 기준. Claude Code v2.1.154 이상 + 유료 플랜 필요. Pro 플랜은 <code>/config</code>에서 "Dynamic workflows"를 먼저 켜세요. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/workflows" target="_blank">공식 문서: code.claude.com/docs/en/workflows</a>
</div>

## 다이나믹 워크플로우가 뭔가요?

**다이나믹 워크플로우(Dynamic Workflows)** 는 Claude가 여러 개의 AI 에이전트(대리인)를 만들어서 **큰 작업을 팀처럼 병렬로 처리**하는 기능이에요.

> 🍱 **비유로 설명하면**: 혼자서 가게 재고 5,000개를 하나씩 확인하면 며칠이 걸리지만, 직원 50명에게 나눠주면 하루 만에 끝내는 것처럼 — Claude가 AI 직원 수십 명을 만들어 동시에 일을 나눠서 처리해요.

### 일반 서브에이전트 vs 다이나믹 워크플로우 — 뭐가 달라요?

| 비교 | 일반 서브에이전트 | 다이나믹 워크플로우 |
|------|-----------------|-------------------|
| **계획을 누가 짜나** | Claude가 매 턴마다 | **스크립트(코드)** 가 |
| **중간 결과는 어디** | Claude의 컨텍스트 창 | **스크립트 변수** 에 |
| **규모** | 한 번에 몇 개 | **수십~수백 에이전트** |
| **재사용** | 같은 지시 다시 입력 | **저장된 명령어**로 재실행 |
| **중단 후 재개** | 처음부터 | **완료된 건 캐시 유지** |

> 🍱 **비유**: 서브에이전트는 "심부름 하나 시키기", 워크플로우는 "회사 전체 프로젝트 운영하기"예요. 큰 프로젝트엔 계획서(스크립트)가 필요해요.

---

## 어떤 작업에 써야 하나요?

### ✅ 워크플로우가 빛나는 상황

- 🔍 **코드베이스 전체 보안 점검** — 1만 줄짜리 코드를 구석구석 다 봐야 할 때
- 📦 **대규모 마이그레이션** — 파일 500개의 함수명을 일괄 변경할 때
- 📚 **교차 검증 리서치** — 여러 출처를 서로 비교·확인해서 신뢰할 수 있는 정보 찾기
- 🏗️ **다각도 계획** — 같은 문제를 여러 방향에서 독립적으로 분석하고 가장 좋은 안 선택

### ❌ 워크플로우가 낭비인 상황

- 파일 하나 수정
- 간단한 질문과 답변
- 가벼운 버그 수정

---

## 가장 빠른 시작 — `/deep-research`

워크플로우를 직접 설정하지 않아도 **바로 써볼 수 있는 기본 제공 워크플로우**가 있어요.

```bash
# Claude Code 세션 안에서
/deep-research Node.js v20에서 v22로 업그레이드할 때 주의할 점은?

/deep-research 리액트(React)와 뷰(Vue) 중 소규모 팀에 더 적합한 프레임워크는?
```

실행되면:
1. AI 여러 개가 **동시에 웹 검색** (여러 방향에서)
2. 찾은 출처를 **서로 교차 검증** (가짜·과장 걸러내기)
3. 살아남은 정보로 **인용 포함 보고서** 작성

> 🍱 **비유**: 기자 10명에게 같은 사건을 따로따로 취재하게 하고, 공통으로 나오는 내용만 기사로 쓰는 것처럼 — 더 신뢰할 수 있는 결과가 나와요.

### 진행 상황 보기

```bash
# 워크플로우 목록과 진행 상황
/workflows
```

`/workflows`를 열면:
- 각 단계(Phase)가 몇 개 에이전트를 쓰는지
- 현재 진행률
- 토큰 사용량

키보드 조작:
| 키 | 동작 |
|----|------|
| `↑` / `↓` | 단계·에이전트 선택 |
| `Enter` | 상세 보기 |
| `p` | 일시정지 / 재개 |
| `x` | 중단 |
| `s` | **이 워크플로우 명령어로 저장** |

---

## `ultracode` 키워드 — 내 작업을 워크플로우로

프롬프트에 **`ultracode`** 를 넣으면, Claude가 그 작업을 워크플로우로 처리해요.

```bash
# 키워드 넣기
ultracode: src/routes/ 아래 모든 API 엔드포인트에서 인증 빠진 곳 찾아줘

# 또는 자연어로
fetch() 호출을 모두 새 HttpClient 래퍼로 바꾸는 워크플로우 만들어줘

# 또는
create a workflow that migrates every internal fetch() call to the new HttpClient wrapper
```

<div class="note-circle">
○ 실수로 ultracode를 입력했다면 — <strong>Option+W</strong> (macOS) 또는 <strong>Alt+W</strong> (Windows/Linux)를 누르면 워크플로우 실행을 취소할 수 있어요.<br />
○ ultracode 자동 인식을 끄고 싶으면 <code>/config</code>에서 "Ultracode keyword trigger" 항목을 끄세요.
</div>

---

## `/effort ultracode` — 세션 전체를 워크플로우 모드로

```bash
/effort ultracode
```

이 명령어를 입력하면 **세션이 끝날 때까지 모든 큰 작업이 자동으로 워크플로우**로 처리돼요.

> 🍱 **비유**: 일반 `ultracode`는 "이 요리 한 번 특별하게 만들어줘"이고, `/effort ultracode`는 "오늘 주방 전체를 풀 가동 모드로"예요.

일반 작업으로 돌아올 때:
```bash
/effort high
```

<div class="note-star">
★ <code>/effort ultracode</code>는 <strong>토큰을 많이 써요</strong>. 일상 작업에선 비효율적이고, 코드베이스 전체 점검이나 대규모 리팩터링 같은 진짜 큰 일에만 쓰세요.
</div>

---

## 워크플로우 저장해서 재사용하기

한 번 잘 된 워크플로우 설정은 **나만의 명령어**로 저장할 수 있어요.

1. `/workflows` 열기
2. 저장하고 싶은 워크플로우 선택
3. `s` 키 누르기
4. 저장 위치 선택:

| 위치 | 경로 | 적용 범위 |
|------|------|---------|
| 프로젝트 공유 | `.claude/workflows/` | 이 프로젝트 팀 전체 |
| 개인 전용 | `~/.claude/workflows/` | 내 모든 프로젝트 |

저장 후에는 `/` 자동완성 목록에 나타나요:

```bash
# 예시: triage-issues 라는 이름으로 저장했다면
/triage-issues

# 입력값 전달도 가능
/triage-issues on issues 1024, 1025, and 1030
```

---

## 워크플로우 관리

### 중단 후 재개

워크플로우를 멈췄다가 다시 시작할 수 있어요. 이미 완료된 에이전트 작업은 **캐시로 보존**되어 처음부터 다시 하지 않아요.

- `/workflows` → 중단된 워크플로우 선택 → `p`(재개)

> ⚠️ **주의**: Claude Code를 완전히 종료하면 재개 불가. 같은 세션 안에서만 재개 가능해요.

### 비용 주의

워크플로우는 에이전트 수십 개가 동시에 일하므로 **토큰을 많이** 써요.

- 큰 작업 전에 **작은 규모로 먼저 테스트**: 디렉토리 하나로 먼저 시도해보기
- `/workflows`에서 실행 중에도 각 에이전트별 토큰 사용량 확인 가능
- 에이전트 최대 16개 동시 실행, 총 1,000개 제한 (무한 루프 방지)

---

## 워크플로우 끄는 방법

```bash
# 이번 세션만 끄기
/config  # → "Dynamic workflows" 토글 OFF

# 영구적으로 끄기
# ~/.claude/settings.json에 추가:
{
  "disableWorkflows": true
}

# 환경 변수로 끄기
export CLAUDE_CODE_DISABLE_WORKFLOWS=1
```

---

## 한 줄 요약

> **혼자 하기엔 너무 큰 작업**에서 Claude에게 "AI 팀을 꾸려서 해줘"라고 하는 기능이에요.  
> 키워드는 **`ultracode`**, 결과 확인은 **`/workflows`**, 즉석 조사는 **`/deep-research`**.

---

## 더 알아보기

- [공식 문서 — Dynamic workflows](https://code.claude.com/docs/en/workflows)
- [서브에이전트 & 에이전트 팀](/docs/advanced/agent-teams) — 더 작은 규모의 병렬 작업
- [Week 21–22 업데이트 요약](/docs/next/whats-new-w21-w22) — 출시 배경
