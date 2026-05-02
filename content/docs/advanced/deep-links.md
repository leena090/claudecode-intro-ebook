---
title: "[공] 링크 클릭 한 번으로 Claude Code 자동 열기 — 딥링크(Deep Link)"
description: "claude-cli:// URL을 만들면 누구든 클릭 한 번으로 지정한 폴더·프롬프트로 Claude Code를 바로 열 수 있어요. 런북, 알림, 대시보드에 활용!"
tags: ["자동생성", "딥링크", "deep-link", "claude-cli", "URL스킴", "자동화", "고급"]
category: "advanced"
order: 22
lastUpdated: "2026-05-02"
---

<div class="note-star">
★ <strong>공식 기능</strong> — 2026-05 현재 Claude Code 공식 문서(<a href="https://code.claude.com/docs/en/deep-links">deep-links</a>)에 명시된 기능이에요. <code>[공]</code>
<br />★ <strong>버전 주의</strong> — Claude Code <strong>v2.1.91 이상</strong>이 필요해요. 이전 버전에서는 링크가 열리지 않아요.
<br />★ <strong>GitHub README 주의</strong> — GitHub Markdown은 <code>claude-cli://</code> 링크를 클릭 불가 텍스트로만 표시해요. 다른 플랫폼(위키, 슬랙 등)을 활용하세요.
</div>

## 딥링크(Deep Link)가 뭔가요?

**`claude-cli://`** 로 시작하는 특별한 URL 주소예요. 이 주소를 클릭하면 Claude Code가 **내 컴퓨터에서 자동으로 실행**되면서, 미리 지정해둔 폴더와 프롬프트를 딱 펼쳐놓아 줘요.

> 🗝️ **비유로 설명하면**: 친구한테 "우리 도서관 3층 202호 자리에서 만나자"라고 미리 쪽지를 써두면, 친구가 쪽지를 보고 바로 그 자리로 이동하는 것처럼 — 딥링크는 "이 폴더 열고, 이 질문 준비해서 기다려!"라는 쪽지예요.

---

## 어디에 쓰면 좋아요?

딥링크는 **URL이 들어가는 곳이라면 어디든** 쓸 수 있어요:

| 🔧 활용처 | 💡 예시 |
|---|---|
| **인시던트 런북** | 장애 발생 시 클릭 한 번으로 해당 서비스 레포에서 진단 시작 |
| **모니터링 대시보드** | 알림 옆에 링크 추가 → 클릭하면 해당 서비스 분석 프롬프트 자동 입력 |
| **팀 위키 / Notion** | 신입 개발자 온보딩 페이지에 "여기 클릭하면 프로젝트 코드 열려요" |
| **Slack 메시지** | CI 실패 알림에 딥링크 포함 → 실패한 작업 이름이 프롬프트에 자동 입력 |

---

## 어떻게 동작해요?

클릭이 일어나면 이런 순서로 작동해요:

1. 브라우저나 앱이 `claude-cli://` URL을 운영체제에 넘겨요
2. 운영체제가 "이건 Claude Code가 처리하는 URL이다!" 하고 Claude Code를 실행해요
3. 새 터미널 창이 열리면서 **지정한 폴더**로 이동, **프롬프트 박스에 내용 자동 입력**
4. 나는 내용을 확인하고 엔터를 눌러요 (자동 전송 아님!)

> ⚠️ **중요**: 딥링크는 절대로 자동으로 Claude에게 전송하지 않아요. 항상 **내가 확인하고 엔터를 눌러야** 실행돼요. 모르는 링크를 눌러도 즉시 실행되지 않으니 안심하세요.

---

## 링크 만드는 법

모든 딥링크는 `claude-cli://open`으로 시작해요. 그 뒤에 파라미터(옵션 값)를 붙여서 폴더와 프롬프트를 지정할 수 있어요.

### 📋 파라미터 표

| 파라미터 | 설명 | 예시 |
|---|---|---|
| `q` | 프롬프트 박스에 입력할 내용 (URL 인코딩 필요, 최대 5,000자) | `q=배포%20실패%20원인%20분석` |
| `cwd` | 절대 경로로 작업 폴더 지정 | `cwd=/Users/kim/my-project` |
| `repo` | GitHub `소유자/레포명` 형식 (내 로컬 클론 자동 찾기) | `repo=acme/payments` |

> 🍱 **비유로 설명하면**: `q`는 "오자마자 이 말 해줘", `cwd`는 "정확히 이 주소로 와줘", `repo`는 "우리가 같이 작업하는 GitHub 프로젝트로 와줘"예요.

### cwd vs repo — 뭘 써야 해요?

