---
title: "[공] 2026년 Week 18–19 업데이트 — 에이전트 뷰·워크트리·목표 설정 등장"
description: "4월 27일~5월 8일 Claude Code 주요 업데이트: 에이전트 뷰(agent view) 리서치 프리뷰, /goal 명령어, worktree 신기능, PR URL로 세션 재개, Windows Git Bash 불필요 등 총 정리"
tags: ["자동생성", "업데이트", "whats-new", "에이전트뷰", "목표", "워크트리", "2026"]
category: "next"
order: 4
lastUpdated: "2026-05-11"
---

<div class="note-star">
★ <strong>출처 [공]</strong> — <a href="https://code.claude.com/docs/en/whats-new/2026-w18">whats-new/2026-w18</a>, <a href="https://code.claude.com/docs/en/whats-new/2026-w19">whats-new/2026-w19</a> 공식 페이지 기준 (2026-05-11 확인)
</div>

## 이번 2주 동안 뭐가 바뀌었나요?

Claude Code는 매주 새 기능이 나오는 앱이에요. **4월 27일~5월 8일** 사이에 특히 큰 기능들이 여럿 추가됐습니다. 하나씩 살펴볼게요.

---

## 📅 Week 18 (4월 27일 ~ 5월 1일) — v2.1.120 → v2.1.126

### 1️⃣ 브라우저 없이 로그인 — WSL2·SSH·컨테이너 사용자 필독

> 🍱 **비유**: 문자로 날아온 인증 코드를 직접 입력하는 것처럼, 이제 브라우저 대신 터미널에 코드를 붙여넣어도 돼요.

로그인할 때 브라우저가 뜨지 않는 환경(WSL2, SSH 원격, 도커 컨테이너)에서도 이제 정상 로그인이 가능합니다.

```bash
# 로그인 명령 실행
claude auth login
# → 브라우저에서 인증 → 코드를 복사 → 터미널에 붙여넣기
```

---

### 2️⃣ `claude project purge` — 프로젝트 상태 완전 초기화

> 🍱 **비유**: 스마트폰 앱 데이터를 완전 초기화하는 것처럼, 프로젝트에 쌓인 Claude Code 흔적(대화 기록, 작업 이력, 설정 등)을 한 번에 정리합니다.

```bash
# 삭제 전 미리보기 (실제로 삭제 안 함)
claude project purge --dry-run

# 확인 없이 바로 삭제
claude project purge -y

# 모든 프로젝트 한 번에 정리
claude project purge --all
```

| 옵션 | 설명 |
|------|------|
| `--dry-run` | 뭘 삭제할지 미리 보여줌 (안전!) |
| `-y` / `--yes` | "맞아요" 확인 생략하고 바로 삭제 |
| `-i` / `--interactive` | 하나씩 골라서 삭제 |
| `--all` | 모든 프로젝트 정리 |

⚠️ **꼭 `--dry-run` 먼저** 실행해서 뭘 지우는지 확인하세요!

---

### 3️⃣ PR URL로 세션 재개 — "그 PR 만든 대화 어디 갔지?"

> 🍱 **비유**: "지난번 우리가 짠 그 계획 어디 적었더라?"처럼, 이제 PR(풀 리퀘스트) 주소만 있으면 그 PR을 만들었던 Claude Code 대화로 바로 돌아갈 수 있어요.

```bash
# 세션 목록 열기
/resume
# → PR URL 붙여넣기 → 자동으로 그 세션으로 이동

# 명령줄에서 바로 PR 번호로 재개
claude --from-pr 1234
```

GitHub, GitHub Enterprise, GitLab, Bitbucket 주소 모두 지원합니다.

---

### 4️⃣ Windows에서 Git Bash 불필요

> 🍱 **비유**: 예전에는 특정 드라이버가 꼭 있어야 했는데, 이제 없어도 자동으로 대체 드라이버가 켜지는 것처럼요.

Git for Windows(Git Bash)가 없어도 Claude Code가 잘 작동해요. PowerShell을 자동으로 감지해서 사용합니다. Windows 사용자에게 반가운 소식!

---

### 🔧 그 외 유용한 변경들 (Week 18)

