---
title: "[공] Linux에서 Claude Desktop 설치하기 (베타)"
description: "Ubuntu 22.04+ / Debian 12+ 에서 apt로 Claude Desktop 앱 설치하는 방법"
tags: ["설정", "linux", "desktop", "ubuntu", "debian", "설치", "자동생성"]
category: "advanced"
order: 35
lastUpdated: "2026-07-14"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — Claude Desktop on Linux (베타). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: code.claude.com/docs/en/desktop-linux</a>
</div>

> 🗒️ 2026년 6월 29일 (w27)부터 Linux용 Claude Desktop 앱 베타가 출시됐어요.

---

## 지원 환경

| 항목 | 조건 |
|---|---|
| 운영체제 | **Ubuntu 22.04+** 또는 **Debian 12+** |
| 아키텍처 | x86_64 (amd64) 또는 arm64 |
| 기타 | Debian 계열 다른 배포판도 비공식 동작 가능 |

> ⚠️ **Fedora, CentOS, RHEL** 등 RPM 계열은 현재 미지원이에요.

---

## 설치 방법 (apt 저장소)

> 🍱 **비유**: 우분투에서 프로그램 설치하는 방법이에요. "소프트웨어 센터"(apt 저장소)에 Anthropic 공식 주소를 등록하면, 이후 `apt install`로 간단히 설치하고 자동 업데이트도 받을 수 있어요.

### 1단계: 저장소 서명 키 추가

```bash
# curl이 없다면 먼저 설치
sudo apt install curl

# Anthropic 서명 키 다운로드
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

### 2단계: 저장소 등록

```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] https://downloads.claude.ai/claude-desktop/apt/stable stable main" \
  | sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 3단계: 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 4단계: 실행 및 로그인

- 앱 런처에서 **Claude** 검색해서 실행
- 또는 터미널에서 `claude-desktop` 입력
- Anthropic 계정으로 로그인

> 💡 구독 로그인(claude.ai) 또는 조직 SSO로 로그인 가능해요. Console API 키는 데스크톱 앱에서 직접 지원하지 않아요 — CLI를 사용하세요.

---

## 서명 키 확인 (선택)

설치 전 키가 Anthropic 것인지 직접 확인할 수 있어요:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

올바른 키 지문(Fingerprint):
```
31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE
```

---

## 업데이트 방법

Linux 버전은 앱 자체 자동 업데이트가 없어요. 시스템 패키지 업데이트로 받아요:

```bash
sudo apt update && sudo apt upgrade
```

또는 GUI 소프트웨어 업데이터에서도 업데이트돼요.

---

## 제거 방법

```bash
sudo apt remove claude-desktop

# 저장소 항목도 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 베타에서 아직 안 되는 것들

| 기능 | 상태 |
|---|---|
| Computer Use (앱·화면 제어) | ❌ Linux 미지원 |
| 음성 딕테이션 | ❌ 데스크톱 앱 미지원 (CLI에서 `/voice` 사용) |
| 빠른 입력 전역 단축키 | ⚠️ X11은 됨, 네이티브 Wayland는 제한적 |
| Fedora/RHEL | ❌ Debian 계열만 지원 |

> 💡 데스크톱 앱에 없는 기능은 **CLI**로 동일하게 쓸 수 있어요. CLI는 더 넓은 Linux 배포판 지원.

---

## 문제 해결

### "Unable to locate package claude-desktop" 오류

```bash
# 저장소가 제대로 추가됐는지 확인
cat /etc/apt/sources.list.d/claude-desktop.list
# → "deb [arch=..." 줄이 있어야 함

# 아키텍처 확인
dpkg --print-architecture
# → "amd64" 또는 "arm64" 여야 함

# 저장소 업데이트 후 재시도
sudo apt update && sudo apt install claude-desktop
```

### 인터넷에서 직접 .deb 파일 받아 설치하는 방법

저장소에 접근이 안 되는 환경이라면:

```bash
# 최신 .deb 파일 다운로드
curl -fLO "https://downloads.claude.ai/claude-desktop/apt/stable/$(curl -s \
  "https://downloads.claude.ai/claude-desktop/apt/stable/dists/stable/main/binary-$(dpkg --print-architecture)/Packages" \
  | grep '^Filename: pool/main/c/claude-desktop/claude-desktop_' \
  | sort -V | tail -n 1 | cut -d' ' -f2)"

# 설치
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 직접 설치한 .deb는 자동 업데이트가 안 돼요. 나중에 저장소를 등록하면 업데이트 가능.

<div class="note-circle">
○ Linux 베타는 w27 (2026-06-29) 출시됨<br />
○ 맥·윈도우와 동일한 Chat, Cowork, Code 탭 모두 사용 가능<br />
○ 베타 완료 후 미지원 기능(Computer Use 등) 순차 추가 예정
</div>
