---
title: "[공] 자체 호스팅 환경 — 내 회사 서버에서 Claude Code 클라우드 세션 실행하기"
description: "팀·기업 플랜에서 사내 인프라 위에 Claude Code 클라우드 세션을 올리는 방법. 내부망 접근, 보안 격리, 사내 데이터베이스 연결까지"
tags: ["자동생성", "자체호스팅", "self-hosted", "enterprise", "기업", "인프라", "runner", "cloud environment"]
category: "advanced"
order: 26
lastUpdated: "2026-08-26"
---

<div class="note-star">
★ <strong>공식 문서</strong> — <a href="https://code.claude.com/docs/en/self-hosted-environments">self-hosted-environments</a>, <a href="https://code.claude.com/docs/en/self-hosted-environments-quickstart">quickstart</a> (2026-08-03 공개, 공개 베타) <code>[공]</code>
<br />★ <strong>대상</strong> — Team·Enterprise 플랜 관리자 (Owner 권한 필요)
<br />★ <strong>2026-08-26 자동 감지</strong> — docs-watch 루틴이 신규 URL 6개(self-hosted-environments*)를 감지해 작성한 글이에요.
</div>

## 자체 호스팅 환경이 뭔가요?

보통 Claude Code 클라우드 세션은 Anthropic 서버에서 실행돼요. **자체 호스팅 환경(Self-hosted Environments)**은 그 세션을 **내 회사 서버(온프레미스나 VPC)**에서 실행하도록 하는 기능입니다.

> 🍱 **비유로 설명하면**: 카페에서 일하던 직원(Claude Code)이 이제 우리 회사 사무실에 들어와서 일할 수 있어요. 회사 내부 자료(내부망 DB, 내부 API)에 바로 접근하면서 일하고, 데이터가 회사 밖으로 나가지 않아요.

---

## 왜 필요한가요?

| 문제 | 자체 호스팅으로 해결 |
|---|---|
| 사내 DB에 외부에서 접근 불가 | 세션이 내부망에서 실행되어 직접 연결 |
| 코드·데이터를 외부 서버에 올리기 꺼려짐 | 세션 전체가 내 인프라 안에서 동작 |
| 보안 감사·컴플라이언스 요건 | 데이터 경로 완전 통제 가능 |
| 회사 전용 도구·패키지 필요 | 내 환경에 미리 설치된 것들 사용 |

---

## 어떻게 작동해요?

```
[사용자 브라우저/앱/모바일]
       ↓ (환경 선택)
[Anthropic 서버] ←→ [내 회사 Runner]
                         ↓
              [내부망: DB, API, 파일시스템]
```

1. **내 서버에 Runner 설치** — `claude self-hosted-runner`를 실행
2. **Runner가 Anthropic 서버에 등록** — 상태: `Healthy`
3. **사용자가 "우리 환경" 선택** — 웹·앱·모바일에서 세션 시작 시 환경 선택
4. **세션이 내 서버에서 실행** — 내부망 전체 접근 가능

---

## 준비물

- Team 또는 Enterprise 플랜
- **Owner 권한** 계정 (관리자 설정 접근용)
- 서버 또는 컨테이너 환경 (Linux 권장)
- Claude Code v2.1.224 이상

---

## 시작하기 (퀵스타트)

### 1단계: 관리자 설정에서 기능 활성화

[claude.ai/admin-settings/cloud-environments](https://claude.ai/admin-settings/cloud-environments)에서 **Allow self-hosted environments** 켜기.

### 2단계: Runner 설정

서버에서 다음 명령어를 실행하면 **가이드 설정**이 진행돼요:

```bash
claude self-hosted-runner setup
```

설정이 완료되면 관리자 페이지에 환경이 **Healthy** 상태로 표시돼요.

### 3단계: 사용자가 환경 선택

브라우저·모바일·Desktop에서 새 세션 시작 시 **환경 선택** 화면이 나타나요. 회사가 등록한 환경(예: `linux-dev`, `macos-prod`)을 선택하면 해당 서버에서 세션이 실행됩니다.

---

## 고급 설정

### 여러 Runner 운영 (고가용성)

같은 환경에 Runner를 여러 대 연결하면 부하 분산과 장애 대비가 돼요.

```bash
# 각 서버에서 같은 환경 이름으로 runner 실행
claude self-hosted-runner --environment my-dev-env
```

### 종료 지연 옵션 (무중단 유지보수)

```bash
# SIGTERM 후에도 현재 연결된 세션을 최대 30분 유지
claude self-hosted-runner --defer-shutdown-max-min 30
```

### 이그레스 프록시 인증

사내 프록시를 통해 외부 연결이 필요하다면:

```bash
# 프록시 인증 헤더를 명령어로 동적 제공
claude self-hosted-runner --proxy-authorization-command "my-auth-script.sh"

# 또는 파일로 제공
claude self-hosted-runner --proxy-authorization-file /etc/proxy-auth
```

---

## 환경 구성 예시

실제 기업에서는 이렇게 여러 환경을 만들어요:

| 환경 이름 | 설명 | 접근 가능 자원 |
|---|---|---|
| `linux-dev` | 개발 서버 | 개발 DB, 내부 NPM 레지스트리 |
| `macos-prod` | 프로덕션 점검 | 읽기 전용 프로덕션 DB |
| `gpu-ml` | ML 작업 전용 | GPU 클러스터, 모델 스토리지 |

---

## 보안 고려사항

- **데이터는 내 인프라 안에서만 이동** — 세션 로그, 파일 접근 이력이 내 서버에 남아요
- **Anthropic 서버는 조율(Orchestration)만 담당** — 실제 코드·데이터는 내 환경에서 처리
- **Network isolation 설정 가능** — 샌드박싱, 이그레스 제어 옵션 지원
- **Runner는 읽기 전용 토큰으로 등록** — Runner 자체가 Anthropic 서버를 제어하진 않음

---

## 자주 묻는 질문

**Q. 무료·Pro 플랜에서도 쓸 수 있나요?**
아니요. Team 또는 Enterprise 플랜이 필요해요.

**Q. Runner 서버가 꺼지면 세션이 어떻게 되나요?**
진행 중이던 세션은 중단됩니다. `--defer-shutdown-max-min` 옵션으로 유지 보수 시 세션을 안전하게 마무리할 수 있어요.

**Q. 클라우드 환경과 동시에 쓸 수 있나요?**
네. 사용자가 세션 시작 시 "Anthropic 기본 환경"과 "내 회사 환경" 중 선택해요.

**Q. Docker/Kubernetes에서도 동작하나요?**
네. 컨테이너 환경에서 Runner를 실행하는 걸 권장해요.

---

## 한 줄 정리

> **자체 호스팅 = Claude Code가 내 회사 서버에서 일한다**
> 
> 보안이 중요하거나 내부망 접근이 필요한 기업이라면, 이제 Claude Code를 사내 인프라 위에서 직접 운영할 수 있어요.
