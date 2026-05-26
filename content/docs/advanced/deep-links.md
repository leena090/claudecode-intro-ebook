---
title: "[공] 딥링크(Deep Link) — 링크 하나로 Claude Code 세션 바로 열기"
description: "claude-cli:// URL로 특정 프로젝트와 프롬프트가 미리 입력된 Claude Code 세션을 링크 하나로 열 수 있어요 (v2.1.91+)"
tags: ["자동생성", "딥링크", "deep-link", "자동화", "runbook", "URL", "v2.1.91"]
category: "advanced"
order: 22
lastUpdated: "2026-05-05"
---

<div class="note-star">
★ <strong>Claude Code v2.1.91</strong> 이상에서 사용 가능한 기능이에요.<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/deep-links">code.claude.com/docs/en/deep-links</a>
</div>

## 딥링크란?

**클릭 하나로 특정 프로젝트·특정 지시가 미리 준비된 Claude Code 세션을 여는 특별한 URL**이에요.

> 🔗 **비유로 설명하면**: 카페 앱에서 QR 코드를 찍으면 내가 자주 주문하는 음료 주문 화면이 바로 열리는 것처럼요. `claude-cli://` 링크를 클릭하면 "이 폴더에서, 이 지시문으로" 세션이 즉시 열려요. 주소 창에 타이핑하거나 폴더 찾아갈 필요 없이요.

딥링크는 `claude-cli://open` 으로 시작하는 URL이에요. 이 URL은 어디든 붙여넣을 수 있어요:

| 어디에 붙여넣나요? | 어떻게 활용해요? |
|-------------------|--------------------|
| 장애 대응 가이드 (런북) | 경보 발생 → 클릭 → 관련 프로젝트에서 원인 조사 시작 |
| 모니터링 대시보드 | 이상 지표 클릭 → 해당 서비스 코드에서 바로 분석 |
| 프로젝트 README | 신규 팀원이 클릭 → 온보딩 안내 프롬프트 자동 입력 |
| Slack 메시지 | CI 실패 알림 → 클릭 → 실패한 테스트명 미리 입력 |

---

## 어떻게 작동하나요?

1. 링크를 클릭하면 OS(운영체제)가 `claude-cli://` 접두사를 인식해요
2. Claude Code가 새 터미널 창에서 열려요
3. 링크가 지정한 폴더에서, 링크에 적힌 지시문이 입력 칸에 미리 채워져 있어요
4. **자동으로 실행되지 않아요** — 내가 확인하고 Enter를 눌러야 해요

> 🛡️ **안전 설계**: 링크가 악의적인 내용을 담고 있어도, 직접 Enter를 누르기 전까지는 아무것도 실행되지 않아요. 1,000자 이상의 긴 프롬프트는 "꼭 내용 확인 후 전송하세요"라는 안내 배너도 뜨고요.

---

## 링크 만드는 법

기본 형식은 아래와 같아요:

```text
claude-cli://open
```

여기에 파라미터(매개변수)를 붙여서 세부 설정을 해요:

| 파라미터 | 설명 |
|---------|------|
| `q` | 입력 칸에 미리 채울 지시문 텍스트. URL 인코딩 필요 (한글·특수문자 변환). 줄바꿈은 `%0A`. 최대 5,000자. |
| `cwd` | 절대 경로로 시작 폴더 지정. 예: `/Users/kim/myproject` |
| `repo` | GitHub 저장소 슬러그. 예: `honggildong/my-shop`. 내 컴퓨터에 클론된 경로를 자동으로 찾아줘요. |

`cwd`와 `repo` 두 가지 모두 쓰면 `cwd`가 우선이에요.

### `cwd` vs `repo` — 뭘 써야 해요?

| 상황 | 추천 파라미터 |
|------|-------------|
| 팀원 모두 같은 경로에 프로젝트가 있어요 (회사 표준 개발환경, devcontainer) | `cwd` |
| 팀원마다 프로젝트 위치가 달라요 (각자 다른 곳에 클론) | `repo` |

`repo`를 쓰면 Claude Code가 가장 최근에 `claude` 명령어를 실행했던 클론 경로를 자동으로 찾아줘요.

---

## 실전 예시

### 예시 1 — 장애 대응 런북에 넣기

장애가 났을 때 팀원이 관련 저장소를 바로 열 수 있도록 런북에 링크를 넣어요.

