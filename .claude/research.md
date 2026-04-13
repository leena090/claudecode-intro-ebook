# Research — Claude Code 입문 Ebook 업데이트 (2026-04-08)

> 조사일: 2026-04-08
> 조사자: Claude Opus 4.6 + claude-code-guide 에이전트 + web-research-specialist 에이전트
> 목적: https://claudecode-intro-ebook.vercel.app/ 를 오늘 기준 최신 상태로 갱신

---

## 출처 태그 범례

| 태그 | 의미 |
|---|---|
| **[공식]** | Anthropic 공식 문서 / GitHub 릴리스 / 블로그 |
| **[R]** | Reddit 커뮤니티 |
| **[x]** | X (Twitter) 커뮤니티 |

---

## Part A — 기존 Ebook 상태 점검

### A.1 현재 상태 (2026-04-08 기준)
- **총 가이드 수**: 63개
- **카테고리 수**: 13개
- **마지막 업데이트**: 대부분 2026-04-06 (2일 전), 일부 파일 2026-03-22에 멈춤
- **`lastUpdated` 프론트매터**: 59개 파일 있음 / 4개 없음
- **렌더링 상태**: ⚠️ `src/lib/docs.ts`가 `lastUpdated` 필드를 파싱하지 않음 → 본문 상단에 수동으로 `> 📅 최종 업데이트:` 줄로 적어놓은 상태

### A.2 `lastUpdated` 누락 파일 (4개)
1. `content/docs/setup/first-run.md`
2. `content/docs/practice/create-file.md`
3. `content/docs/practice/fix-error.md`
4. `content/docs/practice/explain-code.md`

### A.3 `lastUpdated`가 2026-03-22에 멈춰있는 파일 (14개)
- `advanced/git-workflow.md`
- `advanced/plugins.md`
- `advanced/print-mode.md`
- `advanced/sandbox-security.md`
- `commands/config-commands.md`
- `commands/file-commands.md`
- `commands/info-commands.md`
- `commands/session-commands.md`
- `config/claude-md.md`
- `config/permissions-guide.md`
- `config/settings-json.md`
- `setup/install-claude-code.md`
- `setup/install-nodejs.md`

---

## Part B — 공식 소스 조사 결과 (Anthropic)

### B.1 NEW — 완전 신규 기능 (7개)

#### B.1.1 [NEW] `/powerup` — 인터랙티브 기능 학습 레슨
- **출처**: [공식] GitHub Release v2.1.90 (2026-04-01)
- **인용**: "Added `/powerup` command with interactive lessons and animated demos"
- **내용**: `/powerup` 입력 시 Claude Code 기능을 애니메이션 데모와 함께 단계별로 학습
- **기존 ebook 영향**: 없음 (신규)
- **반영 위치 제안**: `tips/` 또는 `commands/special-commands.md`

#### B.1.2 [NEW] Bedrock 설정 마법사 (로그인 화면)
- **출처**: [공식] GitHub Release v2.1.92 (2026-04-04)
- **인용**: "Interactive Bedrock setup wizard on login screen"
- **내용**: AWS Bedrock 연동 시 로그인 화면에서 인터랙티브 설정 마법사 제공 (AWS 인증, 리전, 모델 선택)
- **기존 ebook 영향**: `config/` 또는 `setup/`
- **반영 위치 제안**: 신규 파일 또는 기존 설정 페이지 내 섹션

#### B.1.3 [NEW] `/release-notes` 인터랙티브 버전 선택기
- **출처**: [공식] GitHub Release v2.1.92 (2026-04-04)
- **인용**: "Interactive `/release-notes` version picker"
- **내용**: 단순 텍스트에서 인터랙티브 버전 선택기로 변경 — 특정 버전의 릴리스 노트를 골라볼 수 있음
- **반영 위치 제안**: `commands/commands-overview.md` 또는 `commands/special-commands.md`

#### B.1.4 [NEW] `/cost`의 모델별 + 캐시히트 상세 분석
- **출처**: [공식] GitHub Release v2.1.92 (2026-04-04)
- **인용**: "Per-model and cache-hit breakdown in `/cost` for subscription users"
- **내용**: `/cost` 결과가 모델별로 나뉘고, 캐시 히트 비율까지 표시 (구독 사용자 대상)
- **반영 위치 제안**: `commands/info-commands.md` + `tips/token-saving.md`

#### B.1.5 [NEW] MCP 결과 크기 오버라이드 (최대 500KB)
- **출처**: [공식] GitHub Release v2.1.91 (2026-04-02)
- **인용**: "MCP tool result persistence override via `_meta[\"anthropic/maxResultSizeChars\"]` (up to 500K)"
- **내용**: MCP 도구가 반환하는 결과 크기 제한을 기존 100KB → 최대 500KB까지 확장 가능
- **반영 위치 제안**: `config/mcp-setup.md` 고급 설정 섹션

#### B.1.6 [NEW] `disableSkillShellExecution` 설정
- **출처**: [공식] GitHub Release v2.1.91 (2026-04-02)
- **인용**: "`disableSkillShellExecution` setting to disable inline shell execution"
- **내용**: 스킬/커맨드/플러그인에서 인라인 셸 실행을 비활성화하는 보안 옵션
- **반영 위치 제안**: `config/settings-json.md` 보안 섹션

