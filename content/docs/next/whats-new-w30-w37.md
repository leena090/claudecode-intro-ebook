---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Self-hosted environments, Auto mode 기본값 전환, Projects 기능 등 2026년 7~9월 주요 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "셀프호스팅", "오토모드", "Projects", "W30~W37"]
category: "next"
order: 19
lastUpdated: "2026-10-22"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용을 한국어로 정리한 것입니다.<br />
★ 마케팅 페이지 확인 기준으로 작성했으며, 각 주차 상세는 추정 포함.
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 | 핵심 |
|---|---|---|
| **W30** | 7/20~7/24 | 안전·정렬 개선, 모델 최신화 |
| **W31** | 7/27~7/31 | **Self-hosted environments** 공개 베타 |
| **W32** | 8/3~8/7 | **Auto mode 기본값 전환** (Pro/Max/Team) |
| **W33** | 8/10~8/14 | 과학자 지원 확대, 평가 연구 |
| **W34** | 8/17~8/21 | 안전장치 개선, MHS 프리뷰 |
| **W35** | 8/24~8/28 | 후속 안전 점검 보고, 과학자 무료 플랜 |
| **W36** | 8/31~9/4 | Enterprise Frontier Safeguards (EFS) |
| **W37** | 9/7~9/11 | **Projects** — 여러 에이전트 그룹 관리 |

---

## W30~W31 · 7월 20일~31일 — 셀프 호스팅 공개 베타 🏠

### 🖥️ Self-hosted Environments — 내 서버에서 Claude Code 실행

<div class="note-star">
★ 공식 블로그 발표: Aug 6, 2026 (W31 해당 주 기준)
</div>

이제 Claude Code 세션을 **내 회사 서버(인프라)** 위에서 직접 실행할 수 있어요!

| 항목 | 내용 |
|---|---|
| **적용 대상** | 팀/엔터프라이즈 플랜 |
| **상태** | 공개 베타 |
| **핵심 장점** | 사내 네트워크 안에서, 내부 서비스 옆에서 실행 |

```bash
# 셀프 호스팅 환경 시작 (공식 문서 기준)
# code.claude.com/docs/en/sandbox-environments 참고
```

> 🍱 **비유로 설명하면**: 지금까지 Claude Code를 쓰려면 "외부 클라우드 식당"에서 밥을 먹었다면, 이제는 **우리 회사 구내식당에서** 같은 메뉴를 먹을 수 있게 된 거예요. 데이터가 밖으로 안 나가요!

**왜 중요할까요?**
- 🔒 **보안**: 민감한 코드가 외부 서버로 전송되지 않음
- 🔗 **내부 연결**: 사내 데이터베이스, 서비스에 직접 접근
- 📜 **컴플라이언스**: 데이터 규정 준수가 필요한 기업에 필수

---

## W32 · 8월 3~7일 — Auto Mode가 기본값으로 🤖

### 🔄 Auto Mode by Default — 이제 켜지 않아도 기본으로

<div class="note-star">
★ 공식 블로그 발표: Aug 7, 2026
</div>

**Pro, Max, Team 플랜** 사용자라면 이제 Claude Code가 기본적으로 **Auto mode(오토 모드)**로 실행돼요!

| 이전 | 이후 |
|---|---|
| 기본: 일반 모드, 오토 모드 수동 켜기 | **기본: Auto mode** |
| 매번 명령어 승인 필요 | 긴 작업도 자동 진행 (안전 분류기 작동) |

> 🍱 **비유로 설명하면**: 이전엔 "자동 기어"를 매번 선택해야 했다면, 이제는 차 시동 걸면 **자동으로 자동 기어**로 시작하는 거예요.

**Auto mode란?**
- Claude Code가 여러 단계 작업을 **중간 중간 허락 없이** 자동 처리
- 백그라운드 **안전 분류기(safety classifier)**가 위험한 명령어 감지
- 오래 걸리는 리팩터링, 마이그레이션에 특히 유용

```bash
# 수동으로 돌아가고 싶을 때
/mode normal

# 오토 모드 확인
/status
```

