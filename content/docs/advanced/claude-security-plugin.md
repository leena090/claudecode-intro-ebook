---
title: "[공] Claude Security 플러그인 — 에이전트 팀이 취약점 스캔"
description: "Claude Security 플러그인을 설치하면 멀티 에이전트가 코드베이스를 스캔해서 취약점 리포트와 패치 초안까지 제공해요. /claude-security 명령어 한 번으로 시작하는 방법을 안내합니다."
tags: ["자동생성", "보안", "취약점", "claude-security", "플러그인", "멀티 에이전트", "2026-07"]
category: "advanced"
order: 28
lastUpdated: "2026-08-11"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong>: <a href="https://code.claude.com/docs/en/claude-security">claude-security</a> — 2026년 Week 30 (Jul 20-24) 출시<br />
★ 요구사항: Claude Code v2.1.154+, 유료 플랜, Python 3.9.6+, Dynamic workflows 활성화 (Pro는 <code>/config</code>에서 켜야 함)<br />
★ 이 플러그인은 로컬에서 직접 실행해요. <strong>유료 관리형 서비스</strong>(Enterprise 전용 claude.com/product/claude-security)와 다릅니다.
</div>

## Claude Security 플러그인이 뭔가요?

내 Claude Code 세션 안에서 실행되는 **멀티 에이전트 취약점 스캐너**예요. 여러 Claude 에이전트가 팀을 이뤄 코드베이스를 분석하고, 독립적으로 결과를 검토한 뒤, 수정 패치까지 제안해줍니다.

> 🍱 **비유로 설명하면**: 경험 많은 보안 전문가 팀이 내 코드를 나눠서 검토하고, 서로 결과를 교차 검토한 뒤 "이 부분이 위험하고, 이렇게 고치면 돼요"라고 보고서와 수정안을 제출하는 거예요.

---

## 언제 쓰면 좋아요?

### ✅ 이럴 때 유용해요

- PR 병합 전에 한 번 딥 스캔하고 싶을 때
- 레거시 코드에 보안 취약점이 숨어 있을지 걱정될 때
- 특정 커밋이나 브랜치의 변경사항만 집중해서 검토할 때
- 정기적인 보안 감사를 자동화하고 싶을 때

### ❌ 이걸로는 안 돼요

- **실시간 코드 작성 중 가이드**: 작성 중 가이드는 [security guidance 플러그인](/docs/config/permissions-guide) 사용
- **PR 자동 리뷰**: PR 리뷰는 [Code Review](/docs/advanced/git-workflow) 사용
- **내 기존 SAST 도구 대체**: 정적 분석 도구와 함께 사용하는 보완재예요

---

## 설치 방법

```bash
# Claude Code 터미널에서
/plugin install claude-security@claude-plugins-official
```

설치 후 메시지를 확인하세요:
- `Plugin is now active.` → 바로 사용 가능
- `Run /reload-plugins to activate.` → 아래 명령어 한 번 더

```bash
/reload-plugins
```

<div class="note-star">
★ "Marketplace not found" 오류가 나면:<br />
<code>/plugin marketplace add anthropics/claude-plugins-official</code><br />
명령어로 마켓플레이스 먼저 등록 후 재설치하세요.
</div>

---

## 사용 방법 — 전체 흐름

### 1단계: 스캔 시작

```bash
/claude-security
```

메뉴가 열리면 **"Scan codebase"** 선택.

### 2단계: 스캔 범위 선택

플러그인이 리포지토리를 먼저 읽고 스캔 범위와 예상 비용을 알려줘요:

| 선택지 | 설명 |
|---|---|
| 전체 리포지토리 | 모든 파일 분석 |
| 포커스 영역 | API 레이어, 인증 코드 등 특정 부분 |
| "잘 모르겠어요" | 플러그인이 리포 크기에 맞는 기본값 선택 |

### 3단계: 확인 후 실행

실행 확인 후 에이전트들이 순차적으로 작업해요:
1. 아키텍처 매핑
2. 위협 모델 구축
3. 취약점 탐색
4. 독립 검토 에이전트가 발견 사항 교차 검증