| 상황 | 추천 |
|---|---|
| 팀 전원이 같은 경로에 프로젝트가 있을 때 (예: 표준 devcontainer) | **`cwd`** |
| 팀원마다 클론 위치가 다를 때 (대부분의 경우) | **`repo`** |

**`cwd`와 `repo`를 둘 다 쓰면** `cwd`가 우선이에요.

---

## 실제 링크 예시

### 기본 형태 (폴더·프롬프트 없음)

```
claude-cli://open
```

홈 디렉토리에서 빈 Claude Code 세션이 열려요.

---

### GitHub 레포 + 프롬프트 지정

```
claude-cli://open?repo=acme/payments&q=배포%20실패%20원인%20분석해줘
```

`acme/payments` 레포 로컬 클론 폴더에서 열리고, 프롬프트에 "배포 실패 원인 분석해줘"가 입력돼요.

> ⚠️ `repo`는 내가 이전에 그 폴더 안에서 `claude`를 한 번이라도 실행한 적 있어야 찾을 수 있어요. 처음 쓰는 레포라면 해당 폴더에서 `claude`를 한 번 실행해두세요.

---

### 런북에 Markdown 링크로 넣기

런북 문서에 이렇게 쓸 수 있어요:

```markdown
## web-gateway 5xx 오류 대응 절차

1. PagerDuty에서 알람 확인
2. [Claude Code로 원인 조사 시작](claude-cli://open?repo=acme/web-gateway&q=5xx%20오류%20발생.%20최근%2030분%20에러%20로그와%20최근%20배포%20확인)
3. #incident 채널에 초기 결과 공유
```

> ⚠️ **GitHub README 주의**: GitHub은 `claude-cli://` 링크를 자동으로 제거해요. 위키나 Notion, Confluence 같은 다른 곳에 작성하세요.

---

### 터미널 스크립트에서 열기

링크를 클릭 대신 **터미널 명령어로** 열 수도 있어요:

**macOS:**
```bash
open "claude-cli://open?repo=acme/payments&q=PR%20리뷰해줘"
```

**Linux:**
```bash
xdg-open "claude-cli://open?repo=acme/payments&q=PR%20리뷰해줘"
```

**Windows (PowerShell):**
```powershell
Start-Process "claude-cli://open?repo=acme/payments&q=PR%20리뷰해줘"
```

---

## 등록은 어떻게 해요?

**아무것도 안 해도 자동으로 등록돼요!** 처음 Claude Code를 실행하면 운영체제에 `claude-cli://` 핸들러가 자동 등록돼요.

| 플랫폼 | 등록 위치 |
|---|---|
| macOS | `~/Applications/Claude Code URL Handler.app` |
| Linux | `~/.local/share/applications/claude-code-url-handler.desktop` |
| Windows | 레지스트리 `HKEY_CURRENT_USER\Software\Classes\claude-cli` |

### 등록 비활성화하기

딥링크 등록을 끄고 싶다면 `settings.json`에 이렇게 추가해요:

```json
{
  "disableDeepLinkRegistration": "disable"
}
```

조직 전체에서 끄려면 [관리형 설정(Managed Settings)](https://code.claude.com/docs/en/server-managed-settings)에 설정하면 돼요.

---

## VS Code에서 열기

VS Code 확장도 자체 딥링크를 지원해요. URL 형식이 달라요:

```
vscode://anthropic.claude-code/open
```

터미널 창이 아닌 **VS Code 탭**으로 열려요.

---

## 자주 있는 문제

| 증상 | 해결법 |
|---|---|
| 클릭해도 아무 일도 안 일어나요 | Claude Code를 한 번 실행해서 핸들러를 등록하세요 |
| 링크가 텍스트로만 보여요 | GitHub Markdown 제한 — 코드 블록에 URL을 넣어서 복사할 수 있게 하세요 |
| 홈 폴더에서 열려요 (레포가 안 찾아져요) | 해당 레포 폴더에서 `claude` 명령을 한 번 실행해 경로를 등록하세요 |
| 엉뚱한 터미널이 열려요 | macOS: 원하는 터미널에서 `claude` 실행 / Linux: `$TERMINAL` 환경변수 설정 |

---

## 더 알아보기

- **[스킬(Skills)](https://code.claude.com/docs/en/skills)**: 긴 런북 프롬프트를 `/skill`로 저장해두면, 딥링크의 `q`에는 스킬 이름만 넣으면 돼요
- **[비대화형 모드(Headless)](https://code.claude.com/docs/en/headless)**: 터미널 창 없이 스크립트에서 Claude를 실행하고 출력을 받는 방법