```markdown
## 결제 서버 5xx 오류 대응

1. PagerDuty(페이저듀티)에서 경보를 확인해요.
2. [Claude Code로 결제 서버 조사 시작](claude-cli://open?repo=mycompany/payments-api&q=%EA%B2%B0%EC%A0%9C%20%EC%84%9C%EB%B2%84%205xx%20%EC%98%A4%EB%A5%98%20%EC%A1%B0%EC%82%AC.%20%EC%B5%9C%EA%B7%BC%2030%EB%B6%84%20%EC%97%90%EB%9F%AC%20%EB%A1%9C%EA%B7%B8%EB%A5%BC%20%ED%99%95%EC%9D%B8%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.)
3. 초기 결과를 #인시던트 채널에 공유해요.
```

> ⚠️ **주의**: GitHub의 README, 이슈, PR, 위키에서는 `claude-cli://` 링크가 보안상 자동으로 비활성화돼요 (클릭 불가, 텍스트만 표시). 이런 경우엔 코드 블록에 URL을 넣어서 복사할 수 있게 해주세요.

### 예시 2 — 터미널(쉘)에서 바로 열기

스크립트나 별칭(alias)에서 사용할 때는 각 OS별로 아래 명령어를 써요:

**macOS:**
```bash
open "claude-cli://open?repo=mycompany/payments-api&q=PR%20%EB%A6%AC%EB%B7%B0%ED%95%B4%EC%A4%98"
```

**Linux:**
```bash
xdg-open "claude-cli://open?repo=mycompany/payments-api&q=PR%20%EB%A6%AC%EB%B7%B0%ED%95%B4%EC%A4%98"
```

**Windows PowerShell:**
```powershell
Start-Process "claude-cli://open?repo=mycompany/payments-api&q=PR%20%EB%A6%AC%EB%B7%B0%ED%95%B4%EC%A4%98"
```

---

## 자동 등록 — 따로 설치 없어요

Claude Code를 처음 실행하면 `claude-cli://` URL 핸들러가 자동으로 내 컴퓨터에 등록돼요.

| OS | 등록 위치 |
|----|----------|
| macOS | `~/Applications/Claude Code URL Handler.app` |
| Linux | `~/.local/share/applications/claude-code-url-handler.desktop` |
| Windows | 레지스트리 `HKEY_CURRENT_USER\Software\Classes\claude-cli` |

링크를 클릭했을 때 어떤 터미널 앱이 열리는지도 자동으로 감지해요:
- **macOS**: iTerm2, Ghostty, kitty, Alacritty, WezTerm, Terminal.app 지원
- **Linux**: `$TERMINAL` 환경변수 → `x-terminal-emulator` → 공통 터미널 앱 순서
- **Windows**: Windows Terminal → PowerShell → cmd.exe 순서

### 딥링크 기능 끄기

딥링크가 필요 없으면 `settings.json`에 아래 항목을 추가하면 돼요:

```json
{
  "disableDeepLinkRegistration": "disable"
}
```

회사 전체에서 끄고 싶다면 [관리형 설정(managed settings)](/docs/config/admin-setup-guide)으로 설정하면 직원들이 다시 켤 수 없어요.

---

## VS Code 확장 프로그램은 별도 URL

VS Code(브이에스코드) 확장 프로그램은 `claude-cli://` 대신 아래 URL 형식을 써요:

```text
vscode://anthropic.claude-code/open
```

터미널 창 대신 VS Code 에디터 탭으로 열려요. VS Code 확장 문서에서 파라미터 형식을 확인하세요.

---

## ⚠️ 주의사항 & 자주 있는 문제

| 증상 | 원인 & 해결 |
|------|------------|
| 클릭해도 아무 일 없음 | 핸들러 미등록. `claude` 명령어 한 번 실행 후 재시도 |
| GitHub에서 링크 텍스트만 보임 | GitHub Markdown은 `claude-cli://` 차단. 코드 블록에 URL 넣기 |
| 지정한 폴더가 아닌 홈 폴더에서 열림 | `repo` 파라미터는 한 번이라도 해당 폴더에서 `claude` 실행한 적 있어야 함 |
| 다른 터미널 앱으로 열림 | macOS: 원하는 터미널에서 `claude` 한 번 실행 / Linux: `$TERMINAL` 환경변수 설정 |

---

## 다음 단계

딥링크를 이해했다면:
- **[스킬(Skills)](/docs/config/skills-guide)** — 긴 런북 지시문을 `/스킬명`으로 저장하면 딥링크의 `q` 파라미터를 짧게 줄일 수 있어요
- **[루틴(Routines)](/docs/advanced/routines)** — 스케줄이나 API 호출로 자동 실행하는 자동화
- **[원격 제어(Remote Control)](/docs/advanced/remote-control)** — 모바일에서 세션 이어가기
