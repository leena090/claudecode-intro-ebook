---
title: "[공] 주간 업데이트: 2026년 6월 29일 ~ 7월 3일 (Week 27)"
description: "Claude Sonnet 5가 기본 모델로 교체! Linux 데스크톱 베타, Chrome 정식 출시, 서브에이전트 백그라운드 기본 실행, /radio"
tags: ["업데이트", "2026", "week27", "sonnet5", "linux-desktop", "chrome", "서브에이전트", "radio", "자동생성"]
category: "next"
order: 17
lastUpdated: "2026-07-13"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 27 (2026-06-29 ~ 2026-07-03) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w27" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w27</a><br />
⭐ <strong>이번 주 가장 큰 변화: Claude Sonnet 5가 기본 모델이 됐어요!</strong>
</div>

## 이번 주 핵심 변경 (5개)

---

### 1️⃣ Claude Sonnet 5 — 기본 모델 교체! 🌟

**Pro, Team Standard, Enterprise** 플랜의 **기본 모델이 Sonnet 5로 바뀌었어요.**

> 🍱 **비유**: 지금까지 회사 기본 업무 차량이 "소나타"였다면, 이제 "그랜저"로 업그레이드된 거예요. 같은 가격에 더 좋은 차를 타게 됐어요.

**Sonnet 5 핵심 스펙:**

| 항목 | 내용 |
|---|---|
| 컨텍스트 창 | **100만 토큰** (약 75만 단어 — 두꺼운 책 3권 분량) |
| 특기 | 코딩·도구 사용·에이전트 작업에서 최상급 성능 |
| Adaptive Thinking | 기본 활성화 (더 깊이 생각하는 모드) |
| API 프로모션 가격 | **$2 / $10** per 백만 토큰 (2026년 8월 31일까지) |

```bash
# 버전 확인 및 업데이트
claude update  # v2.1.197 이상 필요

# Sonnet 5로 모델 변경
/model claude-sonnet-5
```

**어떤 플랜에 해당하나요?**

| 플랜 | 기본 모델 변경 여부 |
|---|---|
| Pro | ✅ Sonnet 5로 교체 |
| Team Standard | ✅ Sonnet 5로 교체 |
| Enterprise | ✅ Sonnet 5로 교체 |
| Max 5x / 20x | ⬜ 별도 확인 필요 |
| API 사용자 | API 요청 시 모델 직접 지정 가능 |

<div class="note-circle">
○ v2.1.197 이상에서 사용 가능해요<br />
○ API 프로모션 가격 $2/$10은 2026년 8월 31일까지 적용돼요<br />
○ 이전 모델을 쓰고 싶다면 <code>/model</code>로 직접 선택하세요
</div>

---

### 2️⃣ Claude Desktop — 리눅스 베타 출시! 🐧

드디어 **리눅스에서도 Claude Desktop 앱**을 쓸 수 있어요!

**지원 환경:**

| 항목 | 조건 |
|---|---|
| 배포판 | Ubuntu 22.04+ 또는 Debian 12+ |
| 아키텍처 | x86_64, arm64 |
| 기능 | Chat·Cowork·Code 탭 모두 사용 가능 |

```bash
# apt 저장소 등록
sudo curl -fsSLo /usr/share/keyrings/claude-desktop-archive-keyring.asc \
  https://downloads.claude.ai/claude-desktop/key.asc

echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/claude-desktop-archive-keyring.asc] \
  https://downloads.claude.ai/claude-desktop/apt/stable stable main" | \
  sudo tee /etc/apt/sources.list.d/claude-desktop.list

# 설치
sudo apt update && sudo apt install claude-desktop
```

> 🍱 **비유**: 지금까지 "맥·윈도우 전용" 고급 레스토랑에 리눅스 사용자는 출입을 못했는데, 이제 문이 열렸어요. 같은 메뉴를 똑같이 즐길 수 있어요.

**아직 베타라 없는 것들:**
- Computer Use (앱·화면 제어)
- 마이크 받아쓰기 (CLI에서는 `/voice` 사용 가능)
- Fedora·RHEL 지원 (데비안 계열만 지원)

<div class="note-circle">
○ 자세한 설치 방법: <code>code.claude.com/docs/en/desktop-linux</code><br />
○ apt 저장소 등록 후 <code>sudo apt upgrade</code>로 자동 업데이트 가능
</div>

---

