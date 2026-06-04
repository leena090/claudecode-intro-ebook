---
title: "[공] 동적 워크플로우(Dynamic Workflows) — 수백 개 에이전트를 자동 지휘"
description: "Dynamic Workflows는 클로드가 대규모 작업을 위해 오케스트레이션 스크립트를 직접 짜고, 수십~수백 개의 서브에이전트를 자동으로 조율해요. Week 22 (2026-05-25) 리서치 프리뷰 출시."
tags: ["워크플로우", "workflows", "dynamic workflows", "서브에이전트", "에이전트", "자동생성", "고급", "ultracode"]
category: "advanced"
order: 26
lastUpdated: "2026-06-04"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 22 (2026-05-25) 리서치 프리뷰 출시. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/workflows" target="_blank">공식 문서: code.claude.com/docs/en/workflows</a>
</div>

## 동적 워크플로우가 뭐예요?

**동적 워크플로우(Dynamic Workflows)**는 Claude Code가 대규모 작업을 위해 **JavaScript 오케스트레이션 스크립트(지휘 대본)**를 직접 작성하고, 그 스크립트가 수십~수백 개의 서브에이전트를 자동으로 지휘해 결과를 모아주는 기능이에요.

> 🍱 **비유로 설명하면**: 건물 리모델링을 혼자 하는 것(일반 작업)과, 건설사 현장 소장이 되어 전기 기사·배관공·미장공 50명에게 각각 구역을 배정하고 지휘하는 것(동적 워크플로우)의 차이예요. 클로드가 현장 소장 역할을 하고, 여러분이 "이 건물 리모델링해" 한마디만 하면 나머지는 알아서 돌아가요.

<div class="note-circle">
○ 리서치 프리뷰 상태 — v2.1.154 이상 필요<br />
○ Pro 플랜: <code>/config</code>에서 Dynamic workflows 항목 켜야 해요<br />
○ Max·Team·Enterprise·Anthropic API: 기본 사용 가능
</div>

---

## 언제 써야 할까요?

| 작업 규모 | 추천 방법 |
|---------|----------|
| 파일 몇 개 수정 | 일반 대화 |
| 10~20개 파일 연계 수정 | 서브에이전트 |
| 코드베이스 전체 보안 감사 | **동적 워크플로우** |
| 500개 파일 마이그레이션 | **동적 워크플로우** |
| 여러 출처 교차 검증 리서치 | **동적 워크플로우** |
| 여러 각도 검토가 필요한 대형 플래닝 | **동적 워크플로우** |

---

## 기존 도구와 뭐가 다른가요?

| | 서브에이전트 | 스킬 | 에이전트 팀 | **동적 워크플로우** |
|--|------------|------|------------|-----------------|
| 계획을 누가 세우나 | 클로드 (턴마다) | 클로드 | 리드 에이전트 | **스크립트 (코드)** |
| 중간 결과 저장 위치 | 클로드 컨텍스트 | 컨텍스트 | 공유 작업 목록 | **스크립트 변수** |
| 반복 실행 | 어려움 | 어려움 | 어려움 | **쉬움 — 저장 후 명령어로 재실행** |
| 최대 규모 | 한 번에 몇 개 | 몇 개 | 소수 동시 | **수십~수백 에이전트** |
| 중단 후 재개 | 불가 | 불가 | 어려움 | **가능 (같은 세션 내)** |

---

## 사용 방법

### 방법 1: 내장 워크플로우 `/deep-research`

설치 없이 바로 쓸 수 있는 내장 워크플로우예요.

```bash
# 여러 출처를 교차 검증하는 리서치
/deep-research Node.js v20과 v22 사이에 권한 모델이 어떻게 바뀌었나요?
```

실행하면:
1. 여러 각도에서 웹 검색을 팬아웃(fan-out)해요
2. 찾은 출처를 교차 검증해요
3. 살아남은 주장만 모아 인용 출처 포함 리포트를 만들어요

### 방법 2: 직접 워크플로우 요청

