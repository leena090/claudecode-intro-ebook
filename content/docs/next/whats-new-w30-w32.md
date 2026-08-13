---
title: "[공] Claude Code 주간 업데이트 W30+W32 (2026년 7~8월)"
description: "Opus 5, iOS 시뮬레이터, Claude Security 플러그인, 세션 간 메시지, 자체 호스팅 환경, 오토 모드 기본 전환 — 2026년 7~8월 주요 업데이트 정리"
tags: ["자동생성", "주간업데이트", "Opus5", "세션간메시지", "자체호스팅", "오토모드", "iOS시뮬레이터"]
category: "next"
order: 18
lastUpdated: "2026-08-13"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/2026-w30">공식 What's New W30</a> (Jul 20–24) + <a href="https://code.claude.com/docs/en/whats-new/2026-w32">W32</a> (Aug 3–7) 내용을 한국어로 정리한 것입니다.
<br />★ W31(Jul 27~Aug 2)은 공식 What's New에서 누락됨 — W30·W32만 발행된 것으로 확인됩니다.
</div>

## 한눈에 보는 2주 요약

| 주차 | 기간 | 핵심 변화 |
|---|---|---|
| **W30** | Jul 20–24 | Opus 5 출시, iOS 시뮬레이터, Claude Security 플러그인 |
| **W32** | Aug 3–7 | 세션 간 메시지, 자체 호스팅 환경, 오토 모드 기본값화 (Aug 14 예정) |

---

## W30 (2026년 7월 20~24일)

### 🆕 Claude Opus 5 출시

Opus 티어의 새 최상위 모델이에요. 패스트 모드(`/fast`) 적용 시 Opus 5를 사용하며, 가격이 $30/$150 → **$10/$50 (입력/출력 per MTok)**으로 대폭 내려갔어요.

```bash
# Opus 5로 전환
/model claude-opus-5
```

👉 자세한 내용은 **[Claude Opus 5 출시 가이드](/docs/next/claude-opus-5)**를 보세요.

---

### 📱 iOS 시뮬레이터 패널 (macOS 전용 베타)

Claude Code Desktop(맥 전용)에서 iOS 앱을 개발할 때 **시뮬레이터 화면을 대화 창 옆에서 바로 볼 수** 있게 됐어요.

> 🍱 **비유로 설명하면**: 요리사가 레시피를 바꾸면서 오른쪽에 시식 접시를 바로 두는 것처럼, Claude가 코드를 수정하는 동안 왼쪽엔 코드, 오른쪽엔 실제 아이폰 앱 화면이 실시간으로 나타나요.

**조건**:
- macOS, Claude Desktop v1.24012.0 이상
- Xcode + iOS 플랫폼 설치 필요
- Pro, Max, Team 요금제에서 퍼블릭 베타

```text
> 앱을 시뮬레이터에서 실행해서 온보딩 화면 확인해줘
```

이렇게 말하면 Claude가 앱을 빌드·실행하고 시뮬레이터 패널이 자동으로 열려요.

