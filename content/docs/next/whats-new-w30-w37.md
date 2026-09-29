---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "자체 호스팅 환경 공개 베타, Auto 모드 기본값 전환, Projects 출시 등 2026년 7~9월 주요 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "자체호스팅", "오토모드", "Projects", "Fable5.1"]
category: "next"
order: 18
lastUpdated: "2026-09-29"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용을 한국어로 정리한 것입니다.
<br />★ 마케팅 페이지 최신 기능 발표와 블로그 포스트를 함께 참고했습니다. 일부 항목은 <strong>추정</strong>이 포함돼 있어요.
<br />★ W31은 공식 문서에서 현재 제공되지 않습니다 (추정: 소규모 업데이트로 생략).
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/21~7/27 | 문서 구조 대규모 개편 (Plugins 섹션 재편) |
| **W31** | 7/28~8/3 | _(공식 문서 미제공)_ |
| **W32** | 8/4~8/10 | **자체 호스팅 환경 공개 베타** 출시 |
| **W33** | 8/11~8/17 | Claude 텍스트 워터마크 도입 |
| **W34** | 8/18~8/24 | Settings 레퍼런스·예제 문서 추가 |
| **W35** | 8/25~8/31 | 과학자 지원 확대, iOS 시뮬레이터 데스크톱 지원 |
| **W36** | 9/1~9/7 | **Fable 5.1 + Mythos 5.1 출시**, 엔터프라이즈 보안 강화 |
| **W37** | 9/8~9/14 | Agent SDK 개선 (설정·예제·트러블슈팅 문서 추가) |

---

## W30 · 7월 21~27일 — 공식 문서 대규모 재편

### 📚 플러그인 문서 구조 전면 개편

기존에 평면적으로 나열되던 플러그인 관련 문서가 **체계적인 섹션 구조**로 재편됐어요.

**이전 구조:**
- `plugins`, `plugins-reference`, `discover-plugins`, `plugin-marketplaces`, `plugin-hints`, `plugin-relevance`

**새 구조 (`plugins/` 하위):**
```
plugins/
├── overview       (개요)
├── install        (설치 방법)
├── create         (직접 만들기)
├── components     (구성 요소)
├── dependencies   (의존성)
├── publish        (배포)
├── measure        (성과 측정)
├── cli-hints      (CLI 힌트)
├── create-marketplace  (마켓플레이스 만들기)
├── host-marketplace    (마켓플레이스 운영)
├── relevance      (관련성 설정)
├── org            (조직 관리)
├── troubleshooting (문제 해결)
├── loading        (로딩 방법)
├── manifest-reference  (매니페스트 레퍼런스)
├── marketplace-reference (마켓플레이스 레퍼런스)
└── cli-reference  (CLI 레퍼런스)
```

> 💡 **입문자 팁**: 플러그인 관련 공식 문서를 찾을 때는 이제 `code.claude.com/docs/en/plugins/` 경로를 기억해두세요.

### 🔗 기타 신규 문서
- **cross-session-messaging**: 세션 간 메시지 전달 기능 공식 문서화
- **github-actions-cloud-providers**: GitHub Actions + 클라우드 제공자 연동 가이드
- **claude-security**: Claude Security 제품 전용 문서 신설

---

## W32 · 8월 4~10일 — 자체 호스팅 환경 공개 베타

### 🏠 내 서버에서 Claude Code 실행

**자체 호스팅 환경(Self-hosted Environments)** 이 공개 베타로 출시됐어요. 자세한 내용은 [별도 문서](/advanced/self-hosted-environments)를 확인해 주세요.

**핵심 요약:**
- Claude Code 세션을 내 인프라에서 실행
- 내부망 서비스에 직접 연결 가능
- 금융·의료·정부 등 보안 규정이 엄격한 기업 대상

**신규 공식 문서 6종:**
- quickstart, deploy, configuration, testing, reference, identity

### 📱 데스크톱 iOS 시뮬레이터 지원

Mac 데스크톱 앱에서 **iOS 시뮬레이터**를 직접 제어하는 Computer Use 기능이 추가됐어요 (추정).

