---
title: "[공] 자체 호스팅 환경 — 회사 내부망에서 Claude Code 돌리기"
description: "2026년 8월 공개 베타로 출시된 자체 호스팅 환경(Self-hosted Environments)으로 Claude Code 세션을 내 서버에서 직접 실행하는 방법"
tags: ["자동생성", "self-hosted", "자체호스팅", "내부망", "enterprise", "보안", "인프라", "공개베타"]
category: "advanced"
order: 27
lastUpdated: "2026-10-13"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a><br />
★ <strong>공개 베타</strong>: 2026년 8월 7일 공식 발표 (마케팅 페이지 기준)<br />
★ <strong>대상</strong>: 기업용(Team/Enterprise) 플랜 — 내부망 보안이 필요한 팀
</div>

## 자체 호스팅 환경이 뭔가요?

**Claude Code 세션을 Anthropic 클라우드가 아닌 내 회사 서버에서 직접 실행**하는 기능이에요.

> 🏢 **비유로 설명하면**: 은행 ATM 기기를 생각해보세요.
> 일반 Claude Code는 은행(Anthropic)에서 모든 계산을 처리하는 것이라면,  
> **자체 호스팅 환경**은 내 지점(회사 서버)에서 직접 현금을 관리하는 것과 같아요.  
> 외부로 데이터가 나가지 않고, 내부 시스템과 바로 연결돼요.

### 왜 필요한가요?

| 일반 Claude Code | 자체 호스팅 환경 |
|-----------------|-----------------|
| Anthropic 클라우드에서 실행 | **회사 내 서버**에서 실행 |
| 외부 네트워크 필요 | **인트라넷(내부망)** 안에서 실행 가능 |
| 내부 DB·서비스 접근 제한 | **내부 서비스 바로 옆**에서 실행 |
| 범용 보안 | 회사 **보안 정책 완전 적용** |

---

## 어떤 팀에 필요한가요?

✅ **이런 상황이면 자체 호스팅이 유용해요**:

- 금융·의료·법률 등 **데이터가 외부로 나가면 안 되는** 업계
- 회사 내부 DB, 레거시 API에 Claude Code가 **직접 접근**해야 할 때
- 보안 감사(audit)를 위해 **모든 실행 내역을 내부에서 관리**해야 할 때
- 인터넷 연결 없이 **에어갭(air-gap) 환경**에서 AI를 써야 할 때

---

## 핵심 기능

공식 문서 기준으로 자체 호스팅 환경은 다음을 지원해요:

| 기능 | 설명 |
|------|------|
| **격리 실행** | 회사 방화벽 안에서만 세션 동작 |
| **내부 서비스 연결** | 내부 API, DB, 코드 저장소에 직접 접근 |
| **신원 관리** | 회사 SSO·IAM(아이덴티티 관리) 연동 |
| **실행 환경 설정** | 컨테이너 이미지, 리소스 할당 커스텀 |
| **테스트 환경** | 배포 전 자체 인프라에서 충분히 검증 |

---

## 관련 공식 문서 구조

이 기능은 공식 문서가 여러 개로 세분화돼 있어요:

```
self-hosted-environments          ← 개요
  ├── quickstart                  ← 빠른 시작
  ├── deploy                      ← 배포 방법
  ├── configuration               ← 환경 설정
  ├── testing                     ← 테스트
  ├── reference                   ← 레퍼런스
  └── identity                    ← 신원(인증) 관리
```

→ 자세한 내용은 [공식 문서](https://code.claude.com/docs/en/self-hosted-environments)에서 확인하세요.

---

## 다른 환경 옵션과 비교

| 옵션 | 실행 위치 | 내부망 | 보안 수준 | 대상 |
|------|----------|--------|----------|------|
| **기본 Claude Code** | Anthropic 클라우드 | ❌ | 표준 | 개인·소규모 팀 |
| **Cloud Environments** | 클라우드(격리된) | △ | 높음 | 중규모 팀 |
| **자체 호스팅** | **내 서버** | ✅ | **최고** | 기업·보안 민감 팀 |

---

## 시작하기 전 체크리스트

- [ ] Team 또는 Enterprise 플랜 가입 여부 확인
- [ ] 내부 서버 or 프라이빗 클라우드(VPC) 준비
- [ ] 컨테이너 실행 환경(Docker/Kubernetes) 설치 여부 확인
- [ ] 보안팀과 인바운드/아웃바운드 정책 협의

> 💡 **입문자 팁**: 개인 Pro 요금제나 소규모 팀이라면 일반 Claude Code로 충분해요. 자체 호스팅 환경은 데이터 보안 요구사항이 엄격한 기업에 특화된 기능이에요.

---

## 요약

- 🔒 **자체 호스팅 환경** = Claude Code를 회사 내 서버에서 직접 실행
- 📅 **2026년 8월 7일** 공개 베타 출시 (공식 발표 기준)
- 🏢 **Team/Enterprise 플랜** 대상, 내부망·보안 민감 환경에 최적
- 📚 공식 문서: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)
