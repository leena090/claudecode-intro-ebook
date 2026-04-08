---
title: "권한 시스템 이해하기"
description: "클로드 코드가 할 수 있는 일과 할 수 없는 일을 제어하는 권한 체계 + auto 모드 (v2.1.83~)"
category: "config"
order: 3
tags: ["권한", "보안", "접근제어", "auto모드", "permission modes"]
lastUpdated: "2026-04-09"
---

## 권한 시스템이란?

**권한 시스템**은 AI 어시스턴트가 "뭘 할 수 있고 뭘 할 수 없는지" 정하는 보안 체계입니다. 마치 은행에서 계좌별로 인출 한도를 정하듯이, 각 도구(Tool)별로 허용 범위를 설정합니다.

---

## 3가지 권한 수준

### 1. ✅ Allow (자동 허용)
```
AI가 즉시 실행 — 확인 없음
```
- 빠르고 편리함
- 자주 쓰는 도구에만 설정
- 위험한 명령은 금지

### 2. ❓ Ask (매번 확인)
```
실행하기 전에 "실행할까?" 하고 물어봄
```
- 가장 안전함
- 기본값으로 권장
- 약간 느림

### 3. ❌ Deny (자동 거부)
```
실행 불가 — 이유 설명 후 거부
```
- 위험한 명령 차단
- 예: 전체 파일 삭제, 민감정보 접근

---

## 권한 설정 예시

### 기본 권한 수준 정하기

```json
{
  "permissions": {
    "mode": "ask"
  }
}
```

**3가지 기본 모드:**
- `"default"` — 도구마다 다르게 (권권권장)
- `"ask"` — 모든 도구는 물어봄
- `"allowlist"` — 명시된 도구만 허용

---

### 도구별 세부 권한

```json
{
  "permissions": {
    "allowlist": [
      "Read",              ← 파일 읽기는 항상 허용
      "Write",             ← 파일 쓰기도 허용
      "Bash(git:*)",       ← Git 명령만 허용
      "Bash(npm:*)"        ← npm 명령만 허용
    ],
    "denylist": [
      "Bash(rm:*)",        ← rm 삭제 명령 금지
      "Bash(sudo:*)"       ← sudo 명령 금지
    ]
  }
}
```

<div class="note-circle">
  ○ allowlist에 있는 도구는 Ask 확인 없이 실행됩니다
</div>

---

## 주요 도구별 권한

### 파일 작업
```json
{
  "Read": "파일 읽기",
  "Write": "파일 생성/수정",
  "Edit": "파일 부분 편집",
  "Glob": "파일 검색"
}
```

### 터미널 명령
```json
{
  "Bash(git:*)": "Git 사용 (Push, Pull, Commit)",
  "Bash(npm:*)": "Node.js 패키지 관리",
  "Bash(python:*)": "Python 실행",
  "Bash(rm:*)": "파일 삭제 (위험!)"
}
```

### 외부 연결
```json
{
  "WebSearch": "인터넷 검색",
  "WebFetch": "웹페이지 접근",
  "SendMessage": "팀 메시지 전송"
}
```

---

## 프로젝트별 권한 설정

### 안전한 설정 (개인 프로젝트)
```json
{
  "permissions": {
    "mode": "ask",
    "allowlist": ["Read", "Write", "Edit"]
  }
}
```

**특징:**
- 파일 작업만 자유로움
- 터미널 명령은 매번 확인
- 가장 안전함

---

### 개발자용 설정 (회사 프로젝트)
```json
{
  "permissions": {
    "allowlist": [
      "Read",
      "Write",
      "Edit",
      "Bash(git:*)",
      "Bash(npm:test)",
      "Bash(npm:build)"
    ],
    "denylist": [
      "Bash(rm:*)",
      "Bash(mv:*)",
      "Bash(sudo:*)"
    ]
  }
}
```

**특징:**
- 개발 작업은 자유로움
- 위험한 삭제/이동 명령은 금지
- 생산성과 안전성 균형

---

## Glob 패턴으로 세밀하게 제어

### 특정 폴더만 수정 허용
```json
{
  "allowlist": [
    "Write(/Users/mylee/Desktop/safe/**)",
    "Edit(/Users/mylee/Desktop/safe/**)"
  ],
  "denylist": [
    "Write(/Users/mylee/Desktop/sensitive/**)"
  ]
}
```

