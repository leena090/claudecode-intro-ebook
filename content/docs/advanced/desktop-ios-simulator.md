---
title: "[공] iOS 시뮬레이터 패널 — 앱을 Claude와 함께 실시간 테스트"
description: "Claude Code Desktop에서 iPhone/iPad 앱을 시뮬레이터로 실행하고, Claude가 직접 탭하면서 테스트하는 모습을 옆에서 지켜볼 수 있어요"
tags: ["자동생성", "iOS", "시뮬레이터", "Desktop앱", "앱개발", "신규기능"]
category: "advanced"
order: 28
lastUpdated: "2026-08-01"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a><br />
★ <strong>퍼블릭 베타</strong> — macOS 전용, Pro/Max/Team 플랜<br />
★ Claude Desktop v1.24012.0 이상 + Xcode 필요
</div>

## iOS 시뮬레이터 패널이 뭔가요?

iOS 앱을 개발할 때 가장 불편한 점 중 하나는 "Claude가 코드를 고쳐줘도 내가 직접 시뮬레이터에서 테스트해봐야 한다"는 거예요.

이제 **Claude Code Desktop**에 iOS 시뮬레이터 패널이 추가됐어요. Claude가 앱을 빌드하고 실행하면, 대화 옆에 **iPhone/iPad 화면이 실시간으로 나타나요**. Claude가 직접 화면을 탭하면서 테스트하는 모습을 지켜볼 수 있어요.

> 🍱 **비유로 설명하면**: 자동차 수리 후 정비사가 직접 시험 주행하는 모습을 뒷좌석에서 지켜보는 것처럼, Claude가 앱을 테스트하는 과정을 실시간으로 볼 수 있어요.

---

## 이런 분들께 유용해요

| 상황 | 활용법 |
|---|---|
| iOS 앱 개발 중 | Claude가 버그 수정 후 직접 시뮬레이터로 확인 |
| 화면 전환 테스트 | "온보딩 플로우 탭하면서 확인해줘" |
| 특정 기기 크기 확인 | "iPhone SE 시뮬레이터로 실행해줘" |
| 빠른 반복 개발 | 코드 수정 → 빌드 → 시뮬레이터 → 재수정 자동화 |

---

## 사용 방법

### 준비물

- **macOS** (iOS 시뮬레이터는 Mac에서만 실행돼요)
- **Claude Desktop v1.24012.0** 이상
- **Xcode** (iOS 플랫폼 포함 설치)
- Pro / Max / Team 플랜

Xcode 설치 후 시뮬레이터가 없으면:
```bash
xcodebuild -downloadPlatform iOS
```

### 사용하기

별도 설정 없이도 자동으로 열려요:

1. Claude Code Desktop에서 iOS 프로젝트 폴더를 열어요
2. Claude에게 말해요:
   ```
   앱을 시뮬레이터에서 실행해서 온보딩 플로우를 확인해줘
   ```
3. Claude가 빌드·실행하면 **대화 옆에 시뮬레이터 화면이 자동으로 열려요**

> 💡 **처음 실행할 때**: 기기 제어 권한 허용 여부를 한 번 묻는 창이 떠요. 허용하면 이후 같은 기기는 자동으로 진행돼요.

---

## 직접 조작도 할 수 있어요

시뮬레이터 패널은 단순 뷰어가 아니에요. **내가 직접 탭하거나 조작**할 수도 있어요:

| 동작 | 방법 |
|---|---|
| 탭·스와이프 | 패널에서 클릭·드래그 |
| 홈 버튼 | `Cmd+Shift+H` |
| 잠금 | `Cmd+L` |
| 볼륨 조절 | `Cmd+위/아래 화살표` |
| 기기 회전 | `Cmd+오른쪽 화살표` |
| 스크린샷 저장 | `Cmd+S` |
| 화면 녹화 | `Cmd+R` |

<div class="note-star">
★ Claude가 조작 중일 때는 <strong>"Claude is using this device"</strong> 표시가 나타나요. 이때는 잠깐 기다렸다가 내가 탭하세요. 동시에 조작하면 Claude가 이상한 결과를 볼 수 있어요.
</div>

---

## 특정 기기나 OS 버전으로 테스트하기

```
"iPhone SE 시뮬레이터로 실행해줘"
"iPad Air (iOS 17) 에서 가로 모드로 확인해줘"
```

이렇게 말하면 Claude가 해당 기기를 자동으로 선택해요.

---

## 주의사항

<div class="note-star">
★ <strong>물리적 기기 제어 불가</strong>: 시뮬레이터만 제어해요. 실제 iPhone/iPad는 Xcode에서 직접 실행하세요.<br />
★ <strong>로컬 세션만</strong>: 클라우드/SSH 세션에서는 사용할 수 없어요.<br />
★ <strong>개인 계정 주의</strong>: Claude가 스크린샷을 찍고 서버로 보내요. 시뮬레이터에서는 실제 개인 계정에 로그인하지 마세요.<br />
★ <strong>엔터프라이즈 플랜</strong>: 현재 Enterprise 플랜에는 미지원이에요.<br />
★ <strong>퍼블릭 베타</strong>: 아직 안정화 단계예요. 버그가 있을 수 있어요.
</div>

---

## 관련 기능

- **[공]** 컴퓨터 사용(Computer Use): 터미널 CLI에서 시뮬레이터 제어 → [`/docs/en/computer-use`](https://code.claude.com/docs/en/computer-use)
- Desktop 앱 소개: `content/docs/codeweb/` 참조

---

<div class="note-star">
★ 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a><br />
★ 퍼블릭 베타 기능이므로 세부 동작이 변경될 수 있어요<br />
★ Xcode 없이는 사용 불가 — 앱 스토어에서 Xcode 설치 후 iOS 플랫폼 추가 필요
</div>
