---
title: "[공] W30·W32 주요 업데이트 — Opus 5·자체 호스팅·세션 간 메시지"
description: "2026년 7월~8월 초 Claude Code 주요 업데이트 요약. Opus 5 기본 전환, iOS 시뮬레이터, Claude Security 플러그인, 크로스 세션 메시지, 자체 호스팅 환경, Auto mode 기본값화, /ultraplan 제거까지."
tags: ["자동생성", "업데이트", "W30", "W32", "What's New", "2026-07", "2026-08"]
category: "next"
order: 18
lastUpdated: "2026-08-11"
---

<div class="note-star">
★ <strong>[공] 공식 문서</strong> 기반 — <a href="https://code.claude.com/docs/en/whats-new/2026-w30">W30 (Jul 20-24)</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32 (Aug 3-7)</a><br />
★ v2.1.214 → v2.1.219 (W30), v2.1.220 → v2.1.224 (W32) 에서 업데이트됐어요.
</div>

## 🗓️ Week 30 (2026년 7월 20-24일)

> "Opus 5가 기본 Opus 모델이 되고, Claude Code Desktop에 iOS 시뮬레이터 창이 추가되고, Claude Security 플러그인이 코드 취약점을 스캔합니다."

---

### 🆕 1. Claude Opus 5 — 새 기본 Opus 모델

**v2.1.219 이상 필요**

Opus 5가 Claude Code의 기본 Opus 모델이 됐어요. Max·Team Premium·Enterprise 종량제·Anthropic API에서 자동 전환됩니다. Amazon Bedrock과 Google Cloud에서는 1M 컨텍스트 변형을 직접 선택하세요.

- ✅ **1M 토큰 컨텍스트** (Anthropic API·Max·Team·Enterprise)
- ✅ **Fast Mode가 Opus 5로 이전** ($10/$50 per MTok — 이전 $30/$150에서 인하!)

```bash
/model claude-opus-5   # 수동 전환도 가능
```

> 🍱 **비유**: "셰프 특선 메뉴"가 업그레이드됐어요. 더 맛있어졌는데 가격도 내려갔습니다.

📎 [Claude Opus 5 상세 문서](/docs/next/claude-opus-5)

---

### 🆕 2. iOS 시뮬레이터 창 — Claude Code Desktop (macOS)

**Desktop 기능 · 공개 베타 (Pro·Max·Team)**

Claude Code Desktop(macOS)에 **iOS 시뮬레이터 창**이 생겼어요. Claude가 앱을 빌드하거나 시뮬레이터에서 실행할 때, 대화 화면 옆에 기기 화면이 실시간으로 나타나요.

- 요구사항: Xcode(iOS 플랫폼 설치) + Claude Desktop v1.24012.0 이상
- 내가 직접 시뮬레이터를 조작할 수도 있어요

```
> Build the app and run it in the simulator to check the onboarding flow.
```

→ 앱이 실행되면 시뮬레이터 창이 자동으로 열립니다.

