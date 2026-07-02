---
title: "[공] Linux에서 Claude Code 데스크톱 앱 설치하기 (베타)"
description: "Ubuntu 22.04 이상, Debian 12 이상에서 apt로 Claude Desktop을 설치하는 방법. Chat·Cowork·Code 탭 모두 사용 가능"
tags: ["설치", "Linux", "ubuntu", "debian", "데스크톱", "desktop", "apt", "베타", "자동생성"]
category: "setup"
order: 8
lastUpdated: "2026-07-02"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Linux 데스크톱 앱은 현재 <strong>베타</strong>예요. <code>[공]</code><br />
📦 Ubuntu 22.04 이상, Debian 12 이상 지원 (x86_64·arm64)<br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a>
</div>

## Linux에서도 데스크톱 앱을 쓸 수 있어요!

지금까지 Claude Code 데스크톱 앱은 macOS와 Windows만 지원했어요. 이제 **Linux(Ubuntu·Debian)에서도 공식 데스크톱 앱**을 사용할 수 있어요 (베타).

> 🍱 **비유**: 카페가 "서울·부산점만 운영"하다가 드디어 "대전점"도 생긴 것처럼, macOS·Windows 사용자만 쓸 수 있던 데스크톱 앱이 Linux에서도 문을 열었어요.

Linux 데스크톱 앱에서 사용 가능한 기능:
- 💬 **Chat** 탭
- 🤝 **Cowork** 탭
- 💻 **Code(Claude Code)** 탭
- 병렬 세션, 시각적 diff 리뷰, 통합 터미널·에디터, 앱 미리보기

---

## 시스템 요구사항

| 항목 | 요구사항 |
|------|---------|
| OS | Ubuntu **22.04** 이상, Debian **12** 이상 |
| 아키텍처 | x86_64 (64비트) 또는 arm64 |
| 기타 | 동일 요구사항의 다른 Debian 계열 배포판도 작동할 수 있지만 공식 테스트 대상 아님 |

<div class="note-circle">
○ Fedora·RHEL 등 RPM 기반 배포판은 아직 미지원이에요<br />
○ arm64(예: Raspberry Pi 64비트, Apple Silicon Linux VM)도 지원해요
</div>

---

## 설치 방법 — apt 리포지토리 (권장)

apt 리포지토리로 설치하면 이후 **일반 시스템 업데이트(`apt upgrade`)로 자동으로 최신 버전**을 받을 수 있어요.

### 1단계: Anthropic 서명 키 추가

```bash
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

### 2단계: 리포지토리 등록

```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 3단계: 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 4단계: 실행 및 로그인

- 앱 런처에서 **Claude** 검색 후 실행
- 또는 터미널에서 `claude-desktop` 명령어 실행
- Anthropic 계정으로 로그인 (claude.ai 구독 또는 조직 SSO)

<div class="note-circle">
○ Claude Console API 키로는 데스크톱 앱 로그인이 안 돼요 — API 키 사용자는 CLI(<code>claude</code> 명령어)를 사용하세요<br />
○ 기업 환경(Google Cloud Agent Platform, LLM 게이트웨이 라우팅)은 별도 엔터프라이즈 설정 필요
</div>

---

## 서명 키 확인 (선택 사항)

보안을 위해 다운로드한 서명 키가 Anthropic 것인지 검증할 수 있어요:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

올바른 키라면 지문(fingerprint)이 아래와 일치해야 해요:
```
31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE
```

---

## .deb 파일로 수동 설치 (리포지토리 없이)

apt 리포지토리를 사용할 수 없는 환경이라면 `.deb` 파일을 직접 받아서 설치할 수 있어요.

1. [claude.com/download](https://claude.com/download)에서 아키텍처에 맞는 `.deb` 파일 다운로드
2. 설치:

```bash
sudo apt install ./claude-desktop_*.deb
```

⚠️ 수동 설치는 자동 업데이트가 되지 않아요. 새 버전은 직접 다시 받아야 해요.

---

## 업데이트 방법

Linux 버전은 앱이 스스로 업데이트하지 않아요. 시스템 패키지 업데이트로 새 버전을 받아요:

```bash
sudo apt update && sudo apt upgrade
```

또는 그래픽 소프트웨어 업데이터(Software Updater 등)에서도 업데이트돼요.

---

## 제거 방법

```bash
sudo apt remove claude-desktop

# apt 리포지토리도 함께 제거할 경우
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## Linux 베타에서 아직 지원하지 않는 기능

| 기능 | 상태 |
|------|------|
| 🖥️ Computer Use (앱·화면 제어) | ❌ Linux 미지원 |
| 🎤 음성 받아쓰기 (Dictation) | ❌ 데스크톱 앱에서 미지원 (CLI에서는 `/voice` 사용 가능) |
| ⌨️ Quick Entry 전역 단축키 | X11에서는 작동, 순수 Wayland에서는 데스크톱 환경의 GlobalShortcuts 포털 필요 |
| 🎩 Fedora·RHEL | ❌ Debian 계열만 지원 (추후 지원 예정) |

<div class="note-circle">
○ Computer Use, 음성 입력이 필요하면 CLI(<code>claude</code> 명령어)를 사용하세요 — 더 넓은 Linux 배포판도 지원해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/setup#system-requirements">setup#system-requirements</a>
</div>

---

## 요약

| 항목 | 내용 |
|------|------|
| 지원 배포판 | Ubuntu 22.04+, Debian 12+ (x86_64·arm64) |
| 설치 방법 | apt 리포지토리 (권장) 또는 .deb 수동 설치 |
| 업데이트 | `sudo apt upgrade` |
| 사용 가능 탭 | Chat, Cowork, Code |
| 미지원 기능 | Computer Use, 음성 입력, Fedora/RHEL |
| 현재 상태 | 베타 |