### 3️⃣ Chrome 확장 — 리서치 프리뷰 졸업! 🎓

**Claude in Chrome이 정식 출시**됐어요. (직접 Anthropic 플랜 사용자 전체)

Claude Code가 Chrome 확장을 통해 브라우저를 직접 조작할 수 있어요:

| 기능 | 설명 |
|---|---|
| 탭 열기 | 특정 URL을 자동으로 열어요 |
| 페이지 클릭 | 버튼·링크를 대신 클릭해요 |
| 폼 입력 | 양식을 자동으로 채워요 |
| 콘솔 읽기 | 브라우저 개발자 콘솔 로그를 확인해요 |
| 로그인 공유 | 내 로그인 상태를 그대로 사용해요 |

> 🍱 **비유**: Claude에게 "네이버에서 오늘 뉴스 3개 가져와서 정리해줘"라고 하면, Claude가 직접 브라우저를 열고 뉴스를 읽어오는 것과 같아요.

<div class="note-circle">
○ 직접 Anthropic 플랜(Pro·Max·Team·Enterprise) 사용자에게 제공<br />
○ Amazon Bedrock·Google Cloud·Microsoft Foundry 경유 시 미지원
</div>

---

### 4️⃣ 서브에이전트 백그라운드 기본 실행 🔄

이제 Claude가 서브에이전트(보조 AI)를 실행할 때 **기본적으로 백그라운드에서 처리**해요.

> 🍱 **비유**: 예전에는 택배 배달원(서브에이전트)이 배달 완료할 때까지 문 앞에서 기다렸다면, 이제는 다른 일을 하다가 배달 완료 알림이 오면 확인하는 방식이에요.

**변화 요약:**

| 항목 | 이전 | 신규 |
|---|---|---|
| 기본 실행 방식 | 포그라운드 (완료까지 대기) | **백그라운드** (동시 작업) |
| 권한 요청 처리 | 서브에이전트 자체에서 처리 | **메인 세션에 팝업으로 표시** |
| 강제 지정 방법 | - | 에이전트 정의에 `background:` 필드 |

```yaml
# 에이전트를 항상 포그라운드로 강제 실행
---
background: false
---
```

<div class="note-circle">
○ v2.1.198 이상에서 사용 가능해요<br />
○ 결과가 필요해서 기다려야 하는 경우엔 자동으로 포그라운드 실행해요
</div>

---

### 5️⃣ `/radio` — 코딩할 때 틀어놓는 음악 🎵

Claude FM이 개국했어요! `/radio`를 입력하면 **lo-fi 음악 스트림**이 브라우저에서 열려요.

```text
> /radio
```

> 🍱 **비유**: 카페에서 코딩할 때 BGM이 흘러나오는 것처럼, 이제 Claude Code 안에서 음악을 틀어놓고 작업할 수 있어요.

<div class="note-circle">
○ 브라우저가 없는 환경에서는 스트림 URL을 텍스트로 출력해요<br />
○ Amazon Bedrock·Google Cloud·Microsoft Foundry 경유 시 미지원
</div>

---

### 기타 개선사항

| 항목 | 내용 |
|---|---|
| **Artifacts 전체 플랜 확대** | 베타(Team/Enterprise) → **Pro·Max 포함 전체** 정식 출시 |
| 조직 기본 모델 설정 | 관리자가 콘솔에서 조직 기본 모델 지정 가능 (`/model`에서 "Org default"로 표시) |
| 스킬 중첩 로드 | `/skill-a /skill-b 작업` 형식으로 최대 5개 스킬 동시 로드 |
| `AskUserQuestion` 자동 진행 기본 해제 | 사용자 응답 대기 대화상자가 더 이상 자동으로 진행하지 않음 |
| 권한 모드 이름 변경 | "default" → **"Manual"** (CLI·VS Code·JetBrains 전체) |
| `/dataviz` 스킬 추가 | 차트·대시보드 디자인 가이드 스킬 |
| 백그라운드 에이전트 자동 PR | 완료 후 자동으로 커밋·푸시·초안 PR 생성 |

<div class="note-circle">
○ Week 27 범위: Claude Code v2.1.195 ~ v2.1.201<br />
○ 날짜 범위: 2026년 6월 29일 ~ 7월 3일<br />
○ "default → Manual" 이름 변경은 기능 변화 없이 이름만 바뀐 거예요
</div>
