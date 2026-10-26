---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월~9월)"
description: "Opus 5 기본 모델 전환, 자체 호스팅 환경, Auto 모드 기본값 변경, 플러그인 평가 도구, 데스크톱 창 분리 등 2026년 7~9월 주요 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "opus5", "self-hosted", "auto-mode", "plugin-eval", "데스크톱"]
category: "next"
order: 19
lastUpdated: "2026-10-26"
---

<div class="note-star">
★ <strong>[공]</strong> <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30, W32~W37) 한국어 정리<br />
★ W31은 공식 문서에 게시되지 않아 이 요약에서 제외했어요.
</div>

## 한 눈에 보는 요약

| 주차 | 기간 | 핵심 |
|------|------|------|
| **W30** | 7/20~7/24 | **Opus 5 기본 모델**, iOS 시뮬레이터, Claude Security 플러그인 |
| **W32** | 8/3~8/7 | **자체 호스팅(Self-hosted) 베타**, **Auto 모드 기본값 변경** |
| **W33~W36** | 8/10~9/4 | 플러그인 생태계 확장, 설정 개선 |
| **W37** | 9/7~9/11 | **플러그인 평가 도구**, 데스크톱 창 분리, `maxEffortLevel` |

---

## W30 · 7월 20~24일 — Opus 5 기본 모델 전환

### 🤖 Claude Opus 5 — 새 기본 Opus

Claude Code의 기본 Opus 모델이 **Opus 5**로 바뀌었어요. 1M 토큰 컨텍스트 지원, Fast Mode 가격도 $10/$50으로 변경.

자세한 내용 → [2026 하반기 모델 총정리](./claude-55-models.md) 참조

### 📱 데스크톱 앱 iOS 시뮬레이터 창

맥OS 데스크톱 앱에 **iOS 시뮬레이터 창**이 공개 베타로 추가됐어요 (Pro, Max, Team 플랜).

Claude가 시뮬레이터에서 앱을 빌드하거나 실행하면 옆에 패널이 열리고 **실시간으로 화면이 스트리밍**돼요.

```
> 앱을 시뮬레이터에서 실행해서 온보딩 플로우를 확인해줘
```

필요 조건: Xcode + iOS 플랫폼 설치, Desktop v1.24012.0 이상

### 🔒 Claude Security 플러그인

공식 Anthropic 마켓플레이스에서 설치할 수 있는 **취약점 스캔 플러그인**이 추가됐어요.

```text
> /plugin install claude-security@claude-plugins-official
> /reload-plugins
> /claude-security
```

멀티 에이전트가 코드베이스를 분석하고 취약점 보고서를 `CLAUDE-SECURITY-<timestamp>/` 폴더에 작성해요.

---

## W32 · 8월 3~7일 — 자체 호스팅 & Auto 모드 기본값 변경

### 🏠 자체 호스팅 환경 (Self-hosted Environments) 공개 베타 `[공]`

Claude Code 세션을 **내 인프라**에서 직접 실행할 수 있는 기능이에요.

> 🍱 **비유**: 공유 오피스(Anthropic 클라우드)가 아닌 **내 회사 건물 안에서** Claude가 일하는 것처럼요 — 내부 서비스에 바로 접근하고, 데이터가 회사 밖으로 나가지 않아요.

| 장점 | 설명 |
|------|------|
| 네트워크 내부 유지 | 외부 인터넷 없이 내부 서비스 접근 |
| 데이터 격리 | 코드·데이터가 자체 인프라에 보관 |
| 컴플라이언스 | 보안 정책 강화 환경에 적합 |

공식 문서: [code.claude.com/docs/en/self-hosted-environments](https://code.claude.com/docs/en/self-hosted-environments)

### 🤖 Auto 모드가 기본값이 됐어요 `[공/블]`

> **마케팅 공식 발표 (2026-08-07)**: "Claude Code가 이제 Pro, Max, Team 플랜에서 기본적으로 auto 모드로 실행됩니다."

Auto 모드는:
- 더 오래, 더 복잡한 작업을 처리할 수 있어요
- 위험한 명령에는 여전히 안전 분류기가 작동해요
- 이전엔 선택 옵션이었지만 이제는 **기본**이에요

> 🍱 **비유**: 이전에는 "자동 운전 켤까요?" 매번 물어봤는데, 이제는 기본으로 자동 운전이 켜져 있고 위험 상황에선 알아서 브레이크 밟아요.

---

## W37 · 9월 7~11일 — 플러그인 평가 + 데스크톱 창 분리

### 🧪 `claude plugin eval` — 플러그인 테스트 도구

플러그인 개발자를 위한 **자동화 평가 도구**가 추가됐어요.

```bash
# 테스트 케이스 초안 자동 생성
claude plugin eval init

# 평가 실행
claude plugin eval .
```

실행하면 터미널에 각 테스트 케이스별 점수·비용·개선 효과 표가 출력되고, `evals/results/report.html`에 상세 결과가 저장돼요.

- 플러그인 있을 때/없을 때 점수 비교
- 실제 모델 호출 기반 (내 계정 크레딧 사용)

### 🪟 데스크톱 앱 창 분리(Pop-out)

데스크톱 앱에서 **어떤 패널이든 별도 창으로 분리**할 수 있어요.

```
diff 패널 → 두 번째 모니터로 분리
↓
메인 창에서 Claude는 계속 작업
↓
필요하면 다시 도킹
```

> 🍱 **비유**: 스트리머가 게임 화면과 채팅창을 별도 모니터에 띄우는 것처럼요 — Claude 대화와 코드 diff를 각각 다른 모니터에 놓을 수 있어요.

### 기타 W37 업데이트

| 기능 | 내용 |
|------|------|
| `maxEffortLevel` 설정 | 최대 노력 레벨 전체·모델별 상한 설정 가능 |
| `--plugin-dir` 플래그 | 폴더 안 모든 서브폴더 플러그인 한 번에 로드 |
| WebFetch 타임아웃 | 5분 초과 시 실패 처리 (CLAUDE_CODE_WEBFETCH_DEADLINE_MS로 조정 가능) |
| 세션 중간 명령어 완성 | `/` 타이핑 시 매칭 명령어 목록 표시 (풀스크린 모드) |
| VS Code 서브에이전트 맵 | 에이전트 수 클릭 → 서브에이전트 전사 보기 가능 |

---

## W33~W36 (8/10~9/4) 요약

W33~W36의 세부 내용은 공식 What's New 페이지에서 확인할 수 있어요. 이 기간에는 플러그인 시스템 관련 개선이 주를 이뤘어요:

- 플러그인 마켓플레이스 확장 (Code Intelligence, Security 플러그인 카테고리 추가)
- `claude-apps-gateway` AWS 배포 지원 추가
- 크로스 세션 메시지(Cross-session messaging) 기능
- `hipaa-setup` 문서 추가
- Settings Reference 페이지 신설 (설정 전체 참조 문서)

<div class="note-circle">
○ W31은 공식 What's New에 게시되지 않았어요<br />
○ 공식 What's New 전체 목록: code.claude.com/docs/en/whats-new/index
</div>
