---
title: "[공] Claude Code 주간 업데이트 W30·W32 (2026년 7~8월)"
description: "Opus 5 기본 모델 전환, iOS 시뮬레이터 창, Claude Security 플러그인, 세션 간 메시지, 셀프 호스팅 환경, Auto Mode 기본 설정 — 2주치 주요 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "iOS시뮬레이터", "ClaudeSecurity", "세션메시지", "셀프호스팅", "AutoMode"]
category: "next"
order: 18
lastUpdated: "2026-08-21"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> W30·W32 내용을 한국어로 정리한 것입니다.
<br />★ W31(7월 27~31일)은 공식 문서에 게시되지 않았습니다.
<br />★ 오늘 기준(2026-08-21) 최신 2주치 업데이트를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 2주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | **Opus 5 기본 모델**, iOS 시뮬레이터 창, Claude Security 플러그인 |
| W31 | 7/27~7/31 | (공식 문서 미게시) |
| **W32** | 8/3~8/7 | **세션 간 메시지**, 셀프 호스팅 환경, Auto Mode 기본값 전환 |

---

## W30 · 7월 20~24일 — Opus 5 시대 개막

### 🧠 Opus 5가 기본 Opus 모델이 됐어요

Claude Code에서 Opus를 사용할 때 이제 자동으로 **Claude Opus 5**가 적용돼요.

> 🍱 **비유로 설명하면**: TV 채널을 바꾸지 않아도 자동으로 화질이 4K로 업그레이드된 것과 같아요. 여러분이 설정을 바꾸지 않아도 이미 더 똑똑한 Opus 5로 작동하고 있어요.

```bash
# 현재 사용 중인 모델 확인
/model

# 또는 명시적으로 Opus 5 지정
claude --model claude-opus-5
```

- Opus 5는 장시간 에이전트 작업, 코딩, 전문 업무에서 전 세대 대비 크게 향상
- Fast Mode도 Opus 5 기반으로 전환 ($10/$50 per million tokens)

→ 자세한 내용은 **[Claude Opus 5 소개 글](./claude-opus-5.md)** 참조

---

### 📱 Desktop 앱에 iOS 시뮬레이터 창이 생겼어요

Claude Code Desktop(데스크톱 앱)을 쓴다면, 이제 **앱 안에서 바로 iOS 시뮬레이터**를 볼 수 있어요.

> 🍱 **비유로 설명하면**: 예전엔 코드를 짜고 → 시뮬레이터 창을 따로 열고 → 결과를 확인하는 식으로 왔다 갔다 해야 했는데, 이제는 **Claude Code 창 안에 시뮬레이터가 내장**됐어요. 마치 요리하면서 오른쪽에 맛 미리보기 창이 뜨는 것처럼요.

| 기능 | 설명 |
|---|---|
| 내장 시뮬레이터 창 | Desktop 앱 내에서 iOS 앱을 직접 실행·확인 |
| 세션별 시뮬레이터 | 각 Claude Code 세션마다 별도 시뮬레이터 운영 |
| 자동 연동 | 클로드가 앱을 빌드·실행하면 자동으로 시뮬레이터 창에 표시 |