#### B.1.7 [NEW] `Ultraplan` — 클라우드 기반 플랜 다듬기 (research preview)
- **출처**: [공식] https://code.claude.com/docs/en/ultraplan
- **인용**: "Ultraplan is in research preview and requires Claude Code v2.1.91 or later. Hand a planning task from your local CLI to Claude Code on the web running in plan mode."
- **내용**: 로컬 CLI에서 `/ultraplan` 사용 → 플랜을 클라우드로 전송 → 브라우저에서 인터랙티브 검토 → 클라우드 또는 로컬에서 실행
- **반영 위치 제안**: `advanced/` 신규 파일 또는 `codeweb/` 카테고리

---

### B.2 UPDATED — 기존 내용 갱신 필요 (12개)

#### B.2.1 [UPDATED] Opus 4.6 컨텍스트 1M 토큰 지원
- **출처**: [공식] GitHub Release v2.1.75 (2026-03-13)
- **인용**: "1M context window for Opus 4.6 (Max, Team, Enterprise)"
- **내용**: Opus 4.6 모델의 컨텍스트 윈도우가 200K → **1M 토큰**으로 확장. 단 **Max/Team/Enterprise** 플랜만 (Pro 제외)
- **기존 ebook 영향**: 언급 없음 → **추가 필요**
- **반영 위치 제안**: `tips/token-saving.md` + `advanced/` 신규 또는 `intro/claude-ecosystem.md`

#### B.2.2 [UPDATED] Windows용 PowerShell 도구 (opt-in preview)
- **출처**: [공식] GitHub Release v2.1.84 (2026-03-26)
- **인용**: "PowerShell tool for Windows (opt-in preview)"
- **내용**: Windows 사용자용 PowerShell 도구 추가 (Bash 대신) — opt-in preview
- **반영 위치 제안**: `setup/` 또는 `commands/`

#### B.2.3 [UPDATED] Transcript 검색 (`/` 키)
- **출처**: [공식] GitHub Release v2.1.83 (2026-03-25)
- **인용**: "Transcript search — press `/` in transcript mode"
- **내용**: 전사(transcript) 모드에서 `/` 키로 검색, `n`/`N`로 결과 이동
- **반영 위치 제안**: `basics/understanding-ui.md` + `tips/useful-tips.md`

#### B.2.4 [UPDATED] 자동 메모리 기능 강화 (25KB / 200줄 제한)
- **출처**: [공식] GitHub Release v2.1.59 (2026-02-26) ~ v2.1.89 (2026-04-01)
- **인용**: "Auto-memory feature now truncates at 25KB and 200 lines"
- **내용**: 자동 메모리가 25KB, 200줄 제한으로 자동 정리. `/memory` 명령어로 관리
- **반영 위치 제안**: `config/` 메모리 섹션 또는 `tips/`

#### B.2.5 [UPDATED] Write 도구 diff 연산 60% 빨라짐
- **출처**: [공식] GitHub Release v2.1.92 (2026-04-04)
- **인용**: "Improved Write tool diff computation speed for large files (60% faster on files with tabs/&/$)"
- **내용**: 탭·`&`·`$` 문자가 많은 파일 쓰기 속도 60% 향상
- **반영 위치 제안**: `tips/` 성능 섹션

#### B.2.6 [UPDATED] Remote Control 세션 이름 AI 생성
- **출처**: [공식] GitHub Release v2.1.83 (2026-03-25)
- **인용**: "Remote Control titles AI-generated within seconds"
- **내용**: Remote Control 세션 이름이 첫 메시지 기반으로 AI가 자동 생성 (기존: 고정 호스트명)
- **반영 위치 제안**: `advanced/remote-control.md`

