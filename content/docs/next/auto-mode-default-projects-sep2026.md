---
title: "[공] Auto mode 기본값 전환 + Projects 신기능 (2026년 9월)"
description: "Pro·Max·Team 플랜에서 Auto mode가 기본값으로 바뀌었어요. 관련 코딩 세션을 묶어 관리하는 Projects 기능도 Desktop에 추가됐습니다"
tags: ["자동생성", "auto-mode", "오토모드", "기본값", "Projects", "신기능", "self-hosted"]
category: "next"
order: 18
lastUpdated: "2026-10-01"
---

<div class="note-star">
★ <strong>[공]</strong> Auto mode 기본값 발표: 마케팅 페이지 (Sep 17, 2026)<br />
★ <strong>[공]</strong> Projects 기능: 마케팅 페이지 최신 기능 하이라이트 (2026-10-01 기준)<br />
★ <strong>[공]</strong> Self-hosted environments: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Aug 7, 2026 공개 베타)
</div>

## Auto mode가 기본값으로 바뀌었어요 ⭐

### 무슨 변화인가요?

2026년 9월 17일, Anthropic이 공식 발표했어요:

> "Claude Code가 이제 Pro, Max, Team 플랜에서 **Auto mode를 기본값으로** 실행합니다. 위험한 명령어는 계속 감지하면서 더 오래, 더 자율적으로 작동할 수 있어요." — Anthropic 공식 발표 (2026-09-17)

### Auto mode가 뭔가요?

Auto mode는 Claude Code가 **사용자의 승인 없이 스스로 작업을 진행**하는 모드예요. 단, 안전 분류기(safety classifier)가 뒤에서 항상 감시합니다.

> 🍱 **비유로 설명하면**: 인턴이 일을 배우면서 처음엔 뭐든 물어봤다면, 이제는 **숙련된 직원처럼 알아서 진행하되, 큰 결정 전엔 여전히 확인**하는 방식으로 바뀐 거예요.

### 이전 vs 이후

| 항목 | 이전 | 이후 |
|---|---|---|
| **기본 모드** | default (매번 확인) | **auto (자동 진행)** |
| **안전 체크** | 사용자가 직접 확인 | 안전 분류기가 자동 감시 |
| **대상 플랜** | - | Pro · Max · Team |
| **긴 작업** | 자주 중단됨 | 더 오래 연속으로 실행 |

### 기존 설정은 어떻게 되나요?

<div class="note-star">
★ 이미 특정 permission mode를 설정해두셨다면 <strong>기존 설정이 그대로 유지</strong>됩니다.<br />
★ 아무 설정도 안 하신 분들만 Auto mode로 자동 전환됩니다.
</div>

### Auto mode 되돌리기

Auto mode가 불편하다면 이전 방식으로 돌아갈 수 있어요:

```bash
# 세션에서 Shift+Tab으로 순환
# default → acceptEdits → plan → auto

# 또는 설정 파일에서 직접 변경
# CLAUDE.md 또는 settings.json에서 permissionMode 설정
```

---

## Projects — 관련 세션을 한 곳에서 관리

### 무엇인가요?

**Projects**는 관련된 코딩 세션들을 하나의 그룹으로 묶어서 관리하는 새 기능이에요. Claude Code Desktop에서 사용 가능합니다.

> "관련 코딩 세션을 묶어서 여러 Claude 에이전트를 동시에 실행하고 쉽게 감독할 수 있어요." — Anthropic 마케팅 페이지 (2026-10-01 기준)

> 🍱 **비유로 설명하면**: 지금까지 작업마다 각각 폴더를 만들었다면, 이제는 **하나의 큰 프로젝트 폴더 아래 관련 작업들을 정리**할 수 있게 된 거예요. 마치 회사에서 프로젝트별로 팀을 묶는 것처럼요.

### 주요 특징

| 기능 | 설명 |
|---|---|
| **세션 그룹화** | 관련 코딩 세션들을 하나의 Projects로 묶음 |
| **동시 감독** | 여러 에이전트를 한 화면에서 감시·관리 |
| **Desktop 전용** | Claude Code Desktop 앱에서 사용 |

### 언제 유용한가요?

| 상황 | Projects 활용 예시 |
|---|---|
| 프론트엔드 + 백엔드 동시 작업 | 두 세션을 하나의 Project로 묶기 |
| 기능 브랜치별 관리 | 각 기능 개발 세션을 Project로 구분 |
| 팀 협업 감독 | 여러 팀원의 Claude 세션 한 곳에서 모니터링 |

<div class="note-star">
★ Projects는 Claude Code Desktop에서 사용 가능합니다. 터미널 전용 CLI는 해당 안 됩니다.<br />
★ 세부 기능 및 인터페이스는 공식 발표 기준 정보이며, 실제 화면은 다를 수 있습니다.
</div>

---

## Self-hosted environments — 공개 베타 시작

### 무엇인가요?

2026년 8월 7일, **Self-hosted environments**가 공개 베타로 출시됐어요.

> "내부 네트워크 안에서, 내부 서비스 옆에서 Claude Code 세션을 자체 인프라에서 실행할 수 있어요." — Anthropic 공식 발표 (Aug 7, 2026)

> 🍱 **비유로 설명하면**: 지금까지 Claude Code는 반드시 Anthropic 서버에 연결해야 했다면, 이제는 **우리 회사 서버에서 직접 Claude Code를 돌릴 수 있게** 된 거예요. 보안이 중요한 기업에 매우 중요한 기능이에요.

### 기업 사용자를 위한 주요 장점

| 항목 | 설명 |
|---|---|
| **데이터 보안** | 코드가 외부 서버에 전송되지 않음 |
| **내부 서비스 연동** | 내부 API, DB, 시스템에 직접 접근 |
| **규정 준수** | 데이터 유출 없이 보안 규정 충족 |
| **네트워크 제어** | 인터넷 없는 내부 환경에서도 실행 가능 |

<div class="note-star">
★ Self-hosted environments는 현재 공개 베타 단계입니다 (Aug 7, 2026 기준).<br />
★ 엔터프라이즈·Team 플랜 대상. 자세한 설정은 공식 문서를 참고하세요: <a href="https://code.claude.com/docs/en/sandbox-environments">code.claude.com/docs/en/sandbox-environments</a>
</div>

---

## 한 눈에 정리

| 기능 | 날짜 | 대상 |
|---|---|---|
| **Auto mode 기본값 전환** | Sep 17, 2026 | Pro·Max·Team 플랜 |
| **Projects** | ~ 2026-10-01 | Desktop 사용자 |
| **Self-hosted environments** | Aug 7, 2026 | 기업·Team 플랜 (공개 베타) |

---

<div class="note-star">
★ Auto mode 기본값 발표: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 마케팅 페이지 (Sep 17, 2026)<br />
★ Projects 기능: 마케팅 페이지 최신 기능 하이라이트 (2026-10-01 기준)<br />
★ Self-hosted 공식 문서: <a href="https://code.claude.com/docs/en/sandbox-environments">code.claude.com/docs/en/sandbox-environments</a>
</div>
