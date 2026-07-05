---
title: "[공] 리눅스에서 Claude 데스크톱 앱 설치하기 (베타)"
description: "Ubuntu·Debian에서 Claude 데스크톱 앱을 apt로 설치하는 방법. Chat, Cowork, Claude Code 탭 모두 사용 가능"
tags: ["설치", "리눅스", "ubuntu", "debian", "데스크톱", "자동생성"]
category: "setup"
order: 8
lastUpdated: "2026-07-05"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Desktop on Linux (베타). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a><br />
⚠️ <strong>베타</strong> — 아직 완전하지 않지만, 핵심 기능은 모두 사용 가능해요.
</div>

## 리눅스에도 드디어 데스크톱 앱이 왔어요 🎉

그동안 Claude 데스크톱 앱은 macOS와 Windows에서만 사용할 수 있었어요. 이제 **Ubuntu·Debian 계열 리눅스**에서도 데스크톱 앱을 설치해서 쓸 수 있게 됐어요.

> 🍱 **비유**: 맛집이 서울·부산에만 있다가 이제 대전에도 생긴 것처럼, 리눅스 사용자도 터미널이 아닌 **GUI 앱**으로 편하게 Claude를 쓸 수 있게 됐어요.

### 무엇을 쓸 수 있나요?

| 기능 | 리눅스 지원 여부 |
|------|----------------|
| 💬 Chat (대화) | ✅ 사용 가능 |
| 👥 Cowork (협업) | ✅ 사용 가능 |
| 💻 Claude Code | ✅ 사용 가능 |
| 멀티 세션 사이드바 | ✅ 사용 가능 |
| 비주얼 diff 리뷰 | ✅ 사용 가능 |
| 내장 터미널·에디터 | ✅ 사용 가능 |
| Computer Use (앱 제어) | ❌ 아직 미지원 |
| 음성 받아쓰기(Dictation) | ❌ 아직 미지원 |

---

## 시스템 요구사항

| 항목 | 조건 |
|------|------|
| 운영체제 | **Ubuntu 22.04** 이상, 또는 **Debian 12** 이상 |
| 아키텍처 | x86_64 (인텔·AMD) 또는 arm64 |
| Fedora, RHEL | ❌ 아직 미지원 |

<div class="note-circle">
○ Debian 기반 다른 배포판(Linux Mint 등)도 요구사항을 만족하면 될 수 있지만, 공식 테스트는 Ubuntu·Debian만 해요.
</div>

---

## 설치 방법

### 방법 1: apt 저장소로 설치 (권장 — 자동 업데이트 됨)

터미널을 열고 아래 명령어를 순서대로 실행해요.

#### 1단계: Anthropic 서명 키 추가

```bash
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

> 🍱 **비유**: 이 과정은 "이 소프트웨어가 진짜 Anthropic에서 만든 거야"를 확인하는 도장을 등록하는 거예요. 가짜 프로그램이 몰래 설치되는 걸 막아줘요.

#### 2단계: 저장소 등록

```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

#### 3단계: 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

#### 4단계: 실행 및 로그인

- 앱 런처에서 **Claude** 를 찾아 실행하거나
- 터미널에서 `claude-desktop` 명령으로 실행해요
- claude.ai 계정으로 로그인하면 완료!

<div class="note-circle">
○ Pro, Max, Team, Enterprise 구독이나 조직 SSO로 로그인 가능해요<br />
○ Claude Console API 키는 Desktop에서 직접 안 돼요 — API 키로 쓰려면 CLI를 사용하세요
</div>

---

### 방법 2: .deb 파일로 설치 (저장소 없이)

apt 저장소를 쓸 수 없는 환경이라면 `.deb` 파일을 직접 받아 설치할 수 있어요.

1. [claude.com/download](https://claude.com/download)에서 아키텍처에 맞는 `.deb` 파일 다운로드
2. 설치:

```bash
# 다운로드 폴더에서 실행
sudo apt install ./claude-desktop_*.deb
```

<div class="note-circle">
⚠️ 이 방법으로 설치하면 <strong>자동 업데이트가 안 돼요</strong>. 최신 버전을 쓰려면 직접 새 파일을 받아 다시 설치해야 해요. apt 저장소 방법을 권장해요.
</div>

---

## 업데이트 방법

리눅스의 Claude 데스크톱은 앱이 **스스로 업데이트하지 않아요**. 아래 명령어로 업데이트해요.

```bash
sudo apt update && sudo apt upgrade
```

또는 GUI 소프트웨어 업데이트 도구에서도 새 버전을 설치할 수 있어요.

---

## 삭제 방법

```bash
sudo apt remove claude-desktop

# 저장소도 함께 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 리눅스 베타에서 아직 안 되는 것들

| 기능 | 대안 |
|------|------|
| **Computer Use** (앱·화면 제어) | 지원 예정 없음 (현재) |
| **음성 받아쓰기** | CLI의 `/voice` 명령 사용 |
| **전역 단축키** (Quick Entry) | X11은 동작, Wayland는 제한적 |
| **Fedora·RHEL** | CLI 사용 (더 많은 배포판 지원 예정) |

> 🍱 **비유**: 리눅스 데스크톱 앱은 "거의 완성된 레스토랑"이에요. 메인 메뉴는 전부 있는데, 일부 사이드 메뉴가 아직 준비 중인 상태예요. 터미널 CLI는 모든 기능을 사용할 수 있어요.

---

## 서명 키 검증 (선택 사항)

설치가 찜찜하다면 서명 키를 직접 확인할 수 있어요:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

정상적인 키의 지문(fingerprint):
```
31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE
```

---

## 관련 문서

- [데스크톱 앱 전체 기능 가이드](/setup/install-desktop) `[공]`
- [CLI 설치 가이드](/setup/install-claude-code) (더 많은 리눅스 배포판 지원)
- [시스템 요구사항](https://code.claude.com/docs/en/setup) `[공]`
