---
title: "[공] 조직에 Claude Code 배포하기 — 관리자 설정 가이드"
description: "팀·회사 전체에 Claude Code를 도입할 때 관리자가 결정해야 할 5가지 — API 공급자 선택부터 정책 적용, 사용량 파악, 데이터 처리까지"
tags: ["자동생성", "관리자", "조직배포", "enterprise", "엔터프라이즈", "팀", "managed settings", "policy", "정책"]
category: "advanced"
order: 22
lastUpdated: "2026-04-23"
---

<div class="note-star">
★ <strong>[공]</strong> 이 문서는 Claude Code 공식 문서 <a href="https://code.claude.com/docs/en/admin-setup">admin-setup</a>을 기반으로 작성되었어요.
<br />★ 개인 사용자가 아닌 <strong>회사·팀 전체에 Claude Code를 도입하는 담당자(IT 관리자, 팀장, CTO 등)</strong>를 위한 내용입니다.
<br />★ 개인 설치만 필요하다면 <a href="/docs/setup/install-claude-code">설치 가이드</a>를 먼저 보세요.
</div>

## 이 가이드가 필요한 분은요?

> 🏢 **비유로 설명하면**: 혼자 사는 집에 인터넷을 놓는 것과, 50명짜리 회사 사무실에 인터넷을 설치하는 건 완전히 다른 일이에요. 회사라면 "누가 어떤 인터넷을 쓸 수 있는지", "요금은 어떻게 정산하는지", "보안 정책은 어떻게 설정하는지"까지 결정해야 하잖아요.
>
> Claude Code를 **조직 전체에 배포**하는 것도 마찬가지예요. 이 가이드는 그 5가지 결정을 순서대로 안내합니다.

---

## 결정해야 할 5가지 — 한눈에 보기

| 순서 | 결정할 것 | 한 줄 요약 |
|:---:|:---|:---|
| 1️⃣ | **API 공급자 선택** | 클로드와 어디서 통신할지 (Anthropic 직접 vs AWS·GCP·Azure) |
| 2️⃣ | **설정 전달 방식** | 정책을 직원 PC에 어떻게 배포할지 |
| 3️⃣ | **정책 내용 결정** | 어떤 도구·명령어를 허용하거나 막을지 |
| 4️⃣ | **사용량 파악 방법** | 팀원이 얼마나 쓰는지, 비용은 얼마인지 |
| 5️⃣ | **데이터 처리 방침** | 코드와 프롬프트가 어디에 저장되는지 |

---

## 1️⃣ API 공급자 선택

> 🍱 **비유**: 전기 요금을 한전에서 직접 낼지, 건물 관리비에 포함시킬지 결정하는 것과 비슷해요.

| 공급자 | 이럴 때 선택하세요 |
|:---|:---|
| **Claude Teams / Enterprise** | 클로드 웹(claude.ai)과 Claude Code를 1인당 월정액으로 묶어 쓰고 싶을 때. **가장 간단한 기본 추천** |
| **Claude Console** | API 호출 횟수만큼 pay-as-you-go로 결제하거나, 개발팀이 직접 API를 씁쓸 때 |
| **Amazon Bedrock** | 이미 AWS 계약이 있고, AWS 보안·청구 체계를 그대로 쓰고 싶을 때 |
| **Google Vertex AI** | GCP(구글 클라우드) 인프라를 이미 쓰고 있을 때 |
| **Microsoft Foundry** | Azure 환경에서 모든 것을 관리하고 싶을 때 |

