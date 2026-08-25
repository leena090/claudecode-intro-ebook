---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 클라우드 세션 실행하기"
description: "자체 호스팅 환경은 조직 내부 인프라에서 Claude Code 클라우드 세션을 실행하는 Team·Enterprise 기능이에요. 내부 서비스 접근이 필요한 기업 환경에 적합해요"
tags: ["자동생성", "자체 호스팅", "self-hosted environments", "엔터프라이즈", "Team", "Enterprise", "claude self-hosted-runner", "고급"]
category: "advanced"
order: 28
lastUpdated: "2026-08-25"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>[공]</strong> 빠른 시작: <a href="https://code.claude.com/docs/en/self-hosted-environments-quickstart">self-hosted-environments-quickstart</a><br />
★ <strong>[공]</strong> 릴리스 노트: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 (Aug 3–7, 2026)</a> — 공개 베타 출시
</div>

## 자체 호스팅 환경이 뭔가요?

**조직의 서버나 컨테이너에서 Claude Code 클라우드 세션을 직접 실행**하는 기능이에요. Team·Enterprise 요금제 공개 베타로 출시됐어요.

> 🍱 **비유로 설명하면**: 평소에는 클로드가 Anthropic의 클라우드 서버 안에서 일하는데, 자체 호스팅을 쓰면 **우리 회사 보안망 안쪽 서버에서 일하게** 되는 거예요. 회사 내부 데이터베이스나 개발 서버에도 접근할 수 있어요.

---

## 언제 필요한가요?

| 상황 | 이유 |
|---|---|
| 회사 내부 API·DB에 접근해야 할 때 | 외부 서버에서는 내부망에 못 들어감 |
| 보안 정책상 데이터가 외부로 나가면 안 될 때 | 회사 망 안에서만 실행 |
| 기존 내부 개발 환경과 연동해야 할 때 | 내부 CI/CD, 모니터링 도구 등 |
| 규제 산업 (금융·의료·정부)에서 컴플라이언스 요구 시 | 데이터 위치 제어 |

<div class="note-star">
★ 개인 사용자나 소규모 팀은 일반 Claude Code 클라우드 세션을 사용하면 돼요. 자체 호스팅은 Team·Enterprise 전용 기능이에요.
</div>

---

## 작동 방식

```
사용자 (모바일·Desktop·웹)
     ↓ 세션 시작 요청
   Anthropic 서비스
     ↓ 라우팅
  [우리 회사 서버의 Runner]
     ↓ 내부망 접근 가능
  내부 DB·API·서비스들
```

1. 관리자가 회사 서버에 **Runner**를 설치·등록
2. 사용자가 세션 시작 시 "우리 회사 환경" 선택
3. 세션이 회사 서버 안에서 실행됨
4. 내부 서비스에 자유롭게 접근 가능

---

## 설정 방법 (관리자용)

### 1단계: 어드민에서 활성화

`claude.ai` 어드민 설정 → **Cloud Environments** → **Allow self-hosted environments** 활성화

### 2단계: Runner 설정 실행

```bash
# 회사 서버·컨테이너에서 실행
claude self-hosted-runner setup
```

안내를 따라가면 환경이 생성되고 Runner가 등록돼요.

### 3단계: 상태 확인

어드민 설정에서 환경 상태가 **Healthy**로 표시되면 완료!

---

## 주요 특징

| 항목 | 내용 |
|---|---|
| **요금제** | Team, Enterprise (공개 베타) |
| **러너 명령어** | `claude self-hosted-runner` |
| **설치 위치** | 회사 서버, VM, 컨테이너 등 |
| **접근 방법** | claude.ai, 모바일 앱, Desktop 앱, `claude --cloud` |
| **환경 목록** | 어드민 설정 → Cloud Environments |

---

## 고급 설정 옵션

```bash
# 서버 종료 후에도 기존 세션 유지 (분 단위)
claude self-hosted-runner --defer-shutdown-max-min=30

# 이그레스 프록시 인증 설정
claude self-hosted-runner --proxy-authorization-command="my-auth-script"
```

---

## 관련 문서 (공식)

- [빠른 시작 가이드](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [배포 방법](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [설정 레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference)
- [W30~W34 업데이트 총정리](../next/whats-new-w30-w34)
