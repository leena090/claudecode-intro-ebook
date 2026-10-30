---
title: "[공] What's New W30~W37 — 2026년 7~9월 주요 업데이트 모음"
description: "2026년 7월 말~9월 사이 공개된 Claude Code 주요 변경 사항 총정리 (W30~W37)"
tags: ["자동생성", "whats-new", "업데이트", "2026", "자동모드", "셀프호스팅", "Projects"]
category: "next"
order: 18
lastUpdated: "2026-10-30"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a><br />
★ W30~W37: 2026년 7월 28일 ~ 9월 14일 (추정)
</div>

## 이 기간에 무슨 일이 있었나요?

2026년 7월 말부터 9월 중순까지 8주간, Claude Code에 굵직한 기능들이 대거 추가됐습니다. 마케팅 페이지 **"최신 기능 하이라이트"** 에 새로 올라온 항목들을 중심으로 정리합니다.

> 📦 **비유로 설명하면**: 식당이 여름 방학 동안 리모델링을 하고 새 메뉴를 잔뜩 추가한 것과 같아요. 9월에 다시 오니 메뉴판이 완전히 바뀌어 있는 느낌!

---

## 주요 신기능 4선

### 1. 🏠 셀프 호스팅 환경 (Self-hosted Environments) — 공개 베타

> **마케팅 페이지 하이라이트 (Aug 6, 2026)**

**Claude Code 세션을 여러분의 인프라에서 직접 실행**할 수 있게 됐습니다.

- 내부 네트워크 안쪽에서, 내부 서비스 옆에서 실행
- 기업 보안 요건에 맞게 커스터마이즈 가능
- 공개 베타 단계 (현재 Team·Enterprise 대상)

→ 자세한 내용은 [셀프 호스팅 환경 소개](/docs/advanced/self-hosted-environments) 참고

### 2. 🤖 Auto Mode 기본값으로 전환 — Pro·Max·Team 적용

> **마케팅 페이지 하이라이트 (Aug 7, 2026)**

이전에는 선택 사항이던 Auto Mode(자동 모드)가 **이제 기본값**이 됐습니다.

| 항목 | 내용 |
|------|------|
| 적용 플랜 | Pro, Max, Team |
| 특징 | 더 오래 작업 가능 + 위험 명령 감지 |
| 변경 사항 | 기본적으로 자동 실행, 필요 시 수동 전환 |

> 💡 **의미**: Claude가 여러 단계를 알아서 처리하되, 파일 삭제·민감한 명령 전에는 여전히 확인을 요청합니다.

### 3. 📁 Projects — 여러 에이전트 세션 묶기

> **마케팅 페이지 하이라이트 (Sep 17, 2026)**

**관련된 코딩 세션들을 한 Project에 모아서 동시에 감독**할 수 있는 기능입니다.

- Claude Code Desktop에서 사용 가능
- 여러 에이전트가 같은 목표를 향해 병렬로 작업
- 진행 상황을 한 화면에서 모니터링

→ 자세한 내용은 [Projects 기능 소개](/docs/advanced/claude-projects) 참고

### 4. 🔍 Code Review — Team·Enterprise 정식 출시(GA)

> **마케팅 페이지 하이라이트 (Oct 15, 2026)**

AI 에이전트 기반 코드 리뷰가 **Team·Enterprise 플랜에서 정식 출시**됐습니다.

- PR(풀 리퀘스트)에 자동으로 코드 리뷰 코멘트
- 버그, 보안 취약점, 스타일 문제 감지
- GitHub·GitLab 연동 지원

→ 자세한 내용은 [Code Review 정식 출시](/docs/next/code-review-ga) 참고

---

## 그 외 눈에 띄는 변경

| 항목 | 내용 | 시기 |
|------|------|------|
| 공식 docs에 `settings-reference` 추가 | settings.json 전체 필드 레퍼런스 공식화 | W30-37 |
| `cross-session-messaging` 문서 신설 | 세션 간 메시지 전달 공식 지원 | W30-37 |
| `desktop-ios-simulator` 문서 추가 | iOS 시뮬레이터 연동 가이드 | W30-37 |
| `cloud-environments` 문서 추가 | 클라우드 환경 실행 가이드 | W30-37 |
| `github-actions-cloud-providers` 추가 | GitHub Actions + 클라우드 조합 | W30-37 |
| Plugin docs 구조 대폭 확장 | 단일 페이지 → 서브섹션 15개 이상 | W30-37 |

> 📌 **공식 발표 기준**: W31 what's-new 페이지는 공식 docs에 게시되지 않았습니다 (공식 llms.txt 미포함 확인).

---

## 이 기간 핵심 한 줄 요약

> **"자동화 범위가 넓어졌고 (Auto Mode 기본화, Projects), 기업 환경 지원이 강화됐습니다 (Self-hosted, Code Review GA)."**