**SSO(싱글 사인온)·SCIM(계정 자동 관리)·좌석 배정**은 Claude 계정 레벨에서 따로 설정해요. 자세한 건 [Claude Enterprise 관리자 가이드](https://claude.com/resources/tutorials/claude-enterprise-administrator-guide)를 참고하세요.

---

## 2️⃣ 설정 전달 방식

> 🍱 **비유**: 회사 보안 정책을 직원한테 어떻게 전달할지예요. 회사 앱으로 자동으로 밀어줄 수도 있고, PC에 파일로 설치할 수도 있어요.

Claude Code는 아래 **4가지 경로** 중 처음 발견한 것을 정책으로 따릅니다 (우선순위 위에서 아래 순):

| 전달 방식 | 어떻게 배포하나요? | 우선순위 | 지원 OS |
|:---|:---|:---:|:---|
| **서버 관리형** (Server-managed) | claude.ai 관리자 콘솔에서 버튼 클릭 | 최고 | 전체 |
| **plist / 레지스트리** | macOS `com.anthropic.claudecode` plist, Windows `HKLM\SOFTWARE\Policies\ClaudeCode` | 높음 | macOS, Windows |
| **파일 기반** | 각 OS별 지정 폴더에 `managed-settings.json` 파일 배치 | 중간 | 전체 |
| **Windows 사용자 레지스트리** | `HKCU\SOFTWARE\Policies\ClaudeCode` | 낮음 | Windows 전용 |

📌 **서버 관리형**은 인증 시점에 자동 적용되고 매 시간 갱신돼요. 단, **Teams 또는 Enterprise 플랜**에서만 사용 가능합니다.

📌 **WSL(Windows Subsystem for Linux)** 사용자는 기본적으로 Linux 경로만 읽어요. Windows 정책까지 함께 적용하려면 설정에 `wslInheritsWindowsSettings: true`를 추가하세요.

> ⚠️ **중요**: 관리자가 설정한 값은 개발자 로컬 설정보다 항상 우선합니다. 다만 `permissions.allow`처럼 배열로 된 설정은 모든 소스에서 **합쳐져서** 적용돼요(교체가 아닌 추가).

---

## 3️⃣ 정책 내용 결정

> 🍱 **비유**: 회사 PC에 어떤 프로그램을 설치하거나 막을지 정하는 것처럼, Claude Code가 어떤 도구와 명령어를 쓸 수 있는지 규칙을 만드는 거예요.

| 제어 항목 | 무엇을 하나요? | 주요 설정 키 |
|:---|:---|:---|
| **권한 규칙** | 특정 도구·명령어 허용/묻기/차단 | `permissions.allow`, `permissions.deny` |
| **권한 잠금** | 관리자 규칙만 적용 + `--dangerously-skip-permissions` 비활성화 | `allowManagedPermissionRulesOnly` |
| **샌드박스** | OS 수준에서 파일시스템·네트워크 격리 | `sandbox.enabled`, `sandbox.network.allowedDomains` |
| **조직 전체 CLAUDE.md** | 모든 세션에 공통 지침 자동 로드 | managed policy 경로의 파일 |
| **MCP 서버 제한** | 사용 가능한 외부 MCP 서버 지정 | `allowedMcpServers`, `deniedMcpServers` |
| **플러그인 마켓플레이스 제한** | 설치 가능한 플러그인 출처 제한 | `strictKnownMarketplaces`, `blockedMarketplaces` |
| **훅 제한** | 관리자 훅만 실행, HTTP 훅 URL 제한 | `allowManagedHooksOnly` |
| **최소 버전** | 특정 버전 미만 자동 업데이트 차단 | `minimumVersion` |

> 💡 **팁**: `permissions.deny`에서 WebFetch를 막아도, Bash가 허용된 상태라면 `curl`이나 `wget`으로 우회 접근이 가능해요. 완전히 막으려면 **샌드박스**의 네트워크 도메인 허용목록을 함께 사용하세요.

---

## 4️⃣ 사용량 파악 방법

> 🍱 **비유**: 회사 전화 요금 명세서처럼, "누가 얼마나 썼는지" 파악하는 방법을 설정하는 거예요.

| 기능 | 무엇을 볼 수 있나요? | 이용 가능 조건 |
|:---|:---|:---|
| **사용 모니터링** | 세션·도구·토큰 사용량 (OpenTelemetry 내보내기) | 모든 공급자 |
| **애널리틱스 대시보드** | 개인별 지표, 기여 현황, 순위 | Anthropic 플랜 전용 |
| **비용 추적** | 지출 한도·요율 제한·비용 귀속 | Anthropic 플랜 전용 |

Teams·Enterprise 플랜 사용자는 [claude.ai/analytics/claude-code](https://claude.ai/analytics/claude-code)에서 사용량 대시보드를 바로 볼 수 있어요. AWS·GCP·Azure를 쓰는 경우엔 각 클라우드 플랫폼의 비용 관리 도구를 사용하세요.

---

## 5️⃣ 데이터 처리 방침

> 🍱 **비유**: 사무실에서 대화한 내용이 녹음되는지, 얼마나 보관되는지 미리 알고 싶은 것과 같아요.

| 주제 | 핵심 내용 | 참고 문서 |
|:---|:---|:---|
| **데이터 사용 정책** | Teams·Enterprise·API 플랜에서 코드·프롬프트는 학습에 사용되지 않음 | [Data usage](https://code.claude.com/docs/en/data-usage) |
| **제로 데이터 보존 (ZDR)** | 요청 완료 후 아무것도 저장 안 함. Enterprise 전용 | [Zero data retention](https://code.claude.com/docs/en/zero-data-retention) |
| **보안 아키텍처** | 네트워크 모델·암호화·인증·감사 기록 | [Security](https://code.claude.com/docs/en/security) |

요청 단위 감사 로그가 필요하거나 데이터 민감도별 트래픽 분리가 필요하다면, 개발자와 공급자 사이에 **LLM 게이트웨이**를 두는 방법도 있어요. 규제 요구사항·인증 정보는 [Legal and compliance](https://code.claude.com/docs/en/legal-and-compliance)를 확인하세요.

---

## ✅ 설정 확인 방법

모든 설정이 끝났다면, 개발자 PC에서 Claude Code를 열고 `/status`를 실행해보세요.

출력 중 이런 줄이 보이면 성공이에요:

```
Enterprise managed settings (remote)   ← 서버 관리형
Enterprise managed settings (plist)    ← macOS plist
Enterprise managed settings (HKLM)    ← Windows 레지스트리
Enterprise managed settings (file)    ← 파일 기반
```

---

## 🚀 팀원 온보딩 리소스

설정이 완료됐다면, 팀원들에게 이 링크들을 공유하세요:

| 리소스 | 대상 |
|:---|:---|
| [빠른 시작 가이드](/docs/setup/first-run) | 첫 설치부터 첫 실행까지 |
| [자주 쓰는 작업 패턴](https://code.claude.com/docs/en/common-workflows) | 코드 리뷰·리팩토링·디버깅 일상 패턴 |
| [Claude 101](https://anthropic.skilljar.com/claude-101) | Anthropic 공식 자기 학습 강의 |
| [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) | Anthropic 공식 실습 강의 |

**자주 발생하는 로그인 문제** 해결 방법:

- `/logout` → `/login` 으로 계정 전환
- `claude update` 실행 후 엔터프라이즈 인증 옵션이 보이는지 확인
- 터미널 재시작 후 재시도

> "아직 조직에 추가되지 않았습니다" 오류가 나오면 관리자 콘솔에서 해당 직원의 Claude Code 좌석을 확인하세요.

---

<div class="note-star">
📌 <strong>다음 단계</strong>
<br />• <a href="https://code.claude.com/docs/en/server-managed-settings">서버 관리형 설정 상세</a> — 관리자 콘솔에서 정책 배포하기
<br />• <a href="https://code.claude.com/docs/en/settings">설정 전체 레퍼런스</a> — 모든 설정 키, 파일 위치, 우선순위 규칙
<br />• <a href="https://code.claude.com/docs/en/amazon-bedrock">Bedrock</a> · <a href="https://code.claude.com/docs/en/google-vertex-ai">Vertex AI</a> · <a href="https://code.claude.com/docs/en/microsoft-foundry">Foundry</a> — 클라우드 공급자별 설정
</div>