#### B.2.7 [UPDATED] Agent Teams = 실험 상태 (환경변수 필수)
- **출처**: [공식] https://code.claude.com/docs/en/agent-teams
- **인용**: "Agent teams are experimental and disabled by default. Enable them by adding `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` to your settings.json"
- **내용**: Agent Teams는 실험적 기능 → `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 설정 필수
- **반영 위치 제안**: `advanced/agent-teams.md` — "활성화" 섹션 추가

#### B.2.8 [UPDATED] `/loop` 공식 문서 완성
- **출처**: [공식] GitHub Release v2.1.72 (2026-03-10)
- **인용**: "`/loop` command for recurring prompts/commands"
- **내용**: `/loop` 명령어가 공식 문서에 완전 수록 + 간격 설정 지원
- **반영 위치 제안**: `commands/special-commands.md` 또는 `advanced/`

#### B.2.9 [UPDATED] Cowork + Dispatch 통합
- **출처**: [공식] https://claude.com/blog/dispatch-and-computer-use (2026-03-17)
- **인용**: "Dispatch is a feature within Claude Cowork that lets you send tasks to your desktop AI from your phone"
- **내용**: 모바일 앱에서 데스크톱 작업 할당 (Desktop Control + Claude Code 통합)
- **반영 위치 제안**: `cowork/cowork-dispatch.md` — 재검증 필요

#### B.2.10 [UPDATED] `/claude-api` 스킬 기본 번들 포함
- **출처**: [공식] GitHub Release v2.1.69 (2026-03-05)
- **인용**: "`/claude-api` skill for building with Claude API"
- **내용**: Claude API/SDK 빌드용 `/claude-api` 스킬이 기본 번들에 포함
- **반영 위치 제안**: `config/skills-guide.md` 빌트인 스킬 섹션 (이미 언급 있을 수 있음 — 확인)

#### B.2.11 [UPDATED] Voice STT 20개 언어 지원 (10개 추가)
- **출처**: [공식] GitHub Release v2.1.69 (2026-03-05)
- **인용**: "Voice STT support for 10 new languages (20 total)"
- **내용**: Voice 모드 음성인식 지원 언어 10개 → **20개**
- **반영 위치 제안**: `advanced/voice-fast.md`

#### B.2.12 [UPDATED] Effort Level 단순화 + 로고/스피너 표시
- **출처**: [공식] GitHub Release v2.1.69, v2.1.68, v2.1.92
- **인용**: "Effort level display in logo and spinner. Simplified effort levels (low/medium/high)"
- **내용**:
  - Effort level이 로고/스피너에 표시됨
  - 옵션 단순화: `low`/`medium`/`high` (기존: ultrafast/fast/balanced/thorough/ultrathink)
  - Opus 4.6는 Max/Team에서 기본값 `high`
- **반영 위치 제안**: `config/` 또는 `commands/` effort 섹션

---

### B.3 ENHANCED — 성능·UI 개선 (5개)

#### B.3.1 [ENHANCED] Write 도구 성능
- 대용량 파일 diff 60% 빠름 (v2.1.92)

#### B.3.2 [ENHANCED] 스크롤 성능 8배 향상
- **출처**: [공식] GitHub Release v2.1.78 (2026-03-17)
- WASM yoga-layout → 순수 TypeScript로 교체 → 스크롤 8배 빨라짐

#### B.3.3 [ENHANCED] `--resume` 세션 재개 45% 빠름
- **출처**: [공식] GitHub Release v2.1.77 (2026-03-17)
- 속도 45% 향상 + 메모리 사용 100~150MB 감소

#### B.3.4 [ENHANCED] MCP OAuth — RFC 9728 준수
- **출처**: [공식] GitHub Release v2.1.85, v2.1.84
- Protected Resource Metadata discovery 따름 + 스텝업 인증 개선

#### B.3.5 [ENHANCED] `/permissions` Recent 탭
- **출처**: [공식] GitHub Release v2.1.89 (2026-04-01)
- 최근 거부된 명령어 목록 표시 + 재시도 가능

---

### B.4 DOCS_UPDATE — 공식 문서만 변경 (3개)

#### B.4.1 [DOCS_UPDATE] Remote Control 세션 이름 prefix 옵션
- `--remote-control-session-name-prefix` 플래그 + `CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX` 환경변수

#### B.4.2 [DOCS_UPDATE] Claude Code on the Web — Default Allowed Domains
- 공식 문서에 기본 허용 도메인 50+개 목록 추가 (npm, PyPI, Docker, GitHub, AWS, GCP, Azure 등)

#### B.4.3 [DOCS_UPDATE] Plugin Marketplace + 배포 가이드
- 플러그인 개발·배포 상세 문서화 — Marketplace 등록, LSP 서버, MCP 통합

---

### B.5 DEPRECATED — 제거된 명령어

#### B.5.1 [DEPRECATED] `/tag` 제거
- **출처**: [공식] v2.1.92 (2026-04-04)
- ebook의 `reference/all-commands.md`에서 제거 필요

#### B.5.2 [DEPRECATED] `/vim` 제거
- **출처**: [공식] v2.1.92 (2026-04-04)
- ebook의 `reference/all-commands.md`에서 제거 필요

---

## Part C — 커뮤니티 조사 (Reddit [R], X [x])

> 완료일: 2026-04-08 / 출처 27개 항목 / 조사 기간: 2026-02 ~ 2026-04

### C.1 핵심 테마 3가지
1. **신규 기능 환영** — Agent Teams, git worktree, /btw, /loop 등 최근 기능에 대한 강한 긍정 반응
2. **요금 소진 사태** (2026-04-01) — Anthropic 공식 인정, 조사 중 (v2.1.34 이전 캐시 무효화 버그)
3. **소스코드 유출 사태** (2026-03-31) — npm v2.1.88에 59.8MB 소스맵 포함, 512,000줄 공개 → KAIROS·ULTRAPLAN·Buddy 미공개 기능 발견

---

### C.2 팁 & 워크플로우 (ebook 반영 후보)

#### C.2.1 [R] CLAUDE.md 3단계 계층 구조
- **출처**: [R] https://medium.com/@mkare/taming-claude-code-a-guide-to-claude-md-and-hooks-ed059879991c
- **작성자**: Mustafa Morbel, 2026-03-16
- **요약**: 3레이어 분리 — `~/.claude/CLAUDE.md`(개인 전역), `./CLAUDE.md`(팀 공유, git 커밋), `./CLAUDE.local.md`(개인 머신별, gitignore). 하위 디렉토리의 CLAUDE.md는 해당 디렉토리 작업 시만 로드
- **인용**: "Explain the *why* behind rules, not just the *what*."
- **ebook 반영**: `config/claude-md.md` — 3단계 계층 표 추가

#### C.2.2 [x] `#` 단축키 = DEPRECATED ⚠️
- **출처**: [x] Boris Cherny Threads + GitHub Issue #14868
- **중요**: 과거 `#`로 즉석 CLAUDE.md 저장 기능 → **deprecated**, 대화형 메모리 업데이트로 대체
- **ebook 반영**: 주의 — ebook에 이 기능 쓰지 말 것. 혹시 언급 있으면 제거

