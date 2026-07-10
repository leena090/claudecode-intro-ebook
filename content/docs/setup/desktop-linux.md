---
title: "[공] Linux에서 Claude Code 데스크톱 앱 설치하기 (베타)"
description: "Ubuntu·Debian 기반 Linux에서 Claude Code 데스크톱 앱을 apt 명령어로 설치하는 방법"
tags: ["설치", "linux", "ubuntu", "debian", "데스크톱", "자동생성"]
category: "setup"
order: 8
lastUpdated: "2026-07-10"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Linux 데스크톱 앱 베타 출시. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a><br />
⚠️ 현재 <strong>베타(시험) 단계</strong>예요 — 일부 기능이 아직 없을 수 있어요
</div>

## 드디어 Linux에도 데스크톱 앱이!

Claude Code 데스크톱 앱이 지금까지 macOS와 Windows만 지원했는데, 이제 **Linux에서도 쓸 수 있게 됐어요** 🎉

> 🍱 **비유**: 지금까지 햄버거 가게(Claude Code)가 강남점(macOS)·강북점(Windows)만 있었는데, 드디어 Linux 동네에도 지점이 생긴 것과 같아요. 메뉴는 거의 같고, 일부 메뉴(기능)만 아직 준비 중이에요.

macOS·Windows 앱과 마찬가지로 **Chat(채팅), Cowork(협업), Claude Code(코딩) 탭**을 모두 쓸 수 있어요.

---

## 지원 환경

| 항목 | 조건 |
|------|------|
| 운영체제 | Ubuntu 22.04 이상, Debian 12 이상 |
| CPU 아키텍처 | x86_64 (Intel/AMD) 또는 arm64 (ARM) |
| 기타 Debian 기반 | 공식 지원은 아니지만 동작할 수 있어요 |

<div class="note-circle">
○ Fedora, RHEL 등 RPM 기반 배포판은 아직 미지원이에요<br />
○ 지원하지 않는 환경이라면 CLI(터미널) 버전을 사용하세요
</div>

---

## 설치 방법 (apt 저장소 이용 — 권장)

Anthropic 공식 apt 저장소를 등록하면 **이후 업데이트도 자동으로** 받을 수 있어요.

### 1단계: 서명 키 등록

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

- 앱 런처에서 **"Claude"** 를 찾아 실행하거나
- 터미널에서 `claude-desktop` 입력

그다음 claude.ai 계정 또는 조직 SSO로 로그인하면 돼요.

---

## 업데이트 방법

Linux 앱은 **자동 업데이트가 없어요**. 시스템 패키지 업데이트 명령어를 쓰면 돼요:

```bash
sudo apt update && sudo apt upgrade
```

그래픽 소프트웨어 업데이터에서도 새 버전을 볼 수 있어요.

---

## .deb 파일로 직접 설치 (저장소 없이)

apt 저장소를 쓸 수 없을 때는 [claude.com/download](https://claude.com/download)에서 `.deb` 파일을 직접 받아 설치할 수 있어요:

```bash
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 이 방법으로 설치하면 자동 업데이트가 되지 않아요. 새 버전이 나오면 직접 다시 받아야 해요.

---

## 아직 없는 기능 (베타 제한)

| 기능 | 상태 |
|------|------|
| Computer Use (앱·화면 제어) | Linux 미지원 |
| Dictation (음성 입력) | Linux 앱 미지원 (CLI 음성 딕테이션은 사용 가능) |
| Quick Entry 전역 단축키 | X11에서만 작동, Wayland는 데스크톱 환경 설정 필요 |
| Fedora / RHEL 지원 | 미지원 (추후 예정) |

<div class="note-circle">
○ 데스크톱 앱에 없는 기능은 CLI(터미널 버전)에서 사용할 수 있어요<br />
○ CLI는 더 많은 Linux 배포판을 지원해요 — 설치법: <code>curl -fsSL https://claude.ai/install.sh | bash</code>
</div>

---

## 제거 방법

```bash
sudo apt remove claude-desktop

# 저장소 항목도 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 기존 CLI 사용자라면?

지금 터미널에서 `claude`로 쓰고 계신다면, **데스크톱 앱 설치 여부는 선택 사항**이에요.

| 방법 | 추천 대상 |
|------|----------|
| 데스크톱 앱 | 시각적 UI, 멀티 세션 탭, 미리보기 기능 원할 때 |
| CLI (터미널) | 이미 익숙하고 가볍게 쓰고 싶을 때, Fedora/RHEL 등 |

<div class="note-circle">
○ 데스크톱 앱과 CLI는 동일한 Claude Code 엔진을 써요 — 기능 차이는 UI뿐이에요
</div>
