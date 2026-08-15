---
title: "[공] 셀프 호스팅 환경 — 내 서버에서 Claude Code 클라우드 세션 실행하기"
description: "조직의 자체 인프라에서 Claude Code 클라우드 세션을 실행하는 방법. 내부 네트워크 접근, 커스텀 도구 사전 설치, 컴플라이언스 요구사항 충족. Team·Enterprise 플랜 퍼블릭 베타"
tags: ["자동생성", "셀프호스팅", "엔터프라이즈", "Team", "runner", "클라우드세션", "인프라", "v2.1.224"]
category: "advanced"
order: 24
lastUpdated: "2026-08-15"
---

<div class="note-star">
★ <strong>[공] Team·Enterprise 플랜 퍼블릭 베타</strong> — 기본 비활성화. 관리자가 활성화해야 합니다.<br />
★ <strong>v2.1.224</strong> 이상 필요<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">self-hosted-environments</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">What's New W32</a>
</div>

## 셀프 호스팅 환경이 뭔가요?

**조직의 자체 서버(인프라)에서 Claude Code 클라우드 세션을 직접 실행하는 기능**입니다.

보통 claude.ai에서 세션을 시작하면 Anthropic 서버 위에서 실행되는데, 셀프 호스팅 환경을 쓰면 **내 조직의 서버에서** 동일한 세션이 실행됩니다.

> 🏢 **비유로 설명하면**: 일반적인 클라우드 세션은 "빌린 사무실"에서 일하는 것 같아요. 편리하지만 내부 회사 자료를 가져오려면 복잡합니다. 셀프 호스팅 환경은 "내 회사 건물"에서 일하는 것이에요. AI 직원이 이미 내부 시스템에 접근할 수 있는 상태에서 일을 시작합니다.

---

## 어떤 팀에 필요한가요?

대부분의 팀은 **Anthropic 호스팅 환경으로 충분**합니다. 셀프 호스팅은 다음 요건이 있는 조직을 위한 것이에요:

| 요건 | 설명 |
|---|---|
| **내부 네트워크 접근** | 외부에 공개하기 어려운 내부 DB·API·서비스에 접근해야 할 때 |
| **커스텀 도구 사전 설치** | 사내 CLI, 특수 컴파일러, 내부 SDK가 항상 준비돼 있어야 할 때 |
| **컴플라이언스** | 코드 체크아웃·빌드 아티팩트가 자체 인프라 밖으로 나가면 안 될 때 |

> ⚠️ **주의**: 셀프 호스팅은 인프라 운영 부담이 생겨요. 러너 이미지 빌드·유지, 서버 운영, 네트워크 관리 등 직접 챙겨야 합니다.

---

## 핵심 개념 3가지

| 용어 | 한국어 설명 |
|---|---|
| **Environment (환경)** | 러너들의 묶음. claude.ai 관리자 설정에서 만든 이름 붙은 목적지 |
| **Runner (러너)** | 내 서버에서 돌아가는 프로그램. 세션을 실제로 실행하는 일꾼 |
| **Session (세션)** | 개발자가 시작한 하나의 Claude Code 작업 |

> 🏭 **비유로 설명하면**: **환경**은 공장 건물 이름이에요. **러너**는 공장 안에서 일하는 직원입니다. **세션**은 그 직원이 처리하는 주문 하나예요. claude.ai에서 세션을 시작하면, 내 공장 건물로 주문이 배달되고, 내 직원이 처리합니다.

---

## 작동 방식

```
개발자가 claude.ai에서 세션 시작
     ↓
환경 선택 화면 (Anthropic 호스팅 OR 내 조직 환경)
     ↓ (내 환경 선택 시)
Anthropic 컨트롤 플레인 → 내 환경 큐(queue)에 배치
     ↓
내 서버의 러너가 세션 클레임(claim)
     ↓
러너가 저장소 클론 → Claude Code 프로세스 시작
     ↓
개발자에게 세션 스트리밍 (내 네트워크 안에서 작업)
```

**중요**: Anthropic 서버가 내 네트워크로 연결하지 않아요. 모든 연결은 **내 서버 → Anthropic(아웃바운드)** 방향입니다.

---

## 설정 방법 (간략 요약)

### 1단계: 관리자 설정 활성화

claude.ai 관리자 → **Cloud environments** 페이지 → **Allow self-hosted environments** 켜기

### 2단계: 러너 설정 시작

```bash
claude self-hosted-runner setup
```

이 명령이 안내에 따라:
- 환경 생성
- 러너 등록
- "Healthy" 상태 확인

까지 단계별로 진행해줍니다.

### 3단계: 세션 시작 (개발자 관점)

개발자가 claude.ai에서 세션을 시작할 때 **환경 선택 화면**에 조직 환경이 나타납니다. 선택하면 내 서버에서 세션이 실행돼요.

---

## 네트워크 구조

```
[ 내 네트워크 ]
   러너 → 세션 프로세스(들) → 내부 서비스 접근 가능
   러너 → 내부 git 저장소

   모든 외부 연결은 아웃바운드 HTTPS:
   러너 → api.anthropic.com (큐 폴링, 모델 추론)
```

**Anthropic이 내 네트워크에 인바운드 연결하지 않습니다.**

---

## 제한 사항

| 항목 | 내용 |
|---|---|
| **플랜** | Team·Enterprise만 사용 가능 (퍼블릭 베타) |
| **Zero Data Retention** | ZDR 조직은 사용 불가 |
| **모델 추론** | Anthropic API만 사용 (Bedrock·Vertex 우회 불가) |
| **저장소** | GitHub 기반 (GitLab·Bitbucket은 공식 안내 확인 필요) |
| **미지원 표면** | Claude Tag, Claude Security, Code Review (추후 지원 예정) |

---

## 관련 문서

- [셀프 호스팅 환경 퀵스타트](https://code.claude.com/docs/en/self-hosted-environments-quickstart) — 처음 설정하는 분
- [프로덕션 배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy) — 보안 강화·Kubernetes 설정
- [세션 커스터마이징](https://code.claude.com/docs/en/self-hosted-environments-configuration) — 자격증명·라이프사이클 훅
- [참조 문서](https://code.claude.com/docs/en/self-hosted-environments-reference) — CLI 플래그 전체 목록