| 기능 | 설명 |
|------|------|
| `claude ultrareview` | CI/자동화 스크립트에서 `/ultrareview` 비대화형 실행 (`--json`으로 JSON 출력) |
| `claude plugin prune` | 고아(孤兒) 플러그인 의존성 정리 |
| `/skills` 검색창 | 긴 스킬 목록에서 키보드로 바로 검색 |
| MCP `alwaysLoad: true` | MCP 서버별 도구를 항상 미리 로드 (tool-search 지연 없음) |
| 메모리 누수 수정 | 이미지 많은 세션, 긴 대화 기록에서 성능 개선 |

---

## 📅 Week 19 (5월 4일 ~ 8일) — v2.1.128 → v2.1.136

### 1️⃣ 플러그인 ZIP/URL로 바로 설치

> 🍱 **비유**: 파일 공유 링크를 받아서 앱을 설치하는 것처럼, 이제 URL만 있으면 플러그인을 바로 불러올 수 있어요.

```bash
# URL에서 플러그인 바로 로드
claude --plugin-url https://example.com/my-plugin.zip

# ZIP 파일에서 로드
claude --plugin-dir ./my-plugin.zip
```

마켓플레이스에 등록하기 전에 플러그인을 테스트하거나, 내부용 플러그인을 배포할 때 유용합니다.

---

### 2️⃣ Ctrl+R — 모든 프로젝트 히스토리 검색 (기본값 복원)

> 🍱 **비유**: 검색창에서 "내 컴퓨터 전체"를 기본으로 검색하다가 "현재 폴더만"으로 좁히는 것처럼요.

`Ctrl+R`(히스토리 역방향 검색)이 이제 기본적으로 **모든 프로젝트의 명령어**를 검색합니다.

```
Ctrl+R        → 전체 프로젝트 히스토리 검색
Ctrl+S        → 현재 프로젝트·세션으로 좁히기
```

예전에 다른 프로젝트에서 쓴 명령어도 다시 찾을 수 있어요!

---

### 3️⃣ `worktree.baseRef` 설정 — 워크트리 시작점 선택

> 🍱 **비유**: 복사본을 원격 최신 버전에서 만들 건지(fresh), 내가 지금 작업하던 버전에서 만들 건지(head) 선택하는 거예요.

워크트리를 만들 때 어느 버전을 기반으로 할지 설정할 수 있어요:

```json
// settings.json (또는 ~/.claude/settings.json)
{
  "worktree": {
    "baseRef": "head"
  }
}
```

| 값 | 의미 |
|----|------|
| `"fresh"` (기본값) | 원격 저장소의 최신 버전에서 시작 (깨끗한 상태) |
| `"head"` | 내 로컬 HEAD(현재 작업 중인 상태)에서 시작 |

아직 push 안 한 내 커밋을 포함해서 워크트리를 만들고 싶을 때 `"head"`를 씁니다.

---

### 🔧 그 외 유용한 변경들 (Week 19)

| 기능 | 설명 |
|------|------|
| `settings.autoMode.hard_deny` | 오토 모드에서도 절대 허용 안 할 액션 명시적 차단 |
| 훅에서 `$CLAUDE_EFFORT` | 훅 스크립트가 현재 노력 수준(effort level) 읽기 가능 |
| `/mcp` 도구 수 표시 | MCP 서버별 연결된 도구 개수 표시 |
| `--channels` + API키 | 채널 기능이 콘솔(API 키) 인증에서도 동작 |
| 서브에이전트 캐시 최적화 | 캐시 생성 토큰 비용 약 3배 절감 |

---

## 🆕 이번 2주에 새로 생긴 문서 페이지들

이번 업데이트와 함께 공식 문서에 새 페이지들이 생겼어요:

| 페이지 | 내용 |
|--------|------|
| [에이전트 뷰](/advanced/agent-view) | `claude agents` 명령어로 여러 작업 한 화면 관리 |
| [에이전트 병렬 실행 비교](/advanced/agents-parallel) | 서브에이전트 vs 에이전트뷰 vs 팀 vs 워크트리 선택 가이드 |
| [/goal 명령어](/commands/goal) | 목표 설정 후 Claude가 완료까지 알아서 |
| [워크트리 가이드 (업데이트)](/advanced/worktrees) | `.worktreeinclude`, PR 브랜칭 등 신기능 추가 |

---

## 빠른 요약

이번 2주 업데이트의 핵심은 **"Claude에게 더 많이 맡기는 방법"**이에요:
- **에이전트 뷰**: 여러 AI 작업을 한 화면에서 파견·감독
- **/goal**: 조건을 말하면 Claude가 충족될 때까지 알아서 반복
- **워크트리 개선**: 병렬 작업 격리가 더 세밀하게
