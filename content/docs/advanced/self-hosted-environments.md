---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 클라우드 세션 실행"
description: "자체 호스팅 환경(Self-Hosted Environments)으로 조직 내부 서버에서 Claude Code 클라우드 세션을 실행해 내부 네트워크에 접근할 수 있어요 (Team/Enterprise 베타)"
tags: ["자동생성", "자체호스팅", "SelfHosted", "엔터프라이즈", "내부네트워크", "클라우드세션", "Team"]
category: "advanced"
order: 29
lastUpdated: "2026-08-14"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> [공]<br />
★ W32 (2026-08-03~07) 출시 — <strong>Team·Enterprise 플랜 공개 베타</strong><br />
★ Claude Code v2.1.224 이상 필요
</div>

## 자체 호스팅 환경이 뭔가요?

**내 회사(또는 조직) 서버에서 Claude Code 클라우드 세션을 직접 실행하는 기능**이에요.

> 🏢 **비유로 설명하면**: 보통 Claude Code 웹 세션은 "Anthropic의 서울 사무소"에서 작업하는 것과 같아요. 내부 회사 서버에는 접근이 안 되죠. 자체 호스팅 환경을 쓰면 **"우리 회사 건물 안 개발실"에서** Claude가 직접 일하게 됩니다 — 회사 내부 시스템, 데이터베이스, 개발 환경에도 자유롭게 접근할 수 있어요.

---

## 어떤 문제를 해결해주나요?

| 기존 클라우드 세션 | 자체 호스팅 환경 |
|-----------------|---------------|
| Anthropic 서버에서 실행 | 내 서버에서 실행 |
| 내부 서비스 접근 불가 | **내부 네트워크·서비스 접근 가능** |
| 외부망에서만 작동 | 사내망에서도 작동 |
| 데이터가 외부 통과 | 조직 인프라 안에서 처리 |

---

## 어떻게 설정하나요?

### 1단계: Admin Settings에서 활성화

Owner 또는 Admin이 [claude.ai/admin-settings/cloud-environments](https://claude.ai/admin-settings/cloud-environments)에서 **"Allow self-hosted environments"** 활성화

### 2단계: 러너(Runner) 설정

서버 또는 컨테이너에서 다음 명령어 실행:

```bash
claude self-hosted-runner setup
```

이 명령어가 안내에 따라 환경 생성 + 러너 시작을 도와줘요.

### 3단계: 상태 확인

Admin Settings에서 해당 환경이 **"Healthy"**로 표시되면 사용 준비 완료!

---

## 어떻게 사용하나요?

세션을 시작할 때 환경 선택 화면에서 내 조직의 자체 호스팅 환경을 고르면 돼요. 지원되는 시작 방법:

- **claude.ai** 웹
- **모바일 앱** (iOS/Android)
- **데스크톱 앱**
- **`claude --cloud`** 명령어

---

## 주요 특징

| 항목 | 내용 |
|------|------|
| 실행 위치 | 내 조직의 서버·컨테이너 |
| 내부 서비스 | 접근 가능 (내부망·DB·개발 도구 등) |
| 플랜 | Team·Enterprise 전용 |
| 상태 | 공개 베타 |
| 최소 버전 | Claude Code v2.1.224 |

---

## 관련 문서 (공식)

자체 호스팅 환경은 아래 6개 상세 문서로 나뉘어 있어요:

| 문서 | 내용 |
|------|------|
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [Deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 배포 방법 |
| [Configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 상세 설정 |
| [Testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트 방법 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | 명령어·설정 참조 |
| [Identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 인증·권한 관리 |

> 📌 **공식 발표 기준**: "Run Claude Code cloud sessions on your organization's own infrastructure, in public beta on Team and Enterprise plans." (W32 What's New, 2026-08-07)

---

## 어떤 팀에 맞나요?

- 🏦 **금융·보험사**: 외부 망 통신이 엄격히 제한된 조직
- 🏥 **의료·바이오**: 개인정보·민감 데이터를 외부로 내보내기 어려운 환경
- 🔒 **보안 정책이 엄격한 기업**: 모든 처리를 사내 인프라에서 해야 하는 경우
- 🛠️ **내부 개발 도구**: 사내망에서만 접근 가능한 CI/CD, Jira, Git 서버 등을 Claude에게 연결하고 싶을 때
