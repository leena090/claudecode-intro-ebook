---
title: "[공] 스마트폰에서 Claude Code 사용하기 — iOS·Android 공식 지원"
description: "iPhone과 Android에서 Claude Code 세션을 시작하고, 진행 상황을 확인하고, 지시를 내리는 모바일 앱 사용법"
tags: ["모바일", "iOS", "Android", "스마트폰", "remote-control", "dispatch", "자동생성"]
category: "tips"
order: 12
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code 모바일 앱 공식 지원 문서. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/mobile" target="_blank">공식 문서: code.claude.com/docs/en/mobile</a>
</div>

## 이동 중에도 Claude Code를 쓸 수 있어요

> 🍱 **비유**: 지금까지 Claude Code는 "컴퓨터 앞에서만 쓸 수 있는 도구"였어요. 그런데 이제는 카페에서 커피 마시면서, 지하철에서, 심지어 화장실에서도 스마트폰으로 Claude Code 작업을 지시하고 결과를 받을 수 있어요.

---

## 무엇을 할 수 있나요?

모바일 앱에서는 세 가지를 할 수 있어요:

| 기능 | 설명 |
|---|---|
| 🚀 **새 작업 시작** | 스마트폰에서 새 Claude Code 세션 시작 |
| 👀 **진행 상황 모니터** | 컴퓨터에서 실행 중인 Claude Code 상황 확인 |
| 💬 **지시 보내기** | 진행 중인 세션에 메시지 보내기 |

---

## 설치 방법

**iPhone (iOS):**
1. App Store에서 "Claude" 검색
2. Anthropic이 만든 공식 앱 설치
3. 로그인 (Pro/Max/Team/Enterprise 계정 필요)

**Android:**
1. Google Play Store에서 "Claude" 검색
2. 공식 앱 설치
3. 로그인

---

## 세 가지 사용 패턴

### 패턴 1: 스마트폰에서 작업 시작 → 컴퓨터에서 이어받기

```
1. 스마트폰에서 앱 열기
2. "이 GitHub 이슈 #42 분석해줘" 입력
3. Claude Code가 클라우드에서 작업 시작
4. 잠시 후 컴퓨터에서 같은 세션 열어서 이어받기
```

> 🍱 **비유**: 퇴근길 지하철에서 "오늘 저녁 메뉴 레시피 찾아줘"라고 지시해두면, 집에 도착했을 때 재료가 이미 정리돼 있는 것과 같아요.

### 패턴 2: 컴퓨터에서 실행 중 → 스마트폰으로 모니터링

```
1. 컴퓨터에서 Claude Code로 긴 작업 시작
2. 외출
3. 스마트폰으로 진행 상황 확인
4. 필요하면 스마트폰에서 추가 지시
```

### 패턴 3: Dispatch (모바일 → 내 로컬 PC)

**리서치 프리뷰** 기능으로, 스마트폰에서 지시를 보내면 **내 로컬 PC의 Claude Code**가 실행돼요.

```
스마트폰: "결제 모듈 버그 고쳐줘"
    ↓
내 로컬 PC가 작업 시작
    ↓
결과: PR 생성 완료 → 스마트폰으로 알림
```

<div class="note-circle">
⚠️ Dispatch 기능은 <strong>리서치 프리뷰</strong>예요 — 아직 실험 단계예요
</div>

---

## 알림 설정

Claude Code 작업이 끝나거나 도움이 필요할 때 **푸시 알림**을 받을 수 있어요.

> 🍱 **비유**: 빨래가 다 됐을 때 알려주는 세탁기 타이머 알림과 같아요. 화면을 계속 보고 있지 않아도 돼요.

**알림이 오는 경우:**
- ✅ 작업 완료
- ❓ Claude가 질문/확인이 필요할 때
- ⚠️ 에러 발생
- 🔔 PR 생성·리뷰 완료

**알림 설정 방법:**
- 앱 설정 → 알림 → Claude Code 허용

---

## 자주 묻는 질문

**Q. 무료 플랜으로도 쓸 수 있나요?**
A. 아니요. Claude Code 모바일 앱은 **Pro, Max, Team, Enterprise** 유료 플랜이 필요해요.

**Q. 배터리를 많이 쓰나요?**
A. 실제 연산은 서버에서 처리하므로 스마트폰 배터리 소모가 적어요.

**Q. 인터넷이 없으면?**
A. 인터넷 연결이 반드시 필요해요.

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/mobile" target="_blank">code.claude.com/docs/en/mobile</a><br />
○ Remote Control 기능과 함께 쓰면 더 강력해요 → <a href="https://code.claude.com/docs/en/remote-control" target="_blank">Remote Control 문서</a>
</div>
