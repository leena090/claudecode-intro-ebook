---
title: "Step 2: Claude Code 설치하기"
description: "명령어 한 줄로 완료하는 클로드코드 설치 방법"
tags: ["설치", "Claude Code", "npm"]
category: "setup"
order: 3
lastUpdated: "2026-04-16"
---

## ⭐ 권장 설치 방법: Native Install (최신)

현재 **가장 간단하고 빠른** 설치 방법입니다. Node.js 설치 없이 바로 사용할 수 있습니다.

### macOS / Linux (권장)

터미널을 열고 아래 명령어 입력:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

설치 완료되면:

```bash
claude --version
```

### Windows — 3가지 방법 중 선택

#### 방법 1: PowerShell (권장)

PowerShell을 열고 입력:

```powershell
irm https://claude.ai/install.ps1 | iex
```

#### 방법 2: CMD (명령 프롬프트)

CMD 창에서 입력:

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

<div class="note-circle">
○ <strong>PowerShell vs CMD 구분법</strong><br />
화면 프롬프트가 <code>PS C:\</code>로 시작하면 PowerShell, <code>C:\</code>로 시작하면 CMD입니다.
</div>

#### 방법 3: WinGet (Windows 패키지 관리자)

```powershell
winget install Anthropic.ClaudeCode
```

<div class="note-star">
★ <strong>Windows 사용자 희소식 — PowerShell 도구 Preview (v2.1.84~)</strong>
<br /><br />
기존 Claude Code는 내부적으로 Bash(터미널 명령어)를 기본으로 썼어요. Windows에서는 WSL(Windows Subsystem for Linux)이나 Git Bash가 필요했죠.
<br /><br />
<strong>2026-03-26 v2.1.84부터</strong> Windows 사용자용 <strong>PowerShell 도구</strong>가 추가됐어요 (opt-in preview). 이제 Claude가 직접 PowerShell 명령어를 쓸 수 있어서 Windows 작업이 훨씬 자연스러워졌습니다.
<br /><br />
→ <strong>활성화 방법</strong>: <code>settings.json</code>에 <code>"experimental": {"powershell": true}</code> 추가 후 재시작 (preview라 기본 꺼져 있음).
</div>

---

## 🍺 Homebrew로 설치하기 (Mac 추가 옵션)

Mac에서 Homebrew(맥용 앱 설치 관리자)를 이미 쓰고 있다면 이 방법도 가능합니다.

```bash
brew install --cask claude-code
```

최신 버전을 원하면:

```bash
brew install --cask claude-code@latest
```

> 🧁 **비유로 설명하면**: Homebrew = 맥용 앱 마켓이에요. `claude-code`는 안정 채널(최신보다 약 1주 뒤처짐), `claude-code@latest`는 최신 채널입니다.

<div class="note-star">
★ <strong>중요: Homebrew 설치는 자동 업데이트가 안 됩니다</strong><br />
나중에 업데이트하려면 직접 명령어를 입력해야 해요:
<br /><br />
<code>brew upgrade claude-code</code>
</div>

---

## 자동 vs 수동 업데이트 비교

| 설치 방법 | 자동 업데이트 | 업데이트 명령 |
|-----------|-------------|-------------|
| 네이티브 (curl / irm) | ✅ 자동 | 할 일 없음 |
| Homebrew | ❌ 수동 | `brew upgrade claude-code` |
| WinGet | ❌ 수동 | `winget upgrade Anthropic.ClaudeCode` |

> 📱 **비유**: 네이티브 설치 = 스마트폰 앱 자동 업데이트처럼 알아서 최신 버전 유지. Homebrew/WinGet = 직접 업데이트 버튼을 눌러야 하는 것.

---

## 기존 설치 방법: npm (선택사항)

Node.js가 이미 설치되어 있다면 npm으로도 설치 가능합니다.

### 1단계: 클로드코드 설치

```bash
npm install -g @anthropic-ai/claude-code
```

이 명령어는:
- `npm` = Node.js와 함께 설치되는 패키지 관리자 (자동 설치됨)
- `-g` = "글로벌 설치" (어느 폴더에서나 사용 가능하다는 뜻)
- `@anthropic-ai/claude-code` = 설치할 프로그램 이름

설치가 진행되면서 여러 줄이 출력됩니다. 기다리세요!

### 2단계: 설치 확인

```bash
claude --version
```

결과 예시:
```
1.x.x
```

**버전이 나오면 성공!**

---

## ⚠️ 오류가 났을 때

### 🔴 permission denied 오류 (Mac/Linux)

```bash
sudo npm install -g @anthropic-ai/claude-code
```

