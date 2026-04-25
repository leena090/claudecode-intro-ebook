---
title: "[공] 우리 회사 전체에 Claude Code 배포하기 — 관리자 설정 가이드"
description: "IT 담당자·팀장이 알아야 할 Claude Code 조직 배포 결정 지도 — API 제공자 선택부터 정책 강제 적용, 사용량 모니터링, 데이터 처리까지"
tags: ["자동생성", "admin", "조직 배포", "관리자", "managed settings", "enterprise", "bedrock", "API 제공자", "permissions"]
category: "config"
order: 10
lastUpdated: "2026-04-24"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — 조직 전체에 Claude Code를 도입할 때 결정해야 할 5가지를 순서대로 안내해요. <code>[공]</code>
<br />★ <strong>대상</strong>: IT 관리자, 팀장, Claude Code를 팀에 도입하려는 담당자
<br />★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/admin-setup">code.claude.com/docs/en/admin-setup</a>
</div>

## 조직 배포가 개인 설치와 뭐가 다른가요?

혼자 쓸 땐 그냥 설치하면 돼요. 근데 **팀 전체에 도입**하면 이런 문제가 생겨요.

> 🏢 **비유로 설명하면**: 회사 건물에 WiFi를 새로 까는 것과 비슷해요.
> - 개인이 집에서 쓰는 WiFi → 그냥 공유기 꽂으면 끝
> - 사무실 전체 WiFi → 보안 설정, 접속 권한, 비용 청구 방법, 누가 뭘 쓰는지 모니터링 등 결정해야 할 게 많아요

Claude Code도 마찬가지입니다. 혼자 쓰면 간단하지만, 조직에 배포하면 5가지를 먼저 결정해야 해요.

---

## 5가지 결정 지도 (한눈에 보기)

