---
title: "[공] Claude 데스크톱 앱, 이제 리눅스(Linux)에서도 돼요 (베타)"
description: "Ubuntu·Debian 리눅스에서 Claude 데스크톱 앱을 설치할 수 있어요. apt 패키지로 설치하고 자동 업데이트까지 받을 수 있어요"
tags: ["리눅스", "linux", "데스크톱앱", "ubuntu", "debian", "설치", "베타", "자동생성"]
category: "next"
order: 19
lastUpdated: "2026-07-08"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Desktop on Linux (beta). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a><br />
⚠️ <strong>베타 단계</strong> — 일부 기능(Computer Use, 음성 입력)은 아직 미지원
</div>

---

## 이게 왜 중요한가요?

지금까지 Claude 데스크톱 앱은 **macOS와 Windows**에서만 됐어요. 이제 **Ubuntu·Debian 계열 리눅스**에서도 데스크톱 앱을 쓸 수 있어요.

> 🍱 **비유**: 편의점 음료가 이제 리눅스 사용자 동네에도 들어온 거예요. 터미널(CLI)만 쓰던 리눅스 사용자들도 GUI 앱을 쓸 수 있게 됐어요.

**리눅스 데스크톱 앱에서 쓸 수 있는 것들:**

| 기능 | 지원 |
|---|---|
| Chat (일반 대화) | ✅ |
| Cowork (협업) | ✅ |
| Claude Code (코딩 에이전트) | ✅ |
| 병렬 세션 | ✅ |
| 비주얼 diff 리뷰 | ✅ |
| 통합 터미널·에디터 | ✅ |
| 라이브 앱 미리보기 | ✅ |

---

## 시스템 요구사항

| 항목 | 조건 |
|---|---|
| 배포판 | Ubuntu 22.04 이상, 또는 Debian 12 이상 |
| 아키텍처 | x86_64 또는 arm64 |
| 비공식 지원 | 위 조건을 만족하는 다른 Debian 기반 배포판 (테스트 안 됨) |

> ⚠️ Fedora, RHEL(Red Hat), Arch Linux 등은 **현재 미지원**이에요. 추후 지원 예정.

---

## 설치 방법 (apt 저장소 사용, 권장)

apt 저장소로 설치하면 **일반 시스템 업데이트(`apt upgrade`)와 함께 Claude도 자동 업데이트**돼요.

### 1단계 — Anthropic 서명 키 등록

```bash
# curl이 없으면 먼저 설치
sudo apt install curl

# Anthropic 서명 키 다운로드
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

# apt 저장소 등록
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 2단계 — 패키지 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 3단계 — 실행 및 로그인

앱 런처에서 **Claude**를 열거나, 터미널에서:

```bash
claude-desktop
```

claude.ai 계정(Pro·Max·Team·Enterprise)으로 로그인하면 돼요.

---

## 수동 설치 (저장소 없이)

인터넷이 제한된 환경이라면 `.deb` 파일을 직접 받아서 설치할 수 있어요.

```bash
# 다운로드한 .deb 파일 설치
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 이 방법으로 설치하면 **자동 업데이트가 안 돼요**. 업데이트를 받으려면 나중에라도 apt 저장소를 등록해야 해요.

---

## 업데이트 방법

리눅스 데스크톱 앱은 **자동 업데이트를 직접 하지 않아요**. 시스템의 패키지 업데이트와 함께 처리해요.

```bash
sudo apt update && sudo apt upgrade
```

GUI 소프트웨어 업데이터 앱에서도 업데이트 알림이 와요.

---

## 삭제 방법

```bash
sudo apt remove claude-desktop

# 저장소 등록도 삭제하려면
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 아직 리눅스 베타에서 안 되는 것들

| 기능 | 상태 | 대안 |
|---|---|---|
| Computer Use (앱·화면 조작) | ❌ 미지원 | — |
| 음성 입력 (Dictation) | ❌ 미지원 | CLI의 `/voice` 사용 |
| Quick Entry 전역 단축키 | ⚠️ X11만 됨, Wayland는 제한적 | — |
| Fedora·RHEL 지원 | ❌ 미지원 | CLI 사용 |

<div class="note-circle">
○ 위 기능이 필요하다면 <strong>CLI (터미널 버전)</strong>를 쓰세요 — 더 많은 Linux 배포판에서 작동해요<br />
○ CLI 설치: <code>curl -fsSL https://claude.ai/install.sh | bash</code>
</div>

---

## 서명 키 검증 (선택)

보안을 위해 다운로드된 서명 키가 Anthropic 것인지 확인할 수 있어요.

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

올바른 핑거프린트: `31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE`

---

## 어떤 분한테 유용한가요?

| 상황 | 추천 여부 |
|---|---|
| Ubuntu·Debian 쓰는 개발자 | ✅ 강력 추천 |
| GUI 앱이 CLI보다 편한 분 | ✅ 설치해 보세요 |
| 여러 Claude Code 세션 동시 관리 필요 | ✅ 데스크톱 앱이 편해요 |
| Fedora·Arch 사용자 | ⏳ 지원 기다리거나 CLI 사용 |
| Computer Use가 꼭 필요한 분 | ❌ macOS 앱 사용 |
