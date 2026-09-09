---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7~8월)"
description: "Opus 5 기본 모델 전환, 세션 간 메시지, Auto 모드 기본 설정, /design 스킬 등 2026년 7~8월 5주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "Opus5", "auto-mode", "design", "GitLab"]
category: "next"
order: 17
lastUpdated: "2026-09-09"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W34) 내용을 한국어로 정리한 것입니다.
<br />★ 2026-09-09 기준 최신 업데이트(7월 말~8월)를 한 곳에 모았습니다.
</div>

## 한 눈에 보는 4주 요약

> 📝 **참고**: W31은 공식 What's New에 게시되지 않았습니다 (변경 없음).

| 주차 | 핵심 한 줄 |
|---|---|
| **W30** | Opus 5 기본 모델 전환 + iOS 시뮬레이터 + 보안 플러그인 |
| **W32** | 세션끼리 대화 + 셀프호스팅 환경 + Auto 모드 기본값 |
| **W33** | 데스크톱 자동 재개 + Fork 모드 기본값 + GitLab 지원 |
| **W34** | /design 스킬 + Concise 출력 + 폰으로 세션 시작 |

---

## 🚀 W30 — Opus 5 기본 전환 & 보안 강화

> 📅 2026년 7월 말

### ① Claude Opus 5가 기본 Opus 모델이 됐어요

마치 스마트폰 운영체제가 자동으로 업그레이드되듯, Claude Code의 Opus 기본 모델이 **Opus 4.8 → Opus 5**로 전환됐어요.

- 별도 설정 없이 자동 적용
- Fast Mode도 Opus 5 기반으로 변경
- 자세한 Opus 5 내용은 👉 [Claude Opus 5 & 신모델 정리](claude-opus5-models.md) 참고

### ② Claude Code 데스크톱에 iOS 시뮬레이터 화면이 생겼어요

**iOS 시뮬레이터**(아이폰 앱 개발용 가상 기기)가 Claude Code Desktop의 옆 창에 **자동으로 열려요**.

```
Claude가 iOS 앱을 빌드/실행/점검할 때
→ 데스크톱 옆 창에서 실제 폰 화면처럼 바로 확인!
```

| 이전 | 지금 |
|---|---|
| 별도 Xcode 시뮬레이터 창 수동 열기 | Claude Code Desktop 오른쪽 창에서 자동 확인 |
| 화면 전환 필요 | 한 화면에서 동시 작업 |

🍎 **iOS 앱 개발자**라면 특히 유용해요. 아직 macOS 전용입니다.

### ③ Claude Security 플러그인 — 보안 취약점 스캐너

**Claude Security 플러그인**이 출시됐어요. 코드에서 보안 구멍을 찾아 직접 패치까지 제안해줘요.

```bash
# 플러그인 설치 후
/plugin install claude-security

# 또는 코드 리뷰와 함께 사용
/code-review  # 보안 문제도 함께 감지
```

> 🔒 **비유**: 집 청소부가 청소하면서 잠금장치가 고장난 창문도 발견해서 알려주는 것과 같아요.

---

## 💬 W32 — 세션 대화 & 자동화 강화

> 📅 2026년 8월 초

### ① Claude Code 세션들이 서로 대화할 수 있어요

여러 Claude Code 세션을 동시에 돌릴 때, 이제 **세션끼리 메시지를 주고받을 수 있어요**.

```
세션 A (프론트엔드 담당)
  → 세션 B (백엔드 담당)에게 "API 스펙 바꿨어요" 메시지 전송
  → 세션 B가 자동으로 맞춰서 수정
```

- 같은 컴퓨터의 다른 세션
- 다른 컴퓨터의 세션 (원격 연결)
- 웹 세션

공식 문서: [Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging)

> 🏭 **비유**: 공장에서 각 작업실이 인터폰으로 연락하듯, AI 세션들이 서로 소통하는 거예요.

### ② 셀프호스팅 환경 (Self-hosted Environments)

회사 보안 규정상 클라우드를 사용하지 못하는 경우, **자체 서버에서 Claude Code 클라우드 세션**을 운영할 수 있게 됐어요.

> 🏢 **기업 사용자** 대상 기능. 일반 개인 사용자에게는 해당 없음.

### ③ Auto 모드가 이제 기본 권한 모드예요

Claude Code를 처음 실행하면 이제 **Auto 모드**(자동 안전 분류기)가 기본으로 켜져 있어요.

| 이전 기본값 | 새 기본값 |
|---|---|
| Accept Edits 모드 | **Auto 모드** |

- Auto 모드: Claude가 안전하다고 판단하면 자동 실행, 불확실하면 확인 요청
- Shift+Tab으로 모드 전환 가능

> 🚦 **비유**: 자동변속기가 기본으로 달린 자동차처럼, 이제 Claude가 스스로 판단해서 실행해요.

