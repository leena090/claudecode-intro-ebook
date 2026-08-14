---
title: "[공] Claude Code 주간 업데이트 W30·W32 (2026년 7~8월)"
description: "Opus 5 출시, iOS 시뮬레이터, 세션 간 메시지, 자체 호스팅 환경, Auto Mode 기본값 전환 등 2026년 7~8월 주요 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "Opus5", "iOS시뮬레이터", "크로스세션", "AutoMode", "자체호스팅"]
category: "next"
order: 18
lastUpdated: "2026-08-14"
---

<div class="note-star">
★ W30 (2026-07-20~07-24): <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a> [공]<br />
★ W32 (2026-08-03~08-07): <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a> [공]<br />
★ W31은 공식 미게시 — 이번 정리에서 제외
</div>

## 2주치를 한번에 — W30 + W32 핵심 정리

> 📌 W31은 공식 발표 없었습니다. W30(7월 4주차)과 W32(8월 2주차)의 주요 업데이트를 정리했어요.

---

## 🗓️ W30 (2026년 7월 20~24일)

### 1️⃣ Claude Opus 5 출시 🆕

- **Opus 5가 새 기본 Opus 모델**로 교체됐어요 (Opus 4.8 대비 성능 향상)
- **1M 토큰** 컨텍스트 (Anthropic API·구독 플랜 기준)
- Fast Mode(패스트 모드) → Opus 5 적용, **가격 $10/$50 per MTok** (이전 $30/$150에서 인하!)
- 적용 버전: **v2.1.219 이상**

```text
> /model claude-opus-5
```

> 상세 내용: [Claude Opus 5 출시](./claude-opus-5.md) 문서 참조

---

### 2️⃣ Claude Code Desktop에 iOS 시뮬레이터 패인 추가 🍎

- **macOS 전용** 데스크톱 앱에서 **아이폰 앱 화면을 실시간으로 보면서** Claude와 함께 작업 가능
- 앱 빌드·실행·검사 시 시뮬레이터 패인(pane)이 대화 옆에 자동 열림
- 앱 화면을 스트리밍으로 보여줘서 "Claude가 앱을 탭하는 걸" 직접 확인 가능

> 📱 **비유**: 마치 원격 화면 공유처럼, 클로드가 아이폰 앱을 테스트하는 걸 내 Mac 화면에서 실시간으로 볼 수 있어요.

**필요 조건:**
- macOS + Xcode (iOS 플랫폼 설치 완료)
- Claude Desktop **v1.24012.0 이상**
- Pro/Max/Team 플랜 (공개 베타)

```text
> Build the app and run it in the simulator to check the onboarding flow.
```

