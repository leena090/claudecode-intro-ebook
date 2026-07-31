---
title: "[공] Claude Security 플러그인 — AI가 내 코드의 취약점을 직접 찾아준다"
description: "멀티 에이전트가 코드베이스를 스캔해 보안 취약점을 찾고, 패치까지 제안해주는 공식 Claude Security 플러그인 사용법"
tags: ["자동생성", "보안", "security", "plugin", "취약점", "멀티에이전트", "patch"]
category: "advanced"
order: 27
lastUpdated: "2026-07-31"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a><br />
★ <strong>요구 사항</strong>: Claude Code v2.1.154 이상 · Python 3.9.6 이상 · 유료 플랜<br />
★ <strong>Pro 플랜 주의</strong>: Dynamic workflows를 <code>/config</code>에서 미리 켜야 해요
</div>

## Claude Security 플러그인이 뭔가요?

내 코드베이스에 **보안 취약점(버그, 인젝션, 인증 허점 등)이 있는지** Claude 에이전트 팀이 직접 스캔해주고, 발견한 문제를 패치로 만들어주는 공식 플러그인이에요.

> 🍱 **비유로 설명하면**: 보안 전문가 팀을 우리 코드 창고에 초대한 거예요. 팀장 에이전트가 지도 그리고(아키텍처 파악), 팀원들이 각자 구석구석 뒤지고(취약점 탐색), 독립된 검토자가 "이거 진짜 문제 맞아?" 다시 한번 확인한 뒤 보고서를 줘요. 그리고 패치 작성까지!

---

## 설치 방법

### 사전 요건 확인

```bash
# Python 버전 확인 (3.9.6 이상 필요)
python3 --version

# Claude Code 버전 확인 (v2.1.154 이상 필요)
claude --version
```

### 플러그인 설치

Claude Code 세션 안에서:

```bash
/plugin install claude-security@claude-plugins-official
```

설치 오류가 나면:

```bash
# 마켓플레이스가 없다는 오류 시
/plugin marketplace add anthropics/claude-plugins-official

# 플러그인을 찾을 수 없다는 오류 시
/plugin marketplace update claude-plugins-official
```

### 활성화

```bash
/reload-plugins
```

---

## 사용 방법

### 메뉴 열기

```bash
/claude-security
```

메뉴에서 3가지를 선택할 수 있어요:
1. **Scan codebase** — 전체 또는 특정 영역 스캔
2. **Scan changes** — 브랜치 diff, PR, 커밋 단위 스캔
3. **Suggest patches** — 발견된 취약점의 패치 생성

---

## 전체 코드베이스 스캔하기

```
1. /claude-security → "Scan codebase" 선택
2. 스캔 범위 선택 (전체 vs. 집중 영역)
3. 실행 확인
4. 스캔 진행 (시간 소요 · 토큰 사용)
5. 결과 보고서 확인
```

> 🍱 **비유로 설명하면**: 보안 팀이 건물 전체(혹은 지정 구역)를 꼼꼼히 돌아다니는 것과 같아요. 전체 스캔은 오래 걸리지만, "입력값 처리 코드만 봐줘" 식으로 집중 영역을 지정하면 빠르게 끝나요.

---

## 변경 사항만 스캔하기

PR을 올리기 전, 내 브랜치의 변경 코드만 검사할 수 있어요.

```bash
# 방법 1: 메뉴에서
/claude-security → "Scan changes" 선택

# 방법 2: 자연어로
"abc1234 커밋만 스캔해줘"
"내 PR 변경 부분만 보안 검사해줘"
```

> ⚠️ 변경 스캔은 **커밋된 코드만** 대상이에요. 작업 중인 변경은 먼저 커밋하거나 전체 스캔을 쓰세요.

---

## 결과 보고서 읽기

스캔이 끝나면 저장소 안에 타임스탬프 폴더가 생겨요:

```
CLAUDE-SECURITY-2026-07-31T14:30:00/
├── CLAUDE-SECURITY-RESULTS.md      ← 주 보고서 (취약점 목록)
├── CLAUDE-SECURITY-RESULTS.jsonl   ← 기계 가독형 데이터
└── CLAUDE-SECURITY-REVISION-abc123.json  ← 어느 커밋 기준인지 기록
```

보고서에서 각 취약점에는 `F1`, `F2` 같은 ID가 붙어요:

| 항목 | 내용 |
|---|---|
| **ID** | F1, F2, F3... |
| **Impact** | 심각도와 영향 범위 |
| **Exploit scenario** | 실제로 어떻게 악용될 수 있나 |
| **Severity** | 심각도 (High/Medium/Low) |
| **Confidence** | 에이전트 확신도 |
| **Recommendation** | 권고 수정 방법 |

> 💡 **독립 검증자 에이전트**가 모든 결과를 한 번 더 확인하기 때문에, 보고서가 짧더라도 믿을 수 있어요. 노이즈를 걸러낸 결과예요.

---

## 패치 만들기 & 적용하기

```bash
# 패치 생성
/claude-security → "Suggest patches" 선택
# 어떤 취약점(F1, F2...)을 패치할지 선택

# 또는 자연어로
"F3 취약점 패치해줘"
```

패치는 `CLAUDE-SECURITY-<timestamp>/patches/` 폴더에 저장돼요:

```
patches/
├── F1.patch   ← git apply로 적용 가능
├── F2.patch
└── F3.patch   (+ 설명 노트)
```

### 패치 적용하는 법

```bash
# 패치 한 개씩 적용 (반드시 내가 검토 후 결정!)
git apply CLAUDE-SECURITY-2026-07-31T14:30:00/patches/F1.patch
```

> ⚠️ **패치는 절대 자동 적용되지 않아요.** 항상 내가 검토하고 결정해야 해요. 패치마다 별도 PR로 올리는 것을 권장해요.

---

## 다른 보안 도구와의 관계

| 단계 | 도구 | 역할 |
|---|---|---|
| **코드 작성 중** | Security guidance 플러그인 | Claude가 쓰는 코드에서 즉시 감지 |
| **브랜치 단위** | `/security-review` | 현재 브랜치 1회 빠른 스캔 |
| **심층 스캔** | **Claude Security 플러그인** ← 여기 | 멀티에이전트 전체 스캔 + 패치 |
| **PR 시점** | Code Review | 전체 컨텍스트 기반 PR 리뷰 |
| **관리형 서비스** | Claude Security (Enterprise) | 저장소 상시 모니터링 |

---

## 자주 만나는 오류

| 증상 | 원인 | 해결 |
|---|---|---|
| Python 경고 | `python3` 버전이 3.9.6 미만 | Python 3 설치 또는 PATH에 새 버전 우선 지정 |
| "Fable 5's safeguards flagged this message" | Fable 5의 사이버보안 분류기 작동 | 정상 — Opus로 자동 다운그레이드 후 계속 진행 |
| Pro 플랜에서 Dynamic workflows 오류 | 기능이 비활성화 상태 | `/config` → Dynamic workflows 켜기 |

---

## 한 줄 정리

> Claude Security 플러그인 = **여러 AI 에이전트가 팀을 이뤄 내 코드의 보안 구멍을 찾고, 독립 검토 후 패치까지 만들어주는 공식 도구**. 적용 여부는 언제나 내가 결정.
