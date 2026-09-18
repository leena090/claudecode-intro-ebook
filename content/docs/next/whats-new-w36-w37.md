---
title: "[공] Claude Code 주간 업데이트 W36~W37 (2026년 9월 1~11일)"
description: "Fable 5.1 출시, 백그라운드 컴퓨터 사용, /diff 패널, 플러그인 평가 도구, 데스크톱 창 분리 등 2주치 핵심 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "Fable5.1", "플러그인평가", "컴퓨터사용", "Desktop", "w36", "w37"]
category: "next"
order: 18
lastUpdated: "2026-09-18"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 출처: <a href="https://code.claude.com/docs/en/whats-new/2026-w36">whats-new/2026-w36</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w37">whats-new/2026-w37</a><br />
★ 버전 범위: v2.1.251 → v2.1.269 (2026-08-31 ~ 2026-09-11)
</div>

---

## 🗓️ W36: 8월 31일 ~ 9월 4일

> "Fable 5.1로 전환하고, 컴퓨터 사용이 Desktop에서 백그라운드로 실행되며, 라이브 /diff 패널로 Claude의 편집을 실시간 확인하세요."

### ✨ 주요 기능 4가지

---

#### 1. 🧠 Claude Fable 5.1 — 코딩 최강 모델

```text
> /model fable
```

- `fable` 단축어가 이제 **Fable 5.1**을 선택해요 (v2.1.257 이상)
- **1M(100만) 토큰** 컨텍스트 창으로 대용량 코드베이스 한 번에 처리
- 기업용 프록시(Claude Apps Gateway) 환경에서는 `/model claude-fable-5-1` 직접 입력

> 📌 자세한 내용은 → [Fable 5.1 & Mythos 5.1 상세 설명](./fable51-mythos51.md)

---

#### 2. 🖥️ 백그라운드 컴퓨터 사용 (Desktop, 베타)

> 🍱 **비유**: 조수(Claude)가 옆 책상에서 마우스와 키보드로 다른 앱을 조용히 다루는 동안, 나는 내 작업에 집중할 수 있어요.

**macOS Claude Code Desktop 앱**에서 컴퓨터 사용(Computer Use)이 백그라운드로 작동해요:

- Claude가 승인한 앱들에서 **화면을 보고 조작**하는 동안 내 화면은 그대로
- 이전: 화면 전체 제어(내 작업 방해) → 이제: **조용히 백그라운드 실행**
- Pro·Max 플랜 베타

```text
# 사용 예시
> Xcode를 열어서 빌드 에러를 확인하고 수정해줘
# → Claude가 백그라운드에서 Xcode를 열고 작업
```

---

#### 3. 📋 라이브 /diff 패널 — 편집 내용 실시간 확인

> 🍱 **비유**: 요리사(Claude)가 요리하는 동안, 주방 한 켠에 "재료 변경 목록판"이 실시간으로 업데이트되는 것처럼요.

```text
> /diff
```

- 풀스크린 렌더링 모드에서, `/diff`가 이제 **대화 옆 패널**로 열려요
- Claude가 파일을 편집하거나 명령어를 실행할 때마다 **자동 갱신**
- 변경된 파일 목록 + 추가/삭제 줄 수 표시
- 패널의 줄을 마우스로 선택해 다음 프롬프트에 첨부 가능

```bash
# 조건: 풀스크린 렌더링 ON + git 저장소 + 터미널 110컬럼 이상
/diff  # 토글 (열기/닫기)
```

---

#### 4. 🩺 /skill-doctor — 안 쓰는 스킬 찾기

> 🍱 **비유**: 지갑 속 카드를 정리하는 것처럼, 쓰지도 않는 스킬이 컨텍스트를 잡아먹고 있었다면 이 도구로 찾아낼 수 있어요.

```text
> /skill-doctor
```

- 각 스킬이 **컨텍스트를 얼마나 차지하는지**, **얼마나 자주 쓰이는지** 리포트
- 불필요한 스킬을 끄고 컨텍스트를 아낄 수 있어요
- v2.1.252 이상, 피처 플래그 패칭 환경 필요

---

### 🔧 W36 기타 개선사항

