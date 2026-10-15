---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7~9월)"
description: "자체 호스팅 환경 베타, Auto 모드 기본값 전환, Projects 출시 등 2026년 7~9월 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "자체호스팅", "auto-mode", "projects"]
category: "next"
order: 21
lastUpdated: "2026-10-15"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 및 공식 마케팅 페이지 내용을 한국어로 정리한 것입니다.<br />
★ 오늘 날짜 기준(2026-10-15) W25~W29 이후 8주치 업데이트를 한 곳에 모았습니다.<br />
⚠️ 일부 세부 내용은 공식 문서를 직접 확인하세요 (공식 발표 기준 정리).
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 (추정) | 핵심 |
|---|---|---|
| **W30** | 7/21~7/25 | 신규 플러그인 문서, 코드 리뷰 세분화 |
| **W31** | 7/28~8/01 | 사내망 세션 실행 준비 (Self-hosted 사전 작업) |
| **W32** | 8/04~8/08 | **자체 호스팅 환경 공개 베타**, **Auto 모드 기본값 전환** |
| **W33** | 8/11~8/15 | Desktop iOS 시뮬레이터 지원 |
| **W34** | 8/18~8/22 | GitHub Actions 클라우드 프로바이더 연동 |
| **W35** | 8/25~8/29 | Agent SDK 설정/예제 문서 개편 |
| **W36** | 9/01~9/05 | 클라우드 환경 문서 정리, HIPAA 설정 가이드 |
| **W37** | 9/08~9/14 | **Projects 기능 출시** |

> 📌 주차별 정확한 날짜는 공식 발표 기준으로 ±1주 차이가 있을 수 있습니다.

---

## W32 · 8월 첫째주 — 두 가지 큰 변화

### 🏠 자체 호스팅 환경(Self-hosted Environments) 공개 베타

회사 자체 서버에서 Claude Code 세션을 실행하는 기능이 공개 베타를 시작했어요.

- 코드·데이터가 회사 네트워크 밖으로 나가지 않음
- 내부 데이터베이스·서비스와 직접 연결 가능
- 금융·의료·정부 등 규제 산업에 적합

→ 자세한 내용은 **[자체 호스팅 환경 가이드](./self-hosted-environments)** 참조

### ⚡ Auto 모드 기본값 전환 (Pro/Max/Team)

Claude Code가 Pro, Max, Team 플랜에서 **Auto 모드를 기본값**으로 사용합니다.

- 안전한 작업은 스스로 진행
- 위험한 명령은 여전히 승인 요청
- 중단 없이 더 긴 작업 가능

→ 자세한 내용은 **[Auto 모드 기본값 가이드](./auto-mode-default)** 참조

---

## W33 · 8월 둘째주 — iOS 시뮬레이터 지원

Desktop App이 **iOS 시뮬레이터**(iOS Simulator)를 직접 제어할 수 있게 됐습니다.

iOS 앱을 개발하는 분들은 시뮬레이터를 켜놓고 Claude에게 "이 화면에서 버튼을 클릭해서 테스트해봐"라고 요청할 수 있어요.

---

## W34 · 8월 셋째주 — GitHub Actions 클라우드 연동

GitHub Actions(깃허브 액션즈)에서 Claude Code를 실행할 때 **다양한 클라우드 프로바이더**와 연동하는 공식 가이드가 추가됐어요.

AWS, Google Cloud, Microsoft Azure 환경의 CI/CD 파이프라인에서 Claude Code를 쓰는 방법이 문서화됐습니다.

---

## W35 · 8월 넷째주 — Agent SDK 문서 개편

Agent SDK (에이전트 소프트웨어 개발 키트) 문서가 크게 개편됐어요:
- `configuration.md` — 설정 방법 전체 정리
- `examples.md` — 실제 활용 예제 추가
- TypeScript v2 프리뷰 문서 통합 완료

개발자분들이 Agent SDK로 자신만의 Claude 기반 도구를 만들 때 참고하면 좋습니다.

---

## W36 · 9월 첫째주 — 클라우드 환경 + HIPAA

### 클라우드 환경 문서 정리

Self-hosted와 클라우드 모두를 아우르는 `cloud-environments.md` 문서가 새로 생겼어요.

### HIPAA 설정 가이드

미국 의료 정보 보호법(HIPAA, 히파) 요구사항을 충족하면서 Claude Code를 사용하는 방법을 담은 `hipaa-setup.md`가 공개됐습니다. 병원·의료 스타트업에서 일하시는 분들에게 중요합니다.

---

## W37 · 9월 둘째주 — Projects 출시

### 📁 Projects: 관련 세션 묶음 관리

여러 Claude 에이전트 세션을 하나의 프로젝트로 묶어서 관리하는 **Projects** 기능이 출시됐습니다.

- 관련 코딩 세션들을 한 화면에서 감독
- 여러 에이전트 동시 실행·조율
- Claude Code Desktop 전용

→ 자세한 내용은 **[Projects 기능 가이드](./projects-feature)** 참조

---

## W30~W31 · 7월 넷째주~8월 첫째주

문서 개선이 주로 이루어진 시기입니다:

- **플러그인 문서 확장**: Mods 섹션, Plugin Marketplace 운영 가이드, 평가(evals) 문서 추가
- **코드 리뷰 문서 세분화**: `code-review-local.md`, `code-review-setup.md`, `code-review-costs.md` 등으로 분리
- **설정 문서 강화**: `settings-reference.md`, `settings-example.md` 추가
- **관리자 문서**: `managed-settings.md` 통합, `server-managed-settings.md` 정비

---

## 이 기간 중 새로 생긴 주요 문서들

| 문서 | 설명 |
|------|------|
| `self-hosted-environments` | 자체 호스팅 환경 전체 가이드 |
| `cloud-environments` | 클라우드 환경 설정 |
| `hipaa-setup` | HIPAA 규정 준수 설정 |
| `desktop-ios-simulator` | iOS 시뮬레이터 연동 |
| `github-actions-cloud-providers` | GitHub Actions + 클라우드 연동 |
| `claude-projects` | Projects 기능 공식 문서 |
| `settings-reference` | settings.json 전체 레퍼런스 |
| `auto-mode-classifier-billing` | Auto 모드 분류기 과금 방식 |

---

## 정리

2026년 7~9월은 Claude Code가 **기업용 기능을 대폭 강화**한 시기입니다:

✅ **Self-hosted Environments** — 회사 서버에서 직접 운영  
✅ **Auto 모드 기본값** — 더 자율적이고 긴 작업 가능  
✅ **Projects** — 여러 에이전트 세션 통합 관리  
✅ **HIPAA 지원** — 의료 규제 환경 지원  
✅ **iOS 시뮬레이터** — 모바일 앱 개발자 지원 강화  

다음 W38 이후 업데이트도 곧 정리할게요.
