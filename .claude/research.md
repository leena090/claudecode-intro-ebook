# Research — Claude Code 입문 Ebook 업데이트 (2026-04-13)

> 조사일: 2026-04-13
> 조사자: Claude Opus 4.6 + deep-research-agent + Explore 에이전트
> 목적: Cowork 설정 가이드 신규 추가 + MCP/플러그인/스킬 콘텐츠 보강

---

## 출처 태그 범례

| 태그 | 의미 |
|---|---|
| **[공식]** | Anthropic 공식 문서 / GitHub / 블로그 |
| **[R]** | Reddit 커뮤니티 |
| **[스크린샷]** | 대표님 직접 캡처 (2026-04-13) |

---

## Part A — 기존 Ebook 콘텐츠 현황

### cowork/ (7파일)
1. `cowork-intro.md` — 코워크란? 3탭 구조, 핵심 기능 소개
2. `cowork-getting-started.md` — 설치/권한/첫 실행
3. `cowork-desktop-control.md` — Computer Use, 화면 제어
4. `cowork-dispatch.md` — 모바일→데스크톱 원격 제어
5. `cowork-scheduled.md` — 예약 작업 설정
6. `cowork-office.md` — 엑셀/한글/PPT 자동화 실전
7. `cowork-connectors.md` — 외부 서비스 연결 (Google, M365)

### setup/ (6파일) — ⚠️ 코워크 셋업 없음
1. `prerequisites.md` — 설치 전 체크리스트
2. `install-nodejs.md` — Node.js 설치
3. `install-claude-code.md` — Claude Code 설치
4. `first-run.md` — 첫 실행 & 로그인
5. `install-desktop.md` — Desktop 앱 설치
6. `install-ide.md` — VS Code/IDE 연동

### config/ (7파일) — MCP/스킬 가이드 존재
1. `claude-md.md` — CLAUDE.md 작성
2. `settings-json.md` — settings.json 설정
3. `permissions-guide.md` — 권한 시스템
4. `hooks-intro.md` — Hooks 자동화
5. **`mcp-setup.md`** — MCP 서버 연결 (14KB, 상세) ⭐
6. **`skills-guide.md`** — 스킬 시스템 ⭐
7. `keybindings.md` — 키보드 단축키

### advanced/ (13파일) — 플러그인/마켓플레이스 존재
- `plugins.md` — 플러그인 & 스킬 비교
- `plugin-marketplace.md` — 마켓플레이스 탐색
- 기타: agent-teams, git-workflow, worktrees, remote-control 등

---

## Part B — Cowork 최신 변경사항 (2026년 4월 기준)

### 출시 타임라인 [공식]

| 날짜 | 업데이트 |
|---|---|
| 2026-01-12 | Cowork 연구 프리뷰 (Max, macOS) |
| 2026-01-16 | Pro 플랜 확대 |
| 2026-01-30 | 플러그인 시스템 추가 |
| 2026-02-10 | Windows 지원 |
| 2026-02-24 | 12개 신규 커넥터 + 10개 부서별 플러그인 |
| 2026-02-25 | 스케줄 태스크 |
| 2026-03-09 | Microsoft Copilot 파트너십 |
| 2026-03-17 | Dispatch + Projects |
| 2026-03-23 | Computer Use 연구 프리뷰 |
| 2026-04-09 | **GA 정식 출시** — 엔터프라이즈 6대 기능 |

### GA 엔터프라이즈 신기능 (2026-04-09) [공식]
1. RBAC (역할 기반 접근 제어) — Okta/Azure AD SCIM
2. 그룹 지출 한도 — 팀/부서별
3. 확장된 사용 분석 대시보드
4. OpenTelemetry 관찰성 — Splunk/Datadog 연동
5. Zoom MCP 커넥터
6. Per-tool Connector Controls — 커넥터별 읽기/쓰기 세밀 제어

### Cowork 3요소 구조 [스크린샷]
- **스킬 (Skills)** — 빌트인 작업 워크플로우
- **플러그인 (Plugins)** — 스킬 묶음, 직업별 추천 (Design, Engineering, Marketing 등)
- **커넥터 (Connectors)** — Gmail, Calendar, Drive 등 실제 도구 OAuth 연결

### `/setup-cowork` 온보딩 플로우 [스크린샷]
1. 직업 선택 (Product management / Engineering / Design / Marketing 등 14개)
2. 맞춤 플러그인 추천 (예: "Design 플러그인 — 7 skills")
3. Add 버튼으로 설치 → /스킬이름으로 실행
4. 우측 진행 상황 패널로 단계 추적

### Dispatch + Computer Use 결합 (신기능) [공식]
- 기존: 파일 작업 + 터미널 명령만
- 신규: 앱 열기, UI 탐색, 다단계 워크플로우
- 예: "이메일에서 경비 보고서 처리" → 앱 열고 데이터 입력까지