| 기능 | 내용 |
|---|---|
| `maxEffortLevel` 설정 | AWS Bedrock·GCP Agent Platform·Microsoft Foundry 포함 모든 프로바이더에서 effort 상한 설정 가능 |
| `/cost` 개선 | 프롬프트 캐시 통계 추가 (캐시 히트율, 마지막 캐시 미스 원인 등) |
| `managedMcpServers` | 관리자 설정에서 HTTP/SSE MCP 서버를 조직 전체에 배포 가능 |
| `/effort` 모델별 저장 | 모델마다 독립적인 effort 레벨 저장. `s` 키로 현재 세션만 적용 |
| Auto mode 보안 강화 | 클라우드 메타데이터 엔드포인트 접근, 인접 컨테이너 연결 등 추가 차단 |
| Auto mode 외부 파일 | 작업 디렉토리 밖 파일 **첫 번째 읽기 전** 확인 요청 |
| `bashOutputMaxChars` | 최대 128,000자까지 확장 (성공한 명령어 출력 더 길게 수신) |
| VS Code 모델 피커 | 프롬프트 박스 하단 모델명 클릭으로 모델 변경 |
| Enterprise 기본값 | 좌석제(Seat-based) Enterprise 플랜이 기본적으로 **Opus 5** 사용 |

---

## 🗓️ W37: 9월 7일 ~ 11일

> "claude plugin eval로 플러그인을 테스트하고, Desktop 창을 분리해 독립 창으로 띄워보세요."

### ✨ 주요 기능 2가지

---

#### 1. 🧪 claude plugin eval — 플러그인 자동 평가

> 🍱 **비유**: 새로 만든 레시피(플러그인)를 손님에게 내기 전, 요리 평가단(eval suite)에게 먼저 맛을 봐달라는 것처럼요. 플러그인 있을 때와 없을 때를 비교해서 효과가 있는지 확인해요.

```bash
# 플러그인 폴더에서 평가 스위트 초안 생성
claude plugin eval init

# 생성된 스위트로 평가 실행
claude plugin eval .
```

- 각 테스트 케이스를 **플러그인 있을 때 / 없을 때** 양쪽 실행해 점수 비교
- 터미널에 요약 표 출력 + `evals/results/report.html` 상세 리포트
- 평가 케이스마다 실제 Claude API 호출이 발생하므로 비용이 생겨요

> 📌 자세한 설명 → 공식 문서: [Test plugins with evals](https://code.claude.com/docs/en/plugin-evals)

---

#### 2. 🪟 Desktop 창 분리 — 독립 창으로 드래그

> 🍱 **비유**: 큰 화면에서 여러 창을 따로따로 띄워 작업하는 멀티태스킹이에요. diff 결과를 오른쪽 모니터로, 터미널은 왼쪽으로!

Claude Code **Desktop 앱**에서:
- 임의의 패널(diff, 터미널 등)을 **드래그해서 독립 창**으로 분리
- 분리한 창을 두 번째 모니터로 이동하고 Claude는 메인 창에서 계속 작업
- 작업 완료 후 패널을 다시 메인 창에 도킹(dock) 가능

---

### 🔧 W37 기타 개선사항

| 기능 | 내용 |
|---|---|
| `maxEffortLevel` 전역 설정 | 최상위 또는 `modelSettings` 하위에서 설정해 특정 모델(Bedrock 등)의 effort 상한 지정 |
| `--plugin-dir` | 플러그인 폴더를 통째로 지정하면 manifest 있는 하위 폴더를 모두 로드 |
| WebFetch 5분 타임아웃 | 5분 내 응답 없으면 deadline 에러 발생. `CLAUDE_CODE_WEBFETCH_DEADLINE_MS`로 변경 가능 (`0`=무제한) |
| plugin 명령 `--json` | `plugin install/uninstall/update/enable/disable --json`으로 stdout 마지막 줄에 JSON 결과 출력 |
| Auto mode 차단 규칙 표시 | 차단 시 `[Data Exfiltration]` 같이 **매칭된 규칙 이름** 표시 |
| `/` 중간 커맨드 완성 | 프롬프트 작성 중 `/`를 타이핑하면 매칭 명령어 **목록** 표시 (fullscreen에서) |
| VS Code 에이전트 맵 | 프롬프트 박스 에이전트 수 클릭 → 서브에이전트 전사(轉寫) 보기 + 중지 |
| VS Code Hooks/Permissions | 커맨드 메뉴 Customize 섹션에서 훅·권한 규칙 추가/제거 |
| Artifact 아이콘 | Claude가 아티팩트 발행 시 브라우저 탭 아이콘 자동 선택 |
| 웹 메시지 취소 | 클라우드 세션에서 Claude가 읽기 전에 대기 중 메시지 취소 가능 (Esc 또는 ↑) |

---

## 📊 2026년 9월 기준 모델 한눈에 보기

```
🏆 Fable 5.1    — 코딩·지식 최고 성능 (1M 컨텍스트)
⚡ Opus 5       — Enterprise 기본값, Fast Mode 탑재
🛠️ Sonnet 5    — 일반 기본 모델 (Pro·Max·Team)
🐦 Haiku 4.5   — 경량·초고속
```

> 💡 **모델 전환 팁**: `/model` 만 입력하면 현재 모델과 선택 메뉴가 나와요.
