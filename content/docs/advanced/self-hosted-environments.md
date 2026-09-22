---
title: "[공] 자가 호스팅 환경 (Self-Hosted Environments)"
description: "회사 내부 서버에서 Claude Code 클라우드 세션을 실행하는 방법. 내부 네트워크와 서비스에 직접 접근하면서 보안을 유지해요 (Team/Enterprise 플랜 Public Beta)"
tags: ["자동생성", "셀프호스팅", "클라우드세션", "보안", "Team", "Enterprise"]
category: "advanced"
order: 27
lastUpdated: "2026-09-22"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/self-hosted-environments-quickstart">code.claude.com/docs/en/self-hosted-environments-quickstart</a><br />
★ <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 (Aug 3–7, 2026)</a> 공식 발표 기준
</div>

## 자가 호스팅 환경이란?

**자가 호스팅 환경(Self-Hosted Environments)**은 Claude Code 클라우드 세션을 **여러분의 회사 서버에서 실행**하는 기능이에요.

비유하자면 이렇게 생각해보세요:

> 일반 클라우드 세션은 **카페 와이파이**에서 일하는 것처럼, 편하지만 사내 시스템에 직접 연결이 안 돼요.
> 
> 자가 호스팅 환경은 **회사 사무실 내부 네트워크**에서 일하는 것처럼, 내부 데이터베이스, 내부 API, 내부 서비스에 직접 접근할 수 있어요.

---

## 어떤 경우에 필요한가요?

| 상황 | 자가 호스팅이 도움되는 이유 |
|---|---|
| 내부 API 서버에 접근 필요 | 외부에서는 방화벽으로 막혀 있음 |
| 데이터 보안 정책이 엄격한 기업 | 코드/데이터가 외부 서버를 거치지 않음 |
| 내부 데이터베이스 직접 쿼리 | VPN 없이 내부 망에서 직접 연결 |
| 온프레미스 인프라 사용 중 | 기존 인프라 그대로 활용 가능 |

---

## 지원 조건

- **플랜**: Team 또는 Enterprise (Public Beta)
- **필요 권한**: 조직 Owner가 먼저 활성화해야 함
- **운영 환경**: 머신 또는 컨테이너 (macOS, Linux)

---

## 설정 방법

### 1단계: 관리자 설정에서 활성화

조직 Owner가 [admin settings → Cloud Environments](https://claude.ai/admin-settings/cloud-environments)에서 **Allow self-hosted environments**를 켜야 해요.

### 2단계: 러너(Runner) 설정

내부 서버에서 아래 명령어를 실행하면 안내에 따라 환경을 만들고 러너를 시작해요.

```bash
claude self-hosted-runner setup
```

설정이 완료되면 admin settings에서 해당 환경이 **Healthy** 상태로 표시돼요.

### 3단계: 세션 시작

이후에는 `claude.ai`, 모바일 앱, Desktop 앱, 또는 `claude --cloud`에서 세션을 시작할 때 자가 호스팅 환경을 선택할 수 있어요.

```bash
# 클라우드 세션 시작 (환경 선택 옵션 표시)
claude --cloud
```

---

## 어떻게 작동하나요?

```
사용자 (claude.ai / 앱 / --cloud)
         ↓
   환경 선택 화면
         ↓
회사 내부 서버 (Self-Hosted Runner)
         ↓
  내부 API · DB · 서비스 직접 접근
```

1. 사용자가 자가 호스팅 환경을 선택해서 세션 시작
2. 세션이 **회사 내부 네트워크 안에서** 실행
3. 내부 서비스에 직접 접근 가능
4. 코드·데이터는 회사 인프라 안에서만 처리

---

## 주의사항

- 러너가 실행 중인 서버가 꺼지면 해당 환경의 세션이 중단돼요.
- Public Beta이므로 기능이 변경될 수 있어요.
- 세션 설정(프로젝트 설정, hooks, MCP 서버 등)은 사용자 환경에서 가져와요.

---

## 자가 호스팅 vs 일반 클라우드 세션

| 항목 | 일반 클라우드 | 자가 호스팅 |
|---|---|---|
| 내부 API 접근 | ❌ (VPN 필요) | ✅ 직접 접근 |
| 데이터 보안 | Anthropic 클라우드 처리 | 내부 인프라에서만 처리 |
| 설정 복잡도 | 즉시 사용 가능 | 관리자 설정 필요 |
| 지원 플랜 | Pro · Max · Team · Enterprise | Team · Enterprise만 |

---

## 관련 문서

- [공식 Quickstart 가이드](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [W30~W37 업데이트 요약](/docs/next/whats-new-w30-w37)
- [Auto 모드 설정](/docs/advanced/auto-mode-config)
