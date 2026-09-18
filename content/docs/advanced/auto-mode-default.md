---
title: "[공] Auto mode 기본값 전환 + Projects 기능 — 2026년 9월 업데이트"
description: "Claude Code가 Pro·Max·Team 플랜에서 Auto mode로 기본 시작합니다. 동시에 여러 에이전트를 한 화면에서 감독하는 Projects 기능도 소개"
tags: ["자동생성", "Auto mode", "Projects", "기본모드", "에이전트감독", "다중세션", "Pro", "Max", "Team"]
category: "advanced"
order: 28
lastUpdated: "2026-09-18"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 공식 페이지: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Blog Sep 17, 2026)<br />
★ <strong>[공]</strong> Auto mode 설정: <a href="https://code.claude.com/docs/en/auto-mode-config">code.claude.com/docs/en/auto-mode-config</a>
</div>

---

## 🆕 Auto mode가 이제 기본값이에요!

> 🍱 **비유로 설명하면**: 자동차를 샀더니, 예전에는 수동(Manual) 기어가 기본이었는데 이제는 오토(Auto) 기어가 기본값으로 나와요. 원하면 수동으로 바꿀 수 있지만, 처음부터 더 편한 자동 모드로 시작하는 거예요.

**2026년 9월 17일부터**, Claude Code가 **Pro·Max·Team 플랜**에서 기본적으로 **Auto mode**로 시작해요.

| 변경 내용 | 이전 | 현재 |
|---|---|---|
| 기본 실행 모드 | Manual mode | **Auto mode** |
| 적용 플랜 | — | Pro, Max, Team |
| 위험한 명령 차단 | 수동 확인 필요 | **자동 안전 분류기(classifier) 포함** |

---

## Auto mode란?

**Auto mode**는 Claude가 더 오래, 더 자율적으로 작업할 수 있게 해주는 실행 모드예요.

```
🔵 Auto mode (새 기본값)
  → Claude가 대부분의 작업을 자율적으로 처리
  → 위험할 수 있는 명령에만 확인 요청
  → 안전 분류기가 백그라운드에서 리스크 감지

🔵 Manual mode (이전 기본값)
  → 모든 파일 편집, 명령 실행 전 확인 요청
  → 세밀한 제어가 필요할 때 사용

🔵 bypassPermissions (고급)
  → 모든 권한 확인 건너뜀 (주의해서 사용)
```

### Auto mode의 안전 장치

Claude Code가 자율적으로 실행되는 동안, 백그라운드 **안전 분류기(classifier)**가 지켜봐요:

- 🚫 클라우드 인스턴스 메타데이터 엔드포인트 접근 차단
- 🚫 데이터 유출 가능성이 있는 명령 차단
- 🚫 인접 컨테이너 연결 시도 차단
- ✅ 차단 시 어떤 규칙에 걸렸는지 표시 (예: `[Data Exfiltration]`)

> 💡 **자동 차단 규칙을 허용 목록에 추가하려면**: 공식 문서 [auto-mode-config](https://code.claude.com/docs/en/auto-mode-config)에서 allow rule 추가 방법을 확인하세요.

---

## 모드 전환하는 법

### 지금 세션에서 전환

```text
> /mode auto      # Auto mode로 전환
> /mode manual    # Manual mode로 전환
```

또는 세션 시작 시:

```bash
claude --permission-mode auto      # Auto mode
claude --permission-mode manual    # Manual mode
```

### 기본값 변경

```json
// ~/.claude/settings.json (사용자 전역 설정)
{
  "defaultMode": "manual"   // auto mode가 싫으면 이렇게 설정
}
```

> ⚠️ **프로젝트 설정(.claude/settings.json)에서 `bypassPermissions`는 이제 무시됩니다.** 사용자 설정이나 managed settings에서만 동작해요. (W36 변경사항)

---

## 🆕 Projects — 여러 에이전트를 한 화면에서 감독

> 🍱 **비유로 설명하면**: 공사 현장 감독처럼, 여러 작업반(에이전트)이 동시에 일하는 것을 **한 화면**에서 전부 보고 지시할 수 있어요.

**Projects**는 **Claude Code Desktop 앱**에서만 사용할 수 있는 기능으로:

- 관련된 코딩 세션들을 **프로젝트 단위로 그룹화**
- 여러 Claude 에이전트를 **동시에 실행하면서 한 화면에서 감독**
- 세션 간에 맥락(context)을 공유하거나 독립적으로 실행

```
📁 프로젝트: 쇼핑몰 개발
  ├─ 세션 1: 결제 버그 수정 [Auto mode 실행 중...]
  ├─ 세션 2: 테스트 작성 [완료 - 검토 필요]
  └─ 세션 3: DB 마이그레이션 [대기 중]
```

> 📌 Projects 기능은 **Claude Code Desktop 앱**에서 사용 가능해요. 웹이나 CLI에서는 지원되지 않아요(공식 발표 기준).

---

## Auto mode에서 자주 쓰는 시나리오

### 시나리오 1: 큰 리팩토링 작업 맡기기

```text
> 이 프로젝트의 JavaScript 파일을 TypeScript로 변환해줘. 타입 에러가 없을 때까지 계속 작업해줘.
```

Auto mode에서 Claude는:
1. 파일을 분석하고 변환 계획 수립
2. 파일들을 순서대로 변환
3. 타입 에러 발생 시 자동으로 수정 시도
4. 완료될 때까지 계속 작업 (중간에 확인 요청 최소화)

### 시나리오 2: CI 실패 자동 수정

```text
> CI가 실패한 테스트를 찾아서 고쳐줘
```

### 시나리오 3: 복잡한 마이그레이션

```text
> 데이터베이스 스키마를 v2로 마이그레이션하는 스크립트를 만들고 테스트해줘
```

---

## Auto mode vs Manual mode — 언제 어떤 걸 써요?

| 상황 | 추천 모드 |
|---|---|
| 큰 리팩토링, 마이그레이션 | **Auto mode** |
| 여러 에이전트 병렬 작업 | **Auto mode** |
| 처음 보는 코드베이스에서 실험 | **Manual mode** (안전하게) |
| 중요한 파일 편집 전 확인 원할 때 | **Manual mode** |
| 완전히 신뢰하는 환경, 속도 우선 | **bypassPermissions** (주의) |

> 💡 **팁**: Auto mode가 기본값이 됐지만, 언제든 `/mode manual`로 전환할 수 있어요. 처음엔 Auto mode로 시작해서 Claude가 어떤 식으로 작업하는지 지켜보는 것도 좋은 방법이에요.
