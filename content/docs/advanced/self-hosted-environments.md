---
title: "[공] 자체 호스팅 환경 — 내 서버에서 Claude Code 세션 실행하기"
description: "Claude Code 세션을 자체 인프라, 내부 네트워크, 사내 서비스 옆에서 직접 실행할 수 있는 Self-hosted Environments 기능 (2026년 8월 공개 베타)."
tags: ["자동생성", "self-hosted", "보안", "인프라", "엔터프라이즈", "2026"]
category: "advanced"
order: 37
lastUpdated: "2026-10-29"
---

<div class="note-star">
★ <strong>공개 베타(Public Beta)</strong>: 2026년 8월 6일 공개 (공식 발표 기준)<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 자체 호스팅 환경이란?

**Claude Code 세션을 Anthropic 클라우드가 아닌 자체 인프라(내 서버, 사내 네트워크) 안에서 실행하는 기능**입니다.

> 🏢 **비유로 설명하면**: 카페에서 일하던 직원을 우리 회사 사무실로 데려와서 일하게 하는 거예요. 외부 카페(Anthropic 클라우드)에서 일할 때는 회사 내부망에 접근하기 어렵지만, 사무실(내 서버)에 오면 내부 시스템에 바로 연결할 수 있습니다.

---

## 왜 필요한가요?

| 상황 | 기존 클라우드 환경 | 자체 호스팅 |
|------|-------------------|------------|
| 사내 데이터베이스 직접 접근 | ❌ 어려움 (VPN 필요 등) | ✅ 내부망에서 바로 접근 |
| 엄격한 보안 정책 (금융·의료·공공) | ❌ 외부 클라우드 허용 불가 | ✅ 내 인프라에서만 실행 |
| 사내 서비스(Jenkins, Jira 등) 연동 | ❌ 외부 접근 제한 | ✅ 네트워크 내에서 자유롭게 |
| 데이터 잔류 규정 (Data Residency) | ❌ 해외 서버 문제 | ✅ 지정 지역/서버에서만 처리 |

---

## 어떻게 동작하나요?

```
내부 네트워크
├── Claude Code 세션 (내 서버에서 실행)
│   ├── 🔗 사내 DB에 직접 연결
│   ├── 🔗 내부 API 서버에 직접 연결
│   └── 🔗 Jenkins, GitLab 등 내부 도구와 연동
│
└── 모델 API 요청만 Anthropic으로 나감
    (코드·데이터는 내부에 남음)
```

> 💡 **핵심**: 세션 실행 환경(내 코드, 파일, 실행 컨텍스트)은 내 서버에 남고, AI 추론 요청만 Anthropic API로 나갑니다. 민감한 소스코드가 외부 서버에 올라가지 않아요.

---

## 어떤 조직에 맞나요?

✅ **적합한 경우**
- 금융·의료·공공기관 등 **데이터 외부 유출이 엄격히 제한**된 곳
- **사내 VPN 또는 프라이빗 네트워크** 안에서만 개발하는 팀
- **제로 트러스트 보안 정책**을 가진 기업
- 규정상 데이터를 특정 지역 서버에만 저장해야 하는 경우

❌ **굳이 필요 없는 경우**
- 일반 오픈소스 프로젝트나 민감도가 낮은 작업
- 기존 클라우드 환경이 충분한 팀

---

## 설치 개요 (공식 문서 참조)

자세한 단계는 공식 문서 참조를 권장합니다:

1. **환경 준비**: 서버 요구 사항 확인 (docs: `self-hosted-environments-quickstart`)
2. **배포**: Docker / Kubernetes 배포 가이드 (`self-hosted-environments-deploy`)
3. **설정**: 네트워크, 인증, 환경 변수 설정 (`self-hosted-environments-configuration`)
4. **ID 연동**: SSO, SAML 등 인증 시스템 연결 (`self-hosted-environments-identity`)
5. **테스트**: 연결 및 동작 확인 (`self-hosted-environments-testing`)

---

## 주의 사항

> ⚠️ **공개 베타 상태**: 2026년 10월 기준 공개 베타입니다. 프로덕션 사용 전 안정성 확인 권장.  
> ⚠️ **Team·Enterprise 플랜 필요**: 공식 발표 기준. 플랜 요건은 공식 문서 확인 필요.  
> ⚠️ **세부 아키텍처**: 이 문서는 공식 발표·마케팅 페이지 기반으로 작성됐습니다. 상세 구현 방법은 공식 문서를 우선 참고하세요.
