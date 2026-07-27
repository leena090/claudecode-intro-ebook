---
title: "[공] Claude Security 플러그인 — 코드베이스 취약점 자동 스캔"
description: "멀티 에이전트가 코드베이스를 보안 취약점 관점에서 깊이 분석하고, 검증된 발견만 보고서로 정리한 뒤 패치까지 제안하는 플러그인 (Claude Code v2.1.154+, Python 3.9.6+ 필요)"
tags: ["자동생성", "보안", "security", "취약점", "플러그인", "멀티에이전트"]
category: "advanced"
order: 28
lastUpdated: "2026-07-27"
---

<div class="note-star">
★ <strong>[공] 공식 문서 기준</strong> — code.claude.com/docs/en/claude-security. <code>[공]</code><br />
★ <strong>버전 조건</strong>: Claude Code v2.1.154 이상 필요. Pro 플랜은 <code>/config</code>에서 Dynamic workflows 먼저 켜야 해요.
</div>

## Claude Security 플러그인이 뭔가요?

**Claude Security 플러그인**(클로드 시큐리티 플러그인)은 여러 Claude 에이전트가 팀처럼 협력해서 내 코드베이스의 보안 취약점을 찾고, 패치까지 제안하는 도구예요.

> 🍱 **비유로 설명하면**: 건물 보안 점검을 할 때 한 명이 혼자 하는 게 아니라, "구조 전문가 + 잠금장치 전문가 + 배선 전문가"가 각자 다른 눈으로 점검한 뒤, 마지막에 서로 결과를 교차 검증하는 것과 같아요. 그래야 놓치는 게 없죠.

---

## 사전 조건

| 조건 | 내용 |
|------|------|
| Claude Code 버전 | **v2.1.154** 이상 |
| Python | **3.9.6** 이상 (`python3 --version` 확인) |
| OS | Linux · macOS · Windows |
| 플랜 | 유료 플랜 (Pro·Max·Team·Enterprise) |
| Pro 사용자 추가 | `/config` → **Dynamic workflows** 켜기 |
| Git | 변경사항 스캔·패치 적용 시 필요 |

> 💡 Python은 시스템에 이미 설치된 것만 사용 — 별도 라이브러리 설치 없어요.

---

## 설치 방법

Claude Code 세션에서:

```bash
# 플러그인 설치
/plugin install claude-security@claude-plugins-official

# 마켓플레이스 오류 시 먼저 실행
/plugin marketplace add anthropics/claude-plugins-official

# 설치 후 세션에 적용
/reload-plugins
```

설치 완료 후 `/claude-security` 명령어를 사용할 수 있어요.

### 제거 방법

```bash
claude plugin uninstall claude-security
```

---

## 스캔 실행하기 (6단계)

### 1단계: 메뉴 열기

```bash
/claude-security
```

→ **Scan codebase** 선택

### 2단계: 스캔 범위 선택

플러그인이 저장소를 먼저 읽고, 아래 옵션을 제안해요:
- **전체 저장소** — 모든 파일 대상
- **특정 영역** — API 레이어, 인증 코드 등 (대규모 저장소에 추천)
- **잘 모르겠어요** → 자동으로 적합한 범위 선택

### 3단계: 확인 후 실행

> ⚠️ 스캔은 시간이 걸리고 토큰을 상당히 사용해요. Claude Code를 닫으면 안 됩니다. 확인을 눌러야 시작됩니다.

### 4단계: 결과 확인

스캔이 완료되면 저장소에 타임스탬프 폴더가 생성돼요:

```
📁 CLAUDE-SECURITY-2026-07-27T10-30-00/
  ├── CLAUDE-SECURITY-RESULTS.md      # 보고서 (F1, F2... 발견 목록)
  ├── CLAUDE-SECURITY-RESULTS.jsonl   # 기계 읽기 가능한 JSON 형식
  └── CLAUDE-SECURITY-REVISION-abc123.json  # 어떤 커밋 기준 스캔인지 기록
```

