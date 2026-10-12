---
title: "[공] Projects·Auto모드 기본값·Self-hosted — 2026년 8~10월 Claude Code 대형 업데이트"
description: "여러 에이전트를 한 화면에서 감독하는 Projects, Pro/Max/Team 플랜 전체에 Auto 모드가 기본 활성화, 내 서버에서 Claude Code를 돌리는 Self-hosted 환경까지 세 가지 큰 변화를 한 번에 정리했어요"
tags: ["자동생성", "Projects", "Auto모드", "기본값", "Self-hosted", "신기능", "Claude Code Desktop"]
category: "next"
order: 18
lastUpdated: "2026-10-12"
---

<div class="note-star">
★ <strong>[공]</strong> Auto mode by default: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 마케팅 페이지, Blog Sep 17, 2026<br />
★ <strong>[공]</strong> Self-hosted environments: claude.com/claude-code, Blog Aug 7, 2026<br />
★ <strong>[공]</strong> Projects: claude.com/claude-code 마케팅 페이지 최신 기능 하이라이트 (2026-10 기준)<br />
★ 세부 사항 일부는 공식 마케팅 페이지 기준이며, 추가 설정 방법은 공식 문서를 확인하세요.
</div>

## 2026년 8~10월, 무엇이 달라졌나요?

| 기능 | 발표 시기 | 핵심 변화 |
|---|---|---|
| **Self-hosted environments** | 2026-08-07 (퍼블릭 베타) | 내 서버·내 네트워크에서 Claude Code 실행 |
| **Auto mode by default** | 2026-09-17 | Pro/Max/Team 플랜 전체 Auto 모드 기본 활성화 |
| **Projects** | 2026-10 추정 | 관련 세션 그룹화 + 복수 에이전트 동시 감독 (Desktop) |

---

## 1. Projects — "관련 작업끼리 묶어서 에이전트 여러 개 한 번에 감독"

**공식 발표**: "Projects: Group related coding sessions so you can run and easily supervise multiple Claude agents at once. Available on Claude Code Desktop."

> 🍱 **비유로 설명하면**: 예전에는 에이전트 5개를 각각 다른 탭에서 따로따로 봐야 했어요. Projects는 "폴더"같은 개념이에요. 같은 프로젝트의 에이전트들을 하나의 폴더에 넣어두면, 그 폴더 하나를 열면 모든 에이전트가 지금 뭘 하는지 한 눈에 볼 수 있어요.

### Projects가 뭔가요?

- **관련 세션 그룹화**: 하나의 프로젝트(예: "결제 모듈 개선")에 여러 Claude Code 세션을 묶어둘 수 있어요
- **복수 에이전트 감독**: 여러 Claude 에이전트가 동시에 작업하는 걸 한 화면에서 관리
- **Desktop 전용**: Claude Code Desktop 앱에서만 사용 가능 (2026-10 기준)

### Projects vs 기존 방식

| | 기존 방식 | Projects |
|---|---|---|
| **세션 관리** | 각 터미널 창 따로 | 한 화면에 모아서 보기 |
| **에이전트 수** | 1~2개 동시 보기 | 여러 개 한 번에 감독 |
| **연결** | 각각 독립적 | 관련 작업 그룹으로 묶임 |

> 🍱 **비유로 설명하면**: 공사 현장에서 인부 5명이 각각 다른 방에서 일하면 감독이 뛰어다녀야 해요. Projects는 CCTV 모니터링룸 같아요 — 방 5개를 한 화면에 띄워놓고 한 자리에서 감독할 수 있어요.

---

## 2. Auto mode by default — "이제 기본값이 Auto 모드예요"

**공식 발표**: "Auto mode by default: Claude Code now runs in auto mode by default on Pro, Max, and Team plans, so it can work longer while still catching risky commands."

### 뭐가 달라졌나요?

이전까지 Auto 모드는 직접 켜야 했어요. 2026년 9월 17일부터는:

- **Pro, Max, Team 플랜**: Auto 모드가 **기본 활성화** 상태
- **여전히 안전**: 위험한 명령어는 여전히 분류기(classifier)가 잡아서 확인 요청
- **더 길게 작업**: Auto 모드라 중간에 허락 안 물어봐도 되는 작업을 더 길게 연속으로 처리