#### C.2.3 [R] Hooks = 강제 / CLAUDE.md = 권고 (명확 구분)
- **출처**: [R] 같은 Medium 글
- **요약**: CLAUDE.md는 Claude가 무시할 수 있는 권고, Hooks는 반드시 실행되는 결정론적 규칙. 3대 필수 Hook: `block-dangerous-commands.js`, `protect-secrets.js`, `auto-stage.js`
- **ebook 반영**: `config/hooks-intro.md` — 이 구분 명시

#### C.2.4 [R] MCP 배열 파라미터 버그 (공식 문서에 없음)
- **출처**: [R] https://medium.com/@martin_50671/...
- **작성자**: Martin Garramon, 2026-03-11
- **요약**: MCP 도구가 `list[str]` 같은 배열 타입 사용 시 silently dropped — Claude Code는 string/integer/boolean만 지원
- **인용**: "Tools with array-type parameters are silently dropped entirely."
- **ebook 반영**: `config/mcp-setup.md` — 주의사항 섹션 추가

#### C.2.5 [R] 권한 와일드카드 설정으로 중단 없는 워크플로우
- **출처**: [R] https://rajiv.com/blog/2026/03/31/...
- **요약**: 3단계 권한 계층(User > Project > Local). Read/Write/Edit `*` 허용, `Bash(git:*)` 패턴, MCP는 `mcp__*__*` 와일드카드. 되돌릴 수 없는 작업만 프롬프트 유지
- **인용**: "Allow read-only and reversible operations; gate irreversible and externally-visible ones."
- **ebook 반영**: `config/permissions-guide.md` 보강

#### C.2.6 [R] MCP Tool Search 토큰 46.9% 감소
- **출처**: [R] https://www.morphllm.com/claude-code-reddit
- **요약**: MCP 4개 서버 연결 시 첫 프롬프트 전 67,000토큰 소비 → Tool Search로 51K → 8.5K 감소
- **ebook 반영**: `tips/token-saving.md` — MCP vs CLI 선택 기준

#### C.2.7 [x] git worktree 내장 (v2.1.49, 2026-02-19)
- **출처**: [x] Boris Cherny Threads
- **요약**: `claude --worktree feature-auth` 격리 실행, `.claude/worktrees/{name}/` 자동 생성, 종료 시 변경 없으면 자동 정리. 팀 내부 18% 처리량 향상
- **인용**: "Now, agents can run in parallel without interfering with one another."
- **ebook 반영**: `advanced/worktrees.md` — 이미 있음, 검증 필요

#### C.2.8 [R] Agent Teams 30가지 실전 팁
- **출처**: [R] https://getpushtoprod.substack.com/p/30-tips-for-claude-code-agent-teams
- **작성자**: John Kim, 2026-03-21
- **핵심**: (1) 팀원 3~5명 최적 (2) 같은 파일 동시 편집 금지 → 도메인별 분리 (3) 첫 작업은 읽기 전용 (4) 팀원당 5~6개 작업 최대 (5) 리드가 코딩하면 즉시 위임 지시 (6) `Ctrl+T`로 공유 태스크 (7) `teammate_idle`/`task_complete` hook
- **ebook 반영**: `advanced/agent-teams.md` — "실전 체크리스트" 박스

#### C.2.9 [x] /btw 명령어 공식 공개 (v2.1.72)
- **출처**: [x] Thariq Shihipar @trq212 (2.2M 뷰)
- **일자**: 2026-03-11
- **요약**: `/btw 질문` = 사이드체인 대화, 메인 기록에 안 남김, 토큰 최대 50% 절감
- **인용**: "It lets you inject a question while Claude is actively working, without adding that question to the conversation history."
- **ebook 반영**: `commands/special-commands.md` + `tips/useful-tips.md` 또는 `tips/btw-side-questions.md` (이미 있음 — 검증 필요)

#### C.2.10 [R] /btw + /fork + /rewind 컨텍스트 위생 3종 세트
- **출처**: [R] https://medium.com/@richardhightower/...
- **요약**:
  - `/btw` — 사이드 질문, 기록 안 남김
  - `/fork` — 현재 컨텍스트 복제해 다른 접근법 실험
  - `/rewind` — Esc 두 번, 코드만/대화만/전체 되감기 선택. 매 프롬프트마다 자동 체크포인트
- **ebook 반영**: `tips/btw-side-questions.md` 확장 또는 신규 "컨텍스트 위생" 섹션

