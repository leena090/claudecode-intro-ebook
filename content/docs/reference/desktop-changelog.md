---
title: "[공] 데스크톱 앱 전용 변경이력 — 버전별 업데이트 내역 확인하기"
description: "Claude Code 데스크톱 앱의 버전별 업데이트 내역을 확인하는 전용 페이지가 공식 문서에 추가됐어요"
tags: ["자동생성", "데스크톱", "변경이력", "업데이트", "changelog"]
category: "reference"
order: 8
lastUpdated: "2026-05-16"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 2026-05-16 기준, Anthropic 공식 문서(<a href="https://code.claude.com/docs/en/desktop-changelog">code.claude.com/docs/en/desktop-changelog</a>)에 데스크톱 앱 전용 변경이력 페이지가 신규 등재됐어요.
</div>

## 무슨 페이지가 새로 생겼나요?

Claude Code **데스크톱 앱** 전용 변경이력 페이지가 생겼어요.

지금까지는 Claude Code 변경이력이 CLI(터미널 버전)와 데스크톱 앱이 뒤섞인 하나의 페이지에서 관리됐는데, 이제 **데스크톱 앱만의 독립된 릴리즈 노트**를 따로 확인할 수 있어요.

> 🍎 **비유로 설명하면**: 예전엔 마트 세일 전단지 한 장에 식품관·의류관·가전관 할인 정보가 다 섞여 있었는데, 이제는 각 층마다 **전단지를 따로** 나눠줘서 내가 필요한 층 정보만 골라 볼 수 있게 된 거예요.

---

## CLI 변경이력 vs 데스크톱 변경이력

| 구분 | 주소 | 포함 내용 |
|---|---|---|
| **CLI (터미널) 변경이력** | [/changelog](https://code.claude.com/docs/en/changelog) | npm 버전 업데이트, 터미널 명령어 변경, API 변경 등 |
| **데스크톱 앱 변경이력** | [/desktop-changelog](https://code.claude.com/docs/en/desktop-changelog) | 데스크톱 앱 버전별 UI 변경, 패널 기능, 드래그앤드롭 등 |
| **주간 업데이트 (whats-new)** | [/whats-new](https://code.claude.com/docs/en/whats-new/index) | 새 기능 위주 주간 요약, 눈에 띄는 변경 중심 |

<div class="note-circle">
○ 터미널에서 <code>claude</code> 명령어만 쓰신다면 CLI 변경이력을,
○ 데스크톱 앱(Claude Code for Desktop)을 자주 쓰신다면 데스크톱 변경이력을 즐겨찾기 해두면 편해요.
</div>

---

## 왜 따로 분리됐나요?

데스크톱 앱은 **앱 스토어처럼 별도 버전 번호**로 배포돼요. 예를 들어 `v1.2.3` 같은 식으로요.

터미널용 Claude Code는 `npm install` 로 업데이트하는 반면, 데스크톱 앱은 **자동 업데이트** 또는 **직접 다운로드**로 새 버전이 설치돼요.

업데이트 방식이 다르니 변경이력도 따로 관리하는 게 자연스럽죠.

> 🍎 **비유로 설명하면**: 스마트폰에서 카카오톡 앱을 업데이트하면 "v10.5.1 — 채팅방 UI 개선"같은 버전별 노트가 뜨는 것처럼, 데스크톱 앱도 **설치 버전별 변경이력**을 이제 공식 문서에서 확인할 수 있어요.

---

## 어떻게 활용하면 좋아요?

### 데스크톱 앱이 갑자기 달라 보일 때

업데이트 후 "어? 이 버튼이 사라졌네?" 또는 "이 기능이 왜 이렇게 바뀌었지?"라고 생각되면, 데스크톱 변경이력 페이지에서 해당 버전의 노트를 확인해보세요.

### 업데이트 전 미리 확인하고 싶을 때

자동 업데이트가 싫거나, 업데이트 전에 뭐가 바뀌는지 확인하고 싶다면 이 페이지를 먼저 열어보면 돼요.

### 팀원에게 변경 사항 공유할 때

"이번 버전에 이런 기능이 생겼어요"라고 팀 채팅에 링크를 공유하면, 팀원들이 새 기능을 빠르게 파악할 수 있어요.

---

## 데스크톱 앱이 뭔가요? (처음 듣는 분들을 위해)

Claude Code는 크게 두 가지 방식으로 쓸 수 있어요:

| 방식 | 설명 | 대상 |
|---|---|---|
| **터미널 (CLI)** | 검은 창(터미널)에서 `claude` 명령어로 사용 | 개발자, 터미널 익숙한 분 |
| **데스크톱 앱** | 마치 카카오톡처럼 별도 앱으로 설치해서 사용 | 터미널 어색한 분, 시각적 UI 선호 |

데스크톱 앱은 **멀티세션 사이드바, 내장 터미널, HTML 미리보기, PR 모니터링** 등 시각적 기능이 많아요.

→ 데스크톱 앱 자세한 소개: [데스크톱 앱 대변신](/docs/advanced/desktop-redesign)

---

## 공식 페이지 바로가기

| 페이지 | 링크 |
|---|---|
| 데스크톱 변경이력 | [code.claude.com/docs/en/desktop-changelog](https://code.claude.com/docs/en/desktop-changelog) |
| CLI 변경이력 | [code.claude.com/docs/en/changelog](https://code.claude.com/docs/en/changelog) |
| 주간 업데이트 | [code.claude.com/docs/en/whats-new](https://code.claude.com/docs/en/whats-new/index) |

<div class="note-circle">
○ 이 문서는 공식 문서 등재 사실만을 안내해요. 데스크톱 앱 변경이력의 세부 내용은 위 공식 페이지에서 직접 확인해주세요.
</div>
