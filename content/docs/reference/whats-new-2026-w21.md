---
title: "[공] 주간 업데이트 Week 21 — Auto Mode Pro 개방·/usage 세부 내역·/code-review 신규 (2026년 5월 18~22일)"
description: "Pro 플랜에서도 Auto Mode 사용 가능, /usage가 플랜 한도를 무엇이 쓰고 있는지 카테고리별로 보여주고, 새 /code-review 명령어로 코드의 버그를 AI가 찾아줘요"
tags: ["자동생성", "업데이트", "auto-mode", "usage", "code-review", "week21"]
category: "reference"
order: 9
lastUpdated: "2026-06-07"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 이 문서는 <a href="https://code.claude.com/docs/en/whats-new/2026-w21">code.claude.com 주간 업데이트 Week 21</a>을 바탕으로 작성됐어요. (버전 v2.1.143 → v2.1.149)
</div>

## 이번 주(5월 18~22일)에 뭐가 달라졌나요?

이번 Week 21은 **"Pro 플랜 사용자에게 자동화 문을 활짝 연 주"**예요. Auto Mode가 Pro 플랜에서도 쓸 수 있게 됐고, 요금 내역도 훨씬 상세하게 볼 수 있어요.

---

## 1. 🤖 Auto Mode — Pro 플랜에서도 드디어!

### 뭔가요?

Auto Mode(자동 모드)는 Claude Code가 **스스로 판단해서 파일을 수정·실행**하되, 위험한 작업은 자동으로 막아주는 모드예요. 이번 주에 **Pro 플랜과 Sonnet 4.6** 모델에서도 사용 가능하게 됐어요.

> 🏠 **비유로 설명하면**: 집 청소를 도와주는 청소부를 고용했는데, 이전엔 "이것 치울까요?", "저것 닦을까요?"를 매번 물어봤다면, Auto Mode에선 청소부가 알아서 치우고 청소하면서 진짜 망설여지는 것(예: 비싼 도자기)만 물어보는 거예요.

### 어떻게 바뀌었나요?

| 항목 | 이전 | 이번 주 |
|---|---|---|
| 사용 가능 플랜 | Max, Team, Enterprise | **Pro 플랜도 추가** |
| 지원 모델 | Opus만 | **Sonnet 4.6도 추가** |
| 활성화 방법 | Shift+Tab 반복 | 동일 |

### 어떻게 켜나요?

```bash
# Claude Code 최신 버전으로 업데이트
claude update

# 그 다음 Shift+Tab 을 반복해서 모드 전환
# normal → accept edits → auto mode
```

> **💡 참고**: 계정 조건이 맞아야 Auto Mode가 보여요. 안 보이면 조금 기다리거나 업데이트를 확인해보세요.

<div class="note-star">
★ Auto Mode는 허가 없이 파일을 수정할 수 있지만, 위험한 명령(파일 삭제, git push 등)은 백그라운드 안전 검사기가 자동으로 막아요. <code>[공]</code>
</div>

---

## 2. 📊 /usage — 이제 뭐가 내 플랜 한도를 쓰고 있는지 보여줘요

### 뭐가 달라졌나요?

`/usage` 명령어가 이제 **단순 토큰 합계** 뿐 아니라, **카테고리별 세부 내역**을 보여줘요. 내 플랜 한도를 소모하고 있는 게 스킬인지, 서브에이전트인지, 플러그인인지, MCP 서버인지 정확히 알 수 있어요.

> 📱 **비유로 설명하면**: 핸드폰 요금제에서 이전엔 "이번 달 데이터 8GB 사용" 이렇게만 나왔는데, 이제는 "유튜브 3GB, 인스타그램 2GB, 카카오톡 1GB…" 이렇게 앱별로 나오는 것처럼요.

```bash
# 현재 사용량 확인
/usage
```

예시 출력:
```
이번 달 플랜 사용량:
  스킬(Skills)         ████░░  42%
  서브에이전트         ███░░░  31%
  MCP 서버 (github)    ██░░░░  18%
  플러그인             █░░░░░   9%
```

### 이름도 바뀌었어요

| 이전 이름 | 바뀐 이름 | 명령어 |
|---|---|---|
| Extra Usage (추가 사용량) | **Usage Credits (사용 크레딧)** | `/usage-credits` |
| `/extra-usage` | `/usage-credits` | 이전 이름도 아직 작동함 |

---

