---
title: "[공] iOS 시뮬레이터 패널 — Claude Code Desktop에서 앱을 나란히 보며 테스트"
description: "Claude Code Desktop에서 iOS 시뮬레이터 화면을 바로 옆에 띄워서 앱을 테스트할 수 있어요. /claude-security 없이, 내 화면 제어 없이 클로드가 직접 앱을 조작합니다"
tags: ["자동생성", "iOS", "시뮬레이터", "Desktop", "앱개발", "테스트"]
category: "advanced"
order: 28
lastUpdated: "2026-07-30"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a>
<br />★ Claude Code Desktop v1.24012.0 이상, macOS 전용, Pro·Max·Team 플랜 (공개 베타)
</div>

## iOS 시뮬레이터 패널이 뭔가요?

**iOS 시뮬레이터 패널**은 Claude Code Desktop에서 대화창 옆에 iPhone/iPad 시뮬레이터 화면을 바로 띄워주는 기능이에요 (공개 베타).

> 🍱 **비유로 설명하면**: 코딩하면서 옆에 TV 모니터를 하나 더 두고, 거기서 앱이 실제로 어떻게 보이는지 실시간으로 확인하는 것과 같아요. 클로드가 코드를 수정하면 바로 그 화면에서 결과를 볼 수 있어요.

### 기존 방식과 뭐가 다른가요?

| 방식 | 특징 |
|---|---|
| CLI의 Computer use | 내 맥 화면 직접 제어 → 화면이 잠깐씩 움직여요 |
| **Desktop 시뮬레이터 패널** | **별도 패널 안에서만 제어** → 내 화면은 그대로 |

---

## 사용 조건

- ✅ Claude Code Desktop v1.24012.0 이상
- ✅ macOS (iOS 시뮬레이터는 맥에서만 실행 가능)
- ✅ Xcode + iOS 플랫폼 설치
- ✅ Pro·Max·Team 플랜
- ❌ Enterprise 플랜은 지원 안 됨 (현재)
- ❌ 클라우드·SSH 세션에서는 사용 불가

---

## 쓰는 법

따로 설정할 필요 없어요. Claude에게 앱 실행 요청만 하면 돼요:

```
빌드하고 iOS 시뮬레이터에서 실행해서 온보딩 화면 확인해줘
```

앱이 시뮬레이터에서 실행되면 패널이 **자동으로 열려요**.

> 🍱 **비유로 설명하면**: 리모컨을 누르면 TV가 켜지듯, "앱 실행해줘"라고 하면 시뮬레이터 패널이 켜져요.

### 처음 사용할 때

특정 기기(시뮬레이터)에 Claude가 처음 접근할 때 **허가를 요청**해요. 한 번 허가하면 이후 세션에서도 그 기기는 바로 사용 가능해요.

---

## 직접 조작도 돼요

패널에서 내가 직접 탭하거나 스와이프할 수 있어요:

| 동작 | 방법 |
|---|---|
| 탭·스와이프 | 패널에서 클릭·드래그 |
| 홈 버튼 | Cmd+Shift+H |
| 화면 잠금 | Cmd+L |
| 볼륨 조절 | Cmd+위/아래 화살표 |
| 회전 | Cmd+오른쪽 화살표 |
| 스크린샷 저장 | Cmd+S |
| 화면 녹화 | Cmd+R |

<div class="note-star">
★ Claude가 기기를 조작 중일 때는 패널에 <strong>"Claude is using this device"</strong> 배지가 표시돼요. 이때는 탭을 잠깐 기다려주세요.
</div>

---

## 특정 기기 지정하기

```
iPhone SE 시뮬레이터에서 실행해줘
```

이런 식으로 기기를 지정하면 클로드가 해당 기기를 선택해요.

---

## 세션 관리

- **병렬 세션**마다 독립된 시뮬레이터 — 세션 A와 세션 B가 서로 간섭하지 않아요
- 세션 전환 시 시뮬레이터 뷰도 같이 전환돼요
- 앱 종료, 세션 보관, 패널 분리 후 **10분** 지나면 자동 종료
- 내가 직접 켠 시뮬레이터는 자동 종료되지 않아요

---

## 한계점

- 실제 iPhone·iPad 기기는 제어할 수 없어요 (시뮬레이터 전용)
- 클라우드·SSH 세션에서는 사용 불가
- Enterprise 플랜 미지원 (현재 공개 베타 기준)

---

## 문제 해결

| 증상 | 해결 방법 |
|---|---|
| 패널이 안 열려요 | "iOS 시뮬레이터에서 실행해줘"처럼 명시적으로 요청하기, Desktop 버전 확인 |
| "시뮬레이터 없음" 오류 | Xcode 열어서 iOS 플랫폼 설치, 또는 `xcodebuild -downloadPlatform iOS` |
| 조직 정책으로 비활성화됨 | 관리자에게 `disableMobileSimulatorTools` 설정 확인 요청 |

---

## 관련 자료

- [공식 iOS 시뮬레이터 문서 (영문)](https://code.claude.com/docs/en/desktop-ios-simulator)
- [Claude Code Desktop 시작하기](/codeweb/codeweb-intro)
- [Computer use (CLI)](https://code.claude.com/docs/en/computer-use) — CLI 환경에서 시뮬레이터 조작
