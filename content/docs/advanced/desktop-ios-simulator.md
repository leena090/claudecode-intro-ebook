---
title: "[공] 데스크톱 앱 iOS 시뮬레이터 — iPhone 앱을 Claude가 직접 실행"
description: "Claude Code Desktop에서 Claude가 iOS 앱을 시뮬레이터로 열어 빌드·실행·확인까지 자동으로 해주는 기능"
tags: ["자동생성", "iOS", "시뮬레이터", "데스크톱", "iPhone", "앱개발", "mobile"]
category: "advanced"
order: 28
lastUpdated: "2026-07-22"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — Claude Code Desktop에서 iPhone·iPad 앱을 개발할 때, Claude가 iOS 시뮬레이터(아이폰 흉내 프로그램)를 직접 열어서 빌드·실행·확인까지 해줘요. <code>[공]</code><br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a>
</div>

## iOS 시뮬레이터 통합이 뭔가요?

**iOS 시뮬레이터(아이오에스 시뮬레이터)**는 Mac에서 실제 iPhone 없이도 앱을 테스트할 수 있는 Apple 공식 프로그램이에요.

Claude Code Desktop은 이 시뮬레이터와 직접 연결돼요. Claude가 코드를 짜거나 수정할 때, 자동으로 시뮬레이터에서 앱을 실행해서 결과를 눈으로 확인하고 다음 작업을 이어가요.

> 📱 **비유로 설명하면**: 스마트폰 앱 개발자가 혼자 일한다고 생각해봐요.
> - 예전엔: 코드 짜고 → 직접 빌드 버튼 누르고 → 시뮬레이터가 켜지면 → 내 눈으로 확인 → 다시 코드 수정... 이걸 반복
> - 이제는: "Claude야, 로그인 화면 만들어줘" 하면 → Claude가 코드 짜고 → 시뮬레이터에서 직접 열어보고 → "버튼 위치가 약간 아래 내려가야 해요" 하고 알아서 수정

---

## 어떻게 작동해요?

### 핵심 기능 3가지

| 기능 | 설명 |
|---|---|
| **자동 열기** | Claude가 앱을 빌드할 때마다 Desktop 사이드 패널에 시뮬레이터가 자동으로 표시돼요 |
| **세션별 분리** | 여러 작업을 동시에 할 때, 각 세션마다 **독립된 시뮬레이터**가 열려요 — 서로 간섭 없이! |
| **확인 후 반응** | Claude가 앱 상태를 직접 보고 "여기 에러 있네요" 하면서 바로 수정 작업을 이어가요 |

### 작업 흐름

```
내가 Claude에게 요청
    ↓
Claude가 Swift/SwiftUI 코드 작성
    ↓
Desktop 패널에 iOS 시뮬레이터가 자동으로 열림 🔵
    ↓
앱이 시뮬레이터에서 실행됨
    ↓
Claude가 화면 상태를 확인하고 필요하면 수정
    ↓
완성!
```

---

## 이런 분들께 유용해요

✅ **macOS + Xcode**로 iOS 앱을 개발하는 분  
✅ Claude에게 UI 구현을 맡기고 **결과를 바로 확인**하고 싶은 분  
✅ 여러 화면을 **동시에 개발**하면서 각각 테스트하고 싶은 분  
✅ **앱 리뷰·디버그** 작업을 Claude와 함께 하고 싶은 분

---

## 세션별 시뮬레이터가 뭔가요?

한 번에 여러 세션을 열어서 일하는 분들께 특히 좋아요.

예를 들어:
- 세션 A: 로그인 화면 개발 → 시뮬레이터 A에서 확인
- 세션 B: 결제 화면 개발 → 시뮬레이터 B에서 확인

두 시뮬레이터가 **서로 독립적**으로 실행되니까, 한쪽 작업이 다른 쪽에 영향을 주지 않아요.

> 🍱 **비유**: 마치 두 개의 다른 가게에서 시식 행사를 각각 진행하는 것처럼, 서로 섞이지 않고 독립적으로 운영돼요.

---

## 필요한 환경

- **Claude Code Desktop** (macOS)
- **Xcode** 설치 (Apple 공식 개발 도구 — App Store에서 무료 설치)
- iOS 앱 개발 프로젝트 (Swift, SwiftUI, Objective-C 등)

> ⚠️ **주의**: 이 기능은 Claude Code Desktop의 macOS 버전 전용이에요. 터미널(CLI)이나 웹 버전에서는 사용할 수 없어요 (공식 문서 기준).

---

## 관련 기능

- **컴퓨터 사용(Computer Use)** — Claude가 화면을 직접 보고 앱·브라우저를 조작하는 상위 기능이에요.
- **데스크톱 앱 미리보기** — 웹 앱이나 일반 앱 결과를 사이드 패널에서 확인하는 기능이에요.

> 📌 [데스크톱 앱 전체 기능 보기](https://code.claude.com/docs/en/desktop)에서 Claude Code Desktop의 다른 기능도 확인해보세요.
