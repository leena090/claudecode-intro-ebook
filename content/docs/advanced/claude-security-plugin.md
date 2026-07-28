---
title: "[공] Claude Security 플러그인 — 내 코드의 보안 구멍을 AI가 찾아줘요"
description: "Claude Security 플러그인을 설치하면 Claude Code 세션 안에서 코드베이스 취약점 스캔과 패치 제안까지 자동으로 해줘요. 설치부터 사용법까지 쉽게 알아봅니다"
tags: ["자동생성", "보안", "플러그인", "취약점", "ClaudeSecurity", "보안스캔"]
category: "advanced"
order: 27
lastUpdated: "2026-07-28"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-security">code.claude.com/docs/en/claude-security</a>
</div>

## 이게 뭔가요? 한 줄 요약

**Claude Security 플러그인**은 Claude Code 세션 안에서 **코드베이스의 보안 취약점을 AI가 자동으로 찾아주는 도구**예요.

> 🍱 **비유로 설명하면**: 건물을 완공한 뒤 "소방 안전 점검"을 받는 것과 같아요. 건물을 지을 때(개발 중)는 못 보고 넘어간 위험 요소를, AI 팀이 전문가처럼 꼼꼼히 찾아서 수리 방법까지 알려줘요.

---

## 무엇을 할 수 있나요?

| 기능 | 설명 |
|---|---|
| 🔍 **전체 스캔** | 코드베이스 전체를 멀티 에이전트로 스캔 |
| 📝 **변경사항 스캔** | PR, 브랜치, 특정 커밋만 스캔 |
| 🩹 **패치 제안** | 발견된 취약점에 대한 코드 수정안 생성 |
| 📋 **보고서 저장** | 결과를 파일로 저장 (감사 추적용) |

### 스캔 작동 방식

플러그인이 실행되면 내부에서 여러 Claude 에이전트(에이전트 = 독립적으로 일하는 AI 팀원)가 동시에 일해요:

1. **아키텍처 팀** → 코드 구조와 위협 모델 파악
2. **헌팅 팀** → 실제 취약점 탐색
3. **검증 팀** → 발견된 내용을 독립 검토 (오류 방지)
4. **보고서 팀** → 최종 결과 정리

---

## 설치하기

### 사전 요구사항

| 항목 | 요구사항 |
|---|---|
| Claude Code 버전 | v2.1.154 이상 |
| 요금제 | 유료 플랜 (Pro, Max, Team, Enterprise) |
| Python | 3.9.6 이상 (`python3 --version`으로 확인) |
| 운영체제 | Windows, macOS, Linux |

<div class="note-star">
★ Pro 플랜이라면 <code>/config</code>에서 <strong>Dynamic workflows</strong> 항목을 켜야 해요. 이 플러그인이 멀티 에이전트 방식으로 동작하기 때문이에요.
</div>

### 설치 명령어

Claude Code 세션에서 아래 명령어를 입력해요:

```
/plugin install claude-security@claude-plugins-official
```

설치 후 적용:
```
/reload-plugins
```

**설치 실패 시 해결 방법:**

| 오류 메시지 | 해결 방법 |
|---|---|
| `Marketplace "claude-plugins-official" not found` | `/plugin marketplace add anthropics/claude-plugins-official` 실행 후 재시도 |
| 플러그인 이름을 찾을 수 없음 | `/plugin marketplace update claude-plugins-official` 후 재시도 |

---

## 사용하기

### 기본 사용법 — 전체 코드 스캔

```
/claude-security
```

메뉴가 열리면 **Scan codebase** 선택 → 스캔 범위 선택 → 확인 → 결과 확인

> 🍱 **비유로 설명하면**: 집 전체 청소를 맡기는 것처럼, 전체 코드를 살펴달라고 요청하는 거예요.

### 변경사항만 스캔 (실용적!)

PR(풀 리퀘스트) 머지 전에 내가 바꾼 코드만 빠르게 점검할 수 있어요:

```
/claude-security scan my branch
```

또는 특정 커밋만:
```
/claude-security scan commit abc1234
```

<div class="note-star">
★ 변경사항 스캔은 <strong>git 저장소</strong>에서만 동작해요. 커밋되지 않은 변경사항은 먼저 커밋하거나 스태시(stash)해야 해요.
</div>

### 패치(수정안) 받기

스캔 후 보안 문제를 발견하면, 수정안을 자동으로 만들어줘요:

```
/claude-security
→ Suggest patches 선택
→ 수정할 항목 선택
```

**패치 파일 적용:**
```bash
git apply CLAUDE-SECURITY-타임스탬프/patches/F1.patch
```

---

## 스캔 결과 읽기

스캔이 끝나면 프로젝트 안에 `CLAUDE-SECURITY-타임스탬프/` 폴더가 생겨요:

| 파일 | 내용 |
|---|---|
| `CLAUDE-SECURITY-RESULTS.md` | 취약점 보고서 (ID, 영향도, 심각도, 권고사항) |
| `CLAUDE-SECURITY-RESULTS.jsonl` | 기계 읽기용 동일 데이터 |
| `CLAUDE-SECURITY-REVISION-커밋.json` | 스캔한 코드 버전 기록 |
| `patches/F1.patch` | 각 취약점별 수정안 파일 |

<div class="note-star">
★ 스캔 결과 폴더에는 자동으로 <code>.gitignore</code>가 생성돼요. 실수로 git에 포함되지 않아요.
<br />★ 감사 이력으로 보관하고 싶으면 그 폴더의 <code>.gitignore</code>를 삭제 후 커밋하면 됩니다.
</div>

---

## 다른 보안 도구와 비교

Claude Code에는 보안 관련 도구가 여러 개 있어요. 비교표로 정리했어요:

| 단계 | 도구 | 역할 |
|---|---|---|
| 코드 작성 중 | 보안 가이던스 플러그인 | Claude가 코드 쓸 때 실시간으로 문제 감지 |
| 수동 요청 시 | `/security-review` 명령어 | 현재 브랜치 단순 한 번 검토 |
| **심층 분석** | **Claude Security 플러그인** | **멀티 에이전트 전체 스캔 + 패치** |
| PR 시점 | Code Review | PR 전체 코드 리뷰 |
| 지속 모니터링 | Claude Security (Enterprise) | 클라우드에서 저장소 지속 감시 |

---

## ⚠️ 주의사항

1. **패치는 자동 적용 안 됨** — 항상 내가 직접 확인하고 적용해요
2. **시간 소요** — 대형 코드베이스는 스캔에 꽤 오래 걸릴 수 있어요
3. **비결정적 결과** — 같은 코드를 두 번 스캔해도 결과가 다를 수 있어요 (AI 특성)
4. **Auto mode 권장** — `/config`에서 Auto mode를 켜면 스캔 도중 권한 승인 팝업을 줄일 수 있어요

<div class="note-star">
★ Fable 5 모델 사용 중에 "Fable 5's safeguards flagged this message" 메시지가 나올 수 있어요. 이건 정상이에요 — 자동으로 Opus 모델로 전환해서 스캔을 계속해요.
</div>