### 특정 파일 형식만 수정 허용
```json
{
  "allowlist": [
    "Write(**.md)",
    "Write(**.txt)",
    "Write(**.json)"
  ],
  "denylist": [
    "Write(**.py)",
    "Write(**.js)"
  ]
}
```

---

## 보안 체크리스트

<div class="note-star">
  ★ 다음 명령은 절대 Allow로 설정하지 마세요!
</div>

```json
❌ "Bash(rm:*)"        ← 전체 파일 삭제
❌ "Bash(mv:*)"        ← 파일 이동/이름변경
❌ "Bash(sudo:*)"      ← 관리자 권한
❌ "Bash(chmod:*)"     ← 권한 변경
```

**대신 Ask로 설정하세요:**
```json
{
  "mode": "ask"
}
```

---

## 💡 쉽게 이해하기

권한 시스템은 **신용카드 한도 설정**과 같습니다.

- **한도 없음:** 도둑이 카드를 훔치면 큰 손실
- **한도 설정:** 최대 손실액이 제한됨
- **카테고리별 한도:** 식당은 5만원, 쇼핑은 10만원
- **매번 승인:** 모든 사용을 사전 승인 (가장 안전함)

당신의 AI 어시스턴트도 마찬가지입니다:
- 위험한 일은 물어보게 설정
- 안전한 일은 자동으로 진행
- 민감한 폴더는 접근 금지

---

## 권한 오류 해결

### 문제: "Permission Denied" 오류
```
오류: Permission denied for Bash(npm:*)
```

**해결책:** settings.json에 추가
```json
{
  "allowlist": ["Bash(npm:*)"]
}
```

### 문제: 너무 자주 확인됨
```
해결책: Ask 빈도를 줄이기
"mode": "allow"로 변경하되, denylist로 위험한 것만 차단
```

---

## 🆕 Recent 탭 — 거부된 명령 모아보기 (v2.1.89~)

```bash
/permissions
```

**역할:** `/permissions` 명령어에 **Recent 탭**이 추가됐어요. 최근에 거부되었던 명령들을 한눈에 보고, 필요하면 **바로 다시 시도**할 수 있습니다.

> 🍱 **비유로 설명하면**: 카톡에서 "차단된 메시지 목록"을 보는 것과 비슷해요. 차단한 걸 다시 꺼내볼 수 있죠.

**활용:**
- 내가 실수로 거부한 명령을 다시 허용하고 싶을 때
- 어떤 명령이 자주 막혔는지 통계 파악
- 필요한 명령어를 allowlist에 추가할 후보 찾기

<div class="note-circle">
○ v2.1.89(2026-04-01)에 추가됐어요.
</div>

---

## 🎛️ 6가지 권한 모드 — Shift+Tab으로 전환

개별 도구별 Allow/Ask/Deny 말고, **세션 전체의 기본 톤을 바꾸는 모드** 6가지가 따로 있어요. 상황에 따라 "꼼꼼히 검토"와 "빠르게 진행"을 오갈 수 있습니다.

**CLI에서 `Shift + Tab`** 을 누르면 모드 사이클이 돌아갑니다. 상태 바에 현재 모드가 표시돼요.

| 모드 | 프롬프트 없이 실행되는 것 | 언제 쓰나 |
|---|---|---|
| **`default`** | 읽기만 | 시작할 때, 민감한 작업 |
| **`acceptEdits`** | 읽기 + 파일 수정 | 코드 수정 흐름 빠르게 |
| **`plan`** | 읽기만 (수정·실행 차단) | 설계 먼저 해야 할 때 |
| **`auto`** ⭐ | **거의 전부** — 단, 백그라운드 classifier가 안전 검사 | 긴 작업, 프롬프트 피로 |
| **`dontAsk`** | 사전 허용한 도구만 | CI·자동화 스크립트 |
| **`bypassPermissions`** | **모든 것** (검사 없음) — 위험 | 격리된 컨테이너·VM만 |

