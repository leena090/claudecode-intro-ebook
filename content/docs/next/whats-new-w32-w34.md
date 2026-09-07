---
title: "[공] Claude Code 주간 업데이트 W32~W34 (2026년 8월)"
description: "세션 간 메시징, 자체 호스팅 환경, Auto Mode 기본 전환, /design 스킬, Concise 출력 스타일, 원격 제어 모바일 시작 — 2026년 8월 주요 업데이트"
tags: ["자동생성", "주간업데이트", "세션메시징", "자체호스팅", "AutoMode", "design스킬", "Concise", "원격제어"]
category: "next"
order: 19
lastUpdated: "2026-09-07"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> W32~W34 내용을 한국어로 정리한 것입니다.
<br />★ W32: 8/3~7 | W33: 8/10~14 | W34: 8/17~21
<br />★ 참고: W31(7/27~8/1)은 공식 What's New 목록에서 생략됐어요 (작은 유지보수 주간으로 추정).
</div>

## 한 눈에 보는 3주 핵심

| 주차 | 기간 | 핵심 기능 |
|---|---|---|
| **W32** | 8/3~7 | 세션 간 메시징, 자체 호스팅 환경, Auto Mode 기본 전환 |
| **W33** | 8/10~14 | 사용 한도 도달 후 자동 재개, Fork Mode 기본화, GitLab MR 지원 |
| **W34** | 8/17~21 | `/design` 스킬 출시, Concise 출력 스타일, 모바일에서 세션 시작 |

---

## W32 · 8월 3~7일 — 세션이 서로 대화하고, 내 서버에서 돌린다

### 💬 세션 간 메시징(Cross-Session Messaging) — v2.1.224

**같은 기기에서 실행 중인 Claude Code 세션들이 서로 메시지를 보낼 수 있어요.**

> 🏢 **비유로 설명하면**: 한 사무실에 있는 직원들이 서로 메모를 주고받는 것처럼, 각각 다른 작업을 하던 Claude 세션들이 "저쪽 세션한테 이거 전달해줘"라고 하면 자동으로 전달돼요. 파일이나 대화 내용이 아니라 **Claude가 쓴 메시지**만 전달돼요.

```bash
# 세션 1에서 — 다른 세션에 알리기
Tell the session working on the payments API that users.name is now users.display_name

# 현재 연결 가능한 세션 확인
/list-agents
```

- 메시지 수신 시 대화창에 `Message from` 행 표시, `Ctrl+O`로 펼쳐 보기
- macOS / Linux 지원 (Windows는 W34에서 추가됨)
- v2.1.224 이상 필요

### 🏠 자체 호스팅 환경(Self-Hosted Environments) — v2.1.224

**Team/Enterprise 플랜 사용자가 Claude Code 클라우드 세션을 자기 서버에서 돌릴 수 있어요.**

> 🏭 **비유로 설명하면**: 클라우드 세션을 여태까지 Anthropic 서버 식당에서 밥 먹었다면, 이제는 **내 회사 구내식당에서 같은 메뉴를 요리**할 수 있어요. 회사 내부 서비스나 데이터에 바로 접근할 수 있고 외부로 데이터가 나가지 않아요.

```bash
# 자체 호스팅 환경 설정 시작 (Owner 계정)
claude self-hosted-runner setup
# → 안내에 따라 환경 생성 + 러너 시작
# → 관리자 설정에서 'Healthy' 상태 확인
```

- Team/Enterprise 플랜 퍼블릭 베타
- Owner가 관리자 설정에서 "Allow self-hosted environments" 먼저 활성화
- 사용자가 세션 시작 시 환경 선택 → 해당 서버에서 실행

### ⚡ Auto Mode가 기본 허가 모드로 전환 — 8월 14일부터

**2026년 8월 14일부터 Pro, Max, Team 플랜에서 새 세션의 기본 허가 모드가 Auto Mode로 변경됐어요.**

