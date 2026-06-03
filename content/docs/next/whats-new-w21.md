---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Auto mode가 Pro 플랜·Sonnet 4.6으로 확대, /usage 사용량 카테고리별 상세 보기, /code-review 명령어 신규 추가, 백그라운드 세션 /resume 목록 표시"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "자동생성"]
category: "next"
order: 10
lastUpdated: "2026-06-03"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto Mode — Pro 플랜·Sonnet 4.6으로 확대 🟢

**Auto mode(자동 허가 모드)**가 이제 **Pro 플랜**에서도, **Sonnet 4.6**으로도 쓸 수 있어요!

지금까지 Auto mode는 Max·Team·Enterprise 플랜 + Opus 모델 전용이었는데, 이번에 Pro 플랜과 Sonnet 4.6까지 지원 범위가 넓어졌어요.

> 🤖 **Auto mode가 뭔가요?** 허가 팝업(권한 물어보는 창)이 뜨는 대신 Claude가 백그라운드에서 안전성을 판단해요. 무해한 일반 작업은 자동 승인, 위험하거나 수상한 작업은 자동 차단하고 알려줘요.

```bash
# Claude Code 업데이트 후 Shift+Tab으로 모드 전환
# → auto mode가 계정 요건 충족 시 목록에 나타남
claude update
```

> 🚦 **비유**: 운전면허 시험장 도로에서는 강사가 매 행동을 허가해줘야 하지만, 익숙해지면 그냥 달릴 수 있잖아요. Auto mode는 그 단계예요. Claude가 스스로 판단해서 안전한 건 그냥 하고, 위험한 건 멈추는 방식이에요. `[공]`

---

### 2️⃣ /usage — 사용량 카테고리별 상세 보기 📊

이제 `/usage`를 입력하면 **무엇이 내 플랜 한도를 얼마나 쓰는지** 카테고리별로 보여줘요.

```bash
/usage
```

- 스킬(Skills)이 얼마나 썼는지
- 서브에이전트(Subagents)가 얼마나 썼는지
- 플러그인(Plugins)별 사용량
- MCP 서버별 사용량

> 📋 **비유**: 신용카드 명세서에서 카페, 교통비, 쇼핑이 얼마인지 항목별로 보는 것처럼, Claude Code 사용량도 이제 항목별로 쪼개서 볼 수 있어요.

#### 이름 변경 안내

| 이전 | 이후 |
|---|---|
| "Extra usage" | **"usage credits" (사용 크레딧)** |
| `/extra-usage` 명령어 | `/usage-credits` |

※ 기존 이름도 아직 작동해요.

---

### 3️⃣ /code-review — 버그 집중 코드 리뷰 명령어 신규 🔍

`/code-review`라는 새 명령어가 생겼어요. 코드의 **정확성 버그**를 찾아주는 리뷰 명령이에요.

```bash
/code-review           # 기본 리뷰
/code-review high      # 고강도 리뷰 (더 꼼꼼하게)
```

| 옵션 | 설명 |
|---|---|
| 기본 | 명백한 버그 위주 |
| `high` | 더 넓은 범위, 더 꼼꼼히 |
| `--comment` | 버그를 GitHub PR 인라인 코멘트로 직접 달기 |

> 🩺 **비유**: `/code-review`는 의사처럼 "이 코드에 병이 있나요?" 하고 진단하는 거예요. 반면 기존 `/simplify`는 군살 빼기(리팩토링) 전문이에요. 둘은 목적이 달라서 따로 남아 있어요. `[공]`

---

### 4️⃣ 백그라운드 세션 — /resume에서 선택 가능 🔄

백그라운드에서 실행 중인 세션이 이제 `/resume` 목록에도 보여요. `bg`라고 표시되니 구분하기 쉬워요.

```bash
/resume    # 목록에서 bg 세션도 보임
```

`claude agents` 뷰에서 `Ctrl+T`로 고정한 세션은 **유휴 상태에서도 살아있어요**.

---

## 그 외 주요 변경 (v2.1.143 ~ v2.1.149)

| 기능 | 설명 |
|---|---|
| `claude agents --json` | 실행 중인 세션 목록을 JSON으로 출력 (스크립팅용) |
| `worktree.bgIsolation: "none"` | 백그라운드 세션이 워크트리 없이 작업 디렉토리 직접 수정 |
| GFM 체크박스 렌더링 | 마크다운 `- [x]` 형태의 체크리스트가 화면에 제대로 표시 |
| 상태줄(status line) JSON | GitHub 레포·PR 정보 포함 |
| Windows PowerShell 기본 활성화 | Bedrock·Vertex·Foundry 사용자에게 PowerShell 도구 자동 on |
| 플러그인 마켓플레이스 | 설치 전 컨텍스트 비용 예상량 표시, 명령어·에이전트·스킬·훅·MCP 목록 미리보기 |
| `claude plugin disable` 안전장치 | 다른 플러그인이 의존할 경우 비활성화 거부 |
| Enterprise 신규 설정 | `allowAllClaudeAiMcps` — claude.ai 클라우드 MCP 커넥터 일괄 허용 |

---

## 무엇을 먼저 써봐야 할까요?

1. **Pro 플랜 사용자라면**: `claude update` 후 Shift+Tab으로 Auto mode 확인
2. **사용량이 궁금하다면**: `/usage` 입력해서 어디서 토큰을 많이 쓰는지 파악
3. **코드 리뷰**: PR 올리기 전 `/code-review high` 한 번 돌려보기
