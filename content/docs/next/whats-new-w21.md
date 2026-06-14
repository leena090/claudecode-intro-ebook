---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Auto mode(오토 모드)가 Pro 플랜에서도 쓸 수 있게 됐어요! /code-review 명령어 신설, 사용량 항목도 /usage-credits로 이름이 바뀌었습니다"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage-credits", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-14"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 21 (2026-05-18 ~ 2026-05-22) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w21" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w21</a>
</div>

## 이번 주 핵심 변경

---

### 1️⃣ Auto mode — 이제 Pro 플랜에서도!

**Auto mode(오토 모드)** 가 이전에는 Max·Team·Enterprise 플랜에서만 가능했는데, 이번 업데이트로 **Pro 플랜**에서도 쓸 수 있게 됐어요. 게다가 **Sonnet 4.6(소넷)** 모델에서도 지원됩니다!

> 🔑 **Auto mode가 뭔가요?**
> 매번 "이걸 해도 돼요?" 확인 창이 뜨는 대신, Claude가 알아서 판단해요.
> 위험한 명령은 자동으로 막고, 일상적인 작업은 스스로 처리합니다.

> 🍱 **비유**: 처음 은행 앱을 쓸 때는 이체할 때마다 비밀번호를 입력하지만, 자주 쓰는 계좌는 "간편 이체"로 등록해두는 것처럼요. Auto mode는 Claude에게 "이 정도는 알아서 해"라고 신뢰를 준 거예요.

**활성화 방법:**

```bash
# 먼저 Claude Code 업데이트
claude update

# 터미널에서 Shift+Tab을 눌러 모드 전환
# Auto mode는 계정 조건을 충족하면 선택지에 나타나요
```

| 모드 | 설명 |
|------|------|
| **기본 모드** | 파일 수정·명령 실행 전에 매번 확인 요청 |
| **Accept Edits** | 파일 수정은 자동, 명령 실행은 확인 |
| **Auto mode ✨ (신규)** | 안전한 작업은 자동, 위험한 건 자동 차단 |

<div class="note-circle">
○ Auto mode는 Pro 플랜 조건 충족 후 Shift+Tab으로 전환해요<br />
○ 위험 판단을 AI가 하므로, 처음엔 어떤 작업이 허용되는지 살펴보세요<br />
○ 더 세밀한 설정은 <a href="/docs/advanced/permission-modes">Auto mode 상세 가이드</a>를 참고하세요
</div>

---

### 2️⃣ `/code-review` — Claude가 내 코드의 버그를 찾아줘요

새로 생긴 **`/code-review`** 명령어로 Claude가 코드를 꼼꼼히 검사해서 버그를 찾아줄 수 있어요.

```bash
# 기본 리뷰 (표준 수준)
/code-review

# 높은 강도로 꼼꼼하게 검사
/code-review high

# GitHub PR에 댓글로 리뷰 결과 자동 게시
/code-review --comment
```

> 🍱 **비유**: 리포트를 쓰고 나서 선생님에게 첨삭을 받는 것처럼, 코드를 다 짜고 나서 `/code-review`를 실행하면 Claude가 "이 부분 논리 오류 있어요" 라고 알려줘요.

**리뷰 강도 선택:**

| 옵션 | 내용 | 언제 쓰나 |
|------|------|-----------|
| (없음) | 표준 검사 | 빠른 확인할 때 |
| `high` | 꼼꼼한 검사 | PR 올리기 전 |
| `--comment` | GitHub PR 댓글로 결과 올리기 | 팀 리뷰 받을 때 |

<div class="note-circle">
○ /code-review는 <strong>버그 찾기</strong> 전용이에요<br />
○ 코드 간결화·정리는 기존 <code>/simplify</code> 명령어를 써요<br />
○ 두 명령어를 함께 쓰면 버그도 잡고 코드도 정리할 수 있어요
</div>

---

### 3️⃣ `/usage-credits` — 사용량 이름이 바뀌었어요

이전에 **"Extra usage(추가 사용량)"** 이라고 부르던 게 이제 **"Usage credits(유세지 크레딧, 사용 크레딧)"** 으로 이름이 바뀌었어요. 명령어도 함께 바뀌었습니다.

```bash
# 새 명령어
/usage-credits

# 이전 명령어도 아직 작동해요 (하위 호환)
/extra-usage
```

그리고 `/usage` 명령어가 더 똑똑해졌어요 — 이제 **어떤 기능이 사용량을 많이 쓰는지** 항목별로 볼 수 있어요:

```bash
/usage
# → 스킬(Skills), 서브에이전트(Subagents), 플러그인(Plugins), MCP 서버별 사용량 표시
```

> 🍱 **비유**: 전기 요금 청구서에 "냉장고 00원, 에어컨 00원, TV 00원"처럼 항목별로 나오는 것처럼, 이제 Claude Code도 뭐가 사용량을 많이 잡아먹는지 한눈에 볼 수 있어요.

---

## 기타 소소한 개선들

| 기능 | 내용 |
|------|------|
| **백그라운드 세션 표시** | `/resume`에서 백그라운드 실행 세션도 `bg` 표시로 함께 표시 |
| **`claude agents --json`** | 현재 실행 중인 세션 목록을 JSON 형식으로 출력 (자동화·스크립트용) |
| **마크다운 체크박스** | 응답에서 `- [ ]`, `- [x]` 체크박스가 제대로 표시됨 |
| **상태바 GitHub 정보** | 상태 표시줄에서 GitHub 저장소·PR 정보 자동 반영 |
| **플러그인 비활성화 보호** | 다른 플러그인이 의존하는 플러그인은 함부로 끌 수 없음 |
| **Windows PowerShell 기본 활성화** | Bedrock·Vertex·Foundry 사용자: PowerShell 도구 기본 켜짐 |

---

## 이번 주 요약

```
✅ Auto mode: 이제 Pro 플랜에서도 사용 가능 (Sonnet 4.6 포함)
✅ /code-review: 코드 버그 자동 검사 명령어 신설
✅ /usage-credits: 사용량 항목별 세분화 + 이름 변경
```

버전 확인:
```bash
claude --version
# v2.1.143 이상이면 이번 주 기능 모두 사용 가능
```
