---
title: "[공] Linux·WSL에서 Claude Code 데스크톱 앱 설치하기 (베타)"
description: "Ubuntu·Debian에서 apt로 Claude 데스크톱 앱 설치, Windows WSL에서 사용하는 방법까지 — 리눅스·WSL 사용자 완전 가이드"
tags: ["linux", "wsl", "데스크톱", "설치", "ubuntu", "debian", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-07-15"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — code.claude.com/docs/en/desktop-linux, /desktop-wsl. <code>[공]</code><br />
2026년 6월 29일 (W27) 출시 — v2.1.195 이상 필요
</div>

## 리눅스에서도 됩니다! 🎉

2026년 6월 말(W27), Claude Code 데스크톱 앱이 **Linux 베타**로 출시됐어요!

| 운영체제 | 지원 상태 |
|----------|-----------|
| Ubuntu 22.04 이상 | ✅ 베타 |
| Debian 12 이상 | ✅ 베타 |
| macOS | ✅ 정식 |
| Windows | ✅ 정식 |
| Fedora / RHEL | 🔜 지원 예정 |
| 기타 Debian 계열 | ⚠️ 미공식 (작동할 수 있음) |

> 🖥️ **비유**: 맥과 윈도우만 있던 프리미엄 카페가 드디어 리눅스 지점을 열었어요! 같은 메뉴, 같은 맛이에요.

---

## Linux 설치하기 (Ubuntu / Debian)

### 방법 1: apt 패키지 관리자 (권장)

apt를 통해 설치하면 이후 `apt upgrade`로 **자동 업데이트**가 돼요.

```bash
# 1단계: curl이 없으면 먼저 설치
sudo apt install curl

# 2단계: Anthropic 서명 키 다운로드
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

# 3단계: apt 저장소 등록
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list

# 4단계: 설치
sudo apt update && sudo apt install claude-desktop
```

<div class="note-circle">
○ x86_64(amd64)와 arm64(예: 애플 실리콘 리눅스) 모두 지원해요<br />
○ 서명 키 지문 확인: <code>31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE</code>
</div>

### 방법 2: .deb 파일 직접 다운로드

apt 저장소를 사용할 수 없는 환경(회사 네트워크 등)에서는 파일을 직접 받을 수 있어요:

```bash
# 최신 버전 파일 자동 다운로드
curl -fLO "https://downloads.claude.ai/claude-desktop/apt/stable/$(curl -s \
  "https://downloads.claude.ai/claude-desktop/apt/stable/dists/stable/main/binary-$(dpkg --print-architecture)/Packages" | \
  grep '^Filename: pool/main/c/claude-desktop/claude-desktop_' | sort -V | tail -n 1 | cut -d' ' -f2)"

# GNOME Software 등 UI로 설치하거나:
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ **주의**: .deb 직접 설치 방식은 자동 업데이트가 안 돼요. 업데이트하려면 다시 다운로드해야 해요. apt 저장소 방식을 권장해요.

---

## 처음 실행하기

```bash
# 앱 실행기에서 "Claude"를 검색하거나:
claude-desktop
```

**로그인**: claude.ai 계정으로 로그인해요 (macOS·Windows와 동일). API 키 직접 로그인은 지원 안 돼요.

> 💡 **API 키 사용자라면**: 데스크톱 앱 대신 CLI(`claude`)를 사용하세요. CLI는 더 다양한 리눅스 배포판에서 동작해요.

---

## 업데이트·제거

```bash
# 업데이트 (apt 방식으로 설치했을 때)
sudo apt update && sudo apt upgrade

# 제거
sudo apt remove claude-desktop
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

Linux에서는 데스크톱 앱이 스스로 업데이트하지 않아요. 시스템 업데이트 시 함께 업데이트돼요.

---

## Linux 베타에서 아직 안 되는 것들

| 기능 | 상태 |
|------|------|
| Chat, Cowork, Claude Code 탭 | ✅ 전부 사용 가능 |
| Computer Use (앱·화면 조작) | ❌ 미지원 |
| 음성 입력(Dictation) | ❌ 미지원 (CLI 음성은 사용 가능) |
| Quick Entry 전역 단축키 | ⚠️ X11에서만 작동 (Wayland 제한적) |
| Fedora / RHEL | ❌ 미지원 (곧 지원 예정) |

---

## Windows WSL에서 사용하기

Windows에서 WSL(Windows Subsystem for Linux, 윈도우 리눅스 서브시스템) 안에 프로젝트가 있다면, 데스크톱 앱의 **Code 탭**에서 WSL 환경 내부로 세션을 실행할 수 있어요.

### 왜 WSL 세션이 필요할까요?

> 💡 WSL 파일시스템의 파일을 Windows에서 직접 열면 속도가 느리고 파일 변경 감지가 안 돼요. WSL 세션은 리눅스 환경 안에서 실행되어 이 문제를 해결해요.

### 요구사항

- Windows 10 또는 11 + **WSL 2** (WSL 1은 지원 안 함)
- WSL 배포판 최소 1개 설치 (예: Ubuntu)
- 배포판 내부에 `git` 설치

### WSL 세션 시작하기

1. Code 탭에서 새 세션 시작
2. 환경 피커에서 **WSL** 섹션의 배포판 선택
3. 배포판 내부 폴더 선택 (예: `/home/username/project`)
4. 처음 사용 시 신뢰 확인(workspace trust) 대화상자 표시

<div class="note-circle">
○ 첫 번째 WSL 세션은 Claude 환경을 설정하느라 조금 더 걸려요<br />
○ 최근 폴더 목록에 배포판별로 나타나서 재접속이 편해요
</div>

### WSL 세션 기능 현황

| 기능 | 상태 |
|------|------|
| 멀티세션, 비주얼 diff 리뷰 | ✅ |
| 브랜치·PR 상태 | ✅ |
| VS Code 열기 (Remote-WSL) | ✅ |
| 내장 터미널 | ❌ 미지원 |
| 커넥터·플러그인 | ❌ 미지원 |
| 파일 브라우저 패널 | ❌ 미지원 |
| @ 타이핑 파일 제안 | ❌ 미지원 |

> ⚠️ 조직 관리형 디바이스에서는 WSL 세션이 관리자 설정에 따라 차단될 수 있어요.

---

## 자주 묻는 질문

**Q: Ubuntu 20.04도 설치되나요?**
공식 지원은 22.04 이상이에요. 20.04는 시도해볼 수 있지만 공식 테스트는 안 됐어요.

**Q: Raspberry Pi(라즈베리 파이)에서도 되나요?**
arm64를 지원하므로 Raspberry Pi OS(64비트) 등에서 시도해볼 수 있어요. 단, Debian 12 이상 기반이어야 해요.

**Q: CLI(`claude` 명령어)와 데스크톱 앱(`claude-desktop`)의 차이는?**
CLI는 터미널에서 직접 실행하는 텍스트 기반 도구고, 데스크톱 앱은 멀티세션·비주얼 diff·내장 브라우저 등 GUI 기능이 있어요. 둘 다 같은 Claude Code 엔진을 사용해요.
