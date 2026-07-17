---
title: "[공] 주간 업데이트: 2026년 7월 6일 ~ 10일 (Week 28)"
description: "데스크톱 앱 내장 브라우저로 외부 사이트 탐색, /doctor로 설정 전체 검진, Auto 모드 보안 강화"
tags: ["업데이트", "2026", "week28", "desktop", "브라우저", "doctor", "auto-mode", "agent-view", "자동생성"]
category: "next"
order: 18
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 28 (2026-07-06 ~ 2026-07-10) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w28" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w28</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ 데스크톱 앱 내장 브라우저 — 외부 사이트 탐색 가능 🌐

Claude Code 데스크톱 앱 안에서 **외부 웹사이트를 바로 탐색**할 수 있게 됐어요.

> 🍱 **비유**: 지금까지는 Claude Code 앱이 "창문 없는 방"이었어요. 바깥 세상(웹)이 궁금하면 다른 앱(Chrome)을 열어야 했죠. 이제 방에 창문이 생겼어요. 방 안에서 바깥을 볼 수 있어요.

**무엇이 달라지나요?**
- Claude Code가 코드를 짜면서 관련 라이브러리 문서를 앱 안에서 바로 확인 가능
- 외부 API 문서, 에러 해결책 검색 등을 Claude가 직접 탐색
- 별도 브라우저 전환 없이 작업 흐름 유지

**활성화 방법:**
- 데스크톱 앱에서 사이드바 브라우저 패널 열기
- 또는 Claude에게 "외부 사이트 확인해줘" 요청

<div class="note-circle">
○ Claude Code 데스크톱 앱 전용 기능이에요 (CLI·웹 미지원)<br />
○ 네트워크 정책에 따라 일부 사이트는 차단될 수 있어요
</div>

---

### 2️⃣ `/doctor` — 설정 전체 검진 명령어 🩺

Claude Code가 이상하게 작동할 때 원인을 찾기 어려웠죠. 이제 `/doctor`를 입력하면 **전체 설정을 자동으로 점검**해줘요.

```bash
/doctor
```

> 🍱 **비유**: 자동차가 이상한 소리를 낼 때 카센터에 가서 전체 점검을 받는 것과 같아요. 정비사(Doctor)가 각 부품을 하나씩 체크해서 문제가 어디에 있는지 알려줘요.

**점검하는 항목:**

| 항목 | 설명 |
|---|---|
| 로그인 상태 | Claude API 인증이 유효한지 |
| 모델 설정 | 현재 선택된 모델이 접근 가능한지 |
| MCP 서버 | 연결된 MCP 서버들이 정상 작동하는지 |
| 훅(Hooks) | 설정된 훅이 문법 오류 없이 동작하는지 |
| CLAUDE.md | 프로젝트 지침 파일이 올바르게 로드됐는지 |
| 플러그인 | 설치된 플러그인 충돌 여부 |
| 네트워크 | API 서버 연결 상태 |

**문제가 발견되면:**
- 각 문제마다 원인과 해결 방법을 한글로 안내해줘요
- 링크로 관련 문서도 연결돼요

<div class="note-circle">
○ 안전 모드(<code>--safe-mode</code>)와 함께 쓰면 더 정확하게 진단할 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/troubleshooting" target="_blank">code.claude.com/docs/en/troubleshooting</a>
</div>

---

### 3️⃣ Auto 모드 트랜스크립트 보호 + Agent View 업그레이드 🛡️

**Auto 모드**와 **Agent View** 두 가지가 함께 강화됐어요.

**Auto 모드 트랜스크립트 보호:**

> 🍱 **비유**: 자동으로 달리는 로봇(Auto 모드)이 일한 기록(트랜스크립트)을 외부에서 함부로 읽거나 조작하지 못하도록 금고에 넣어두는 것과 같아요.

- Auto 모드로 실행된 세션의 대화 기록을 다른 세션에서 접근 못 하게 보호
- 크로스 세션 공격(다른 세션이 몰래 정보 훔치기) 방어 강화

**Agent View 업그레이드:**

| 개선 사항 | 설명 |
|---|---|
| 필터링 기능 | 실행 중/완료/대기 중 세션별 필터 |
| 일괄 작업 | 여러 세션 동시에 중지 또는 재시작 |
| 상태 표시 | 각 세션의 진행률 퍼센트 표시 |

<div class="note-circle">
○ Agent View: <code>/agents</code> 명령어로 접근<br />
○ Auto 모드 보호 기능은 자동 적용돼요 — 별도 설정 불필요
</div>