📄 [iOS 시뮬레이터 공식 문서](https://code.claude.com/docs/en/desktop-ios-simulator)

---

### 🔒 Claude Security 플러그인 (공개 출시)

코드베이스의 **보안 취약점을 자동으로 찾아주는 플러그인**이 공식 출시됐어요. 여러 에이전트가 병렬로:
1. 코드베이스 전체 구조 파악
2. 위협 모델(threat model) 수립
3. 취약점 탐색
4. 발견 내용 독립 검토
5. 보고서를 `CLAUDE-SECURITY-<timestamp>/` 폴더에 저장

전체 코드베이스, 특정 브랜치 diff, PR, 또는 단일 커밋 단위로 스캔 가능합니다.

```bash
# 공식 마켓플레이스에서 플러그인 설치
/plugin install claude-security@claude-plugins-official

# 설치 후 플러그인 다시 로드
/reload-plugins

# 보안 스캔 시작
/claude-security
```

> 📌 **활용 팁**: 발견된 취약점 중 직접 적용하고 싶은 것만 골라서 패치를 만들 수 있어요. 자동 배포가 아니라 "검토 후 선택 적용" 방식이에요.

---

### 그 밖의 W30 변화들

| 항목 | 내용 |
|---|---|
| `/code-review` 개선 | 이제 **별도 서브에이전트**로 백그라운드에서 실행됩니다. 리뷰 중에도 대화 이어갈 수 있어요 |
| 이모지 자동완성 | `:heart:` 등 이모지 단축키 자동완성 지원. 설정: `emojiCompletionEnabled` |
| 서브에이전트 20개 동시 실행 | 기본 최대 동시 서브에이전트 20개로 증가. 환경변수 `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정 가능 |
| 패스트 모드 Opus 4.7 지원 종료 | `/fast`는 이제 **Opus 5**와 **Opus 4.8**에서만 작동 |
| 도구 실행 중 진행 상황 표시 | 오래 걸리는 도구 실행 시 주기적으로 진행 상황을 알려줘요 |

---

## W32 (2026년 8월 3~7일)

### 💬 세션 간 메시지 (Cross-session messaging)

이제 내 Claude Code **세션들이 서로 메시지를 주고받을 수 있어요!**

> 🍱 **비유로 설명하면**: 여러 팀이 다른 사무실에서 일하다가 "우리 쪽 DB 스키마 바뀌었어요"라고 사내 메신저로 알리는 것처럼, Claude가 한 터미널에서 작업하다가 "이 변경이 다른 세션에 영향 줘" 싶으면 자동으로 그 세션에 알릴 수 있어요.

```text
# 내 다른 터미널 세션에 소식 전하기
> payments API 작업 중인 세션에 users.name이 users.display_name으로 바뀌었다고 알려줘

# 현재 연결 가능한 세션 목록 보기
/list-agents
```

메시지를 받은 세션에서는 `Ctrl+O`를 눌러 내용을 펼쳐볼 수 있어요.

**조건**:
- Claude Code **v2.1.224 이상**
- macOS 또는 Linux (Windows 미지원)
- Bedrock, Google Cloud, Microsoft Foundry 환경에서는 미지원

👉 자세한 내용은 **[세션 간 메시지 완벽 가이드](/docs/advanced/cross-session-messaging)**를 보세요.

---

### 🏢 자체 호스팅 환경 (Self-hosted environments) — Team/Enterprise 베타

회사 내부 인프라에서 Claude Code 클라우드 세션을 돌릴 수 있는 기능이 공개 베타로 출시됐어요. 인터넷 망분리(on-premise) 환경에서도 claude.ai, 모바일 앱, 데스크톱 앱, `claude --cloud` 명령으로 Claude Code를 쓸 수 있게 됐습니다.

> 🍱 **비유로 설명하면**: 기존엔 클라우드 식당에 가야만 밥을 먹을 수 있었는데, 이제 우리 회사 구내식당에서도 같은 메뉴를 즐길 수 있게 된 거예요. 회사 내부망에 접근하면서 Claude를 쓸 수 있어요.

**설정 방법 (Owner 또는 관리자)**:
```bash
# 자체 호스팅 러너(runner) 설정 시작
claude self-hosted-runner setup
```

관리자 설정(`claude.ai/admin-settings/cloud-environments`)에서 **Allow self-hosted environments**를 먼저 활성화해야 해요.

- 지원 요금제: **Team, Enterprise** (퍼블릭 베타)
- 공식 문서: [Self-hosted Environments Quickstart](https://code.claude.com/docs/en/self-hosted-environments-quickstart)

---

### 🤖 오토 모드(Auto Mode)가 기본값으로 전환 예정 (2026-08-14)

> **⚡ 중요 변경**: 2026년 8월 14일부터 **Pro, Max, Team 요금제의 신규 세션**에서 **오토 모드(auto mode)**가 기본 권한 모드로 적용됩니다.

오토 모드는 Claude가 파일 수정·명령어 실행 같은 작업을 할 때 매번 승인을 구하지 않고, AI 분류기(classifier)가 자동으로 안전 여부를 판단해 진행하는 모드예요.

> 🍱 **비유로 설명하면**: 기존엔 집에 방문한 수리 기사가 "문 열어도 될까요?", "드라이버 써도 될까요?" 매번 물었다면, 오토 모드는 경험 많은 기사가 눈치껏 알아서 하되 위험한 일만 물어보는 거예요.

**내가 직접 설정하는 방법**:
```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

**기존 설정 유지 방법**: 내가 이미 기본 모드를 설정해 두었다면 → 전환 프롬프트가 뜨고 수락해야 바뀌어요. 거부하면 현재 설정 유지.

> 📌 **오토 모드 분류기 호출은 사용량 한도에 포함되지 않아요** (이미 적용 중).

---

### 그 밖의 W32 변화들

| 항목 | 내용 |
|---|---|
| `/review` 별칭 추가 | `/code-review`와 동일. 더 짧게 쓸 수 있어요 |
| `/fork` 세션 워크트리 격리 | `/fork`로 복제한 세션은 이제 **별도 워크트리**에서 작업해요. 원본 코드와 충돌 없음 |
| 서브에이전트 200개 제한 제거 | 세션당 서브에이전트 상한 없어짐. 동시 실행 제한은 여전히 있음 |
| VS Code Focus 뷰 | VS Code 확장에서 도구 활동을 한 줄로 접어보는 `Focus 뷰` 추가. 단축키 `Ctrl+Alt+F` |
| 플러그인 zip 배포 | 마켓플레이스가 git/npm 없이도 zip 파일로 플러그인 배포 가능 |
| 워크트리 격리 강화 | 메인 체크아웃에 대한 Bash 명령어·git 리디렉트까지 차단 범위 확대 |
| **⚠️ `/ultraplan` 제거** | Ultraplan Research Preview 종료. `/ultraplan` 명령어 및 `ultraplan` 키워드 삭제. 대신 `/plan` 또는 Claude Code 웹을 사용하세요 |

---

## 버전 업데이트 방법

```bash
# 현재 버전 확인
claude --version

# 최신 버전으로 업데이트
npm install -g @anthropic-ai/claude-code@latest
```

| 기능 | 필요 최소 버전 |
|---|---|
| Claude Opus 5 | v2.1.219 |
| 세션 간 메시지 | v2.1.224 |
| 자체 호스팅 환경 | v2.1.224 |

---

## 다음 단계

- **[Claude Opus 5 완벽 가이드](/docs/next/claude-opus-5)** — Opus 5 전환 방법·패스트 모드 활용
- **[세션 간 메시지](/docs/advanced/cross-session-messaging)** — 내 세션들을 팀처럼 운영하기
- **[권한 모드 가이드](/docs/advanced/permission-modes)** — 오토·수동·바이패스 모드 비교