#### C.2.11 [R] /loop 실전 가이드
- **출처**: [R] https://betterstack.com/community/guides/ai/claude-code-loop/
- **요약**: 세션 내 cron. 문법 `/loop [간격] [프롬프트]`, 최소 1분. **3일 후 자동 만료**(무한 API 호출 방지), 터미널 종료 시 중단. 장기 자동화는 Scheduled Tasks. Haiku 모델 지정해 비용 절감
- **ebook 반영**: `commands/special-commands.md` — /loop 전용 섹션

#### C.2.12 [R] Gemini CLI를 Claude Code의 서브에이전트로
- **출처**: [R] https://github.com/ykdojo/claude-code-tips
- **요약**: WebFetch가 막힌 사이트는 Gemini CLI로 우회, 대규모 코드베이스 분석도 Gemini 1M 컨텍스트로 위임 후 요약만 받기
- **ebook 반영**: `advanced/` 또는 `tips/` — "멀티 AI 조합" 섹션

#### C.2.13 [R] Playwright MCP vs CLI — 4배 토큰 차이
- **출처**: [R] https://toolradar.com/blog/best-mcp-servers-claude-code
- **요약**: Playwright MCP 114,000 토큰 vs CLI 27,000 토큰. stateful(로그인 세션 유지)일 때만 MCP
- **ebook 반영**: `config/mcp-setup.md` — 선택 기준

#### C.2.14 [R] /batch — 다중 파일 병렬 작업 (v2.1.63)
- **출처**: [R] https://claudefa.st/blog/guide/changelog
- **요약**: worktree 격리 에이전트 자동 스폰, 대규모 마이그레이션에 효과적
- **ebook 반영**: `advanced/` 또는 `commands/special-commands.md`

---

### C.3 권위 있는 인용 (ebook 서두/마무리)

#### C.3.1 [x] Simon Willison — Skills > MCP 예측
- **출처**: [x] https://simonw.substack.com/p/claude-skills-are-awesome-maybe-a
- **인용**: "A Cambrian explosion in Skills will make this year's MCP rush look pedestrian by comparison."
- **번역**: "Skills의 캄브리아기 폭발이 올해의 MCP 러시를 초라하게 만들 것"
- **ebook 반영**: `config/skills-guide.md` 서두 — 권위자 인용

#### C.3.2 [x] Boris Cherny (창시자) — "Shoot and forget"
- **출처**: [x] @bcherny
- **인용**: "There is no one correct way to use Claude Code — it's intentionally built in a way that you can use it, customize it, and hack it however you like."
- **번역**: "정해진 정답은 없다 — 자신만의 방식으로 쓰면 된다"
- **핵심 철학**: CLAUDE.md는 ~2,500토큰(100줄) 유지, 동시 10~15세션, PR 최종 결과물로 평가, 반복 과정은 에이전트에게 위임
- **ebook 반영**: `intro/` 서두 또는 `next/roadmap.md` 마무리 — 심리적 여유 제공

---

### C.4 반응 & 현황 (사용자가 알아야 할 것들)

#### C.4.1 [R] 요금 소진 사태 (2026-04-01) — Anthropic 공식 인정
- **출처**: [R] https://www.devclass.com/ai-ml/2026/04/01/...
- **내용**: Max 5x($100/월) 1시간만에 소진, Pro 12개 프롬프트 소진 사례. 원인: (1) 3/28 2x 프로모션 종료 (2) 피크타임 쿼터 축소 (3) 캐시 무효화 버그 2개(비용 10~20배). 일부 사용자 v2.1.34 다운그레이드 후 개선
- **인용**: "people are hitting usage limits in Claude Code way faster than expected. We're actively investigating."
- **⚠️ 주의**: 조사 시점(2026-04-08)에 공식 수정 패치 **미발표**
- **ebook 반영**: `tips/token-saving.md` 또는 `tips/faq.md` — 현실적 플랜별 사용량 설명

#### C.4.2 [R] 피크타임 회피 전략
- **출처**: [R] https://www.roborhythms.com/claude-code-rate-limit-draining-march-2026/
- **내용**: 2026-03-26부터 수요 기반 동적 한도 소진 조정. 피크: 평일 오전 8시~오후 2시 동부시간 (한국 시간 기준 오후 9시~익일 오전 3시) → **한국은 오히려 낮 시간대가 유리**
- **⚠️ 주의**: 커뮤니티 역공학, 공식 명시 없음 — `[추정]`
- **ebook 반영**: `tips/token-saving.md`

#### C.4.3 [R] 1M 컨텍스트 일반 출시 환영 (2026-03-13) — HN 1위
- **출처**: [R] https://claudefa.st/blog/guide/mechanics/1m-context-ga
- **내용**: HN 1,100+ 포인트. Opus 4.6 + Sonnet 4.6. 동일 요금. GPT-5.4가 272K 초과 시 2배 요금 받는 것과 대비
- **⚠️ 공식과 상충 확인 필요**: 공식 리서치는 "Max/Team/Enterprise만"이라고 했으나 커뮤니티는 "일반 출시, 추가 요금 없음"으로 기재. 양쪽 표기 검토 필요
- **인용**: "A 900K-token request is now billed at the same per-token rate as a 9K one — no surcharges."
- **ebook 반영**: `advanced/` 신규 또는 `intro/claude-ecosystem.md`

