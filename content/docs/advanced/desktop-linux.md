---
title: "[공] 리눅스 데스크톱 앱 베타 — Ubuntu·Debian에서 Claude Code 설치하기"
description: "Ubuntu 22.04+, Debian 12+ 환경에서 Claude 데스크톱 앱을 apt로 설치하는 방법을 알아봐요"
tags: ["리눅스", "linux", "데스크톱", "ubuntu", "debian", "설치", "고급"]
category: "advanced"
order: 51
lastUpdated: "2026-07-12"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 27 (2026-06-30), Claude Desktop Linux 베타 출시. <code>[공]</code><br />
👉 공식 문서: <a href="https://code.claude.com/docs/en/desktop-linux" target="_blank">code.claude.com/docs/en/desktop-linux</a>
</div>

## 드디어 리눅스에도! 🐧

2026년 6월 30일, Claude 데스크톱 앱이 **리눅스(Linux)** 에서도 베타 버전으로 사용 가능해졌어요.

맥(macOS), 윈도우(Windows)에서만 되던 Claude 데스크톱 앱이, 이제 **우분투(Ubuntu)와 데비안(Debian)** 사용자도 쓸 수 있어요.

> 🍱 **비유**: 카페가 맥만 충전되던 콘센트를 드디어 "젠더 없이 삼성 갤럭시도 충전됩니다!"라고 알린 것 같아요. 환영받는 영역이 넓어졌어요.

---

## 설치 조건 확인하기

| 항목 | 조건 |
|------|------|
| 운영체제 | Ubuntu 22.04 이상 또는 Debian 12 이상 |
| CPU 아키텍처 | x86_64 또는 arm64 |
| 기타 Debian 기반 | 공식 미테스트 (작동할 수 있지만 보장 없음) |
| Fedora / RHEL | ❌ 아직 미지원 (추후 지원 예정) |

<div class="note-circle">
○ 내 CPU가 뭔지 모를 땐 터미널에서 <code>uname -m</code> 실행해보세요<br />
○ x86_64 또는 aarch64라고 나오면 OK예요
</div>

---

## 설치 방법 — apt 저장소 통해 설치 (권장)

apt 저장소로 설치하면 **일반 시스템 업데이트로 자동으로 앱도 업데이트**돼요. (직접 다운로드는 자동 업데이트 안 됨)

### 1단계: Anthropic 서명 키 추가

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

### 2단계: 설치

```bash
sudo apt update && sudo apt install claude-desktop
```

### 3단계: 실행 및 로그인

- **앱 런처**에서 "Claude" 검색해서 실행, 또는
- 터미널에서 `claude-desktop` 입력

Anthropic 계정(claude.ai 구독)으로 로그인하면 돼요.

<div class="note-circle">
○ API 키만으로는 데스크톱 앱 로그인이 안 돼요 — API 키 사용자는 <a href="https://code.claude.com/docs/en/quickstart" target="_blank">CLI(터미널 버전)</a>을 사용하세요<br />
○ 기업 SSO나 LLM 게이트웨이 연결은 <a href="https://support.claude.com" target="_blank">enterprise 설정 가이드</a>를 참조하세요
</div>

---

## 업데이트 방법

맥이나 윈도우와 달리, **리눅스 앱은 자동 업데이트를 하지 않아요**. 대신 시스템 패키지 업데이트로 함께 갱신돼요.

```bash
# 시스템 전체 업데이트 (Claude Desktop도 함께 업데이트됨)
sudo apt update && sudo apt upgrade
```

---

## 제거 방법

```bash
# 앱 제거
sudo apt remove claude-desktop

# 저장소 항목도 함께 제거
sudo rm /etc/apt/sources.list.d/claude-desktop.list
```

---

## 맥/윈도우와 무엇이 같고, 무엇이 다른가요?

### ✅ 동일하게 지원

| 기능 | 설명 |
|------|------|
| Chat | 일반 Claude 대화 |
| Cowork | 협업 기능 |
| Claude Code | 코딩 보조 AI |
| 멀티 세션 | 여러 프로젝트 동시 실행 |
| 비주얼 diff 리뷰 | 코드 변경 시각적 비교 |
| 내장 터미널 & 에디터 | 앱 안에서 터미널 실행 |
| 라이브 앱 미리보기 | 실시간 결과 확인 |

### ⚠️ 베타에서 아직 없는 것

| 기능 | 상태 | 대안 |
|------|------|------|
| **컴퓨터 사용(Computer Use)** | ❌ 리눅스 미지원 | — |
| **음성 입력(Dictation)** | ❌ 데스크톱 미지원 | CLI에서 `/voice` 사용 |
| **Quick Entry 단축키** | ⚠️ Wayland에서 불안정 | X11 환경에서는 정상 동작 |
| **Fedora / RHEL** | ❌ 미지원 | CLI 버전 사용 |

> 💡 **팁**: 데스크톱 앱에서 아직 안 되는 기능은 CLI(터미널) 버전이 더 넓은 배포판을 지원해요. CLI를 설치하려면 `curl -fsSL https://claude.ai/install.sh | bash`를 실행하세요.

---

## 서명 키 확인 방법 (선택)

설치 전에 서명 키가 진짜 Anthropic 것인지 확인할 수 있어요:

```bash
gpg --show-keys /usr/share/keyrings/claude-desktop-archive-keyring.asc
```

**정상 핑거프린트**: `31DD DE24 DDFA B679 F42D 7BD2 BAA9 29FF 1A7E CACE`

---

## 설치 안 될 때 확인할 것

### "Unable to locate package claude-desktop" 오류

```bash
# 저장소가 제대로 등록됐는지 확인
cat /etc/apt/sources.list.d/claude-desktop.list

# 내 CPU 아키텍처가 amd64 또는 arm64인지 확인
dpkg --print-architecture

# 저장소 업데이트 시 오류 메시지 확인
sudo apt update
```

위 방법으로도 안 되면, `.deb` 파일을 직접 다운로드해서 설치하는 방법을 [공식 문서](https://code.claude.com/docs/en/desktop-linux)에서 확인해보세요.

<div class="note-circle">
○ Linux 베타 피드백은 <a href="https://github.com/anthropics/claude-code/issues" target="_blank">GitHub Issues</a>에 남기면 돼요<br />
○ 베타이므로 기능이 계속 추가될 예정이에요
</div>
