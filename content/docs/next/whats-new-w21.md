---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에서도 Auto mode 사용 가능, Sonnet 4.6 지원 확대, /code-review 명령어 신규, /usage 상세 분석 추가"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "sonnet-4-6", "자동생성"]
category: "next"
order: 8
lastUpdated: "2026-06-13"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. v2.1.143 → v2.1.149 <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Pro 플랜에서도 Auto Mode — Sonnet 4.6까지 지원

이제 **Pro 플랜 사용자도 Auto Mode**를 쓸 수 있어요. 기존에는 Max/Team/Enterprise만 됐는데, 대상이 크게 넓어졌어요. **Sonnet 4.6**도 Auto Mode에서 작동합니다 (기존: Opus 전용).

```bash
# Claude Code 업데이트 후 Shift+Tab으로 모드 전환
claude update

# Auto mode가 나타나려면 계정 조건 충족 필요
# Shift+Tab 계속 누르면 → normal → auto 순환
```

> 🍱 **비유**: 예전엔 "자동 주행"이 고급 차에만 있었는데, 이제 일반 차에도 들어온 것처럼요. 허락 요청 없이 Claude가 알아서 안전한 작업을 판단하고 진행해요. `[공]`

**Auto Mode 요약**:
- ✅ 안전한 일상 작업: 허락 없이 진행
- ❌ 위험하거나 의심스러운 작업: 차단 후 알림

---

### 2️⃣ `/code-review` 명령어 신규 추가

코드 변경 사항의 **버그를 찾아주는 전용 명령어**가 생겼어요. 기존 `/simplify`(코드 단순화)와는 다르게, 이건 순수하게 **오류·버그 감지**에 집중해요.

```bash
# 기본 코드 리뷰
/code-review

# 높은 수준의 꼼꼼한 리뷰
/code-review high

# GitHub PR에 인라인 코멘트로 올리기
/code-review --comment
```

| 명령어 | 목적 |
|---|---|
| `/code-review` | 버그·오류 찾기 |
| `/code-review high` | 더 꼼꼼하게 찾기 |
| `/code-review --comment` | GitHub PR에 댓글로 올리기 |
| `/simplify` | 코드 단순화 (버그 찾기 아님) |

> 🍱 **비유**: `/simplify`는 "이 글 더 간결하게 고쳐줘"이고, `/code-review`는 "이 글에서 논리적 오류 찾아줘"예요. 목적이 달라요. `[공]`

---

### 3️⃣ `/usage` 상세 분석 — 뭐가 토큰을 많이 쓰는지 보기

`/usage` 명령어가 **카테고리별 세부 분석**을 보여줘요. 어떤 스킬·서브에이전트·MCP 서버가 플랜 한도를 많이 쓰는지 파악할 수 있어요.

```bash
/usage
# → 스킬, 서브에이전트, 플러그인, MCP 서버별 사용량 표시
```

<div class="note-star">
★ "Extra usage(추가 사용)"가 <strong>"Usage credits(사용 크레딧)"</strong>으로 이름이 바뀌었어요.<br />
★ <code>/extra-usage</code> 명령어도 <code>/usage-credits</code>로 변경 (기존 이름도 아직 작동함). <code>[공]</code>
</div>

---

## 그 외 작은 개선들

- 📋 백그라운드 세션이 `/resume` 목록에 `bg` 표시로 나타남
- 🖥️ Windows에서 PowerShell 도구가 Bedrock/Vertex/Foundry 기본 활성화
- 🔌 `claude plugin disable`이 다른 플러그인이 의존 중이면 거부
- 🏪 플러그인 마켓플레이스에서 설치 전에 명령어·에이전트·스킬·훅 목록 미리 보기
- 📐 `worktree.bgIsolation: "none"` 설정으로 워크트리 없이 직접 작업
- ✅ 마크다운 렌더링에서 GFM 체크박스 지원
- 📊 상태바(status line)에 GitHub 레포·PR 정보 포함
- 🏢 Enterprise: `allowAllClaudeAiMcps` 설정으로 claude.ai 클라우드 MCP 연결

---

## 더 알아보기

- [Auto Mode 설정](/docs/advanced/permission-modes)
- [공식 Week 21 전체 변경 내역](https://code.claude.com/docs/en/changelog#2-1-143)