#### C.4.4 [R] Voice Mode push-to-talk (2026-03)
- **출처**: [R] https://www.stack-junkie.com/blog/claude-code-voice-mode
- **내용**: `/voice` 활성화, 스페이스바 hold-to-talk 방식 (의도적), r/ClaudeAI 825 upvote
- **ebook 반영**: `advanced/voice-fast.md` — 이미 있음, push-to-talk 방식 + 언어 20개 업데이트

#### C.4.5 [R] Computer Use Pro/Max (2026-03-23)
- **출처**: [R] https://support.claude.com/en/articles/14128542-...
- **내용**: Claude Code + Cowork Desktop에서 화면 클릭·타이핑·앱 실행 가능. Pro/Max, Research Preview, "아직 불안정" 반응
- **ebook 반영**: `cowork/cowork-desktop-control.md` — 재검증

#### C.4.6 [R] Claude Code vs Cursor vs Windsurf — "목적별 조합" 합의
- **출처**: [R] https://dev.to/pockit_tools/...
- **요약**: Claude Code 정확도 SWE-bench 80.8% vs Cursor ~65%, Cursor 코드베이스 탐색/속도 우위, Copilot 보일러플레이트. **하나만 쓰지 말고 용도별 조합**
- **인용**: "Copilot is a better typist, Cursor is a better explorer, Claude Code is a better collaborator."
- **ebook 반영**: `intro/do-i-need-this.md` 또는 `intro/claude-ecosystem.md`

---

### C.5 숨은 기능 & 미래 기능

#### C.5.1 [R][x] 소스코드 유출 사태 (2026-03-31)
- **출처**: [R] https://read.engineerscodex.com/p/diving-into-claude-codes-source-code
- **내용**: npm v2.1.88에 cli.js.map(59.8MB) 포함 → 512,000줄 TypeScript 공개. 44개 feature flag 중 20개+ 비활성 미공개 기능 발견
- **⚠️ 민감 주제**: ebook에 사건 자체는 가볍게 언급, 대신 "공개된 미래 기능" 예고편 위주로 다룰 것

#### C.5.2 [R] Claude Buddy `/buddy` 18종 타마고치
- **출처**: [R] https://claudefa.st/blog/guide/mechanics/claude-buddy
- **내용**: 18종(오리, 고양이, 토끼, 드래곤, 카피바라...), userId 해시 결정론적, 5스탯(DEBUGGING/PATIENCE/CHAOS/WISDOM/SNARK), 5등급 레어도, Shiny 1%
- **ebook 반영**: `tips/buddy.md` 이미 있음 — ✅ 최신 상태

#### C.5.3 [R] KAIROS — 백그라운드 유휴 데몬 [추정]
- **출처**: [R] https://wavespeed.ai/blog/posts/claude-code-leaked-source-hidden-features/
- **내용**: 유휴 시간에 `autoDream` 프로세스로 야간 메모리 통합, 여러 관찰 → 검증된 인사이트로 변환
- **⚠️ 공식 확인 없음**: 외부 빌드 비활성, "5월 2026 출시" 내부 주석 기반 — `[추정]`
- **ebook 반영**: `next/roadmap.md` — "다음에 올 것" 섹션

#### C.5.4 [R] ULTRAPLAN [공식 문서화됨]
- **출처**: [R] 커뮤니티 분석 + **[공식] https://code.claude.com/docs/en/ultraplan**
- **⚠️ 업데이트**: 공식 리서치에서 이미 B.1.7에 `/ultraplan` 공식 문서 확인됨 — 이제 research preview 상태로 공식 공개. v2.1.91+ 필수
- **ebook 반영**: `advanced/` 신규 파일로

---

### C.6 `/permissions`, `/batch`, `/simplify`, `/teleport` 등 미언급 신규 명령어 정리

커뮤니티에서 언급된, 기존 ebook에 **없거나 불완전한** 명령어들:
- `/btw` — 사이드체인 질문
- `/fork` — 컨텍스트 복제
- `/rewind` — Esc×2 체크포인트 복원
- `/batch` — 병렬 다중 파일 작업
- `/loop` — 세션 내 반복 (3일 만료)
- `/powerup` — 인터랙티브 레슨
- `/release-notes` (인터랙티브)
- `/cost` (상세 분석)
- `/ultraplan` — 클라우드 플랜
- `/voice` — push-to-talk
- `/buddy` (이미 있음)
- `/teleport` — ULTRAPLAN 플랜 귀환 [추정]

---

### C.7 ⚠️ 신뢰도 주의 플래그 (ebook 작성 시 반드시 표시)

