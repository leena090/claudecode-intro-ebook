---
title: "[공] What's New W30~W37 — 2026년 7월 말~9월 주요 업데이트 모음"
description: "2026년 7월 말부터 9월까지 Claude Code에 추가된 주요 기능들을 한 곳에서 확인하세요. 자체 호스팅, Projects, Artifacts 개선, 오토 모드 기본 설정 등"
tags: ["자동생성", "whatsnew", "W30", "W31", "W32", "W33", "W34", "W35", "W36", "W37", "업데이트요약", "2026가을"]
category: "next"
order: 18
lastUpdated: "2026-10-13"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a><br />
★ <strong>기간</strong>: 2026년 7월 28일(W30) ~ 9월 13일(W37) 추정<br />
★ <strong>주의</strong>: 주차별 세부 내용은 공식 발표 기준이며, 일부 항목은 마케팅·블로그 교차 확인 결과입니다
</div>

## 이 기간에 무슨 일이 있었나요?

2026년 W30~W37(7월 말~9월 중순)은 Claude Code에 굵직한 변화가 많았던 시기예요.

| 기간 | 주요 이슈 |
|------|---------|
| 8월 | 자체 호스팅 환경 공개 베타, Artifacts 기능 강화 |
| 9월 초 | Claude Opus 5.5 출시 (Fable 5.1 수준, 40% 저렴) |
| 9월 중순 | **오토 모드 기본 설정 전환** (Pro·Max·Team) |
| 9월 말 | Claude Sonnet 5.5 출시 (30% 빠르고 30% 저렴) |

---

## 주요 업데이트 목록

### 🏗️ [공] 자체 호스팅 환경 (Self-hosted Environments) — 공개 베타

**W32~33 추정 (2026년 8월 초)**

> 📣 마케팅 공식 발표: "Run Claude Code sessions on your own infrastructure, inside your network and next to your internal services. Now in public beta."

- 회사 내부 서버에서 Claude Code 세션을 직접 실행
- 내부망 서비스, DB에 바로 연결
- 7개 하위 문서로 세분화된 완전한 가이드 제공
- 관련 문서: [self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)

---

### 📁 [공] Projects — 관련 세션 그룹화

**W32~34 추정**

> 📣 마케팅 기준 가장 최신 기능으로 강조됨

- 관련 코딩 세션을 프로젝트 단위로 묶기
- 여러 에이전트를 동시에 실행·감독
- Claude Code Desktop에서 사용 가능
- 관련 문서: [claude-projects](https://code.claude.com/docs/en/claude-projects)

---

### 🎨 [공] Artifacts 강화

**W30~31 추정 (2026년 7월 말)**

> 📣 마케팅 발표 (Jun 18 - Aug 6 사이): "Preview in-progress work as a live, interactive artifact built from your session context, and share it with your team."

- 작업 중인 결과물을 라이브 인터랙티브 아티팩트로 미리보기
- 팀원과 바로 공유 가능
- 관련 문서: [artifacts](https://code.claude.com/docs/en/artifacts)

---

### 🔄 [공] 오토 모드 기본 설정 전환

**W38 (2026년 9월 17일)**

> 📣 마케팅 공식 발표: "Auto mode by default: Claude Code now runs in auto mode by default on Pro, Max, and Team plans, so it can work longer while still catching risky commands."

- Pro · Max · Team 플랜에서 오토 모드가 기본값으로 변경
- 배경 분류기가 위험 명령 자동 차단
- 장시간 작업 더 자연스럽게 진행 가능
- 관련 문서: [auto-mode-config](https://code.claude.com/docs/en/auto-mode-config)

---

### 🤖 [공] 새 SDK 기능들

이 기간에 Agent SDK에도 여러 업데이트가 있었어요 (공식 문서 기준):

| 신규 문서 | 내용 |
|---------|------|
| `agent-sdk/troubleshooting` | SDK 트러블슈팅 가이드 |
| `agent-sdk/configuration` | SDK 설정 방법 |
| `agent-sdk/examples` | 실용 예제 모음 |
| `agent-sdk/hooks` | SDK 훅(hooks) 사용법 |
| `cross-session-messaging` | 세션 간 메시지 주고받기 |

---

### 🔌 [공] Plugins 문서 구조 전면 개편

**W30~W37 중 시점 불명확**

이전에 평면적으로 나열되었던 플러그인 문서가 계층 구조로 재편됐어요:

```
(이전) plugins, plugins-reference, plugin-marketplaces...
(이후) plugins/
         ├── overview, install, create, publish
         ├── mods/ (모드 전용 하위 섹션)
         ├── anthropic-marketplaces
         └── 총 30여 개 세분화된 문서
```

→ 플러그인 개발·배포·마켓플레이스 각각의 전문 문서 제공

---

### 🖥️ [공] Desktop iOS Simulator 지원

**W30~W37 중 추정**

- 새 문서: `desktop-ios-simulator`
- macOS 데스크톱 앱에서 iOS 시뮬레이터 연동 가능 (추정)

---

### 🔒 [공] Claude Security 전용 문서

**W30~W37 중 추정**

- 새 문서: `claude-security`
- 보안 제품으로서의 Claude 관련 전용 가이드

---

## 빠른 참조: 신규 공식 문서 링크

```
https://code.claude.com/docs/en/claude-projects
https://code.claude.com/docs/en/self-hosted-environments
https://code.claude.com/docs/en/auto-mode-classifier-billing
https://code.claude.com/docs/en/claude-security
https://code.claude.com/docs/en/cross-session-messaging
https://code.claude.com/docs/en/desktop-ios-simulator
https://code.claude.com/docs/en/github-actions-cloud-providers
https://code.claude.com/docs/en/hipaa-setup
https://code.claude.com/docs/en/managed-settings
https://code.claude.com/docs/en/settings-reference
https://code.claude.com/docs/en/settings-example
https://code.claude.com/docs/en/claude-apps-gateway-on-aws
```

---

## 요약

이 기간의 가장 큰 변화들:

1. 🏗️ **자체 호스팅 환경 공개 베타** — 회사 내부망에서 Claude Code 실행
2. 📁 **Projects** — 관련 세션 그룹화로 멀티 에이전트 관리 쉽게
3. 🔄 **오토 모드 기본값 변경** — 장시간 자율 작업이 표준이 됨
4. 🤖 **신모델 Opus 5.5 · Sonnet 5.5** — 성능 향상 + 비용 절감
5. 🔌 **플러그인 문서 대규모 재편** — 30여 개 세분화된 가이드

> ⚠️ 주차별(W30~W37) 정확한 일정은 공식 What's New 페이지에서 확인하세요. 위 내용은 공식 마케팅·블로그·공식 문서 URL 목록 교차 확인 결과입니다.