각 발견 항목(F1, F2...)에는: **영향도·악용 시나리오·심각도·신뢰도·권고사항**이 담겨 있어요.

### 5단계: 패치 제안 받기

```bash
/claude-security
```

→ **Suggest patches** 선택 → 수정할 항목(F1, F3 등) 선택

```
📁 CLAUDE-SECURITY-2026-07-27T10-30-00/
  └── patches/
      ├── F1.patch
      └── F3.patch
```

### 6단계: 내가 직접 적용

```bash
git apply CLAUDE-SECURITY-2026-07-27T10-30-00/patches/F1.patch
```

> ⚠️ **패치는 절대 자동 적용되지 않아요**. 항상 사람이 검토하고 직접 적용합니다. 패치 하나당 별도 Pull Request로 올리는 걸 권장해요.

---

## 변경사항만 스캔하기

전체가 아니라 내 브랜치·PR·특정 커밋만 검사할 수 있어요:

```bash
# 내 브랜치의 변경사항만 검사
/claude-security scan my branch

# 특정 커밋만 검사
/claude-security scan commit abc1234

# PR 검사 (gh CLI 로그인 필요)
/claude-security  → 메뉴에서 PR 선택
```

> 💡 커밋·PR·브랜치 스캔은 **커밋된 코드만** 대상이에요. 작업 중인 코드는 먼저 커밋·스태시하세요.

---

## 패치 품질 보장 방식

각 패치는 **작성한 에이전트와 다른 독립적인 에이전트**가 검토해요:

1. 해당 취약점만 고치는지
2. 새로운 취약점이 생기지 않는지
3. 기존 동작이 바뀌지 않는지 (테스트가 있으면 자동 실행)

3가지 모두 통과할 때만 패치 파일 생성. 통과 못 하면 "왜 패치를 못 만들었는지" 메모를 대신 남겨요.

---

## 다른 보안 도구와의 차이

| 단계 | 도구 | 역할 |
|------|------|------|
| 코드 작성 중 | 보안 가이던스 플러그인 | Claude가 쓰는 코드에서 실시간 취약점 감지 |
| 요청 시 (1회) | `/security-review` | 현재 브랜치 단일 보안 리뷰 |
| 요청 시 (심층) | **Claude Security 플러그인** | 멀티 에이전트 전체·변경사항 심층 스캔 |
| PR 단계 | Code Review | PR 리뷰 시 보안 포함 검토 (Team·Enterprise) |
| 관리형 서비스 | Claude Security 제품 | 저장소 연결해서 자동 모니터링 (Enterprise) |

> 기존 정적 분석 도구(ESLint, Bandit 등)를 **대체하는 게 아니라 보완**하는 도구예요.

---

## 주의사항

### Fable 5 모델 사용 시

공식 문서에 따르면: Fable 5의 사이버보안 안전 분류기로 인해 일부 동작이 차단되어 **Opus로 자동 다운그레이드**될 수 있어요. 예상된 동작이며 스캔은 정상 완료됩니다.

### 스캔 결과 관리

- `.gitignore`가 자동 포함되어 실수로 커밋되지 않아요
- 감사 기록 보관이 필요하면: 결과 폴더의 `.gitignore`를 삭제 후 커밋

---

## 한눈에 정리

| 항목 | 내용 |
|------|------|
| 설치 | `/plugin install claude-security@claude-plugins-official` |
| 실행 | `/claude-security` |
| 출력 | `CLAUDE-SECURITY-<날짜>/RESULTS.md` + `patches/` |
| 패치 적용 | `git apply CLAUDE-SECURITY-.../patches/F1.patch` |
| 자동 적용 | ❌ 절대 없음 |

보안 검토를 AI로 강화하고 싶다면, 이 플러그인이 좋은 시작점이 될 거예요!
