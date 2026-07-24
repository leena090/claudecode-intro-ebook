---
title: "[공] iOS 시뮬레이터 연동 — 데스크톱 앱으로 iPhone 앱 개발하기"
description: "공식 문서에 새롭게 등장한 'desktop-ios-simulator' 페이지. Claude Code 데스크톱 앱으로 iOS 시뮬레이터를 제어하고 모바일 앱 개발을 도울 수 있어요 (macOS 전용)"
tags: ["자동생성", "iOS", "시뮬레이터", "모바일", "데스크톱", "신규기능"]
category: "advanced"
order: 28
lastUpdated: "2026-07-24"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서 신규 등록: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a> (Jul 24, 2026)<br />
★ 이 페이지 내용의 일부는 <strong>추정</strong>을 포함합니다. 실제 기능은 공식 문서에서 확인해주세요.
</div>

## iOS 시뮬레이터 연동이란?

2026년 7월 24일, 공식 Claude Code 문서 목록에 **`desktop-ios-simulator`** 페이지가 새로 등록됐어요.

Claude Code 데스크톱 앱의 **Computer Use(컴퓨터 사용)** 기능을 통해 macOS에서 실행 중인 **iOS 시뮬레이터**를 직접 제어할 수 있어요.

> 🍱 **비유로 설명하면**: 마치 Claude가 개발자 책상에 앉아서 화면을 보고 직접 시뮬레이터를 탭하면서 "이 버튼 누르면 어떻게 돼?" 확인하는 것과 같아요.

---

## 어떤 작업을 자동화할 수 있나요?

Computer Use를 통한 iOS 시뮬레이터 연동으로 가능한 작업 (추정):

| 작업 | 예시 |
|---|---|
| **UI 확인** | 화면 레이아웃이 기기 크기별로 잘 보이는지 |
| **기능 테스트** | 버튼 탭 → 결과 화면 확인 |
| **스크린샷 캡처** | 각 화면을 자동으로 캡처 후 문서화 |
| **오류 재현** | 특정 조작 순서로 버그 재현 |
| **앱 시작 확인** | 앱이 정상 실행되는지 체크 |

<div class="note-star">
★ 위 기능 목록은 <strong>추정</strong>입니다. 실제 지원 범위는 <a href="https://code.claude.com/docs/en/desktop-ios-simulator">공식 문서</a>를 확인해주세요.
</div>

---

## 사용 조건

| 항목 | 조건 |
|---|---|
| **운영체제** | macOS (iOS 시뮬레이터는 macOS에서만 지원) |
| **필요 앱** | Xcode + iOS 시뮬레이터 |
| **Claude Code** | 데스크톱 앱 필요 |
| **기능** | Computer Use 활성화 필요 |

---

## 기존 Computer Use와의 관계

Claude Code 데스크톱 앱에는 이미 **Computer Use** 기능이 있어요. iOS 시뮬레이터 연동은 그 위에 쌓인 **모바일 개발 특화 가이드**로 보입니다:

```
Computer Use (기반) → iOS 시뮬레이터 연동 (특화 활용)
```

Computer Use에 대해서는 → [Computer Use 데스크톱 제어](/advanced/cowork-desktop-control) 참고

---

## 어떻게 시작하나요?

```
https://code.claude.com/docs/en/desktop-ios-simulator
```

공식 문서에서 단계별 설정 방법을 확인하세요.

<div class="note-star">
★ <strong>이 페이지는 공식 문서 신규 등록 알림 목적으로 작성됐어요</strong>. iOS 앱 개발에 Claude Code를 활용하고 싶으신 분들은 공식 페이지를 직접 열어보시길 권장합니다.
</div>

---

## 관련 문서

- [데스크톱 앱 소개](/advanced/desktop-redesign)
- [Computer Use(컴퓨터 사용)](/cowork/cowork-desktop-control)
- [모바일 Claude Code](/advanced/mobile-claude-code)
