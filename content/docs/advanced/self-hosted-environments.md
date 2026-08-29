---
title: "[공] 셀프 호스팅 환경 — 회사 서버에서 Claude Code 클라우드 세션 실행하기"
description: "Self-hosted Environments: 우리 회사 서버를 Claude Code 클라우드 세션 실행 공간으로 쓰는 방법. 내부망 접근, 보안 데이터 처리, 엔터프라이즈 설정 가이드"
tags: ["자동생성", "셀프호스팅", "self-hosted", "enterprise", "team", "내부망", "클라우드세션", "W32"]
category: "advanced"
order: 27
lastUpdated: "2026-08-29"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>[공]</strong> 빠른 시작: <a href="https://code.claude.com/docs/en/self-hosted-environments-quickstart">self-hosted-environments-quickstart</a><br />
★ Week 32 (2026-08-03) 공개 베타 출시. Team·Enterprise 플랜 전용.
</div>

## 셀프 호스팅 환경이 뭔가요?

원래 Claude Code의 클라우드 세션(`claude --cloud`)은 **Anthropic의 서버**에서 실행됐어요.

**셀프 호스팅 환경(Self-hosted Environments)** 을 쓰면, **우리 회사 컴퓨터나 서버**를 클로드 작업 공간으로 등록할 수 있어요. 그러면 클로드가 그 환경 안에서 실행되면서 **우리 회사 내부 서비스에 직접 접근**할 수 있어요.

> 🍱 **비유로 설명하면**: 원래 클로드는 Anthropic이라는 회사의 사무실(서버)에서 우리에게 원격으로 일을 해줬어요. 셀프 호스팅은 **클로드를 우리 회사 사무실에 직접 출근시키는 것**이에요. 그러면 우리 회사 내부 시스템에 접근하면서 훨씬 유연하게 일할 수 있어요.

---

## 어떤 상황에서 필요할까요?

| 상황 | 설명 |
|---|---|
| **내부망 서비스 접근** | 방화벽 안쪽 API, 내부 데이터베이스, 사내 서비스 |
| **보안 데이터 처리** | 외부 서버에 올릴 수 없는 민감 데이터 |
| **커스텀 네트워크 환경** | 특수한 VPN, 프록시, 인증 구조 |
| **규정 준수** | 데이터가 외부로 나가면 안 되는 기업 정책 |

---

## 시작하기 (공개 베타)

### 준비물

- 👥 **Team 또는 Enterprise 플랜** 필수
- 🔑 **조직 Owner 권한** (최초 설정 시)
- 💻 **실행 가능한 서버 또는 컨테이너** (Ubuntu, macOS, 또는 Docker 컨테이너)

### 1단계: Admin에서 활성화

조직 Owner가 [Admin Settings → Cloud Environments](https://claude.ai/admin-settings/cloud-environments) 에서 **"Allow self-hosted environments"** 를 켜야 해요.

### 2단계: 러너(Runner) 설정

셀프 호스팅 환경으로 쓸 서버에서:

```bash
# 가이드 따라 환경 생성 + 러너 시작 (대화형)
claude self-hosted-runner setup
```

설치가 완료되면 Admin Settings에서 해당 환경이 **Healthy** 상태로 표시돼요.

### 3단계: 세션 시작

이제 사용자들이 claude.ai, 모바일 앱, 데스크탑 앱에서 세션 시작할 때 **우리 회사 환경을 선택**할 수 있어요.

```bash
# CLI에서 특정 환경 지정
claude --cloud --environment linux-dev
```

---

## 고급 설정

### 안전한 종료 지연

```bash
# SIGTERM 신호 받아도 최대 10분간 연결된 세션 유지
claude self-hosted-runner --defer-shutdown-max-min 10
```

### 이그레스 프록시 인증

내부 네트워크가 나가는 트래픽에 인증이 필요한 경우:

```bash
# 인증 헤더를 명령어로 생성
claude self-hosted-runner --proxy-authorization-command "my-auth-script.sh"

# 또는 파일에서 읽기
claude self-hosted-runner --proxy-authorization-file /etc/proxy-auth.txt
```

---

## 공식 문서 구조

셀프 호스팅 환경은 6개의 문서로 나뉘어 있어요:

| 문서 | 내용 |
|---|---|
| [Overview](https://code.claude.com/docs/en/self-hosted-environments) | 개요 및 개념 |
| [Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) | 빠른 시작 가이드 |
| [Deploy](https://code.claude.com/docs/en/self-hosted-environments-deploy) | 배포 방법 |
| [Configuration](https://code.claude.com/docs/en/self-hosted-environments-configuration) | 상세 설정 |
| [Testing](https://code.claude.com/docs/en/self-hosted-environments-testing) | 테스트 방법 |
| [Reference](https://code.claude.com/docs/en/self-hosted-environments-reference) | 완전한 레퍼런스 |
| [Identity](https://code.claude.com/docs/en/self-hosted-environments-identity) | 인증·자격증명 |

---

## 현재 상태

- 📌 **공개 베타** (2026-08-03 기준)
- 🔒 **Team·Enterprise 플랜 전용** (Pro·Max에서는 아직 미지원)
- 🖥️ macOS·Linux 기반 서버 지원
- 🐳 컨테이너(Docker) 환경도 지원

<div class="note-star">
★ 공개 베타 기간 중에는 사양이 바뀔 수 있어요. "공식 발표 기준"으로 확인하시고 최신 정보는 위 공식 문서 링크를 참조하세요.
</div>

---

## 출처

- [공] [Self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments) — code.claude.com/docs
- [공] [Week 32 · August 3–7, 2026](https://code.claude.com/docs/en/whats-new/2026-w32) — 공개 베타 발표
