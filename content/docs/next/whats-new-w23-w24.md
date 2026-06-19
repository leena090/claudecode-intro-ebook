---
title: "[공] 주간 업데이트: 2026년 6월 1일 ~ 12일 (Week 23–24)"
description: "Bedrock·Vertex·Foundry에서도 Auto Mode 사용 가능, /cd 명령어로 작업 디렉토리 이동, 서브에이전트가 서브에이전트 생성, Safe Mode 디버깅"
tags: ["업데이트", "2026", "week23", "week24", "auto-mode", "bedrock", "cd명령어", "서브에이전트", "safe-mode", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-19"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 23 (2026-06-01 ~ 2026-06-05) + Week 24 (2026-06-08 ~ 2026-06-12) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w23" target="_blank">공식 문서 W23</a> | <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서 W24</a>
</div>

## 이번 2주 핵심 변경 (7개)

---

### 1️⃣ Auto Mode — 이제 Bedrock·Vertex·Foundry에서도! 🌐

**Auto Mode(자동 모드)** 가 이제 Amazon Bedrock, Google Vertex AI, Microsoft Foundry(파운드리)에서도 사용 가능해졌어요.

> 🍱 **비유**: 스마트홈 자동화(Auto Mode)가 기존엔 국내 통신사 앱에서만 됐는데, 이제 해외 앱에서도 그대로 쓸 수 있게 된 것과 같아요.

**Auto Mode란?**

Auto Mode는 Claude Code가 파일 수정·명령 실행 전에 매번 허락을 구하지 않고, **배경 안전 분류기(classifier)가 대신 판단해서** 자동으로 실행하는 모드예요.

| 모드 | 설명 |
|------|------|
| 기본 모드 | 파일 수정·명령 실행마다 허락 요청 |
| Auto Mode | 안전한 작업은 자동 진행, 위험할 수 있는 건 멈추고 물어봄 |

이전엔 Anthropic 직접 API에서만 가능했는데, 이제 기업 환경 3곳이 추가됐어요.

```bash
# Auto Mode 켜기 (Bedrock에서도 동일하게)
claude --auto-mode

# 또는 설정 파일에서 활성화
# settings.json: "permission_mode": "auto"
```

<div class="note-circle">
○ Amazon Bedrock, Google Vertex AI, Microsoft Foundry 사용자라면 이번 업데이트로 Auto Mode를 쓸 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/auto-mode-config" target="_blank">code.claude.com/docs/en/auto-mode-config</a>
</div>

---

### 2️⃣ acceptEdits 모드 — 코드 실행 가능한 파일 저장 전 확인 💾

**`acceptEdits` 모드**에서 스크립트·실행 파일 등 **코드가 실행될 수 있는 파일**을 저장하기 전에 Claude가 먼저 확인을 받는 기능이 추가됐어요.

> 🍱 **비유**: 음식 배달 앱에서 "주문 확인" 버튼 누르기 전에 "이 요리에 땅콩이 들어가는데 괜찮으세요?"라고 한 번 더 물어보는 것과 같아요.

| 파일 종류 | 동작 |
|----------|------|
| `.md`, `.txt` 등 일반 파일 | 그냥 저장 |
| `.py`, `.sh`, `.js` 등 실행 가능 파일 | 저장 전 한 번 더 확인 |

실수로 위험한 스크립트가 즉시 적용되는 것을 막아줘요.

---

### 3️⃣ /plugin list — 설치된 플러그인 목록 한눈에 보기 🧩

```bash
/plugin list
```

현재 프로젝트에 설치된 플러그인 전체를 보여줘요. 어떤 플러그인이 활성화되어 있는지 빠르게 확인할 수 있어요.

> 🍱 **비유**: 스마트폰 설정 → 앱 목록처럼, 내 Claude Code에 뭐가 깔려 있는지 한눈에 보는 기능이에요.

---

### 4️⃣ 관리형 배포 — 승인된 버전 범위 요구 기능 🏢

기업 IT 담당자용 기능이에요. **특정 버전 범위의 Claude Code만 쓸 수 있도록** 강제하는 설정이 추가됐어요.

> 🍱 **비유**: 회사에서 "공식 지원하는 버전의 소프트웨어만 써야 해요"라고 규정하는 것과 같아요.

팀 전체가 항상 최신 안정 버전을 쓰도록 관리할 때 유용해요.

---

### 5️⃣ /cd — 세션 중에 작업 디렉토리 이동하기 📁

```bash
/cd /path/to/new/directory
```

이제 Claude Code 세션을 새로 시작하지 않고도 **작업 디렉토리(폴더)를 바꿀 수** 있어요!

> 🍱 **비유**: 내비게이션을 껐다가 다시 켤 필요 없이, 달리는 중에 "아, 목적지를 바꾸고 싶어"라고 하면 바로 경로가 바뀌는 것과 같아요.

**실제 쓸 때 예시:**

```bash
# 지금까지 백엔드 작업하다가 프론트엔드로 이동
/cd ../frontend

# 절대 경로로도 가능
/cd /home/user/myproject/src
```

이전엔 `/cd` 없이 다른 폴더로 가려면 세션을 종료하고 새로 시작해야 했어요.

---

### 6️⃣ 서브에이전트가 서브에이전트를 만든다! 🤖→🤖

**서브에이전트(subagent)** 가 이제 자신만의 **서브에이전트를 다시 만들어** 작업을 더 잘게 나눌 수 있어요.

> 🍱 **비유**: 팀장이 팀원에게 일을 맡겼더니, 그 팀원이 더 큰 일임을 알고 **알아서 아르바이트생을 뽑아서** 처리한 뒤 결과만 팀장에게 보고하는 것과 같아요.

이 기능은 **Dynamic Workflows(다이나믹 워크플로)** 와 함께 쓸 때 특히 강력해요. 복잡한 작업을 Claude가 단계별로 재귀적으로 나눠 처리할 수 있게 됐어요.

```
내 요청 → Claude(메인)
             ↓
        서브에이전트 A → 서브에이전트 A-1
                      → 서브에이전트 A-2
        서브에이전트 B → 서브에이전트 B-1
```

<div class="note-circle">
○ 서브에이전트 심화 설명 → <a href="https://code.claude.com/docs/en/sub-agents" target="_blank">공식 문서: 서브에이전트</a>
</div>

---

### 7️⃣ Safe Mode — 설정 충돌 시 안전하게 재시작 🛡️

**Safe Mode(안전 모드)** 가 추가됐어요. CLAUDE.md, settings.json, 훅(hook), 플러그인 등 설정 파일이 충돌하거나 오류가 있을 때, Claude Code가 먹통이 되지 않고 **기본 설정으로 안전하게 시작**해요.

> 🍱 **비유**: 컴퓨터 바이오스(BIOS) 안전 부팅처럼, 문제가 생기면 일단 최소 설정으로 켜지는 거예요. 그 다음에 원인을 찾아 고칠 수 있어요.

```bash
# Safe Mode로 시작
claude --safe-mode

# 그 다음 /doctor 로 문제 진단
/doctor
```

| 상황 | 대처법 |
|------|--------|
| Claude Code가 시작 안 됨 | `claude --safe-mode` 로 재시작 |
| 특정 훅이 오류를 내고 있음 | Safe Mode → `/hooks` 로 어떤 훅이 문제인지 확인 |
| 플러그인 충돌 | Safe Mode → `/plugin list` 로 범인 찾기 |

<div class="note-circle">
○ 설정 디버깅 가이드 → <a href="https://code.claude.com/docs/en/debug-your-config" target="_blank">공식 문서: 설정 디버깅</a>
</div>

---

## 한 눈에 보는 정리표

| 기능 | 분류 | 누구에게 유용? |
|------|------|----------------|
| Auto Mode on Bedrock·Vertex·Foundry | 기업용 | AWS·GCP·Azure 환경 개발자 |
| acceptEdits 확인 | 안전 | 스크립트 실수 방지 원하는 분 |
| /plugin list | 편의 | 플러그인 많이 쓰는 분 |
| 관리형 버전 범위 | 기업용 | 팀 IT 담당자 |
| /cd 디렉토리 이동 | 편의 | **모든 사용자** ⭐ |
| 서브에이전트→서브에이전트 | 고급 | 대규모 자동화 |
| Safe Mode | 디버깅 | 설정 문제 겪는 분 |

---

📅 다음 업데이트 내역 → 계속 업데이트 중이에요. `lastUpdated` 날짜를 확인하세요.