> 🍱 **비유로 설명하면**: 예전에는 새 차를 사면 항상 수동 기어로 설정되어 있었어요. 직접 자동 기어로 바꿔야 했죠. 이제부터는 처음부터 자동 기어로 나와요. 위험한 상황(급커브, 급경사)에서는 여전히 경고음이 울려요.

### 무엇이 Auto 모드인가요?

Auto 모드는 Claude Code가 **"안전한" 작업은 물어보지 않고 진행**하고, **"위험할 수 있는" 작업만 멈추고 확인을 요청**하는 방식이에요.

```
[Auto 모드 예시]
파일 읽기 → 자동 진행 ✅
코드 편집 → 자동 진행 ✅
git add/commit → 자동 진행 ✅
git push --force → 확인 요청 ⚠️
rm -rf → 확인 요청 ⚠️
외부 서버에 데이터 전송 → 확인 요청 ⚠️
```

### 이전으로 돌아가고 싶다면?

Auto 모드가 불편하다면 수동으로 끌 수 있어요:

```bash
# 세션 중 권한 모드 변경
/permissions
```

또는 설정 파일로 영구 변경:
```json
// ~/.claude/settings.json
{
  "defaultMode": "default"
}
```

자세한 내용은 [권한 모드 완전 정리](/docs/advanced/permission-modes) 참고.

---

## 3. Self-hosted environments — "내 서버에서 돌리는 Claude Code"

**공식 발표**: "Self-hosted environments: Run Claude Code sessions on your own infrastructure, inside your network and next to your internal services. Now in public beta."

### 이게 왜 중요한가요?

지금까지 Claude Code는 Anthropic 클라우드를 통해서만 쓸 수 있었어요. Self-hosted 환경은:

- 🔒 **내 네트워크 안에서 실행**: 코드와 데이터가 외부로 나가지 않아요
- 🏢 **내부 서비스 바로 연결**: 사내 데이터베이스, 사내 API에 바로 붙을 수 있어요
- 📋 **보안·컴플라이언스 요구사항 충족**: 금융, 의료, 정부기관처럼 데이터 외부 반출이 제한된 곳에서도 사용 가능

> 🍱 **비유로 설명하면**: 지금까지는 회사 비서를 고용하되, 비서가 항상 "외부 사무실"에서 일해서 서류를 거기로 보내야 했어요. Self-hosted는 비서가 우리 회사 건물 안에서 일하게 되는 거예요. 회사 내부 정보를 그냥 보여줄 수 있어요.

### 누가 필요한가요?

| 상황 | Self-hosted 필요 여부 |
|---|---|
| 개인 개발자·스타트업 | 불필요 (클라우드 충분) |
| 사내 기밀 코드 취급 | 고려 권장 |
| 금융·의료·공공기관 | 필요할 수 있음 |
| 사내망 전용 서비스 연동 | 필요 |

> ⚠️ **2026-10 기준 퍼블릭 베타 상태**: 세부 설정 방법과 요금은 [공식 문서](https://code.claude.com/docs/en/sandbox-environments)를 확인하세요. `[공식 발표 기준]`

---

## 정리 — 이 세 가지가 무슨 의미인가요?

| 기능 | 의미 |
|---|---|
| **Projects** | "혼자서 5명 분 일 시키기" — 여러 에이전트를 동시에 굴리고 감독 |
| **Auto mode 기본값** | "더 빠르게, 더 길게" — 잔소리 없이 Claude가 일을 이어서 처리 |
| **Self-hosted** | "우리 사무실 안에서" — 민감한 코드도 안심하고 AI에게 맡기기 |

Claude Code가 단순한 "코딩 도우미"에서 **"팀의 AI 엔지니어"**로 점점 진화하고 있어요.

---

## 더 알아보기

- [권한 모드 완전 정리](/docs/advanced/permission-modes) — Auto 모드·Default 모드·Bypass 모드 차이
- [Auto 모드 세밀하게 조정하기](/docs/advanced/auto-mode-config) — classifier 신뢰 설정
- [에이전트 병렬 실행](/docs/advanced/agents-parallel) — 여러 에이전트 동시 활용
- [Agent view](/docs/advanced/agent-view) — 모든 세션 한 화면 관리
