---
title: "[공] 셀프 호스팅 샌드박스 — 내 서버에 클로드 실행 환경 직접 만들기"
description: "Claude Code가 실행되는 샌드박스 환경을 내 서버(온프레미스 또는 클라우드 VM)에 직접 구축하는 방법. 보안이 중요한 기업 환경에 적합해요."
tags: ["자동생성", "샌드박스", "셀프호스팅", "보안", "엔터프라이즈", "고급"]
category: "advanced"
order: 27
lastUpdated: "2026-11-14"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — <a href="https://code.claude.com/docs/en/self-hosted-environments">code.claude.com/docs/en/self-hosted-environments</a> 등을 바탕으로 작성됐어요.
</div>

## 셀프 호스팅 샌드박스란 무엇인가요?

Claude Code가 코드를 실행할 때는 **안전한 격리 환경(샌드박스)**이 필요해요. 보통은 Anthropic이 제공하는 클라우드 샌드박스를 쓰지만, 보안 정책이나 규제로 인해 **데이터가 외부 서버로 나가면 안 되는 경우**가 있어요.

이럴 때 **셀프 호스팅 샌드박스**를 사용해요.

> 🏭 **비유로 설명하면**: 편의점 셀프 계산대 vs 직접 만든 계산대예요. 편의점 계산대(클라우드)는 편리하지만 내 가게가 아니에요. 반면 내가 직접 설치한 계산대(셀프 호스팅)는 복잡하지만 완전히 내 통제 아래 있죠.

---

## 어떤 조직에 필요한가요?

| 상황 | 설명 |
|---|---|
| 🏥 의료·금융 기업 | 환자 정보·거래 데이터가 외부로 나가면 안 되는 규제 환경 |
| 🏛️ 공공기관 | 보안 등급 데이터를 내부망에서만 처리해야 하는 경우 |
| 🔒 보안 중시 기업 | 소스코드 유출 방지가 최우선인 환경 |
| 🌐 인터넷 차단 환경 | 외부 인터넷 접속이 제한된 개발 환경 |

---

## 셀프 호스팅 환경 구성 요소

공식 문서는 셀프 호스팅을 여러 단계로 나눠 설명해요.

### 1️⃣ 기본 설정

```
self-hosted-environments         → 개요 및 개념
self-hosted-environments-quickstart → 빠른 시작 가이드
self-hosted-environments-deploy  → 배포 방법
```

### 2️⃣ 세부 설정

```
self-hosted-environments-configuration → 설정 옵션
self-hosted-environments-testing       → 테스트 방법
self-hosted-environments-reference     → 레퍼런스
self-hosted-environments-identity      → 인증·신원 관리
```

> 📌 각 항목의 한국어 세부 가이드는 순차적으로 추가될 예정이에요.

---

## 클라우드 환경 vs 셀프 호스팅 비교

| 항목 | 클라우드 환경 | 셀프 호스팅 |
|---|---|---|
| 설정 난이도 | ⭐ 쉬움 | ⭐⭐⭐⭐ 어려움 |
| 데이터 위치 | Anthropic 클라우드 | 내 서버 |
| 유지보수 | Anthropic 담당 | 내가 담당 |
| 비용 | 사용량 기반 | 서버 비용 |
| 규제 대응 | 제한적 | 완전한 통제 |
| 추천 대상 | 일반 개발자, 소규모 팀 | 대기업, 보안 중시 조직 |

---

## 빠른 시작 흐름

셀프 호스팅을 처음 설정할 때의 일반적인 흐름이에요.

```
1. 요구사항 확인
   └─ Docker/컨테이너 환경 준비
   └─ 네트워크 정책 확인

2. 환경 배포
   └─ self-hosted-environments-deploy 가이드 따르기
   └─ 컨테이너 이미지 설정

3. Claude Code 연결
   └─ 설정 파일에서 샌드박스 엔드포인트 지정
   └─ 인증 설정 (identity)

4. 테스트
   └─ self-hosted-environments-testing 가이드 따르기
```

> ⚠️ **추정 포함** — 정확한 설정 절차는 공식 문서(code.claude.com/docs/en/self-hosted-environments-quickstart)를 직접 확인하세요. 위 흐름은 일반적인 셀프 호스팅 패턴 기반 추정이에요.

---

## 클라우드 환경(Cloud Environments)도 추가됐어요

셀프 호스팅과 별도로, **클라우드 샌드박스 환경**도 공식화됐어요 (`cloud-environments`).

> 🌤️ **비유**: 셀프 호스팅이 "내 땅에 집 짓기"라면, 클라우드 환경은 "건설사에 맡겨 짓기"예요. 클라우드 환경은 Anthropic 또는 AWS/GCP 같은 클라우드 제공자가 관리하는 격리 환경이에요.

---

## 기존 샌드박스 방법과의 관계

이 문서는 기존의 **[샌드박스 환경 비교](../advanced/sandbox-environments)** 문서를 보완해요.

| 방법 | 대상 |
|---|---|
| Docker 샌드박스 | 개인 개발자, 작은 팀 |
| 클라우드 환경 | 클라우드를 쓰는 중소 기업 |
| **셀프 호스팅 환경** | 대기업, 규제 산업 |

---

> **요약**: 셀프 호스팅 샌드박스는 데이터가 외부로 나가면 안 되는 보안 중시 조직을 위한 기능이에요. 2026년 하반기에 공식 문서화됐으며, 의료·금융·공공 분야 기업에 특히 유용해요.
