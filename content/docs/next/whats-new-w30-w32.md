---
title: "[공] Claude Code 주간 업데이트 W30·W32 (2026년 7~8월)"
description: "Opus 5 기본 모델 전환, iOS 시뮬레이터 패널, Claude Security 플러그인, 세션 간 메시지, 자체 호스팅 환경, auto mode 기본 설정"
tags: ["자동생성", "주간업데이트", "Opus5", "iOS시뮬레이터", "ClaudeSecurity", "세션메시지", "자체호스팅", "automode"]
category: "next"
order: 17
lastUpdated: "2026-08-12"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30, W32) 내용을 한국어로 정리한 것입니다.<br />
★ W31은 공식 게시 없음(조용한 주). W30·W32 핵심 업데이트만 담았습니다.
</div>

## 한 눈에 보는 2주 요약

| 주차 | 기간 | 핵심 변경 |
|---|---|---|
| **W30** | 7/20~7/24 | **Opus 5** 기본 Opus 모델, iOS 시뮬레이터 패널, Claude Security 플러그인 |
| **W31** | 7/27~7/31 | (공식 게시 없음) |
| **W32** | 8/3~8/7 | **세션 간 메시지**, 자체 호스팅 환경, **auto mode 기본 설정** |

---

## W30 · 7월 20~24일

### 🤖 Opus 5가 기본 Opus 모델로 전환

Claude Code에서 `/model` 명령으로 Opus를 선택하면 이제 **Claude Opus 5**(`claude-opus-5`)가 사용됩니다. 이전 기본이던 Opus 4.8보다 장기 에이전트 실행·코딩·전문 업무에서 한 단계 성능이 향상됐어요.

> 💼 **비유로 설명하면**: 지금까지 "팀장급" 직원이 처리하던 일을 이제 "임원급" 직원이 맡게 된 거예요. 같은 요금으로 더 뛰어난 실력을 쓸 수 있게 된 셈입니다.

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 기본 Opus 모델 | `claude-opus-4-8` | **`claude-opus-5`** |
| Fast Mode 대상 | Opus 4.8 | **Opus 5** |
| Fast Mode 가격 | $30/$150 per million tokens | **$10/$50 per million tokens** |

