---
title: "[공] Claude Code 주간 업데이트 W30 (2026년 7월 20~24일)"
description: "Claude Opus 5 기본 모델 전환, iOS 시뮬레이터 통합, Claude Security 보안 스캔 플러그인 출시 — 2026년 7월 4주차 업데이트"
tags: ["자동생성", "주간업데이트", "Opus5", "iOS시뮬레이터", "Claude Security", "보안", "신기능"]
category: "next"
order: 18
lastUpdated: "2026-09-07"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/2026-w30">code.claude.com 공식 What's New W30</a> 내용을 한국어로 정리한 것입니다.
<br />★ 기간: 2026년 7월 20~24일 | 릴리즈: v2.1.214 → v2.1.219
</div>

## 한 눈에 보는 W30 핵심 3가지

| # | 기능 | 한 줄 요약 |
|---|---|---|
| 1 | **Claude Opus 5** | 새 기본 Opus 모델 전환, 1M 토큰 컨텍스트 |
| 2 | **iOS 시뮬레이터** | Desktop 앱에서 iOS 앱 화면을 실시간으로 보며 테스트 |
| 3 | **Claude Security 플러그인** | 멀티에이전트 보안 취약점 스캔 + 패치 제안 |

---

## 1. 🤖 Claude Opus 5 — 새 기본 Opus 모델

Claude Opus 5(`claude-opus-5`)가 Claude Code의 **기본 Opus 모델**로 전환됐어요.

> 🏗️ **비유로 설명하면**: 이전 Opus 4.7·4.8이 '숙련 건축가'였다면, Opus 5는 '더 넓은 설계도를 한 번에 보는 마스터 건축가'예요. 특히 오래 걸리는 복잡한 에이전트 작업에서 차이가 두드러져요.

**주요 변화:**
- ✅ Max, Team Premium, Enterprise, API에서 자동으로 Opus 5 적용
- ✅ **1M 토큰 컨텍스트** 창 (Anthropic API, Max/Team/Enterprise 플랜)
- ✅ Fast Mode도 Opus 5 기반으로 전환 — 가격 **$10/$50 per MTok** (기존 $30/$150에서 대폭 인하)
- ⚠️ v2.1.219 이상 필요

```bash
# Opus 5 직접 지정
/model claude-opus-5

# 또는 모델 피커에서 선택
/model
```

**Fast Mode 변화 요약:**

| 항목 | 이전 | 이후 |
|---|---|---|
| Fast Mode 기본 모델 | Opus 4.8 | **Opus 5** |
| 가격 | $30/$150 per MTok | **$10/$50 per MTok** |
| Opus 4.7 지원 | 종료(6/25), 제거(7/24) | ❌ |

---

## 2. 📱 iOS 시뮬레이터 — Desktop에서 앱 화면 실시간 확인

**Claude Code Desktop(macOS)** 에 iOS 시뮬레이터 화면이 통합됐어요.

> 📺 **비유로 설명하면**: 이전엔 Claude가 코드를 수정한 뒤 "됐을 거야"라고 말하면 직접 시뮬레이터를 열어 확인해야 했어요. 이제는 Claude가 앱을 실행하면 **대화창 옆에 시뮬레이터 화면이 바로 떠요** — TV 화면 곁에 앉아서 같이 보는 것처럼요.

**특징:**
- 🔴 퍼블릭 베타 — Pro, Max, Team 플랜
- 📱 Claude가 빌드·실행하면 자동으로 시뮬레이터 패널 오픈
- 🖥️ 실시간 화면 스트리밍으로 클로드 작업 과정 시각적 확인
- 👆 시뮬레이터를 직접 조작하는 것도 가능

**사전 조건:**
- macOS + Xcode (iOS 플랫폼 설치 완료)
- Claude Desktop v1.24012.0 이상

```
# 사용 예시 — Claude에게 iOS 앱 테스트 요청
> Build the app and run it in the simulator to check the onboarding flow.
# → 시뮬레이터 패널이 열리면서 앱 실행 화면이 보임
```

---

## 3. 🔒 Claude Security 플러그인 — 멀티에이전트 보안 스캔

코드베이스의 보안 취약점을 자동으로 스캔하는 플러그인이 출시됐어요.

> 🕵️ **비유로 설명하면**: 보안 전문가 팀이 내 코드를 여러 각도에서 동시에 검토하는 것처럼, **여러 AI 에이전트가 협력해서** 취약점을 찾고 독립적으로 검증까지 해줘요. 그냥 경보만 울리는 게 아니라 **패치까지 제안**해줘요.

**스캔 방식:**
1. 코드 아키텍처 매핑
2. 위협 모델 생성
3. 취약점 탐색
4. **독립 검증 에이전트가 모든 발견 사항 재검토**
5. 보고서 작성 → 패치 제안

```bash
# 플러그인 설치
/plugin install claude-security@claude-plugins-official

# 설치 후 활성화
/reload-plugins

# 스캔 시작
/claude-security
```

**결과물:**
- `CLAUDE-SECURITY-RESULTS.md` — 취약점 보고서
- `CLAUDE-SECURITY-RESULTS.sarif` — GitHub 코드 스캐닝 연동용
- `patches/F1.patch` 등 — 검토된 패치 파일

**알아두세요:**
- Dynamic Workflows 기능 필요 (Pro: `/config`에서 활성화)
- Python 3.9 이상 필요 (`python3 --version`으로 확인)
- 패치는 **자동 적용 안 됨** — 직접 `git apply`로 선택 적용

---

## W30 기타 개선 사항

| 기능 | 설명 |
|---|---|
| `/code-review` 백그라운드 실행 | 리뷰가 별도 컨텍스트 창에서 실행돼 대화 흐름 방해 없음 |
| `/verify`, `/deep-research` 수동 실행 | Claude가 자동으로 실행하지 않고 사용자가 직접 호출할 때만 작동 |
| 이모지 단축어 자동완성 | `:heart:` 입력 시 ❤️ 변환; `emojiCompletionEnabled`로 끄기 가능 |
| 동시 서브에이전트 최대 20개 | `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 조정 |
| Auto Mode 개선 | 위험한 `rm` 명령 등 권한 다이얼로그 대신 auto-mode classifier가 처리 |
| `sandbox.filesystem.disabled` | 파일시스템 격리만 끄고 네트워크 통제는 유지하는 새 샌드박스 설정 |

---

## 📚 관련 문서

- [Fast Mode 상세 설명](https://code.claude.com/docs/en/fast-mode) — 요금·옵션·사용법
- [Claude Security 플러그인 전체 가이드](https://code.claude.com/docs/en/claude-security) — 취약점 스캔 및 패치
- [iOS 시뮬레이터 통합](https://code.claude.com/docs/en/desktop-ios-simulator) — macOS Desktop 전용
