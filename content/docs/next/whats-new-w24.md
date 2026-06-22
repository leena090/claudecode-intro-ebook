---
title: "[공] 주간 업데이트: 2026년 6월 8~12일 (Week 24)"
description: "/cd로 세션 이동 없이 다른 폴더로, 서브에이전트가 서브에이전트 생성, --safe-mode로 설정 문제 진단 — Week 24 핵심 3가지"
tags: ["업데이트", "2026", "week24", "cd-command", "subagents", "safe-mode", "fallbackModel", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-06-22"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 24 (2026-06-08 ~ 2026-06-12), Claude Code v2.1.166 → v2.1.176. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w24</a>
</div>

## 이번 주 핵심 변경 (3개)

---

### 1️⃣ `/cd` — 세션 재시작 없이 다른 프로젝트 폴더로 이동 🆕

새 명령어 `/cd`를 쓰면 **현재 세션을 종료하지 않고** 다른 프로젝트 폴더로 이동할 수 있어요.

> 🍱 **비유**: 책상에서 하던 작업을 끝내고 옆방으로 옮기는데, 지금까지 한 대화 내용은 그대로 기억하면서 새 방의 규칙(CLAUDE.md)만 추가로 읽어주는 거예요.

#### 어떻게 쓰나요?

```text
# 같은 레벨에 있는 다른 프로젝트로 이동
> /cd ../other-project

# 특정 경로로 이동
> /cd ~/projects/my-new-app
```

#### 특징

| 항목 | 내용 |
|------|------|
| 프롬프트 캐시 | 유지됨 (새로 빌드 안 해요 — 빠름!) |
| CLAUDE.md | 새 폴더의 CLAUDE.md가 대화 메시지로 추가됨 |
| `--resume` / `--continue` | 새 폴더 기준으로 세션 이어받기 가능 |
| 처음 가는 폴더 | 신뢰 여부 물어봄 (보안 확인) |

#### 실전 예시: 두 프로젝트 오가며 작업하기

```text
# 프론트엔드 작업
> /cd ~/projects/frontend
> 로그인 버튼 스타일 고쳐줘

# 같은 세션에서 백엔드로 이동 (대화 기억 유지)
> /cd ../backend
> 로그인 API 엔드포인트 확인해줘
```

---

### 2️⃣ 서브에이전트가 또 서브에이전트를 낳는다 🌳

이제 서브에이전트(하위 에이전트)가 자신만의 서브에이전트를 또 생성할 수 있어요.

> 🍱 **비유**: 팀장이 팀원 A에게 일을 시켰는데, A가 다시 보조 팀원들을 불러서 세부 작업을 나눠 처리하는 거예요. 계층 구조로 일이 쭉쭉 나뉘어요.

```text
# 에이전트 패널에서 전체 트리 확인
> /agents
```

#### 제한 및 특징

| 항목 | 내용 |
|------|------|
| 최대 깊이 | **5단계** (무한 루프 방지) |
| 화면 표시 | 패널에 트리 구조로 보임 (자식 수, main까지 경로 표시) |
| 용도 | Dynamic Workflows에서 복잡한 계층 작업 처리 |

```
main 에이전트
 └─ 서브에이전트 A (자식 3개)
     ├─ 서브에이전트 A-1
     ├─ 서브에이전트 A-2
     └─ 서브에이전트 A-3
 └─ 서브에이전트 B (자식 2개)
     ├─ 서브에이전트 B-1
     └─ 서브에이전트 B-2
```

---

### 3️⃣ `--safe-mode` — 설정 문제를 깔끔하게 진단하기 🔧

Claude Code가 이상하게 동작할 때, **모든 커스터마이징을 끄고 시작**하는 진단 모드예요.

> 🍱 **비유**: 컴퓨터가 이상할 때 윈도우를 "안전 모드"로 켜서 문제를 찾는 것과 똑같아요. 내 설정 파일이 문제인지 아니면 Claude 자체 문제인지 바로 알 수 있어요.

```bash
# 세이프 모드로 실행
claude --safe-mode

# 또는 환경 변수로 설정
export CLAUDE_CODE_SAFE_MODE=1
claude
```

#### 세이프 모드에서 비활성화되는 것들

| 비활성화 ❌ | 활성화 유지 ✅ |
|-----------|-------------|
| CLAUDE.md 로드 | 인증 (로그인) |
| 스킬·플러그인 | 모델 선택 |
| 훅(Hooks) | 기본 내장 도구 |
| MCP 서버 | 권한 설정 |
| 커스텀 명령·에이전트 | |

**세이프 모드에서 문제가 사라졌다면?** → CLAUDE.md, 훅, MCP 서버, 플러그인 중 하나가 원인이에요.

<div class="note-circle">
○ 연관: <a href="/docs/config/debug-your-config">설정 디버깅 가이드</a>
</div>

---

## 기타 변경사항 요약

| 변경 내용 | 설명 |
|---------|------|
| **`fallbackModel` 설정** | 기본 모델 과부하·불가 시 최대 3개 대체 모델 순서대로 시도 (`--fallback-model` 대화형에서도 작동) |
| **세션 제목 자동 번역** | 대화 언어에 맞게 세션 제목 생성 (한국어 대화 → 한국어 제목) |
| **`claude agents --json --all`** | 완료된 세션 포함 + `id`·`state` 필드 추가 |
| **플러그인 마켓 검색바** | `/plugin` 마켓플레이스 브라우징에 검색바 추가 |
| **`disableBundledSkills` 설정** | 기본 내장 스킬·워크플로·명령을 모델에게 숨기기 (`CLAUDE_CODE_DISABLE_BUNDLED_SKILLS` 환경변수도 지원) |
| **거부 규칙 글로브 지원** | `"*"` 패턴으로 모든 도구 거부 가능; 알 수 없는 도구 이름은 시작 시 경고 |
| **교차 세션 보안 강화** | SendMessage로 전달된 메시지가 사용자 권한 갖지 않음; 오토 모드에서 차단 |
| **Bedrock 리전 자동 감지** | `AWS_REGION` 없을 때 `~/.aws` 파일에서 리전 자동 읽기; `/status`에 리전 출처 표시 |
| **`enforceAvailableModels`** | 관리 설정의 모델 허용 목록이 기본 모델도 제한 |
| **`claude update` 개선** | 다운로드 전에 대상 버전 번호 미리 표시 |
| **`footerLinksRegexes`** | 설정으로 푸터에 커스텀 링크 배지 추가 |

---

## 입문자에게 특히 유용한 기능 (한 줄 정리)

| 기능 | 이럴 때 써요 |
|------|------------|
| `/cd` | 두 프로젝트 오가며 작업할 때 |
| `--safe-mode` | Claude가 갑자기 이상하게 동작할 때 |
| `fallbackModel` | 모델 과부하 시 자동 대체 원할 때 |
| 세션 제목 자동 한국어화 | 한국어 대화하면 제목도 한국어로 |

---

<div class="note-circle">
○ 릴리즈: Claude Code <a href="https://code.claude.com/docs/en/changelog#2-1-166" target="_blank">v2.1.166 → v2.1.176</a><br />
○ 기간: 2026-06-08 ~ 2026-06-12<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/whats-new/2026-w24" target="_blank">code.claude.com/docs/en/whats-new/2026-w24</a><br />
○ 연관: <a href="/docs/advanced/agents-parallel">서브에이전트 활용</a> · <a href="/docs/next/whats-new-w23">Week 23 업데이트</a>
</div>
