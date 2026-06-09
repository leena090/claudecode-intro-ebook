---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에서도 Auto Mode 사용 가능, /usage 카테고리별 상세 분류, 신규 /code-review 명령어"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-09"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. 버전 v2.1.143 → v2.1.149. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto Mode, 이제 Pro 플랜에서도! — 가장 큰 소식

이전까지 Auto Mode(오토 모드)는 **Max 플랜 이상**에서만 쓸 수 있었어요. 이번 주부터 **Pro 플랜**에서도 사용할 수 있게 됐고, **Sonnet 4.6** 모델로도 작동해요.

> 🍱 **비유**: 자율주행 기능이 비싼 차에만 있었는데, 이제 일반 차에도 달린 거예요. "가다가 사람이 나타나면 알아서 멈추고, 평소엔 그냥 알아서 가줘"가 Pro 플랜 가격에서 가능해졌어요.

**작동 원리:**
- 배경(Background)에서 안전 검사를 계속 실행
- 평범한 작업(파일 편집, 코드 실행 등)은 **허락 안 물어보고 진행**
- 위험하거나 의심스러운 작업은 **차단 후 알림**

**활성화 방법:**
```bash
# 최신 버전으로 업데이트
claude update

# 세션에서 Shift+Tab을 눌러 모드 전환
# Default → Accept Edits → Auto 순서로 순환
```

<div class="note-star">
★ 계정 조건을 충족해야 Auto Mode 항목이 나타나요. 모드 순환 시 Auto가 안 보이면 아직 활성화 안 된 것. <code>[공식 발표 기준]</code>
</div>

---

### 2️⃣ `/usage` 카테고리별 상세 분류

이제 `/usage` 명령어를 치면 "내 플랜 한도 중 뭐가 얼마나 썼는지" 카테고리별로 볼 수 있어요.

| 카테고리 | 설명 |
|---|---|
| Skills | 설치한 스킬들이 사용한 양 |
| Subagents | 서브에이전트가 사용한 양 |
| Plugins | 플러그인 사용량 |
| MCP servers | MCP 서버별 사용량 |

> 🍱 **비유**: 전기요금 고지서에 "냉장고 몇 kWh, 에어컨 몇 kWh" 하고 항목별로 나오는 것처럼, 이제 Claude Code도 "어느 기능이 내 한도를 얼마나 먹고 있는지" 한눈에 볼 수 있어요.

---

### 3️⃣ `/code-review` 신규 명령어

코드 검토 전용 명령어가 새로 생겼어요. 노력 수준(effort level)을 직접 지정할 수 있고, GitHub PR에 인라인 코멘트로 올릴 수도 있어요.

```bash
# 기본 코드 리뷰
/code-review

# 꼼꼼하게 (논리 버그 등 깊이 검토)
/code-review high

# GitHub PR에 인라인 코멘트로 등록
/code-review --comment
```

> 🍱 **비유**: 동료 개발자한테 코드 봐달라고 할 때 "대충 훑어봐줘"(기본)와 "정말 꼼꼼히 봐줘"(high) 중 선택하는 거예요. `--comment`는 GitHub PR에 그 코멘트를 직접 달아줘요.

<div class="note-star">
★ 기존 <code>/simplify</code>는 별도로 유지돼요. <code>/code-review</code>는 <strong>버그 찾기</strong>, <code>/simplify</code>는 <strong>코드 정리</strong>에 특화됩니다. <code>[공]</code>
</div>

---

## 그 외 개선 사항

| 항목 | 변경 내용 |
|---|---|
| 이름 변경 | "Extra usage" → **"usage credits"** (`/extra-usage` → `/usage-credits`). 구 이름도 여전히 동작 |
| Background 세션 | `/resume` 목록에 background 세션도 표시 (`bg` 태그로 구분) |
| JSON 출력 | `claude agents --json` — 실행 중 세션 목록을 JSON으로 출력 (상태바·선택기 스크립팅용) |
| Windows | PowerShell 툴이 Bedrock·Vertex·Foundry 사용자에게 기본 활성화. 끄려면 `CLAUDE_CODE_USE_POWERSHELL_TOOL=0` |
| 워크트리 설정 | 새 `worktree.bgIsolation: "none"` — 백그라운드 세션이 워크트리 없이 작업 복사본 직접 편집 |
| 마크다운 | GFM 체크박스 렌더링 지원 |
| Status line | JSON 입력에 GitHub repo·PR 정보 자동 포함 |
| Enterprise | `allowAllClaudeAiMcps` 설정으로 claude.ai 클라우드 MCP 커넥터 일괄 로드 |
| 플러그인 | `claude plugin disable` 의존성 체크 추가; 마켓플레이스에서 설치 전 명령어·에이전트 목록 미리보기 |

---

## 한 줄 요약

> **이번 주 하이라이트**: Pro 플랜 사용자도 Auto Mode로 허락 요청 없이 빠르게 작업할 수 있게 됐어요. `/code-review`로 원하는 깊이로 코드 리뷰를 시킬 수 있어요.

---

## 더 알아보기

- [Auto Mode 설정 가이드](/docs/advanced/auto-mode-config)
- [Week 22 업데이트](/docs/next/whats-new-w22) — Opus 4.8 출시, Dynamic workflows
- [공식 문서 changelog v2.1.143–v2.1.149](https://code.claude.com/docs/en/changelog#2-1-143)
