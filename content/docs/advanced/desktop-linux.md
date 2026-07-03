---
title: "[공] Linux에서 Claude 데스크톱 앱 설치하기 (베타)"
description: "Ubuntu 22.04+, Debian 12+에서 apt 저장소를 통해 Claude 데스크톱 앱을 설치하고 업데이트하는 방법. Chat·Cowork·Code 탭 모두 사용 가능"
tags: ["자동생성", "Linux", "Ubuntu", "Debian", "데스크톱", "설치", "베타"]
category: "advanced"
order: 37
lastUpdated: "2026-07-03"
---

<div class="note-star">
★ <strong>출처</strong> — Claude Code 공식 문서 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">Claude Desktop on Linux (beta)</a> <code>[공]</code><br />
★ <strong>베타 상태</strong> — Linux 지원은 현재 베타예요. Chat·Cowork·Code 탭 모두 사용 가능해요<br />
★ 지원 배포판: Ubuntu 22.04 이상, Debian 12 이상 (x86_64, arm64)
</div>

---

## 이제 Linux에서도 데스크톱 앱을 쓸 수 있어요! 🐧

기존에는 Claude 데스크톱 앱이 macOS와 Windows만 지원했어요. 이제 **Ubuntu와 Debian 계열 Linux**에서도 공식 베타로 설치할 수 있어요.

> 🍱 **비유**: 맛집이 처음에 강남점만 있다가 이제 마포점까지 열린 것과 같아요. 서비스는 같고, 위치(플랫폼)만 추가됐어요.

**데스크톱 앱에서 사용 가능한 것:**
- Chat 탭 (일반 대화)
- Cowork 탭 (팀 협업)
- Code 탭 (Claude Code 전체 기능)
- 병렬 세션, 비주얼 diff 리뷰, 통합 터미널·에디터, 앱 미리보기

---

## 시스템 요구사항

| 항목 | 요건 |
|---|---|
| OS | Ubuntu 22.04 이상, Debian 12 이상 |
| 아키텍처 | x86_64 또는 arm64 |
| 비고 | 위 조건을 충족하는 다른 Debian 계열도 동작할 수 있으나 공식 테스트 안 됨 |

---

## 설치 방법 1 — apt 저장소 (권장)

apt 저장소를 등록하면 이후 `apt upgrade`로 자동 업데이트를 받아요.

### 1단계: Anthropic 서명 키 추가

```bash
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

### 2단계: 저장소 등록

```bash
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list
```

### 3단계: 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 4단계: 실행 및 로그인

앱 런처에서 **Claude**를 실행하거나 터미널에서:

```bash
claude-desktop
```

Anthropic 계정 또는 조직 SSO로 로그인하면 바로 사용 가능해요.

---

## 설치 방법 2 — .deb 파일 직접 설치

apt 저장소를 사용할 수 없는 환경이라면 `.deb` 패키지를 직접 다운로드해서 설치할 수 있어요.

```bash
# 다운로드 후 설치 디렉토리에서 실행
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ .deb 직접 설치 방식은 자동 업데이트가 안 돼요. 나중에 apt 저장소 방식으로 전환하면 업데이트를 받을 수 있어요.

---

## 업데이트

Linux에서는 앱이 자동으로 업데이트되지 않아요. 시스템 패키지 업데이트 시 함께 업데이트돼요:

```bash
sudo apt update && sudo apt upgrade
```

---

## 서명 키 확인 (선택)

설치 전 키가 Anthropic 것인지 확인하고 싶다면:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

핑거프린트: `31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE`

---

## 제거

```bash
sudo apt remove claude-desktop

# 저장소 항목도 함께 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## Linux 베타에서 아직 안 되는 것들

| 미지원 기능 | 대안 |
|---|---|
| Computer Use (앱·화면 조작) | 아직 Linux 미지원 |
| 보이스 딕테이션 (음성 입력) | CLI의 `/voice` 명령어 사용 |
| Quick Entry 글로벌 단축키 | X11에서는 작동, Wayland는 환경 설정 필요 |
| Fedora / RHEL 지원 | Debian 계열만 지원 (추후 확장 예정) |

<div class="note-circle">
○ Linux 데스크톱 앱과 CLI는 같은 Claude Code 엔진을 사용해요<br />
○ 더 넓은 Linux 배포판 지원이 필요하다면 CLI를 사용하세요: <a href="https://code.claude.com/docs/en/setup" target="_blank">CLI 설치 가이드</a><br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">code.claude.com/docs/en/desktop-linux</a>
</div>