📎 [공식 문서 — iOS 시뮬레이터](https://code.claude.com/docs/en/desktop-ios-simulator)

---

### 🆕 3. Claude Security 플러그인 — 코드 취약점 멀티 에이전트 스캔

**플러그인 · 유료 플랜 필요**

새로운 **Claude Security 플러그인**이 출시됐어요. 내 코드베이스를 에이전트 팀이 스캔해서 취약점 리포트와 패치까지 제안해줘요.

- 설치: `/plugin install claude-security@claude-plugins-official`
- 실행: `/claude-security` 메뉴에서 **Scan codebase** 선택
- 결과: `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장

> 🍱 **비유**: 여러 명의 보안 전문가 팀이 내 코드를 교차 검토하고, 문제를 발견하면 패치 초안까지 작성해주는 서비스예요.

📎 [Claude Security 플러그인 상세](/docs/advanced/claude-security-plugin)

---

### 📦 W30 기타 개선사항

| 기능 | 내용 |
|---|---|
| `/code-review` 백그라운드화 | 리뷰가 내 대화를 방해하지 않고 완료 시 결과 전달 |
| `/verify`, `/code-review`, `/deep-research` | 이제 내가 명시적으로 실행해야만 작동 (자동 실행 안 함) |
| 이모지 단축코드 자동완성 | `:heart:` 처럼 입력하면 이모지 삽입, 2글자 이상 입력 시 추천 |
| 동시 서브에이전트 기본 20개 | `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조절 |
| `--max-budget-usd` | 서브에이전트에도 예산 상한 적용 |
| Fast Mode — Opus 4.7 지원 종료 | `/fast`는 이제 Opus 5와 Opus 4.8만 지원 |
| 장시간 도구 호출 하트비트 | 오래 걸리는 작업이 조용히 멈추지 않고 주기적으로 진행 상황 알림 |

---

## 🗓️ Week 32 (2026년 8월 3-7일)

> "Claude Code 세션들이 서로 메시지를 보내고, 자체 호스팅 환경으로 클라우드 세션을 내 인프라에서 실행하고, Auto mode가 기본값이 됩니다."

---

### 🆕 1. 크로스 세션 메시지 — 세션끼리 대화

**v2.1.224 이상 · macOS·Linux**

내 Claude Code 세션들이 **서로 메시지를 보낼 수 있어요**. 한 세션이 다른 세션에게 변경 사항을 알리거나 정보를 전달합니다.

```
> Tell the session working on the payments API that users.name is now users.display_name
```

- 메시지를 받은 세션에는 `Message from` 줄이 표시돼요
- `Ctrl+O`를 눌러 확대 보기
- `/list-agents`로 Claude가 연결 가능한 세션 목록 확인

> 🍱 **비유**: 사무실에서 두 팀이 각자 자기 방에서 작업하다가, "저쪽 팀에 우리 변수명 바뀐 거 알려줘"라고 메모를 보내는 느낌이에요.

📎 [크로스 세션 메시지 상세](/docs/advanced/cross-session-messaging)

---

### 🆕 2. 자체 호스팅 환경 — 내 서버에서 클라우드 세션 실행

**v2.1.224 이상 · Team·Enterprise 공개 베타**

조직이 **자체 서버**에서 Claude Code 클라우드 세션을 실행할 수 있어요. 내부 네트워크의 서비스·데이터베이스·레지스트리에 세션이 직접 접근할 수 있습니다.

```bash
# 설정 시작 (Owner 또는 관리자 권한 필요)
claude self-hosted-runner setup
```

- 관리자 설정에서 **"Allow self-hosted environments"** 활성화 먼저
- 환경이 준비되면 세션 시작 시 **환경 선택창**에서 내 환경이 보임
- Anthropic에서 내 네트워크로 들어오는 연결 없음 (모두 아웃바운드)
- 코드 체크아웃·빌드 결과물은 내 인프라에 보관

> 🍱 **비유**: 은행 직원들이 "일은 꼭 은행 금고 안에서 처리하고 싶은데, 고객 대면은 창구에서 해도 돼"라는 상황이에요. 실제 작업은 내 금고(서버) 안에서, 인터페이스는 Claude.ai에서.

📎 [자체 호스팅 환경 상세](/docs/advanced/self-hosted-environments)

---

### 🆕 3. Auto mode 기본값 전환 — 2026년 8월 14일부터

**CLI · Pro·Max·Team 플랜**

**2026년 8월 14일부터** Auto mode가 새 세션의 기본 권한 모드가 돼요.

- 내가 직접 기본 모드를 설정했다면 → 한 번 전환 안내 팝업이 뜨고, 수락하면 변경
- 조직이 관리하는 기본값 → 변경 없음
- 언제든지 모드 전환은 가능

이미 Auto mode를 기본값으로 설정하고 싶다면:

```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

새 세션에서 상태바에 `auto mode on`이 표시돼요.

> 🍱 **비유**: 새로 개통된 신형 세탁기가 기본 코스를 "표준"에서 "스마트 자동"으로 바꿨어요. 기존에 "세탁물 많음 코스"로 저장해뒀다면 그대로 유지돼요.

📎 [Auto mode 설정](/docs/advanced/permission-modes)

---

### 📦 W32 기타 개선사항

| 기능 | 내용 |
|---|---|
| **VS Code Focus view** | 도구 활동을 한 행으로 접기·펼치기 (`Ctrl+Alt+F` / `Ctrl+Option+F`) |
| 샌드박스 자격증명 마스킹 | `mode: "mask"` — Linux·WSL2에서 진짜 값 대신 감지 파일 제공 |
| 플러그인 zip 배포 | `archive` 소스 타입으로 npm·git 없이 HTTPS 다운로드로 배포 가능 |
| `/review` = `/code-review` 별칭 추가 | `/code-review`의 짧은 버전으로 `/review` 사용 가능 |
| `/fork` 워크트리 분리 | fork된 세션의 코드 변경이 원본 체크아웃 대신 자체 워크트리에서 실행 |
| 플러그인 즉시 활성화 | 설치 후 안전하면 현재 세션에서 즉시 활성화 |
| 백그라운드 세션 PR 자동화 | 코드 변경 후 커밋·푸시·PR 자동 생성 (작업에서 필요한 경우) |
| **200 서브에이전트 제한 해제** | 장시간 세션에서 새 서브에이전트 거부 현상 해결 (동시 실행·깊이 제한은 유지) |
| Remote Control auto-connect 권한 | 이제 프로젝트 설정에서 켤 수 없음, 사용자·managed 설정에서만 가능 |
| 워크트리 격리 강화 | Bash 명령어와 git 리다이렉트도 메인 체크아웃 접근 차단 |
| **`/ultraplan` 제거** ⚠️ | ultraplan 리서치 프리뷰 종료. plan mode 또는 Claude Code on the web 사용 권장 |

---

## ⚠️ 중요 — `/ultraplan` 종료

W32에서 `/ultraplan` 리서치 프리뷰가 공식 종료됐어요.

- `/ultraplan` 명령어와 `ultraplan` 키워드 모두 제거됨
- 대안: **plan mode** 또는 **Claude Code on the web**에서 플래닝

관련 문서: [ultraplan 종료 안내 (업데이트됨)](/docs/advanced/ultraplan)

---

## 한 줄 요약

> W30-W32 요약: **Opus 5 전환 + 보안 스캔 + 팀 인프라 실행 + 세션 간 협업**이 모두 이번 업데이트에 담겼어요.

- 📎 [Claude Opus 5 상세](/docs/next/claude-opus-5)
- 📎 [자체 호스팅 환경](/docs/advanced/self-hosted-environments)
- 📎 [Claude Security 플러그인](/docs/advanced/claude-security-plugin)
- 📎 [크로스 세션 메시지](/docs/advanced/cross-session-messaging)
