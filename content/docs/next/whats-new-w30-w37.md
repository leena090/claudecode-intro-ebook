---
title: "[공] 2026년 8~9월 주요 업데이트 (Week 30–37)"
description: "Claude Code 2026년 7월 말~9월 초 업데이트 요약. Opus 5 기본 전환, Auto mode 기본값 변경, 세션 간 메시지 전달, Self-hosted Environments, claude plugin eval 등 굵직한 변화를 모았어요."
tags: ["자동생성", "업데이트", "what's new", "2026", "w30", "w32", "w37", "Opus 5", "Auto mode"]
category: "next"
order: 18
lastUpdated: "2026-11-01"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong> — code.claude.com/docs/en/whats-new/ 기반이에요.<br />
★ 이전 주간 요약: <a href="/docs/next/whats-new-w25-w29">Week 25–29 정리</a>
</div>

## 한눈에 보기

| 주차 | 날짜 | 주요 기능 |
|------|------|----------|
| **W30** | Jul 20–24 | Claude Opus 5 기본 모델 전환, iOS 시뮬레이터 창, Claude Security 플러그인 |
| **W32** | Aug 3–7 | 세션 간 메시지 전달, Self-hosted Environments, Auto mode 기본값 예고 |
| **W33** | Aug 10–14 | **Auto mode 기본값 전환** (Pro/Max/Team 플랜 적용) |
| **W34–W36** | Aug 17–Sep 4 | Projects 기능, Code Review 개선, 데스크탑 창 분리 기능 |
| **W37** | Sep 7–11 | `claude plugin eval`, 데스크탑 창 팝아웃, 새 설정 옵션 |

---

## Week 30 (Jul 20–24) — Claude Opus 5 공식 전환

### 🆕 Claude Opus 5가 기본 Opus 모델이 됐어요

Claude Opus 5가 Max·Team·Enterprise 플랜의 기본 Opus 모델로 전환됐어요.

- **컨텍스트 창**: Anthropic API, Max·Team·Enterprise에서 **1M 토큰** 지원
- **Fast Mode**: Opus 5 기준 **$10/$50 per MTok**으로 재조정
- Amazon Bedrock, Google Cloud Agent Platform에서도 사용 가능

```text
> /model claude-opus-5
```

### 🆕 iOS 시뮬레이터 창 (데스크탑 앱)

Claude Code Desktop(macOS)에서 iOS 시뮬레이터를 직접 볼 수 있게 됐어요.

> 🍱 **비유**: 마치 TV를 보면서 리모컨으로 조작하는 것처럼, Claude가 iOS 앱을 빌드하고 실행하면 시뮬레이터 화면이 실시간으로 대화창 옆에 뜨는 거예요.

Xcode + iOS 플랫폼 설치 필요. Claude Desktop v1.24012.0 이상.

### 🆕 Claude Security 플러그인

공식 Anthropic 마켓플레이스에서 설치할 수 있는 보안 취약점 스캔 플러그인이 출시됐어요.

```text
> /plugin install claude-security@claude-plugins-official
> /claude-security
```

멀티에이전트 방식으로 코드베이스를 스캔하고, `CLAUDE-SECURITY-<timestamp>/` 폴더에 리포트를 저장해요.

---

## Week 32 (Aug 3–7) — 3가지 큰 변화

### 🆕 세션 간 메시지 전달 (Cross-session Messaging)

같은 컴퓨터에서 실행 중인 Claude Code 세션들끼리 메시지를 주고받을 수 있게 됐어요.

> 🍱 **비유**: 두 개의 채팅방이 서로 쪽지를 보낼 수 있게 된 거예요. A 채팅방의 Claude가 B 채팅방 Claude에게 "결제 API에서 users.name이 users.display_name으로 바뀌었어"라고 알려줄 수 있어요.

```text
Tell the session working on the payments API that users.name is now users.display_name
```

`/list-agents`로 현재 연결된 세션 목록을 볼 수 있어요. macOS·Linux 지원, v2.1.224 이상 필요.

### 🆕 Self-hosted Environments (퍼블릭 베타)

클라우드 세션을 **내 회사 서버**에서 실행할 수 있게 됐어요. Team·Enterprise 플랜에서 퍼블릭 베타.

```bash
claude self-hosted-runner setup
```

