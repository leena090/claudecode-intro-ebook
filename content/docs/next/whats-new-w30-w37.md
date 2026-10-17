---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7~9월)"
description: "자체 호스팅 환경 공개 베타, Projects 기능, Auto mode 기본 적용 등 2026년 여름~가을 주요 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "자체호스팅", "Projects", "Auto모드", "W30", "W37"]
category: "next"
order: 18
lastUpdated: "2026-10-17"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37)과 마케팅 페이지 내용을 바탕으로 합니다.
<br />★ 각 주차별 세부 내용은 공식 What's New 페이지에서 확인하세요. 일부 내용은 마케팅 페이지 기반 추정입니다.
</div>

## 한눈에 보는 8주 요약

| 주차 | 기간 (추정) | 핵심 내용 |
|---|---|---|
| **W30** | 7/21~7/25 | 공식 발표 기준 (세부 확인 필요) |
| **W32** | 8/4~8/8 | **자체 호스팅 환경 공개 베타** 출시 |
| **W33** | 8/11~8/15 | 공식 발표 기준 (세부 확인 필요) |
| **W34** | 8/18~8/22 | 공식 발표 기준 (세부 확인 필요) |
| **W35** | 8/25~8/29 | 공식 발표 기준 (세부 확인 필요) |
| **W36** | 9/1~9/5 | 공식 발표 기준 (세부 확인 필요) |
| **W37** | 9/8~9/12 | **Auto mode 기본값 적용** (Sep 17) 직전 주 |

> ⚠️ **추정 포함**: W30~W37의 세부 내용은 공식 What's New 페이지에서 직접 확인하세요. 아래는 마케팅 페이지와 블로그에서 확인된 큰 변화 위주로 정리했습니다.

---

## 이 기간의 가장 큰 변화 3가지

### 1. 🏠 자체 호스팅 환경 (Self-hosted Environments) 공개 베타 — Aug 7, 2026

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 확인: "Run Claude Code sessions on your own infrastructure, inside your network and next to your internal services. Now in public beta." (Aug 7, 2026)
</div>

회사 보안 정책 때문에 클라우드를 못 쓰던 팀들을 위한 기능이에요.

> 🏢 **비유**: 카카오톡이 회사 전용 사설 서버에 깔리는 것처럼, Claude Code도 이제 회사 내부 서버에서 직접 돌릴 수 있어요.

**주요 혜택:**
- 사내 네트워크 안에서 실행 → 데이터 외부 유출 걱정 없음
- 내부 서비스와 직접 연결 (사내 DB, 사내 API 등)
- 금융·의료·공공기관 등 규제 산업에서도 사용 가능

관련 공식 문서: `code.claude.com/docs/en/self-hosted-environments` (신규 섹션)

---

### 2. 🗂️ Projects — 여러 에이전트를 한 곳에서 관리

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 확인: "Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop." (최신 기능 하이라이트로 등재)
</div>

여러 Claude 에이전트가 동시에 일하고 있을 때, 하나씩 따로 관리하는 게 복잡했죠? Projects가 해결해줘요.

> 📋 **비유**: 프로젝트 관리 툴에서 여러 팀원(에이전트)을 하나의 프로젝트 보드에서 보는 것처럼요.

**무엇이 달라지나요:**
- 관련된 코딩 세션들을 하나의 프로젝트로 묶기
- 여러 에이전트의 진행 상황을 한 화면에서 감독
- Claude Code Desktop 앱 전용 기능

---

### 3. 🤖 Auto mode 기본값 적용 — Sep 17, 2026

<div class="note-star">
★ <strong>[공]</strong> 마케팅 페이지 확인: "Auto mode by default: Claude Code now runs in auto mode by default on Pro, Max, and Team plans, so it can work longer while still catching risky commands." (Blog Sep 17, 2026)
</div>

이전에는 Auto mode를 직접 켜야 했는데, 이제 Pro·Max·Team 플랜에서는 기본으로 켜져 있어요.

> 🚗 **비유**: 이전에는 내비게이션 자동 경로 기능을 매번 켜야 했는데, 이제 차에 타면 알아서 켜져 있는 거예요.

**무엇이 달라지나요:**
- Pro, Max, Team 플랜에서 별도 설정 없이 Auto mode 시작
- 위험한 명령어는 여전히 감지해서 멈춤 (안전 체크 유지)
- 작업을 더 오래, 더 자율적으로 처리 가능

> 💡 **원한다면 바꿀 수 있어요**: Auto mode가 불편하면 `Shift+Tab`으로 다른 모드로 전환하거나 settings.json에서 기본값을 변경할 수 있습니다.

---

## 이 기간에 추가된 공식 문서 섹션들

이번 기간 동안 공식 문서(code.claude.com/docs)가 대폭 확장됐습니다. 주요 신규 섹션:

### 코드 리뷰 전용 섹션 신설
기존에 하나였던 `code-review` 페이지가 6개로 분리됐어요:
- `code-review-local` — 로컬에서 코드 리뷰
- `code-review-setup` — 설정 가이드
- `code-review-customize` — 커스터마이징
- `code-review-pull-requests` — PR 리뷰
- `code-review-costs` — 비용 관리
- `code-review-troubleshooting` — 문제 해결

### 플러그인 문서 전면 개편
기존의 단순한 plugins 페이지가 30개 이상의 세분화된 가이드로 확장됐어요. 플러그인을 만들고, 배포하고, 마켓플레이스를 운영하는 방법까지 다룹니다.

### 자체 호스팅 환경 문서 (7개 페이지)
`self-hosted-environments`를 시작으로 빠른 시작, 배포, 설정, 테스트, 레퍼런스, 신원 인증까지 총 7개 페이지가 추가됐어요.

---

## 주간별 공식 링크

| 주차 | 공식 링크 |
|---|---|
| W30 | [code.claude.com/docs/en/whats-new/2026-w30](https://code.claude.com/docs/en/whats-new/2026-w30) |
| W32 | [code.claude.com/docs/en/whats-new/2026-w32](https://code.claude.com/docs/en/whats-new/2026-w32) |
| W33 | [code.claude.com/docs/en/whats-new/2026-w33](https://code.claude.com/docs/en/whats-new/2026-w33) |
| W34 | [code.claude.com/docs/en/whats-new/2026-w34](https://code.claude.com/docs/en/whats-new/2026-w34) |
| W35 | [code.claude.com/docs/en/whats-new/2026-w35](https://code.claude.com/docs/en/whats-new/2026-w35) |
| W36 | [code.claude.com/docs/en/whats-new/2026-w36](https://code.claude.com/docs/en/whats-new/2026-w36) |
| W37 | [code.claude.com/docs/en/whats-new/2026-w37](https://code.claude.com/docs/en/whats-new/2026-w37) |

> 🔍 **W31이 없는 이유**: 공식 llms.txt에서 2026-w31이 목록에 없어요. 해당 주에 업데이트가 없었거나 다른 주와 통합된 것으로 추정됩니다.
