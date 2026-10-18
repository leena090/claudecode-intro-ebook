---
title: "[공] Projects·자체 호스팅·Auto 모드 기본 전환 — 2026년 8~9월 주요 변경"
description: "관련 코딩 세션을 묶어 관리하는 Projects 기능, 자체 인프라에서 실행하는 Self-hosted, 이제 기본이 된 Auto 모드까지 한 번에"
tags: ["자동생성", "Projects", "자체호스팅", "AutoMode", "신기능", "2026"]
category: "advanced"
order: 27
lastUpdated: "2026-10-18"
---

<div class="note-star">
★ <strong>[공]</strong> Projects 기능: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 마케팅 페이지 (최신 기능 하이라이트, 2026-10-18 기준)
<br />★ <strong>[공]</strong> Self-hosted environments: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 블로그 안내 (Aug 7, 2026)
<br />★ <strong>[공]</strong> Auto mode by default: <a href="https://claude.com/claude-code">claude.com/claude-code</a> 블로그 안내 (Sep 17, 2026)
<br />★ 상세 사양은 <a href="https://code.claude.com/docs">공식 문서</a> 최신판 확인 권장
</div>

## 세 가지 변경 한눈에 보기

| 기능 | 시점 | 한 줄 요약 |
|---|---|---|
| **Auto mode 기본 전환** | 2026-09-17 | Pro·Max·Team 플랜에서 Auto가 기본값으로 변경 |
| **Self-hosted environments** | 2026-08-07 | 내 서버에서 Claude Code 세션 실행 (퍼블릭 베타) |
| **Projects** | 최신 | 관련 세션들을 그룹으로 묶어 여러 에이전트 감독 |

---

## 1. Auto 모드가 기본값으로

### 무엇이 바뀌었나요?

2026년 9월 17일부터 **Pro, Max, Team 플랜**에서 Auto 모드가 **기본값**으로 전환됐어요. 이전에는 수동으로 켜야 했는데, 이제는 별도 설정 없이도 Claude가 스스로 더 오래 작업할 수 있게 됩니다.

> 🏃 **비유로 설명하면**: 이전의 Claude Code는 "시키는 것만 하는 직원"이었다면, Auto 모드 기본 전환 이후는 **"할 일을 스스로 찾아가면서 하되, 위험한 명령은 먼저 묻는 직원"**이에요.

### Auto 모드의 핵심

- **더 길게 작업**: 중간에 멈추지 않고 복잡한 작업을 이어서 진행
- **안전 classifier 포함**: 위험한 명령(파일 삭제, 외부 요청 등)은 여전히 확인 요청
- **수동으로 끄기**: 원한다면 `--no-auto` 플래그로 이전 동작 유지 가능

```bash
# Auto 모드 상태 확인
/config auto

# Auto 모드 수동 비활성화 (이전처럼 쓰고 싶다면)
claude --no-auto
```

<div class="note-star">
★ <strong>Enterprise 플랜</strong>에서는 관리자가 조직 전체 Auto 모드 정책을 설정할 수 있어요.
</div>

---

## 2. Self-hosted environments (자체 호스팅)

### 무엇인가요?

**Self-hosted environments**는 Claude Code 세션을 **내 회사 인프라(서버) 위에서 직접 실행**하는 기능이에요. 2026년 8월 7일 퍼블릭 베타로 공개됐습니다.

> 🏠 **비유로 설명하면**: 기존 Claude Code가 "카페에서 노트북으로 일하는 것"이라면, Self-hosted는 **"우리 회사 보안 사무실 안에서 일하는 것"**이에요. 데이터가 외부로 나가지 않습니다.

### 어떤 상황에 필요한가요?

| 상황 | 설명 |
|---|---|
| 보안 규정 | 코드·데이터가 외부 클라우드에 올라가면 안 되는 환경 |
| 내부 서비스 접근 | 외부에서 접근 불가한 내부 API·데이터베이스와 연동 필요 |
| 컴플라이언스 | 금융·의료·공공기관 등 데이터 위치 규정이 엄격한 업종 |

### 퍼블릭 베타 이용 방법

공식 문서에서 Self-hosted environments 설정 가이드를 확인하세요:

```
https://code.claude.com/docs/en/
```

<div class="note-star">
★ <strong>퍼블릭 베타</strong>: 아직 모든 플랜에서 즉시 사용 가능한 상태는 아닐 수 있어요. Anthropic 공식 문서에서 현재 지원 범위를 확인하세요.
</div>

---

## 3. Projects 기능

### 무엇인가요?

**Projects**는 관련된 코딩 세션들을 **그룹으로 묶어 관리**하고, 여러 Claude 에이전트를 **한 화면에서 감독**할 수 있는 기능이에요. Claude Code Desktop에서 사용할 수 있습니다.

> 📁 **비유로 설명하면**: 이전에는 각 Claude 대화가 독립된 "포스트잇"이었다면, Projects는 **"프로젝트 폴더에 관련 포스트잇을 모아두는 것"**이에요.

### 주요 활용 시나리오

```
프로젝트: "쇼핑몰 리뉴얼"
├── 세션 1: 결제 버그 수정 (완료)
├── 세션 2: 모바일 레이아웃 개선 (진행 중)
├── 세션 3: 테스트 코드 작성 (대기 중)
└── 세션 4: 배포 스크립트 (예정)
```

이렇게 관련 작업을 한 프로젝트 아래 묶으면:
- 진행 상황을 한눈에 확인
- 여러 에이전트가 병렬 실행 중일 때 어디서 무엇을 하는지 파악
- 맥락(컨텍스트)을 공유해 더 일관된 작업 가능

### 사용 방법

**Claude Code Desktop**에서:
1. 사이드바에서 **"New Project"** 선택
2. 프로젝트 이름 설정 후 관련 세션 추가
3. 프로젝트 뷰에서 모든 세션 상태 감독

<div class="note-star">
★ Projects 기능은 <strong>Claude Code Desktop App</strong>에서 사용 가능합니다. 터미널 단독 사용 시에는 아직 지원하지 않을 수 있어요.
</div>

---

## 관련 문서

- [Agent View — 모든 세션 한 화면에서](./agent-view.md) — 멀티 에이전트 감독
- [Dynamic Workflows](./dynamic-workflows.md) — 대규모 병렬 서브에이전트
- [Auto mode 설정](./auto-mode-config.md) — Auto 모드 세부 설정
- [Remote Control](./remote-control.md) — 모바일·브라우저에서 세션 이어가기
