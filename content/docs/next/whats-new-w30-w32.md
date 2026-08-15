---
title: "[공] 주간 업데이트 W30·W32 — Opus 5·셀프 호스팅·세션 간 메시지"
description: "2026년 7월~8월 주요 업데이트. W30: Opus 5 기본 적용, iOS 시뮬레이터, Claude Security 플러그인. W32: 세션 간 메시지, 셀프 호스팅 환경, Auto 모드 기본값 변경"
tags: ["자동생성", "주간업데이트", "W30", "W32", "2026-07", "2026-08", "Opus5", "셀프호스팅", "세션메시지"]
category: "next"
order: 17
lastUpdated: "2026-08-15"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 What's New 기반 요약 — 원문: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30</a> · <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32</a><br />
★ W30: v2.1.214 → v2.1.219 (2026-07-20~24) · W32: v2.1.220 → v2.1.224 (2026-08-03~07)
</div>

---

# Week 30 · 2026-07-20~24

> Opus 5 기본 Opus 모델 적용, iOS 시뮬레이터 패널 추가, Claude Security 플러그인 출시

## 🆕 1. Claude Opus 5 — 새 기본 Opus 모델

**Claude Code의 기본 Opus 모델이 Opus 5로 바뀌었습니다.** Max, Team Premium, Enterprise, Anthropic API 기준.

| 항목 | 내용 |
|---|---|
| 컨텍스트 창 | **100만 토큰** (Anthropic API·Max/Team/Enterprise 기준) |
| Fast 모드 요금 | **$10/$50 per million tokens** (이전: $30/$150) |
| 사용 명령 | `/model claude-opus-5` |

> 👉 자세한 내용: [Claude Opus 5 소개](/next/claude-opus-5)

---

## 🆕 2. iOS 시뮬레이터 — Claude Code Desktop에서 앱 화면 실시간 확인

**macOS 데스크톱 앱에 iOS 시뮬레이터 패널이 추가됐어요.** Claude가 앱을 빌드·실행하면, 옆에 시뮬레이터 화면이 함께 열려 실시간으로 앱 화면을 볼 수 있습니다.

> 📱 **비유로 설명하면**: 개발자가 코드를 고치는 걸 보면서 동시에 실제 폰 화면도 보는 것처럼요. 예전엔 CLI에서 코드 수정 → 시뮬레이터로 이동 → 확인을 반복해야 했는데, 이제 한 화면에서 다 됩니다.

**요건:**
- Claude Desktop v1.24012.0 이상
- macOS + Xcode (iOS 플랫폼 설치 완료)
- Pro, Max, Team 플랜

```text
> 앱 빌드하고 시뮬레이터에서 실행해서 온보딩 흐름 확인해줘
```

명령 입력 후 앱이 실행되면 시뮬레이터 패널이 자동으로 열립니다.

---

## 🆕 3. Claude Security 플러그인 — 코드베이스 취약점 스캔

**멀티 에이전트 팀이 코드베이스 전체를 보안 검사하는 공식 플러그인입니다.**

설치:
```text
/plugin install claude-security@claude-plugins-official
```

실행:
```text
/claude-security
```

> 👉 자세한 내용: [Claude Security 플러그인](/advanced/claude-security-plugin)

---

## 기타 W30 업데이트

- **`/code-review`** 가 이제 백그라운드 서브에이전트로 실행돼 대화 창과 분리됩니다
- **`/verify`, `/code-review`, `/deep-research`** 는 직접 호출할 때만 실행 (Claude가 자동 실행하지 않음)
- **이모지 단축코드 자동완성**: `:heart:` 입력 시 이모지로 변환 (`emojiCompletionEnabled`로 끄기 가능)
- **동시 서브에이전트 기본값 20개**로 증가, `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 변경 가능

---

# Week 32 · 2026-08-03~07

> 세션 간 메시지, 셀프 호스팅 환경 (퍼블릭 베타), Auto 모드 기본값 전환

## 🆕 1. 세션 간 메시지 — 내 Claude 세션들이 직접 연락

**같은 머신, 다른 기기, 웹 세션끼리 메시지를 주고받는 기능입니다.**

```text
> payments API 세션에게 스키마 변경 사항 알려줘
```

- `/list-agents` 명령으로 연결 가능한 세션 목록 확인
- `Ctrl+O`로 받은 메시지 펼치기
- macOS·Linux, v2.1.224+

> 👉 자세한 내용: [세션 간 메시지](/advanced/cross-session-messaging)

---

## 🆕 2. 셀프 호스팅 환경 — 내 서버에서 클라우드 세션 실행

**Team·Enterprise 조직이 자체 인프라에서 Claude Code 클라우드 세션을 실행하는 퍼블릭 베타 기능입니다.**

```bash
claude self-hosted-runner setup
```

내부 네트워크 접근, 커스텀 도구 사전 설치, 컴플라이언스 요구사항 충족이 주된 사용 목적이에요.

> 👉 자세한 내용: [셀프 호스팅 환경](/advanced/self-hosted-environments)

---

## 🆕 3. Auto 모드가 기본 권한 모드로 전환

**2026년 8월 14일부터 Pro·Max·Team 플랜의 신규 세션은 Auto 모드가 기본입니다.**

Auto 모드란: Claude가 위험도를 판단해 안전한 작업은 자동 진행하고, 위험한 작업만 사람에게 물어보는 모드예요.

> 이미 기본 모드를 직접 설정해두신 분: 기존 설정이 유지됩니다. 전환 프롬프트가 1회 나타나며 선택할 수 있어요.

지금 바로 기본 설정하려면:

```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

**추가 변경**: Auto 모드의 classifier(분류기) 호출이 더 이상 사용량 한도에 포함되지 않습니다.

---

## 기타 W32 업데이트

| 항목 | 내용 |
|---|---|
| **VS Code Focus 뷰** | 도구 활동을 한 줄로 접을 수 있는 뷰. `Ctrl+Alt+F` 토글 |
| **샌드박스 자격증명 마스킹** | Linux·WSL2에서 `mode: "mask"` 지원 |
| **플러그인 ZIP 배포** | 마켓플레이스에서 git/npm 없이 zip으로 설치 가능 |
| **`/review` 명령 추가** | `/code-review`의 별칭 |
| **`/fork` 워크트리 분리** | 포크된 세션이 원본과 분리된 워크트리에서 작업 |
| **서브에이전트 200개 제한 제거** | 장시간 세션에서 서브에이전트 제한 해제 |
| **워크트리 격리 강화** | 파일 편집뿐 아니라 Bash 명령·git 리다이렉트도 격리 |
| **`/ultraplan` 제거** | Research Preview 종료. `/ultraplan` 명령·키워드 비활성화. 대안: Plan 모드 또는 Claude Code Web |

---

## 관련 문서

- [W30 원문](https://code.claude.com/docs/en/whats-new/2026-w30)
- [W32 원문](https://code.claude.com/docs/en/whats-new/2026-w32)
- [Permission Modes 안내](/advanced/permission-modes) — Auto 모드 이해하기
