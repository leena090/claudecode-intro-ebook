---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에 Auto mode 개방, /code-review 명령어 신규, /usage 카테고리별 세분화, 워크트리 배경 세션 분리 옵션"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-01"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. v2.1.143 → v2.1.149. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto mode — 이제 Pro 플랜에서도!

기존엔 Max·Team 플랜 전용이었던 **Auto mode(자동 모드)** 가 이제 **Pro 플랜**에서도 사용할 수 있어요. Sonnet 4.6도 지원 대상에 포함됐습니다.

```bash
# Claude Code 업데이트 후 Shift+Tab으로 모드 전환
claude update
```

> 🍱 **비유**: 예전엔 "자동 계산기"를 비싼 요금제에서만 팔았는데, 이제 기본 요금제 사용자도 살 수 있게 됐어요. 사람이 일일이 "이거 해도 돼요?" 승인하는 대신, 위험하지 않은 건 알아서 진행하고 수상한 것만 물어봐요.

Auto mode의 특징:
- ✅ 평범한 작업(파일 읽기·코드 편집 등)은 자동 승인
- 🛑 위험하거나 의심스러운 동작은 자동 차단 + 알림
- 👋 기존 `--dangerously-skip-permissions` 플래그보다 훨씬 안전한 대안

계정 조건을 만족하면 Shift+Tab을 눌렀을 때 모드 목록에 auto mode가 나타납니다. `[공]`

---

### 2️⃣ /code-review — 버그 찾아주는 새 명령어

PR을 올리기 전에 코드를 검토받을 수 있는 **`/code-review`** 명령어가 새로 추가됐어요.

```bash
# 기본 리뷰
/code-review

# 강도 높게 검토
/code-review high

# GitHub PR에 인라인 코멘트로 달기
/code-review --comment
```

> 🍱 **비유**: 선생님한테 숙제 제출하기 전에 "틀린 곳 있어요?" 하고 초안을 먼저 보여주는 것처럼, PR 올리기 전에 Claude한테 미리 버그 있는지 물어보는 거예요.

- **`/code-review`**: 일반적인 정확성 버그 리뷰
- **`/code-review high`**: 더 세밀하게 검토
- **`/code-review --comment`**: 발견 사항을 GitHub PR 코멘트로 직접 달기
- **`/simplify`**: 이전부터 있던 "코드 단순화" 전용 리뷰는 그대로 유지 `[공]`

---

### 3️⃣ /usage — 이제 카테고리별로 쪼개서 보여줘요

기존에는 사용량 합계만 보여줬지만, 이제 **스킬·서브에이전트·플러그인·MCP 서버별로 세분화**해서 보여줘요.

```bash
/usage
```

> 🍱 **비유**: 예전엔 전기요금 청구서에 "총 100kWh"만 나왔다면, 이제는 "에어컨 40kWh, 냉장고 30kWh, 조명 30kWh" 식으로 항목별로 나오는 거예요.

무엇이 요금제 한도를 빨리 소진하는지 파악하는 데 유용해요.

#### 추가: "Extra usage" → "Usage credits"로 이름 변경

- `/extra-usage` 명령어가 **`/usage-credits`** 로 이름이 바뀌었어요
- 기존 이름도 당분간 계속 작동 `[공]`

---

### 4️⃣ 배경 세션 개선 — 워크트리 없이 직접 편집

특수한 상황에서 워크트리(임시 복사본) 없이 **현재 작업 폴더를 바로 편집**하는 배경 세션을 쓸 수 있게 됐어요.

```json
// .claude/settings.json
{
  "worktree": {
    "bgIsolation": "none"
  }
}
```

> 🍱 **비유**: 보통은 편집하기 전에 서류를 복사해서 복사본에 고치는데, 이 옵션을 켜면 원본 서류에 바로 고치는 방식이에요. 워크트리가 불편한 환경에서 사용해요.

---

### 나머지 변경사항 요약

| 기능 | 설명 |
|------|------|
| 배경 세션 `/resume` 표시 | 배경 세션도 `/resume` 목록에 `bg` 태그로 표시 |
| `Ctrl+T` 세션 고정 | `claude agents`에서 핀고정된 세션이 유휴 상태에서도 유지 |
| `claude agents --json` | 실행 중인 세션 목록을 JSON으로 출력 (스크립트·상태바 활용) |
| PowerShell 기본 활성화 | Windows Bedrock·Vertex·Foundry 사용자에게 PowerShell 도구 기본 ON |
| 플러그인 의존성 관리 | 다른 플러그인이 의존하면 비활성화 거부, 강제 활성화 시 의존성 자동 설치 |
| 플러그인 마켓플레이스 | 설치 전 명령어·에이전트·스킬·훅·MCP 서버 목록 미리 보기 가능 |
| GFM 체크박스 렌더링 | 마크다운 출력에서 `[ ]`, `[x]` 체크박스 렌더링 |
| GitHub 정보 상태줄 | JSON 상태줄에 GitHub 레포·PR 정보 자동 포함 |
| Enterprise: `allowAllClaudeAiMcps` | 관리 설정으로 claude.ai 클라우드 MCP 커넥터 일괄 허용 |

---

> 💡 **입문자 팁**: 이번 주 업데이트 중 가장 주목할 것은 두 가지예요. Pro 플랜 사용자라면 **Auto mode**를 한번 써보세요 (Shift+Tab). 코드를 많이 작성하고 PR도 올린다면 **`/code-review`** 를 PR 올리기 직전에 습관적으로 쓰면 꽤 도움이 됩니다.
