# Plan — 2026-04-16 공식 문서 전수 반영 업데이트

**상태**: [DRAFT]
**날짜**: 2026-04-16
**근거**: code.claude.com 공식 문서 + changelog v2.1.71~v2.1.110 전수 조사

---

## 0. 목적

공식 Claude Code 문서(code.claude.com)의 2026-04-16 기준 전체 변경사항을 ebook에 반영.
설치 문서 현행화 + 신규 기능 페이지 추가 + 기존 참고 문서 보강.

### 불변 원칙
- 40~60대 왕초보 톤 (초5 + 비유 + 표)
- Mac/Windows 병기
- 출처 태그: `[공식]` `[R]` `[추정]`
- 모든 수정 파일 `lastUpdated: "2026-04-16"`

---

## Phase 1: 설치 문서 현행화 (3파일 수정)

### 1-1. `setup/install-claude-code.md`
- Windows PowerShell 네이티브 추가: `irm https://claude.ai/install.ps1 | iex`
- Windows CMD 추가: `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`
- Homebrew 추가: `brew install --cask claude-code` (stable + @latest 채널)
- `choco install` 제거 (공식 미지원)
- 자동 업데이트(네이티브) vs 수동 업데이트(Homebrew/WinGet) 차이 설명
- Google Vertex AI 마법사 추가 (v2.1.98)
- Microsoft Foundry 공급자 언급

### 1-2. `setup/install-desktop.md`
- App Store/Microsoft Store → 직접 다운로드 메인으로 변경
- 공식 URL: `claude.ai/download`
- Windows ARM64 별도 언급
- 앱 이름: "Claude Code.app" → "Claude"
- Code 탭 진입 설명 보강

### 1-3. `setup/install-ide.md`
- VS Code CLI 설치 추가: `code --install-extension anthropic.claude-code`
- Cursor: "기본 내장" → 마켓플레이스에서 Claude Code 확장 설치로 정정
- Antigravity: Claude Code와 별개 도구임 명확화

---

## Phase 2: 기존 참고 문서 보강 (4파일 수정)

### 2-1. `commands/commands-overview.md` — 신규 슬래시 명령어 13개
`/tui`, `/focus`, `/recap`, `/loop`, `/effort`, `/color`, `/context`, `/powerup`, `/team-onboarding`, `/chrome`, `/rename`, `/plugin`, `/release-notes`

### 2-2. `reference/all-cli-flags.md` — 신규 플래그 13개
`--chrome`, `--channels`, `--bare`, `--teleport`, `--remote`, `--remote-control`, `--teammate-mode`, `--tmux`, `--effort`, `--name/-n`, `--fallback-model`, `--from-pr`, `--enable-auto-mode`

### 2-3. `reference/keyboard-shortcuts.md` — 신규 단축키 8개
`Ctrl+O`(트랜스크립트/포커스), `Ctrl+T`(작업목록), `Ctrl+B`(백그라운드), `Alt+P`(모델전환), `Alt+T`(확장사고), `Alt+O`(빠른모드), `/`(검색), `Ctrl+R`(역검색)

### 2-4. `next/roadmap.md` — 문서 사이트 이전 + 최신 상태 반영
- docs.anthropic.com → code.claude.com 이전 안내

---

## Phase 3: 신규 가이드 6개 추가

### 3-1. `advanced/channels.md` — 채널 (Telegram/Discord/iMessage)
- 개념: 외부 메시지 → 실행 중인 세션에 푸시
- Telegram 봇 설정 + 페어링 (BotFather → /plugin install → --channels)
- Discord 봇 설정 + 페어링
- iMessage (Mac 전용, Full Disk Access)
- 보안: 발신자 허용 목록
- research preview 상태 명시
- 비유: "세션 = 사무실, 채널 = 우체통 — 밖에서 편지가 들어오면 AI가 바로 처리"

### 3-2. `advanced/chrome-extension.md` — Chrome 브라우저 연동
- 개념: 코드 작성 → 브라우저 테스트 한 흐름
- 설치: Chrome 확장(claude-in-chrome) + `--chrome` 또는 `/chrome`
- 활용: 라이브 디버깅, 디자인 검증, 웹 앱 테스트, 폼 자동화, 데이터 추출, GIF 녹화
- 제한: Chrome/Edge만, WSL 미지원, beta 상태
- 비유: "코드 의사가 환자(웹사이트)를 직접 진찰하러 가는 것"

### 3-3. `advanced/slack-integration.md` — Slack 연동
- @Claude 멘션 → Claude Code 웹 세션 자동 생성
- 설정: Claude 앱 설치 → 계정 연결 → GitHub 연결
- 라우팅 모드: Code only / Code + Chat
- PR 생성, 세션 이어하기
- 비유: "팀 카톡방에서 @비서님 하면 비서가 알아서 일하고 결과 보고"

### 3-4. `commands/new-commands-apr2026.md` — 2026 4월 신규 명령어 총정리
- 13개 신규 명령어 각각: 한줄 설명 + 비유 + 실전 예시
- 표: 명령어 | 한마디 설명 | 언제 쓰면 좋을까
- 난이도별 분류: 왕초보용 / 중급용 / 고급용

### 3-5. `tips/teleport-remote.md` — 어디서나 이어하기 (모바일/웹↔로컬)
- `--teleport`: 웹→로컬 세션 가져오기
- `--remote-control`: 모바일에서 세션 조종
- `/desktop`: 터미널→Desktop 핸드오프
- Dispatch: 폰→컴퓨터 지시
- 비유: "작업을 USB에 담아 다른 컴퓨터로 옮기는 느낌 — 근데 자동"

### 3-6. `reference/docs-site-moved.md` — 공식 문서 사이트 이전 안내
- docs.anthropic.com → code.claude.com/docs
- 북마크 갱신 안내
- 간단한 페이지 (200줄 이하)

---

## Phase 4: 전체 치환 + 빌드

- `docs.anthropic.com` → `code.claude.com/docs` grep 치환
- 홈페이지 카운터: "90편" → 실제 개수로 갱신
- `npm run build` 에러 0 확인
- 로컬 프리뷰 확인

---

## 팀 구성

| 역할 | 에이전트 타입 | 담당 |
|------|-------------|------|
| **writer** | `technical-writer` | Phase 1~3 전체 콘텐츠 작성 |
| **critic** | `code-reviewer` | 공식 문서 대조 팩트체크 + 왕초보 톤 검증 |

### 워크플로우
```
writer → Phase 1(설치 3파일) → critic 검증
→ writer → Phase 2(참고 4파일) → critic 검증
→ writer → Phase 3(신규 6파일) → critic 검증
→ 오케스트레이터 → Phase 4 치환 + 빌드 + 최종 QA
→ 대표님 보고
```

---

## 산출물 예상
- 수정: 7개 파일
- 신규: 6개 파일
- 총 13개 파일, 약 3,000~4,000줄 추가/변경

---

## QA 셀프체크
- [ ] `npm run build` 에러 0
- [ ] 모든 파일 `lastUpdated: "2026-04-16"`
- [ ] 각 페이지 비유 최소 1개
- [ ] Mac/Windows 병기
- [ ] 출처 태그 준수
- [ ] beta/research preview 상태 명시
- [ ] "돈 주고 사겠는가?" 검증
- [ ] Vercel 배포 확인

---

## 승인

**상태**: [APPROVED] — 2026-04-16 대표님 승인
