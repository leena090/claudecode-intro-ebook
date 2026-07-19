---
title: "[공] 스마트폰으로 Claude Code 쓰기 — iOS & Android"
description: "집이 아닌 곳에서도 AI 코딩을 — 이동 중 세션 확인, 응답, Remote Control 연동까지"
tags: ["자동생성", "모바일", "iOS", "Android", "remote-control", "이동중코딩"]
category: "advanced"
order: 22
lastUpdated: "2026-07-19"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — iOS App Store · Android Google Play 지원. <code>[공]</code><br />
👉 공식 문서: <a href="https://code.claude.com/docs/en/mobile" target="_blank">code.claude.com/docs/en/mobile</a>
</div>

## "지하철에서도 Claude Code가 되나요?"

네, 됩니다.

Claude Code는 이제 **iOS(App Store)** 와 **Android(Google Play)** 앱으로도 쓸 수 있어요. 노트북 없이도 스마트폰에서 AI 코딩 작업을 확인하고, 이어가고, 지시할 수 있어요.

> 🍱 **비유**: 집에서 빨래를 돌려놓고 밖에 나가도 세탁기 알림을 받는 것처럼, Claude Code도 세션을 돌려놓고 밖에서 진행 상황을 확인하고 추가 지시를 할 수 있어요.

---

## 앱 내려받기

| 플랫폼 | 다운로드 위치 |
|--------|-------------|
| iPhone / iPad | App Store에서 "Claude Code" 검색 |
| Android | Google Play에서 "Claude Code" 검색 |

**로그인**: 기존 Claude.ai 또는 Claude Console 계정으로 로그인하면 돼요. 별도 계정 불필요.

---

## 모바일에서 할 수 있는 것

### 1. 세션 확인 & 이어가기

PC에서 진행 중이던 Claude Code 세션을 스마트폰에서 이어볼 수 있어요.

```
시나리오:
- 집에서 Claude Code로 버그 수정 작업 시작
- 외출하면서 "계속 진행해줘" 지시
- 지하철에서 앱으로 진행 상황 확인
- 필요하면 "이 부분은 다시 검토해줘" 추가 지시
```

### 2. Remote Control 연동

**Remote Control** 기능을 켜두면, 모바일에서 PC의 Claude Code 세션을 원격으로 볼 수 있어요.

> 🍱 **비유**: 집에서 돌아가는 로봇청소기를 스마트폰으로 원격 제어하는 것과 비슷해요.

설정 방법:
```bash
# PC에서 Remote Control 활성화
# settings.json에 추가
{
  "remoteControl": {
    "enabled": true
  }
}
```

공식 Remote Control 문서 → [code.claude.com/docs/en/remote-control](https://code.claude.com/docs/en/remote-control)

### 3. 알림 받기 (Routines & Schedules)

Routines나 예약 작업이 완료되면 모바일 앱에서 알림을 받을 수 있어요 (공식 발표 기준, 상세 동작은 추정 포함).

---

## 모바일 앱의 한계

| 기능 | PC | 모바일 |
|------|----|----- |
| 새 작업 시작 (대화형) | ✅ | ✅ |
| 진행 중 세션 확인 | ✅ | ✅ |
| 터미널 명령어 실행 | ✅ | ❌ |
| 파일 직접 편집 | ✅ | ❌ |
| 코드 실행 환경 | ✅ | ❌ |

> 🍱 **정직한 비유**: 모바일은 "현장 지휘소"가 아니라 "무전기"예요. 실제 공사는 PC에서 하고, 모바일은 현황 보고·간단 지시용이에요.

---

## 이런 분께 추천해요

| 상황 | 추천 이유 |
|------|---------|
| 출퇴근 중 배포 확인이 필요한 분 | 이동 중 세션 상태 파악 |
| Routines로 자동화를 운영하는 분 | 결과 알림 받기 |
| 오래 걸리는 작업(테스트·빌드)을 기다리는 분 | 바깥에 있어도 완료 확인 |
| 화면이 작은 노트북만 있는 분 | 폰 화면으로 읽기 쉬운 결과 확인 |

---

## 자주 묻는 질문

**Q. 모바일에서 직접 코드를 입력할 수 있나요?**
채팅 형식으로 지시는 가능해요. 다만 코드를 직접 편집하는 에디터 기능은 없어요.

**Q. 배터리 소모가 심한가요?**
AI 처리는 서버에서 하기 때문에 앱 자체는 가벼워요. 단, 화면을 계속 켜두면 배터리가 소모돼요.

**Q. iOS와 Android 기능이 같나요?**
공식 문서 기준으로 두 플랫폼 모두 지원해요. 세부 UI는 플랫폼마다 약간 다를 수 있어요 (공식 발표 기준).

<div class="note-circle">
○ Android 앱은 2026년 7월 18일 공식 마케팅 페이지에 등재됐어요<br />
○ iOS 앱은 그 이전부터 지원됐어요<br />
○ 세부 기능은 앱 버전마다 달라질 수 있어요 — 공식 문서 최신 버전 확인 권장
</div>