- 내부 네트워크 안에서 세션 실행 → 보안이 중요한 기업에 적합
- `claude.ai`, 모바일·데스크탑 앱, `claude --cloud`에서 환경 선택 가능
- 어드민이 [설정 페이지](https://claude.ai/admin-settings/cloud-environments)에서 활성화

### 📢 Auto mode 기본값 예고

8월 14일부터 Pro·Max·Team 플랜의 신규 세션에서 **Auto mode가 기본 권한 모드**가 된다고 예고됐어요.

---

## Week 33 (Aug 10–14) — Auto mode 기본값 적용

### ✅ Auto mode가 기본 모드로 전환됐어요

**2026년 8월 14일**부터 Pro·Max·Team 플랜에서 새 세션은 자동으로 Auto mode로 시작돼요.

> 🍱 **비유**: 자동차 기어가 수동에서 자동으로 바뀐 것과 같아요. 직접 클러치를 밟지 않아도 자연스럽게 출발할 수 있죠.

기존에 직접 설정한 기본 모드는 그대로 유지돼요. 전환 프롬프트에서 수락하면 바뀌어요.

**미리 바꾸려면**:
```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

Auto mode의 classifier 호출은 이제 사용량 한도에 포함되지 않아요.

---

## Week 37 (Sep 7–11) — 플러그인 테스트 도구 출시

### 🆕 `claude plugin eval` — 플러그인 자동 테스트

플러그인의 품질을 자동으로 측정하는 `claude plugin eval` 명령어가 출시됐어요.

> 🍱 **비유**: 요리사가 새 메뉴를 만들었을 때, 맛 테스터들이 점수를 매기는 것처럼, Claude가 플러그인 없을 때와 있을 때의 응답을 비교해서 점수를 줘요.

```bash
# 1단계: 테스트 스위트 초기화
claude plugin eval init

# 2단계: 평가 실행
claude plugin eval .
```

결과는 터미널 표에 출력되고, `evals/results/report.html`에 상세 리포트가 저장돼요. 각 테스트 케이스마다 플러그인 유무에 따른 점수 차이(델타)를 볼 수 있어요.

### 🆕 데스크탑 창 팝아웃 (Pop-out Panes)

Claude Code Desktop 앱에서 창(diff, 터미널 등)을 별도 윈도우로 분리할 수 있어요.

- 두 번째 모니터에 diff 창 드래그 → Claude는 메인 창에서 계속 작업
- 작업 완료 후 다시 도킹 가능

---

## 기타 업데이트 모음

### 설정·보안 관련
- `maxEffortLevel`: 모든 클라우드 제공자(Amazon Bedrock, GCP, Microsoft Foundry)에서 effort level 상한 설정 가능
- `/code-review`에 `--no-effort` 없이 레벨 재사용 기능 추가
- Ultraplan 리서치 프리뷰 종료 — `/ultraplan`은 이제 플랜 모드 또는 웹 버전을 사용하세요
- 서브에이전트 200개 동시 실행 상한 제거 (동시성 한도는 유지)
- Bash 명령어 보안 강화 — 파일 디스크립터 리다이렉트, 10,000자 초과 명령어 등 추가 차단

### UI·편의 기능
- VS Code 확장에 **Focus view** 추가 (`Ctrl+Alt+F`) — 도구 활동을 한 행으로 접기
- `/` 입력 시 명령어 자동완성 목록 표시 (풀스크린 모드)
- 이모지 단축코드 자동완성 — `:heart:` 입력 시 이모지 삽입
- Artifact에 브라우저 탭 아이콘 자동 선택 기능

---

## 정리

이번 w30–w37 기간의 핵심은 **세 가지**예요:

1. **Opus 5 → 기본 전환**: 더 강력한 모델이 기본값으로
2. **Auto mode → 기본 전환**: 허가 없이 더 자율적으로 작업
3. **Self-hosted Environments**: 기업 내부망에서 클라우드 세션 실행

이 세 가지가 맞물려서 Claude Code의 "자율 작업 기본 경험"이 한 단계 업그레이드됐어요.

---

## 관련 글

- [Auto mode 설정 가이드](/docs/advanced/auto-mode-config)
- [Cross-session Messaging](/docs/advanced/cross-session-messaging) — 이번 릴리스 상세
- [Self-hosted Environments](/docs/advanced/self-hosted-environments) — 설정 방법
- [claude plugin eval](/docs/advanced/plugin-eval) — 플러그인 테스트 상세