```bash
# "workflow" 키워드 포함
> create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# ultracode 키워드 (프롬프트 어디든)
> ultracode: audit every API endpoint under src/routes/ for missing auth checks
```

`ultracode` 키워드가 하이라이트되면 클로드가 워크플로우를 작성해요. 실수로 입력했다면 `Option+W` (macOS) / `Alt+W` (Windows/Linux)로 취소 가능.

### 방법 3: 세션 전체 ultracode 모드

```bash
/effort ultracode
```

이 모드에서는 클로드가 **모든 작업에 자동으로 워크플로우를 계획**해요. 더 많은 토큰을 쓰지만, 더 꼼꼼하고 깊이 있게 작업해요.

---

## 워크플로우 진행 현황 보기 (`/workflows`)

워크플로우는 **백그라운드에서** 실행돼요. 실행 중에도 내 터미널은 자유롭게 다른 작업 가능!

```bash
/workflows
```

| 키 | 기능 |
|----|------|
| `↑` / `↓` | 단계·에이전트 선택 |
| `Enter` / `→` | 상세 보기 (프롬프트·도구 호출·결과) |
| `Esc` | 한 단계 뒤로 |
| `p` | 일시정지/재개 |
| `x` | 에이전트 중지 or 전체 워크플로우 중지 |
| `r` | 선택한 에이전트 재시작 |
| `s` | 스크립트 저장 (나중에 명령어로 재사용) |

---

## 실행 승인 옵션

CLI에서 워크플로우 실행 전 아래 선택지가 나와요:

| 선택지 | 설명 |
|--------|------|
| Yes, run it | 이번만 실행 |
| Yes, and don't ask again | 이 워크플로우는 이 프로젝트에서 자동 실행 |
| View raw script | 스크립트 코드 확인 후 결정 |
| No | 취소 |

---

## 워크플로우 저장해서 재사용하기

한 번 잘 된 워크플로우는 저장해서 **`/명령어`** 형태로 재사용할 수 있어요.

```bash
# /workflows 에서 s 키 → 저장 위치 선택:
# .claude/workflows/    → 이 프로젝트 팀 전체 공유
# ~/.claude/workflows/  → 내 모든 프로젝트에서 사용
```

저장하면 `/my-workflow-name` 처럼 슬래시 명령어로 쓸 수 있어요.

---

## 제한 사항 & 비용 관리

| 제한 | 값 |
|------|-----|
| 동시 실행 에이전트 | 최대 16개 |
| 한 실행당 총 에이전트 | 최대 1,000개 |
| 사용 카운트 | 플랜 한도에 포함 |

> 🍱 **비유로 설명하면**: 일꾼 50명을 고용하면 일은 빨리 끝나지만 인건비는 50배. 워크플로우도 에이전트가 많을수록 더 많은 토큰을 써요.

**비용 관리 팁:**
1. 먼저 작은 범위로 테스트 (전체 리포 대신 한 폴더)
2. `/workflows`에서 실시간으로 에이전트별 토큰 사용량 확인
3. 언제든 `x` 키로 중단 가능 — 완료된 에이전트 결과는 보존돼요
4. `Ctrl+G`로 스크립트를 에디터에서 열어 확인 가능

---

## 워크플로우 끄기

```bash
# 나만 끄기: /config → Dynamic workflows 항목 비활성화

# 또는 settings.json
# ~/.claude/settings.json
{
  "disableWorkflows": true
}

# 환경변수로 끄기
export CLAUDE_CODE_DISABLE_WORKFLOWS=1
```

조직 전체를 끄려면 [managed settings](/docs/config/managed-mcp-admin)에서 설정하거나 claude.ai 관리자 설정 페이지를 이용하세요.

---

## 더 알아보기

- [보안 가이드라인 플러그인](/docs/advanced/security-guidance-plugin) — Week 22 같이 출시된 보안 플러그인
- [에이전트 팀 가이드](/docs/advanced/agent-teams) — 더 작은 규모의 다중 에이전트
- [서브에이전트 가이드](/docs/codeweb/codeweb-remote)
- [공식 문서 — workflows](https://code.claude.com/docs/en/workflows)