공식 문서: [code.claude.com/docs/en/desktop-ios-simulator](https://code.claude.com/docs/en/desktop-ios-simulator) [공]

---

### 3️⃣ Claude Security 플러그인 출시 🔒

- **멀티 에이전트** 방식으로 코드베이스 취약점 자동 스캔
- 동작 방식: 아키텍처 분석 → 위협 모델 수립 → 취약점 탐색 → 독립 검토 → 보고서 생성
- 결과 파일은 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장
- 전체 저장소 또는 브랜치 diff·PR·단일 커밋만 선택적으로 스캔 가능

```text
> /plugin install claude-security@claude-plugins-official
> /reload-plugins
> /claude-security
```

---

### 기타 W30 업데이트

| 변경 사항 | 내용 |
|----------|------|
| `/code-review` | 별도 컨텍스트 창에서 백그라운드 서브에이전트로 실행 |
| `/verify`, `/code-review`, `/deep-research` | 직접 호출할 때만 실행 (Claude가 자동 실행 안 함) |
| 이모지 자동완성 | `:heart:` 입력 시 😂 자동변환, `emojiCompletionEnabled`로 끄기 가능 |
| 서브에이전트 동시 실행 | 기본 20개 동시 실행 (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 환경변수로 조절) |
| Fast Mode | Opus 4.7 지원 완전 종료 (Opus 5·Opus 4.8만 지원) |
| 긴 도구 호출 | 주기적 진행 상황 알림 추가 (조용히 멈춰있던 문제 해결) |

---

## 🗓️ W32 (2026년 8월 3~7일)

### 1️⃣ 세션 간 메시지 전달 (Cross-Session Messaging) 💬

- 열려 있는 **여러 Claude Code 세션이 서로 메시지**를 주고받을 수 있어요!
- Claude가 `ListAgents` 도구로 다른 세션을 찾고, `SendMessage`로 메시지 전달
- 예: A 세션에서 수정한 내용이 B 세션 작업에 영향을 미칠 때 자동으로 알림 전달 가능
- macOS·Linux 지원, **v2.1.224 이상**

> 👥 **비유**: 여러 분이 각자 다른 방에서 개발하다가, 한 분이 "users.name이 users.display_name으로 바뀌었어요!" 하고 다른 방에 메시지를 보내는 것처럼요.

```text
> Tell the session working on the payments API that users.name is now users.display_name
```

세션 목록 확인: `/list-agents` 명령어 사용. 메시지 수신 시 `Ctrl+O`로 펼쳐보기.

상세 내용: [세션 간 메시지 전달](../advanced/cross-session-messaging.md) 문서 참조

---

### 2️⃣ 자체 호스팅 환경 (Self-Hosted Environments) 🏢

- **내 회사 서버**에서 Claude Code 클라우드 세션을 실행할 수 있어요 (Team/Enterprise 베타)
- 내부 네트워크 서비스·개발 환경에 Claude가 직접 접근 가능
- 설정 방법: 서버(또는 컨테이너)에서 `claude self-hosted-runner` 실행

> 🏠 **비유**: 보통은 Claude가 Anthropic의 원격 서버에서 작업하는데, 이 기능을 쓰면 **내 회사 건물 안에 있는 서버에서** 일하게 할 수 있어요. 내부 시스템에도 자유롭게 접근 가능하죠.

```bash
claude self-hosted-runner setup
```

admin 설정에서 **Allow self-hosted environments** 활성화 필요.

상세 내용: [자체 호스팅 환경](../advanced/self-hosted-environments.md) 문서 참조

---

### 3️⃣ Auto Mode가 기본값으로 변경! ⚡ (2026년 8월 14일부터)

> ⚠️ **오늘(2026-08-14)부터 적용!** Pro, Max, Team 플랜의 **새 세션 기본값이 Auto Mode**가 됩니다.

- 이미 기본 모드를 직접 설정했다면 → 그대로 유지됨 (한 번 전환 안내 메시지 표시)
- 조직 관리자가 설정한 기본값 → 변경 없음
- 언제든지 모드 전환 가능

직접 설정하려면:
```json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

> 💡 **Auto Mode란?** AI가 파일 수정·명령 실행 등을 자동으로 진행하되, 위험한 작업은 AI 분류기(classifier)가 판단하는 모드예요. 매번 허락을 물어보지 않아도 돼서 작업 속도가 올라가요.

---

### 기타 W32 업데이트

| 변경 사항 | 내용 |
|----------|------|
| VS Code 포커스 뷰(Focus view) | 도구 활동을 한 행으로 접어두는 기능 (Ctrl+Alt+F) |
| `/review` 명령어 | `/code-review`의 별칭으로 추가 |
| `/fork` 세션 | 별도 워크트리(worktree)에서 코드 변경 (기존 체크아웃에 영향 안 줌) |
| 플러그인 즉시 활성화 | `/plugin` 설치 후 안전한 경우 현재 세션에서 즉시 사용 가능 |
| 서브에이전트 200개 한도 제거 | 장기 실행 세션에서 더 많은 서브에이전트 실행 가능 |
| 워크트리 격리 강화 | Bash 명령어·git 리디렉션도 메인 체크아웃 접근 차단 |
| **Ultraplan 제거** | `/ultraplan` 명령어 및 `ultraplan` 키워드 공식 삭제 (플랜 모드 또는 웹 사용) |

> ⚠️ `/ultraplan` 명령어가 삭제됐어요. 대신 **플랜 모드** (Shift+Tab 2회) 또는 **claude.ai/code 웹**을 사용하세요.

---

## 빠른 정리표

| 주차 | 버전 | 핵심 기능 |
|------|------|----------|
| W30 | v2.1.214~219 | Opus 5 출시, iOS 시뮬레이터, Claude Security 플러그인 |
| W32 | v2.1.220~224 | 세션 간 메시지, 자체 호스팅 환경, Auto Mode 기본값 |
