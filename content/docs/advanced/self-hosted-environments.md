---
title: "[공] 셀프 호스티드 환경 — 내 서버에서 클라우드 세션 실행하기"
description: "Team·Enterprise 플랜에서 내 조직 인프라에 Claude Code 러너를 설치해 클라우드 세션을 사내 네트워크 안에서 실행하는 기능 (공개 베타)"
tags: ["고급", "셀프호스티드", "self-hosted-environments", "Enterprise", "클라우드세션", "내부망"]
category: "advanced"
order: 13
lastUpdated: "2026-08-10"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>플랜</strong>: Team·Enterprise 전용 (공개 베타)<br />
★ <strong>출시일</strong>: 2026년 8월 7일 (W32) · v2.1.224 이상 필요
</div>

## 이게 뭔가요?

**셀프 호스티드 환경(Self-hosted environments)**은 **내 조직 서버나 컨테이너를 Claude Code 클라우드 세션의 실행 공간**으로 쓰는 기능이에요. Team·Enterprise 플랜에서 공개 베타로 사용 가능해요.

> 🍱 **비유로 설명하면**: 보통 클로드 웹/모바일 세션은 Anthropic의 구름(☁️) 어딘가에서 돌아요. 셀프 호스티드 환경은 "그 구름 서버 대신 **우리 회사 건물 서버실**에서 돌게 해줘"라는 거예요. 그러면 회사 내부 DB나 사내 API에 클로드 세션이 직접 접근할 수 있어요.

---

## 왜 필요한가요?

| 상황 | 기존 (Anthropic 클라우드) | 셀프 호스티드 |
|---|---|---|
| **사내 DB 접근** | 인터넷 망 거쳐야 해서 불가·불편 | ✅ 직접 접근 가능 |
| **내부 API 연동** | VPN·방화벽으로 막힐 수 있음 | ✅ 사내 네트워크 직접 사용 |
| **보안 규정 준수** | 데이터가 외부 클라우드에 위치 | ✅ 데이터가 사내 인프라에 위치 |
| **제어 환경** | Anthropic 인프라 사용 | ✅ 내 인프라·설정 사용 가능 |

---

## 어떻게 작동하나요?

```
claude.ai / 모바일 앱 / 데스크톱 앱 / claude --cloud
         ↓
    [환경 선택 화면]
         ↓
  ┌─────────────────────┐
  │  내 조직 서버/컨테이너  │ ← 러너(Runner)가 여기 설치됨
  │  "linux-dev" 환경    │
  │  "macos-prod" 환경   │
  └─────────────────────┘
         ↓
   사내 DB·API에 직접 접근
```

사용자가 세션을 시작할 때 **어느 환경에서 실행할지 선택**할 수 있어요. 내 조직이 등록한 환경을 고르면 해당 서버에서 세션이 돌아요.

---

## 설정 방법

### 사전 조건

- **Team 또는 Enterprise 플랜** 필요
- Owner 또는 Admin 권한 필요
- 러너를 설치할 서버 또는 컨테이너 (macOS·Linux)

### 1단계: 어드민 설정에서 기능 활성화

[admin settings > cloud environments](https://claude.ai/admin-settings/cloud-environments)에서 **Allow self-hosted environments**를 켜요.

### 2단계: 러너 설치 및 환경 등록

내 서버나 컨테이너에서 아래 명령어를 실행해요:

```bash
# 가이드 포함된 셀프 호스티드 러너 설치 및 설정
claude self-hosted-runner setup
```

이 명령어가 안내를 따라 환경을 생성하고 러너를 시작시켜줘요.

### 3단계: 등록 확인

어드민 설정 화면에서 내가 만든 환경이 **"Healthy"** 상태인지 확인해요.

---

## 사용자 관점에서의 경험

러너가 설치된 후, 사용자가 새 세션을 시작할 때:

1. claude.ai, 모바일/데스크톱 앱, 또는 `claude --cloud`로 세션 시작
2. 환경 선택 화면에서 **내 조직의 환경 선택** (예: "linux-dev", "macos-prod")
3. 해당 서버에서 세션 실행 → 사내 네트워크 자원에 직접 접근 가능

---

## 주의사항

- **Team·Enterprise 전용** — Pro·Max 개인 플랜에서는 사용 불가
- **공개 베타** — 기능이나 설정이 변경될 수 있음
- 러너가 설치된 서버가 꺼지거나 연결이 끊기면 해당 환경은 사용 불가
- 사내 인프라를 사용하므로 **IT 보안팀과 협의**가 필요할 수 있음

---

## 자주 묻는 질문

**Q. 셀프 호스티드 환경에서도 claude.ai의 Claude Code 기능(Skills, Plugins 등)이 다 되나요?**
A. 네, 대부분 기능은 동일하게 작동해요. 단, 환경 구성이나 방화벽에 따라 일부 기능이 제한될 수 있어요 (공식 추정).

**Q. 러너를 여러 개 설치할 수 있나요?**
A. 네. 각각 다른 이름의 환경으로 등록할 수 있어요. 예: "linux-dev", "linux-prod", "macos-ci" 등.

**Q. 일반 개인 플랜도 쓸 수 있나요?**
A. 아니요. Team 또는 Enterprise 플랜이 필요해요.

---

## 관련 기능

- [Cloud environments (공식)](https://code.claude.com/docs/en/cloud-environments) — 클라우드 환경 전체 설명
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — 웹에서 Claude Code 사용하기
- [W32 릴리즈 노트](https://code.claude.com/docs/en/whats-new/2026-w32) — 셀프 호스티드 환경 출시 주차
