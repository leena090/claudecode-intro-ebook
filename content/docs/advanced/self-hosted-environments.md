---
title: "[공] 셀프호스팅 환경 — 사내 인프라에서 Claude Code 실행 (공개 베타)"
description: "Claude Code 세션을 Anthropic 클라우드 대신 사내 인프라·네트워크에서 직접 실행하는 Self-hosted environments. 2026년 8월 공개 베타 시작."
tags: ["자동생성", "셀프호스팅", "보안", "엔터프라이즈", "인프라", "베타"]
category: "advanced"
order: 28
lastUpdated: "2026-10-19"
---

<div class="note-star">
★ <strong>공개 베타</strong> (2026-08-07 시작) — 기능·세부 사항 변경될 수 있음<br />
★ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a>
</div>

## 셀프호스팅 환경이란?

**Claude Code 실행 환경(샌드박스)을 Anthropic 서버가 아닌 여러분의 서버·네트워크에 직접 구축하는 기능**입니다.

> 🏢 **비유로 설명하면**: 보통은 카페(Anthropic 클라우드)에서 일하지만, 기업 보안 정책상 카페는 안 되는 경우 회사 사무실(사내 인프라)에 카페와 똑같은 작업 공간을 만드는 거예요. 커피도 있고, Wi-Fi도 있고, Claude도 있지만 — 장소가 사내입니다.

---

## 왜 필요한가요?

### 보안·규정 준수
- 금융, 의료, 공공기관 등 **외부 클라우드 사용 제한** 환경
- 코드·데이터가 사내 네트워크를 벗어나면 안 되는 경우
- 내부 서비스(데이터베이스, API)에 직접 접근해야 하는 경우

### 성능·제어
- 사내 네트워크 속도 활용 (레이턴시 감소)
- 자체 리소스 할당·스케일링 제어
- 내부 개발 도구·CLI와 네이티브 통합

---

## 아키텍처 개요

```
[ 개발자 터미널 / IDE ]
        ↓
[ Claude Code Client ]
        ↓  (Anthropic API - 모델 추론은 여전히 Anthropic)
[ 사내 Self-hosted Environment ]
    ├── 코드 실행 샌드박스
    ├── 내부 서비스 접근
    └── 파일 시스템 / Git
```

> ⚠️ **중요**: 모델 추론(AI 계산) 자체는 Anthropic 서버에서 이루어집니다. 사내에 호스팅되는 것은 **실행 환경(샌드박스)**이지, 모델 자체가 아닙니다.

---

## Cloud environments vs Self-hosted environments

| | Cloud Environments (기존) | Self-hosted Environments (신규) |
|--|--------------------------|--------------------------------|
| 실행 위치 | Anthropic 관리 클라우드 | **사내 인프라** |
| 설정 난이도 | 없음 (자동) | 초기 구축 필요 |
| 내부 서비스 접근 | 제한적 | **직접 접근 가능** |
| 데이터 위치 | Anthropic 클라우드 | **사내 네트워크 내** |
| 적합한 곳 | 개인·스타트업·일반 팀 | 보안 규정이 엄격한 기업 |

---

## 공식 문서 구성 (7개 섹션)

공식 문서가 상세하게 구성되어 있어요:

1. **Overview** — 개념 소개
2. **Quickstart** — 빠른 시작 가이드
3. **Deploy** — 배포 방법
4. **Configuration** — 설정 옵션
5. **Testing** — 테스트 방법
6. **Reference** — 상세 레퍼런스
7. **Identity** — 인증·ID 관리

---

## 시작하려면?

현재 **공개 베타** 단계로, 아래 순서를 권장:

1. [공식 문서 Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart) 확인
2. 팀/Enterprise 플랜 필요 (개인 플랜에서는 지원되지 않을 수 있음 — 확인 요망)
3. Docker 또는 Kubernetes 환경 준비
4. Anthropic의 [셀프호스팅 환경 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy) 따라 배포

> 💡 소규모 개인 개발자라면 일반 Cloud environments(기본값)로 충분합니다. 셀프호스팅은 보안·규정 요구사항이 있는 **기업 환경** 전용이에요.

---

## 관련 기능과 함께 보기

- [Sandbox Environments](/docs/advanced/sandbox-environments) — 기본 샌드박스 실행 환경
- [Sandbox Security](/docs/advanced/sandbox-security) — 보안 설정
- [GitHub Actions 연동](/docs/advanced/github-actions) — CI/CD 파이프라인에서 Claude Code 활용

---

## 참고 링크

- [공식 Self-hosted environments 개요](https://code.claude.com/docs/en/self-hosted-environments) (code.claude.com)
- [배포 가이드](https://code.claude.com/docs/en/self-hosted-environments-deploy)
- [설정 레퍼런스](https://code.claude.com/docs/en/self-hosted-environments-reference)