### Projects (프로젝트 기능) [공식]
- 프로젝트별 독립 컨텍스트
- 커스텀 지시사항, 파일, 스케줄 태스크 분리
- Dispatch와 결합 → 여러 프로젝트 동시 운영

---

## Part C — MCP 최신 현황

### 설정 파일 위치 [공식]
- Claude Desktop macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Claude Desktop Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Claude Code 전역: `~/.claude.json` (mcpServers 객체)
- Claude Code 프로젝트: `.mcp.json`

### 설정 방법 3가지 [공식]
1. **JSON 직접 편집** (고급) — claude_desktop_config.json에 서버 추가
2. **Desktop Extensions (.mcpb)** (초보 권장) — 더블클릭 원클릭 설치
3. **Claude Code CLI** — `claude mcp add` 명령어

### Desktop Extensions (.mcpb) — 핵심 신기능 [공식]
- .mcpb 파일 다운로드 → 더블클릭 → "Install"
- 모든 의존성 번들 포함 (Node.js 별도 설치 불필요)
- Settings > Extensions에서 관리
- 엔터프라이즈: 조직 내 커스텀 확장 배포

### MCP 생태계 현황 [공식]
- 공개 MCP 서버: 10,000개 이상
- SDK 월 다운로드: 9,700만 회
- 2025-12: Linux Foundation Agentic AI Foundation에 기증 (오픈 표준)
- 공식 Registry: registry.modelcontextprotocol.io

### 주요 MCP 서버 [공식]
**레퍼런스 (Anthropic 제공):**
- Filesystem, Git, Memory, Sequential Thinking, Fetch, Time

**개발:**
- GitHub, GitLab, Playwright, Browserbase

**생산성:**
- Notion (`https://mcp.notion.com/mcp`), Slack, Google Drive, Gmail, Calendar

**데이터베이스:**
- PostgreSQL, SQLite, Supabase

**클라우드:**
- AWS, Kubernetes, Docker, Cloudflare

**기업:**
- Linear, Atlassian (Jira/Confluence), Azure DevOps, Stripe

### MCP 서버 발견 방법 [공식]
1. registry.modelcontextprotocol.io (공식)
2. smithery.ai (최대 마켓플레이스)
3. github.com/punkpeye/awesome-mcp-servers
4. mcp.docker.com (Docker Desktop)

---

## Part D — 플러그인 시스템

### Claude Code 플러그인 [공식]
- `/plugin` 명령어 → 4개 탭: Discover / Installed / Marketplaces / Errors
- 설치: `/plugin install github-integration@claude-plugins-official`
- 서드파티: `/plugin marketplace add owner/github-repo`
- 플러그인 = 스킬 + MCP 서버 + 명령어 + 훅 + 에이전트 번들

### Claude Desktop 플러그인 (Cowork) [스크린샷]
- 부서별 사전 제작 (11개+): 마케팅, 영업, 운영, 법무, 재무, 디자인 등
- `/setup-cowork`에서 직업 선택 → 맞춤 추천
- Settings > Customize에서 통합 관리

---

## Part E — 빌트인 슬래시 명령어 (60개+) [공식]

### 세션 관리
/clear, /compact, /context, /rename, /resume, /branch, /export, /rewind

### 코드 리뷰
/simplify, /batch, /review, /security-review

### 계획
/plan, /effort

### 워크플로우
/loop, /schedule, /debug, /remote-control, /btw

### 메모리/설정
/init, /memory, /model, /fast, /output-style, /theme, /vim, /copy, /voice

### 진단
/login, /help, /doctor, /bug, /cost, /usage, /stats, /powerup, /insights

---

## Part F — 업데이트 필요 항목 정리

### 신규 추가 필요
1. **setup/setup-cowork.md** — `/setup-cowork` 온보딩 가이드 (스크린샷 기반)
2. **cowork/cowork-plugins.md** — 플러그인 설치/관리/추천
3. **cowork/cowork-projects.md** — 프로젝트 기능 (2026-03-17~)

### 업데이트 필요
4. **cowork/cowork-intro.md** — GA 반영, 3요소(스킬/플러그인/커넥터) 구조 추가
5. **cowork/cowork-dispatch.md** — Dispatch + Computer Use 결합 신기능
6. **cowork/cowork-connectors.md** — 50개+ 커넥터, Zoom MCP, per-tool controls
7. **config/mcp-setup.md** — Desktop Extensions (.mcpb), MCP Registry, 최신 서버 목록
8. **config/skills-guide.md** — 빌트인 명령어 60개+ 전수 목록, 프론트매터 설정

### 확인 필요
9. 기존 advanced/plugins.md, plugin-marketplace.md와 중복 정리
