---
title: "[공] 2026년 7~8월 주요 기능 업데이트 (W30·W32)"
description: "Opus 5 출시, iOS 시뮬레이터, Claude Security, 세션 간 메시징, 셀프 호스팅, Auto Mode 기본값 전환까지 — 7~8월 핵심 업데이트 총정리"
tags: ["자동생성", "업데이트", "whats-new", "2026", "opus5", "auto-mode", "세션메시징"]
category: "advanced"
order: 50
lastUpdated: "2026-08-18"
---

<div class="note-star">
★ <strong>[공] 출처</strong>: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">Week 30 (Jul 20-24)</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">Week 32 (Aug 3-7)</a>
<br />★ Week 31은 내부 정비 주간으로 미게시 (공식 문서 확인 기준)
<br />★ 적용 버전: v2.1.214 → v2.1.224
</div>

## 한눈에 보기

| 주차 | 주요 기능 | 버전 |
|------|-----------|------|
| W30 · 7/20-24 | 🧠 Claude Opus 5 (기본 Opus 모델 전환) | v2.1.219 |
| W30 · 7/20-24 | 📱 iOS 시뮬레이터 패널 (Desktop macOS) | v2.1.219 |
| W30 · 7/20-24 | 🔒 Claude Security 플러그인 | v2.1.x |
| W32 · 8/3-7 | 💬 세션 간 메시징 (Cross-session messaging) | v2.1.224 |
| W32 · 8/3-7 | 🏢 셀프 호스팅 환경 (Self-hosted environments) | v2.1.224 |
| W32 · 8/14~ | 🤖 Auto Mode 기본값 전환 (Pro/Max/Team) | v2.1.x |

---

## Week 30 (2026년 7월 20-24일)

### 🧠 Claude Opus 5 — 새로운 기본 Opus 모델

Claude Code에서 Opus 모델의 기본이 **Opus 4.8 → Opus 5**로 전환됐어요.

> 🍱 **비유**: 항상 타던 버스가 업그레이드돼서, 내가 뭘 안 해도 더 빠른 새 버스를 타게 된 거예요.

**변화 포인트**:
- Fast Mode도 Opus 5 기반으로 전환, 가격 **$10/$50 per MTok** (이전 $30/$150)
- Opus 4.7은 Fast Mode 지원 종료
- Amazon Bedrock·Google Cloud에서는 1M 토큰 컨텍스트 모델 변형을 직접 선택

```bash
# 직접 전환하고 싶으면
> /model claude-opus-5
```

---

### 📱 iOS 시뮬레이터 패널 — Desktop macOS에서 앱 화면 실시간 확인

Claude Code Desktop(macOS)에 **iOS 시뮬레이터 패널**이 추가됐어요. 클로드가 내 iOS 앱을 빌드·실행하면, 대화창 옆에 **iPhone 화면이 실시간으로 스트리밍**돼요.

> 🍱 **비유**: 집에서 요리하면서 CCTV로 식당 주방을 실시간으로 볼 수 있는 느낌이에요. 클로드가 앱 테스트하는 동안 직접 화면을 보면서 피드백할 수 있어요.

**필요 조건**:
- macOS + Xcode (iOS 플랫폼 설치 포함)
- Claude Desktop v1.24012.0 이상
- Pro, Max, Team 플랜 (Public Beta)

```bash
# 클로드에게 이렇게 말하면 됩니다
> Build the app and run it in the simulator to check the onboarding flow.
```

→ 시뮬레이터가 켜지면서 패널이 자동으로 열려요!

---

### 🔒 Claude Security 플러그인 — AI 기반 취약점 스캔

Claude Code 세션 안에서 **멀티 에이전트 취약점 스캔**을 실행하는 공식 플러그인이 나왔어요. 에이전트들이 아키텍처를 파악하고, 위협 모델을 만들고, 취약점을 찾고, 최종 검토까지 자동으로 해줘요.

**설치 및 사용**:
```bash
# 플러그인 설치
> /plugin install claude-security@claude-plugins-official

# 설치 후 재로드
> /reload-plugins

# 스캔 시작
> /claude-security
```