⚠️ **추정**: Fast Mode 가격은 공식 마케팅 페이지 기준. 플랜별 실제 소비 크레딧은 다를 수 있으니 [공식 문서](https://code.claude.com/docs/en/fast-mode)를 확인하세요.

---

### 📱 Desktop 앱에 iOS 시뮬레이터 패널 추가

Claude Code Desktop 앱에서 iOS 앱을 직접 빌드·실행·확인할 수 있는 **iOS Simulator(시뮬레이터) 패널**이 생겼어요.

- Claude가 iOS 앱을 빌드하거나 실행하면 자동으로 시뮬레이터 패널에 표시
- 각 세션마다 독립 시뮬레이터 제공 (병렬 작업 가능)
- Desktop 앱 안에서 화면을 보면서 디버깅 가능

> 🍎 **비유로 설명하면**: 예전엔 코드를 수정할 때마다 Xcode 화면을 따로 열어야 했어요. 이제 Claude가 수정한 결과가 옆 패널에서 바로 보입니다. 마치 요리하면서 바로 옆 모니터로 레시피 영상을 보는 것처럼요.

📄 관련 공식 문서: [Test iOS apps in the simulator](https://code.claude.com/docs/en/desktop-ios-simulator)

---

### 🔐 Claude Security 플러그인 — 코드베이스 취약점 스캔

새로운 **Claude Security 플러그인**이 출시됐어요. 기존 코드베이스 전체를 스캔해서 보안 취약점을 찾고, 발견된 문제를 패치로 연결해줍니다.

```
/plugin install claude-security
```

| 플러그인 | 역할 |
|---|---|
| `security-guidance` | Claude가 코드를 **작성하는 도중** 실시간으로 취약점 검토 |
| **`claude-security`** (신규) | **기존 코드베이스 전체**를 한 번에 스캔 후 패치 제안 |

> 🔍 **비유로 설명하면**: security-guidance가 "요리하는 중에 안전 점검"이라면, Claude Security는 "주방 전체를 한 번 다 둘러보는 정기 위생 점검"이에요.

📄 관련 공식 문서: [Scan your codebase for vulnerabilities](https://code.claude.com/docs/en/claude-security)

---

## W32 · 8월 3~7일

### 💬 세션 간 메시지 전송 (Cross-Session Messaging)

**다른 Claude Code 세션에 직접 메시지를 보낼 수 있게 됐어요!**

- 같은 기기에서 실행 중인 다른 세션에 메시지 전송
- 다른 기기나 웹(claude.ai/code)의 세션에도 연결 가능
- 멀티에이전트 워크플로우에서 세션끼리 조율 가능

```
> 백엔드 세션에게 "API 테스트 완료했어, 프론트엔드 배포 시작해도 돼" 라고 알려줘
```

> 🤝 **비유로 설명하면**: 여러 명이 각자의 방에서 일하다가 서로 내선 전화로 연락하는 것처럼, 각 Claude Code 세션이 서로 소통할 수 있어요. 대형 프로젝트를 여러 에이전트가 분담할 때 특히 유용합니다.

📄 관련 공식 문서: [Message your other Claude Code sessions](https://code.claude.com/docs/en/cross-session-messaging)

---

### 🏠 자체 호스팅 환경 (Self-Hosted Environments) 출시

Claude Code 클라우드 세션을 **내가 직접 제어하는 서버(인프라)에서 실행**하는 기능이 정식 출시됐어요.

**어떤 경우에 필요하나요?**
- 보안 정책상 코드나 데이터가 외부 서버를 거치면 안 되는 기업
- 특수한 네트워크 환경(인트라넷, 방화벽 내부)에서 작업해야 할 때
- 더 강력한 컴퓨팅 자원이 필요한 대규모 코드베이스 작업

**구조 한눈에 보기:**

```
Claude Code (웹·모바일) 
    → Claude 오케스트레이터 
    → 내 서버의 Self-Hosted Runner 
    → 내 코드베이스
```

> 🏭 **비유로 설명하면**: 일반 클라우드 세션이 "공유 사무실(코워킹 스페이스)"에서 일하는 거라면, 자체 호스팅 환경은 "우리 회사 사무실"에 Claude 직원을 파견 받아 일하게 하는 것입니다. 장비·네트워크·보안 규정 모두 우리가 통제할 수 있어요.

**빠른 시작 순서:**
1. 서버에 Claude Code 설치
2. 환경(environment) 생성: `claude env create`
3. Runner 시작: `claude runner start`
4. 웹·앱에서 세션을 자체 호스팅 환경으로 라우팅

📄 관련 공식 문서: [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) · [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) · [Deploy to production](https://code.claude.com/docs/en/self-hosted-environments-deploy)

---

### ⚙️ Auto Mode가 기본 퍼미션 모드로 변경

Claude Code의 기본 퍼미션 모드가 **Auto Mode(오토 모드)**로 바뀌었어요.

| 이전 기본값 | 새 기본값 |
|---|---|
| Normal mode (매번 확인 요청) | **Auto mode** (안전한 작업은 자동 허용) |

Auto mode는 내장 안전 분류기(classifier)를 이용해 파일 읽기·테스트 실행처럼 안전한 작업은 자동으로 허용하고, 파일 삭제·네트워크 요청처럼 주의가 필요한 작업만 확인을 요청합니다.

> 🚦 **비유로 설명하면**: 이전엔 모든 신호등에서 빨간불이 켜져 있었는데, 이제 안전한 길은 초록불이 유지되고 위험한 교차로에서만 빨간불이 켜지는 방식으로 바뀐 거예요.

Auto mode 설정을 세부 조정하려면: [Configure auto mode](https://code.claude.com/docs/en/auto-mode-config)

---

## 함께 알아두면 좋은 새 문서들

이번 업데이트와 함께 공식 문서에 새로 추가된 페이지들이에요:

| 문서 | 내용 |
|---|---|
| [Claude Code GitHub Actions — 클라우드 제공자](https://code.claude.com/docs/en/github-actions-cloud-providers) | Amazon Bedrock·Google Cloud·Microsoft Foundry에서 GitHub Actions 실행 |
| [Cloud environments](https://code.claude.com/docs/en/cloud-environments) | 클라우드 환경 네트워크·변수·캐시 설정 |
| [Agent SDK 예시](https://code.claude.com/docs/en/agent-sdk/examples) | 완전한 Agent SDK 예제 프로젝트 모음 |
| [Agent SDK 트러블슈팅](https://code.claude.com/docs/en/agent-sdk/troubleshooting) | Agent SDK 에러 메시지별 원인과 해결법 |
| [Claude apps gateway on AWS](https://code.claude.com/docs/en/claude-apps-gateway-on-aws) | AWS ECS/EKS에 Claude apps gateway 배포 예시 |
