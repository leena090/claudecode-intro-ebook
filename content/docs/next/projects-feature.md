---
title: "[공] Claude Projects — 여러 작업을 한 번에 병렬로 맡겨요"
description: "Pro·Max 공개 베타 중인 Projects 기능: 관련된 여러 작업을 한 프로젝트로 묶어 Claude가 병렬 클라우드 세션으로 동시 처리해줘요"
tags: ["자동생성", "projects", "병렬", "클라우드", "에이전트", "베타", "2026"]
category: "next"
order: 18
lastUpdated: "2026-10-26"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
★ Pro·Max 플랜 공개 베타 중. Team·Enterprise는 아직 미지원 (공식 발표 기준, 추후 변경 가능).
</div>

## Claude Projects가 뭔가요?

하나의 대화에서 **연관된 작업 여럿을 Claude에게 동시에 맡길 수 있는 기능**이에요. Claude가 각 작업을 별도 스레드(클라우드 세션)로 분리해서 **동시에 처리**해줘요.

> 🍱 **비유**: 주방에서 요리사(Claude)한테 "찌개 끓이면서 반찬 3개 준비하고 밥도 지어줘"라고 한 번에 말하는 것과 같아요. 예전에는 하나 끝나면 다음 걸 시켜야 했는데, 이제는 동시에 네 가지가 진행돼요.

---

## 핵심 개념 이해하기

| 용어 | 뜻 |
|------|----|
| **프로젝트** | 관련 작업들을 묶은 하나의 대화 |
| **스레드** | 각 작업이 돌아가는 개별 세션 |
| **클라우드 세션** | Anthropic 인프라에서 돌아가는 원격 세션 |
| **Remote Control** | 내 PC에서 실행이 필요한 스레드용 연결 |

---

## 어떻게 사용하나요?

### 1. Projects 접근하기

- **웹**: [claude.ai/code](https://claude.ai/code) 사이드바에서 "Projects" 선택
- **데스크톱 앱**: Code 탭에서 "Projects" 선택 (없으면 "More" 확인)

> ⚠️ 아직 순차 배포(롤아웃) 중이라 내 계정에 아직 없을 수 있어요. [대기 명단](https://claude.com/form/projects)에 등록하거나, 지금은 에이전트 병렬 실행([Run agents in parallel](https://code.claude.com/docs/en/agents)) 기능을 사용하세요.

### 2. 사용 예시

```
> 이 레포를 리팩토링해줘:
> - TypeScript로 마이그레이션 (스레드 1)
> - API 문서 업데이트 (스레드 2)
> - 테스트 커버리지 70% 달성 (스레드 3)
```

Claude가 각 작업을 별도 클라우드 세션으로 분리해서 병렬 진행해요.

---

## 클라우드 세션 vs 내 PC 실행

| 구분 | 클라우드 세션 | 내 PC 실행 |
|------|-------------|-----------|
| 실행 위치 | Anthropic 인프라 | 내 컴퓨터 |
| 랩톱 꺼도 계속? | ✅ 계속 실행 | ❌ 중단됨 |
| 내부 서비스 접근 | 어려움 | ✅ 가능 |
| 연결 방법 | 자동 | Remote Control |

> 🍱 **비유**: 클라우드 세션은 "도서관 공부방"처럼 내가 집에 가도 작업이 계속돼요. 내 PC 실행은 내 책상 — 내부 네트워크나 로컬 파일이 필요한 작업에 써요.

---

## 모바일에서도 확인·조종 가능

프로젝트가 클라우드에서 실행 중일 때, **모바일 앱에서 진행 상황을 확인하고 방향을 잡아줄 수 있어요**.

- 출근길에 작업 시작 → 이동 중에 모바일로 확인
- 의사결정이 필요한 부분이 생기면 Claude가 알림
- 도착하면 이미 상당 부분 진행된 결과를 받아볼 수 있어요

---

## 현재 제한 사항

| 항목 | 내용 |
|------|------|
| 지원 플랜 | Pro, Max (공개 베타) |
| Team/Enterprise | 아직 미지원 |
| 배포 방식 | 순차 배포 중 |

<div class="note-circle">
○ 기존에 claude.ai 채팅이나 Cowork에서 Projects를 사용한 이력이 있는 계정은 배포 대상에서 제외될 수 있어요<br />
○ cloud sessions를 사용해 본 계정부터 순차 배포 중이에요<br />
○ 공식 문서 기준 정보 (추후 변경 가능)
</div>

---

## 에이전트 병렬 실행과 뭐가 달라요?

Projects는 기존의 에이전트 병렬 실행(sub-agents, workflows)을 더 쉽게 쓸 수 있게 만든 **UI·경험** 레이어예요. 내부적으로는 비슷한 클라우드 세션 기술을 사용하지만, Projects는 "지속적인 프로젝트" 개념으로 더 오랫동안 관련 작업을 한 곳에서 관리할 수 있어요.

> 기술적으로 더 많은 제어가 필요하면: [에이전트 병렬 실행](https://code.claude.com/docs/en/agents), [Dynamic Workflows](https://code.claude.com/docs/en/workflows) 참조
