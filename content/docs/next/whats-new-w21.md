---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에서도 Auto 모드 사용 가능, /usage에서 세부 사용량 확인, 새 /code-review 명령어 추가 (v2.1.143~v2.1.149)"
tags: ["자동생성", "업데이트", "2026", "week21", "auto-mode", "code-review", "usage"]
category: "next"
order: 9
lastUpdated: "2026-06-04"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Pro 플랜에서도 Auto 모드 사용 가능!

이번 업데이트로 **Pro 플랜 사용자**도 Auto 모드(오토 모드)를 쓸 수 있게 됐어요. Opus(오퍼스)뿐 아니라 **Sonnet 4.6(소넷 4.6)**도 Auto 모드에서 지원합니다.

> 🍱 **비유로 설명하면**: 자동문이 달린 마트에 이제 일반 회원도 들어갈 수 있게 된 거예요. 이전에는 프리미엄 회원(Max 플랜)만 자동문(Auto 모드)을 쓸 수 있었는데, 이제 일반 회원(Pro 플랜)도 쓸 수 있어요.

Auto 모드가 뭔가요? 허락을 구하는 팝업 없이 클로드가 알아서 일하는 모드예요. 다만 위험한 작업은 여전히 확인받아요.

**Auto 모드 설정하는 법:**
```bash
# 먼저 Claude Code 업데이트
claude update

# Shift+Tab 으로 모드 순환 → Auto 모드 선택
```

<div class="note-circle">
○ Auto 모드는 계정 조건을 충족해야 보여요 — 업데이트 후 Shift+Tab으로 확인하세요<br />
○ Auto 모드에서도 파일 삭제·위험한 명령어는 여전히 확인받아요
</div>

📄 자세한 사용법 → [권한 모드 가이드](/docs/advanced/permission-modes)

---

### 2️⃣ `/usage` — 무엇이 사용량을 잡아먹는지 한눈에

`/usage` 명령어가 업그레이드됐어요. 이제 **어떤 스킬(Skill)·서브에이전트(Subagent)·플러그인(Plugin)·MCP 서버**가 사용량을 얼마나 쓰는지 카테고리별로 보여줘요.

```bash
/usage
```

> 🍱 **비유로 설명하면**: 월말 전기요금 청구서에 "에어컨 35%, 세탁기 20%, 냉장고 25%"처럼 항목별로 나오는 것처럼 — 어디서 가장 많이 쓰는지 한눈에 알 수 있어요.

---

### 3️⃣ "사용 크레딧"으로 이름 바뀐 Extra Usage

"Extra usage(엑스트라 유세이지)"라는 이름이 **"usage credits(유세이지 크레딧)"**으로 바뀌었어요.

```bash
# 이전 명령어 (계속 작동해요)
/extra-usage

# 새 명령어
/usage-credits
```

---

### 4️⃣ 새 `/code-review` 명령어 — 버그 전용 검사기

**`/code-review`** 명령어가 생겼어요. 코드에서 **정확성 버그(correctness bug)**를 찾아줘요. 노력 강도(effort level)도 고를 수 있고, GitHub PR에 인라인 코멘트로 달 수도 있어요.

```bash
# 기본 코드 리뷰
/code-review

# 꼼꼼하게 검사 (high 레벨)
/code-review high

# GitHub PR에 인라인 코멘트로 달기
/code-review --comment
```

| 명령어 | 역할 |
|--------|------|
| `/code-review` | 버그 찾기 전용 |
| `/code-review high` | 더 꼼꼼하게 |
| `/code-review --comment` | GitHub PR에 인라인 코멘트 |
| `/simplify` | 코드 정리 전용 (기존 그대로 유지) |

> 🍱 **비유로 설명하면**: `/code-review`는 "오류 검사기"이고, `/simplify`는 "청소기"예요. 둘 다 코드를 봐주지만 목적이 달라요.

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **백그라운드 세션 `/resume`** | `bg` 표시와 함께 목록에 보임 · `Ctrl+T`로 고정한 세션은 유휴 시에도 유지 |
| **`claude agents --json`** | 실행 중인 세션을 JSON으로 출력 (상태바·세션 선택기 스크립트 연동) |
| **Windows PowerShell 기본 활성화** | Bedrock·Vertex·Foundry 사용자 자동 적용 (끄려면 `CLAUDE_CODE_USE_POWERSHELL_TOOL=0`) |
| **플러그인 의존성 체크** | 다른 플러그인이 의존하면 `claude plugin disable` 거부; `enable` 시 의존성 자동 활성화 |
| **플러그인 마켓 — 컨텍스트 비용 표시** | 설치 전 예상 비용·명령어·에이전트·MCP 서버 목록 확인 가능 |
| **`worktree.bgIsolation: "none"`** | 워크트리 없이 백그라운드 세션이 작업 복사본 직접 수정 |
| **Markdown GFM 체크박스** | `- [ ]` / `- [x]` 렌더링 지원 |
| **상태바 JSON — GitHub 정보 포함** | 리포지토리·PR 정보 자동 감지 |
| **Enterprise: `allowAllClaudeAiMcps`** | claude.ai 클라우드 MCP 커넥터를 managed-mcp.json과 함께 로드 |

---

## 이번 주 요약

```
✅ Pro 플랜에서 Auto 모드 사용 가능 (Sonnet 4.6 포함)
✅ /usage — 카테고리별 세부 사용량 확인
✅ /extra-usage → /usage-credits 이름 변경
✅ /code-review — 버그 전용 코드 리뷰 명령어 (high 레벨, --comment 옵션)
```

버전 확인:
```bash
claude --version  # v2.1.143 ~ v2.1.149 해당
```
