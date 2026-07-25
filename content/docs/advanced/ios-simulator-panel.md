---
title: "[공] iOS 시뮬레이터 패널 — 데스크톱 앱에서 iPhone 앱 바로 보기"
description: "Claude Code Desktop에서 iPhone·iPad 앱을 옆에 띄워놓고 Claude가 빌드·테스트하는 걸 실시간으로 지켜보는 기능 (공개 베타, macOS 전용)"
tags: ["자동생성", "iOS", "시뮬레이터", "데스크톱앱", "모바일", "Xcode", "공개베타"]
category: "advanced"
order: 28
lastUpdated: "2026-07-25"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a><br />
★ <strong>공개 베타</strong> — Claude Code Desktop(macOS)에서만 사용 가능<br />
★ Pro·Max·Team 플랜 지원 (Enterprise 플랜 미지원)<br />
★ Claude Desktop <strong>v1.24012.0</strong> 이상, Xcode iOS 플랫폼 설치 필요
</div>

## iOS 시뮬레이터 패널이 뭔가요?

**iPhone·iPad 앱을 Claude가 빌드하고 테스트하는 동안, 앱 화면이 대화창 옆에 실시간으로 나타나는 기능**입니다. Claude가 탭하고 스와이프하면서 앱을 테스트하는 걸 눈앞에서 볼 수 있어요.

> 📺 **비유로 설명하면**: 인터넷 쇼핑몰 CS 직원이 고객 문제를 원격으로 해결하면서 직원 화면을 내 화면에도 같이 띄워주는 것처럼요. Claude가 앱 안을 돌아다니는 게 그대로 내 화면에 보여요.

---

## 기존 CLI 방식과 다른 점

| | CLI 방식 | 데스크톱 iOS 시뮬레이터 패널 |
|--|---------|-------------------------|
| 화면 제어 방식 | Computer use (내 Mac 화면 점유) | 전용 패널 (내 화면 안 건드림) |
| 별도 창 필요 | Simulator 앱이 뜸 | 대화창 옆에 내장 |
| 병렬 세션 | 공유 디바이스 | 세션별 독립 디바이스 |

---

## 필요한 것

- **Mac** (Apple의 iOS 시뮬레이터는 macOS에서만 실행됨)
- **Xcode** with iOS 플랫폼 설치
- **Claude Desktop v1.24012.0** 이상
- **Pro, Max, 또는 Team 플랜** (Enterprise 플랜은 지원 안 됨)

> 📱 로컬 세션에서만 동작해요. 클라우드 세션이나 SSH 세션에서는 시뮬레이터에 접근할 수 없습니다.

---

## 시작하는 방법

별도 설정이 없어요. Claude가 앱을 시뮬레이터에서 실행하면 패널이 자동으로 열립니다.

```
1. Claude Code Desktop 실행 → Code 탭 → iOS 앱 프로젝트 폴더 열기

2. Claude에게 요청:
   "앱을 시뮬레이터에서 실행해서 온보딩 화면을 확인해줘"

3. 앱이 시뮬레이터에서 뜨면 패널이 자동 오픈!
   (첫 실행 시 디바이스 접근 허용 팝업이 한 번 뜸)
```

---

## 시뮬레이터 패널에서 할 수 있는 것

Claude가 쓰는 도중에도 내가 직접 조작할 수 있어요.

| 동작 | 방법 |
|------|------|
| 탭·스와이프 | 화면 클릭·드래그 |
| 홈 버튼 | Cmd+Shift+H |
| 잠금 | Cmd+L |
| 볼륨 조절 | Cmd+위/아래 화살표 |
| 화면 회전 | 회전 버튼 또는 Cmd+오른쪽 화살표 |
| 스크린샷 저장 | Cmd+S |
| 화면 녹화 | Cmd+R |
| 다른 디바이스로 전환 | 디바이스 메뉴에서 선택 |

> ⚠️ Claude가 디바이스를 조작 중일 때는 화면에 "Claude is using this device" 뱃지가 표시돼요. 뱃지가 사라진 다음에 탭하세요. 동시에 탭하면 결과가 뒤섞일 수 있어요.

---

## 세션과 디바이스 관리

### 병렬 세션이면?

각 세션이 독립된 디바이스를 가져요. A 세션과 B 세션이 서로 다른 시뮬레이터를 쓰므로 충돌 없이 동시에 작업 가능합니다.

### 시뮬레이터는 언제 꺼지나요?

Claude Code Desktop이 자동으로 부팅한 디바이스는 다음 상황에서 자동 종료됩니다:
- 앱을 종료할 때
- 세션을 아카이브할 때
- 패널에서 디바이스를 분리한 지 **10분** 뒤

직접 부팅한 디바이스는 자동 종료되지 않아요.

---

## 특정 디바이스 지정하기

```
"iPhone SE 시뮬레이터에서 실행해줘"
"iPad Pro 16인치로 테스트해줘"
```

디바이스 이름을 직접 말하면 Claude가 해당 디바이스에서 빌드합니다.

---

## 알아두세요

- **실제 iPhone·iPad는 지원 안 됨** — 시뮬레이터 전용입니다. 실기기 테스트는 Xcode로 직접 설치 후 결과를 캡처·사진으로 공유하면 Claude가 분석해줍니다.
- **macOS 전용** — Windows·Linux에서는 사용 불가.
- **Enterprise 플랜 미지원** — `requireCoworkFullVmSandbox` 정책 설정 시에도 미지원.

---

## 트러블슈팅

| 문제 | 해결 방법 |
|------|---------|
| 패널이 안 열려요 | "iOS 시뮬레이터에서 앱을 실행해서 로그인 화면 탭해줘"처럼 명확하게 요청하세요 |
| 시뮬레이터가 없다고 나와요 | Xcode 실행 → Window → Devices and Simulators에서 iOS 플랫폼 설치 or `xcodebuild -downloadPlatform iOS` |
| Desktop 버전이 낮아요 | Claude 앱 메뉴 → Check for Updates |

---

## 관련 문서

- [공] [Computer use (CLI)](/docs/en/computer-use) — CLI에서 시뮬레이터 조작하기
- [공] [Claude Code Desktop 시작하기](/docs/en/desktop-quickstart)
- [공] [병렬 세션으로 동시 작업](/docs/en/desktop#work-in-parallel-with-sessions)
