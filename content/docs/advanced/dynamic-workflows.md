---
title: "[공] 다이나믹 워크플로우 — 수백 개 에이전트를 스크립트로 지휘하기"
description: "ultracode 키워드로 Claude가 오케스트레이션 스크립트를 직접 짜서 수십~수백 개 서브에이전트를 배치 운영하는 고급 기능. Claude Code v2.1.154+ 필요."
tags: ["고급", "workflows", "ultracode", "deep-research", "서브에이전트", "자동생성"]
category: "advanced"
order: 10
lastUpdated: "2026-06-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — v2.1.154+ 필요. 모든 유료 플랜(Pro, Max, Team, Enterprise)에서 사용 가능. Pro 플랜은 <code>/config</code>에서 활성화 필요. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/workflows" target="_blank">공식 문서: code.claude.com/docs/en/workflows</a>
</div>

## 다이나믹 워크플로우가 뭔가요?

Claude Code가 복잡한 작업을 처리할 때 두 가지 방식이 있어요:

1. **일반 방식**: Claude가 **직접** 하나씩 순서대로 처리
2. **워크플로우**: Claude가 먼저 **스크립트(계획서)를 작성**하고, 수십~수백 개의 에이전트(서브 Claude)에게 동시에 나눠서 시킴

> 🍱 **비유**: 큰 회사 이사하기를 예로 들면 — 직원 1명이 짐 상자 하나씩 나르는 것(일반 방식)과, 이삿짐센터에서 반장이 스케줄표 짜고 직원 50명이 동시에 각자 맡은 짐을 나르는 것(다이나믹 워크플로우). 나(사용자)는 "이사 해줘"라고만 하면, Claude가 반장 역할을 하는 거예요.

---

## 언제 워크플로우를 써야 할까요?

| 상황 | 쓸 도구 |
|---|---|
| 파일 몇 개 수정, 간단한 버그 수정 | 일반 Claude Code |
| 특정 기능 반복 사용 | 스킬(Skills) |
| 여러 작업 동시에 독립 실행 | 서브에이전트(Subagents) |
| **코드베이스 전체 감사, 대형 마이그레이션, 교차 검증이 필요한 리서치** | **다이나믹 워크플로우** ✅ |

**워크플로우가 빛나는 상황:**
- 📁 전체 레포에서 deprecated API 찾아서 전부 교체
- 🔒 모든 엔드포인트 보안 취약점 검사
- 📚 수백 개 파일 마이그레이션
- 🔍 여러 소스 교차 검증이 필요한 딥 리서치

---

## 빠른 시작 — 번들 워크플로우 `/deep-research`

워크플로우를 처음 경험해보고 싶다면 기본 내장된 `/deep-research`를 써보세요.

```bash
# 질문을 던지면 여러 각도로 검색·교차검증 후 인용 포함 보고서 작성
/deep-research Node.js v20에서 v22 사이에 권한 모델이 어떻게 바뀌었나요?
```

**실행 흐름:**
1. 허용 여부 확인 프롬프트 → **Yes**
2. 백그라운드에서 에이전트들이 병렬 검색·교차검증 시작
3. `/workflows`로 진행 상황 실시간 확인
4. 완료되면 인용 포함 보고서 도착

> 💡 WebSearch 툴이 활성화되어 있어야 해요.

---

## 워크플로우 시작하는 법 3가지

### 방법 1: 자연어로 요청

```bash
create a workflow that audits every API endpoint for missing auth checks
워크플로우를 써서 이 레포 전체에서 TODO 코멘트 목록 만들어줘
```

Claude가 자연스럽게 "workflow 써달라는 요청"으로 이해해요.

### 방법 2: `ultracode` 키워드 명시

```bash
ultracode: 모든 src/routes/ 아래 엔드포인트 인증 누락 여부 감사해줘
```

프롬프트에 `ultracode`가 강조 표시되고 워크플로우가 자동 작성돼요.

### 방법 3: `/effort ultracode` — 세션 전체 워크플로우 모드

```bash
/effort ultracode
```

이 설정 이후 모든 실질적인 작업에 워크플로우를 자동으로 적용해요. 토큰 소모가 크니 주의.

<div class="note-star">
★ <strong>워크플로우 끄기</strong> — <code>/config</code>에서 Dynamic workflows 토글, 또는 settings.json에 <code>"disableWorkflows": true</code>. <code>[공]</code>
</div>

---

## 진행 상황 보기 — `/workflows`

```bash
/workflows
```

| 키 | 동작 |
|---|---|
| `↑` / `↓` | 단계·에이전트 선택 |
| `Enter` 또는 `→` | 선택한 단계 드릴다운 |
| `Esc` | 한 단계 뒤로 |
| `p` | 일시정지 / 재개 |
| `x` | 에이전트 또는 워크플로우 전체 중지 |
| `r` | 선택한 에이전트 재시작 |
| `s` | 이 워크플로우 스크립트를 명령어로 저장 |

---

## 워크플로우 저장해서 재사용하기

한 번 잘 돌아간 워크플로우는 **명령어로 저장**해두면 나중에 `/명령어이름`으로 다시 쓸 수 있어요.

```bash
# /workflows 화면에서 s 키 → 저장 위치 선택

# 프로젝트 공유용 (레포 클론한 모든 팀원이 사용)
.claude/workflows/

# 내 개인용 (모든 프로젝트에서 나만 사용)
~/.claude/workflows/
```

> 🍱 **비유**: 자주 쓰는 요리법을 레시피북에 저장해두는 것처럼, "이 레포 심사" 워크플로우를 저장해두면 다음에 `/audit-repo`라고만 치면 돼요.

---

## 비용 주의 사항

워크플로우는 수십~수백 개 에이전트를 동시에 돌리기 때문에 **토큰 사용량이 크게 늘어요**.

| 제약 | 이유 |
|---|---|
| 최대 동시 에이전트 16개 | 로컬 CPU/메모리 보호 |
| 런당 최대 에이전트 1,000개 | 무한 루프 방지 |

**비용 절감 팁:**
- 전체 레포 대신 **디렉토리 하나**로 먼저 테스트해보기
- `/workflows` 화면에서 토큰 사용량 실시간 확인
- 일반 작업은 `/effort high`로 내려서 사용

---

## 한 줄 요약

> **다이나믹 워크플로우**는 "Claude한테 큰 작업 하나를 시키면, Claude가 스크립트를 짜서 수십~수백 명의 미니 Claude에게 동시에 나눠서 시키는" 기능이에요. 코드베이스 전체 감사, 대형 마이그레이션, 딥리서치에 쓰세요.

---

## 더 알아보기

- [Week 22 업데이트 — Dynamic workflows 발표](/docs/next/whats-new-w22)
- [서브에이전트 사용법](/docs/advanced/agents-parallel)
- [공식 문서: Orchestrate subagents at scale](https://code.claude.com/docs/en/workflows)