---

## Week 32 (2026년 8월 3-7일)

### 💬 세션 간 메시징 — 여러 터미널이 서로 대화

내가 여러 터미널(세션)을 열어두고 작업할 때, **한 세션의 클로드가 다른 세션의 클로드에게 메시지를 보낼 수 있어요**.

> 🍱 **비유**: 회사에서 두 팀이 각자 다른 회의실에서 프로젝트를 진행하다가, 한 팀에서 "저쪽 팀한테 이거 알려줘"라고 하면 메신저로 자동 전달되는 느낌이에요.

```bash
# 다른 세션에 변경 내용 알리기
> Tell the session working on the payments API that users.name is now users.display_name

# 내 다른 세션 목록 보기
> /list-agents
```

**주요 특징**:
- macOS·Linux 지원 (v2.1.224 이상)
- 같은 컴퓨터 세션: 서버 거치지 않고 직접 전달
- 다른 기기·웹 세션: Remote Control을 통해 전달
- 전달 내용은 텍스트만 (파일·대화 기록 전달 안 됨)

---

### 🏢 셀프 호스팅 환경 — 내 서버에서 클라우드 세션 실행

Team·Enterprise 플랜에서, 클라우드 세션을 **내 회사 서버에서** 돌릴 수 있어요. 내부 네트워크 서비스에 접근하면서도 Claude Code on the web을 쓸 수 있죠.

> 🍱 **비유**: 회사 VPN처럼, 클로드가 인터넷에 있지만 내 회사 내부 시스템에도 접근할 수 있게 되는 거예요.

```bash
# 셋업 (Owner/Admin 권한 필요)
claude self-hosted-runner setup
```

---

### 🤖 Auto Mode 기본값 전환 — 2026년 8월 14일~

**2026년 8월 14일부터**, Pro·Max·Team 플랜 신규 세션의 기본 권한 모드가 **Auto Mode**로 전환됐어요. 이전에 직접 기본값을 설정한 분들은 유지되고, 조직에서 관리하는 설정도 변경되지 않아요.

> 🍱 **비유**: 예전엔 차를 운전할 때마다 수동 기어를 직접 변환해야 했는데, 이제부터는 자동 기어가 기본이 된 거예요. 필요하면 언제든 수동으로 바꿀 수 있어요.

**Auto Mode**: 안전 분류기(classifier)가 있어서, 위험해 보이는 명령에만 승인을 요청하고 나머지는 자동 실행

```json
// 미리 Auto Mode로 기본값 설정하고 싶다면
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

---

## 그 외 소소한 업데이트 (W30·W32)

**W30 기타 변경**:
- `/code-review` 이제 백그라운드 서브에이전트로 실행 (대화 맥락 분리)
- `/verify`, `/code-review`, `/deep-research` 는 내가 직접 실행해야만 작동 (자동 실행 없음)
- 이모지 자동완성 추가: `:heart:` 입력하면 이모지 삽입
- 동시 서브에이전트 기본 20개로 확장 (환경변수 `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 로 조정)
- `--max-budget-usd` 이제 서브에이전트에도 적용

**W32 기타 변경**:
- VS Code 확장에 **Focus View** 추가 (Ctrl+Alt+F) — 도구 활동을 한 줄로 접어두기
- `/review` 가 `/code-review` 별칭으로 추가
- `/fork` 복사 세션이 이제 독립된 워크트리에서 작업
- 서브에이전트 per-session 200개 상한 제거 (동시 실행 상한은 유지)
- 워크트리 격리 강화: Bash 명령·git도 메인 체크아웃 접근 차단

---

## 다음 단계

- **[Opus 5 자세한 내용](/docs/next/claude-opus-5)** — 새 모델 전체 정리
- **[세션 간 메시징 가이드](/docs/advanced/cross-session-messaging)** — 멀티 세션 협업 심화
- **[셀프 호스팅 환경](/docs/advanced/self-hosted-environments)** — 엔터프라이즈 인프라 설정
- **[Auto Mode 완전 정복](/docs/advanced/permission-modes)** — 권한 모드 비교
