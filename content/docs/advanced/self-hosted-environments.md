---
title: "[공] 셀프 호스팅 환경 — 내 서버에서 클라우드 세션 돌리기"
description: "Team·Enterprise 플랜에서 내 회사 서버를 Claude Code 클라우드 세션 실행 환경으로 등록할 수 있어요. 내부 네트워크 접근이 필요한 기업 환경에 최적"
tags: ["자동생성", "셀프호스팅", "엔터프라이즈", "클라우드세션", "self-hosted"]
category: "advanced"
order: 52
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[공] 출처</strong>: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">Week 32</a>
<br />★ 필요 버전: <strong>Claude Code v2.1.224 이상</strong>
<br />★ 지원 플랜: <strong>Team·Enterprise 플랜 (Public Beta)</strong>
<br />★ 설정 권한: Owner 또는 Admin 계정 필요
</div>

## 셀프 호스팅 환경이 뭔가요?

원래 Claude Code on the web이나 모바일 앱에서 "클라우드 세션"을 시작하면, Anthropic이 관리하는 서버에서 실행돼요. **셀프 호스팅 환경**을 설정하면, 그 클라우드 세션을 **내 회사 서버(또는 컨테이너)에서 직접 실행**할 수 있어요.

> 🍱 **비유로 설명하면**: 배달 음식을 시킬 때 보통은 배달부가 외부 도로를 이용하죠. 하지만 회사 내부 배달이라면 "우리 회사 복도로 배달해줘"라고 설정하는 것과 같아요. 클로드가 인터넷(Anthropic 서버)을 통해 오지만, 실제 작업은 내 회사 내부 서버에서 일어나요.

---

## 왜 필요한가요?

| 상황 | 이유 |
|------|------|
| 회사 내부 API가 있을 때 | 클로드가 내부 서비스에 직접 접근 가능 |
| 데이터가 외부 서버에 올라가면 안 될 때 | 코드·데이터가 내 인프라 안에서만 처리됨 |
| 특정 OS·환경이 필요할 때 | linux-dev, macos-prod 등 커스텀 환경 지원 |
| 보안 정책상 클라우드 실행이 제한될 때 | 규정 준수(컴플라이언스) 충족 |

---

## 설정 방법

### 1단계: Admin 설정 활성화

[claude.ai/admin-settings/cloud-environments](https://claude.ai/admin-settings/cloud-environments)에서 **"Allow self-hosted environments"** 활성화 (Owner/Admin 필요)

### 2단계: 러너(Runner) 설치 및 시작

내 서버 또는 컨테이너에서:

```bash
# 가이드 설치 (처음 설치 시)
claude self-hosted-runner setup
```

→ 이 명령이 환경 생성과 러너 시작을 안내해줘요.

### 3단계: 상태 확인

Admin 설정 화면에서 환경이 **"Healthy"** 상태로 표시되면 완료!

---

## 등록된 환경 목록 예시

Admin 화면에서 이렇게 보여요:

| 환경 이름 | 상태 | 활성 세션 수 |
|-----------|------|------------|
| linux-dev | 🟢 Healthy | 3 |
| macos-prod | 🟢 Healthy | 1 |
| windows-qa | 🔴 Offline | 0 |

---

## 세션 시작 시 환경 선택

세션을 시작할 때 등록된 환경을 고를 수 있어요:

- **claude.ai** 웹 인터페이스
- **모바일 앱** (iOS·Android)
- **데스크탑 앱**
- **`claude --cloud` 명령어**

→ 선택한 환경에서 세션이 실행돼요!

---

## 세션 간 메시징과 연동

셀프 호스팅 러너 안에서도 **세션 간 메시징**이 작동해요. 같은 러너 안의 세션들끼리는 직접 소켓으로 연결돼요.

---

## 공식 문서

더 상세한 설정(고급 구성·인증·테스트·레퍼런스)은 공식 문서에서 확인하세요:

- [셀프 호스팅 환경 빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [구성 레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-configuration)
- [테스트 가이드](https://code.claude.com/docs/en/self-hosted-environments-testing)
- [인증 설정](https://code.claude.com/docs/en/self-hosted-environments-identity)

---

## 다음 단계

- **[세션 간 메시징](/docs/advanced/cross-session-messaging)** — 같은 러너 안 세션들 메시지 연동
- **[Sandbox 환경](/docs/advanced/sandbox-environments)** — 보안 격리 설정
- **[클라우드 세션 기본 가이드](/docs/codeweb/claude-code-on-the-web)** — Claude Code on the web 사용법