> 🍱 **비유로 설명하면**: 은행 지점에서 직원에게 권한을 주는 방식 같아요.
> - `default` = 모든 거래 확인
> - `acceptEdits` = 일상 입출금은 알아서, 대출은 확인
> - `plan` = 상담만 가능, 거래 금지
> - **`auto` = 거래 가능하되 본사 감사팀이 실시간으로 이상 거래 차단**
> - `dontAsk` = 사전 등록된 VIP 업무만 처리
> - `bypassPermissions` = 모든 거래 무조건 승인 (테스트 지점)

---

## ⭐ auto 모드 완전 가이드 (v2.1.83~)

<div class="note-star">
★ <strong>auto 모드는 Research Preview</strong>입니다. 권한 프롬프트를 제거하면서도 <strong>별도 classifier 모델이 백그라운드에서 안전 검사</strong>하는 혁신적 모드예요. 창시자의 <a href="https://claude.com/blog/auto-mode">공식 블로그 발표</a>와 Anthropic 엔지니어링 <a href="https://www.anthropic.com/engineering/claude-code-auto-mode">딥 다이브</a>가 있습니다.
</div>

### auto 모드가 뭔가요?

일반 모드에서는 Claude가 파일을 쓰거나 명령어를 실행할 때마다 *"실행할까요?"* 프롬프트가 뜹니다. 긴 작업할 때 이게 정말 피곤해요.

**auto 모드**는 이 프롬프트를 없애는데, 그냥 없애는 게 아니라 **별도 classifier 모델**이 각 액션을 백그라운드에서 검사합니다. 위험하다고 판단되면 차단해요.

> 🍱 **비유로 설명하면**: 신입 직원에게 *"알아서 처리하세요"* 라고 했는데, 옆에서 **감사팀이 실시간으로 지켜보다가 위험한 결정은 중간에서 막는** 시스템이에요. `bypassPermissions` 는 감사팀도 없이 풀어주는 거고, `auto` 는 감사팀이 지켜보는 거죠.

### ⚠️ 사용 조건 (중요!)

다음 **전부** 충족해야 쓸 수 있어요. 하나라도 안 맞으면 "auto 모드 사용 불가" 메시지가 떠요.

