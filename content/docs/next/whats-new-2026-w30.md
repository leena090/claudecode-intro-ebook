---
title: "[공] Claude Code 주간 업데이트 W30 (2026년 7월 20~24일)"
description: "Opus 5 기본 모델 전환, iOS 시뮬레이터 패널, Claude Security 취약점 스캔 플러그인 등 W30 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "iOSSimulator", "ClaudeSecurity"]
category: "next"
order: 18
lastUpdated: "2026-08-10"
---

<div class="note-star">
★ <strong>[공]</strong> 출처: <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com/docs/en/whats-new/2026-w30</a><br />
★ 버전 범위: v2.1.214 → v2.1.219 · 주요 기능 3건 · 2026년 7월 20~24일
</div>

## 이번 주 한 줄 요약

> 🏆 **Opus 5**가 기본 Opus 모델로 등장! + 맥에서 **iOS 앱을 클로드가 직접 테스트** + **보안 취약점 자동 스캔** 플러그인

---

## 주요 기능 3가지

### 1. 🤖 Claude Opus 5 — 새 기본 Opus 모델 (v2.1.219)

Claude Opus 5가 Max·Team Premium·Enterprise·API의 **기본 Opus 모델**이 됐어요.

> 🍱 **비유로 설명하면**: 회사 최고 임원(총괄 매니저)이 교체됐어요. 예전 "Opus 4.8"이 퇴임하고 더 유능한 "Opus 5"가 자리를 이어받았죠.

주요 변화:
- **1M 토큰 컨텍스트** (Anthropic API·Max·Team·Enterprise 기준)
- **Fast Mode 가격 인하**: $30/$150 → **$10/$50** /MTok
- 전환 명령어: `/model claude-opus-5`

```bash
# Opus 5로 바꾸기
/model claude-opus-5

# 또는 Fast Mode 켜면 자동으로 Opus 5 사용
/fast
```

👉 자세한 내용은 **[Claude Opus 5 출시 안내](../next/claude-opus-5.md)**를 참고하세요.

---

### 2. 📱 iOS 시뮬레이터 패널 — 맥에서 앱 테스트를 클로드가 (Desktop)

Claude Code Desktop(macOS)에서 **iOS 시뮬레이터 패널**이 추가됐어요.

아직 공개 베타(Pro, Max, Team 플랜)이고, Xcode가 설치되어 있어야 해요.

> 🍱 **비유로 설명하면**: 예전에는 앱을 수정한 뒤 직접 시뮬레이터를 열고 확인했다면, 이제는 클로드한테 "앱 켜서 온보딩 흐름 확인해봐"라고 말하면 **클로드가 알아서 시뮬레이터를 열고, 앱을 실행하고, 화면을 스트리밍으로 보여줘요.**

**사용 방법**:

```text
# Claude Code에서 그냥 말하면 됩니다
앱 빌드해서 시뮬레이터에서 온보딩 흐름 확인해줘
```

- 클로드가 빌드 → 실행 → 화면 스트리밍 자동으로 해줘요
- 시뮬레이터가 대화 옆에 패널로 열려요
- **요구사항**: Xcode + iOS 플랫폼 설치, Claude Desktop v1.24012.0 이상

📱 앱 개발자라면 정말 편리한 기능이에요!

---

### 3. 🔒 Claude Security 플러그인 — 내 코드 취약점 자동 스캔

**Claude Security** 플러그인은 내 코드베이스에서 **보안 취약점을 찾아주는 멀티 에이전트 스캔 도구**예요.

> 🍱 **비유로 설명하면**: 집을 지었을 때 전문 보안 업체가 와서 창문 잠금장치, 현관 자물쇠, 비상구 상태를 꼼꼼하게 점검해주는 것과 같아요. 클로드가 여러 에이전트를 보내서 코드 곳곳을 분석하고 취약점 리포트를 써줘요.

**작동 방식**:
1. 여러 에이전트가 아키텍처 분석 → 위협 모델 구축 → 취약점 탐색
2. 각 발견 사항을 **독립적으로 교차 검증**
3. 결과를 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장

**스캔 대상**:
- 전체 저장소
- 브랜치 diff, Pull Request, 특정 커밋

**설치 및 사용**:

```bash
# 1. 플러그인 설치
/plugin install claude-security@claude-plugins-official

# 2. 플러그인 재로딩
/reload-plugins

# 3. 스캔 시작
/claude-security
```

⚠️ 취약점을 발견해도 **직접 수정은 안 해줘요**. 내가 선택한 항목만 패치로 만들어줘요 (잘못된 자동 수정 방지).

---

## 기타 주목할 개선 사항

| 기능 | 설명 |
|---|---|
| `/code-review` 백그라운드 실행 | 코드 리뷰가 별도 컨텍스트 창에서 백그라운드로 실행 — 대화 흐름 방해 없음 |
| `/verify`, `/code-review`, `/deep-research` | 이제 내가 직접 호출할 때만 실행 (클로드가 자동 실행 안 함) |
| 이모지 자동완성 | `:heart:` 등 이모지 단축 코드 자동완성 지원 (`emojiCompletionEnabled`로 끄기 가능) |
| 스킬 `context: fork` | 기본적으로 백그라운드에서 실행 (`background: false`로 동기 대기 가능) |
| 동시 서브에이전트 기본값 | 세션당 최대 20개 동시 실행 (환경변수 `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 변경 가능) |
| `--max-budget-usd` 개선 | 서브에이전트에도 예산 한도 적용 — 초과 시 새 서브에이전트 시작 불가 |
| Bash 보안 강화 | 파일 디스크립터 리디렉트, Zsh 변수 서브스크립트 등 더 많은 셸 형식에서 권한 체크 실패 시 안전하게 거부 |
| Fast Mode Opus 4.7 지원 종료 | `/fast`는 이제 Opus 5·Opus 4.8만 지원 |

---

## 공식 릴리즈 노트

- 버전: v2.1.214 → v2.1.219
- 전체 변경 내역: [changelog#2-1-214](https://code.claude.com/docs/en/changelog#2-1-214)
