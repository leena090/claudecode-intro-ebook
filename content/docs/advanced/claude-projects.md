---
title: "[공] Projects — 관련 세션을 묶어 여러 Claude를 한번에 감독하기"
description: "Claude Code Desktop의 Projects 기능으로 코딩 세션을 그룹화하고, 저장소·지시사항·메모리를 공유하는 병렬 클라우드 세션 실행"
tags: ["자동생성", "projects", "병렬세션", "에이전트", "desktop"]
category: "advanced"
order: 27
lastUpdated: "2026-09-20"
---

<div class="note-star">
★ <strong>공식 출처</strong>: <a href="https://code.claude.com/docs/en/claude-projects.md">code.claude.com/docs/en/claude-projects.md</a><br />
★ Claude Code Desktop에서 사용 가능 (공식 발표 기준)
</div>

## Projects란?

**Projects**(프로젝트)는 **관련된 작업들을 하나의 대화 안에 묶어, 저장소·지시사항·메모리를 공유하는 여러 Claude 클라우드 세션을 함께 실행**하는 기능이에요.

> 🏗️ **비유로 설명하면**: 아파트 건설 현장에 여러 팀(전기팀, 배관팀, 미장팀)이 있다고 해봐요. '프로젝트 관리자'(Projects)가 모든 팀에게 같은 설계도(저장소·지시사항)를 주고, 각 팀의 진행 상황을 한 눈에 모니터링해요. 팀들이 서로 같은 자재 창고(공유 메모리)를 쓰니까 중복 작업이 없어요.

---

## 어떤 문제를 해결하나요?

### 이전 방식의 불편함
- 프론트엔드 세션, 백엔드 세션, 테스트 세션을 따로 열어야 함
- 각 세션에 같은 프로젝트 설명을 반복해서 입력
- 어느 세션이 무엇을 하는지 파악하기 어려움

### Projects가 해주는 것
- ✅ 관련 세션들을 하나의 "프로젝트" 아래 그룹화
- ✅ 모든 세션이 같은 저장소, 지시사항, 메모리를 공유
- ✅ 한 화면에서 여러 Claude를 동시에 감독

---

## Projects vs Agent view vs Dynamic workflows 비교

| 기능 | 주요 용도 | 세션 수 | 공유 자원 |
|------|----------|---------|---------|
| **Projects** | 지속적인 관련 작업 묶음 | 여러 개 | 저장소·지시사항·메모리 |
| Agent view | 현재 실행 중인 모든 세션 모니터링 | 무제한 | 없음 |
| Dynamic workflows | 대규모 일시적 병렬 작업 | 10~100개 | 스크립트 정의 공유 |

---

## 언제 Projects를 쓰면 좋을까요?

### ✅ 적합한 경우
- **장기 프로젝트**: 며칠~몇 주에 걸쳐 여러 작업을 계속 진행할 때
- **팀 프로젝트**: 같은 코드베이스의 여러 부분을 동시에 작업할 때
- **마이크로서비스**: auth, payment, notification 등 여러 서비스를 함께 개발할 때

### ❌ 적합하지 않은 경우
- 일회성 버그 수정 → 일반 세션으로 충분
- 독립적인 작업들의 단순 병렬 실행 → Agent view 사용

---

## 시작하는 방법

```
1. Claude Code Desktop 앱 실행
2. 왼쪽 사이드바 → "New Project" 버튼
3. 프로젝트 이름 설정 (예: "ecommerce-v2")
4. 연결할 GitHub 저장소 선택
5. 공유 지시사항 작성 (CLAUDE.md처럼)
6. 세션 추가 → 각 세션에 역할 부여
```

---

## 세션 간 메시지 보내기

Projects 내의 세션들은 서로 메시지를 주고받을 수 있어요. Claude Code W32(2026-08-03)부터 도입된 **세션 간 메시지 기능**과 연계됩니다:

```
세션 A (프론트엔드): "API 설계 완료됐나요?"
  → 세션 B (백엔드): "네, OpenAPI 스펙 생성했어요. 공유 메모리에 저장했습니다."
```

---

## 공식 문서 참고

- [Projects 공식 문서](https://code.claude.com/docs/en/claude-projects.md)
- [병렬 에이전트 실행 가이드](https://code.claude.com/docs/en/agents.md)
- [세션 간 메시지 기능](https://code.claude.com/docs/en/cross-session-messaging.md)
