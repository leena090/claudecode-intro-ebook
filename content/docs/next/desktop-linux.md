---
title: "[공] Claude 데스크톱 앱, Linux에서도 됩니다! (베타)"
description: "Ubuntu 22.04·Debian 12 이상에서 Claude 데스크톱 앱을 apt로 설치 가능. Chat·Cowork·Code 탭 모두 지원. (베타)"
tags: ["linux", "데스크톱앱", "ubuntu", "debian", "설치", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — code.claude.com 공식 문서 신규 등재. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: Claude Desktop on Linux (beta)</a>
</div>

## 드디어! 리눅스에도 Claude 데스크톱 앱이 왔어요 🐧

지금까지 Claude 데스크톱 앱은 **macOS와 Windows**에서만 쓸 수 있었어요.

이제 **Ubuntu와 Debian 기반 Linux**에서도 같은 데스크톱 앱을 쓸 수 있게 됐어요! (베타)

> 🏠 **비유**: 이전엔 맥/윈도우 집만 있던 동네에 드디어 리눅스 집도 생긴 거예요.

## 지원 환경

| 항목 | 조건 |
|------|------|
| 배포판 | Ubuntu **22.04** 이상, Debian **12** 이상 |
| 아키텍처 | x86_64 (64비트 인텔/AMD), arm64 (ARM 64비트) |
| 기타 Debian 계열 | 비공식 지원 (동작할 수 있음) |
| Fedora / RHEL | ❌ 현재 미지원 (향후 예정) |
| Windows Server | ❌ 미지원 |

## 설치 방법

### 방법 1: apt 저장소 (권장 — 자동 업데이트됨)

```bash
# 1. Anthropic 서명 키 추가
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

# 2. apt 저장소 등록
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list

# 3. 설치
sudo apt update && sudo apt install claude-desktop
```

설치 후 앱 런처에서 **"Claude"** 를 찾거나, 터미널에서 `claude-desktop` 실행.

### 방법 2: .deb 파일 직접 설치

```bash
# claude.com/download에서 .deb 파일 다운로드 후
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 이 방법은 자동 업데이트가 되지 않아요. apt 저장소 방법을 권장.

## 업데이트 방법

Linux 데스크톱 앱은 **자동 업데이트가 없어요** — 직접 실행해야 해요:

```bash
sudo apt update && sudo apt upgrade
```

GUI 소프트웨어 업데이터(GNOME Software 등)도 새 버전을 자동으로 잡아줘요.

## 삭제 방법

```bash
sudo apt remove claude-desktop

# apt 저장소도 함께 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

## macOS/Windows와 동일한 기능들 ✅

Linux에서도 똑같이 쓸 수 있어요:

- 💬 Chat 탭 (대화)
- 🤝 Cowork 탭 (협업)
- 💻 Code 탭 (Claude Code)
- 병렬 세션 사이드바
- 비주얼 diff 리뷰
- 통합 터미널·에디터
- 라이브 앱 미리보기

## 아직 안 되는 것들 (베타 제한)

| 기능 | 상태 |
|------|------|
| 🖥️ Computer Use | ❌ Linux 미지원 |
| 🎤 Voice Dictation (음성 입력) | ❌ 데스크톱 앱 미지원 (CLI에서는 가능) |
| ⌨️ Quick Entry 전역 단축키 | ⚠️ X11만 지원, 네이티브 Wayland는 환경 설정 필요 |
| 🎩 Fedora / RHEL | ❌ 현재 미지원 |

## 리눅스에서 Claude Code CLI는?

데스크톱 앱이 안 되는 환경이라면 **CLI(터미널)**를 쓰면 돼요:

```bash
# Claude Code CLI — 더 많은 Linux 배포판 지원
curl -fsSL https://claude.ai/install.sh | bash
```

CLI는 데스크톱 앱보다 더 넓은 Linux 배포판을 지원해요.

> 📌 **서명 키 지문 확인**: `31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE`
