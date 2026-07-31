---
title: "[공] iOS 시뮬레이터 통합 — Claude Desktop에서 앱을 옆에 띄워놓고 테스트"
description: "Claude Code Desktop(macOS)에서 iOS 시뮬레이터 화면을 대화창 옆에 띄워놓고, Claude가 앱을 직접 빌드·실행·탭하며 테스트하는 기능"
tags: ["자동생성", "iOS", "시뮬레이터", "desktop", "앱개발", "macOS", "테스트"]
category: "advanced"
order: 28
lastUpdated: "2026-07-31"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a><br />
★ <strong>대상</strong>: iOS 앱 개발자 (macOS 전용, 퍼블릭 베타)<br />
★ <strong>플랜</strong>: Pro · Max · Team (Enterprise 미지원)
</div>

## iOS 시뮬레이터 통합이 뭔가요?

**Claude Code Desktop(macOS)** 에서 대화창 옆에 **iOS 시뮬레이터 화면을 실시간으로** 보여주는 기능이에요. Claude가 앱을 빌드하고 실행하면 자동으로 시뮬레이터 창이 열려, 내가 보는 앞에서 Claude가 앱을 직접 탭하며 테스트해요.

> 🍱 **비유로 설명하면**: Claude가 내 앱을 아이폰 모형에 설치하고, 유리 너머로 내가 보는 상태에서 직접 버튼을 눌러 "온보딩 흐름이 잘 되네" 확인하는 것과 같아요. 내 화면은 전혀 건드리지 않아요.

---

## 요구 사항

| 항목 | 요건 |
|---|---|
| **OS** | macOS (Apple Silicon/Intel 무관) |
| **앱 버전** | Claude Desktop v1.24012.0 이상 |
| **Xcode** | iOS 플랫폼 설치 포함 |
| **플랜** | Pro · Max · Team |

---

## 사용 방법

### 1. iOS 프로젝트 열기

Claude Code Desktop에서 **Code 탭** → 앱 프로젝트 폴더를 프로젝트 폴더로 열기

### 2. Claude에게 실행 요청하기

```
"앱을 빌드해서 시뮬레이터에서 실행하고 온보딩 흐름을 확인해줘."
```

### 3. 시뮬레이터 창 열림

앱이 시뮬레이터에 설치·실행되면 **iOS 시뮬레이터 창**이 대화창 옆에 자동으로 열려요. Claude가 앱을 탭하고 화면을 읽으면서 검증해요.

---

## 직접 조작도 가능해요

시뮬레이터 창은 **내가 직접 탭하고 조작**할 수도 있어요.

| 동작 | 방법 |
|---|---|
| 탭/스와이프 | 클릭·드래그 |
| 홈 버튼 | `Cmd+Shift+H` |
| 잠금 | `Cmd+L` |
| 볼륨 | `Cmd+↑` / `Cmd+↓` |
| 회전 | `Cmd+→` |
| 스크린샷 저장 | `Cmd+S` |
| 화면 녹화 | `Cmd+R` |

> 💡 Claude가 조작 중일 때는 화면에 **"Claude is using this device"** 배지가 표시돼요. 배지가 사라진 후 조작하세요.

---

## 세션별 디바이스 격리

각 세션은 **자신만의 시뮬레이터 디바이스**를 사용해요. 여러 세션을 동시에 열어도 서로 간섭 없이 독립적으로 작동합니다.

- 세션당 최대 **4개** 시뮬레이터
- 세션 전환 시 시뮬레이터 화면도 자동으로 전환
- Claude Desktop 종료 또는 세션 보관 시 자동 종료

---

## 주의 사항

- **물리적 기기**는 지원하지 않아요 (시뮬레이터만)
- **클라우드 세션·SSH 세션**에서는 사용 불가 (로컬 세션만)
- **Enterprise 플랜** 사용자는 이용 불가
- Claude의 시뮬레이터 스크린샷은 **Anthropic에 전송**돼요 → 실제 계정으로 로그인하지 마세요

---

## 자주 만나는 오류

| 증상 | 해결 |
|---|---|
| 시뮬레이터 창이 안 열림 | "시뮬레이터에서 실행해줘"로 명확하게 요청하거나 Xcode 설치 확인 |
| "No simulators found" | Xcode → Window → Devices and Simulators에서 iOS 시뮬레이터 추가 |
| 조직 정책으로 비활성화 | 관리자에게 `disableMobileSimulatorTools` 설정 확인 요청 |

---

## 한 줄 정리

> iOS 시뮬레이터 통합 = **Claude가 내 iOS 앱을 직접 빌드·실행·탭하며 테스트**하고, 그 화면을 내가 실시간으로 옆에서 볼 수 있는 기능. macOS·유료 플랜 전용, 퍼블릭 베타.
