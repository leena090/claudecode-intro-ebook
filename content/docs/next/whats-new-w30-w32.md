---
title: "[공] 주간 업데이트: 2026년 7월 20일 ~ 8월 7일 (Week 30·32)"
description: "Opus 5 기본 적용, iOS 시뮬레이터 창, Claude Security 플러그인, 세션 간 메시지, 자체 호스팅 환경, Auto Mode 기본값 변경"
tags: ["자동생성", "업데이트", "2026", "week30", "week32", "opus5", "auto-mode", "cross-session-messaging", "self-hosted"]
category: "next"
order: 18
lastUpdated: "2026-08-16"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — Week 30 (2026-07-20~24) + Week 32 (2026-08-03~07) 주요 변경사항<br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w30" target="_blank">공식 문서: w30</a> &nbsp;|&nbsp;
<a href="https://code.claude.com/docs/en/whats-new/2026-w32" target="_blank">공식 문서: w32</a>
</div>

## Week 30 핵심 변경 (3개) — 2026년 7월 20~24일

---

### 1️⃣ Claude Opus 5 — 새 최상위 Opus 모델 🆕

**Claude Opus 5 (클로드 오퍼스 5)** 가 기본 Opus 모델이 됐어요. Max, Team Premium, Enterprise pay-as-you-go, Anthropic API, AWS, Amazon Bedrock, Google Cloud에 적용됩니다.

```bash
# Claude Code v2.1.219 이상 필요
claude update

# 명시적으로 Opus 5 선택
/model claude-opus-5
```

| 항목 | 내용 |
|---|---|
| 컨텍스트 창 | 1M 토큰 (API·Max·Team·Enterprise) |
| Fast Mode | Opus 5 기반, **$10/$50 per MTok** |
| 지원 플랜 | Max, Team Premium, Enterprise, API |

> 🍱 **비유**: 스마트폰 최상위 모델이 업그레이드된 것과 같아요 — 같은 포지션인데 성능이 더 좋아졌어요.

📄 자세한 내용 → [Claude Opus 5 상세 안내](/docs/next/claude-opus5-2026)

<div class="note-circle">
○ Fast Mode는 이제 Opus 4.7을 지원하지 않아요 — /fast는 Opus 5 또는 Opus 4.8에 적용됩니다
</div>

---

### 2️⃣ iOS 시뮬레이터 창 — 앱 화면을 실시간으로 보면서 테스트 📱

**Claude Code Desktop (macOS)** 에 **iOS 시뮬레이터(simulator) 창**이 추가됐어요. Claude가 iOS 앱을 빌드하거나 테스트할 때, 옆에 시뮬레이터 화면이 실시간으로 열려서 직접 볼 수 있어요.

```bash
# Claude에게 앱을 실행하도록 요청
> Build the app and run it in the simulator to check the onboarding flow.
```

| 항목 | 내용 |
|---|---|
| 사용 환경 | Claude Code Desktop (macOS) |
| 공개 범위 | 퍼블릭 베타 (Pro, Max, Team) |
| 필요 조건 | Xcode + iOS 플랫폼 설치, Desktop v1.24012.0+ |

> 🍱 **비유**: 요리하면서 오븐 안을 실시간으로 들여다볼 수 있는 투명 창 같아요. Claude가 앱을 만드는 동안 옆에서 화면이 어떻게 바뀌는지 실시간으로 확인할 수 있어요.

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/desktop-ios-simulator" target="_blank">desktop-ios-simulator</a>
</div>

---

### 3️⃣ Claude Security 플러그인 — 전체 코드베이스 보안 취약점 스캔 🛡️

**Claude Security 플러그인(claude-security plugin)** 이 공식 Anthropic 마켓플레이스에 출시됐어요. 여러 에이전트가 협력해 코드 전체의 보안 취약점을 심층 분석하고, 수정 패치까지 제안해줘요.

```bash
# 플러그인 설치
> /plugin install claude-security@claude-plugins-official

# 설치 후 활성화 확인
> /reload-plugins

# 스캔 시작
> /claude-security
```

**스캔 과정:**

