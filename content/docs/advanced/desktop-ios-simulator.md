---
title: "[공] iOS 시뮬레이터 패널 — 데스크톱 앱에서 아이폰 앱을 바로 테스트"
description: "Claude Code 데스크톱 앱 안에서 iOS 시뮬레이터를 열어 Claude가 앱을 빌드·테스트하는 과정을 옆에서 실시간으로 볼 수 있어요 (macOS, 공개 베타)"
tags: ["고급", "iOS", "아이오에스", "시뮬레이터", "simulator", "데스크톱", "desktop", "Xcode", "엑스코드", "모바일"]
category: "advanced"
order: 28
lastUpdated: "2026-07-23"
---

<div class="note-star">
★ <strong>[공]</strong> — <a href="https://code.claude.com/docs/en/desktop-ios-simulator">code.claude.com/docs/en/desktop-ios-simulator</a> 공식 문서 기준<br />
★ <strong>상태</strong>: 공개 베타 (macOS 전용, Pro·Max·Team 플랜) — Enterprise 플랜 미지원<br />
★ <strong>필수 버전</strong>: Claude Desktop v1.24012.0 이상 + Xcode (iOS 플랫폼 설치 포함)
</div>

## 이게 뭔가요?

iOS(아이오에스) 앱을 개발할 때 가장 번거로운 일 중 하나가 **"Claude한테 코드 수정 부탁하고, 그 다음 직접 Xcode에서 빌드하고, 시뮬레이터 열어서 확인하고…"** 라는 반복이에요.

**iOS 시뮬레이터 패널**은 이 과정을 바꿔줘요. Claude Code 데스크톱 앱 대화 창 바로 옆에 **iPhone/iPad 시뮬레이터 화면이 뜨고**, Claude가 앱을 빌드·실행·탭하는 걸 실시간으로 볼 수 있어요. 화면 속에서 나도 직접 탭해볼 수도 있어요.

> 📱 **비유로 설명하면**: 자동차 정비사한테 "이 소리 들려요?" 하면서 조수석에 앉아 같이 듣는 것과 같아요. 정비사(Claude)가 차(앱)를 점검하는 동안 나도 옆에서 실시간으로 볼 수 있죠.

---

## 준비물

| 항목 | 요구 사항 |
|---|---|
| Claude Desktop | v1.24012.0 이상 (macOS 전용) |
| 플랜 | Pro·Max·Team (Enterprise 미지원) |
| OS | **macOS만** 지원 (Apple iOS Simulator가 Mac에서만 돌아가요) |
| Xcode | 설치 + iOS 플랫폼 포함 |
| 세션 유형 | 로컬 세션만 (클라우드·SSH 세션 불가) |

> 🍱 **비유로 설명하면**: 아이폰 앱 시뮬레이터는 Mac 전용 소프트웨어예요. 마치 맥주 양조 장비가 공장에만 있는 것처럼, Apple 시뮬레이터도 Mac에서만 작동해요.

Xcode에 iOS 시뮬레이터 기기가 없다면:
```bash
xcodebuild -downloadPlatform iOS
```
위 명령어 또는 Xcode 설정에서 iOS 시뮬레이터 런타임을 추가하세요.

---

## 쓰는 방법

### 기본 흐름 (3단계)

**1단계 — iOS 프로젝트 열기**

Claude Code Desktop에서 Code 탭 → 내 iOS 앱 프로젝트 폴더를 세션 루트로 설정해요.

**2단계 — "앱 실행해줘" 요청**

```
앱 빌드해서 시뮬레이터에 올리고 온보딩 흐름 확인해줘.
```

이렇게 실행·확인을 목표로 말하는 게 포인트예요. "코드 수정만 해줘"가 아니라 "실행해서 확인해줘"라고 해야 시뮬레이터가 열려요.

**3단계 — 시뮬레이터 패널 확인**

앱이 시뮬레이터에서 실행되는 순간, 대화 창 옆에 **iOS Simulator 패널**이 자동으로 열려요. 처음 실행하는 기기라면 Claude에게 접근 권한을 허용할지 묻는 메시지가 나와요.

> 💡 이미 시뮬레이터가 연결됐거나 Swift 파일을 편집한 세션이라면, 세션 도구 모음의 **Views** 메뉴 → **iOS Simulator**로 직접 열 수도 있어요.

