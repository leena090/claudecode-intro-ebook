---
title: "[공] Claude Projects — 여러 에이전트 세션을 한 프로젝트로 묶기"
description: "Claude Code Desktop의 Projects 기능으로 관련 코딩 세션들을 그룹화하고 여러 에이전트를 한 화면에서 감독할 수 있어요"
tags: ["자동생성", "Projects", "멀티에이전트", "세션관리", "Desktop", "자동화"]
category: "advanced"
order: 38
lastUpdated: "2026-11-25"
---

<div class="note-star">
★ <strong>[공]</strong> code.claude.com/docs/en/claude-projects 신규 문서 + 마케팅 발표(2026-09-17) 기반.
<br />★ 세부 UI 조작 방법은 추정 포함.
</div>

## Projects가 뭔가요?

> 🗂️ **비유로 설명하면**: 회사에서 프로젝트 폴더를 만들어 관련 파일을 다 넣어두는 것처럼, Claude Projects는 한 작업에 필요한 여러 에이전트 세션을 한 폴더에 묶어줘요.

**마케팅 공식 발표 (2026-09-17)**:
> *"Group related coding sessions so you can run and easily supervise multiple Claude agents at once."*
> (관련된 코딩 세션들을 묶어서 여러 에이전트를 동시에 실행하고 감독할 수 있어요)

**Claude Code Desktop 전용** 기능이에요.

---

## 어떤 상황에서 써요?

### 🏗️ 대규모 리팩토링

```
[프로젝트: DB 마이그레이션]
├── 세션1: 스키마 변경 작성
├── 세션2: 마이그레이션 스크립트
├── 세션3: 테스트 코드 업데이트
└── 세션4: 문서 갱신
```

### 🚀 기능 개발

```
[프로젝트: 결제 모듈 추가]
├── 세션1: 백엔드 API 개발
├── 세션2: 프론트엔드 UI
└── 세션3: E2E 테스트
```

> 각 세션이 독립적으로 돌아가면서 같은 목표를 향해 움직여요.

---

## Agent View와 함께 쓰면

**Agent View**(`code.claude.com/docs/en/agent-view`)를 열면 Projects 내 모든 세션의 상태를 한 화면에서 확인할 수 있어요:

| 세션 | 상태 | 현재 작업 |
|---|---|---|
| 세션1 (백엔드) | 🟢 실행 중 | 결제 API 테스트 작성 |
| 세션2 (프론트) | 🟡 대기 중 | 입력 대기 |
| 세션3 (테스트) | ✅ 완료 | PR 열기 완료 |

---

## 사용법 (Claude Code Desktop)

```
1. Claude Code Desktop 실행
2. 왼쪽 사이드바 → "Projects" 섹션
3. "+ 새 프로젝트" 클릭
4. 프로젝트 이름·목표 설정
5. 에이전트 세션 추가
6. 각 세션에 작업 지시
```

> 💡 한 프로젝트에 몇 개의 세션을 넣을 수 있는지 공식 한도는 미확인. 추정.

---

## Projects vs Agent Teams vs Dynamic Workflows

| 기능 | 사용 케이스 |
|---|---|
| **Projects** | 중기 작업을 논리적으로 묶어서 관리 |
| **Agent Teams** | 에이전트 간 역할 분담·통신 |
| **Dynamic Workflows** | 단기 대규모 병렬 처리(10~100 에이전트) |

> 🍱 Projects = 폴더, Agent Teams = 팀 구조, Dynamic Workflows = 공장 조립라인

---

## Share Sessions (세션 공유)

관련 신규 기능 `share-sessions`도 함께 나왔어요 (추정):
- 진행 중인 세션의 링크를 팀원에게 공유
- 팀원이 같은 세션을 보거나 이어받기 가능

> 📎 자세한 내용: `code.claude.com/docs/en/share-sessions`

---

*출처: [공] code.claude.com/docs/en/claude-projects (2026-11-25 신규). 마케팅 발표: 2026-09-17. 세부 UI는 추정 포함.*