> 🚦 **비유로 설명하면**: 이전엔 Claude가 파일을 고칠 때마다 "이렇게 해도 될까요?" 물어보는 신입 사원이었다면, 이제는 **업무 범위 안에서는 알아서 처리하고 결과만 보고**하는 숙련 사원이에요.

```json
// 미리 Auto Mode로 설정하려면 (~/.claude/settings.json)
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

- 이미 직접 기본 모드를 설정한 경우: 한 번 전환 프롬프트 표시, 거부하면 유지
- 조직에서 관리하는 기본 모드는 변경 안 됨
- Auto Mode 분류기 요청이 사용 한도에 포함되지 않음

### W32 기타 개선

| 기능 | 설명 |
|---|---|
| VS Code Focus View | 도구 활동을 접히는 행으로 숨김, `Ctrl+Alt+F` 토글 |
| 서브에이전트 200개 제한 제거 | 장시간 세션에서 서브에이전트 무한 생성 가능 (동시 실행 제한은 유지) |
| `/fork` 워크트리 격리 | 포크된 세션이 원본 대신 별도 워크트리에서 코드 변경 |
| Ultraplan 제거 | `/ultraplan` 명령어 및 키워드 삭제, Plan Mode 또는 웹 버전으로 대체 |
| 샌드박스 자격증명 마스킹 | Linux/WSL2에서 `mode: "mask"` 지원 |

---

## W33 · 8월 10~14일 — 한도 도달 후 자동 재개 + GitLab 지원

### ⏰ 사용 한도 도달 후 자동 재개 — Desktop

**Desktop 앱에서 세션 한도에 도달했을 때 한도 초기화 후 자동으로 작업을 재개해요.**

> ⏸️ **비유로 설명하면**: 인쇄기가 용지를 다 쓰고 멈췄을 때, 용지를 보충하면 자동으로 다시 인쇄를 시작하는 것과 같아요. 자리를 비워도 세션이 자동으로 이어져요.

- Desktop의 Code 탭에서 한도 카드에 **"Auto-continue when limits reset"** 체크박스 생성
- 주간 한도 카드는 자동 재개 미지원
- 한도 초기화 시각 카드에 표시

### 🔀 Fork Mode 기본 활성화 — v2.1.232

서브에이전트 실행 시 **기존 대화와 프롬프트 캐시를 이어받는 Fork Mode가 기본으로 켜졌어요.**

> 💾 **비유로 설명하면**: 지금까지 서브에이전트를 새로 시작하면 빈 종이에서 시작했다면, 이제는 **내가 쓰던 노트를 복사해서 전달**하는 거예요. 컨텍스트를 다시 설명하지 않아도 돼요.

```bash
# 직접 포크 서브태스크 시작
/subtask draft unit tests for the parser changes so far
```

- 끄려면: `CLAUDE_CODE_FORK_SUBAGENT=0` 설정
- 인터랙티브 세션 서브에이전트도 기본 백그라운드 실행

### 🦊 GitLab MR 지원 — v2.1.232+

```bash
# GitLab 머지 리퀘스트에서 워크트리 시작
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```

- 플러그인 마켓플레이스에서 `gitlab.com` URL 직접 사용
- 하단 상태 바에 `!N` 배지 표시
- GitLab 토큰(`glpat-`, `glrt-`) 자동 마스킹

### W33 기타 개선

| 기능 | 설명 |
|---|---|
| `@세션이름` 멘션 | 프롬프트에서 `@payments-api` 처럼 직접 세션 멘션 → 자동 메시지 전달 |
| Task 도구 제거 | Opus 4.8 이상 모델에서 TaskCreate/TodoWrite 등 기본 비활성, `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`로 재활성 |
| `/code-review` 개선 | 모든 레벨(low~max)이 백그라운드 에이전트로 실행 |

---

## W34 · 8월 17~21일 — `/design` + Concise + 모바일에서 세션 시작

### 🎨 `/design` 스킬 — 리서치 프리뷰

**CLI와 Desktop 앱에서 UI 아트보드 초안을 생성하는 `/design` 스킬이 출시됐어요.**

> 🖼️ **비유로 설명하면**: "이런 화면을 만들어줘"라고 말하면 Claude가 **여러 가지 디자인 시안을 카드 형태로 펼쳐주는** 거예요. 마음에 드는 시안을 골라 "이걸로 구현해줘"라고 하면 바로 코드로 만들어줘요.

```bash
# 사용 예시
/design redesign the composer based on what people actually use it for
# → 아트보드 캔버스 링크 출력
# → 링크 열어서 원하는 시안 선택
# → "이 시안으로 구현해줘"
```

- 아티팩트(Artifacts) 기반
- Pro, Max, Team, Enterprise 플랜
- v2.1.234 이상 필요

### ✂️ Concise 출력 스타일 — v2.1.237

**결론부터 말하고 불필요한 서문·설명을 생략하는 새 내장 출력 스타일이에요.**

> 🎯 **비유로 설명하면**: "결론만 말해줘" 스타일이에요. 답은 완전하게 주면서 "안녕하세요, 말씀하신 것처럼..." 같은 인사말은 빼줘요.

```json
// ~/.claude/settings.json 에 설정
{
  "outputStyle": "Concise"
}
```

또는 `/config` → **Output style** → `Concise` 선택, `/clear` 또는 새 세션으로 적용

- 에러 보고, 보안 경고, 파괴적 명령 확인 등은 항상 완전한 내용 유지
- 직접 설명 요청 시에는 상세하게 답변

### 📱 모바일에서 내 기기에 세션 시작 — Remote Control GA

**Claude 모바일 앱 Code 탭에서 내 맥/PC의 Claude Code 세션을 직접 시작할 수 있어요.**

> 🎮 **비유로 설명하면**: 집에 있는 TV를 스마트폰 리모컨으로 켜는 것처럼, 폰에서 버튼 하나로 내 노트북의 Claude Code를 깨울 수 있어요.

```bash
# 내 기기에서 Remote Control 시작
claude remote-control
# → 모바일 앱 Code 탭 상단에 기기 카드 표시
```

- Remote Control이 **리서치 프리뷰 졸업**, GA(정식 출시) 전환
- 폰에서 디렉토리를 선택해 세션 시작 가능
- 폰에서 **노력 레벨(effort level)** 변경 시 기기 세션에 즉시 적용

### W34 기타 개선

| 기능 | 설명 |
|---|---|
| 자동 재개 (CLI) | claude.ai 사용 한도 초기화 시 세션 자동 재개, `/config`에서 끄기 가능 |
| 맞춤법 검사 | `spellcheck` 설정으로 프롬프트 입력 시 밑줄 표시 (aspell/hunspell/ispell 필요) |
| GitLab MR 배지 | `glab auth login` 인증 시 하단 바에 `MR !N` 배지 표시 |
| 내 프롬프트 마크다운 | 내가 입력한 프롬프트도 응답처럼 마크다운 렌더링 |
| `ANTHROPIC_DEFAULT_MODEL` | 새 세션 시작 모델 환경변수로 설정 가능 |
| `keybindingFlavor: "readline"` | `Ctrl+W`가 Bash처럼 공백 기준으로 삭제 |
| Windows 세션 메시징 | Windows에서도 `SendMessage`/`ListAgents` 지원 (macOS/Linux와 동일) |
| Self-hosted `--defer-shutdown-max-min` | SIGTERM 수신 후 N분간 세션 유지 |

---

## 📚 관련 문서

- [세션 간 메시징 가이드](https://code.claude.com/docs/en/cross-session-messaging)
- [자체 호스팅 환경 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [Auto Mode 설정](https://code.claude.com/docs/en/permission-modes)
- [출력 스타일 설정](https://code.claude.com/docs/en/output-styles)
- [Remote Control](https://code.claude.com/docs/en/remote-control)
