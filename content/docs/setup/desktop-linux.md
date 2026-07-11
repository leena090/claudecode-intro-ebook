---
title: "[공] Linux에서 Claude 데스크탑 앱 설치하기 (베타)"
description: "Ubuntu·Debian에 Claude 데스크탑 앱을 설치하는 방법. apt 패키지로 자동 업데이트까지 한 번에 설정"
tags: ["설치", "linux", "ubuntu", "debian", "데스크탑앱", "setup", "자동생성"]
category: "setup"
order: 10
lastUpdated: "2026-07-11"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Desktop on Linux (베타). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a>
</div>

## Linux에서도 이제 Claude 데스크탑 앱을 쓸 수 있어요!

2026년 6월 말(Week 27)부터 **Ubuntu와 Debian 계열 Linux**에서도 Claude 데스크탑 앱을 사용할 수 있게 됐어요. macOS·Windows와 완전히 같은 기능을 제공해요.

> 🍱 **비유**: 맥이나 윈도우에서만 쓸 수 있던 고급 커피머신이 이제 리눅스 주방에도 들어온 셈이에요.

<div class="note-circle">
⚠️ 현재 <strong>베타</strong> 상태예요 (2026-07-11 기준). 일부 기능이 아직 제한돼 있어요.
</div>

---

## 설치 전 확인 사항

| 항목 | 요구 사항 |
|------|---------|
| **배포판** | Ubuntu 22.04 이상 또는 Debian 12 이상 |
| **CPU 아키텍처** | x86_64 (amd64) 또는 arm64 |
| **기타 Debian 계열** | 공식 지원 아님, 동작할 수 있음 |

---

## 설치 방법 (apt 패키지 — 권장)

apt 패키지로 설치하면 `sudo apt upgrade`로 자동 업데이트를 받을 수 있어요.

### 1단계: Anthropic apt 저장소 추가

터미널을 열고 아래 명령어를 순서대로 실행하세요.

먼저 서명 키를 다운로드해요:
```bash
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

<div class="note-circle">
○ <code>curl</code>이 없다면 먼저 설치: <code>sudo apt install curl</code>
</div>

저장소 등록:
```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 2단계: 패키지 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 3단계: 실행 및 로그인

앱 런처에서 **Claude**를 찾거나 터미널에서 실행해요:
```bash
claude-desktop
```

Anthropic 계정으로 로그인해요. 조직 SSO도 지원해요.

---

## 업데이트 방법

Linux 데스크탑 앱은 **자동 업데이트 안 함** — 시스템 패키지 업데이트로 새 버전을 받아요:

```bash
sudo apt update && sudo apt upgrade
```

또는 배포판의 소프트웨어 업데이터 GUI에서도 자동으로 업데이트 됩니다.

---

## 삭제 방법

```bash
sudo apt remove claude-desktop
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 베타에서 아직 안 되는 것들

| 기능 | 상태 |
|------|------|
| Computer Use (앱·화면 제어) | ❌ 미지원 |
| 음성 입력 (Dictation) | ❌ 미지원 (CLI `/voice` 사용) |
| Quick Entry 글로벌 단축키 | ⚠️ X11에서만 동작 (Wayland는 제한) |
| Fedora / RHEL | ❌ 미지원 (추후 지원 예정) |

---

## 데스크탑 앱 vs CLI — 어떤 걸 쓸까요?

| 상황 | 추천 |
|------|------|
| 시각적 UI, 멀티세션 | 데스크탑 앱 |
| Ubuntu 20.04 이하, RHEL, Fedora | CLI (더 넓은 지원) |
| 음성 입력 필요 | CLI + `/voice` |
| 서버 환경 / CI | CLI |

<div class="note-circle">
○ 공식 서명 키 지문: <code>31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE</code><br />
○ 데스크탑 앱 전체 기능 가이드: <a href="https://code.claude.com/docs/en/desktop" target="_blank">code.claude.com/docs/en/desktop</a>
</div>
