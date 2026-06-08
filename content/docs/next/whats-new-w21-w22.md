---
title: "[공] 2026년 5월 셋째·넷째 주 업데이트 — Opus 4.8, 워크플로우, 보안 플러그인"
description: "2026년 5월 18~29일 Claude Code 주요 업데이트를 정리했어요. Week 21에서는 Pro 플랜 Auto mode와 /code-review 명령어가, Week 22에서는 Opus 4.8과 다이나믹 워크플로우가 출시됐습니다."
tags: ["자동생성", "업데이트", "whats-new", "Week21", "Week22", "Opus4.8", "워크플로우"]
category: "next"
order: 10
lastUpdated: "2026-06-08"
---

<div class="note-star">
★ <strong>공식 릴리즈 노트</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w21.md">Week 21 (v2.1.143~v2.1.149)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w22.md">Week 22 (v2.1.150~v2.1.157)</a> 기반 정리입니다. <code>[공]</code>
</div>

---

## 📅 Week 21 (5월 18~22일) — 주요 변경

### 🔑 핵심 기능: Pro 플랜에서 Auto mode 사용 가능

Auto mode(오토 모드)가 이제 **Pro 플랜 + Sonnet 4.6**에서도 사용할 수 있어요.

Auto mode는 권한 확인 창(permission prompt)을 없애고, 백그라운드에서 안전성을 검사해요:
- 일반 작업 → 자동으로 진행
- 위험하거나 의심스러운 작업 → 차단 후 알림

```bash
claude update   # 먼저 업데이트
```

그 다음 `Shift+Tab`으로 모드 전환 시 Auto mode가 나타나요 (계정 조건 충족 시).

### 📊 /usage 세분화 — 무엇이 내 플랜 한도를 쓰는지 알 수 있어요

```
> /usage
```

이제 스킬(skill), 서브에이전트(subagent), 플러그인(plugin), MCP 서버별로 사용량을 나눠서 볼 수 있어요. 어디서 사용량이 많이 쓰이는지 파악하기 훨씬 쉬워졌어요.

> 📌 "Extra usage"가 "Usage credits"로 이름이 바뀌었어요. `/extra-usage` → `/usage-credits`로 변경 (구 명령어도 계속 작동).

### 🔍 새 명령어: `/code-review`

```
> /code-review high
```

버그를 찾아주는 새 명령어예요. 노력 수준을 지정할 수 있어요:
- `/code-review` — 기본
- `/code-review high` — 더 철저한 검사
- `--comment` 옵션 추가 시 GitHub PR에 인라인 코멘트로 남겨줘요

> 📌 `/simplify`는 별도로 유지돼요 — 코드 정리·단순화 전용이에요.

### 그 외 Week 21 소식

| 기능 | 설명 |
|---|---|
| 백그라운드 세션 `/resume` | `bg` 표시와 함께 인터랙티브 세션처럼 재개 가능 |
| `claude agents --json` | 실행 중인 세션 목록을 JSON으로 출력 (스크립팅 용) |
| Windows PowerShell 기본 활성화 | Bedrock·Vertex·Foundry 사용자 (비활성: `CLAUDE_CODE_USE_POWERSHELL_TOOL=0`) |
| GFM 체크박스 렌더링 | Markdown 태스크 목록 체크박스 표시 |
| Status line에 GitHub 정보 | repo·PR 정보 자동 포함 |

---

## 📅 Week 22 (5월 25~29일) — 주요 변경

이번 주는 **4개의 메인 기능**이 출시됐어요.

### 🌟 핵심 1: Claude Opus 4.8 출시

Opus 4.8이 Max·Team·Enterprise의 **기본 모델**이 됐어요.

```
> claude update         # v2.1.154 이상 필요
> /model claude-opus-4-8
```

기본 effort는 `high`이고, 더 어려운 작업엔 `/effort xhigh`를 사용해요.

→ 자세한 내용: [Claude Opus 4.8 안내](/docs/next/claude-opus-4-8)

### 🌟 핵심 2: 다이나믹 워크플로우 (리서치 프리뷰)

Claude가 오케스트레이션 스크립트를 직접 작성하고, 수십~수백 개의 에이전트를 백그라운드에서 실행해요.

```
> ultracode: src/routes/ 아래 인증 없는 엔드포인트 전부 찾아줘
```

또는 내장 워크플로우:
```
> /deep-research 이 라이브러리의 보안 이슈 조사해줘
```

→ 자세한 내용: [다이나믹 워크플로우](/docs/advanced/workflows)

### 🌟 핵심 3: 보안 가이던스 플러그인 (security-guidance)

Claude가 코드 작성 중에 자동으로 보안 취약점을 검사하고 수정해주는 플러그인이에요.

```
> /plugin install security-guidance@claude-plugins-official
> /reload-plugins
```

→ 자세한 내용: [보안 가이던스 플러그인](/docs/advanced/security-guidance)

### 🌟 핵심 4: Fast mode 요금 인하 (Opus 4.8)

| | Opus 4.7 | **Opus 4.8** |
|---|---|---|
| Fast mode 요금 | $30 / $150/MTok | **$10 / $50/MTok** |
| Opus 4.6 Fast mode | — | 🚫 지원 종료 |

```
> /fast
```

### 그 외 Week 22 소식

| 기능 | 설명 |
|---|---|
| `.claude/skills/` 자동 로드 | 마켓플레이스 없이도 폴더에 넣으면 자동 적용 |
| `/reload-skills` | 스킬 디렉토리 다시 스캔 (재시작 불필요) |
| `MessageDisplay` 훅 이벤트 | 어시스턴트 메시지 텍스트를 변환·숨기기 가능 |
| Vim 모드 개선 | NORMAL 모드에서 `/`로 히스토리 역방향 검색 |
| `--fallback-model` | 기본 모델 오류 시 세션 전체를 대체 모델로 자동 전환 |
| Chrome 브라우저 선택 | 여러 브라우저 연결 시 `/chrome`으로 선택 |

---

## 관련 문서

- [Claude Opus 4.8 상세 안내](/docs/next/claude-opus-4-8)
- [다이나믹 워크플로우](/docs/advanced/workflows)
- [보안 가이던스 플러그인](/docs/advanced/security-guidance)
