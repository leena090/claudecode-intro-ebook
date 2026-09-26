---
title: "[공] Claude Code 주간 업데이트 — W30~W37 (2026년 7~9월)"
description: "Claude Opus 5 등장, iOS 시뮬레이터, Claude Security, Fable 5.1, 백그라운드 컴퓨터 사용, /diff 패널, 플러그인 테스트까지 — 7~9월 두 달간 쏟아진 새 기능 정리"
tags: ["자동생성", "whats-new", "주간업데이트", "W30", "W36", "W37", "Opus5", "Fable5.1"]
category: "next"
order: 18
lastUpdated: "2026-09-26"
---

<div class="note-star">
★ <strong>[공]</strong> 원본: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new/index</a>
<br />★ 이 문서는 W30(Jul 20)~W37(Sep 11) 중 입문자에게 유용한 주요 기능만 추려 정리했어요
</div>

## 한 눈에 보는 W30~W37 타임라인

| 주차 | 날짜 | 주요 기능 |
|---|---|---|
| W30 | Jul 20–24 | Opus 5 기본 모델, iOS 시뮬레이터, Claude Security 플러그인 |
| W31–W35 | Jul–Aug | Auto mode 강화, 엔터프라이즈 기능 다수 |
| W36 | Aug 31–Sep 4 | Fable 5.1, 백그라운드 컴퓨터 사용, /diff 패널, /skill-doctor |
| W37 | Sep 7–11 | claude plugin eval, 데스크톱 창 분리 |

---

## W30 (July 20–24): Claude Opus 5 등장

### Claude Opus 5 — 새 기본 Opus 모델

**Claude Opus 5** (`claude-opus-5`)가 출시됐어요. Max, Team Premium, Enterprise 플랜 및 Anthropic API의 기본 Opus 모델이 됐어요.

| 항목 | 내용 |
|---|---|
| **컨텍스트** | 1M 토큰 (Anthropic API·Max·Team·Enterprise) |
| **Fast Mode 연동** | Opus 5 기반, $10/$50 per MTok |
| **전환 명령** | `/model claude-opus-5` |

> ⚠️ 이후 Opus 5.5 출시(Sep 22)로 Fast Mode는 Opus 5.5 기반 $8/$40으로 변경됐어요

### iOS 시뮬레이터 패널 (Desktop · macOS)

Claude Code Desktop(macOS)에서 **iOS 앱을 직접 시뮬레이터로 확인**할 수 있게 됐어요.

```
Claude가 앱 빌드 → 시뮬레이터 실행 → 실시간 화면 스트리밍
```

> 🍱 **비유**: "클로드가 코드 수정하고 직접 스마트폰 화면에서 결과를 확인해주는 것"

- Pro · Max · Team 공개 베타
- Xcode + iOS 플랫폼 설치 필요
- Desktop v1.24012.0 이상

### Claude Security 플러그인

코드 취약점을 자동으로 스캔해주는 **Claude Security 플러그인**이 출시됐어요.

```bash
# 플러그인 설치
/plugin install claude-security@claude-plugins-official

# 리로드 후 스캔 시작
/reload-plugins
/claude-security
```

전체 저장소 스캔, 브랜치 diff, PR, 특정 커밋 스캔 모두 가능해요.

---

## W36 (Aug 31 – Sep 4): Fable 5.1, 백그라운드 컴퓨터 사용

### Claude Fable 5.1 — 최상위 모델 업그레이드

```bash
/model fable  # → 자동으로 Fable 5.1 선택
```

`fable` 별칭이 이제 Fable 5.1을 가리켜요. 1M 토큰 컨텍스트 윈도우 지원.

### 백그라운드 컴퓨터 사용 (macOS Desktop)

Desktop 앱에서 클로드가 **내가 다른 일을 하는 동안에도** 앱을 조작할 수 있게 됐어요.

> 🍱 **비유**: "내가 다른 서류 작업 하는 동안, 옆에 앉은 클로드가 내 컴퓨터 화면에서 작업을 처리해주는 것"

- Pro · Max 공개 베타
- macOS 전용

### /diff 패널 — 라이브 변경 사항 보기

전체화면 모드에서 `/diff` 명령으로 **실시간 파일 변경 패널**이 열려요.

```bash
/diff   # 패널 열기/닫기 토글
```

- 수정된 파일 목록 + 추가/삭제 라인 수 표시
- 클로드가 파일 수정할 때마다 자동 갱신
- 패널에서 특정 라인 선택 → 다음 프롬프트에 첨부 가능

### /skill-doctor — 미사용 스킬 찾기

스킬이 많아지면 매 대화마다 컨텍스트를 잡아먹어요. `/skill-doctor`로 어떤 스킬이 얼마나 쓰이는지 확인하세요.

```bash
/skill-doctor   # Stats 탭에서 비용·사용 빈도 확인
```

---

## W37 (Sep 7–11): 플러그인 테스트, 창 분리

### claude plugin eval — 플러그인 테스트 자동화

플러그인 개발자를 위한 **자동화 테스트 도구**예요.

```bash
# 테스트 케이스 초안 생성
claude plugin eval init

# 테스트 실행 (점수 표 출력)
claude plugin eval .
```

결과는 터미널 테이블 + `evals/results/report.html`로 저장돼요. 플러그인 있을 때와 없을 때의 성능 차이를 측정해줘요.

### Desktop 패널 창 분리 (Pop Out)

Desktop 앱에서 **패널을 별도 창으로 뺄 수 있어요**.

> 🍱 **비유**: "모니터 두 개 쓰듯이, diff 화면은 오른쪽 모니터, 클로드 대화는 왼쪽 모니터에 분리해서 사용하는 것"

- diff 패널, 터미널 패널 등을 독립 창으로 분리
- 다시 도킹(dock)도 가능

---

## 기타 눈여겨볼 변경사항

### 자동 모드 기본값 변경 (Sep 17, 2026)

Pro · Max · Team 플랜에서 **Auto Mode가 이제 기본값**이 됐어요.

```
이전: Manual mode가 기본
이후: Auto mode가 기본 (위험 명령은 여전히 확인 요청)
```

더 오랫동안 자율적으로 작업하되, 위험한 명령만 묻고 넘어가는 방식이에요.

### 셀프 호스팅 환경 공개 베타 (Aug 7, 2026)

Team · Enterprise에서 **내 인프라에서 클라우드 세션을 실행**할 수 있게 됐어요. 회사 내부 네트워크 접근, 커스텀 도구, 컴플라이언스 요구사항이 있는 팀을 위한 기능이에요.

→ 자세한 내용은 **[셀프 호스팅 환경 가이드](/docs/codeweb/self-hosted-environments)** 참고

### 기타 소소한 개선들

| 기능 | 내용 |
|---|---|
| 이모지 자동완성 | `:heart:` 입력하면 ❤️ 자동 변환 |
| 최대 동시 서브에이전트 | 기본 20개 (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 설정 가능) |
| WebFetch 타임아웃 | 5분 후 자동 실패 (기존: 무한 대기) |
| VS Code 에이전트 맵 | 에이전트 수 클릭 → 서브에이전트 목록 + 중단 가능 |
| /cost 프롬프트 캐시 통계 | 캐시 적중률, 캐시 미스 원인 표시 |
| 모델별 effort 저장 | 모델마다 다른 effort 레벨 저장 가능 |