---

## 🔄 W33 — 편의성 & GitLab 지원

> 📅 2026년 8월 중순

### ① 데스크톱이 사용 한도 초기화 후 자동으로 재개돼요

사용량 한도에 걸려서 Claude Code가 멈췄다가 한도가 리셋되면, **데스크톱 앱이 자동으로 이어서 작업**을 재개해요.

```
사용 한도 도달 → 자동 대기
→ 한도 리셋 (매시간 또는 매일)
→ Claude Code 자동 재개 ✨
```

> ⏰ **비유**: 프린터 잉크가 없어서 멈췄다가, 잉크를 갈면 자동으로 인쇄를 이어서 하는 것처럼요.

### ② Fork 모드가 기본으로 켜졌어요

**Fork 모드**란, 여러 Claude Code 세션이 각자 독립된 Git 작업 공간(워크트리, Worktree)에서 실행되는 방식이에요.

```
이전: 여러 세션 → 같은 코드 폴더 → 충돌 위험 ⚠️
이제: 여러 세션 → 각자 독립 공간 → 충돌 없음 ✅
```

별도 설정 없이 기본값으로 적용됩니다.

### ③ GitLab 머지 리퀘스트 & 마켓플레이스 지원

지금까지 GitHub 위주였던 Claude Code가 이제 **GitLab**도 지원해요:

- GitLab CI/CD 파이프라인 연동
- Merge Request (MR) 자동 생성·검토
- GitLab 기반 플러그인 마켓플레이스

> 🗂️ **GitLab 사용자**(특히 기업 내부 개발팀)라면 반가운 소식이에요!

---

## 🎨 W34 — 디자인 & 출력 스타일

> 📅 2026년 8월 말

### ① `/design` 스킬 — UI 목업을 바로 만들어요

새 `/design` 슬래시 커맨드로 **편집 가능한 UI 목업**을 아티팩트(Artifact)로 만들 수 있어요.

```bash
/design  # 실행 후 원하는 UI 설명
# → 인터랙티브 디자인 캔버스가 아티팩트로 발행됨
# → 클릭으로 색상·글꼴·배치 편집 가능
```

> 🖌️ **비유**: 종이에 스케치한 화면 디자인을 AI가 바로 컴퓨터 화면으로 옮겨주는 것 같아요.

### ② Concise 출력 스타일 설정

Claude Code 응답이 너무 길다고 느끼시나요? 이제 **Concise(간결한) 출력 스타일**을 설정할 수 있어요.

```bash
/config  # 설정 메뉴에서 Output Style → Concise 선택
```

| 스타일 | 특징 |
|---|---|
| 기본 | 설명 포함, 상세한 응답 |
| **Concise** | 핵심만, 짧고 빠르게 |

### ③ 폰에서 내 컴퓨터의 Claude Code 세션을 시작할 수 있어요

Claude 모바일 앱에서 **내 컴퓨터에서 실행 중인 Claude Code 세션을 시작·제어**할 수 있어요.

```
[내 스마트폰] → [Claude 앱]
  → 내 컴퓨터 연결
  → 코딩 작업 지시
  → 결과 확인
```

> 📱 **Remote Control** 기능의 확장이에요. 외출 중에도 집 컴퓨터의 Claude Code를 원격으로 조작할 수 있어요.

---

## 📋 전체 변경 한눈에 보기

| 분류 | 기능 | 주차 |
|---|---|---|
| 모델 | Opus 5 기본 전환 | W30 |
| iOS 개발 | iOS 시뮬레이터 데스크톱 창 | W30 |
| 보안 | Claude Security 플러그인 | W30 |
| 자동화 | 세션 간 메시지(Cross-session messaging) | W32 |
| 기업 | 셀프호스팅 환경 | W32 |
| 권한 | Auto 모드 기본값 | W32 |
| 편의 | 데스크톱 자동 재개 | W33 |
| 병렬 | Fork 모드 기본값 | W33 |
| 플랫폼 | GitLab 지원 | W33 |
| 디자인 | /design 스킬 | W34 |
| 출력 | Concise 스타일 | W34 |
| 모바일 | 폰에서 세션 시작 | W34 |

---

## 🔖 관련 공식 문서

- [What's New 전체 목록](https://code.claude.com/docs/en/whats-new/index)
- [W30](https://code.claude.com/docs/en/whats-new/2026-w30) · [W32](https://code.claude.com/docs/en/whats-new/2026-w32) · [W33](https://code.claude.com/docs/en/whats-new/2026-w33) · [W34](https://code.claude.com/docs/en/whats-new/2026-w34)
- [Cross-session messaging](https://code.claude.com/docs/en/cross-session-messaging)
- [Claude Security 플러그인](https://code.claude.com/docs/en/claude-security)
- [Artifacts (아티팩트)](https://code.claude.com/docs/en/artifacts)
