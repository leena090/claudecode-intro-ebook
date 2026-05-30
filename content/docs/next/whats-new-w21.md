---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 요금제에서 Auto mode 사용 가능, /usage 카테고리별 사용량 분석, /code-review 명령어 출시"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage-credits", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-05-30"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a><br />
릴리즈: v2.1.143 → v2.1.149
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Pro 요금제에서도 Auto mode 사용 가능

이전에는 Max·Enterprise 전용이었던 **Auto mode(오토 모드)**가 이제 **Pro 요금제**에서도 쓸 수 있어요. Sonnet 4.6 모델도 지원합니다.

> 🍱 **비유**: 자동차 자동 주차 기능처럼 — 예전엔 고급 차에만 있었는데, 이제 일반 차에도 달린 거예요. "허락할까요?" 물어보는 화면 없이 Claude가 알아서 안전하게 작업을 처리해줘요.

Auto mode가 하는 일:
- 🟢 **일반 작업** → 허락 물어보지 않고 바로 실행
- 🔴 **삭제·위험한 작업** → 자동 차단 + 알림

```bash
# Claude Code 업데이트 후 Shift+Tab으로 모드 전환
claude update
```

Shift+Tab을 눌러 모드를 순환하면 Auto mode 항목이 나타나요 (Pro 계정 조건 충족 시). `[공]`

📄 자세한 내용 → [권한 모드 가이드](/docs/advanced/permission-modes)

---

### 2️⃣ `/usage` — 뭐가 토큰을 많이 먹고 있는지 한눈에

`/usage` 명령어가 **카테고리별 사용량 분류**를 보여주게 됐어요.

> 🍱 **비유**: 신용카드 명세서에서 "편의점 3만원, 카페 8만원, 배달음식 15만원"처럼 항목별로 나오는 것과 같아요. 어떤 기능이 플랜 한도를 많이 쓰는지 파악할 수 있어요.

| 카테고리 | 설명 |
|---|---|
| 스킬(Skills) | 커스텀 스킬 실행 |
| 서브에이전트(Subagents) | 병렬 작업 에이전트 |
| 플러그인(Plugins) | 설치된 플러그인 사용 |
| MCP 서버 | 연결된 외부 도구 |

```bash
/usage
```

---

### 3️⃣ "Extra usage" → **"Usage Credits"** 이름 변경

헷갈리던 "Extra usage(추가 사용량)" 이름이 **"Usage credits(사용 크레딧)"** 으로 바뀌었어요.

| 이전 | 이후 |
|---|---|
| "Extra usage" | "Usage credits" |
| `/extra-usage` 명령어 | `/usage-credits` 명령어 |

> ℹ️ 기존 `/extra-usage` 명령어도 당분간은 작동해요. `[공]`

---

### 4️⃣ `/code-review` — 버그 찾아주는 새 명령어

**`/code-review`** 명령어가 새로 나왔어요. 코드에서 버그를 찾아 리포트해 줘요.

```bash
# 기본 실행
/code-review

# 검토 강도 지정
/code-review high

# GitHub PR에 인라인 코멘트로 게시
/code-review --comment
```

| 옵션 | 설명 |
|---|---|
| `low` / `medium` | 빠른 검토 (확신도 높은 것만) |
| `high` | 더 넓은 범위 검토 |
| `--comment` | GitHub PR에 인라인 코멘트 자동 작성 |

> 🍱 **비유**: 빨간 펜으로 리포트 교정해주는 선생님처럼 — 내가 짠 코드에서 논리 오류·보안 취약점을 찾아서 정리해줘요.

> ℹ️ 기존 `/simplify` 명령어는 여전히 별도로 존재해요 (코드 정리·단순화 전용). `[공]`

---

## 기타 개선 사항

| 항목 | 내용 |
|---|---|
| 백그라운드 세션 | `/resume`에서 `bg` 표시로 보임 |
| `claude agents --json` | 실행 중인 세션을 JSON으로 나열 (스크립팅용) |
| PowerShell 도구 | Windows에서 기본 활성화 (Bedrock·Vertex·Foundry 포함) |
| 플러그인 마켓플레이스 | 설치 전 컨텍스트 비용 + 기능 목록 미리보기 |
| `worktree.bgIsolation: "none"` | 백그라운드 세션이 워킹 카피 직접 수정 (워크트리 불가 환경용) |
| GFM 체크박스 | 마크다운 출력에서 태스크 리스트 체크박스 렌더링 |

---

<div class="note-star">
★ v2.1.143 이상으로 업데이트하면 이번 주 기능들을 사용할 수 있어요.<br />
★ Auto mode는 Pro 계정 조건 충족 시 Shift+Tab 모드 순환에서 나타나요.
</div>
