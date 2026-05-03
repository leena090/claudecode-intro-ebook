---
title: "[공] 딥링크 — 클릭 한 번으로 Claude Code 세션 열기"
description: "claude-cli:// URL 스킴으로 런북·대시보드·알림에 원클릭 Claude Code 세션 링크를 심는 방법 (v2.1.91)"
tags: ["자동생성", "딥링크", "deep-link", "claude-cli", "URL스킴", "런북", "자동화", "v2.1.91"]
category: "advanced"
order: 22
lastUpdated: "2026-05-03"
---

<div class="note-star">
★ <strong>Claude Code v2.1.91</strong> 이상에서 사용 가능한 기능이에요.<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/deep-links">code.claude.com/docs/en/deep-links</a>
</div>

## 딥링크(Deep Link)가 뭔가요?

**`claude-cli://`로 시작하는 특별한 URL을 클릭하면, 내 컴퓨터에 Claude Code가 자동으로 열리는 기능**입니다.

> 📬 **비유로 설명하면**: 마치 네이버 지도 링크를 누르면 앱이 켜지면서 그 위치가 바로 뜨는 것처럼요. `claude-cli://` 링크를 누르면 Claude Code가 켜지면서 지정한 폴더와 프롬프트(질문 내용)가 이미 입력되어 있어요. **Enter만 누르면 바로 시작**되는 거죠.

이 링크는 어디든 넣을 수 있어요:

| 넣는 곳 | 활용 예시 |
|---------|---------|
| 📋 장애 대응 매뉴얼(런북) | "문제 발생 시 이 링크 클릭 → 해당 서비스 폴더에서 Claude Code 자동 오픈" |
| 📊 모니터링 대시보드 | 특정 지표 이상 시 알림에 링크 삽입 |
| 📚 README / 위키 | 신규 입사자가 클릭하면 온보딩 프롬프트 자동 입력 |
| 🔔 CI 실패 알림 | 실패한 테스트 이름이 프롬프트에 미리 적혀서 오픈 |

---

## 어떻게 작동하나요?

1. 누군가 `claude-cli://` 링크를 클릭
2. 운영체제(OS)가 이 URL 스킴(scheme)을 인식 → Claude Code 실행
3. 새 터미널 창이 열리면서 **지정한 폴더**에서 시작
4. **프롬프트 입력창에 내용이 미리 적혀** 있음 (자동 전송 안 됨)
5. 내용을 확인하고 Enter를 눌러야 실제로 전송됨

> 🔒 **보안 참고**: 딥링크가 Claude Code를 대신 실행하지는 않아요. 프롬프트 내용이 입력창에 채워질 뿐, Enter를 눌러 확인하기 전까지는 아무것도 전송되지 않습니다. 믿을 수 없는 링크에서 열더라도 내용을 검토할 수 있어요.

---

## 링크 만드는 법

모든 딥링크는 `claude-cli://open`으로 시작해요.

```text
claude-cli://open
```

이 상태로 클릭하면 홈 폴더에서 빈 프롬프트로 Claude Code가 열립니다.

여기에 **파라미터(매개변수)**를 추가하면 폴더와 프롬프트를 지정할 수 있어요:

| 파라미터 | 설명 | 예시 |
|---------|------|------|
| `q` | 프롬프트 텍스트 (URL 인코딩 필요, 최대 5,000자) | `q=버그%20수정해줘` |
| `cwd` | 절대 경로로 작업 폴더 지정 | `cwd=/home/user/myproject` |
| `repo` | GitHub `소유자/저장소` 형식으로 클론 폴더 자동 검색 | `repo=acme/payments` |

> 💡 `cwd`와 `repo`를 둘 다 넣으면 **`cwd`가 우선**됩니다.

### 실제 링크 예시

```text
claude-cli://open?repo=acme/payments&q=배포%20실패%20원인%20조사해줘.%0A최근%20커밋과%20마지막%20성공%20빌드%20확인해줘.
```

클릭하면:
- `acme/payments` 저장소의 로컬 클론 폴더에서 Claude Code 오픈
- 프롬프트 입력창에 아래 내용이 미리 적힘:

```text
배포 실패 원인 조사해줘.
최근 커밋과 마지막 성공 빌드 확인해줘.
```

> `%0A`는 줄바꿈(Enter)이에요. URL에서는 특수문자를 이렇게 변환해야 해요.

### `cwd`와 `repo` 중 언제 뭘 쓸까요?

| 상황 | 추천 파라미터 |
|------|-------------|
| 팀원 모두가 같은 경로에 프로젝트가 있는 경우 (개발 컨테이너, VM) | `cwd` |
| 팀원마다 클론 위치가 다른 경우 (일반적인 상황) | `repo` |

