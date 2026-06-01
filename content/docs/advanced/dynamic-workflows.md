---
title: "[공] Dynamic Workflows — 수백 개 서브에이전트로 대규모 작업 자동화"
description: "프롬프트에 'workflow' 한 단어로 Claude가 직접 오케스트레이션 스크립트를 짜고 배경에서 수십~수백 에이전트를 병렬 실행해요"
tags: ["고급", "workflows", "서브에이전트", "자동화", "ultracode", "deep-research", "2026", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026-05-25 리서치 프리뷰 출시. v2.1.154 이상 필요. <code>[공]</code><br />
★ 유료 플랜 전체(Pro, Max, Team, Enterprise), Anthropic API, Bedrock, Vertex AI, Microsoft Foundry 지원<br />
👉 <a href="https://code.claude.com/docs/en/workflows" target="_blank">공식 문서: code.claude.com/docs/en/workflows</a>
</div>

## Dynamic Workflows가 뭔가요?

**Dynamic Workflows(동적 워크플로우)** 는 Claude가 직접 JavaScript 오케스트레이션 스크립트를 짜고, 그 스크립트가 수십~수백 개의 서브에이전트를 배경에서 병렬 실행하는 기능이에요.

> 🍱 **비유**: 혼자 500개 방의 대청소를 하는 게 아니라, 청소 계획표를 짜고 청소부 팀 30명에게 방 별로 배정해서 동시에 진행하는 것처럼, Claude가 계획을 짜고 AI 팀원들이 동시에 일하는 방식이에요.

---

## 언제 써야 하나요?

서브에이전트·스킬·에이전트팀과의 차이:

| 구분 | 누가 계획하나 | 중간 결과가 어디에 | 반복 가능 여부 | 규모 |
|------|-------------|-------------------|---------------|------|
| 서브에이전트 | Claude (턴마다) | 컨텍스트 창 | △ | 턴당 몇 개 |
| 스킬 | Claude | 컨텍스트 창 | △ | 서브에이전트와 동일 |
| 에이전트팀 | 리드 에이전트 | 공유 태스크 목록 | △ | 소수 병렬 |
| **Dynamic Workflows** | **스크립트** | **스크립트 변수** | **✅ 완전 재실행 가능** | **수백 에이전트** |

**워크플로우가 맞는 경우:**
- 전체 코드베이스 버그 감사 (파일 수백 개 동시 분석)
- 대규모 API 마이그레이션 (500개 파일 일괄 패턴 교체)
- 교차 검증이 필요한 리서치 (여러 에이전트가 서로의 결론을 검증)
- 반복 실행할 작업을 "레시피"로 저장해두고 싶을 때

---

## 실행 방법

### 방법 1: 프롬프트에 "workflow" 단어 포함

```bash
# "workflow" 단어가 있으면 Claude가 자동으로 워크플로우로 처리
create a workflow that migrates every internal fetch() call to the new HttpClient wrapper

# 감사 예시
run a workflow to audit every API endpoint under src/routes/ for missing auth checks
```

> 🍱 **비유**: 마법 주문처럼 — 주문서에 "workflow"라는 단어가 들어가면 Claude가 "아, 이건 팀 작업이 필요한 거구나"라고 인식하고 스크립트를 짜요.

`Option+W` (macOS) / `Alt+W` (Windows·Linux)로 해당 프롬프트의 트리거를 취소할 수 있어요.

### 방법 2: `/effort ultracode` 설정

```bash
/effort ultracode
```

이 모드를 켜면 Claude가 모든 실질적인 작업에 대해 자동으로 워크플로우로 처리할지 판단해요. 세션이 끝나면 초기화돼요.

### 방법 3: 빌트인 워크플로우 명령어

```bash
# 웹 리서치 워크플로우 (기본 내장)
/deep-research What changed in the Node.js permission model between v20 and v22?
```

`/deep-research`는 여러 검색을 팬아웃(fan-out)해서 소스를 교차 검증하고 인용 포함 보고서를 반환해요.

---

## 진행 상황 모니터링

```bash
# 실행 중인 워크플로우 목록
/workflows
```

`/workflows` 화면에서:

| 키 | 동작 |
|----|------|
| ↑ / ↓ | 페이즈·에이전트 선택 |
| Enter / → | 드릴다운 (상세 보기) |
| Esc | 뒤로 |
| p | 일시정지 / 재개 |
| x | 에이전트 또는 전체 워크플로우 중지 |
| r | 선택한 에이전트 재시작 |
| s | 스크립트를 나중에 쓸 명령어로 저장 |

입력창 아래 작업 패널에도 1줄 진행 요약이 표시돼요.

---

## 워크플로우 저장 및 재사용

한 번 잘 된 워크플로우는 저장해두면 나중에 명령어로 다시 실행할 수 있어요.

```bash
# /workflows 화면에서 s 키 → 저장 위치 선택
# 프로젝트 공유: .claude/workflows/
# 개인 전용:     ~/.claude/workflows/

# 저장 후 어느 세션에서든 /workflow-name 형태로 실행
```

---

## 제약 및 비용

| 제약 | 내용 |
|------|------|
| 동시 실행 에이전트 | 최대 16개 (CPU 여유에 따라 줄 수도 있음) |
| 총 에이전트 수/실행 | 최대 1,000개 |
| 중간 사용자 입력 | 불가 (에이전트 권한 확인 프롬프트만 예외) |
| 파일·쉘 직접 접근 | 스크립트 자체는 불가, 에이전트가 대신 수행 |

> ⚠️ **비용 주의**: 에이전트 수십~수백 개를 실행하면 토큰 소비가 많아요. 큰 작업 전에 작은 범위(디렉토리 1개, 파일 수십 개)로 먼저 테스트하는 걸 권장해요.

일시정지했다가 재개(Resume)하면 이미 완료된 에이전트 결과는 캐시에서 가져오므로 처음부터 다시 실행할 필요 없어요.

---

## 워크플로우 끄기

```bash
# 개인 설정 (영구)
/config → Dynamic workflows 토글

# 조직 전체 (관리자)
# 관리 설정에서 "disableWorkflows": true
```

---

> 💡 **입문자 팁**: 처음엔 `/deep-research`로 감을 익혀보세요. "어? 배경에서 에이전트들이 알아서 움직이네!" 하는 경험을 먼저 해보고, 그 다음 직접 `workflow` 키워드를 써서 코드 관련 작업을 맡겨보면 이해가 빠를 거예요.
