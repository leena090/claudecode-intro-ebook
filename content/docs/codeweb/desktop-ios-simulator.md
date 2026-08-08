---
title: "[공] iOS 시뮬레이터로 Claude Code 작업하기"
description: "Claude Code 데스크톱 앱에서 iOS 시뮬레이터를 직접 제어할 수 있어요. 시뮬레이터 빌드·실행·스크린샷까지 Claude가 자동 처리"
tags: ["자동생성", "iOS시뮬레이터", "desktop-ios-simulator", "모바일개발", "데스크톱앱", "iOS"]
category: "codeweb"
order: 5
lastUpdated: "2026-08-08"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a>
<br />★ 대상: macOS 데스크톱 앱 + iOS 개발자
<br />★ 관련: <a href="/docs/advanced/computer-use">Computer Use</a>
</div>

## iOS 시뮬레이터 기능이 뭔가요?

Claude Code 데스크톱 앱에서 **iOS 시뮬레이터를 직접 제어**할 수 있어요. iOS 앱을 개발할 때 Claude가 시뮬레이터를 켜고, 앱을 빌드하고, 실행하고, 화면을 확인해서 버그를 찾을 수 있어요.

> 📱 **비유로 설명하면**: Claude가 가상의 아이폰을 손에 들고 앱을 직접 써보면서 "이 버튼이 안 눌리네요", "이 화면이 깨졌어요"라고 알려주는 것과 같아요. 개발자가 시뮬레이터를 왔다갔다 할 필요 없이 Claude가 대신 확인해줘요.

---

## 어떤 작업을 할 수 있나요?

| 작업 | 설명 |
|---|---|
| 앱 빌드 | Xcode 빌드 프로세스 실행 |
| 시뮬레이터 실행 | 특정 기기 모델·iOS 버전 선택 실행 |
| 앱 설치·실행 | 빌드된 앱을 시뮬레이터에 설치하고 실행 |
| 화면 스크린샷 | 현재 시뮬레이터 화면 캡처 |
| UI 상호작용 | 버튼 탭, 스크롤, 텍스트 입력 등 |
| 로그 확인 | 앱 실행 중 로그 모니터링 |

---

## 사용 조건

```
✅ macOS (필수)
✅ Claude Code 데스크톱 앱
✅ Xcode 설치됨
✅ iOS 시뮬레이터 설치됨
```

---

## 이런 상황에 유용해요

### 🐛 버그 재현 및 수정
```
시뮬레이터에서 앱 실행해서 결제 버튼이 
iPhone 15 Pro Max에서 잘 보이는지 확인해줘
```

### 📐 UI 레이아웃 검사
```
다크 모드로 전환했을 때 설정 화면 레이아웃 
이상한 부분 없는지 스크린샷 찍어서 확인해줘
```

### 🧪 자동화된 테스트 흐름
```
앱 빌드하고, 시뮬레이터에서 실행해서, 
로그인 → 상품 목록 → 장바구니 담기 흐름이 
에러 없이 작동하는지 확인해줘
```

---

## Computer Use와의 차이

| 구분 | iOS 시뮬레이터 | Computer Use |
|---|---|---|
| 대상 | iOS 시뮬레이터 전용 | macOS 전체 화면 |
| 특화 | iOS 개발 워크플로우 | 일반 앱 조작 |
| 정확도 | iOS 요소 인식 최적화 | 화면 전체 인식 |

두 기능 모두 macOS 데스크톱 앱에서 사용 가능해요.

---

## 관련 문서

- [Computer Use — macOS 앱 자동 조작](/docs/advanced/computer-use)  
- [데스크톱 앱 시작하기](/docs/codeweb/codeweb-intro)
- [Claude Code on Desktop](/docs/codeweb/codeweb-remote)
