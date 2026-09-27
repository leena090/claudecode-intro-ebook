---
title: "[공] Claude Projects — 관련 작업들을 하나의 프로젝트로 묶어 관리하기"
description: "여러 코딩 세션을 한 프로젝트로 그룹화하고 병렬로 실행할 수 있어요. Claude Code Desktop + claude.ai 웹에서 공개 베타 중. 팀장처럼 Claude에게 여러 일을 동시에 맡기는 방법"
tags: ["자동생성", "Projects", "프로젝트", "병렬세션", "클라우드세션", "Pro", "Max", "공개베타"]
category: "codeweb"
order: 5
lastUpdated: "2026-09-27"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a>
<br />★ <strong>공개 베타</strong>: Pro · Max 플랜 대상, 단계적 출시 중. 사이드바에 <strong>Projects</strong>가 안 보이면 아직 내 계정에 미도달.
<br />★ Team · Enterprise 플랜엔 아직 미지원.
</div>

## Projects가 뭔가요?

**Projects(프로젝트)**는 관련된 여러 코딩 작업을 **하나의 대화 창에서 동시에** 관리하는 기능이에요.

이전에는 작업마다 새 세션을 만들어야 했는데, Projects에서는 Claude가 각 작업에 대해 **별도 스레드(thread, 쓰레드)**를 자동으로 열고 **병렬로 실행**해요.

> 🍱 **비유로 설명하면**: 팀장이 팀원 5명에게 각자 다른 일을 동시에 시키는 것처럼, Claude에게 "이 버그 고쳐줘", "저 기능 추가해줘", "테스트 코드 써줘"를 한 번에 맡기고, 모두 동시에 진행되는 걸 볼 수 있어요.

---

## 어떻게 작동하나요?

```
[내가 Projects 대화창에 작업 지시]
    ↓
[Claude가 각 작업에 대한 스레드 생성]
    ↓
[각 스레드 = 클라우드 세션 (Cloud Session)]
    ↓
[병렬 실행 + 모바일에서도 확인 가능]
```

### 스레드의 두 종류

| 스레드 종류 | 실행 위치 | 특징 |
|---|---|---|
| **클라우드 세션** (기본) | Anthropic 서버 | 노트북 닫아도 계속 실행 |
| **내 컴퓨터** (Remote Control) | 내 Mac/PC | 내 컴퓨터가 켜져 있어야 실행 |

대부분의 스레드는 클라우드 세션으로 돌아가요. 내 컴퓨터에만 있는 파일이나 로컬 서버가 필요한 경우에만 "내 컴퓨터 스레드"를 씁니다.

---

## 어디서 쓸 수 있나요?

- **claude.ai/code** (웹)
- **Claude Code Desktop** 앱 (사이드바에 Projects 탭)
- **모바일 앱**: 스레드 상태 확인 + 방향 수정 가능

> 💡 노트북을 닫고 자리를 비워도 클라우드 세션은 계속 작업 중이에요. 모바일 앱에서 진행 상황을 확인하고 필요하면 방향을 바꿔줄 수 있어요.

---

## 시작하는 방법

### 1. 내 계정에 출시됐는지 확인

- 웹: [claude.ai/code](https://claude.ai/code) 사이드바에 **Projects** 탭 확인
- 데스크톱: 앱 사이드바 **Code** 탭 → **Projects** 섹션 확인

없으면 아직 내 계정에 미도달. [대기자 신청](https://claude.com/form/projects)을 해두면 됩니다.

### 2. 새 프로젝트 만들기

Projects 탭에서 **New project** 클릭 → 프로젝트 이름 입력 → 첫 번째 대화창 오픈

### 3. Claude에게 여러 작업 지시

```
# 예시 1: 한 번에 여러 작업 지시
"이 레포지토리에서 다음 세 가지를 동시에 진행해줘:
1. checkout.ts의 이중 청구 버그 수정
2. payments 모듈 테스트 코드 작성  
3. README 업데이트"

# Claude가 세 개의 스레드를 열고 병렬 작업 시작
```

### 4. 진행 상황 모니터링

- 각 스레드 클릭 → 그 스레드의 대화 내용 확인
- 결정이 필요하면 Claude가 알림을 보내줘요
- 모바일에서도 같은 인터페이스로 확인 가능

---

## 유용한 상황 예시

| 상황 | Projects 활용법 |
|---|---|
| 버그 여러 개 동시에 수정 | 각 버그를 별도 스레드로 |
| 마이그레이션 + 테스트 작성 병행 | 마이그레이션 스레드 + 테스트 스레드 |
| 긴 리팩토링 중 다른 기능 작업 | 리팩토링 스레드 + 새 기능 스레드 |
| 회의 중 Claude에게 사전 작업 맡기기 | 회의 전에 시작 → 돌아와서 결과 확인 |

---

## 제약 사항 (공식 발표 기준)

- **플랜**: Pro · Max만 지원. Team · Enterprise는 미지원 (추후 출시 예정 추정)
- **단계적 출시**: 클라우드 세션 경험이 있고 claude.ai 채팅·Cowork에 기존 프로젝트가 없는 계정부터 먼저 출시
- **대안**: Projects가 없으면 [병렬 에이전트 실행](https://code.claude.com/docs/en/agents) 페이지 참고

---

## 현재 어디까지 왔나요?

Claude Code Desktop 앱과 claude.ai/code 마케팅 페이지에서 **Pinned 기능**으로 강조되고 있어요. 단계적으로 계정마다 활성화되는 중입니다 (2026-09-27 기준).

> 💬 **팁**: 대기자 신청을 해두면 출시 시 알림을 받을 수 있어요.