| 항목 | 신뢰도 | 표기 |
|---|---|---|
| KAIROS | 유출 기반, 공식 미확인 | `[추정]` 명시 |
| 피크타임 한국시간 환산 | 커뮤니티 역공학 | `[커뮤니티 추정]` |
| `#` 단축키 | Deprecated (GitHub Issue #14868) | **사용 금지** |
| v2.1.34 다운그레이드 효과 | 일부 사용자 보고 | `[일부 사용자]` |
| 요금 버그 수정 여부 | 조사 시점(2026-04-08) 미발표 | "조사 중" |
| Opus 4.6 1M 플랜 제한 | 공식/커뮤니티 상충 | **양쪽 소스 확인 후 기재** |
| ULTRAPLAN | 공식 문서화 완료 | 공식 링크 사용 |

---

## Part D — 기존 Ebook 스타일·원칙 (반드시 적용)

> 출처: `~/.claude/projects/-Users-mylee/memory/feedback_ebook-writing-style.md`, `feedback_examples-and-metaphors.md`, `project_claudecode-intro-ebook.md`, CLAUDE.md

### D.1 타겟 & 수준
- **40~60대 비개발자 왕초보**
- **초등 5학년 수준** 가독성 — 대표님 "사랑스럽다" 검증 통과한 기준
- "너만 알게 설명하냐" 느낌 절대 금지

### D.2 톤 & 문체
- 존댓말 + 친근한 대화체
- "하면 됩니다" > "해야 합니다"
- 짧은 문장, 한 문장 한 정보
- 구어체 끝맺음 OK ("~이에요", "~거예요!")

### D.3 비유 필수 (빠지면 미완성 판정)
- 일상생활 비유: 비서, 리모컨, 카카오톡, 인테리어 전문가, 미용실, 식당 사장님, 방 청소
- 추상 개념 직후 → "예를 들어볼게요" / "비유를 하나 들면"
- **검증 기준**: 50대 독자가 비유만 봐도 핵심 이해 가능한가?

### D.4 전문용어 처리
- 어려운 말 → 쉬운 말 먼저
  - 토큰 = 글자 수 / PR = 코드 수정 요청 / 리포지터리 = 코드 저장 폴더

### D.5 Mac/Windows 항상 병기
- Mac(bash/터미널) + Windows(PowerShell) **둘 다**
- `~` 의미도 풀어서: Mac `/Users/내이름` / Windows `C:\Users\내이름`

### D.6 시각 구조
- **비교표**: A vs B vs C 있을 땐 반드시 표로
- **Bad/Good 예시**: "이렇게 하면 안 돼요 / 이렇게 하면 돼요"
- **Q&A 형식**: 빠른 스캔 가능
- **시각 요소가 텍스트 나열이면 재작업** — 무조건

### D.7 문서 구조 템플릿
```
1. 제목 + 친근한 질문 ("~가 뭔가요?")
2. 한 줄 비유 or 일상 예시
3. 본문 (Mac/Win 병기, 비유 곳곳)
4. 실전 예시 2~3개
5. "## 다음 단계" — 관련 페이지 링크
```

### D.8 프론트매터 표준
```yaml
---
title: "페이지 제목"
description: "한 줄 설명"
tags: ["태그1", "태그2"]
category: "카테고리슬러그"
order: 숫자
lastUpdated: "2026-04-08"
---
```

### D.9 구매자 시각 체크
- "내가 이걸 돈 주고 사겠는가?" 자문
- 40~60대가 첫 페이지만 봐도 "우수하다" 판단 가능해야

---

## Part E — 기술적 개선사항 (렌더링 시스템)

### E.1 현재 문제
- `src/lib/docs.ts`의 `DocMeta` 인터페이스에 `lastUpdated` 필드 없음
- `src/app/docs/[category]/[slug]/page.tsx`에서 `lastUpdated` 표시 안 함
- 각 MD 파일 본문에 수동으로 `> 📅 최종 업데이트: ...` 적어놓은 상태 — 수동 관리 비효율

### E.2 개선 방향
1. `DocMeta` 인터페이스에 `lastUpdated?: string` 추가
2. `getDoc()` / `getDocsByCategory()`에서 해당 필드 파싱·반환
3. `page.tsx` 헤더 영역에 "📅 최종 업데이트: 2026년 4월 8일" 뱃지 자동 표시 (CSS로 구분)
4. 각 MD 파일 본문의 수동 줄(`> 📅 최종 업데이트:`) 제거
5. 누락 4개 파일에 `lastUpdated` 필드 추가

---

## Part F — 출처 원본 링크 모음

### Anthropic 공식
- https://code.claude.com/docs/en/changelog
- https://code.claude.com/docs/en/
- https://code.claude.com/docs/en/claude-code-on-the-web
- https://code.claude.com/docs/en/remote-control
- https://code.claude.com/docs/en/desktop-scheduled-tasks
- https://code.claude.com/docs/en/create-plugins
- https://code.claude.com/docs/en/agent-teams
- https://code.claude.com/docs/en/ultraplan
- https://github.com/anthropics/claude-code/releases
- https://claude.com/blog/dispatch-and-computer-use

---

## Part G — 2026-04-09~13 업데이트 (Post v2.1.94)

> 조사일: 2026-04-13
> 목적: v2.1.94 이후 ~ v2.1.101까지 변경사항 + 에코시스템 발표 반영

### G.1 에코시스템 주요 발표

#### G.1.1 [공식] Claude Cowork GA (2026-04-09)
- **출처**: https://support.claude.com/en/articles/12138966-release-notes
- **내용**: macOS + Windows에서 정식 출시(General Availability). 더 이상 Research Preview가 아님
- **엔터프라이즈 6대 기능**: RBAC(Okta/Azure AD 연동), 그룹별 지출 한도, 확장 사용 분석(Analytics API), OpenTelemetry 감사 로그, Zoom MCP 커넥터, 도구별 커넥터 제어
- **초보자 관련도**: **HIGH** — cowork 6개 파일 "리서치 프리뷰" 제거 필수
- **반영**: cowork-intro, getting-started, desktop-control, dispatch, connectors, scheduled

#### G.1.2 [공식] Advisor Tool 공개 베타 (2026-04-09)
- **출처**: https://platform.claude.com/docs/en/release-notes/overview
- **내용**: Sonnet(실행) + Opus(전략 조언) 쌍. Executor가 막히면 Advisor에게 질의. Advisor 단독 품질 + Executor 비용
- **Beta 헤더**: `advisor-tool-2026-03-01`
- **초보자 관련도**: MEDIUM — 간략 언급 정도
- **반영**: special-commands에 간략 언급

#### G.1.3 [공식] Managed Agents 공개 베타 (2026-04-08)
- **출처**: https://platform.claude.com/docs/en/release-notes/overview
- **내용**: 클라우드 호스팅 에이전트 하네스. $0.08/session-hour
- **초보자 관련도**: LOW — 개발자 API 전용
- **반영**: 스킵

#### G.1.4 [공식] `ant` CLI (2026-04-08)
- **출처**: https://platform.claude.com/docs/en/release-notes/overview
- **내용**: Claude API 전용 CLI 클라이언트, YAML 리소스 관리
- **초보자 관련도**: LOW — 개발자 전용
- **반영**: 스킵

#### G.1.5 [공식] Claude Mythos Preview (2026-04-07)
- **출처**: https://platform.claude.com/docs/en/release-notes/overview
- **내용**: 방어적 사이버보안 전용 연구 프리뷰, 초대 전용
- **초보자 관련도**: LOW
- **반영**: 스킵

### G.2 Claude Code 버전 업데이트

#### G.2.1 [공식] v2.1.101 (2026-04-10)
- `/team-onboarding`: 현재 사용 패턴 기반 팀원 온보딩 가이드 자동 생성
- OS CA 인증서 스토어 기본 신뢰 (기업 TLS 프록시 설정 불필요)
- MCP 대형 결과: 50K chars 초과 시 파일로 자동 저장
- `claude -p --resume <name>`: 세션 이름으로 이동 가능
- **초보자 반영**: `/team-onboarding` → all-commands + special-commands

#### G.2.2 [공식] v2.1.98 (2026-04-초)
- Google Vertex AI 대화형 설정 위저드
- Monitor 도구: 백그라운드 스크립트 이벤트 스트리밍
- Linux PID 네임스페이스 격리 (`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB`)
- Perforce 모드 (`CLAUDE_CODE_PERFORCE_MODE`)
- `--exclude-dynamic-system-prompt-sections` 플래그
- **초보자 반영**: 전부 LOW → 스킵

#### G.2.3 [공식] v2.1.97 (2026-04-09)
- **Focus View (Ctrl+O)**: NO_FLICKER 모드에서 프롬프트·최종 응답만 표시
- **/agents 탭 분리**: Running 탭(실시간) + Library 탭(에이전트 타입)
- refreshInterval 상태바 설정
- MCP HTTP/SSE 버퍼 누수 수정
- **초보자 반영**: Focus View → keyboard-shortcuts + understanding-ui / /agents → all-commands + agent-teams

#### G.2.4 [공식] v2.1.94 (2026-04-07)
- **기본 Effort 레벨 medium → high 상향** (API-key, Bedrock/Vertex/Foundry, Team, Enterprise)
- Amazon Bedrock powered by Mantle 지원
- Slack MCP 커스텀 헤더
- **초보자 반영**: effort 기본값 → all-commands, special-commands, understanding-ui, settings-json, faq

### G.3 반영 우선순위 정리

| 우선순위 | 항목 | 파일 수 |
|---------|------|--------|
| **HIGH** | Cowork GA "리서치 프리뷰" 제거 | 6 |
| **HIGH** | effort 기본값 high 갱신 | 5~6 |
| **HIGH** | Focus View (Ctrl+O) 추가 | 2~3 |
| MEDIUM | /team-onboarding 추가 | 3 |
| MEDIUM | /agents Running+Library 탭 | 2 |
| MEDIUM | Advisor Tool 간략 언급 | 1 |
| LOW | MCP 50K 자동 파일 | 1 |
| LOW | Cowork 엔터프라이즈 6기능 | 1 |

### G.4 추가 출처

- https://support.claude.com/en/articles/12138966-release-notes (Cowork GA)
- https://platform.claude.com/docs/en/release-notes/overview (Managed Agents, Advisor, ant CLI, Mythos)
- https://releasebot.io/updates/anthropic/claude-code (v2.1.94~101 추적)
- https://claudefa.st/blog/guide/changelog (커뮤니티 분석)