- `sudo` = 관리자 권한으로 실행
- 비밀번호를 물어보면 입력하세요 (입력 중에는 글자가 안 보임 — 정상)

### 🟡 Windows 보안 오류

PowerShell을 **관리자 권한**으로 실행해야 합니다:

1. Windows 키 누르고 "powershell" 검색
2. "Windows PowerShell (관리자)" 우클릭 → 실행
3. 아래 명령어 입력:

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Y를 입력 후 엔터 → 다시 설치 시도

### 💡 그래도 안 되면?

1. 오류 메시지를 모두 복사
2. claude.ai 또는 ChatGPT에 붙여넣고 물어보기
3. AI가 오류 원인과 해결책을 알려줄 것입니다

---

## npm이 뭔가요?

**npm** = Node Package Manager의 약자

- Node.js를 설치하면 자동으로 설치됩니다
- 프로그램을 설치하고 관리하는 도구입니다
- 마치 앱스토어에서 앱을 설치하듯이, 터미널에서 명령어로 프로그램을 설치합니다

---

## 설치 완료 확인

설치가 완료되면:
- 명령어 `claude` 사용 가능
- 터미널 어디서나 `claude` 입력해서 시작 가능
- 다음 단계인 "첫 실행 & 로그인"으로 진행

---

## 재설치 또는 업데이트

**네이티브 설치(curl/irm)로 설치했다면 자동으로 최신 버전이 유지됩니다.** 따로 할 일이 없어요.

직접 업데이트 명령어가 필요할 때:

```bash
claude update
```

npm 방식으로 업데이트하려면:

```bash
npm install -g @anthropic-ai/claude-code@latest
```

또는 제거 후 다시 설치:

```bash
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

---

## 🏢 회사에서 AWS Bedrock으로 쓰는 경우 (v2.1.92~)

회사 보안 정책상 Claude Code를 **AWS Bedrock**으로 써야 하는 분들께 희소식이에요. **2026-04-04 v2.1.92**부터 로그인 화면에 **인터랙티브 설정 마법사**가 생겼습니다.

### 로그인 화면에서 자동으로 안내

```bash
claude
```

처음 실행하면 로그인 화면에서 "Bedrock 설정" 옵션을 선택할 수 있어요. 마법사가:
1. AWS 인증 정보 확인
2. 리전 선택 (서울 `ap-northeast-2` 등)
3. 모델 선택 (Opus 4.6, Sonnet 4.6 등)
4. 연결 테스트까지 자동

> 🍱 **비유로 설명하면**: 이전에는 "어디 터미널에 환경변수 뭐 넣고, config 파일 수정하고..." 한참 헤맸다면, 이제는 **ATM 같은 단계별 화면**을 따라가기만 하면 돼요.

<div class="note-circle">
○ 일반 사용자분들은 이 기능을 쓸 일이 없어요. 회사에서 AWS 통해 Claude를 쓰라고 지시받은 분들만 참고하세요.
</div>

---

## 🏢 Google Vertex AI로 쓰는 경우 (v2.1.98~)

Google Cloud를 사용하는 회사라면 **Vertex AI**를 통해 Claude Code를 연결할 수 있습니다. v2.1.98부터 Bedrock과 똑같이 **대화형 설정 마법사** 방식으로 지원합니다.

```bash
claude
```

로그인 화면에서 "Vertex AI 설정" 옵션 선택 → 마법사가 단계별로 안내합니다.

<div class="note-circle">
○ 회사에서 Google Cloud(GCP)를 통해 Claude를 쓰라고 지시받은 분들만 참고하세요.
</div>

---

## 🏢 Microsoft Foundry로 쓰는 경우 (v2.1.94~)

Microsoft Azure 기반 환경이라면 **Microsoft Foundry** 공급자를 통해 연결 가능합니다. v2.1.94부터 지원됩니다.

<div class="note-circle">
○ Azure 기반 회사 환경에서만 해당됩니다. 일반 사용자분들은 넘어가세요.
</div>

---

## 💻 Windows 사용자 필수 사항

Windows에서 Claude Code를 제대로 쓰려면 아래 두 가지 중 하나가 필요합니다.

| 방법 | 설명 | 추천 |
|------|------|------|
| **Git for Windows** | Git 설치 시 Bash 환경 자동 포함 | ✅ 일반 Windows 사용자 |
| **WSL (Linux 서브시스템)** | Windows 안에 Linux 환경 설치 | 개발자용 |

**Git for Windows 설치:** https://git-scm.com/downloads/win

> 🔧 WSL로 설치했다면 Git for Windows는 따로 설치하지 않아도 됩니다.
