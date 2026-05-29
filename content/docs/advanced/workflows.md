---
title: "[공] 동적 워크플로우로 서브에이전트 대규모 오케스트레이션하기"
description: "Claude가 스크립트를 직접 작성하고 수십 개의 서브에이전트를 지휘해 코드베이스 전체 감사, 대규모 마이그레이션, 교차검증 리서치를 처리하는 방법"
tags: ["자동생성", "워크플로우", "workflow", "서브에이전트", "subagent", "오케스트레이션", "마이그레이션", "감사", "대규모"]
category: "advanced"
order: 29
lastUpdated: "2026-05-29"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/workflows">code.claude.com/docs/en/workflows</a><br />
★ 고급 기능이에요. 먼저 <a href="/docs/advanced/agents-parallel">서브에이전트 기본</a>에 익숙해진 다음 시도해보세요.
</div>

## 클로드 한 명 vs 클로드 팀

지금까지 Claude Code를 쓸 때는 Claude 한 명이랑 대화했어요. 근데 어떤 작업은 혼자로는 너무 크거나 너무 느려요.

- 전체 코드베이스 보안 감사 (파일 수천 개)
- 레거시 API를 새 API로 전면 교체
- 여러 결과를 교차 검증하는 리서치

이런 경우를 위해 Claude가 **직접 작업 계획 스크립트를 짜고**, 그 계획대로 수십 개의 서브에이전트를 지휘하는 게 **동적 워크플로우(dynamic workflows, '다이나믹 워크플로우')**예요.

> 🍱 **비유로 설명하면**: 건물 리모델링을 할 때 사장님(Claude) 혼자 다 하면 1년이 걸리지만, 사장님이 설계도(스크립트)를 그리고 전기팀·배관팀·인테리어팀(서브에이전트들)에게 동시에 일을 시키면 몇 주면 돼요. 동적 워크플로우는 그 설계도를 Claude가 자동으로 그려주는 거예요.

---

## 동적 워크플로우가 딱 맞는 작업

| 작업 유형 | 예시 | 왜 워크플로우가 필요한가 |
|----------|------|----------------------|
| **코드베이스 감사** | "전체에서 deprecated 함수 찾아줘" | 파일 수백 개를 동시에 검색해야 빠름 |
| **대규모 마이그레이션** | "Python 2 → Python 3 전환" | 일관성 있게 수천 파일 변환 필요 |
| **교차검증 리서치** | "이 기술 선택의 장단점 분석해줘" | 여러 에이전트가 독립적으로 분석 후 비교 |
| **대규모 테스트 생성** | "전 모듈에 유닛 테스트 추가해줘" | 병렬 처리로 시간 단축 |
| **다국어 번역** | "모든 에러 메시지 한국어로" | 파일별 독립 처리 가능 |

---

## 어떻게 작동하나요? — 3단계

### 1단계: 요청

```
나: 우리 코드베이스 전체에서 deprecated API 사용 찾아서 최신 API로 교체해줘
```

### 2단계: Claude가 스크립트 자동 생성

Claude가 먼저 저장소 구조를 분석한 다음, 이런 워크플로우 스크립트를 만들어요:

```yaml
# Claude가 자동 생성한 audit-deprecated-apis.yaml
name: deprecated-api-migration
steps:
  - name: scan-auth-module
    agent: code-scanner
    path: src/auth/
    task: find-deprecated-api-usage

  - name: scan-api-module
    agent: code-scanner
    path: src/api/
    task: find-deprecated-api-usage

  - name: scan-utils-module
    agent: code-scanner
    path: src/utils/
    task: find-deprecated-api-usage

  - name: apply-fixes
    agent: code-writer
    depends_on: [scan-auth-module, scan-api-module, scan-utils-module]
    task: replace-deprecated-with-new-api

  - name: verify
    agent: code-reviewer
    depends_on: [apply-fixes]
    task: verify-no-deprecated-remaining
```

### 3단계: 서브에이전트 실행 + 결과 통합

```
[동시 실행]
에이전트A: src/auth/ 스캔 완료 → deprecated 3건 발견
에이전트B: src/api/ 스캔 완료 → deprecated 7건 발견
에이전트C: src/utils/ 스캔 완료 → deprecated 1건 발견

[순차 실행]
에이전트D: 11건 모두 수정 완료
에이전트E: 검증 완료 — deprecated 0건 확인

최종 보고서 생성...
```

---

## 핵심 장점 — 재실행 가능!

동적 워크플로우의 가장 강력한 기능은 **스크립트를 나중에 다시 실행할 수 있다는 거예요**.

```bash
# 첫 번째 실행
claude workflow run audit-deprecated-apis.yaml

# 코드 수정 후 다시 검증 (동일 명령!)
claude workflow run audit-deprecated-apis.yaml

# 다음 달 정기 감사도 동일 명령으로
claude workflow run audit-deprecated-apis.yaml
```

> 🍱 **비유로 설명하면**: 공장 품질 검사 라인처럼, 한 번 설치해놓으면 제품이 들어올 때마다 같은 검사 과정을 반복해요. 매번 처음부터 설계할 필요가 없어요.

---

## 일반 서브에이전트와 비교

| 항목 | 일반 서브에이전트 | 동적 워크플로우 |
|------|-----------------|----------------|
| **규모** | 소수 (2~5개) | 수십~수백 개 가능 |
| **계획 작성자** | 사람이 직접 지정 | Claude가 자동 생성 |
| **재실행** | 매번 새로 설정 | 스크립트 파일로 재실행 |
| **적합한 작업** | 일회성 태스크 | 반복되는 대규모 작업 |
| **학습 난이도** | 낮음 | 중간 |

---

## 실제로 써볼 만한 예시

### 예시 1: 코드 스타일 통일

```
모든 JavaScript 파일에서 var를 let/const로 교체해줘.
동적 워크플로우 만들어서 실행해줘.
```

### 예시 2: 문서화 자동 생성

```
src/ 아래 모든 함수에 JSDoc 주석 추가해줘.
병렬로 빠르게 처리하는 워크플로우 써줘.
```

### 예시 3: 정기 보안 감사

```
매주 실행할 수 있는 보안 취약점 스캔 워크플로우 만들어줘.
SQL 인젝션·하드코딩된 비밀번호 위주로.
```

---

## 자주 묻는 질문

**Q. 워크플로우 실행 중에 뭔가 잘못되면요?**
각 단계가 독립적이라서 실패한 단계만 다시 실행할 수 있어요. 처음부터 다시 할 필요 없어요.

**Q. 서브에이전트가 너무 많이 실행되면 비용이 많이 나오지 않나요?**
에이전트 수와 작업 크기에 따라 비용이 늘어나요. 먼저 작은 범위로 테스트해보고 전체로 확장하는 걸 추천해요.

**Q. 일반 서브에이전트(/agents)와 어떻게 다른가요?**
서브에이전트는 사람이 직접 "A를 해줘, B를 해줘"라고 지시해야 해요. 동적 워크플로우는 Claude가 스스로 계획을 짜고 서브에이전트들에게 일을 나눠줘요. 더 자율적이에요.
