---
title: "[공] Dynamic Workflows — 수백 개 에이전트를 한번에 오케스트레이션"
description: "한 번의 명령으로 수십~수백 개의 에이전트가 동시에 일하는 Dynamic Workflows(다이나믹 워크플로우). ultracode 키워드, /deep-research, /workflows 관리까지 입문자도 이해할 수 있게 정리했어요."
tags: ["고급", "dynamic-workflows", "워크플로우", "ultracode", "서브에이전트", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-05"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Code v2.1.154+ 리서치 프리뷰. <a href="https://code.claude.com/docs/en/workflows">원문 보기</a> <code>[공]</code>
<br />★ <strong>주의</strong> — 리서치 프리뷰입니다. Pro 플랜은 <code>/config</code>에서 Dynamic workflows를 활성화해야 해요.
</div>

## Dynamic Workflows가 뭔가요?

**Dynamic Workflows(다이나믹 워크플로우)**는 클로드가 **오케스트레이션 스크립트를 직접 작성**해서 수십~수백 개의 서브에이전트를 동시에 실행하는 기능이에요.

> 🍱 **비유로 설명하면**: 
> - 일반 대화 = 클로드 혼자 일하기
> - 서브에이전트 = 클로드가 몇 명 직원에게 일 나눠주기
> - **Dynamic Workflows = 클로드가 100명 팀 전체를 지휘하는 프로젝트 매니저**

---

## 언제 쓰나요?

| 상황 | 예시 |
|------|------|
| 코드베이스 전체 감사 | "모든 API 엔드포인트 인증 누락 찾기" |
| 대규모 파일 마이그레이션 | "500개 파일의 fetch() → HttpClient 변환" |
| 교차 검증이 필요한 리서치 | "여러 소스를 독립적으로 분석 후 비교" |
| 복잡한 계획 수립 | "여러 각도에서 설계안 검토 후 최선 선택" |

### 일반 방식과 뭐가 다른가요?

| | 일반 대화 | 서브에이전트 | **Dynamic Workflows** |
|--|-----------|------------|----------------------|
| 계획을 누가 갖나 | 클로드 (대화 맥락) | 클로드 (대화 맥락) | **스크립트 (코드로 저장)** |
| 중간 결과 저장 | 클로드 컨텍스트 | 클로드 컨텍스트 | **스크립트 변수** |
| 재실행 가능? | ❌ | ❌ | ✅ 같은 스크립트 재사용 |
| 에이전트 규모 | 1명 | 몇 명 | **최대 수백 명** |
| 중단 후 재개? | ❌ | ❌ | ✅ 같은 세션에서 재개 |

---

## 어떻게 시작하나요?

### 방법 1: `ultracode` 키워드 사용

프롬프트에 `ultracode`를 넣으면 클로드가 워크플로우를 생성해서 실행해요.

```
ultracode: src/routes/ 아래 모든 API 엔드포인트 인증 체크 감사해줘
```

또는 자연어로 요청해도 돼요:
```
이 작업에 워크플로우를 사용해서 fetch() 전체를 HttpClient로 바꿔줘
```

> 💡 `ultracode`를 실수로 입력했다면? `Option+W` (macOS) 또는 `Alt+W` (Windows/Linux)로 취소할 수 있어요.

### 방법 2: 내장 /deep-research 워크플로우

질문을 여러 각도로 조사하고 크로스체크된 보고서를 만들어줘요.

```
/deep-research Node.js v20과 v22의 Permission Model 변화점은?
```

### 방법 3: 세션 전체를 ultracode 모드로

```
/effort ultracode
```

이 모드에서는 모든 실질적인 작업에 자동으로 워크플로우를 사용해요.

> ⚠️ 토큰 소비가 매우 많아요. 일반 작업엔 `/effort high`가 더 경제적이에요.

---

## 워크플로우 진행 상황 보기

```
/workflows
```

워크플로우 목록이 나오고, 선택하면 상세 진행 상황을 볼 수 있어요.

| 키 | 동작 |
|----|------|
| ↑ / ↓ | 단계(phase) 또는 에이전트 선택 |
| Enter 또는 → | 선택한 항목 확인 (프롬프트, 도구 호출, 결과) |
| Esc | 한 단계 뒤로 |
| p | 실행 일시정지 / 재개 |
| x | 선택한 에이전트 또는 전체 워크플로우 중단 |
| s | 이 워크플로우 스크립트를 명령어로 저장 |

---

## 결과를 재사용 명령어로 저장

워크플로우가 마음에 들면 `/workflows` 화면에서 `s`를 눌러 저장해요.

- `.claude/workflows/` — 이 프로젝트 팀원과 공유
- `~/.claude/workflows/` — 내 모든 프로젝트에서 사용 가능

저장하면 `/내-명령어-이름`으로 언제든 재실행할 수 있어요.

---

## 비용 주의사항

> 🍱 **비유로 설명하면**: 일반 대화는 커피 한 잔 값이라면, 워크플로우는 팀 회식비 수준이에요. 효과가 크지만, 그만큼 비용도 커요.

| 항목 | 내용 |
|------|------|
| 에이전트 최대 수 | 동시 최대 16개 (PC 사양에 따라 다름) |
| 총 에이전트 한도 | 실행당 최대 1,000개 |
| 비용 파악 방법 | `/workflows`에서 단계별 토큰 사용량 확인 |
| 절약 팁 | 전체 실행 전에 디렉토리 1개로 먼저 테스트 |

---

## 워크플로우 끄기

```
/config  ← Dynamic workflows 토글 OFF
```

또는 settings.json:
```json
{
  "disableWorkflows": true
}
```

환경변수:
```bash
CLAUDE_CODE_DISABLE_WORKFLOWS=1
```

---

## 내장 워크플로우 목록

| 명령어 | 내용 |
|--------|------|
| `/deep-research <질문>` | 여러 소스에서 교차 검증된 조사 보고서 작성 |

저장한 워크플로우도 자동으로 `/` 자동완성에 나타나요.

---

## 관련 가이드

- [서브에이전트 기본](/docs/advanced/agents-parallel) — 워크플로우의 기본이 되는 서브에이전트 이해
- [Week 22 업데이트 요약](/docs/next/whats-new-w22) — Dynamic Workflows가 포함된 주간 업데이트
- [공식 문서 (영어)](https://code.claude.com/docs/en/workflows) — 전체 스펙 및 API 레퍼런스
