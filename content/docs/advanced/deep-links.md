---
title: "[공] 딥링크(Deep Link)로 Claude Code 세션 한 번에 열기"
description: "claude-cli:// URL을 클릭하면 지정한 저장소·프롬프트로 Claude Code 터미널이 바로 열리는 딥링크 기능 (v2.1.91+)"
tags: ["자동생성", "딥링크", "자동화", "런북", "URL스킴", "v2.1.91"]
category: "advanced"
order: 22
lastUpdated: "2026-05-04"
---

<div class="note-star">
★ <strong>Claude Code v2.1.91</strong> 이상에서 사용 가능해요.<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/deep-links">code.claude.com/docs/en/deep-links</a>
</div>

## 딥링크(Deep Link)란?

**URL 하나를 클릭하면, 내 컴퓨터에서 Claude Code 터미널이 자동으로 열리는 기능**이에요.

> 🔗 **비유로 설명하면**: 식당 메뉴판 QR코드를 찍으면 해당 메뉴 페이지가 바로 뜨는 것처럼요. `claude-cli://open?repo=…` 주소를 클릭하면, "이 저장소 폴더에서, 이 질문을 입력한 상태로" Claude Code 창이 짠! 열립니다. 직접 터미널을 열고, 폴더 이동하고, 타이핑하는 세 단계가 클릭 한 번으로 줄어드는 거예요.

---

## 어떤 상황에서 써요?

| 상황 | 딥링크 없이 | 딥링크 있으면 |
|------|------------|-------------|
| 장애 발생 — 서버 로그 조사 | 터미널 열고 → 폴더 이동 → 프롬프트 직접 작성 | 런북(Runbook) 링크 클릭 한 번으로 바로 조사 시작 |
| 신입 팀원 온보딩 | README 읽고 폴더 찾고 Claude 실행 | 준비된 링크 클릭 → 프롬프트 자동 입력 상태로 시작 |
| 모니터링 대시보드 이상 감지 | 알림 확인 → 수동 연결 | 대시보드 링크 클릭 → 해당 저장소에서 진단 시작 |
| CI 실패 알림 | 실패 로그 보고 → Claude에 복붙 | 알림 링크 클릭 → 실패 내용 프롬프트에 자동 입력 |

> 💡 딥링크는 **문서, Slack 메시지, 위키, 대시보드** 등 링크를 넣을 수 있는 곳 어디에나 심을 수 있어요.

---

## 작동 원리

```
브라우저/앱에서 클릭
  ↓
운영체제가 claude-cli:// 접두사 인식
  ↓
내 컴퓨터의 Claude Code 실행
  ↓
지정한 폴더에서 터미널 창 열림
  ↓
프롬프트 입력란에 텍스트 자동 입력 (전송 안 됨)
  ↓
사용자가 확인 후 Enter 눌러 실제 실행
```

> ⚠️ **중요**: 딥링크는 **프롬프트를 채워줄 뿐, 자동으로 실행하지 않아요**. 내용을 확인하고 직접 Enter를 눌러야 Claude가 답변을 시작합니다. 모르는 링크를 클릭해도 내 코드가 자동으로 바뀌지 않으니 안심하세요.

---

## 딥링크 만드는 법

### 기본 구조

```text
claude-cli://open?파라미터=값&파라미터=값
```

### 파라미터 3가지

| 파라미터 | 설명 | 예시 |
|---------|------|------|
| `q` | 프롬프트 상자에 미리 채울 텍스트 (최대 5,000자) | `q=버그%20조사해줘` |
| `cwd` | 열 폴더의 절대 경로 | `cwd=/Users/kim/myproject` |
| `repo` | GitHub 저장소 이름 (`소유자/이름` 형식) | `repo=myteam/api-server` |

> 💡 `cwd`와 `repo`를 둘 다 넣으면 **`cwd`가 우선**이에요. `repo`는 무시됩니다.

### 예시: 런북 링크

```text
claude-cli://open?repo=myteam/payments&q=결제%20서버%205xx%20에러%20발생.%20최근%2030분%20로그와%20배포%20이력%20확인해줘.
```

클릭하면:
- `myteam/payments` 저장소 폴더에서 Claude Code 열림
- 프롬프트에 "결제 서버 5xx 에러 발생. 최근 30분 로그와 배포 이력 확인해줘." 자동 입력
- Enter 눌러 조사 시작

> 📌 **URL 인코딩**: 한국어와 공백은 URL에 그대로 못 씁니다. 공백은 `%20`, 줄바꿈은 `%0A`로 바꾸거나 브라우저 콘솔에서 `encodeURIComponent("텍스트")` 명령으로 변환하세요.

---

## `cwd` vs `repo` — 뭘 쓰나요?

| | `cwd` (경로 지정) | `repo` (저장소 이름) |
|---|---|---|
| **언제** | 모든 팀원이 같은 경로 사용 (예: 공용 VM) | 각자 다른 위치에 클론한 경우 |
| **조건** | 해당 경로가 실제로 존재해야 함 | 내 컴퓨터에서 한 번이라도 `claude` 실행한 폴더여야 함 |
| **실패 시** | 홈 디렉토리에서 열림 | 홈 디렉토리에서 열림 |