| 단계 | 내용 |
|---|---|
| 아키텍처 분석 | 전체 코드 구조 파악 |
| 위협 모델 구축 | 공격 경로 분석 |
| 취약점 탐지 | 여러 에이전트가 동시에 검색 |
| 독립 검증 | 별도 에이전트가 교차 확인 |
| 보고서 생성 | `CLAUDE-SECURITY-<날짜>/` 폴더에 저장 |

> 🍱 **비유**: 한 명의 경비원 대신 여러 명이 건물 곳곳을 동시에 점검하는 것과 같아요. 그리고 한 경비원이 발견한 문제를 다른 경비원이 다시 확인해 확실한 것만 보고해요.

<div class="note-circle">
○ Python 3.9.6 이상 필요 (<code>python3 --version</code> 확인)<br />
○ Dynamic Workflows(유료 플랜) 필요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/claude-security" target="_blank">claude-security</a>
</div>

---

### Week 30 기타 개선사항

| 항목 | 내용 |
|---|---|
| `/code-review` 백그라운드 실행 | 리뷰가 별도 컨텍스트 창에서 실행 — 대화창이 오염되지 않음 |
| 이모지 자동완성 | `:heart:` 처럼 입력하면 이모지로 변환 (`emojiCompletionEnabled`로 끄기 가능) |
| 서브에이전트 동시 실행 | 기본 20개 동시 실행 (환경변수 `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 조절) |
| `--max-budget-usd` 서브에이전트 적용 | 예산 초과 시 새 서브에이전트 시작 불가 |
| `sandbox.filesystem.disabled` | 파일시스템 격리 없이 네트워크만 제어하는 옵션 추가 |
| 하트비트(heartbeat) | 오래 실행되는 도구가 조용히 멈추지 않고 주기적으로 진행 신호 보냄 |

---

## Week 32 핵심 변경 (3개) — 2026년 8월 3~7일

---

### 4️⃣ 세션 간 메시지 — Claude끼리 서로 연락 📨

**Cross-session messaging (크로스 세션 메시징)** — 이제 다른 터미널에서 열려 있는 Claude Code 세션들이 서로 메시지를 주고받을 수 있어요. Claude가 한 세션에서 발견한 내용을 다른 세션에 자동으로 알려줘요.

```bash
# 내가 연결된 다른 세션 보기
> /list-agents

# 다른 세션에 메시지 보내기
> Tell the session working on the payments API that users.name is now users.display_name

# @로 특정 세션 지정 (v2.1.232+)
> Let @api-worker know the schema migration finished
```

> 🍱 **비유**: 큰 공사 현장에서 여러 팀이 서로 무전기로 연락하는 것과 같아요. "1팀, 2층 배선 완료!" 하면 다른 팀이 "알겠습니다, 다음 단계 진행할게요!" 하고 이어서 작업해요.

| 항목 | 내용 |
|---|---|
| 최소 버전 | Claude Code v2.1.224 이상 |
| 지원 OS | macOS, Linux (Windows 미지원) |
| 명령어 | `/list-agents` (또는 `/peers`) |

<div class="note-circle">
○ 메시지는 텍스트만 전달돼요 — 대화 내역이나 파일은 공유되지 않아요<br />
○ 다른 기기 세션에 메시지 보내려면 Remote Control 연결이 필요해요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/cross-session-messaging" target="_blank">cross-session-messaging</a>
</div>

📄 자세한 내용 → [세션 간 메시지 주고받기](/docs/advanced/cross-session-messaging)

---

### 5️⃣ 자체 호스팅 환경 — 내 서버에서 클라우드 세션 실행 🖥️

**Self-hosted environments (셀프 호스티드 인바이런먼트)** — 회사 내부 서버에서 Claude Code 클라우드 세션을 실행할 수 있는 기능이에요. 내부 네트워크에서 실행되니 사내 DB, API, 레지스트리에 자유롭게 접근할 수 있어요.

```bash
# 관리자: 자체 호스팅 환경 설정 시작
claude self-hosted-runner setup
```

| 항목 | 내용 |
|---|---|
| 공개 범위 | 퍼블릭 베타 (Team, Enterprise) |
| 주요 장점 | 내부 네트워크 접근 + 컴플라이언스 + 사내 툴 사전 설치 |
| 설정 위치 | claude.ai 관리자 설정 → Cloud environments |

> 🍱 **비유**: 편의점 앱 대신 우리 회사 직원식당에서 식사하는 것과 같아요. 외부 서비스 대신 회사 내부에서 모든 게 처리되니, 사내 전용 재료(내부 서비스)를 마음껏 쓸 수 있어요.

<div class="note-circle">
○ Team·Enterprise 플랜 한정 (Zero Data Retention 조직은 제외)<br />
○ 먼저 관리자가 "Allow self-hosted environments" 활성화 필요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/self-hosted-environments" target="_blank">self-hosted-environments</a>
</div>

---

### 6️⃣ Auto Mode 기본값 — 이제 모든 새 세션은 자동 모드 🤖

**Auto mode (오토 모드)** 가 **2026년 8월 14일부터** Pro, Max, Team 플랜의 기본 권한 모드가 됐어요. 지금까지는 매번 "허용할게요?"라고 물어봤는데, 이제 Claude가 알아서 판단해서 진행해요.

```json
// settings.json — 미리 기본값으로 설정하기
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

| 항목 | 내용 |
|---|---|
| 적용 시점 | 2026년 8월 14일 (신규 세션부터) |
| 대상 플랜 | Pro, Max, Team |
| 이미 설정한 경우 | 기존 설정 유지 (변경 프롬프트 뜸) |
| 되돌리기 | 언제든 다른 모드로 전환 가능 |

> 🍱 **비유**: 매번 사용설명서 읽어야 하는 에어컨에서 → 알아서 온도·바람 조절하는 스마트 에어컨으로 바뀐 것과 같아요. 필요할 때만 물어보고, 나머지는 알아서 처리해요.

<div class="note-circle">
○ 조직 관리자가 설정한 기본값은 변경되지 않아요<br />
○ Auto mode의 classifier 호출은 사용량에 카운트되지 않아요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode" target="_blank">permission-modes</a>
</div>

---

### Week 32 기타 개선사항

| 항목 | 내용 |
|---|---|
| VS Code Focus 뷰 | 도구 활동을 한 줄로 접어서 깔끔하게 보기 (`Ctrl+Alt+F`) |
| 샌드박스 자격증명 마스킹 | `mode: "mask"` 옵션으로 실제 값 대신 가짜 값 전달 |
| 플러그인 즉시 활성화 | 설치 후 재시작 없이 바로 활성화 |
| `/review` 명령어 추가 | `/code-review`의 별칭 — 동일 효과 |
| `/fork` → 워크트리 | 세션 복사 시 원본과 분리된 git worktree에서 실행 |
| 서브에이전트 200개 제한 해제 | 장시간 세션에서 새 서브에이전트 거부 문제 해결 |
| **Ultraplan 제거** | `/ultraplan` 명령어 및 `ultraplan` 키워드 완전 삭제 — 대신 플랜 모드 또는 Claude Code on the web 사용 |
| 마켓플레이스 zip 배포 | git/npm 없이도 zip 아카이브로 플러그인 설치 가능 |

<div class="note-star">
⚠️ <strong>Ultraplan 제거 안내</strong>: <code>/ultraplan</code> 명령어가 이번 업데이트(v2.1.224)로 완전히 삭제됐어요. 대신 <strong>플랜 모드(plan mode)</strong> 또는 <strong>Claude Code on the web</strong>을 사용하세요.
</div>

---

## 요약 표

| 기능 | 주차 | 버전 | 대상 |
|---|---|---|---|
| Claude Opus 5 기본 적용 | W30 | v2.1.219+ | Max/Team/Enterprise/API |
| iOS 시뮬레이터 창 | W30 | v1.24012.0+ | macOS Desktop |
| Claude Security 플러그인 | W30 | — | 유료 플랜 |
| 세션 간 메시지 | W32 | v2.1.224+ | macOS/Linux |
| 자체 호스팅 환경 | W32 | v2.1.224+ | Team/Enterprise |
| Auto Mode 기본값 | W32 | — | Pro/Max/Team |
