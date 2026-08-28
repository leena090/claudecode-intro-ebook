---
title: "[공] 자체 호스팅 환경 — 회사 인프라에서 클라우드 세션 실행"
description: "조직의 자체 서버·컨테이너에서 Claude Code 클라우드 세션을 실행하는 Self-Hosted Environments (Team/Enterprise 공개 베타)"
tags: ["자동생성", "자체호스팅", "enterprise", "self-hosted", "runner", "클라우드세션"]
category: "advanced"
order: 28
lastUpdated: "2026-08-28"
---

<div class="note-star">
★ <strong>Team · Enterprise 플랜</strong> 공개 베타 (Public Beta)<br />
★ <strong>Claude Code v2.1.224</strong> 이상<br />
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ 2026년 8월 3~7일(w32) 출시 [공]
</div>

## 자체 호스팅 환경이란?

**Claude Code 클라우드 세션을, Anthropic 서버가 아닌 우리 회사의 서버나 컨테이너에서 실행하는 기능**입니다.

> 🏭 **비유로 설명하면**: 일반 클라우드 세션이 "공유 사무실(코워킹 스페이스)"에서 일하는 것이라면, 자체 호스팅 환경은 "우리 회사 사무실에서 일하는 것"입니다. 회사 내부 시스템(내부망, DB, 보안 서버)에 접근하면서도, claude.ai나 모바일 앱에서 세션을 시작할 수 있습니다.

---

## 왜 필요한가요?

| 일반 클라우드 세션 | 자체 호스팅 환경 |
|-----------------|----------------|
| Anthropic 서버에서 실행 | **우리 조직 인프라에서 실행** |
| 내부망 접근 불가 | **내부 서비스 접근 가능** |
| 데이터가 외부를 거침 | **데이터가 사내 인프라 내에서 처리** |
| 별도 설정 불필요 | 초기 설정 필요 |

---

## 누가 쓸 수 있나요?

- **Team 플랜** 또는 **Enterprise 플랜** 필요
- 조직 **Owner(오너)** 권한으로 관리자 설정 활성화 필요
- v2.1.224 이상

---

## 설정 방법 (Owner 계정으로)

### 1단계: 관리자 설정 활성화

[claude.ai/admin-settings/cloud-environments](https://claude.ai/admin-settings/cloud-environments)에서 **"Allow self-hosted environments"** 활성화

### 2단계: 러너(runner) 설치 및 시작

서버 또는 컨테이너에서 가이드 설치 진행:

```bash
claude self-hosted-runner setup
```

대화형 설치 마법사가 환경 생성부터 러너 시작까지 안내합니다.

### 3단계: 상태 확인

관리자 설정 페이지에서 **"Healthy"** 상태 확인

---

## 팀원이 사용하는 방법

설치 후 팀원들이 세션을 시작할 때 클라우드 환경 선택 화면에서 자체 호스팅 환경을 고를 수 있습니다:

- claude.ai에서 세션 시작
- Claude 모바일 앱에서 세션 시작
- Claude 데스크톱 앱에서 세션 시작
- `claude --cloud` 명령어

---

## 고급 설정 옵션 (w34 추가)

### 드레인 지연 설정

서버 종료 시 연결된 세션을 일정 시간 유지:

```bash
claude self-hosted-runner --defer-shutdown-max-min 10
```

### 이그레스 프록시 인증

외부 연결에 프록시 인증이 필요한 경우:

```bash
claude self-hosted-runner --proxy-authorization-command "스크립트 경로"
# 또는
claude self-hosted-runner --proxy-authorization-file "파일 경로"
```

---

## 관련 공식 문서

| 문서 | 내용 |
|------|------|
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [Deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 배포 상세 |
| [Configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 설정 옵션 |
| [Testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트 방법 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | 전체 레퍼런스 |
| [Identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 인증/ID 관리 |

---

## 정리

- **Team/Enterprise 플랜** 전용 기능 (공개 베타)
- 클라우드 세션을 조직 인프라에서 실행 → 내부망 접근 가능
- Owner가 관리자 설정 활성화 후 `claude self-hosted-runner setup`으로 시작
- claude.ai, 모바일, 데스크톱 앱, `claude --cloud` 모두에서 선택 가능
- v2.1.224 이상 필요

> 이 글은 Claude Code 공식 문서 (self-hosted-environments, whats-new/2026-w32)를 기반으로 작성되었습니다 [공].
