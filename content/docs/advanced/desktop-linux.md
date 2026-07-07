---
title: "[공] Claude Code 데스크톱 앱 — 리눅스 베타 설치 가이드"
description: "Ubuntu·Debian에서 Claude 데스크톱 앱 설치하기. apt 저장소 등록부터 시작, Chat·Cowork·Claude Code 탭 모두 사용 가능"
tags: ["리눅스", "desktop", "ubuntu", "debian", "설치", "apt", "베타", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-07-07"
---

<div class="note-star">

★ **공식 발표 기준** — [Claude Desktop on Linux (beta)](https://code.claude.com/docs/en/desktop-linux) `[공]`  
⚠️ **베타 버전** — 공식 지원 배포판: Ubuntu 22.04+, Debian 12+. 기타 Debian 계열은 비공식 지원.

</div>

## 드디어 리눅스에서도 Claude 데스크톱 앱을!

Claude 데스크톱 앱이 **리눅스 베타**로 출시됐어요. 이제 Ubuntu나 Debian이라면 macOS·Windows와 동일하게:

- **Chat 탭** — 일반 대화
- **Cowork 탭** — 팀 협업
- **Claude Code 탭** — 코딩 에이전트 (멀티 세션, 비주얼 diff, 통합 터미널)

이 모두를 데스크톱 앱으로 쓸 수 있어요.

> 🍱 **비유**: 지금까지 리눅스에선 터미널 CLI만 썼다면, 이제 macOS 사용자와 똑같은 그래픽 환경에서 Claude를 쓸 수 있어요 — 옷장에서 정장 꺼내 입는 것처럼요.

---

## 시스템 요구사항

| 항목 | 조건 |
|---|---|
| **지원 배포판** | Ubuntu 22.04 이상, Debian 12 이상 |
| **아키텍처** | x86\_64 (AMD64), arm64 |
| **비공식 지원** | 위 요건을 충족하는 다른 Debian 계열 배포판 |
| **미지원** | Fedora, RHEL (향후 지원 예정) |

---

## 설치 방법: apt 저장소 등록 (권장)

apt 저장소에 등록하면 **시스템 업데이트와 함께 자동으로 Claude도 업데이트**돼요.

### 1단계 — Anthropic 서명 키 추가

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

- **앱 런처**에서 "Claude"를 찾아 실행하거나
- 터미널에서 `claude-desktop` 입력

로그인 방법:
- **claude.ai 구독 계정** (Pro, Max, Team, Enterprise)
- **조직 SSO** (Enterprise)

<div class="note-circle">

○ Claude Console API 키로는 데스크톱 앱에 직접 로그인이 안 돼요  
○ API 키 인증은 CLI(`claude` 명령어)를 사용하세요  

</div>

---

## 서명 키 확인 (선택)

설치 전 키가 진짜 Anthropic 것인지 확인하고 싶다면:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

핑거프린트가 `31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE`인지 확인하세요.

---

## 대안: .deb 파일로 직접 설치

apt 저장소를 쓸 수 없는 환경이라면 `.deb` 파일을 직접 다운로드해서 설치할 수 있어요.

```bash
# 다운로드한 .deb 파일이 있는 디렉토리에서
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 이 방식은 자동 업데이트가 안 돼요. 업데이트는 수동으로 새 `.deb`를 받아야 해요.

---

## 업데이트 방법

리눅스 데스크톱 앱은 자동 업데이트가 없어요. apt 저장소를 통해 시스템 업데이트로 받아요:

```bash
sudo apt update && sudo apt upgrade
```

그래픽 소프트웨어 업데이터(우분투 소프트웨어·GNOME 소프트웨어 등)에서도 업데이트가 표시돼요.

---

## 삭제 방법

```bash
sudo apt remove claude-desktop

# 저장소 항목도 함께 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 아직 리눅스 베타에서 안 되는 기능

| 기능 | 상태 |
|---|---|
| **컴퓨터 사용(Computer Use)** | ❌ 아직 미지원 |
| **음성 입력(Dictation)** | ❌ 데스크톱 앱에서 미지원. CLI의 `/voice` 는 사용 가능 |
| **Quick Entry 단축키** | X11은 작동, Wayland는 데스크톱 환경의 GlobalShortcuts 포털 필요 |
| **Fedora·RHEL** | ❌ 현재 Debian 계열만 지원. 추후 추가 예정 |

<div class="note-circle">

○ 위 기능이 필요하다면 CLI(`claude` 명령어)를 쓰세요 — 더 넓은 리눅스 배포판을 지원해요  
○ 시스템 요구사항 전체 → [공식 설정 가이드](https://code.claude.com/docs/en/setup#system-requirements)

</div>

---

## CLI와 데스크톱 앱, 뭘 써야 할까요?

| 상황 | 추천 |
|---|---|
| Ubuntu 22.04 이상, 시각적 UI 선호 | **데스크톱 앱** |
| Fedora·RHEL 등 기타 배포판 | **CLI** |
| Computer Use 기능 필요 | **CLI** |
| 음성 입력 필요 | **CLI** (`/voice` 지원) |
| API 키로 인증해야 하는 경우 | **CLI** |
| 팀 협업·멀티 세션 관리 | **데스크톱 앱** (Cowork 탭) |
