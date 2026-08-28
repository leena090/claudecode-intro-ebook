---
title: "[공] 2026년 7~8월 주요 업데이트 (w30~w34)"
description: "Opus 5 출시, 세션 간 메시지, 자체 호스팅 환경, Auto mode 기본값 전환, /design 스킬 등 7~8월 핵심 변경사항 모음"
tags: ["자동생성", "업데이트", "whats-new", "2026-07", "2026-08", "w30", "w32", "w33", "w34"]
category: "next"
order: 18
lastUpdated: "2026-08-28"
---

<div class="note-star">
★ <strong>공식 문서</strong>: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a><br />
★ 이 글은 2026년 7월 20일~8월 21일(w30~w34) 업데이트를 요약합니다 [공]
</div>

## 한눈에 보기

| 주차 | 핵심 기능 | 버전 |
|------|----------|------|
| **w30** (7/20~24) | Claude Opus 5 출시, iOS 시뮬레이터, Claude Security 플러그인 | v2.1.214~219 |
| **w32** (8/3~7) | 세션 간 메시지, 자체 호스팅 환경, Auto mode 기본값 | v2.1.220~224 |
| **w33** (8/10~14) | Desktop 자동 재개, Fork mode 기본값, GitLab 지원 | v2.1.225~233 |
| **w34** (8/17~21) | /design 스킬, Concise 출력 스타일, 폰으로 세션 시작 | v2.1.234~239 |

> ⚠️ w31(7/27~8/2)은 이번 llms.txt에 미게시 — 다음 회차 확인 예정

---

## 🗓️ Week 30 (7월 20~24일) — 오퍼스 5 등장

### Claude Opus 5 (클로드 오퍼스 파이브) 🆕
- Opus 4.8을 대체하는 **새 Opus 기본 모델**
- Max, Team Premium, Enterprise, API 기본 적용
- **1M 토큰 컨텍스트** (API/Max/Team/Enterprise)
- **Fast Mode 이동**: Opus 5 적용, **$10/$50 per MTok**
- 전환 명령: `/model claude-opus-5`

### iOS 시뮬레이터 패널 (macOS 데스크톱) 📱
- Claude Code Desktop에서 iOS 앱을 옆에 띄워 실시간 확인
- Pro, Max, Team 플랜 공개 베타
- Xcode + iOS 플랫폼 설치 필요
- 예시: "앱 빌드해서 시뮬레이터로 온보딩 플로우 확인해줘"

### Claude Security 플러그인 🔒
- 멀티 에이전트 취약점 스캔 도구
- 설치: `/plugin install claude-security@claude-plugins-official`
- 실행: `/claude-security`
- 결과는 `CLAUDE-SECURITY-<타임스탬프>/` 폴더에 저장

### w30 기타 변경사항
- `/code-review` 백그라운드 서브에이전트로 실행 (대화창 분리)
- 이모지 단축코드 자동완성 (`:heart:` 입력 시 이모지로 변환)
- 서브에이전트 동시 실행 최대 20개 (기본값)
- Fast Mode에서 Opus 4.7 지원 종료

---

## 🗓️ Week 32 (8월 3~7일) — 연결·자동화 확대

### Cross-Session Messaging (세션 간 메시지) 💬 🆕
- 내 Claude Code 세션들이 **서로 메시지를 주고받는** 기능
- `ListAgents`로 다른 세션 발견, `SendMessage`로 전송
- 사용 예시: "결제 API 작업 중인 세션에게 `users.name`이 `users.display_name`으로 바뀌었다고 전달해줘"
- macOS/Linux 지원, v2.1.224 이상
- 세션 확인: `/list-agents`
- 상세: [세션 간 메시지 가이드](../advanced/cross-session-messaging)

### 자체 호스팅 환경 (Self-Hosted Environments) 🏢 🆕
- 클라우드 세션을 **내 조직 인프라에서** 실행하는 기능
- Team/Enterprise 플랜 공개 베타
- 설치: `claude self-hosted-runner setup`
- 관리자 설정에서 **"Allow self-hosted environments"** 활성화 필요
- 내부 네트워크 서비스 접근 가능
- 상세: [자체 호스팅 환경 가이드](../advanced/self-hosted-environments)