| 조건 | 요구사항 |
|---|---|
| **플랜** | **Team, Enterprise, API만** (Pro·Max 불가 ❌) |
| **관리자 승인** | Team·Enterprise는 관리자가 [Claude Code admin settings](https://claude.ai/admin-settings/claude-code)에서 활성화 |
| **모델** | **Sonnet 4.6** 또는 **Opus 4.6** 만 (Haiku·구버전 불가) |
| **프로바이더** | **Anthropic API만** (Bedrock, Vertex, Foundry 불가) |

<div class="note-circle">
○ <strong>개인 사용자(Pro·Max)는 당장은 쓸 수 없어요</strong>. Anthropic이 앞으로 확대할 가능성은 있지만 2026-04-09 현재 제한입니다. 대신 <code>bypassPermissions</code>가 있지만, 안전 검사가 없어서 격리된 환경(컨테이너·VM)에서만 권장.
</div>

### 활성화 방법

```bash
# 최초 활성화 시 한 번만
claude --enable-auto-mode
```

이후에는 `Shift+Tab` 사이클에 **`auto`** 가 추가돼서 키 하나로 전환 가능. 설정에 영구 저장하려면 `settings.json`에:

```json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

(또는 Claude한테 *"auto 모드를 기본으로 설정해줘"* 말로 시키기.)

### ✅ 자동 허용되는 것 / ❌ 자동 차단되는 것

classifier가 미리 정해둔 기준:

| 자동 허용 | 자동 차단 |
|---|---|
| 로컬 파일 작업 (워킹 디렉토리 내) | `curl | bash` 같은 외부 코드 다운·실행 |
| 의존성 설치 (lock 파일·manifest 기반) | 민감 데이터 외부 전송 |
| `.env` 읽기 + 해당 API로 전송 | 운영 배포·DB 마이그레이션 |
| 읽기 전용 HTTP 요청 | 클라우드 스토리지 대량 삭제 |
| 원래 브랜치 or Claude가 만든 브랜치에 push | IAM·리포 권한 변경 |
| | 공유 인프라 수정 |
| | 세션 시작 전 존재하던 파일 영구 삭제 |
| | **force push, main에 직접 push** |

전체 기준 확인: `claude auto-mode defaults` 명령어

### 🛟 auto 모드가 실패하면?

classifier가 액션을 차단하면:
1. 알림이 뜨고 `/permissions`의 "Recently denied" 탭에 기록됨
2. `r` 키 눌러서 수동 승인으로 재시도 가능
3. **연속 3번 or 총 20번 차단**되면 auto 모드가 일시 중단되고 일반 프롬프트 모드로 복귀
4. 수동 승인 후 다시 auto 모드로 복귀

> **즉**, 잘못 쓰면 알아서 안전 모드로 돌아오는 안전장치가 있어요. 완전히 방치해도 폭주하지 않습니다.

### 언제 쓰면 좋나요?

- ✅ **긴 리팩토링 작업** — 30분 동안 프롬프트 10번 뜨는 걸 참기 힘들 때
- ✅ **에이전트 팀 작업** — 여러 팀원 각각 승인하기 번거로울 때
- ✅ **신뢰하는 방향의 작업** — 설계는 확정, 실행만 남았을 때
- ❌ **민감한 운영 환경 수정** — 여전히 `default`로 꼼꼼히 검토
- ❌ **처음 써보는 도구 테스트** — 어떤 명령어가 나올지 모를 때

### `auto` vs `bypassPermissions` 차이

<div class="note-star">
★ <strong>둘 다 "프롬프트를 안 띄운다"지만 안전 수준이 완전히 달라요.</strong>
</div>

| | `bypassPermissions` | `auto` ⭐ |
|---|---|---|
| 백그라운드 검사 | ❌ 없음 | ✅ **classifier 검사** |
| 사용 권장 환경 | 격리된 컨테이너·VM만 | 일상 작업 가능 |
| 위험 액션 차단 | ❌ 불가 | ✅ **자동 차단** |
| 프롬프트 주입 보호 | ❌ 취약 | ✅ 별도 scanner |
| 플랜 요구사항 | 없음 | **Team/Enterprise/API + Sonnet/Opus 4.6** |

**공식 문서 경고**: *"bypassPermissions offers no protection against prompt injection. For background safety checks without prompts, use auto mode instead."*

---

## 🔑 중단 없는 워크플로우 — 와일드카드 패턴 [R]

권한을 너무 촘촘히 물어보면 매번 "실행할까요?" 팝업이 떠서 집중이 깨져요. 커뮤니티 검증된 **3단계 계층 + 와일드카드 패턴**을 써봅시다.

### 3단계 우선순위
```
User (~/.claude/settings.json)     ← 전역
    ↓ 덮어씀
Project (./.claude/settings.json)  ← 프로젝트
    ↓ 덮어씀
Local (./.claude/settings.local.json) ← 개인용, gitignore
```

더 구체적인(아래쪽) 설정이 우선이에요.

### 와일드카드 패턴 예시

```json
{
  "permissions": {
    "mode": "ask",
    "allowlist": [
      "Read", "Write", "Edit",
      "Bash(git:*)",
      "Bash(npm:*)",
      "Bash(node:*)",
      "Bash(python:*)",
      "mcp__plugin_playwright_playwright__*"
    ],
    "denylist": [
      "Bash(rm -rf:*)",
      "Bash(sudo:*)"
    ]
  }
}
```

### 원칙: "돌이킬 수 있는 건 허용, 돌이킬 수 없는 건 확인"

| 종류 | 권한 설정 |
|---|---|
| **읽기·되돌릴 수 있는 작업** (read, git commit, test) | ✅ 자동 허용 |
| **돌이킬 수 없는 작업** (rm, db migration, push to main) | ❓ 매번 확인 |
| **외부에 영향** (Slack 메시지, 이메일 발송) | ❓ 매번 확인 |

> 🍱 **비유로 설명하면**: 집 청소는 아이에게 맡겨도 되지만, 현관문 열쇠는 매번 허락받게 하는 거예요. 되돌릴 수 없는 실수를 막는 게 핵심.

<div class="note-circle">
○ 출처: <code>[R]</code> Rajiv Pant "Stop Asking Me: Configuring Claude Code Permissions" (2026-03-31)
</div>

---

## 다음 단계

권한을 설정했다면, **Hooks로 자동화**를 배워봅시다!
