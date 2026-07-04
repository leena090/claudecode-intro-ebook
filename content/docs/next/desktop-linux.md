---
title: "[공] Linux에서 Claude Desktop 앱 사용하기 (베타)"
description: "Ubuntu 22.04+, Debian 12+ 사용자를 위한 Claude Desktop 앱 Linux 베타 설치 가이드. apt 저장소 설치부터 업데이트까지"
tags: ["데스크톱", "linux", "ubuntu", "debian", "설치", "2026", "자동생성"]
category: "next"
order: 18
lastUpdated: "2026-07-04"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/desktop-linux">code.claude.com/docs/en/desktop-linux</a>. <code>[공]</code><br />
⚠️ <strong>현재 베타(Beta)</strong> — 공식 지원 배포판: Ubuntu 22.04+, Debian 12+
</div>

## 드디어 Linux에서도 Desktop 앱!

Claude Code Desktop 앱이 **Linux(베타)를 지원**하기 시작했어요. 이제 Ubuntu·Debian 사용자도 macOS·Windows와 똑같은 Desktop 앱 경험을 할 수 있어요.

> 🍱 **비유**: 맛있는 음식이 처음엔 서울에서만 팔렸는데, 드디어 **리눅스 PC에서도 배달이 가능**해진 거예요!

---

## 지원 환경

| 항목 | 내용 |
|------|------|
| 운영체제 | Ubuntu **22.04** 이상, Debian **12** 이상 |
| 아키텍처 | x86_64 (64비트), arm64 |
| 상태 | 🟡 **베타** |
| Chat / Cowork / Code | ✅ 모두 사용 가능 |

<div class="note-circle">
○ Fedora·RHEL 등 다른 배포판은 아직 공식 지원 안 해요 (추후 지원 예정)<br />
○ Ubuntu 22.04 이상이라도 데비안 기반이 아닌 경우 비공식 테스트 환경이에요
</div>

---

## 설치 방법 — apt 저장소 추가 (권장)

업데이트가 시스템 apt 업데이트와 함께 자동으로 오는 방법이에요.

### 1단계: Anthropic 서명 키 추가

```bash
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

### 2단계: 저장소 등록

```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" \
  | sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 3단계: 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 4단계: 실행 및 로그인

```bash
# 앱 런처에서 "Claude"를 검색하거나 터미널에서:
claude-desktop

# Anthropic 계정으로 로그인하세요
```

---

## 설치 방법 — .deb 파일 직접 설치

apt 저장소를 사용할 수 없는 환경이라면 .deb 파일을 직접 받아서 설치할 수 있어요.

```bash
# 1. claude.com/download 에서 x64 또는 arm64 .deb 파일 다운로드 후:
sudo apt install ./claude-desktop_*.deb
```

⚠️ 이 방법으로 설치하면 **자동 업데이트가 안 돼요**. 최신 버전 유지를 위해 apt 저장소 방식을 권장해요.

---

## 업데이트 방법

Linux에서는 앱이 자동으로 업데이트되지 않아요. 시스템 업데이트와 함께 실행해야 해요:

```bash
sudo apt update && sudo apt upgrade
```

또는 OS의 그래픽 소프트웨어 업데이터를 사용해도 돼요.

---

## 삭제 방법

```bash
# 앱 삭제
sudo apt remove claude-desktop

# 저장소 등록 파일도 삭제 (apt로 설치한 경우)
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## ⚠️ Linux 베타에서 아직 안 되는 것들

| 기능 | 상태 | 대안 |
|------|------|------|
| Computer Use (앱·화면 제어) | ❌ 미지원 | — |
| 음성 입력(Dictation) | ❌ 미지원 | CLI의 `/voice` 명령어 |
| Quick Entry 전역 단축키 (Wayland) | ⚠️ 제한적 | X11에서는 동작, Wayland는 데스크톱 환경 설정 필요 |
| Fedora / RHEL | ❌ 미지원 | CLI 버전 사용 권장 |

<div class="note-circle">
○ Computer Use, Dictation을 포함한 전체 기능은 macOS·Windows Desktop 앱 참조<br />
○ CLI 버전(<code>claude</code>)은 더 많은 Linux 배포판을 지원하고 모든 기능 사용 가능
</div>

---

## CLI vs Desktop 앱 — 어떤 걸 쓸까요?

| | CLI (`claude`) | Desktop 앱 (`claude-desktop`) |
|--|---|---|
| 지원 배포판 | 더 많음 | Ubuntu 22.04+, Debian 12+ |
| 그래픽 UI | ❌ | ✅ |
| 멀티 세션 사이드바 | ❌ | ✅ |
| Computer Use | ❌ (Linux) | ❌ (베타 미지원) |
| 자동 업데이트 | ✅ | ❌ (apt upgrade 필요) |

> 🍱 **비유**: CLI는 **오토바이** — 빠르고 어디든 들어가지만 화면이 없어요. Desktop 앱은 **승용차** — 편리한 인터페이스를 갖췄지만 아직 일부 도로(배포판)는 막혀 있어요.

---

## 📎 관련 가이드

- [Claude Code Desktop 앱 완전 가이드](/docs/advanced/desktop-redesign)
- [Claude Code 설치 가이드](/docs/setup/setup)
- [주간 업데이트 Week 25](/docs/next/whats-new-w25) — 같은 시기 다른 업데이트
