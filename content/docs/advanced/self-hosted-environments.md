---
title: "[공] 자체 호스팅 환경 — 회사 서버에서 Claude Code 클라우드 세션 실행"
description: "조직 내부 인프라에서 Claude Code 클라우드 세션을 실행하는 Self-hosted Environments 기능 (Team·Enterprise 공개 베타, v2.1.224~)"
tags: ["자동생성", "자체호스팅", "기업", "Team", "Enterprise", "SelfHosted", "내부망"]
category: "advanced"
order: 10
lastUpdated: "2026-08-27"
---

<div class="note-star">
★ <strong>[공]</strong> W32 릴리즈 노트: <a href="https://code.claude.com/docs/en/whats-new/2026-w32">code.claude.com/docs/en/whats-new/2026-w32</a> (Aug 3-7, 2026)<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 자체 호스팅 환경이란?

**자체 호스팅 환경(Self-hosted Environments)**은 Claude Code의 클라우드 세션을 **Anthropic 서버가 아닌 조직의 자체 인프라에서** 실행하는 기능이에요. 2026년 8월 3일(W32)부터 Team·Enterprise 플랜에서 공개 베타로 제공됩니다.

> 🏢 **비유로 설명하면**: 기존 Claude Code 클라우드 세션이 "외부 카페에서 일하는 것"이라면, 자체 호스팅 환경은 **"회사 사무실에서 회사 내부망에 연결해 일하는 것"**이에요. 외부에서는 볼 수 없는 사내 시스템에 Claude가 직접 접근할 수 있게 됩니다.

---

## 왜 필요한가요?

| 문제 | 해결 |
|---|---|
| 사내 DB·내부 API에 외부에서 접근 불가 | 러너가 내부망에서 실행되어 접근 가능 |
| 보안상 코드를 외부 서버로 보내기 꺼려짐 | 모든 처리가 조직 인프라 안에서 진행 |
| 회사 규정상 데이터가 사내에 있어야 함 | 데이터가 자체 서버에 머무름 |

---

## 어떻게 작동하나요?

```
[개발자 휴대폰/PC] ──→ [claude.ai / 데스크톱 앱] ──→ [자체 러너 (회사 서버)]
                                                              ↕
                                                    [사내 DB / 내부 API]
```

1. 어드민이 회사 서버(또는 컨테이너)에 **러너(runner)** 를 설치·실행
2. 개발자가 클라이언트(모바일, 데스크톱, `claude --cloud`)에서 세션 시작 시 조직의 환경 선택
3. 세션이 회사 서버에서 실행되어 **내부 서비스에 직접 접근**

---

## 설정 방법 (어드민용)

### 1단계: 관리자 설정에서 활성화

```
claude.ai → 어드민 설정 → 클라우드 환경 → "자체 호스팅 환경 허용" 켜기
```
- **Owner(소유자)** 권한 필요
- [어드민 설정 바로가기](https://claude.ai/admin-settings/cloud-environments)

### 2단계: 러너 설정 실행

```bash
claude self-hosted-runner setup
```

가이드에 따라 환경을 생성하고 러너를 시작해요. 러너가 정상 등록되면 어드민 설정에서 **"Healthy"** 상태로 표시됩니다.

### 3단계: 상태 확인

어드민 설정 → 클라우드 환경 페이지에서 환경 이름, 상태, 활성 세션 수를 확인할 수 있어요.

---

## 러너 고급 옵션 (v2.1.234~)

| 옵션 | 설명 |
|---|---|
| `--defer-shutdown-max-min <분>` | SIGTERM 신호 후 연결된 세션을 설정한 분 동안 계속 서비스 |
| `--proxy-authorization-command` | 에그레스 프록시의 `Proxy-Authorization` 헤더를 동적으로 공급하는 명령 |
| `--proxy-authorization-file` | 에그레스 프록시의 헤더를 파일에서 읽어 공급 |

---

## 누가 사용할 수 있나요?

| 조건 | 내용 |
|---|---|
| **플랜** | Team 또는 Enterprise (공개 베타) |
| **버전** | v2.1.224 이상 |
| **권한** | Owner가 어드민에서 먼저 활성화해야 함 |
| **클라이언트** | claude.ai 웹, 모바일 앱, 데스크톱 앱, `claude --cloud` |

---

## 입문자를 위한 정리

> 💡 개인 개발자나 소규모 팀은 기존 Anthropic 클라우드 환경으로 충분해요. 자체 호스팅 환경은 **보안 규정이 엄격하거나 내부망 서비스를 Claude에 연결해야 하는 기업**을 위한 기능이에요.

### 공식 문서 더 읽기

- [자체 호스팅 환경 빠른 시작](https://code.claude.com/docs/en/self-hosted-environments-quickstart)
- [배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [설정 레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference)
