---
title: "[공] 주간 업데이트: 2026년 6월 29일 ~ 7월 3일 (Week 27)"
description: "Sonnet 5 기본 모델 전환, Chrome 정식 출시, 서브에이전트 백그라운드 기본 실행, Linux Desktop 베타, /radio"
tags: ["업데이트", "2026", "week27", "sonnet5", "chrome", "linux", "subagents", "radio", "자동생성"]
category: "next"
order: 14
lastUpdated: "2026-07-14"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 27 (2026-06-29 ~ 2026-07-03) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w27" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w27</a>
</div>

> 🚨 **이번 주는 대형 업데이트!** 모델 교체·Chrome 정식 출시·Linux 데스크톱까지 한 번에 쏟아졌어요.

## 이번 주 핵심 변경 (5개)

---

### 1️⃣ Claude Sonnet 5 — 기본 모델로 전환 🧠

**Sonnet 5**가 Pro, Team Standard, Enterprise 구독의 기본 모델이 됐어요. Opus 수준의 성능을 Sonnet 가격으로 쓸 수 있어요.

> 🍱 **비유**: 이전엔 "저가 요금제"와 "고가 요금제" 중 선택해야 했다면, 이제는 고가 품질을 기본 요금으로 주는 것과 같아요.

| 항목 | 내용 |
|---|---|
| 기본 모델 | claude-sonnet-5 |
| 컨텍스트 창 | **1M 토큰** (약 책 500권 분량) |
| 적응형 생각(Thinking) | 기본 켜짐 |
| API 가격 (프로모션) | **$2/$10 per MTok** (2026-08-31까지) |
| 최소 버전 | v2.1.197 이상 |

```
> /model claude-sonnet-5
```
또는 모델 선택기에서 직접 선택 가능.

<div class="note-circle">
○ 기존에 모델을 직접 설정했다면 자동 변경 안 됨 — 수동으로 업데이트하세요<br />
○ API 가격은 8월 31일까지 프로모션 가격 ($2/$10/MTok)
</div>

---

### 2️⃣ Claude in Chrome — 정식 출시 🌐

Chrome 확장 기능이 리서치 프리뷰를 졸업하고 **정식 출시**됐어요. 직접 Anthropic 플랜 사용자 모두 이용 가능해요.

> 🍱 **비유**: Claude Code가 드디어 브라우저 조수석에 탔어요. 개발한 앱을 Claude가 직접 브라우저로 열어서 클릭해보고, "여기가 이상한데요?"라고 피드백을 줄 수 있어요.

**가능한 작업:**
- 탭 열기, 페이지 클릭, 폼 입력
- 콘솔 로그 읽기
- **로그인 상태 공유** — 내가 로그인한 사이트에서 테스트 가능
- 직접 만든 앱과 외부 사이트 모두 탐색

---

### 3️⃣ 서브에이전트 — 이제 기본으로 백그라운드 실행 🤖

서브에이전트(보조 AI)가 돌아가는 동안 Claude가 멈추지 않고 **계속 다른 일을 하다가** 결과를 받아요.

> 🍱 **비유**: 이전엔 직원(서브에이전트)한테 심부름 보내고 돌아올 때까지 그냥 기다렸어요. 이제는 직원을 심부름 보내고, 나는 다른 일을 하다가 직원이 돌아오면 그때 결과를 받아요. 훨씬 효율적이에요.

| 방식 | 언제 |
|---|---|
| 백그라운드 (기본) | 서브에이전트 결과가 필요한 게 아닐 때 |
| 포그라운드 | Claude가 결과를 받고 다음 단계로 넘어가야 할 때 (자동 판단) |

- 스킬 frontmatter의 `background` 필드로 고정 가능
- 서브에이전트의 권한 요청은 메인 세션에 표시됨

---

### 4️⃣ Claude Desktop — Linux 베타 출시 🐧

Ubuntu/Debian에서 Claude 데스크톱 앱을 공식 지원해요! (베타)

> 🍱 **비유**: 이제 리눅스 PC에서도 맥북처럼 Claude Desktop을 설치할 수 있어요.

**지원 환경:**
- Ubuntu 22.04+ 또는 Debian 12+
- x86_64 또는 arm64 아키텍처

**apt 저장소로 간단 설치:**
```bash
# 저장소 키 추가
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

# 저장소 등록
echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" \
  | sudo tee /etc/apt/sources.list.d/claude-desktop.list

# 설치
sudo apt update && sudo apt install claude-desktop
```

**아직 미지원 (베타 한계):**
- Computer Use (앱/화면 제어) — Linux 미지원
- 음성 딕테이션 — CLI에서는 `/voice` 사용 가능
- Fedora/RHEL — Debian 계열만 지원

---

### 5️⃣ `/radio` — Claude FM 라디오 📻

코딩하면서 들을 수 있는 로파이 라디오가 생겼어요!

```
> /radio
```

- 브라우저에서 스트림을 열어요
- 브라우저가 없는 환경에선 스트림 URL을 출력해요

> ⚠️ Amazon Bedrock, Google Cloud, Microsoft Foundry 환경에선 사용 불가

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| **Artifacts 정식 출시** | 이제 **Pro·Max 플랜 포함** (Team·Enterprise에 이어) |
| 조직 기본 모델 설정 | 관리자가 콘솔에서 조직 기본 모델 지정 가능 (`/model`에서 "Org default"로 표시) |
| 스킬 중첩 호출 | `/skill-a /skill-b do XYZ`처럼 최대 5개 스킬 동시 로드 |
| 권한 모드 이름 변경 | "default" → **"Manual"** (더 직관적) |
| `/dataviz` 스킬 신규 | 차트·대시보드 디자인 가이드, 색상 팔레트 검증기 포함 |
| Explore 에이전트 모델 | Haiku → 메인 세션 모델 상속 (최대 Opus) |
| 스트림 감시자 기본 켜짐 | 5분간 이벤트 없으면 자동 재시도 |
| 배경 에이전트 자동 PR | 작업 완료 시 commit·push·draft PR 자동 생성 |

<div class="note-circle">
○ Week 27 범위: Claude Code v2.1.195 ~ v2.1.201<br />
○ Sonnet 5 API 가격 ($2/$10) 프로모션은 2026년 8월 31일까지
</div>
