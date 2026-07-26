---
title: "[공] iOS 시뮬레이터 패널 — 데스크톱 앱에서 iPhone 앱을 눈앞에서 테스트"
description: "Claude Code Desktop(데스크톱 앱)에서 iPhone·iPad 앱을 만들고 있다면, 시뮬레이터 화면이 대화창 옆에 실시간으로 떠요. Claude가 코드를 짜면서 바로 앱을 실행해 확인합니다"
tags: ["자동생성", "iOS", "시뮬레이터", "데스크톱", "Xcode", "모바일앱"]
category: "advanced"
order: 25
lastUpdated: "2026-07-26"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a> (신규 문서, 2026-07-26 확인)
<br />★ <strong>상태</strong>: 퍼블릭 베타 (Public Beta) — macOS 전용, Pro/Max/Team 플랜. Enterprise 미지원.
<br />★ <strong>필수 조건</strong>: Claude Desktop v1.24012.0 이상 + Xcode(엑스코드) 설치
</div>

## iOS 시뮬레이터 패널이 뭔가요?

**iOS 시뮬레이터 패널**은 iPhone/iPad 앱을 개발할 때, **Claude Code Desktop 대화창 옆에 가상 iPhone 화면이 실시간으로 나타나는 기능**이에요.

Claude가 코드를 수정하거나 앱을 빌드할 때 시뮬레이터가 자동으로 열리고, 내 앱이 어떻게 동작하는지 바로 확인할 수 있어요.

> 📱 **비유로 설명하면**: TV를 고치는 기사님이 수리하면서 바로 TV를 켜서 화면이 제대로 뜨는지 확인하는 것처럼, Claude가 코드를 짜면서 실제 앱 화면을 바로 확인하는 거예요.

---

## 이런 분께 해당되는 기능이에요

| 해당 | 해당 없음 |
|---|---|
| macOS에서 Claude Desktop 앱 사용 중 | Windows/Linux 사용자 |
| iPhone/iPad 앱 개발 중 (Swift/Xcode) | 웹·서버·Python 개발자 |
| Pro/Max/Team 플랜 | Enterprise 플랜 |

> ⚠️ **CLI(터미널) 사용자**는 이 기능 대신 [Computer Use(컴퓨터 유즈)](/docs/advanced/computer-use) 기능으로 iOS 시뮬레이터를 조작해요.

---

## 필수 조건

시작 전에 아래가 모두 준비돼 있어야 해요:

| 항목 | 요구사항 |
|---|---|
| Claude Desktop | **v1.24012.0 이상** (업데이트 확인: Claude → Check for Updates) |
| 운영체제 | **macOS만** (Apple 시뮬레이터는 macOS 전용) |
| Xcode | iOS 플랫폼이 포함된 버전 설치 필요 |
| 플랜 | Pro / Max / Team (Enterprise 미지원) |

---

## 사용 방법

### 기본 흐름: 앱 실행 요청하기

특별한 명령어 없이, **Claude한테 앱을 실행하거나 테스트해달라고 말하면** 시뮬레이터 패널이 자동으로 열려요.

```text
"앱을 시뮬레이터에서 실행해서 온보딩 화면을 확인해줘"
```

처음에 Claude가 시뮬레이터 기기를 사용하려 하면, **한 번만 허용 승인**을 해줘야 해요. 이후로는 자동 진행됩니다.

### 특정 기기 지정하기

```text
"iPhone SE 시뮬레이터에서 실행해줘"
"iPad Air로 테스트해줘"
```

### 직접 패널 열기

앱을 실행하지 않고 패널만 먼저 열고 싶다면, 세션 툴바의 **Views** 메뉴 → **iOS Simulator**를 클릭하세요.

---

## 시뮬레이터 조작하기

패널이 열리면 **내가 직접 조작**할 수도 있어요:

| 조작 | 방법 |
|---|---|
| 탭 (터치) | 화면 클릭 |
| 스와이프 | 클릭 + 드래그 |
| 홈 버튼 | `Cmd + Shift + H` |
| 화면 잠금 | `Cmd + L` |
| 볼륨 업/다운 | `Cmd + 위/아래 화살표` |
| 기기 회전 | `Cmd + 오른쪽 화살표` |
| 스크린샷 저장 | `Cmd + S` (바탕화면에 저장) |
| 화면 녹화 | `Cmd + R` |

> 💡 **팁**: Claude가 기기를 조작하는 중에는 "Claude is using this device" 배지가 뜨는데, 배지가 사라질 때까지 기다렸다가 직접 탭하세요. 동시에 조작하면 결과가 섞여요.

---

## 세션 관리

- **동시 세션 격리**: 여러 세션을 병렬로 쓰고 있다면, 각 세션이 자기 기기를 따로 씁니다. A 세션의 화면이 B 세션에 안 나와요.
- **세션당 최대 4기기**: 한 세션에서 최대 4개의 시뮬레이터 패널까지 열 수 있어요.
- **자동 종료**: Claude가 시작한 시뮬레이터는 세션 종료, 아카이브, 또는 패널 분리 10분 후 자동으로 꺼져요.

---

## 보안 설정

### 개인 사용 시

설정(Settings) → 시뮬레이터 액세스를 끄면 Claude가 시뮬레이터를 직접 조작하지 못해요 (내가 패널에서 직접 탭하는 건 여전히 가능).

### 조직 관리자 설정

관리자는 `disableMobileSimulatorTools` 설정으로 조직 전체 비활성화 가능:

```json
{
  "disableMobileSimulatorTools": true
}
```

> ⚠️ Claude가 기기 스크린샷을 찍으면 Anthropic으로 전송돼 대화 보존 기준에 따라 저장됩니다. 시뮬레이터에서 실제 계정에 로그인하지 마세요.

---

## 문제 해결

**패널이 안 열려요**
- "앱을 시뮬레이터에서 실행해줘"처럼 명확하게 요청했는지 확인
- Xcode와 iOS Simulator 앱을 한 번 직접 실행해서 설치 여부 확인
- Claude Desktop v1.24012.0 이상인지 확인 (Claude → Check for Updates)

**"시뮬레이터를 찾을 수 없어요"**
Xcode는 있지만 iOS 시뮬레이터 런타임이 없는 경우예요. 아래 명령어로 설치:
```bash
xcodebuild -downloadPlatform iOS
```

---

## 관련 문서

- [데스크톱 앱 시작하기](/docs/webapp): Claude Desktop 기본 사용법
- [Computer Use(컴퓨터 유즈)](/docs/advanced/computer-use): CLI에서 시뮬레이터 조작하는 방법