---

## W33 · 8월 11~17일 — Claude 텍스트 워터마크

### 🔏 AI가 생성한 텍스트 식별

Claude가 생성한 텍스트에 **비가시적 워터마크**를 삽입하는 기능이 도입됐어요.

> 🍱 **비유로 설명하면**: 종이 지폐에 자외선 램프로만 보이는 숨겨진 무늬가 있는 것처럼, 클로드가 쓴 글에도 눈에 보이지 않는 표시가 들어갑니다.

**특징:**
- 텍스트 읽기나 사용에 영향 없음
- AI 생성 콘텐츠 확인 용도
- 학문적 정직성, 저작권 관련 논의에 활용 가능

---

## W34 · 8월 18~24일 — 설정 문서 강화

### ⚙️ Settings 레퍼런스 & 예제 문서 추가

Claude Code 설정(`settings.json`)에 관한 공식 문서가 대폭 강화됐어요.

**신규 문서:**
- **settings-reference**: 모든 설정 옵션의 상세 레퍼런스
- **settings-example**: 실전 설정 예제 모음
- **managed-settings**: 관리자가 팀원 설정을 일괄 관리하는 방법

> 💡 **입문자 팁**: `settings.json`을 더 잘 활용하고 싶다면 settings-example 문서를 먼저 보는 게 빠릅니다.

---

## W35 · 8월 25~31일 — 과학 지원 & 인프라

### 🔬 과학자 지원 확대

Anthropic이 과학 연구를 위한 Claude 활용을 더욱 강화했어요.

### 🛠️ AWS Claude Apps Gateway

- **claude-apps-gateway-on-aws**: AWS에서 Claude Apps Gateway를 운영하는 공식 가이드 추가

---

## W36 · 9월 1~7일 — Fable 5.1 + Mythos 5.1 출시

### 🚀 새 최상위 모델 출시

Anthropic의 가장 강력한 모델 2개가 동시 출시됐어요.

> 자세한 내용은 [2026 Q3 모델 업데이트](/next/models-2026-q3) 문서를 확인하세요.

**핵심 수치:**
- Fable 5.1: 코딩·지식 업무 최전선, 과학적 추론 능력 포함
- Mythos 5.1: 심층 리서치·분석 특화
- 초기 AI 과학 기여 가능성 제시

### 🔒 엔터프라이즈 보안 강화

대규모 기업 고객을 위한 보안 정책이 강화됐어요 (추정 — 공식 발표 기반).

---

## W37 · 9월 8~14일 — Agent SDK 대폭 개선

### 🤖 Agent SDK 문서 3종 추가

Claude Code Agent SDK를 쓰는 개발자를 위한 공식 문서가 늘었어요.

| 신규 문서 | 내용 |
|---|---|
| [agent-sdk/configuration](https://code.claude.com/docs/en/agent-sdk/configuration) | SDK 세부 설정 옵션 |
| [agent-sdk/examples](https://code.claude.com/docs/en/agent-sdk/examples) | 실전 코드 예제 모음 |
| [agent-sdk/troubleshooting](https://code.claude.com/docs/en/agent-sdk/troubleshooting) | 오류 해결 가이드 |

> 💡 **개발자 팁**: Agent SDK를 처음 접한다면 `examples` 문서부터 보는 게 가장 빠릅니다.

---

## 다음에 올 것 (W38~, 2026년 9월~)

현재 마케팅 페이지 기준 최신 하이라이트 기능 (공식 발표):
- **Auto 모드 기본값 전환**: Pro·Max·Team 플랜에서 이제 Auto 모드가 기본 (Sep 17, 2026)
- **Projects 출시**: 관련 세션 그룹화 + 다중 에이전트 감독 (Desktop)
- **Claude Opus 5.5** (Sep 22), **Sonnet 5.5** (Sep 28) 출시

> 📌 Auto 모드 기본값 전환에 대한 자세한 내용은 [오토 모드 설정 가이드](/advanced/auto-mode-config)를 참고하세요.
