---
title: "[공] Linux에서 Claude Desktop 앱 설치하기 (베타)"
description: "Ubuntu 22.04·Debian 12 이상에서 Claude Desktop 앱을 apt로 설치하는 방법 — 채팅·코드 모두 지원"
tags: ["설치", "linux", "ubuntu", "debian", "desktop", "자동생성"]
category: "setup"
order: 8
lastUpdated: "2026-07-06"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a><br />
⚠️ <strong>베타(Beta) 기능</strong> — 정식 출시 전 단계예요. 일부 기능이 제한될 수 있어요.
</div>

## Linux에서도 Claude Desktop 앱을 쓸 수 있어요! 🐧

지금까지 Claude Desktop 앱은 macOS와 Windows 전용이었어요. 이제 **Ubuntu·Debian 기반 Linux**에서도 동일한 앱을 사용할 수 있어요.

> 🍱 **비유**: 지금까지 "맥과 윈도우 카페"에만 있던 메뉴가 드디어 "리눅스 카페"에도 생긴 거예요. 메뉴는 거의 같고, 일부 아이템만 아직 준비 중이에요.

---

## 지원 환경

| 항목 | 지원 범위 |
|---|---|
| **운영체제** | Ubuntu 22.04 이상, Debian 12 이상 |
| **아키텍처** | x86_64 (64비트), arm64 |
| **Fedora/RHEL** | 현재 미지원 (향후 추가 예정) |

<div class="note-circle">
○ 위 조건을 충족하는 다른 데비안 계열 배포판도 작동할 수 있지만, 공식 테스트 범위 밖이에요<br />
○ 아키텍처 확인: 터미널에서 <code>uname -m</code> 입력 → x86_64 또는 aarch64(= arm64)
</div>

---

## 설치 방법 (apt 저장소 이용 — 권장)

apt 저장소를 사용하면 이후 시스템 업데이트 명령어(`sudo apt upgrade`)로 자동으로 최신 버전을 받을 수 있어요.

### 1단계: Anthropic 서명 키 추가

```bash
# curl이 없으면 먼저 설치
sudo apt install curl

# Anthropic 서명 키 다운로드
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

# 저장소 등록
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 2단계: 패키지 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 3단계: 실행 및 로그인

- 앱 런처에서 **Claude** 검색 후 실행, 또는
- 터미널에서 `claude-desktop` 입력

Anthropic 계정으로 로그인하면 돼요. claude.ai 구독 또는 조직 SSO(싱글 사인온)를 사용해요.

<div class="note-circle">
○ Console API 키 직접 입력은 Desktop 앱에서 지원되지 않아요 — API 키 인증이 필요하면 CLI를 사용하세요<br />
○ 서명 키 지문 확인: <code>gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc</code><br />
&nbsp;&nbsp;→ 지문이 <code>31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE</code> 이어야 해요
</div>

---

## .deb 파일로 직접 설치 (apt 저장소 미사용)

apt 저장소에 접근하기 어려운 경우 `.deb` 파일을 직접 다운로드해서 설치할 수 있어요:

1. `claude.com/download`에서 아키텍처에 맞는 `.deb` 파일 다운로드
2. 소프트웨어 설치 앱으로 열거나:

```bash
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ **주의**: 이 방법으로 설치하면 자동 업데이트가 되지 않아요. 나중에 apt 저장소를 추가하거나 직접 새 버전을 다운로드해야 해요.

---

## 업데이트 방법

Linux에서 Claude Desktop 앱은 자동 업데이트를 하지 않아요. 시스템 패키지 업데이트 명령어를 사용하세요:

```bash
sudo apt update && sudo apt upgrade
```

그래픽 소프트웨어 업데이터(예: GNOME Software)에서도 새 버전이 뜨면 업데이트할 수 있어요.

---

## 삭제 방법

```bash
sudo apt remove claude-desktop

# 저장소 항목도 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## Linux 베타에서 아직 지원되지 않는 기능

| 기능 | 상태 | 대안 |
|---|---|---|
| **Computer Use** (앱·화면 제어) | ❌ 미지원 | — |
| **음성 받아쓰기(Dictation)** | ❌ 미지원 | CLI의 `/voice` 명령어 사용 |
| **Quick Entry 전역 단축키** | X11에서만 지원 (Wayland 제한) | — |
| **Fedora / RHEL** | ❌ 미지원 | CLI 사용 권장 |

Chat, Cowork, Claude Code 탭은 모두 정상 지원돼요.

<div class="note-circle">
○ Computer Use와 음성 입력이 필요하면 CLI(터미널)를 사용하세요 — CLI는 더 넓은 Linux 배포판을 지원해요<br />
○ CLI 설치 방법: <code>curl -fsSL https://claude.ai/install.sh | bash</code>
</div>
