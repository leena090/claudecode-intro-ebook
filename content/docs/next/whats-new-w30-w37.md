---
title: "[공] 2026년 7~9월 Claude Code 주요 업데이트 (W30~W37)"
description: "2026년 7월 말부터 9월 초까지 8주 동안 쏟아진 Claude Code 신기능 총정리"
tags: ["자동생성", "업데이트", "what's-new", "2026", "w30", "w31", "w32", "w33", "w34", "w35", "w36", "w37"]
category: "next"
order: 17
lastUpdated: "2026-09-20"
---

<div class="note-star">
★ <strong>공식 출처</strong>: <a href="https://code.claude.com/docs/en/whats-new/index.md">code.claude.com/docs/en/whats-new</a><br />
★ W30(7월 20~24일)부터 W37(9월 7~11일)까지 8주치를 한 번에 정리했어요.
</div>

## 왜 이 문서를 만들었나요?

7월~9월 사이에 Claude Code에 엄청나게 많은 기능이 추가됐어요. 주간 업데이트 문서(W30~W37)를 하나씩 읽기 번거로우니, 핵심만 뽑아 드려요.

> 🚂 **비유로 설명하면**: 8주 동안 기차역 공사가 있었어요. 주차장도 새로 생기고, 엘리베이터도 달리고, 카페도 오픈했죠. 이 문서는 그 공사 결과물을 한눈에 보는 '역 안내도'예요.

---

## 📅 주간별 핵심 변경 요약

### W30 · 7월 20~24일
> **"Opus 5 기본 모델 전환 + iOS 시뮬레이터 + 보안 플러그인"**

| 항목 | 내용 |
|------|------|
| 🤖 Opus 5 기본값 | Claude Opus 5가 새 기본 Opus 모델로 전환 |
| 📱 iOS 시뮬레이터 | Desktop 앱에서 iOS 앱 미리보기 창 추가 |
| 🔒 Claude Security 플러그인 | 코드베이스의 취약점을 자동 스캔하는 플러그인 출시 |

### W32 · 8월 3~7일
> **"세션 간 메시지 + 셀프 호스티드 환경 + Auto mode 기본값"**

| 항목 | 내용 |
|------|------|
| 💬 세션 간 메시지 | 다른 Claude Code 세션에게 직접 메시지 전송 가능 |
| 🏗️ 셀프 호스티드 환경 | 내 서버에서 클라우드 세션 실행 (퍼블릭 베타) |
| ✅ Auto mode 기본값 | Pro·Max·Team 플랜에서 자동 권한 모드가 기본 설정으로 변경 |

> ⚠️ W31은 이번 주기에 발행되지 않았어요.

### W33 · 8월 10~14일
> **"사용량 한도 자동 재개 + GitLab 지원 + Fork mode 기본 활성화"**

| 항목 | 내용 |
|------|------|
| 🔄 자동 재개 | Desktop이 사용량 한도 리셋 후 자동으로 작업 이어서 실행 |
| 🦊 Fork mode 기본 | Fork 모드(세션 분기)가 기본으로 켜짐 |
| 🔶 GitLab 지원 | GitLab 머지 요청 + 플러그인 마켓플레이스 추가 |

### W34 · 8월 17~21일
> **"/design 스킬 + Concise 출력 스타일 + 모바일에서 세션 시작"**

| 항목 | 내용 |
|------|------|
| 🎨 /design 스킬 | 편집 가능한 UI 아트보드 초안을 /design 명령으로 작성 |
| 📝 Concise 출력 | 새 "Concise" 출력 스타일 설정 추가 |
| 📱 모바일 세션 시작 | 스마트폰에서 내 컴퓨터의 Claude Code 세션 원격 시작 |

### W35 · 8월 24~28일
> **"터미널 세션 복귀 + AI 피드백 보고서 + Restricted mode"**

| 항목 | 내용 |
|------|------|
| 🖥️ 터미널 세션 복귀 | Desktop 앱에서 기존 터미널 세션 다시 연결 가능 |
| 📋 피드백 보고서 | Claude가 코드 리뷰 피드백 보고서를 자동으로 초안 작성 |
| 🔐 Restricted mode | 새 "제한 모드"로 세션 시작 가능 |

### W36 · 8월 31일~9월 4일
> **"Fable 5.1 출시 + 백그라운드 컴퓨터 사용 + /diff 패널"**

| 항목 | 내용 |
|------|------|
| 🚀 Claude Fable 5.1 | 최신 Fable 5.1 모델로 전환 가능 (W37에서 정식 안내) |
| 🖱️ 백그라운드 Computer Use | Desktop에서 컴퓨터 제어를 백그라운드로 실행 |
| 📊 /diff 패널 | Claude 편집 내용을 실시간 `/diff` 패널에서 확인 |

### W37 · 9월 7~11일
> **"플러그인 eval 테스트 + Desktop 창 팝아웃"**

| 항목 | 내용 |
|------|------|
| 🧪 플러그인 eval | `claude plugin eval` 명령으로 플러그인 테스트 자동화 |
| 🪟 창 팝아웃 | Desktop의 특정 패널을 독립 창으로 분리 가능 |

---

## 🌟 이 기간 가장 큰 변화 TOP 3

### 1️⃣ Auto mode가 기본값이 됐어요 (W32, 2026-08-03)

이전에는 Claude Code를 쓸 때 파일 수정이나 명령 실행 시마다 허락을 받았어요. 이제 **Pro·Max·Team 플랜에서 Auto mode(자동 권한 모드)가 기본**으로 설정됩니다.

> 🏠 비유: 집 안에서 직원에게 "냉장고 열어도 돼요? 전화해도 돼요?" 매번 물어보던 걸 이제 "괜찮은 건 그냥 하고, 위험한 것만 물어봐"로 바꾼 거예요.

### 2️⃣ 세션 간 메시지 (W32, 2026-08-03)

여러 Claude Code 세션이 서로 메시지를 주고받을 수 있게 됐어요. 예를 들어:
- 세션 A(프론트엔드 작업)가 세션 B(백엔드 작업)에게 "API 사양 완성됐어?" 물어볼 수 있어요
- 내 컴퓨터와 클라우드 세션 사이에서도 가능

### 3️⃣ GitLab 정식 지원 (W33, 2026-08-10)

GitHub Actions처럼 GitLab CI/CD와도 연동됩니다. GitLab을 쓰는 팀이라면 이제 Claude Code를 완전히 활용할 수 있어요.

---

## 📖 자세히 읽어보려면

각 주의 공식 문서 링크예요:

- [W30 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w30.md)
- [W32 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w32.md)
- [W33 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w33.md)
- [W34 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w34.md)
- [W35 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w35.md)
- [W36 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w36.md)
- [W37 공식 문서](https://code.claude.com/docs/en/whats-new/2026-w37.md)
