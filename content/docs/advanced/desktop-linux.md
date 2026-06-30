---
title: "[공] Linux에서도 Claude Code 데스크톱 앱 쓰기 (베타)"
description: "Ubuntu·Debian에 Claude Code 데스크톱 앱 설치하기 — apt 저장소 등록부터 업데이트 방법까지"
tags: ["linux", "desktop", "ubuntu", "debian", "설치", "베타", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-30"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code Linux 데스크톱 앱 공개 베타. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a>
</div>

> 🎉 **새 소식** — Claude Code 데스크톱 앱이 드디어 Linux를 지원하기 시작했어요! Chat, Cowork, Code 탭 모두 사용 가능해요.

## Linux에서도 데스크톱 앱이 가능해요

지금까지 Claude Code 데스크톱 앱은 macOS와 Windows에서만 쓸 수 있었어요. 이제 **Ubuntu·Debian 기반의 Linux**에서도 사용할 수 있어요(현재 베타).

> 🍱 **비유**: 맛있는 식당이 서울·부산에만 있었는데 드디어 대전에도 분점이 생긴 것과 같아요. 메뉴가 완전히 같지는 않지만(일부 기능 미지원), 핵심 메뉴는 다 있어요.

macOS/Windows와 동일하게 사용 가능한 기능:
- 🖥️ 여러 세션 동시 실행 (멀티 세션 사이드바)
- 📄 시각적 diff 리뷰
- 💻 통합 터미널 + 에디터
- 👀 실시간 앱 미리보기

---

## 설치 가능한 환경

| 항목 | 요구사항 |
|---|---|
| 운영체제 | Ubuntu 22.04 이상 또는 Debian 12 이상 |
| CPU 아키텍처 | x86_64 (Intel/AMD) 또는 arm64 (ARM) |
| 기타 Debian 계열 | 위 요건을 충족하면 동작할 수 있음 (공식 지원 아님) |

<div class="note-circle">
○ Fedora, RHEL, openSUSE 등은 아직 미지원이에요<br />
○ 데스크톱 앱 없이 Claude Code CLI는 더 다양한 Linux 배포판에서 사용 가능 — <a href="https://code.claude.com/docs/en/setup" target="_blank">시스템 요구사항 확인</a>
</div>

---

## 설치 방법

### 방법 1: apt 저장소 등록 (업데이트 자동 수신, 추천)

```bash
# 1. Anthropic 서명 키 등록
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

# 2. apt 저장소 추가
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list

# 3. 설치
sudo apt update && sudo apt install claude-desktop
```

설치 후, 앱 런처에서 **Claude**를 검색하거나 터미널에서 `claude-desktop`으로 실행할 수 있어요.

### 방법 2: .deb 파일 직접 설치

apt 저장소를 쓸 수 없는 환경이라면 [claude.com/download](https://claude.com/download)에서 `.deb` 파일을 받아서 설치할 수 있어요.

```bash
# 다운로드 폴더에서 실행
sudo apt install ./claude-desktop_*.deb
```

<div class="note-circle">
⚠️ <strong>주의</strong>: 이 방법은 자동 업데이트를 받지 못해요. apt 저장소 방식을 권장해요.
</div>

---

## 업데이트 방법

macOS/Windows 데스크톱 앱과 달리, **Linux 버전은 앱이 스스로 업데이트되지 않아요**.

시스템 패키지 업데이트 명령으로 수동으로 업데이트해요:

```bash
sudo apt update && sudo apt upgrade
```

또는 그래픽 소프트웨어 업데이트 앱에서 진행해도 돼요.

> 🍱 **비유**: iOS 앱처럼 자동으로 업데이트되는 게 아니라, 윈도우 업데이트처럼 "업데이트 확인" 버튼을 눌러야 하는 방식이에요.

---

## 제거 방법

```bash
sudo apt remove claude-desktop

# apt 저장소도 함께 제거하려면
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## Linux 베타에서 아직 안 되는 것들

| 기능 | Linux 상태 | 대안 |
|---|---|---|
| Computer Use (앱·화면 제어) | ❌ 미지원 | macOS/Windows에서 사용 |
| 음성 입력 (Dictation) | ❌ 미지원 | CLI의 `/voice` 사용 |
| 전역 단축키 (Quick Entry) | X11: ✅, Wayland: ⚠️ 환경 따라 다름 | — |
| Fedora/RHEL | ❌ 미지원 | 추후 지원 예정 |

<div class="note-circle">
○ CLI 버전의 Claude Code는 더 넓은 범위의 Linux 배포판을 지원해요<br />
○ 데스크톱 앱의 모든 기능이 필요하지 않다면 CLI로도 충분해요
</div>