| 순서 | 결정할 것 | 한 줄 설명 |
|:---:|---|---|
| 1️⃣ | [API 제공자 선택](#1-api-제공자-선택) | Claude Code가 어디서 인증하고 비용을 어디에 청구할지 |
| 2️⃣ | [설정 전달 방법](#2-설정을-직원-기기에-어떻게-전달할까) | 관리자 정책이 직원 PC에 어떻게 들어갈지 |
| 3️⃣ | [무엇을 강제할지](#3-무엇을-허용하고-무엇을-막을까) | 어떤 도구·명령어를 허용하거나 차단할지 |
| 4️⃣ | [사용량 모니터링](#4-사용량-어떻게-볼까) | 비용 추적, 팀원 사용 현황 확인 |
| 5️⃣ | [데이터 처리 정책](#5-데이터는-어떻게-처리될까) | 코드가 외부로 나가는지, 학습에 쓰이는지 |

---

## 1️⃣ API 제공자 선택

Claude Code는 클로드(Claude) 모델과 통신해야 해요. 그 통신 경로로 5가지 선택지가 있어요.

> 🔌 **비유로 설명하면**: 전기 공급 계약과 비슷해요. 한국전력에서 직접 받을 수도 있고, 건물 전기실 (AWS·GCP·Azure)을 거칠 수도 있어요. 어디서 받든 전기(= AI)는 같지만 청구서와 보안 수준이 달라져요.

| 제공자 | 이런 상황이라면 선택 |
|---|---|
| **Claude for Teams / Enterprise** | claude.ai와 Claude Code를 하나의 월정액으로 쓰고 싶을 때 (기본 추천) |
| **Claude Console** | API 토큰 기반 pay-as-you-go, 개발자팀이 직접 관리하고 싶을 때 |
| **Amazon Bedrock** (베드록) | 이미 AWS 계약이 있고, 거기서 비용 처리하고 싶을 때 |
| **Google Vertex AI** (버텍스 AI) | GCP 환경에 있을 때 |
| **Microsoft Foundry** (파운드리) | Azure 환경에 있을 때 |

> 💡 **Team / Enterprise 플랜**이면 [서버 관리형 설정](#2-설정을-직원-기기에-어떻게-전달할까)을 가장 쉽게 쓸 수 있어요.

---

## 2️⃣ 설정을 직원 기기에 어떻게 전달할까?

> 🏫 **비유로 설명하면**: 학교에서 학생 태블릿에 "이 앱만 설치 가능, 이 사이트는 차단" 같은 정책을 배포하는 것과 같아요. 학생이 바꿀 수 없도록 관리자가 잠가두는 것이죠.

Claude Code는 4가지 방법으로 관리자 설정을 전달받아요. **우선순위 높은 것이 이긴다**는 것이 핵심 규칙이에요.

| 방법 | 전달 경로 | 우선순위 | 지원 플랫폼 |
|---|---|:---:|---|
| **서버 관리형** (Server-managed) | claude.ai 관리자 콘솔 → 네트워크 | 🥇 최고 | 전체 |
| **plist / 레지스트리** | MDM(기기 관리 시스템)으로 배포 | 🥈 높음 | macOS, Windows |
| **파일 기반** | `/etc/claude-code/managed-settings.json` 등 직접 파일 배치 | 🥉 중간 | 전체 |
| **Windows 사용자 레지스트리** | `HKCU` 레지스트리 (로그인 없이 쓸 수 있음) | 4위 | Windows만 |

> ⚠️ **주의**: 서버 관리형은 **Teams/Enterprise 플랜 전용**이에요. 다른 제공자(Bedrock 등)를 쓴다면 파일 기반이나 plist/레지스트리로 배포해야 해요.

### 설정은 어떻게 합쳐질까요?

- 관리자 설정 > 팀 설정 > 개인 설정 순서로 **높은 쪽이 이겨요**
- `permissions.allow`, `permissions.deny` 같은 배열 설정은 **모든 출처에서 합쳐져요** (병합)
  - 즉, 직원이 관리자 목록에 항목을 추가할 수는 있지만, 관리자가 막은 항목을 풀 수는 없어요

---

## 3️⃣ 무엇을 허용하고, 무엇을 막을까?

관리자 설정으로 제어할 수 있는 "잠금 장치"들이에요.

> 🔐 **비유로 설명하면**: 회사 출입 카드처럼요. 어떤 방에 누가 들어갈 수 있는지를 카드 시스템이 제어하는 것처럼, 클로드가 어떤 도구를 쓸 수 있는지를 관리자가 제어해요.

| 제어 항목 | 하는 일 | 핵심 설정 키 |
|---|---|---|
| **권한 규칙** | 도구·명령어 허용/차단 | `permissions.allow`, `permissions.deny` |
| **권한 잠금** | 관리자 규칙만 적용, `--dangerously-skip-permissions` 비활성화 | `allowManagedPermissionRulesOnly` |
| **샌드박싱** (Sandboxing) | OS 수준 격리, 접근 허용 도메인 지정 | `sandbox.enabled`, `sandbox.network.allowedDomains` |
| **관리형 CLAUDE.md** | 모든 세션에서 강제 로드되는 조직 지침 파일 | 관리 정책 경로의 파일 |
| **MCP 서버 제어** | 직원이 추가할 수 있는 MCP 서버 제한 | `allowedMcpServers`, `allowManagedMcpServersOnly` |
| **플러그인 마켓플레이스 제어** | 허용되는 플러그인 출처 제한 | `strictKnownMarketplaces`, `blockedMarketplaces` |
| **훅 제한** | 관리자 훅만 실행, HTTP 훅 URL 제한 | `allowManagedHooksOnly` |
| **버전 최솟값** | 자동 업데이트가 이 버전 아래로 내려가지 않도록 | `minimumVersion` |

> 💡 **중요한 포인트**: `permissions.deny`로 WebFetch를 막아도, Bash 도구가 허용돼 있으면 `curl`·`wget`으로 우회 가능해요. 이걸 막으려면 **샌드박싱(sandboxing)**을 써야 해요.

---

## 4️⃣ 사용량 어떻게 볼까?

> 📊 **비유로 설명하면**: 핸드폰 데이터 요금제처럼요. 가족 공유 요금제에서 "누가 얼마나 썼는지" 볼 수 있는 관리자 기능과 같아요.

| 기능 | 알 수 있는 것 | 사용 가능한 경우 |
|---|---|---|
| **사용량 모니터링** (OpenTelemetry) | 세션, 도구 사용 횟수, 토큰 수 | 모든 제공자 |
| **애널리틱스 대시보드** | 사용자별 지표, PR 기여 추적, 리더보드 | Anthropic 플랜만 |
| **비용 추적** | 지출 한도 설정, 사용량 배분 | Anthropic 플랜만 |

Teams/Enterprise 플랜은 `claude.ai/analytics/claude-code`에서 대시보드를 바로 볼 수 있어요. Bedrock/Vertex/Azure를 쓴다면 각 클라우드의 과금 콘솔(AWS Cost Explorer 등)에서 확인해요.

---

## 5️⃣ 데이터는 어떻게 처리될까?

> 🔒 **비유로 설명하면**: 회계 자료를 외부 세무사 사무소에 맡길 때와 비슷해요. "이 자료가 다른 사람 세무처리에 쓰이진 않겠지?" 하는 걱정을 미리 확인해야 하는 것처럼요.

| 주제 | 핵심 내용 |
|---|---|
| **학습 데이터 사용** | Team, Enterprise, Claude API, 클라우드 제공자 플랜에선 **코드·프롬프트를 학습에 쓰지 않아요** |
| **데이터 보존** | 제공자에 따라 다름. 공식 문서의 [Data usage](https://code.claude.com/docs/en/data-usage) 참고 |
| **ZDR** (Zero Data Retention, 제로 데이터 보존) | 요청 완료 후 즉시 삭제. Claude for Enterprise 전용 |

---

## 배포 후 확인 방법

설정이 잘 전달됐는지 확인하려면, 직원 중 한 명이 Claude Code 안에서 `/status`를 실행해 보세요.

```
Enterprise managed settings (remote)   ← 서버 관리형으로 잘 들어온 상태
Enterprise managed settings (plist)    ← plist/MDM으로 들어온 상태
Enterprise managed settings (file)     ← 파일 기반으로 들어온 상태
```

이 줄이 안 보이면 설정이 전달되지 않은 거예요.

---

## 직원 온보딩 리소스

설정 완료 후 직원들에게 공유할 링크예요.

| 리소스 | 내용 |
|---|---|
| [빠른 시작 가이드](https://code.claude.com/docs/en/quickstart) | 설치부터 첫 작업까지 |
| [자주 쓰는 작업 패턴](https://code.claude.com/docs/en/common-workflows) | 코드 리뷰, 리팩터링, 디버깅 등 |
| [Claude 101 강의](https://anthropic.skilljar.com/claude-101) | Anthropic Academy 자기주도 강의 |
| [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) | 실전 활용 강의 |

### 흔한 문제 & 빠른 해결

| 증상 | 해결책 |
|---|---|
| 로그인 안 됨 | `/logout` 후 `/login` 재시도 |
| 엔터프라이즈 인증 옵션이 안 보임 | `claude update` 실행 후 터미널 재시작 |
| "아직 조직에 추가되지 않았습니다" 오류 | 관리자 콘솔에서 해당 직원 시트에 Claude Code 접근 권한 추가 필요 |

---

## 연관 문서

- [서버 관리형 설정](https://code.claude.com/docs/en/server-managed-settings): 관리자 콘솔에서 정책 배포하기
- [설정 레퍼런스](https://code.claude.com/docs/en/settings): 모든 설정 키와 파일 위치
- [권한 가이드](https://code.claude.com/docs/en/permissions): 세부 권한 규칙 작성법
- [Amazon Bedrock으로 쓰기](https://code.claude.com/docs/en/amazon-bedrock) / [Google Vertex AI](https://code.claude.com/docs/en/google-vertex-ai) / [Microsoft Foundry](https://code.claude.com/docs/en/microsoft-foundry)
