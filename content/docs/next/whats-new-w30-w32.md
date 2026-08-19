---
title: "[공] 주간 업데이트: 2026년 7월 20일 ~ 8월 7일 (Week 30·32)"
description: "Opus 5 출시, iOS 시뮬레이터 패널, Claude Security 플러그인, 세션 간 메시지 전달, 자체 호스팅 환경, Auto 모드 기본값 전환까지 — 2주 치 핵심 업데이트 정리"
tags: ["자동생성", "업데이트", "2026", "week30", "week32", "opus5", "self-hosted", "cross-session", "auto-mode"]
category: "next"
order: 18
lastUpdated: "2026-08-19"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 30 (2026-07-20 ~ 07-24), Week 32 (2026-08-03 ~ 08-07) 업데이트. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w30" target="_blank">W30 공식 문서</a> | <a href="https://code.claude.com/docs/en/whats-new/2026-w32" target="_blank">W32 공식 문서</a>
</div>

> ℹ️ **W31 없음**: Week 31 업데이트는 공식 문서에 없어요. Week 30과 Week 32만 발행됐어요.

---

## ⭐ Week 30 핵심 (2026-07-20 ~ 07-24)

### 1️⃣ Claude Opus 5 — 최상위 모델 교체 🏆

**가장 큰 변화예요.** Claude의 Opus(오퍼스) 등급 모델이 버전 4.8에서 **5로 업그레이드**됐어요.

| 항목 | 변화 |
|---|---|
| 기본 Opus 모델 | Opus 4.8 → **Opus 5** |
| 컨텍스트 창 | 200K → **1M 토큰** |
| Fast Mode 가격 | $30/$150 → **$10/$50 / MTok** |
| Fast Mode 대상 | Opus 4.8 → **Opus 5** |

> 자세한 내용은 [Claude Opus 5 출시 → 별도 문서](/docs/next/claude-opus-5) 참조

```bash
# Opus 5로 바꾸는 명령어
/model claude-opus-5
```

---

### 2️⃣ iOS 시뮬레이터 패널 (macOS Desktop) 📱

macOS용 **Claude Code 데스크탑 앱**에 **iOS 시뮬레이터 패널**이 생겼어요 (공개 베타, Pro/Max/Team).

> 📺 **비유**: Claude가 여러분의 iPhone 앱을 직접 손으로 두드려보면서 작동을 확인하는 동안, 그 화면을 옆에서 실시간으로 볼 수 있는 창문이 생긴 거예요.

**어떻게 쓰나요?**

```text
# Claude에게 시뮬레이터에서 앱을 실행해달라고 하면 패널이 자동으로 열려요
> Build the app and run it in the simulator to check the onboarding flow.
```

**요구 조건:**
- macOS용 Xcode에 iOS 플랫폼 설치
- Claude Desktop v1.24012.0 이상

---

### 3️⃣ Claude Security 플러그인 — AI 보안 스캔 🔒

**Claude Security(클로드 시큐리티)** 플러그인이 출시됐어요. 코드베이스의 보안 취약점을 자동으로 찾아줘요.

> 🔍 **비유**: 회사 건물에 보안 전문가 팀을 불러서 구석구석 점검하는 것처럼, Claude가 여러 에이전트를 동원해 코드 전체를 꼼꼼히 검사해요.

**어떻게 동작하나요?**
1. 에이전트들이 코드 구조를 파악하고 위협 모델을 구축
2. 취약점을 능동적으로 탐색
3. 각 발견 사항을 서로 독립적으로 검토
4. `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 보고서 작성

```bash
# 설치 방법
/plugin install claude-security@claude-plugins-official
/reload-plugins