`repo`를 쓸 때 주의: 해당 저장소 안에서 `claude` 명령을 **한 번 이상 실행한 적 있어야** 경로가 등록됩니다. 처음 클론한 곳이라면 일단 `claude`를 한 번 실행한 뒤 딥링크를 사용하세요.

---

## 실전 활용 예시

### 장애 대응 런북(Runbook)에 넣기

마크다운 문서에 이렇게 작성하면:

```markdown
## web-gateway 5xx 오류 급증 시 대응

1. PagerDuty에서 알림 확인
2. [Claude Code로 web-gateway 조사 시작](claude-cli://open?repo=acme/web-gateway&q=5xx%20오류%20급증%20중.%20최근%2030분간%20에러%20로그와%20최신%20배포%20내역%20확인해줘.)
3. #incident 채널에 초기 결과 공유
```

> ⚠️ **주의**: GitHub README, 이슈, PR, 위키에서는 `claude-cli://` 링크가 **클릭 가능한 링크로 표시되지 않아요** (GitHub의 보안 정책으로 http/https 이외 URL 스킴은 제거됩니다). 코드 블록 안에 URL을 넣어서 복사할 수 있게 안내하는 방법을 쓰세요.

### 터미널/스크립트에서 열기

브라우저 없이 터미널에서 직접 딥링크를 실행하려면:

**macOS:**
```bash
open "claude-cli://open?repo=acme/payments&q=오픈%20PR%20검토해줘"
```

**Linux:**
```bash
xdg-open "claude-cli://open?repo=acme/payments&q=오픈%20PR%20검토해줘"
```

**Windows (PowerShell):**
```powershell
Start-Process "claude-cli://open?repo=acme/payments&q=오픈%20PR%20검토해줘"
```

---

## 플랫폼별 핸들러 등록 위치

Claude Code를 처음 실행할 때 `claude-cli://` URL 스킴이 자동으로 OS에 등록됩니다. 별도 설치 명령은 필요 없어요.

| 운영체제 | 핸들러 위치 |
|---------|-----------|
| macOS | `~/Applications/Claude Code URL Handler.app` |
| Linux | `~/.local/share/applications/claude-code-url-handler.desktop` |
| Windows | 레지스트리: `HKEY_CURRENT_USER\Software\Classes\claude-cli` |

딥링크가 클릭되면 아래 순서로 터미널 앱을 찾아서 실행해요:

- **macOS**: 가장 최근에 사용한 터미널 (iTerm2, Ghostty, kitty, Alacritty, WezTerm, Terminal.app 지원)
- **Linux**: `$TERMINAL` 환경변수 → `x-terminal-emulator` → 일반 에뮬레이터 목록 순
- **Windows**: Windows Terminal → PowerShell → cmd.exe 순

---

## VS Code에서 쓰기

VS Code 확장 프로그램에서는 별도 URL 스킴을 사용해요:

```text
vscode://anthropic.claude-code/open
```

이 링크는 터미널 창 대신 **VS Code 에디터 탭**으로 Claude Code를 엽니다. 자세한 파라미터는 VS Code 문서를 참고하세요.

---

## 딥링크 비활성화하기

딥링크 등록을 원하지 않으면 `settings.json`에 추가:

```json
{
  "disableDeepLinkRegistration": "disable"
}
```

조직 전체에 적용하려면 [서버 관리 설정(Managed Settings)](/config/settings-json) 사용.

---

## 자주 묻는 질문

**Q. 링크를 클릭해도 아무 반응이 없어요**
→ 아직 `claude` 명령을 한 번도 실행한 적 없는 컴퓨터일 수 있어요. 터미널에서 `claude`를 한 번 실행하고 나서 다시 클릭해 보세요.

**Q. `repo` 파라미터를 써도 홈 폴더에서 열려요**
→ 해당 저장소 안에서 `claude`를 최소 한 번 실행해야 경로가 등록됩니다. 클론 폴더에서 `claude`를 먼저 실행해 보세요.

**Q. 링크가 클릭 가능하지 않고 텍스트로만 보여요**
→ GitHub이나 일부 Markdown 렌더러에서는 `http/https` 외 URL 스킴은 표시하지 않아요. 코드 블록 안에 URL을 넣어 복사할 수 있게 하세요.

**Q. 엉뚱한 터미널 앱이 열려요**
→ macOS: 원하는 터미널 앱에서 `claude`를 한 번 실행하면 다음 딥링크부터 그 앱을 사용해요. Linux: `export TERMINAL=your-terminal`으로 설정하세요.

---

## 함께 보면 좋은 문서

- **[스킬(Skills)](/advanced/skill-evaluation)**: 긴 프롬프트를 `/skill` 명령으로 저장해두면, 딥링크의 `q` 파라미터에 스킬 이름만 써도 돼요.
- **[헤드리스 모드](/commands/commands-overview)**: 터미널 없이 스크립트에서 Claude를 실행하고 결과를 캡처.