공식 문서: [iOS 시뮬레이터 사용하기](https://code.claude.com/docs/en/desktop-ios-simulator.md) [공]

---

### 🛡️ Claude Security 플러그인 — 코드베이스 취약점 스캔

새 **Claude Security 플러그인**을 설치하면, Claude Code 세션 안에서 **보안 취약점을 자동으로 찾아주고 패치까지 제안**해줘요.

> 🍱 **비유로 설명하면**: 집을 짓고 나서 소방서 점검관이 와서 위험한 곳을 찾아주는 것처럼, 코드를 다 짜고 나면 Claude Security가 "여기 구멍 났어요, 이렇게 막으세요"라고 알려줘요.

```bash
# Claude Security 플러그인 설치
/plugin install claude-security

# 설치 후 취약점 스캔 실행
/security-scan
```

- 코드베이스 전체에서 취약점 패턴 검색
- 발견된 취약점에 대한 패치 코드 자동 제안
- 개발자가 검토 후 적용 여부 결정

공식 문서: [코드베이스 취약점 스캔](https://code.claude.com/docs/en/claude-security.md) [공]

---

## W32 · 8월 3~7일 — 에이전트 협력 대폭 강화

### 💬 Claude Code 세션들이 서로 메시지를 보낼 수 있어요

여러 Claude Code 세션을 동시에 돌리고 있다면, 이제 **각 세션끼리 직접 메시지**를 주고받을 수 있어요.

> 🍱 **비유로 설명하면**: 여러 팀원이 각자 다른 방에서 일하는데, 이제 **내부 메신저**로 "나 이거 끝났어, 네 쪽은 어때?"라고 물어볼 수 있게 된 거예요. 각 Claude Code 세션이 하나의 팀원처럼 소통하는 셈이에요.

```bash
# 다른 세션에 메시지 보내기 (세션 안에서)
/sessions list      # 현재 실행 중인 세션 목록 확인
/message <session-id> "프론트엔드 작업 완료, 백엔드 API 연동 시작해줘"
```

- 같은 컴퓨터의 다른 세션과 통신 가능
- 원격 세션(웹/클라우드)과도 메시지 교환 가능
- 에이전트 팀(Agent Teams) 기능과 연계해서 사용하면 강력

공식 문서: [다른 Claude Code 세션에 메시지 보내기](https://code.claude.com/docs/en/cross-session-messaging.md) [공]

→ 자세한 내용은 **[세션 간 메시지 가이드](../advanced/cross-session-messaging.md)** 참조

---

### 🏠 셀프 호스팅 환경 — 클라우드 세션을 내 서버에서 실행

Claude Code 클라우드 세션을 **Anthropic 서버가 아닌 내 인프라(서버)**에서 실행할 수 있는 **셀프 호스팅 환경**이 출시됐어요.

> 🍱 **비유로 설명하면**: 지금까지 Claude Code 클라우드 기능은 Anthropic의 주방에서 음식을 만들어줬다면, 이제는 **내 주방에서 같은 레시피로 직접 만들 수 있어요**. 데이터가 내 서버 안에서만 돌기 때문에 보안이 중요한 기업에 적합해요.

| 장점 | 설명 |
|---|---|
| 데이터 보안 | 코드와 대화가 내 서버 안에서만 처리 |
| 커스텀 환경 | 내부 네트워크, 자격 증명, 도구 접근 설정 가능 |
| 규정 준수 | 금융·의료·공공기관 등 규제 산업에 적합 |

공식 문서: [셀프 호스팅 환경](https://code.claude.com/docs/en/self-hosted-environments.md) [공]

→ 자세한 내용은 **[셀프 호스팅 환경 가이드](../advanced/self-hosted-environments.md)** 참조

---

### 🔒 Auto Mode가 이제 기본 권한 모드예요

Claude Code의 기본 권한 모드가 **Auto Mode(오토 모드)**로 바뀌었어요.

> 🍱 **비유로 설명하면**: 예전엔 Claude Code가 파일을 수정하거나 명령어를 실행할 때마다 "이거 해도 될까요?"라고 물어봤는데, 이제는 **안전한 것은 알아서 하고 위험한 것만 물어보는** 스마트한 모드가 기본이 됐어요. 마치 AI 비서가 "커피 주문"은 알아서 하고 "계좌 이체"만 확인받는 것처럼요.

```bash
# 권한 모드 확인 및 변경
Shift+Tab  # 모드 순환 (CLI)

# 모드 종류
# Normal   — 모든 작업 전 확인
# Auto     — 안전한 작업은 자동, 위험한 작업만 확인 (이제 기본!)
# AcceptEdits — 파일 편집은 자동, 명령어는 확인
```

공식 문서: [권한 모드 선택하기](https://code.claude.com/docs/en/permission-modes.md) [공]

---

## 정리

| 주차 | 기능 | 영향 |
|---|---|---|
| W30 | Opus 5 기본 전환 | 즉시 적용, 별도 설정 불필요 |
| W30 | iOS 시뮬레이터 | Desktop 앱 사용자에게 유용 |
| W30 | Claude Security 플러그인 | 보안 민감 프로젝트에 권장 |
| W32 | 세션 간 메시지 | 멀티 세션 작업 효율 향상 |
| W32 | 셀프 호스팅 환경 | 기업·보안 민감 환경에 중요 |
| W32 | Auto Mode 기본값 | 즉시 적용, 더 편리한 사용 경험 |
