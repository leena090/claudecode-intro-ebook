---
title: "[공] 리눅스에서 Claude 데스크톱 앱 설치하기 (Ubuntu·Debian)"
description: "Claude 데스크톱 앱이 리눅스 베타로 출시됐어요. Ubuntu 22.04+ 또는 Debian 12+에서 apt로 설치하는 방법과 알아두어야 할 제한사항을 정리했어요"
tags: ["리눅스", "linux", "ubuntu", "debian", "데스크톱", "설치", "apt", "자동생성"]
category: "codeweb"
order: 5
lastUpdated: "2026-07-16"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — 2026년 W27(6/29~7/3) 업데이트로 베타 출시. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">공식 문서: desktop-linux</a><br />
⚠️ <strong>베타(Beta)</strong> 상태예요 — Chat·Cowork·Claude Code 탭 모두 사용 가능하지만 일부 기능 미지원
</div>

## 리눅스에서도 Claude 데스크톱 앱을 쓸 수 있나요?

네! **2026년 6월 말부터** Ubuntu와 Debian 계열 리눅스에서 Claude 데스크톱 앱을 설치해서 쓸 수 있어요.

> 🍱 **비유**: 그동안 Mac·Windows 식당만 있었는데, 이제 리눅스 식당도 오픈한 거예요. 아직 "베타"라서 메뉴 일부가 없지만, 핵심 메뉴는 다 있어요.

**macOS·Windows와 동일하게 쓸 수 있는 것들:**
- 💬 Chat (대화)
- 🤝 Cowork (협업)
- 💻 Claude Code (코딩 에이전트)
- 여러 세션 동시 실행
- 시각적 diff 리뷰
- 통합 터미널·에디터
- 앱 미리보기

---

## 설치 요구사항

| 항목 | 조건 |
|---|---|
| 운영체제 | Ubuntu 22.04 이상 또는 Debian 12 이상 |
| 아키텍처 | x86_64 또는 arm64 |
| 기타 | Fedora·RHEL은 현재 미지원 |

<div class="note-circle">
○ Ubuntu·Debian 요구사항을 충족하는 다른 Debian 계열도 될 수 있지만 공식 테스트는 안 됐어요<br />
○ Fedora·Red Hat(RHEL) 지원은 추후 예정
</div>

---

## 설치 방법 (apt 저장소)

**apt 저장소로 설치하는 방법**을 권장해요. 이렇게 하면 `sudo apt upgrade`로 자동 업데이트가 돼요.

### 1단계: Anthropic apt 저장소 추가

먼저 curl이 있는지 확인해요. 없으면 먼저 설치해요:

```bash
sudo apt install curl
```

Anthropic 서명 키 다운로드:

```bash
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc
```

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

- 앱 런처에서 **Claude** 검색 후 실행
- 또는 터미널에서 `claude-desktop` 입력
- Anthropic 계정으로 로그인 (claude.ai 구독 또는 조직 SSO)

<div class="note-circle">
○ 데스크톱 앱은 Console API 키 직접 로그인을 지원하지 않아요<br />
○ API 키 인증은 CLI(<code>claude</code>)를 사용하세요
</div>

---

## 서명 키 확인 (선택사항)

보안이 걱정되면 다운로드한 서명 키가 Anthropic 것인지 확인할 수 있어요:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

올바른 지문(Fingerprint): `31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE`

---

## 업데이트 방법

**리눅스 앱은 자동 업데이트되지 않아요.** 일반 패키지 업데이트 방법을 써야 해요:

```bash
sudo apt update && sudo apt upgrade
```

또는 GNOME Software(소프트웨어 센터)에서 업데이트를 확인해도 돼요.

---

## 제거 방법

```bash
sudo apt remove claude-desktop

# 저장소 항목도 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 직접 .deb 파일로 설치 (apt 저장소 없이)

인터넷 접속이 제한된 환경이라면 `.deb` 파일을 직접 다운로드해서 설치할 수 있어요:

```bash
# 최신 버전 .deb 자동 다운로드
curl -fLO "https://downloads.claude.ai/claude-desktop/apt/stable/$(curl -s \
  "https://downloads.claude.ai/claude-desktop/apt/stable/dists/stable/main/binary-$(dpkg --print-architecture)/Packages" | \
  grep '^Filename: pool/main/c/claude-desktop/claude-desktop_' | \
  sort -V | tail -n 1 | cut -d' ' -f2)"

# 설치
sudo apt install ./claude-desktop_*.deb
```

> ⚠️ 이 방법으로 설치하면 **자동 업데이트가 안 돼요**. 업데이트하려면 저장소를 등록하거나 매번 새 .deb을 다운로드해야 해요.

---

## 문제 해결

### "Unable to locate package claude-desktop" 오류가 나요

apt가 저장소를 찾지 못한 거예요. 다음을 확인해요:

```bash
# 저장소 파일이 있는지 확인
cat /etc/apt/sources.list.d/claude-desktop.list

# 아키텍처 확인 (amd64 또는 arm64여야 함)
dpkg --print-architecture

# apt 업데이트 다시 실행
sudo apt update
```

---

## 베타에서 아직 지원 안 되는 기능

| 미지원 기능 | 대안 |
|---|---|
| Computer Use (화면·앱 제어) | 현재 없음 (추후 지원 예정) |
| 음성 입력(Dictation) | CLI에서 `/voice` 사용 |
| Quick Entry 전역 단축키 | X11에서는 작동, native Wayland는 설정 필요 |
| Fedora·RHEL | CLI 사용 (`claude` 커맨드) |

> 🍱 **비유**: 새로 오픈한 리눅스 식당에 아직 일부 메뉴는 없어요. 그 메뉴는 옆의 CLI 식당에서 드실 수 있어요. CLI는 더 많은 리눅스 배포판을 지원해요.

---

## CLI(커맨드라인)와 데스크톱 앱, 뭐가 다른가요?

| 비교 항목 | CLI (`claude`) | 데스크톱 앱 |
|---|---|---|
| 지원 리눅스 | 광범위 (Ubuntu, Fedora 등) | Ubuntu 22.04+, Debian 12+ |
| UI | 터미널 텍스트 | 그래픽 GUI |
| 비주얼 diff | ❌ | ✅ |
| 여러 세션 | 여러 탭 열기 | 사이드바로 전환 |
| API 키 로그인 | ✅ | ❌ |

<div class="note-circle">
○ 리눅스 CLI 설치: <code>curl -fsSL https://claude.ai/install.sh | bash</code><br />
○ 데스크톱 앱은 GUI가 필요하고 X11 또는 Wayland 환경이어야 해요
</div>