### Auto mode(오토 모드) 기본값 전환 ✅
- 2026년 8월 14일부터 Pro, Max, Team 플랜에서 **Auto mode가 기본 권한 모드**
- 직접 기본값을 설정한 경우에는 유지됨 (전환 프롬프트로 선택)
- 미리 설정하려면:
```json
// ~/.claude/settings.json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

### w32 기타 변경사항
- `/fork` — 코드 변경을 별도 워크트리에서 수행
- VS Code 확장에 **Focus view** 추가 (Ctrl+Alt+F)
- 서브에이전트 200개 제한 **폐지** (동시 실행 한도는 유지)
- `/review` → `/code-review` 별칭으로 추가
- **Ultraplan 제거**: `/ultraplan` 명령어 및 `ultraplan` 키워드 삭제 — plan mode 또는 Claude Code on the web 사용 권장

---

## 🗓️ Week 33 (8월 10~14일) — 편의성 개선

### 데스크톱 자동 재개 (Desktop Auto-Continue) 🔄
- 사용량 한도(session limit) 도달 시 "자동 재개" 체크박스 선택 가능
- 리셋 시간에 자동으로 중단된 턴 재시작
- 카드에 `Auto-resuming at [시간]` 표시

### Fork mode(포크 모드) 기본값으로 전환 🍴
- 이제 **인터랙티브 세션에서 Fork mode가 기본 켜짐**
- 서브에이전트가 대화 컨텍스트와 프롬프트 캐시를 이어받아 시작
- `/subtask 파서 변경사항에 대한 단위 테스트 초안 작성` — 별도 패널에서 실행
- 끄려면: `CLAUDE_CODE_FORK_SUBAGENT=0` 환경변수 설정

### GitLab(깃랩) 지원 확대 🦊
- 플러그인 마켓플레이스에서 gitlab.com URL 직접 지원
- MR(Merge Request, 병합 요청) URL로 워크트리 시작:
```bash
claude --worktree https://gitlab.com/group/project/-/merge_requests/42
```
- `glpat-`, `glrt-` 등 GitLab 토큰 자동 마스킹

### w33 기타 변경사항
- `@세션이름` 입력으로 다른 세션에 직접 메시지 보내기
- `/plugin install plugin@마켓플레이스` — 마켓플레이스 자동 갱신 후 설치
- 과제 추적 도구(`TaskCreate`, `TodoWrite` 등) — Opus 4.8, Sonnet 5, Fable 5 이후 모델에서 기본 비활성화
  - 다시 활성화: `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`
- VS Code 확장에서 세션 목록 **그룹 정리** 기능 추가

---

## 🗓️ Week 34 (8월 17~21일) — 창작·편의 업그레이드

### /design 스킬 🎨 🆕
- UI 아트보드를 Claude Code CLI와 Desktop에서 바로 초안 생성
- Artifacts(아티팩트) 기반, 브라우저에서 편집 후 구현 의뢰 가능
- Pro, Max, Team, Enterprise 지원, v2.1.233 이상
- 사용 예시:
```text
> /design 실제 사용 패턴에 맞게 composer 재설계
```

### Concise(간결) 출력 스타일 📝 🆕
- 새 내장 출력 스타일: 결과를 앞에 먼저, 불필요한 서두 생략
- `/config` → **Output style** 또는 설정 파일로 적용:
```json
// ~/.claude/settings.json
{
  "outputStyle": "Concise"
}
```
- 적용 후 `/clear` 또는 새 세션으로 시작

### 폰에서 내 PC 세션 시작 📱→💻
- `claude remote-control` 실행 중인 기기가 Claude 앱 **Code 탭 상단**에 디바이스 카드로 표시
- Remote Control이 리서치 프리뷰 졸업, 정식 기능으로 전환
- 사용 방법:
```bash
claude remote-control
```
이후 휴대폰 Claude 앱 Code 탭에서 기기 탭 후 디렉토리 선택

### w34 기타 변경사항
- 사용량 한도 리셋 시 **자동 재개** 기능 (`Continue automatically at usage limit` in `/config`)
- **맞춤법 검사** (`spellcheck` 설정): aspell/hunspell/ispell 설치 시 입력창에서 실시간 밑줄
- `ANTHROPIC_DEFAULT_MODEL` 환경변수로 새 세션 기본 모델 지정
- `keybindingFlavor: "readline"` 설정 시 `Ctrl+W`가 공백 단위로 삭제 (Bash 방식)
- GitLab MR 뱃지 (`MR !N`) 상태바에 표시 (glab CLI 필요)
- `/permissions` 또는 `/add-dir <경로>` — Claude 작업 중에도 실행 가능
- Windows에서도 세션 간 메시지(`SendMessage`, `ListAgents`) 지원

---

## 요약: 이번 업데이트에서 가장 중요한 것

1. 🤖 **Claude Opus 5** — Opus 최상위 모델 세대 교체, Fast Mode $10/$50
2. 💬 **세션 간 메시지** — 여러 Claude 세션이 협력
3. 🏢 **자체 호스팅 환경** — 기업 내부 인프라에서 클라우드 세션 실행
4. ✅ **Auto mode 기본값** — 8월 14일부터 Pro/Max/Team 기본
5. 🎨 **/design 스킬** — UI 아트보드 즉석 초안 생성
6. 📝 **Concise 출력 스타일** — 답변 앞부분 바로 결과로

> ⚠️ **중요**: `/ultraplan` 명령어는 w32에서 제거되었습니다. 대신 plan mode(`/plan`) 또는 Claude Code on the web을 사용하세요.

> 이 글은 Claude Code 공식 문서 (whats-new/2026-w30, w32, w33, w34)를 기반으로 작성되었습니다 [공].
