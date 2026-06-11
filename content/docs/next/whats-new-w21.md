---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Auto mode가 Pro 플랜에 개방, 새 /code-review 명령어, /usage-credits 이름 변경, 백그라운드 세션 관리 개선"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage-credits", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-11"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto mode — Pro 플랜에서도 이제 사용 가능!

**Auto mode(오토 모드)** 가 드디어 **Pro 플랜**까지 개방됐어요. 그리고 기존에는 Opus 모델에서만 됐는데, 이번부터 **Sonnet 4.6**도 지원해요.

| 항목 | 이전 | Week 21 이후 |
|------|------|------------|
| 지원 플랜 | Max, Team, Enterprise | **Pro 포함** 모든 플랜 |
| 지원 모델 | Opus 계열 | Opus + **Sonnet 4.6** |
| 작동 방식 | 동일 | 동일 |

> 🍱 **비유**: 자동 주차가 고급 차에만 달렸다가, 이제 일반 차에도 달린 것처럼요 — 더 많은 분들이 "Claude가 알아서 판단하고 안전하게 실행"하는 편리함을 누릴 수 있어요.

**Auto mode란?** Claude가 위험도가 낮은 작업은 승인 요청 없이 알아서 실행하고, 파일 삭제나 의심스러운 명령어 같은 위험한 작업은 멈추고 알려주는 모드예요.

**활성화 방법:**
```bash
claude update          # 먼저 최신 버전으로 업데이트
# 그 다음 Shift+Tab으로 모드 전환 (auto mode 항목 표시됨)
```

<div class="note-circle">
○ 계정 요건 충족 시 Shift+Tab 모드 전환 목록에 "auto" 가 나타나요<br />
○ auto mode ↔ default mode ↔ plan mode 순서로 전환돼요
</div>

📄 자세한 내용 → [권한 모드 가이드](/docs/advanced/permission-modes)

---

### 2️⃣ `/code-review` — 코드 버그를 Claude가 직접 리뷰

새 명령어 **`/code-review`** 가 추가됐어요. Claude가 현재 변경한 코드를 분석해서 **버그나 오류를 찾아 보고**해줘요.

```bash
# 기본 리뷰 (기본 강도)
/code-review

# 높은 강도로 꼼꼼하게 리뷰
/code-review high

# GitHub PR에 인라인 코멘트로 달기
/code-review --comment
```

> 🍱 **비유**: 글을 쓰고 나서 맞춤법 검사기를 돌리는 것처럼요 — Claude가 코드의 "논리적 오류"를 교정 표시해줘요.

| 명령어 | 역할 |
|--------|------|
| `/code-review` | 버그·오류 찾기 |
| `/code-review high` | 더 깊이 분석 |
| `/code-review --comment` | GitHub PR에 리뷰 댓글 달기 |
| `/simplify` | 코드 정리·단순화 (기존 유지, 별개) |

<div class="note-circle">
○ <code>/simplify</code>는 "정리" 용도로 그대로 남아있어요 — /code-review는 "버그 찾기", /simplify는 "코드 다듬기"로 역할이 달라요
</div>

---

### 3️⃣ `/usage-credits` — 이름이 바뀌었어요

기존에 `/extra-usage` 라고 불리던 명령어가 **`/usage-credits`** 로 이름이 바뀌었어요.

```bash
# 새 이름
/usage-credits

# 옛 이름 (아직 작동, 하지만 deprecated 예정)
/extra-usage
```

그리고 **`/usage`** 명령어가 개선됐어요. 이제 내 플랜 한도를 무엇이 얼마나 사용하는지 카테고리별로 보여줘요:

```bash
/usage
# → 스킬, 서브에이전트, 플러그인, MCP 서버별 사용량 분류 표시
```

> 🍱 **비유**: 신용카드 내역서가 그냥 "쇼핑 50만원"이었다가 이제 "음식 20만원 / 교통 10만원 / 쇼핑 20만원"으로 항목별로 나눠서 보여주는 것처럼요.

---

### 그 밖의 변경들

| 항목 | 내용 |
|------|------|
| 백그라운드 세션 | `/resume` 목록에 백그라운드 세션도 표시 (bg 표시됨) |
| `Ctrl+T` 핀 | `claude agents` 화면에서 핀한 세션이 유휴 상태여도 유지 |
| `claude agents --json` | 실행 중인 세션 목록을 JSON으로 출력 (스크립팅 활용 가능) |
| 플러그인 마켓 | 설치 전 명령어·에이전트·스킬·훅 목록 미리 볼 수 있음 |
| Windows 개선 | Bedrock, Vertex, Foundry 사용자에게 PowerShell 도구 기본 활성화 |
| 마크다운 개선 | GFM 체크박스 렌더링 지원 |

<div class="note-circle">
○ <code>claude agents --json</code> 은 상태바 위젯이나 세션 피커 만들 때 유용해요<br />
○ Windows 사용자라면 PowerShell 도구 기본 활성화 확인해보세요
</div>
