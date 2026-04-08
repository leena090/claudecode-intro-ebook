---
title: "전체 슬래시 커맨드 목록"
description: "Claude Code의 모든 슬래시 명령어 완벽 레퍼런스 (2026-04-09 최신화)"
category: "reference"
order: 1
tags: ["레퍼런스", "명령어", "전체목록"]
lastUpdated: "2026-04-09"
---

## 📋 전체 슬래시 커맨드 목록

Claude Code에서 사용 가능한 모든 슬래시(/) 명령어를 정렬하여 표시합니다. 원하는 기능을 빠르게 찾으세요.

<div class="note-circle">
○ <strong>2026-04-09 기준 최신</strong> — v2.1.94까지 반영. <code>/tag</code>, <code>/vim</code>은 2026-04-04에 제거되었습니다.
<br />○ <strong>신규 추가</strong>: <code>/btw</code>, <code>/fork</code>, <code>/ultraplan</code>, <code>/buddy</code>, <code>/model opusplan</code>(하이브리드 모드)
</div>

---

## 🔤 알파벳 순서로 정렬된 전체 명령어

| # | 명령어 | 카테고리 | 설명 | 사용 빈도 |
|---|--------|---------|------|----------|
| 1 | `/agents` | 특수 기능 | 서브에이전트 타입 목록 보기 | ⭐⭐ |
| 2 | `/batch` | 특수 기능 | 여러 파일/항목에 일괄 작업 (worktree 자동 격리) | ⭐⭐⭐ |
| 3 | `/branch` | 세션 관리 | 대화 분기하기 | ⭐⭐⭐ |
| 4 | `/btw` | 세션 관리 | **사이드 질문** — 기록에 남기지 않고 잠깐 물어보기 (v2.1.72~) | ⭐⭐⭐⭐ |
| 5 | `/buddy` | 재미/이스터에그 | **터미널 다마고치** — 나만의 18종 펫 (v2.1.89+, Pro) | ⭐ |
| 6 | `/clear` | 세션 관리 | 대화 초기화 | ⭐⭐⭐⭐⭐ |
| 7 | `/color` | 설정 | 색상 커스터마이징 | ⭐⭐ |
| 8 | `/commit` | 특수 기능 | Git 커밋 메시지 생성 | ⭐⭐⭐ |
| 9 | `/compact` | 파일 & 코드 | 대화 압축 | ⭐⭐⭐⭐⭐ |
| 10 | `/config` | 설정 | 설정 보기 & 변경 | ⭐⭐⭐⭐ |
| 11 | `/context` | 정보 확인 | 컨텍스트 정보 보기 | ⭐⭐⭐ |
| 12 | `/copy` | 파일 & 코드 | 코드 복사 (`/copy 2` 식으로 특정 블록만) | ⭐⭐⭐⭐⭐ |
| 13 | `/cost` | 정보 확인 | 비용 상세 — **모델별·캐시 히트율 분리 표시** (v2.1.92~) | ⭐⭐⭐⭐ |
| 14 | `/desktop` | 특수 기능 | Desktop 앱 설정 열기 | ⭐⭐ |
| 15 | `/diff` | 파일 & 코드 | 파일 변경사항 비교 | ⭐⭐⭐⭐⭐ |
| 16 | `/doctor` | 정보 확인 | 시스템 진단 | ⭐⭐⭐ |
| 17 | `/effort` | 특수 기능 | 작업량 조절 (`low`/`medium`/`high`, v2.1.92~ 단순화) | ⭐⭐⭐ |
| 18 | `/exit` | 세션 관리 | 세션 종료 | ⭐⭐⭐⭐⭐ |
| 19 | `/export` | 파일 & 코드 | 파일 내보내기 | ⭐⭐⭐⭐ |
| 20 | `/fast` | 특수 기능 | 빠른 출력 모드 | ⭐⭐⭐ |
| 21 | `/fork` | 세션 관리 | **컨텍스트 복제** — 현재 상태를 복사해 다른 방향으로 실험 | ⭐⭐⭐ |
| 22 | `/help` | 정보 확인 | 도움말 보기 | ⭐⭐⭐⭐⭐ |
| 23 | `/init` | 특수 기능 | 프로젝트 초기화 | ⭐⭐⭐⭐ |
| 24 | `/insights` | 정보 확인 | 사용 패턴 및 인사이트 요약 | ⭐⭐ |
| 25 | `/language` | 설정 | 사용 언어 설정 | ⭐⭐⭐ |
| 26 | `/loop` | 특수 기능 | 세션 내 반복 실행 (최소 1분, 3일 후 자동 만료) | ⭐⭐⭐ |
| 27 | `/memory` | 파일 & 코드 | 기억 관리 (25KB·200줄 자동 정리) | ⭐⭐⭐ |
| 28 | `/model` | 설정 | AI 모델 선택 (`haiku`/`sonnet`/`opus`/**`opusplan`** 하이브리드) | ⭐⭐⭐⭐ |
| 29 | `/permissions` | 설정 | 권한 설정 — **Recent 탭 추가** (v2.1.89~) | ⭐⭐⭐ |
| 30 | `/plan` | 특수 기능 | 프로젝트 계획 수립 | ⭐⭐⭐⭐ |
| 31 | `/powerup` | 특수 기능 | **인터랙티브 기능 학습 레슨** (v2.1.90~) | ⭐⭐⭐ |
| 32 | `/pr` | 특수 기능 | PR 자동 생성 | ⭐⭐⭐ |
| 33 | `/release-notes` | 정보 확인 | 최신 업데이트 내역 — **인터랙티브 버전 선택기** (v2.1.92~) | ⭐⭐ |
| 34 | `/rename` | 세션 관리 | 세션 이름 변경 | ⭐⭐⭐ |
| 35 | `/resume` | 세션 관리 | 이전 대화 재개 (v2.1.77~ 45% 빨라짐) | ⭐⭐⭐ |
| 36 | `/review` | 특수 기능 | 코드 리뷰 받기 | ⭐⭐⭐⭐ |
| 37 | `/rewind` | 세션 관리 | 이전 상태로 되돌리기 (코드만/대화만/전체) | ⭐⭐⭐⭐ |
| 38 | `/sandbox` | 특수 기능 | 격리 환경에서 실행 | ⭐⭐⭐ |
| 39 | `/schedule` | 특수 기능 | 예약 실행 등록 | ⭐⭐⭐ |
| 40 | `/simplify` | 파일 & 코드 | 코드 단순화 및 리팩토링 | ⭐⭐⭐ |
| 41 | `/stats` | 정보 확인 | 종합 통계 보기 | ⭐⭐⭐ |
| 42 | `/status` | 정보 확인 | 현재 상태 확인 | ⭐⭐⭐⭐⭐ |
| 43 | `/teleport` | 세션 관리 | 현재 세션을 다른 기기로 이전 | ⭐⭐⭐ |
| 44 | `/theme` | 설정 | 화면 테마 선택 | ⭐⭐⭐⭐ |
| 45 | `/ultraplan` | 특수 기능 | **클라우드 플랜 다듬기** (research preview, v2.1.91+) | ⭐⭐⭐ |
| 46 | `/usage` | 정보 확인 | 사용량 통계 보기 | ⭐⭐⭐ |
| 47 | `/voice` | 특수 기능 | 음성 모드 시작 (스페이스바 push-to-talk, 20개 언어) | ⭐⭐⭐ |

<div class="note-star">
☆ <strong>2026-04-04 v2.1.92에서 제거된 명령어</strong>: <code>/tag</code>, <code>/vim</code>
<br />→ 기존 워크플로우에 있었다면 대체 방법을 찾으세요.
</div>

---

## 📁 카테고리별로 정렬된 명령어

### 🔄 세션 관리 (9개)

대화와 세션을 제어하는 명령어들입니다. `/btw`·`/fork`·`/rewind`는 **컨텍스트 위생 3종 세트**로 자주 함께 씁니다.

| 명령어 | 설명 | 자세한 문서 |
|--------|------|-----------|
| `/clear` | 대화 모두 지우기 | [세션 관리 명령어](../commands/session-commands.md) |
| `/resume` | 이전 대화 재개 (45% 빨라짐) | [세션 관리 명령어](../commands/session-commands.md) |
| `/rename` | 세션 이름 변경 | [세션 관리 명령어](../commands/session-commands.md) |
| `/branch` | 대화 분기하기 | [세션 관리 명령어](../commands/session-commands.md) |
| `/btw` | 기록에 남기지 않는 사이드 질문 | [컨텍스트 위생](../tips/btw-side-questions.md) |
| `/fork` | 현재 컨텍스트 복제해 다른 실험 | [컨텍스트 위생](../tips/btw-side-questions.md) |
| `/rewind` | 이전 상태로 되돌리기 (코드/대화/전체 선택) | [컨텍스트 위생](../tips/btw-side-questions.md) |
| `/teleport` | 현재 세션을 다른 기기로 이전 | [세션 관리 명령어](../commands/session-commands.md) |
| `/exit` | 세션 종료 | [세션 관리 명령어](../commands/session-commands.md) |

### ⚙️ 설정 관리 (6개)

Claude Code를 커스터마이징하는 명령어들입니다.

| 명령어 | 설명 | 자세한 문서 |
|--------|------|-----------|
| `/config` | 설정 보기 & 변경 | [설정 관련 명령어](../commands/config-commands.md) |
| `/model` | AI 모델 선택 | [설정 관련 명령어](../commands/config-commands.md) |
| `/permissions` | 권한 설정 | [설정 관련 명령어](../commands/config-commands.md) |
| `/theme` | 화면 테마 선택 | [설정 관련 명령어](../commands/config-commands.md) |
| `/color` | 색상 커스터마이징 | [설정 관련 명령어](../commands/config-commands.md) |
| `/language` | 사용 언어 설정 | [설정 관련 명령어](../commands/config-commands.md) |

### ℹ️ 정보 확인 (9개)

상태, 비용, 통계를 확인하는 명령어들입니다.

| 명령어 | 설명 | 자세한 문서 |
|--------|------|-----------|
| `/status` | 현재 상태 확인 | [정보 확인 명령어](../commands/info-commands.md) |
| `/cost` | **모델별 + 캐시 히트율** 상세 비용 (v2.1.92~) | [정보 확인 명령어](../commands/info-commands.md) |
| `/usage` | 사용량 통계 보기 | [정보 확인 명령어](../commands/info-commands.md) |
| `/stats` | 종합 통계 보기 | [정보 확인 명령어](../commands/info-commands.md) |
| `/context` | 컨텍스트 정보 보기 | [정보 확인 명령어](../commands/info-commands.md) |
| `/doctor` | 시스템 진단 | [정보 확인 명령어](../commands/info-commands.md) |
| `/help` | 도움말 보기 | [정보 확인 명령어](../commands/info-commands.md) |
| `/insights` | 사용 패턴 및 인사이트 요약 | [정보 확인 명령어](../commands/info-commands.md) |
| `/release-notes` | **인터랙티브 버전 선택기** (v2.1.92~) | [정보 확인 명령어](../commands/info-commands.md) |

### 📁 파일 & 코드 (5개)

파일 작업과 코드 관리 명령어들입니다.

| 명령어 | 설명 | 자세한 문서 |
|--------|------|-----------|
| `/diff` | 파일 변경사항 비교 | [파일 & 코드 명령어](../commands/file-commands.md) |
| `/copy` | 코드 복사 | [파일 & 코드 명령어](../commands/file-commands.md) |
| `/export` | 파일 내보내기 | [파일 & 코드 명령어](../commands/file-commands.md) |
| `/compact` | 대화 압축 | [파일 & 코드 명령어](../commands/file-commands.md) |
| `/memory` | 기억 관리 | [파일 & 코드 명령어](../commands/file-commands.md) |

### 🎯 특수 기능 (16개)

고급 기능과 전문가용 명령어들입니다.

| 명령어 | 설명 | 자세한 문서 |
|--------|------|-----------|
| `/init` | 프로젝트 초기화 | [특수 명령어](../commands/special-commands.md) |
| `/plan` | 프로젝트 계획 수립 | [특수 명령어](../commands/special-commands.md) |
| `/ultraplan` | **클라우드 플랜 다듬기** (research preview) | [/ultraplan 가이드](../advanced/ultraplan.md) |
| `/fast` | 빠른 출력 모드 (모델 유지) | [특수 명령어](../commands/special-commands.md) |
| `/voice` | 음성 모드 — 스페이스바 push-to-talk, 20개 언어 | [특수 명령어](../commands/special-commands.md) |
| `/effort` | 작업량 `low`/`medium`/`high` (v2.1.92~ 단순화) | [특수 명령어](../commands/special-commands.md) |
| `/sandbox` | 격리 환경에서 실행 | [특수 명령어](../commands/special-commands.md) |
| `/pr` | PR 자동 생성 | [특수 명령어](../commands/special-commands.md) |
| `/review` | 코드 리뷰 받기 | [특수 명령어](../commands/special-commands.md) |
| `/commit` | Git 커밋 메시지 생성 | [특수 명령어](../commands/special-commands.md) |
| `/powerup` | **인터랙티브 기능 학습 레슨** (v2.1.90~) | [특수 명령어](../commands/special-commands.md) |
| `/loop` | 세션 내 반복 실행 (최소 1분·3일 만료) | [특수 명령어](../commands/special-commands.md) |
| `/batch` | worktree 격리 병렬 일괄 작업 | [특수 명령어](../commands/special-commands.md) |
| `/simplify` | 코드 단순화 및 리팩토링 | [특수 명령어](../commands/special-commands.md) |
| `/schedule` | 예약 실행 등록 | [특수 명령어](../commands/special-commands.md) |
| `/agents` | 서브에이전트 타입 목록 | [특수 명령어](../commands/special-commands.md) |

---

## 🎯 상황별 필수 명령어

### 시작할 때
- `/help` — 무엇을 할 수 있는지 알아보기
- `/status` — 현재 상태 확인
- `/init` — 새 프로젝트 시작

### 작업 중일 때
- `/diff` — 변경사항 확인
- `/compact` — 토큰 절약
- `/copy` — 코드 복사
- `/review` — 코드 검토

### 비용/성능 확인할 때
- `/status` — 빠른 확인
- `/cost` — 상세 비용
- `/usage` — 통계
- `/context` — 메모리 상태

### 문제가 생겼을 때
- `/doctor` — 진단
- `/rewind` — 되돌리기
- `/sandbox` — 안전 테스트

### 마칠 때
- `/commit` — 커밋 메시지
- `/pr` — PR 생성
- `/exit` — 종료

---

## 💡 명령어 선택 가이드

**"무엇을 해야 할지 모를 때?"**
```bash
/help
```

**"지금까지 얼마나 썼을까?"**
```bash
/status     (빠른 확인)
/cost       (상세 확인)
```

**"코드를 확인하고 싶을 때?"**
```bash
/diff       (변경사항 비교)
/review     (코드 검토)
```

**"대화가 너무 길어졌을 때?"**
```bash
/context    (메모리 확인)
/compact    (토큰 절약)
```

**"실수했을 때?"**
```bash
/rewind     (되돌리기 — Esc×2로도 가능)
/fork       (다른 길로 시도해보기)
```

**"작업 중인데 잠깐 궁금한 게 있을 때?"**
```bash
/btw 여쭤볼 것  (기록에 남기지 않고 질문)
```

**"새 프로젝트를 시작할 때?"**
```bash
/init       (초기화)
/plan       (계획 수립)
```

---

## 📞 빠른 참고

### 자주 쓰는 3가지
1. **`/clear`** — 새로운 주제 시작
2. **`/status`** — 상태 확인
3. **`/help`** — 명령어 확인

### 꼭 알아야 할 5가지
1. **`/clear`** — 대화 초기화
2. **`/status`** — 사용 현황
3. **`/diff`** — 변경사항 확인
4. **`/copy`** — 코드 복사
5. **`/exit`** — 종료

### 실수 방지 3가지
1. **`/diff`** — 확인 후 수락
2. **`/rewind`** — 잘못된 방향 복구
3. **`/sandbox`** — 위험한 코드 테스트

---

## 다음 단계

모든 슬래시 명령어를 알았습니다!

다음으로 배울 내용:
- **CLI 플래그 레퍼런스** — 터미널 옵션들
- **키보드 단축키** — 빠른 입력 방법
