---
title: "[공] Claude Code 주간 업데이트 — 2026년 18주차 (4/27 ~ 5/1)"
description: "브라우저 없이 로그인, 프로젝트 상태 완전 삭제, PR URL로 세션 복귀, Windows Git Bash 탈출 — v2.1.120→v2.1.126 핵심 기능 한국어 정리"
tags: ["자동생성", "주간업데이트", "whats-new", "2026-w18", "auth", "project-purge", "resume", "windows", "powershell"]
category: "next"
order: 4
lastUpdated: "2026-05-09"
---

<div class="note-star">

★ **출처** — Claude Code 공식 주간 업데이트 [Week 18](https://code.claude.com/docs/en/whats-new/2026-w18) `[공식]`  
★ **대상 버전** — v2.1.120 → v2.1.126 (2026년 4월 27일 ~ 5월 1일)  
★ **주요 테마** — 설치·로그인 장벽 낮추기 + 프로젝트 상태 관리 + 세션 복귀 편의성

</div>

---

## 이번 주 한 줄 요약

> "브라우저가 없어도, Git Bash가 없어도, 세션 이름을 기억 못해도 — 이제 다 됩니다."

---

## 🔐 브라우저 없이 로그인하기 (v2.1.126)

### 어떤 문제였나요?

클로드 코드를 처음 설치하면 `claude auth login` 명령어를 치고 **브라우저가 열리면서** 로그인을 완료해야 했어요. 그런데 이런 환경에서는 브라우저가 뜨지 않거나 콜백 주소(localhost)에 도달이 안 됩니다:

| 환경 | 왜 막히나 |
|---|---|
| **WSL2** (Windows 안의 Linux) | 포트가 Windows ↔ Linux 경계를 넘지 못함 |
| **SSH 원격 서버** | 서버엔 브라우저가 없음 |
| **Docker 컨테이너** | 격리된 환경이라 localhost 콜백 불가 |
| **IPv6 전용 devcontainer** | 구 인증 코드가 IPv6를 지원 안 함 |

> 🍱 **비유**: 주민센터 창구에 방문해야 발급되는 서류인데, 주민센터가 다른 나라에 있는 상황이에요.

### 이제 어떻게 되나요?

`claude auth login`을 실행하면 터미널 안에 **"여기에 코드를 붙여넣으세요"** 프롬프트가 나타나요.

1. 브라우저에서 Anthropic 로그인 → 나타나는 **OAuth 코드 복사**
2. 터미널로 돌아와서 **붙여넣기 (Ctrl+V)**
3. 완료!

```bash
claude auth login
# → "브라우저가 열립니다... 코드를 받으면 여기에 붙여넣으세요:"
# (코드 붙여넣기 후 Enter)
```

---

## 🗑️ 프로젝트 상태 완전 삭제 — `claude project purge` (v2.1.126)

### 이 명령어가 왜 필요해요?

클로드 코드를 쓰다 보면 각 프로젝트 폴더마다 **대화 기록, 태스크 내역, 파일 변경 이력, 설정** 같은 데이터가 쌓여요. 프로젝트를 정리하거나 용량을 줄이고 싶을 때 한 번에 지워주는 명령어가 바로 `claude project purge`예요.

> 🍱 **비유**: 퇴직한 직원의 책상을 정리하는 것과 같아요. 메모지, 파일, 개인 서랍 내용물을 깔끔하게 처분해야 다음 사람이 새 마음으로 시작할 수 있죠.

### 옵션 한눈에 보기

| 옵션 | 역할 |
|---|---|
| `--dry-run` | 실제로 지우지 않고 **지울 목록만 미리 보기** |
| `-y` 또는 `--yes` | 확인 질문 없이 바로 삭제 |
| `-i` 또는 `--interactive` | 항목별로 골라서 삭제 |
| `--all` | **모든 프로젝트** 상태 한꺼번에 삭제 |

### 사용 흐름

```bash
# 1단계: 무엇이 지워지는지 미리 확인
claude project purge --dry-run

# 2단계: 확인 후 실제 실행
claude project purge

# 또는: 확인 없이 즉시 삭제
claude project purge -y

# 전체 프로젝트 한꺼번에 비우기
claude project purge --all
```

---

## 🔁 PR URL로 세션 복귀하기 (v2.1.122)

### 어떤 상황에서 쓰나요?

클로드 코드로 작업하다가 **풀 리퀘스트(PR)를 만들었는데**, 며칠 뒤 "그 PR 만들 때 세션 이름이 뭐였지?" 싶을 때가 있어요. 세션 이름 없이 **PR 링크 하나로** 그 세션으로 바로 돌아갈 수 있게 됐어요.

> 🍱 **비유**: 영수증 번호만 있으면 그 날 주문한 내역을 다시 불러오는 것과 같아요.

### 사용 방법

**방법 1 — `/resume` 세션 선택창에서 붙여넣기**

```
> /resume
(세션 목록이 열리면)
https://github.com/내-조직/내-저장소/pull/1234
↑ 붙여넣는 순간 검색 모드로 전환 → 해당 PR이 포함된 세션으로 필터링 → Enter
```

**방법 2 — 명령줄에서 바로**

```bash
claude --from-pr 1234
```

### 지원 플랫폼

| 플랫폼 | 지원 |
|---|---|
| GitHub | ✅ PR URL |
| GitHub Enterprise | ✅ PR URL |
| GitLab | ✅ Merge Request URL |
| Bitbucket | ✅ PR URL |

---

## 🪟 Windows에서 Git Bash 없이 실행 (v2.1.126)

### 기존 불편함

Windows에서 클로드 코드를 쓰려면 **Git for Windows**(Git Bash 포함)를 반드시 설치해야 했어요.

### 이제는?

**Git Bash가 없어도 PowerShell로 자동 전환**돼요.

- Git Bash가 없으면 → PowerShell을 기본 셸로 사용
- PowerShell 7이 다양한 방식으로 설치돼 있어도 자동 감지
  - Microsoft Store 설치본
  - MSI 설치본 (PATH 미등록 상태)
  - `.NET` 글로벌 도구로 설치된 것

> 🍱 **비유**: 도어락 비밀번호가 없어도 카드키로 열 수 있게 된 것이에요. 열쇠가 여러 개 생겼어요.

---

## 📦 이번 주 기타 업그레이드 모음

| 기능 | 내용 |
|---|---|
| **MCP `alwaysLoad: true`** | MCP 서버 설정에 이 옵션을 넣으면 해당 서버의 도구들이 항상 즉시 로드됨 (지연 없음) |
| **`claude plugin prune`** | 자동 설치됐다가 더 이상 안 쓰는 플러그인 의존성 정리 |
| **`/skills` 검색 필터** | 스킬 목록이 길어도 타이핑으로 바로 찾기 |
| **`PostToolUse` 훅 확장** | 어떤 도구의 출력이든 `hookSpecificOutput.updatedToolOutput`으로 덮어쓸 수 있음 |
| **`claude ultrareview` 서브커맨드** | `/ultrareview`를 CI나 스크립트에서 비인터랙티브로 실행; `--json`으로 원시 출력 |
| **게이트웨이 모델 자동 탐색** | `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` 설정 시 `/v1/models` 엔드포인트에서 모델 목록 자동 조회 |
| **MCP 자동 재시도** | 일시적 오류로 MCP 서버 연결 실패 시 최대 3회 자동 재시도 |
| **Bedrock 서비스 티어** | `ANTHROPIC_BEDROCK_SERVICE_TIER` 환경변수로 `default` / `flex` / `priority` 선택 가능 |
| **`/terminal-setup`** | iTerm2 클립보드 접근 설정 자동 활성화 → `/copy`가 tmux 안에서도 작동 |
| **메모리 누수 수정** | 이미지 많은 세션, `/usage` 대량 기록, 진행 이벤트 없는 장시간 도구 실행 시 메모리 누수 해결 |

---

## 📌 업그레이드 방법

```bash
# npm으로 설치한 경우
npm update -g @anthropic-ai/claude-code

# 또는 인스톨 스크립트 재실행 (macOS/Linux)
curl -fsSL https://claude.ai/install.sh | bash
```

전체 변경 내역 → [공식 Changelog v2.1.120–v2.1.126](https://code.claude.com/docs/en/changelog#2-1-120)