진행 상황은 `/workflows`에서 확인.

### 4단계: 결과 읽기

스캔 결과는 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장돼요:

```
CLAUDE-SECURITY-20260801-143022/
├── CLAUDE-SECURITY-RESULTS.md       ← 취약점 리포트 (사람이 읽는 형식)
├── CLAUDE-SECURITY-RESULTS.jsonl    ← 취약점 데이터 (기계가 읽는 형식)
└── CLAUDE-SECURITY-REVISION-<커밋>.json  ← 어떤 코드를 스캔했는지 기록
```

> 🍱 **비유**: 스캔 완료 후 "조사 보고서(Results.md)"와 "DB에 저장할 원본 데이터(jsonl)"를 따로 줘요. 보고서는 읽어보고, 데이터는 나중에 자동화에 활용할 수 있어요.

### 5단계: 패치 제안 받기

```bash
/claude-security  # 다시 열고 "Suggest patches" 선택
```

어떤 취약점(F1, F2 등)의 패치를 원하는지 선택하면, 독립 에이전트가 검토한 패치 파일을 만들어줘요.

### 6단계: 패치 적용

패치는 **절대 자동으로 적용되지 않아요**. 내가 확인하고 직접 적용합니다:

```bash
git apply CLAUDE-SECURITY-20260801-143022/patches/F1.patch
```

각 패치를 별도 PR로 올려서 팀 리뷰를 받는 걸 권장해요.

---

## 변경사항만 스캔하기

전체 코드베이스 말고 **특정 변경사항만** 스캔할 수 있어요:

```bash
# 방법 1: 메뉴에서 선택
/claude-security   # "Scan changes" 선택

# 방법 2: 직접 지정
> scan my branch
> scan commit abc1234
> scan PR #42
```

<div class="note-star">
★ 변경사항 스캔은 <strong>커밋된 코드만</strong> 봐요. 아직 커밋 안 한 수정은 먼저 커밋하거나 stash하세요.<br />
★ GitHub CLI(`gh`)가 로그인된 상태여야 오픈 PR 목록이 보여요.
</div>

---

## 보안 계층 비교

Claude Code의 보안 도구들은 각자 역할이 달라요:

| 단계 | 도구 | 역할 |
|---|---|---|
| 코드 작성 중 | Security guidance plugin | 작성하는 코드에서 취약점 실시간 안내 |
| 브랜치 단일 검토 | `/security-review` | 현재 브랜치 1회 빠른 보안 검토 |
| **딥 스캔 (온디맨드)** | **Claude Security 플러그인** | 멀티 에이전트 심층 스캔 + 패치 제안 |
| PR 리뷰 | Code Review | PR 전체 컨텍스트로 보안·정확성 검토 |
| 관리형 서비스 | Claude Security (Enterprise) | 연결된 리포를 지속 모니터링 |

---

## 주의사항

1. **비용**: 대형 리포 전체 스캔은 토큰이 많이 소모돼요. 처음엔 포커스 영역부터 시작해보세요.
2. **시간**: 스캔 중 Claude Code 창을 열어둬야 해요.
3. **비결정적**: 같은 코드를 두 번 스캔해도 결과가 다를 수 있어요. 정기적으로 실행하고 리비전 파일로 이력을 관리하세요.
4. **Fable 5 경고**: Fable 5 모델 사용 중 사이버 보안 안전 분류기가 일부 내용을 차단할 수 있어요. 차단 시 Opus로 자동 다운그레이드 → 스캔은 계속 진행됩니다.

---

## 더 알아보기

- [공식 문서 — Claude Security 플러그인](https://code.claude.com/docs/en/claude-security)
- [플러그인 설치 방법](/docs/config/skills-guide) — 플러그인 마켓플레이스 안내
- [Dynamic Workflows](/docs/advanced/dynamic-workflows) — 멀티 에이전트 워크플로우 기반 기술
- [W30 업데이트 노트](/docs/next/whats-new-w30-w32) — 이번 주 다른 기능들
