---
title: "[공] Claude Security 플러그인 — AI 보안 취약점 스캐너"
description: "코드베이스 전체를 다중 에이전트가 순찰하며 보안 취약점을 찾아주는 공식 플러그인. /claude-security 명령어 하나로 시작"
tags: ["자동생성", "보안", "security", "플러그인", "취약점", "multi-agent", "claude-security"]
category: "advanced"
order: 27
lastUpdated: "2026-08-06"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ <strong>요구 조건</strong>: Claude Code v2.1.154 이상, 유료 플랜, Python 3.9.6 이상
</div>

## Claude Security 플러그인이란?

코드베이스를 **다수의 AI 에이전트가 팀을 이뤄 순찰하며 보안 취약점을 찾아주는 공식 플러그인**이에요.

> 🕵️ **비유로 설명하면**: 큰 아파트 단지를 경비원 한 명이 혼자 순찰하는 게 아니라, 팀 전체가 각자 구역을 맡아 순찰하는 것과 같아요. 한 팀원이 이상한 걸 발견하면 다른 팀원이 독립적으로 검증까지 해줍니다. 오탐(false alarm)을 최소화하는 거죠.

내부적으로 에이전트들이 이렇게 움직입니다:
1. **아키텍처 맵핑** — 전체 코드 구조 파악
2. **위협 모델 구성** — 어떤 공격이 가능한지 정리
3. **취약점 탐색** — 각 에이전트가 다른 영역 집중 수색
4. **독립 검증** — 발견된 취약점을 별도 에이전트가 재확인
5. **보고서 작성** — 검증된 것만 최종 보고서에 포함

---

## 다른 보안 도구와 뭐가 다른가요?

Claude Code에는 보안 관련 도구가 여럿 있어요. 어떤 걸 써야 할지 비교해볼게요:

| 도구 | 언제 쓰나요? | 특징 |
|------|------------|------|
| **Security guidance 플러그인** | 코드 작성 중 실시간 | Claude가 코드를 쓸 때 즉시 체크 |
| **`/security-review`** | 현재 브랜치 한 번 검토 | 단일 패스, 빠름 |
| **Claude Security 플러그인** | 깊이 있는 전체 스캔 | 다중 에이전트, 독립 검증 포함 |
| **Code Review** | PR(풀 리퀘스트) 시점 | Team·Enterprise 플랜 |
| **Claude Security (관리형)** | 저장소 지속 모니터링 | Enterprise 플랜, 외부 서비스 |

> 💡 Claude Security 플러그인은 "온디맨드 심층 스캔 레이어"예요. 기존 도구들을 대체하는 게 아니라 함께 씁니다.

---

## 설치 방법

Claude Code 세션에서 아래 명령어를 실행하세요:

```
/plugin install claude-security@claude-plugins-official
```

설치 후 활성화가 필요하면:

```
/reload-plugins
```

### 요구 조건

- Claude Code **v2.1.154** 이상
- **유료 플랜** (다이나믹 워크플로우 기능 필요)
- Python **3.9.6** 이상 (`python3 --version`으로 확인)
- macOS / Linux / Windows

> 💡 Pro 플랜 사용자라면 `/config`에서 **Dynamic workflows**를 먼저 켜야 해요.

---

## 사용 방법

### 전체 코드베이스 스캔

```
/claude-security
```

메뉴에서 **Scan codebase**를 선택하면 됩니다.

단계는 이렇게 진행돼요:
1. `/claude-security` 실행 → 메뉴에서 **Scan codebase** 선택
2. 스캔 범위 선택 (전체 또는 특정 영역)
3. 실행 확인 (토큰 사용 알림 포함)
4. 스캔 진행 중 → `/workflows`에서 진행 상황 확인 가능
5. 결과 보고서가 `CLAUDE-SECURITY-<timestamp>/` 폴더에 저장됨
6. 원하는 취약점에 대해 패치 생성 요청

### 변경 사항만 스캔 (브랜치 diff)

PR 병합 전 내 브랜치 변경사항만 빠르게 확인하고 싶을 때:

```
/claude-security scan my branch
```

또는

```
"main 브랜치와 비교해서 내 변경사항만 보안 검토해줘"
```

### 자동 모드 권장

> 💡 스캔 중 Claude가 파일을 읽거나 명령을 실행할 때마다 허가 요청이 뜨면 번거로워요. **Auto 모드**를 켜두면 스캔이 더 원활하게 진행됩니다. 플러그인도 시작 시 이를 안내해줍니다.

---

## 결과 보고서 구조

스캔이 완료되면 저장소 내에 이런 구조로 결과가 저장돼요:

```
CLAUDE-SECURITY-20260806-143022/
├── CLAUDE-SECURITY-RESULTS.md        ← 사람이 읽는 보고서
├── CLAUDE-SECURITY-RESULTS.jsonl     ← 기계가 읽는 데이터
├── CLAUDE-SECURITY-REVISION-abc.json ← 어떤 커밋을 스캔했는지
└── patches/                          ← 패치 파일들 (수정 제안)
    ├── F1.patch
    └── F2.patch
```

각 취약점에는 **ID**(F1, F2, ...), **영향도**, **악용 시나리오**, **심각도**, **신뢰도**, **권고 조치**가 포함돼요.

> 🔒 이 폴더에는 자체 `.gitignore`가 포함되어 있어서, 실수로 `git add`를 해도 보고서가 커밋에 포함되지 않아요. 감사 기록용으로 남기고 싶다면 `.gitignore` 파일만 삭제하면 됩니다.

---

## 취약점 패치 생성

취약점을 발견했다면 Claude에게 패치를 만들어달라고 할 수 있어요:

```
/claude-security
```

메뉴에서 **Suggest patches** 선택 → 어떤 취약점(F1, F2 ...)을 수정할지 골라요.

### 중요한 점: 패치는 자동 적용되지 않아요!

패치 파일이 생성되면, 직접 검토 후 적용해야 합니다:

```bash
git apply CLAUDE-SECURITY-20260806/patches/F1.patch
```

각 패치는 독립적인 PR로 올리는 걸 권장해요. 그래야 리뷰와 테스트가 제대로 이뤄집니다.

> 🛡️ 모든 패치는 **독립 에이전트가 검토**한 후에만 제공됩니다. 취약점 하나만 수정하고, 새 취약점을 만들지 않는지 확인한 후에 패치가 전달돼요.

---

## 알아두면 좋은 점

- ⏱️ 스캔은 **시간이 걸려요** — 전체 저장소 스캔은 수 분 소요 가능
- 💰 **토큰 사용** — Dynamic workflows를 사용하므로 의미 있는 양의 토큰 소비
- 🔁 **비결정적 결과** — 같은 코드를 두 번 스캔해도 다른 취약점이 나올 수 있어요 (AI 특성상 정상)
- 🚩 Fable 5 모델 사용 시 사이버보안 안전장치 때문에 일부 작업이 Opus로 자동 전환될 수 있음 (스캔은 정상 완료)
- 📍 대형 저장소는 **영역별로 나눠서** 스캔하는 게 효율적이에요

---

## 관련 문서

- [보안 가이던스 플러그인](/docs/en/security-guidance) — 코드 작성 중 실시간 체크
- [Code Review](/docs/en/code-review) — PR 단위 에이전트 리뷰
- [Claude Security 관리형 서비스](https://claude.com/product/claude-security) — Enterprise용 상시 모니터링
- [Dynamic Workflows](/docs/en/workflows) — 다중 에이전트 실행 기반 기술