---

## 시뮬레이터 패널로 할 수 있는 것

| 동작 | 방법 |
|---|---|
| 탭·스와이프 | 패널 화면을 클릭·드래그 |
| 홈 버튼 | `Cmd+Shift+H` |
| 잠금 | `Cmd+L` |
| 볼륨 | `Cmd+Up` / `Cmd+Down` |
| 화면 회전 | `Cmd+Right Arrow` (시계 방향 90도) |
| 스크린샷 저장 | `Cmd+S` |
| 화면 녹화 | `Cmd+R` |
| 기기 전환 | 패널 상단 기기 메뉴에서 선택 |
| 스트리밍 품질 조정 | Frame rate / Resolution / Encoding 설정 |

> ⚠️ Claude가 기기를 제어 중일 때는 패널 상단에 **"Claude is using this device"** 배지가 뜨고, 이 배지가 사라질 때까지 기다렸다가 탭하는 게 좋아요.

---

## 세션·기기 관리

- **세션끼리 기기를 공유하지 않아요.** 병렬 세션이 3개라면 각각 자기 시뮬레이터를 써요.
- **세션 전환 시**: 사이드바에서 세션을 바꾸면 그 세션의 시뮬레이터 화면도 같이 바뀌어요.
- **자동 종료**: Claude Code Desktop을 닫거나 세션을 아카이브하면, Claude가 부팅한 시뮬레이터는 자동으로 꺼져요. (직접 켠 기기는 영향 없음)
- **최대 4개**: 한 세션에서 기기를 4대까지 동시에 쓸 수 있어요.

---

## Claude 기기 접근 권한

처음 Claude가 시뮬레이터를 사용하면 **기기 1대당 한 번** 허용 여부를 물어봐요.

허용하면 Claude는 그 기기에서 탭, 타이핑, 앱 실행, 스크린샷 촬영을 묻지 않고 할 수 있어요. (macOS 화면 녹화·접근성 권한 없이도 작동해요.)

> ⚠️ **주의**: Claude가 촬영한 스크린샷은 Anthropic으로 전송되어 일반 대화 보존 정책과 동일하게 저장돼요. **시뮬레이터에서 실제 계정으로 로그인하지 마세요.**

### 별도 허가가 필요한 동작

아래 두 가지는 기기 일회 동의와 별개로 **세션 권한 모드(permission mode)** 기준으로 판단해요:

- 기기에서 URL 열기 (딥링크 테스트 등)
- 앱 빌드 (`xcodebuild` 실행)

---

## 제한 사항

- **실제 iPhone·iPad는 제어 불가**. 실기기 테스트는 Xcode에서 직접 올린 다음 스크린샷을 대화에 첨부해서 Claude에게 보여주세요.
- **클라우드·SSH 세션 불가**. 시뮬레이터가 내 Mac에 있는데 Claude가 원격 서버에서 실행 중이라 연결이 안 돼요.
- **Enterprise 플랜 미지원**. `requireCoworkFullVmSandbox` 정책이 켜진 조직에서는 패널 자체가 비활성화돼요.

---

## 자주 겪는 문제

### 시뮬레이터 패널이 안 열릴 때

- "실행해서 온보딩 흐름 확인해줘"처럼 **실행·확인을 목표**로 명확하게 요청했는지 확인
- Simulator 앱을 직접 열어서 Xcode 시뮬레이터가 정상 작동하는지 확인
- Claude Desktop을 최신 버전으로 업데이트 (**Claude → Check for Updates**)

### "시뮬레이터를 찾을 수 없다"는 메시지

Xcode는 있는데 iOS 런타임이 없을 때예요. Xcode 설정에서 iOS 시뮬레이터를 추가하거나:

```bash
xcodebuild -downloadPlatform iOS
```

---

## 관련 문서

- [공식 문서 — iOS Simulator 패널](https://code.claude.com/docs/en/desktop-ios-simulator)
- [데스크톱 앱 전체 기능 보기](https://code.claude.com/docs/en/desktop)
- [Computer Use (CLI 버전)](https://code.claude.com/docs/en/computer-use)
- [모바일에서 Claude Code 쓰기](content/docs/advanced/mobile-claude-code.md)