---

## W33~W35 · 8월 10~28일 — 안전·과학 집중 주간

### 🔬 과학자 무료 플랜 (Aug 27)

검증된 연구자라면 Claude를 **무료**로 사용할 수 있는 프로그램이 열렸어요.

- **대상**: 주요 연구기관 PI(Principal Investigator)
- **혜택**: Team 구독 + 연구팀원 Standard 시트 무료 (최대 1년)
- **Premium 시트**: $15/월로 이용 가능

> 🍱 **비유로 설명하면**: 연구자 ID카드를 보여주면 도서관 이용이 무료인 것처럼, 검증된 연구자에게 Claude를 무료로 제공하는 거예요.

### 🛡️ 안전·정렬 강화 (W33~W35)

이 기간에는 Anthropic이 내부 안전 개선에 집중했어요.

- **증류 공격 방어 90%+ 감소**: 모델 능력을 불법 복제하는 공격 차단
- **METR 독립 평가**: 외부 AI 안전 전문 기관과 협력해 모델 안전성 평가
- **모델 하드웨어 표준(MHS) 프리뷰**: AI 에이전트가 물리 장치를 안전하게 작동하는 규격 연구

---

## W36 · 8월 31일~9월 4일 — 엔터프라이즈 안전장치

### 🏢 Enterprise Frontier Safeguards (EFS)

대기업을 위한 새로운 보안 + 안전 솔루션이 나왔어요.

| 특징 | 내용 |
|---|---|
| **데이터 저장** | 고객 클라우드 인프라 (Anthropic 서버 아님) |
| **ZDR 결합** | Zero Data Retention + 최첨단 오용 감지 |
| **대상** | 엔터프라이즈 고객 |

> 🍱 **비유로 설명하면**: 은행 금고처럼 데이터는 고객 건물 안에 있는데, 경비 시스템(안전 분류기)은 Anthropic이 제공하는 방식이에요.

---

## W37 · 9월 7~11일 — Projects 출시 ⭐

### 🗂️ Projects — 여러 에이전트를 그룹으로 관리

<div class="note-star">
★ 공식 블로그 발표: Sep 17, 2026 (W38 발표, W37에 일부 프리뷰)
</div>

**Projects** 기능으로 관련된 코딩 세션들을 묶어서 관리하고, **여러 Claude 에이전트를 동시에 감독**할 수 있어요!

```
📁 Project: e-commerce 리팩터링
├── 🤖 에이전트 1: 결제 모듈 수정 중
├── 🤖 에이전트 2: 상품 API 테스트 실행
└── 🤖 에이전트 3: 데이터베이스 마이그레이션
```

| 이전 | Projects 이후 |
|---|---|
| 세션이 하나씩 독립 실행 | **관련 세션 묶어서 관리** |
| 여러 에이전트 추적 어려움 | **한 화면에서 전체 감독** |

> 🍱 **비유로 설명하면**: 이전엔 여러 직원(에이전트)이 따로따로 일하는 모습을 일일이 확인해야 했다면, 이제는 **프로젝트 관리 보드(칸반 보드처럼)** 하나로 전체 진행 상황을 한눈에 볼 수 있어요.

**사용 방법 (Claude Code Desktop)**:
```bash
# Projects는 Claude Code Desktop App에서 사용 가능
# 왼쪽 사이드바 > New Project
```

---

## 이 기간 중 가장 중요한 3가지

| 우선순위 | 기능 | 이유 |
|---|---|---|
| ⭐⭐⭐ | **Auto mode 기본 전환** | 대부분 사용자에게 즉시 영향 |
| ⭐⭐⭐ | **Projects** | 복잡한 멀티에이전트 작업 혁신 |
| ⭐⭐ | **Self-hosted environments** | 기업 보안·컴플라이언스 해결 |

---

<div class="note-star">
★ 더 자세한 내용은 공식 What's New 페이지를 참고하세요:
<br />→ <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a>
<br />W30~W37: code.claude.com/docs/en/whats-new/2026-w30 ~ 2026-w37
</div>
