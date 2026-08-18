---
title: "[공] iOS 시뮬레이터 패널 — Desktop에서 내 앱 화면을 실시간으로 봐요"
description: "Claude Code Desktop(macOS)에서 iOS 앱을 빌드하면, 대화창 옆에 iPhone 화면이 실시간으로 스트리밍됩니다"
tags: ["자동생성", "iOS", "시뮬레이터", "데스크탑", "모바일개발", "desktop-ios"]
category: "advanced"
order: 54
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[공] 출처</strong>: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w30">Week 30 (Jul 20-24)</a>
<br />★ 필요 환경: <strong>macOS + Xcode (iOS 플랫폼 설치)</strong>
<br />★ 필요 버전: Claude Desktop <strong>v1.24012.0 이상</strong>
<br />★ 지원 플랜: Pro, Max, Team (Public Beta)
</div>

## iOS 시뮬레이터 패널이 뭔가요?

Claude Code Desktop(macOS)에서 iOS 앱을 작업할 때, 클로드가 앱을 빌드하거나 시뮬레이터에서 실행하면 **대화창 옆에 iPhone 화면이 자동으로 열려요**. 클로드가 앱을 테스트하는 동안 내가 실시간으로 화면을 볼 수 있고, 직접 터치(조작)도 할 수 있어요.

> 🍱 **비유로 설명하면**: 요리사가 주방에서 요리하는 동안, CCTV 화면으로 요리 과정을 실시간으로 보면서 "소금 더 넣어줘" 같은 지시를 할 수 있는 거예요.

---

## 사용 조건

| 조건 | 설명 |
|------|------|
| **운영체제** | macOS 전용 |
| **Xcode** | iOS 플랫폼 설치 포함 |
| **Claude Desktop 버전** | v1.24012.0 이상 |
| **플랜** | Pro, Max, Team (Public Beta) |

---

## 사용 방법

특별한 설정이 필요 없어요. 클로드에게 자연어로 말하면 돼요:

```text
Build the app and run it in the simulator to check the onboarding flow.
```

또는

```text
내 앱 실행해서 로그인 화면 테스트해봐줘.
```

→ 클로드가 앱을 빌드하고 시뮬레이터에서 실행하면, 패널이 자동으로 열려요!

---

## 패널에서 할 수 있는 것

| 기능 | 설명 |
|------|------|
| 실시간 화면 스트리밍 | 클로드가 앱을 조작하는 화면을 라이브로 봄 |
| 직접 조작 | 화면을 탭·스크롤해서 내가 직접 검증 |
| 클로드 관찰 | 클로드가 어떻게 앱을 테스트하는지 확인 |

---

## 언제 유용한가요?

- 🖥️ **UI 버그 확인**: 클로드가 화면 레이아웃 깨짐을 실시간으로 확인
- 🔄 **플로우 테스트**: 온보딩·결제 플로우를 클로드가 직접 탭하며 테스트
- 🎯 **빠른 피드백**: 클로드가 "버튼이 클릭 안 되네요"를 눈으로 확인하고 즉시 수정

---

## 다음 단계

- **[Claude Code Desktop 가이드](/docs/codeweb/claude-code-on-the-web)** — Desktop 앱 기본 사용법
- **[컴퓨터 사용(Computer Use)](/docs/advanced/remote-control)** — 브라우저·앱 조작 기능
