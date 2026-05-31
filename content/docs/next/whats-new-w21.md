---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Pro 플랜에서도 Auto mode 사용 가능, /code-review 명령으로 버그 자동 점검, /usage로 플랜 사용량 항목별 분석"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-05-31"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto mode — 이제 Pro 플랜에서도 사용 가능 🆕

Auto mode(오토 모드)가 **Pro 플랜**에서도 쓸 수 있게 됐어요. Sonnet 4.6 모델을 지원해요.

> 🚦 **비유**: 교차로 신호등 대신 '자율주행 모드'예요 — 이전엔 Claude가 파일을 수정할 때마다 "해도 될까요?" 허락을 구했다면, Auto mode에서는 일상적인 작업은 말없이 진행하고, 위험하거나 수상한 작업만 빨간불 켜고 멈춰요.

**활성화 방법:**
```bash
# Claude Code 최신 버전으로 업데이트 먼저
claude update

# 터미널에서 Shift+Tab으로 모드 전환 (normal → accept-edits → auto)
```

| 모드 | 설명 |
|------|------|
| normal | 모든 작업마다 허락 요청 |
| accept-edits | 파일 수정은 자동, 명령 실행은 허락 |
| **auto** 🆕 | 일상 작업 자동, 위험 작업만 차단·알림 |

<div class="note-circle">
○ Auto mode는 Pro 플랜에서 리서치 프리뷰(시험 단계)로 제공돼요<br />
○ 백그라운드 안전 분류기가 작동해서 위험한 작업은 자동 차단돼요<br />
○ 자세한 내용: <a href="/docs/advanced/permission-modes">퍼미션 모드 가이드</a>
</div>

---

### 2️⃣ `/code-review` — Claude가 내 코드 버그를 직접 찾아줘요 🆕

새 명령어 `/code-review`가 추가됐어요. Claude가 현재 브랜치에서 바뀐 코드를 분석해서 **기능적으로 틀린 버그**를 찾아줘요.

```bash
# 기본 사용 (현재 변경 코드 리뷰)
/code-review

# 높은 강도로 꼼꼼하게 검토
/code-review high

# GitHub PR에 인라인 댓글로 자동 등록
/code-review --comment
```

> 🔍 **비유**: 시험 답안지를 제출 전에 선생님이 빨간 펜으로 체크해주는 것처럼 — Claude가 내 코드에서 "이 조건식이 반대예요", "여기서 NPE(널포인터 오류)가 날 수 있어요" 같은 걸 찾아줘요.

| 옵션 | 설명 |
|------|------|
| `/code-review` | 기본 강도 리뷰 |
| `/code-review high` | 높은 강도 (더 많은 잠재 버그 탐지) |
| `/code-review --comment` | GitHub PR 인라인 댓글로 결과 등록 |

<div class="note-circle">
○ <code>/simplify</code>는 별도 명령으로 유지돼요 (코드 정리·단순화 전용)<br />
○ <code>/code-review</code>는 버그·정확성 위주, <code>/simplify</code>는 코드 품질·가독성 위주
</div>

---

### 3️⃣ `/usage` — 플랜 사용량을 항목별로 보여줘요

`/usage` 명령어가 업그레이드됐어요. 이제 어떤 기능이 내 플랜 사용량을 얼마나 쓰는지 **항목별로 세분화**해서 볼 수 있어요.

```bash
/usage
```

> 📊 **비유**: 핸드폰 데이터 명세서처럼 — "이번 달 유튜브 3GB, 카카오톡 0.5GB, 네이버 1GB"처럼, Claude Code도 "스킬이 얼마, 서브에이전트가 얼마, MCP 서버가 얼마" 항목별로 나눠서 보여줘요.

이제 **어떤 기능이 플랜 한도를 많이 쓰는지** 파악하고 조절할 수 있어요.

**아울러 명령어 이름도 바뀌었어요:**
```bash
# 예전 명령어 (구 이름도 여전히 작동해요)
/extra-usage

# 새 공식 명령어
/usage-credits
```

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **백그라운드 세션 목록** | `/resume`에서 백그라운드 세션도 보여요 (`bg` 표시) |
| **세션 고정** | `claude agents`에서 `Ctrl+T`로 세션 고정하면 유휴 상태에서도 세션 유지 |
| **`claude agents --json`** | 현재 세션 목록을 JSON으로 출력 — 상태바·스크립트 연동용 |
| **`worktree.bgIsolation: "none"`** | 워크트리 없이 백그라운드 세션이 작업 디렉토리를 직접 편집하도록 설정 |
| **마크다운 체크박스** | GFM 스타일 태스크 리스트 `[ ]` / `[x]`가 터미널에서 렌더링됨 |
| **Windows 파워셸 도구** | Bedrock·Vertex·Foundry 사용자에게 PowerShell 도구 기본 활성화 |
| **플러그인 의존성 관리** | `claude plugin disable`이 다른 플러그인이 의존할 때 거부, `enable`은 하위 의존성 자동 활성화 |

---

## 이번 주 요약

```
✅ Auto mode: Pro 플랜에서도 사용 가능 (리서치 프리뷰)
✅ /code-review: 코드 버그 자동 탐지 + GitHub PR 인라인 댓글
✅ /usage: 플랜 사용량 항목별 세분화 분석
✅ /extra-usage → /usage-credits (이름 변경, 구 이름도 작동)
```

버전 확인 및 업데이트:
```bash
claude update  # v2.1.143 ~ v2.1.149 범위
claude --version
```
