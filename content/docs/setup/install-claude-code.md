---
title: "Step 2: Claude Code 설치하기"
description: "명령어 한 줄로 완료하는 클로드코드 설치 방법"
tags: ["설치", "Claude Code", "npm"]
category: "setup"
order: 3
lastUpdated: "2026-04-08"
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

### Windows (PowerShell)

관리자 권한으로 PowerShell을 열고 입력:

```powershell
winget install Anthropic.ClaudeCode
```

또는:

```powershell
choco install claude-code
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

**버전이 나오면 성공!** 🎉

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

만약 나중에 최신 버전으로 업데이트하려면:

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
