---
title: "[공] iOS 시뮬레이터 패널 — Mac에서 Claude Code로 앱을 바로 확인해요"
description: "Claude Code Desktop(데스크톱 앱)에서 iOS 앱을 만들 때, 시뮬레이터 화면이 대화창 옆에 나란히 떠요. Claude가 앱을 빌드하고 테스트하는 걸 실시간으로 볼 수 있어요"
tags: ["자동생성", "iOS", "시뮬레이터", "데스크톱앱", "모바일개발", "Xcode"]
category: "advanced"
order: 29
lastUpdated: "2026-07-28"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a>
<br />★ macOS Claude Code Desktop 전용 기능 (퍼블릭 베타) — Pro, Max, Team 플랜
</div>

## 이게 뭔가요?

**iOS 시뮬레이터 패널**은 Claude Code Desktop(데스크톱 앱) macOS 버전에서, **대화창 옆에 iPhone/iPad 화면을 띄워주는 기능**이에요.

Claude가 iOS 앱을 빌드하거나 실행하면 시뮬레이터가 자동으로 열리고, 앱이 작동하는 화면을 바로 볼 수 있어요.

> 🍱 **비유로 설명하면**: 조리사(Claude)가 요리(앱)를 만드는 걸 바로 옆에서 화면으로 지켜보는 것과 같아요. 완성되길 기다릴 필요 없이, 중간 과정을 실시간으로 확인하고 "좀 더 짜게 해줘" (= "이 버튼 색상 바꿔줘")라고 바로 요청할 수 있어요.

---

## 요구사항

| 항목 | 내용 |
|---|---|
| **Claude Desktop 버전** | v1.24012.0 이상 |
| **운영체제** | macOS만 가능 (iOS 시뮬레이터는 Mac 전용) |
| **필수 설치** | Xcode + iOS 플랫폼 (시뮬레이터 기기 포함) |
| **요금제** | Pro, Max, Team (Enterprise 미지원) |
| **세션 종류** | 로컬 세션만 (클라우드·SSH 세션 미지원) |

<div class="note-star">
★ Xcode를 처음 설치했다면 <strong>Window → Devices and Simulators</strong>에서 iOS 시뮬레이터 기기를 확인해보세요.
<br />★ 시뮬레이터 기기가 없다면: <code>xcodebuild -downloadPlatform iOS</code> 명령어로 추가할 수 있어요.
</div>

---

## 사용법

### 기본 흐름

1. **Claude Code Desktop** 실행 → Code 탭에서 iOS 프로젝트 폴더 열기
2. Claude에게 앱 실행 요청:
   ```
   앱을 빌드해서 시뮬레이터에서 실행하고 온보딩 화면을 확인해줘.
   ```
3. 시뮬레이터 패널이 자동으로 열리고 앱 화면이 나타남
4. Claude가 앱을 직접 탭하고 테스트하는 과정을 옆에서 지켜봄

### 특정 기기 지정

```
iPhone SE 시뮬레이터에서 실행해줘
```

### 변경사항 확인 요청

```
로그인 버튼 색상 파란색으로 바꾸고 시뮬레이터에서 확인해줘
```

---

## 시뮬레이터 패널 조작하기

시뮬레이터 패널은 그냥 "보는 창"이 아니라 **직접 조작할 수 있는 창**이에요.

| 동작 | 방법 |
|---|---|
| 탭/스와이프 | 화면 클릭·드래그 |
| 홈 버튼 | **Cmd+Shift+H** |
| 화면 잠금 | **Cmd+L** |
| 볼륨 | **Cmd+↑ / Cmd+↓** |
| 기기 회전 | **Cmd+→** |
| 스크린샷 저장 | **Cmd+S** (데스크톱에 저장) |
| 화면 녹화 | **Cmd+R** |
| 시뮬레이터 분리 | **Detach simulator** 버튼 |

<div class="note-star">
★ <strong>주의</strong>: Claude가 기기를 조작하는 중에 내가 동시에 탭하면 Claude가 보는 화면이 달라질 수 있어요. "Claude is using this device" 표시가 사라진 후에 조작하세요.
</div>

---

## 세션별 기기 관리

- 여러 세션을 동시에 열면 **세션마다 별도 시뮬레이터**를 사용해요 (서로 섞이지 않음)
- 세션 사이드바에서 다른 세션으로 전환하면 시뮬레이터 뷰도 함께 전환돼요
- 세션당 최대 **4개** 시뮬레이터 패널
- Claude Code Desktop 종료, 세션 아카이브, 또는 기기 분리 후 **10분** 경과 시 시뮬레이터 자동 종료

---

## Claude의 시뮬레이터 접근 권한

처음 시뮬레이터를 사용할 때 Claude가 기기를 제어해도 되는지 **동의를 요청**해요.

| 행동 | 권한 방식 |
|---|---|
| 앱 탭·타이핑·스크린샷 | 기기별 1회 동의 후 자동 |
| URL 열기 (딥링크 테스트 등) | 세션 권한 모드 따름 |
| 빌드 (`xcodebuild` 실행) | 세션 권한 모드 따름 |

<div class="note-star">
★ Claude가 찍은 스크린샷은 Anthropic 서버로 전송되며 대화 보관 설정에 따라 저장돼요. <strong>실제 계정으로 로그인한 기기를 Claude가 사용하게 하지 마세요.</strong>
</div>

---

## 시뮬레이터 패널 vs. Computer Use(컴퓨터 유즈)

| 항목 | 시뮬레이터 패널 | Computer Use |
|---|---|---|
| 대상 | iOS 앱 전용 | 모든 앱·화면 |
| 사용 방법 | 자동으로 패널에 나타남 | macOS 권한 필요 |
| 화면 점유 | 내 화면 그대로 | 화면 제어권 가져감 |
| 제공 환경 | Desktop 앱 (macOS) | CLI, Desktop |

> 🍱 **비유로 설명하면**: 시뮬레이터 패널은 **유리창 너머로 부엌을 보는 것**, Computer Use는 **Claude가 부엌에 직접 들어가는 것**이에요.

---

## 문제 해결

### 시뮬레이터 패널이 안 열려요

- Claude에게 실행 의도를 명확하게 전달하세요: "앱을 시뮬레이터에서 실행해줘"
- Xcode와 iOS 시뮬레이터가 설치되어 있는지 확인 (Xcode 실행 후 Simulator 앱 실행)
- Claude Desktop v1.24012.0 이상인지 확인 (**Claude → Check for Updates**)

### "시뮬레이터를 찾을 수 없어요" 오류

Xcode는 있지만 iOS 기기가 없는 경우예요. 패널에 설정 단계가 표시돼요.

직접 설치:
```bash
xcodebuild -downloadPlatform iOS
```

### 조직(기업) 정책으로 시뮬레이터가 비활성화

관리자가 `disableMobileSimulatorTools` 설정을 켠 경우예요. 내가 변경할 수 없어요.