> 🗂️ **`repo` 작동 방식**: Claude Code를 특정 Git 저장소 폴더에서 실행하면, 그 경로를 GitHub 저장소 이름과 연결해서 기억해요. 이후 딥링크가 오면, 가장 최근에 사용한 클론 폴더로 바로 이동합니다.

---

## 실전 예시

### 1. 문서(Markdown)에 링크 넣기

```markdown
## 결제 서버 장애 대응 런북

1. PagerDuty에서 알림 확인
2. [Claude Code로 바로 조사 시작](claude-cli://open?repo=myteam/payments&q=5xx%20에러%20조사%3A%20최근%20배포%2C%20에러%20로그%2C%20오픈%20이슈%20확인)
3. #incident 채널에 초기 분석 공유
```

> ⚠️ **GitHub README 주의**: GitHub은 `http://`와 `https://`만 허용해요. `claude-cli://`로 시작하는 링크는 클릭이 안 되고 텍스트만 보입니다. GitHub 외 위키나 사내 문서 도구에서 사용하세요. GitHub에서는 코드 블록으로 URL을 보여주고 복사해서 사용하도록 안내하세요.

### 2. 터미널 명령으로 열기

운영체제별로 딥링크를 직접 실행할 수 있어요.

**macOS (터미널)**
```bash
open "claude-cli://open?repo=myteam/api&q=최근%20커밋%20검토해줘"
```

**Linux (터미널)**
```bash
xdg-open "claude-cli://open?repo=myteam/api&q=최근%20커밋%20검토해줘"
```

**Windows (PowerShell)**
```powershell
Start-Process "claude-cli://open?repo=myteam/api&q=최근%20커밋%20검토해줘"
```

---

## 어떤 터미널이 열리나요?

딥링크 클릭 시, Claude Code는 설치된 터미널 에뮬레이터(터미널 앱)를 자동 감지해서 열어요.

| 운영체제 | 지원 터미널 |
|---------|-----------|
| macOS | 마지막으로 쓴 터미널 기억 (iTerm2, Ghostty, kitty, Alacritty, WezTerm, Terminal.app) |
| Linux | `$TERMINAL` 환경 변수 → `x-terminal-emulator` → 일반 에뮬레이터 순서로 탐색 |
| Windows | Windows Terminal → PowerShell → cmd.exe 순서 |

---

## 등록 위치 (자동 등록)

Claude Code를 처음 대화형(interactive)으로 실행하면, 운영체제에 `claude-cli://` 핸들러가 **자동으로 등록**됩니다. 별도 설치 명령어 필요 없어요.

| 운영체제 | 등록 위치 |
|---------|---------|
| macOS | `~/Applications/Claude Code URL Handler.app` |
| Linux | `~/.local/share/applications/claude-code-url-handler.desktop` |
| Windows | `HKEY_CURRENT_USER\Software\Classes\claude-cli` |

### 딥링크 등록 끄기 (비활성화)

보안 정책 등으로 등록을 막고 싶다면 `settings.json`에 추가하세요:

```json
{
  "disableDeepLinkRegistration": "disable"
}
```

팀 전체에 강제 적용하려면 [관리형 설정(Managed Settings)](/docs/advanced/server-managed-settings)에 넣으면 돼요.

---

## VS Code에서 열기

VS Code 확장(extension)은 별도 핸들러를 등록해요:

```text
vscode://anthropic.claude-code/open
```

터미널 창 대신 VS Code 에디터 탭이 열립니다. 파라미터는 공식 VS Code 문서를 확인하세요.

---

## 문제 해결

| 증상 | 원인 | 해결책 |
|------|------|--------|
| 클릭해도 아무것도 안 열려요 | 핸들러 미등록 상태 | `claude` 한 번 실행 후 재시도 |
| 홈 디렉토리에서 열려요 | `repo` 저장소를 Claude가 모름 | 해당 폴더에서 `claude` 한 번 실행 후 재시도 |
| 링크가 텍스트로만 보여요 | GitHub 등 일부 렌더러가 URL 차단 | 코드 블록으로 URL 표시 후 복사 안내 |
| 다른 터미널이 열려요 | 기본 터미널 설정 문제 | macOS: 원하는 터미널에서 `claude` 실행. Linux: `$TERMINAL` 환경변수 설정 |

---

## 함께 쓰면 좋은 기능

- **[Skills(슬래시 커맨드)](/docs/advanced/skill-evaluation)**: 자주 쓰는 긴 프롬프트를 `/skill`로 저장 → 딥링크의 `q`에 짧은 이름만 넣어도 됨
- **[Headless 모드](/docs/advanced/remote-control)**: 터미널 창 없이 스크립트에서 실행하고 결과만 받을 때
- **[Routines(루틴)](/docs/advanced/routines)**: 반복 작업은 루틴으로 설정 → 딥링크로 원클릭 트리거

---

> 📌 **요약**: `claude-cli://open?repo=저장소이름&q=질문` 형식의 URL을 런북이나 대시보드에 넣어두면, 팀원 누구나 클릭 한 번으로 올바른 저장소에서 준비된 질문으로 Claude Code를 시작할 수 있어요. 프롬프트는 자동 실행되지 않으니 확인 후 Enter를 누르면 됩니다.
