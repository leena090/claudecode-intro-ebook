---
title: "[공] Linux에서 Claude Code 데스크톱 앱 설치하기 (베타)"
description: "Ubuntu·Debian 리눅스에서 apt로 Claude 데스크톱 앱 설치하는 방법. Chat·Cowork·Code 모두 사용 가능"
tags: ["설치", "linux", "ubuntu", "debian", "데스크톱", "apt", "자동생성"]
category: "setup"
order: 8
lastUpdated: "2026-07-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code 공식 문서 2026-07 기준. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a><br />
⚠️ Linux 데스크톱 앱은 현재 <strong>베타(Beta)</strong>예요.
</div>

## 드디어 리눅스에도 데스크톱 앱이!

Claude Code 데스크톱 앱이 **Linux에서도 사용 가능**해졌어요!

그동안 macOS와 Windows에서만 됐던 데스크톱 앱을 이제 Ubuntu·Debian에서도 쓸 수 있어요.

> 🍱 **비유로 설명하면**: 이전에는 리눅스 사용자는 터미널(CLI)이라는 "공용 버스"만 탈 수 있었는데, 이제는 맥·윈도우 사용자처럼 "편한 승용차(데스크톱 앱)"도 탈 수 있게 된 거예요.

## 어떤 기능을 쓸 수 있나요?

macOS·Windows와 동일하게:

- 💬 **Chat** — 대화 탭
- 🤝 **Cowork** — 협업 탭
- 💻 **Code** — Claude Code 탭
- 병렬 세션, 시각적 diff 리뷰, 통합 터미널·에디터, 라이브 앱 미리보기

## 설치 요건

| 항목 | 필요 사항 |
|---|---|
| 운영체제 | Ubuntu 22.04 이상 또는 Debian 12 이상 |
| 아키텍처 | x86_64(인텔/AMD 64비트) 또는 arm64 |
| 비고 | 같은 계열 Debian 기반 배포판도 작동할 수 있으나 공식 지원 아님 |

## 설치 방법

### 방법 1: apt 저장소로 설치 (권장)

자동으로 업데이트가 와서 더 편해요.

**1단계: Anthropic 서명 키 추가**

```bash
# curl이 없으면 먼저 설치
sudo apt install curl

# 서명 키 다운로드
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

**2단계: 저장소 등록**

```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" \
  | sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

**3단계: 설치**

```bash
sudo apt update && sudo apt install claude-desktop
```

**4단계: 실행 및 로그인**

앱 목록에서 **Claude**를 찾거나 터미널에서:

```bash
claude-desktop
```

macOS·Windows와 동일하게 Anthropic 계정으로 로그인하면 돼요.

---

### 방법 2: .deb 파일로 직접 설치

apt 저장소를 사용하기 어려운 경우:

1. [claude.com/download](https://claude.com/download)에서 `.deb` 파일을 다운로드
2. 아키텍처에 맞게 x64 또는 arm64 선택
3. 다운로드 폴더에서:

```bash
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 이 방법으로 설치하면 **자동 업데이트가 안 돼요**. 업데이트를 받으려면 apt 저장소를 사용하세요.

## 업데이트 방법

Linux 데스크톱 앱은 **스스로 업데이트하지 않아요** (macOS·Windows와 다름).
시스템 패키지 업데이트로 함께 받아요:

```bash
sudo apt update && sudo apt upgrade
```

또는 소프트웨어 업데이터 앱에서도 확인돼요.

## 삭제 방법

```bash
sudo apt remove claude-desktop

# apt 저장소도 함께 삭제
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

## 베타에서 아직 안 되는 것들

| 기능 | 상태 |
|---|---|
| Computer Use (앱·화면 제어) | ❌ 베타에서 미지원 |
| 음성 입력(Dictation) | ❌ 데스크톱 앱에서 미지원 (CLI `/voice` 사용) |
| Quick Entry 글로벌 단축키 | ⚠️ X11은 작동, 네이티브 Wayland는 데스크톱 환경 설정 필요 |
| Fedora/RHEL | ❌ Debian 계열만 지원 (추후 확장 예정) |

<div class="note-circle">
○ Computer Use나 음성 입력이 필요하면 CLI(<code>claude</code> 터미널 명령)를 이용하세요<br />
○ CLI는 더 많은 Linux 배포판을 지원해요 → <a href="/docs/setup/install-claude-code">CLI 설치 가이드</a>
</div>

## 서명 키 확인 방법

설치한 서명 키가 정품 Anthropic 키인지 확인할 수 있어요:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

지문(fingerprint)이 다음과 같아야 해요:
```
31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE
```
