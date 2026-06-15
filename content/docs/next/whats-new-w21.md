---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에서도 Auto Mode 사용 가능, /usage 상세 내역, /code-review 신규 명령어"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "자동생성"]
category: "next"
order: 8
lastUpdated: "2026-06-15"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto Mode — 이제 Pro 플랜에서도 사용 가능 🎉

지금까지 Auto Mode(오토 모드)는 Max/Team/Enterprise 전용이었는데, 이번 업데이트로 **Pro 플랜 + Sonnet 4.6 조합**에서도 쓸 수 있게 됐어요.

> 🍱 **비유**: 이전엔 "비즈니스석 전용" 서비스였는데, 이제 "이코노미석"도 이용 가능해진 거예요.

**Auto Mode란?**
허락 요청(permission prompt) 없이 Claude가 알아서 작업해요. 위험한 명령은 백그라운드 안전 검사기가 자동 차단하고, 문제가 생기면 알려줘요.

```bash
# Auto Mode 업데이트
claude update

# Shift+Tab 으로 모드 전환 (Auto Mode가 목록에 뜨면 선택)
```

| 항목 | 내용 |
|------|------|
| 지원 플랜 | ~~Max/Team/Enterprise~~ → **Pro 플랜도 추가** |
| 지원 모델 | Opus 계열 + **Sonnet 4.6 추가** |
| 전환 방법 | `Shift+Tab` 반복 |

📄 자세한 사용법 → [Auto Mode 가이드](/docs/advanced/permission-modes)

---

### 2️⃣ `/usage` — "무엇이 한도를 다 썼나?" 상세 내역 표시

`/usage` 명령어가 업그레이드됐어요. 이제 **무엇이 플랜 한도를 소비했는지** 카테고리별로 확인할 수 있어요.

```bash
/usage
```

이전에는 그냥 "토큰 몇 개 썼어요"였다면, 이제는:
- 어떤 **스킬(skill)**이 얼마나 썼는지
- 어떤 **서브에이전트(subagent)**가 얼마나 썼는지
- 어떤 **플러그인**이나 **MCP 서버**가 얼마나 썼는지

> 🍱 **비유**: 휴대폰 데이터 사용량을 앱별로 보여주는 것과 같아요. "유튜브가 5GB, 카카오톡이 0.1GB" 처럼 — 이제 어디서 한도를 많이 쓰는지 딱 알 수 있어요.

<div class="note-circle">
○ "Extra usage(추가 사용량)" 표현이 "usage credits(사용 크레딧)"으로 이름이 바뀌었어요<br />
○ 명령어도 <code>/extra-usage</code> → <code>/usage-credits</code> 로 변경 (기존 이름도 계속 작동)
</div>

---

### 3️⃣ `/code-review` — 코드 버그 검사 새 명령어

코드 변경 사항에서 **버그를 잡아주는 새 명령어**가 추가됐어요.

```bash
# 기본 검사
/code-review

# 더 꼼꼼하게 검사 (high effort)
/code-review high

# GitHub PR에 인라인 코멘트로 결과 달기
/code-review --comment
```

| 명령어 | 설명 |
|--------|------|
| `/code-review` | 기본 수준 버그 검사 |
| `/code-review high` | 높은 강도 — 더 꼼꼼하게 |
| `/code-review --comment` | GitHub PR에 줄별 코멘트 자동 등록 |

> 🍱 **비유**: 글을 쓰고 나서 맞춤법 검사기를 돌리는 것처럼 — 코드도 제출 전에 이 명령어 한 번 돌려주면 실수를 잡아줘요.

기존의 `/simplify`는 그대로 유지돼요. `/code-review`는 **버그 찾기**, `/simplify`는 **코드 정리(청소)** 용도예요.

---

### 기타 작은 개선들

| 항목 | 내용 |
|------|------|
| 백그라운드 세션 | `/resume` 목록에 백그라운드 세션도 표시 (`bg` 태그) |
| `claude agents --json` | 현재 실행 중인 세션 목록을 JSON으로 출력 (스크립트 활용) |
| Windows | PowerShell 도구가 Bedrock·Vertex·Foundry에서 기본 활성화 |
| 플러그인 관리 | `claude plugin disable` — 다른 플러그인이 의존하면 거부 |
| 플러그인 마켓플레이스 | 설치 전 컨텍스트 비용 예상치 표시 |
| `worktree.bgIsolation` | `"none"` 설정 시 워크트리 없이 원본 파일 직접 수정 가능 |
| 마크다운 | GFM 체크박스(task list) 렌더링 지원 |
| 기업 | `allowAllClaudeAiMcps` 설정으로 claude.ai MCP 커넥터 일괄 로드 |

---

<div class="note-circle">
○ Week 21 범위: Claude Code v2.1.143 ~ v2.1.149<br />
○ Auto Mode Pro 지원은 계정 조건 충족 시 활성화 (아직 전체 롤아웃 중일 수 있음)
</div>