## 3. 🔍 /code-review — AI가 내 코드의 버그를 찾아줘요

### 뭔가요?

새로운 `/code-review` 명령어로 **현재 변경된 코드의 정확성 버그(correctness bugs)**를 AI가 검사해요.

> 🔬 **비유로 설명하면**: 요리사가 요리를 다 만들고 나서 전문 음식 비평가에게 "맛있게 됐나요? 문제 있으면 말해줘요"라고 맡기는 것처럼요. Claude가 스스로 쓴 코드를 다시 검토하는 거예요.

### 어떻게 사용하나요?

```bash
# 기본 리뷰 (보통 수준)
/code-review

# 강도 높은 리뷰 (더 꼼꼼하게)
/code-review high

# GitHub PR에 인라인 댓글로 리뷰 결과 게시
/code-review --comment
```

### `/code-review`와 `/simplify` 차이

| 명령어 | 찾는 것 | 목적 |
|---|---|---|
| `/code-review` | 버그, 오류, 잘못된 로직 | **정확성** 검사 |
| `/simplify` | 중복, 복잡한 코드, 비효율 | **가독성·효율성** 개선 |

두 명령어는 서로 **보완 관계**예요. 버그 찾기 → 코드 정리 순서로 같이 쓰면 좋아요.

---

## 이번 주 세부 업데이트

### 🗂️ 백그라운드 세션 관리

- `/resume` 명령어에 **백그라운드로 실행 중인 세션**도 표시돼요 (`bg` 표시)
- `Ctrl+T`로 고정한 세션은 아이들(대기) 상태에서도 살아있어요
- `claude agents --json`: 현재 실행 중인 세션 목록을 JSON으로 출력 (스크립트 활용 가능)

```bash
# 세션 목록을 JSON으로 받아 처리
claude agents --json | jq '.[] | select(.status == "waiting")'
```

### 🪟 Windows 개선

PowerShell 도구가 **Windows에서 Bedrock, Vertex, Foundry 사용자에게 기본 활성화**됐어요.

끄려면:
```bash
# 환경변수로 끄기
CLAUDE_CODE_USE_POWERSHELL_TOOL=0
```

### 🧩 플러그인 강화

- **플러그인 의존성 보호**: 다른 플러그인이 의존하는 플러그인은 `claude plugin disable` 거부
- **플러그인 마켓플레이스**: 설치 전에 예상 컨텍스트 비용 + 포함된 명령어·에이전트·스킬·훅·MCP/LSP 서버 목록 미리 확인 가능

### 🌿 Worktree(워크트리) 설정

`worktree.bgIsolation: "none"` 설정 추가: 워크트리가 실용적이지 않은 저장소에서 백그라운드 세션이 현재 작업 디렉토리를 직접 편집하도록 허용해요.

### 📝 마크다운 개선

- GFM(GitHub Flavored Markdown) 작업 목록 체크박스 렌더링 지원
- `/diff` 상세 보기에서 키보드로 스크롤 가능

### 🏢 Enterprise(기업) 기능

`allowAllClaudeAiMcps` 관리 설정: claude.ai 클라우드 MCP 커넥터를 `managed-mcp.json` 옆에서 로드할 수 있어요.

---

## 이번 주 업데이트 한눈에 보기

| 기능 | 핵심 변화 | 주요 혜택 |
|---|---|---|
| 🤖 Auto Mode | Pro 플랜·Sonnet 4.6 개방 | 더 많은 사람이 자동화 사용 가능 |
| 📊 /usage | 카테고리별 세부 내역 | 어디서 비용 쓰는지 파악 |
| 🔍 /code-review | 새 버그 검사 명령어 | AI 자가 리뷰 |
| 🗂️ 백그라운드 세션 | /resume에 bg 표시 | 멀티 세션 관리 강화 |
| 🪟 Windows | PowerShell 기본 활성화 | Windows 사용자 편의 향상 |

---

## 지난 주 업데이트도 놓쳤다면?

→ [Week 20 업데이트 — 에이전트 뷰·/goal·Fast Mode Opus 4.7](/docs/reference/whats-new-2026-w20)

---

## 더 알아보기

- [공식 Week 21 릴리즈 노트](https://code.claude.com/docs/en/whats-new/2026-w21)
- [Auto Mode 공식 문서](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode)
- [/code-review 공식 문서](https://code.claude.com/docs/en/code-review)