# 스캔 시작
/claude-security
```

**스캔 범위:** 전체 레포지토리, 브랜치 diff, PR, 단일 커밋 중 선택 가능

---

### 📋 W30 기타 작은 변화들

| 변화 | 내용 |
|---|---|
| `/code-review` | 이제 **백그라운드 서브에이전트**로 실행 → 대화창 방해 안 함 |
| 이모지 자동완성 | `:heart:` 입력 → 이모지 삽입. `emojiCompletionEnabled`로 끄기 가능 |
| 동시 서브에이전트 | 기본 20개 동시 실행. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 변경 |
| `--max-budget-usd` | 서브에이전트에도 예산 한도 적용 |
| 샌드박스 | `sandbox.filesystem.disabled` 설정으로 파일시스템 격리 건너뛰기 가능 |

---

## ⭐ Week 32 핵심 (2026-08-03 ~ 08-07)

### 1️⃣ 세션 간 메시지 전달 (Cross-session messaging) 💬

**두 개의 Claude 세션이 서로 메시지를 주고받을 수 있어요!** (macOS·Linux, v2.1.224 이상)

> 📞 **비유**: 두 명의 직원이 각자 다른 작업을 하다가, 한 쪽이 "저쪽에 알려줘야 해"라고 하면 내선 전화로 바로 연락할 수 있는 것과 같아요.

```text
# 예시: 한 세션에서 다른 세션에 메시지 보내기
> Tell the session working on the payments API that users.name is now users.display_name
```

**사용 방법:**
- `ListAgents` 도구로 현재 실행 중인 세션 목록 확인
- `SendMessage` 도구로 다른 세션에 메시지 전달
- `/list-agents` 명령어로 연결 가능한 세션 보기
- 메시지 수신 시 `Message from` 행 표시 → `Ctrl+O`로 내용 펼치기

---

### 2️⃣ 자체 호스팅 환경 (Self-hosted environments) 🖥️

이제 **팀 내부 서버에서 Claude Code 클라우드 세션을 직접 실행**할 수 있어요. (Team·Enterprise 플랜, 공개 베타)

> 🏭 **비유**: 지금까지 공장(Anthropic 서버)에서 제품을 만들어 배달했다면, 이제는 내 공장(우리 회사 서버) 안에서 직접 만들 수 있는 거예요. 회사 내부 네트워크, 내부 데이터베이스에 직접 접근하면서요.

**주요 특징:**
- 회사 내부 네트워크의 서비스·데이터베이스에 접근 가능
- 체크아웃된 코드·빌드 파일이 우리 서버에만 남음
- 컴파일러·SDK·내부 CLI를 러너 이미지에 미리 설치
- 리포지토리 처리가 우리 인프라에서 이루어짐

```bash
# 관리자 설정: 자체 호스팅 환경 활성화 후
# 설치 및 러너 시작 (Owner/Admin 계정으로)
claude self-hosted-runner setup
```

> 자세한 내용은 [자체 호스팅 환경 → 별도 문서](/docs/advanced/self-hosted-environments) 참조

---

### 3️⃣ Auto 모드가 기본값이 돼요 ⚙️

**2026년 8월 14일부터** Pro·Max·Team 플랜의 새 세션 기본 권한 모드가 **auto(오토) 모드**로 바뀌어요.

> 🚗 **비유**: 자동변속기 자동차로 교체된 것과 같아요. 지금까지는 기어를 손으로 바꿔줘야 했다면(매번 허락 클릭), 이제는 차가 스스로 판단해서 기어를 바꿔요. 물론 직접 바꿀 수도 있고요.

**무엇이 달라지나요?**
- 새 세션 시작 시 상태 바에 `auto mode on` 표시
- Claude가 안전하다고 판단한 명령은 자동으로 실행 (허락 없이)
- 직접 설정한 기본 모드는 그대로 유지 (일회성 전환 프롬프트에서 거부 가능)

**미리 설정하는 방법:**

```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

**이미 적용된 것:** Auto 모드에서 Classifier(분류기)가 내리는 판단은 이제 사용량 한도에 포함되지 않아요.

---

### 📋 W32 기타 작은 변화들

| 변화 | 내용 |
|---|---|
| `/review` 명령어 | `/code-review`의 **별명(alias)** 이 됨 — 짧게 타이핑 가능 |
| 서브에이전트 200개 제한 **폐지** | 장기 실행 세션에서 서브에이전트 무제한 생성 가능 (동시 실행 제한은 유지) |
| 플러그인 zip 배포 | 마켓플레이스가 git·npm 없이 zip 파일로 플러그인 배포 가능 |
| `/fork` 워크트리 | `/fork`로 복사한 세션이 자체 워크트리에서 코드 변경 |
| 워크트리 격리 강화 | 서브에이전트·bash 명령어도 메인 체크아웃 격리 |
| 보안 강화 | Bash 명령어에서 일부를 숨기는 방식 차단, 탭·투명 유니코드 패딩으로 명령 숨기기 방지 |
| VS Code Focus 뷰 | 확장에 Focus view 추가 (`Ctrl+Alt+F`) — 도구 활동을 접힌 행으로 숨김 |
| 샌드박스 마스킹 | Linux/WSL2에서 `mode: "mask"` 지원 — 자격증명 파일 실제값 보호 |

---

### ⚠️ `/ultraplan` 제거됨

Week 32에서 `/ultraplan` 명령어와 `ultraplan` 키워드가 **공식 제거**됐어요.

> "플랜 모드 또는 Claude Code on the web을 대신 사용하세요." — 공식 문서

대체 방법:
- **Plan 모드**: 세션에서 `plan mode`로 전환
- **Claude Code on the web**: 브라우저 버전에서 대규모 플래닝

---

> 📌 **관련 문서**: [Opus 5 상세](/docs/next/claude-opus-5) | [자체 호스팅 환경](/docs/advanced/self-hosted-environments) | [세션 간 메시지](/docs/advanced/cross-session-messaging) | [Auto 모드](/docs/en/permission-modes)
