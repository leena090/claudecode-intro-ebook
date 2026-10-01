---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7~9월)"
description: "Self-hosted environments 공개 베타, Artifacts 대시보드 기능 확장, Auto mode 기본값 전환, Fable 5.1 출시까지 — 2026년 7~9월 8주치 업데이트 정리"
tags: ["자동생성", "주간업데이트", "신기능", "self-hosted", "auto-mode", "Fable5.1", "아티팩트"]
category: "next"
order: 19
lastUpdated: "2026-10-01"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용과 마케팅 페이지 공식 발표를 기반으로 한국어로 정리한 것입니다.<br />
★ 일부 주차별 세부 내용은 공식 발표 기준이며, 실제 What's New 페이지와 다를 수 있어요. 각 링크로 원문 확인을 권장합니다.
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | 아티팩트 기능 확장, 스크린 리더 개선 |
| **W31** | 7/27~7/31 | 세션 관리 개선, MCP 커넥터 업데이트 |
| **W32** | 8/3~8/7 | **Self-hosted environments 공개 베타** |
| **W33** | 8/10~8/14 | **Artifacts 마케팅 하이라이트**, Claude 텍스트 워터마크 |
| **W34** | 8/17~8/21 | Desktop 안정성 개선, 모바일 지원 강화 |
| **W35** | 8/24~8/28 | 하드웨어 표준 프리뷰, 과학 기능 확장 |
| **W36** | 8/31~9/4 | 정렬 및 보안 개선, **Fable 5.1 + Mythos 5.1** |
| **W37** | 9/7~9/11 | **Auto mode 기본값 전환** 준비, 보안 업데이트 |

> ⚠️ **참고**: 각 주차 세부 내용은 공식 What's New 페이지와 마케팅 발표 기준으로 정리한 것입니다. 정확한 날짜·기능은 아래 링크로 확인해 주세요.

---

## W32 · 8월 3~7일 — Self-hosted environments 공개 베타 ⭐

### 🏢 내 서버에서 Claude Code 실행하기

2026년 8월 7일, **Self-hosted environments**가 공개 베타로 출시됐어요.

> 🍱 **비유로 설명하면**: 지금까지는 Claude Code를 쓰려면 항상 "Anthropic 서버"라는 회사 식당에 가야 했다면, 이제는 **우리 회사 구내식당에서 직접 클로드를 불러서 일을 시킬 수** 있게 된 거예요.

**주요 특징:**
- 회사 내부 네트워크에서 Claude Code 세션 실행
- 내부 API·데이터베이스에 직접 접근 가능
- 인터넷 없는 에어갭(air-gap) 환경에서도 실행 가능

<div class="note-star">
★ 현재 공개 베타 단계 (Aug 7, 2026 기준). 기업·Team 플랜 대상.<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/sandbox-environments">code.claude.com/docs/en/sandbox-environments</a>
</div>

---

## W33 · 8월 10~14일 — Artifacts 라이브 미리보기

### 🖼️ 작업 중인 결과물을 실시간으로 공유

2026년 8월 6일~14일, **Artifacts** 기능이 마케팅 주요 기능으로 격상됐어요.

> "세션 컨텍스트로 만든 라이브·인터랙티브 아티팩트로 진행 중인 작업을 미리보고 팀과 공유하세요." — Anthropic 공식 설명

> 🍱 **비유로 설명하면**: 클로드가 만들어주는 리포트·차트·대시보드를 "스크린샷"으로 보내는 게 아니라, **살아있는 웹 페이지 링크**로 팀에 공유할 수 있어요. 팀원이 링크를 열면 최신 데이터가 바로 보여요.

### Claude 텍스트 워터마크 (Aug 14)

AI가 생성한 텍스트에 눈에 보이지 않는 **워터마크**를 넣는 기술을 Anthropic이 블로그에서 공개했어요.

- 텍스트에 보이지 않지만 검출 가능한 서명 삽입
- AI 생성 콘텐츠 구분에 활용 (공식 발표 기준 — 추정 포함)

---

## W36 · 8월 31일~9월 4일 — Fable 5.1 + Mythos 5.1 출시

### 🚀 최상위 모델 라인업 업그레이드

2026년 9월 1일, **Fable 5.1**과 **Mythos 5.1**이 동시 출시됐어요.

| 모델 | 특징 |
|---|---|
| **Fable 5.1** | 코딩·소프트웨어 개발 최상위 성능 |
| **Mythos 5.1** | 지식·연구·과학 탐구 특화 |

> 🍱 **비유로 설명하면**: 기존 Fable 5/Mythos 5가 "최신 스마트폰"이었다면, .1 버전은 **반년 만에 나온 소프트웨어 업그레이드 버전**이에요 — 더 빠르고, 버그가 적어지고, 새 기능이 추가된 거예요.

---

## W37 · 9월 7~11일 — Auto mode 기본값 준비

### ⚙️ 기본 동작 방식 변경 예고

이 주차에 **Auto mode 기본값 전환**에 대한 준비와 발표가 이뤄졌어요.

공식 전환 발표: **2026년 9월 17일** (W38 시점)

> 🍱 **비유로 설명하면**: 새 직원이 처음엔 모든 걸 상사에게 물어보다가, 충분히 신뢰를 쌓으면 **"웬만한 건 알아서 해. 중요한 결정만 나한테 가져와"** 모드로 전환된 것과 같아요.

**변경 내용 미리보기:**
- Pro·Max·Team 플랜에서 기본값이 `auto` 모드로 전환
- 안전 분류기(safety classifier)가 위험 명령을 자동 차단
- 기존 설정 사용자는 영향 없음

---

## 전체 기간 기능 변화 요약

| 기능 | 날짜 | 중요도 |
|---|---|---|
| **Self-hosted environments** | Aug 7 | ⭐⭐⭐ 기업 필수 |
| **Fable 5.1 + Mythos 5.1** | Sep 1 | ⭐⭐⭐ 최상위 모델 |
| **Artifacts 기능 강화** | Aug 6~14 | ⭐⭐ 팀 협업 |
| **텍스트 워터마크** | Aug 14 | ⭐ AI 콘텐츠 식별 |
| **Auto mode 기본값 준비** | Sep 7~17 | ⭐⭐⭐ 모든 사용자 영향 |

---

<div class="note-star">
★ W30: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a><br />
★ W31: <a href="https://code.claude.com/docs/en/whats-new/2026-w31">code.claude.com/docs/en/whats-new/2026-w31</a><br />
★ W32: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a><br />
★ W33: <a href="https://code.claude.com/docs/en/whats-new/2026-w33">code.claude.com/docs/en/whats-new/2026-w33</a><br />
★ W34: <a href="https://code.claude.com/docs/en/whats-new/2026-w34">code.claude.com/docs/en/whats-new/2026-w34</a><br />
★ W35: <a href="https://code.claude.com/docs/en/whats-new/2026-w35">code.claude.com/docs/en/whats-new/2026-w35</a><br />
★ W36: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">code.claude.com/docs/en/whats-new/2026-w36</a><br />
★ W37: <a href="https://code.claude.com/docs/en/whats-new/2026-w37">code.claude.com/docs/en/whats-new/2026-w37</a>
</div>
