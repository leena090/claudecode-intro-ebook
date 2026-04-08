# Plan — Claude Code 입문 Ebook 전면 업데이트 (2026-04-08)

> **상태**: `[APPROVED]` — 2026-04-08 대표님 승인 (기본값 7.1~7.5 적용)
> **최종 업데이트**: 2026-04-08
> **소요 예상**: 단일 세션 내 Phase 1 + Phase 2 완료 목표

### 승인된 기본값
- 7.1 신규 파일 2개 (ultraplan, one-million-context) — **승인**
- 7.2 Opus 4.6 1M: 공식 기준(Max/Team/Enterprise) + 커뮤니티 반응 병기 — **승인**
- 7.3 유출 사건 — **생략**
- 7.4 Phase 1 + Phase 2 전부 이번 세션 — **진행**
- 7.5 완료 후 로컬 빌드 → 대표님 확인 → git push — **진행**

---

## 0. 목적과 원칙

### 0.1 목적
1. `https://claudecode-intro-ebook.vercel.app/` 를 **오늘(2026-04-08) 기준 최신**으로 갱신
2. **모든 페이지에 "최종 업데이트" 자동 표시** (프론트매터 `lastUpdated` → 페이지 헤더 뱃지)
3. 기존 작성 원칙 **100% 준수** — 40~60대 초5 수준, 비유, Mac/Win 병기, 표, 비교

### 0.2 불변 원칙 (research.md Part D)
- **타겟**: 40~60대 비개발자 왕초보
- **가독성**: 초등 5학년 수준 ("사랑스럽다" 검증 기준 유지)
- **비유 필수**: 비서, 리모컨, 카카오톡, 미용실, 식당 사장님, 방 청소 등 일상 예시
- **전문용어**: 쉬운 말 먼저 (토큰 = 글자 수 / PR = 코드 수정 요청)
- **Mac/Windows 병기**: 명령어 예시는 항상 둘 다
- **표 활용**: A vs B vs C 있으면 무조건 비교표
- **Bad/Good 예시**: "이렇게 하면 안 돼요 / 이렇게 하면 돼요"
- **시각 요소**: 텍스트 나열만 있으면 재작업
- **구매자 시각**: "돈 주고 사겠는가?" 자문 후 통과해야 commit

### 0.3 출처 표기 규율
- `[공식]` — Anthropic 공식 (docs / GitHub / 블로그)
- `[R]` — Reddit 커뮤니티
- `[x]` — X (Twitter) 커뮤니티
- `[추정]` — 유출·역공학·미검증 정보
- 각 페이지 본문 or 각주에 출처 1~2개 링크 표시 (장문 url 숨기고 "출처" 텍스트)

### 0.4 Hard 규율
- 추측 금지 — 공식·커뮤니티 두 소스에서 모두 확인 불가면 기재 금지
- 공식과 커뮤니티 충돌 시 → 공식 우선, 커뮤니티는 "다만 ~라는 의견도 있어요" 식 병기
- 모든 변경 파일은 `lastUpdated: "2026-04-08"` 갱신
- 본문 상단 수동 `> 📅 최종 업데이트:` 줄은 **제거** (렌더링 시스템이 자동 표시)

---

## 1. 작업 구조 (3 Phase)

```
Phase 0: 렌더링 시스템 수정 (기술적 선행 작업)
Phase 1: 콘텐츠 고우선순위 업데이트 (필수, 이번 세션)
Phase 2: 콘텐츠 중·저우선순위 (선택, 시간 여유 시 이번 세션, 아니면 다음)
```

---

## 2. Phase 0 — 렌더링 시스템 (기술적 개선)

> 이 작업 없으면 "각 페이지 최종 업데이트 자동 표시" 요구사항이 충족되지 않음.

### 2.1 파일 수정 목록
| # | 파일 | 작업 |
|---|---|---|
| 1 | `src/lib/docs.ts` | `DocMeta` 인터페이스에 `lastUpdated?: string` 추가, `getDoc()`/`getDocsByCategory()`에서 파싱·반환 |
| 2 | `src/app/docs/[category]/[slug]/page.tsx` | 헤더 영역에 최종 업데이트 뱃지 렌더링 |
| 3 | `src/app/globals.css` 또는 `MarkdownBody.tsx` | 뱃지 스타일 (eg. `.last-updated-badge`) |

### 2.2 뱃지 디자인 (초안)
```
┌─────────────────────────┐
│ 📅 최종 업데이트 2026-04-08 │
└─────────────────────────┘
```
- 위치: 제목 + 설명 아래, 태그 위
- 색상: `var(--text-muted)` 톤
- 날짜 포맷: `YYYY년 MM월 DD일` (한국어)
- `lastUpdated` 없으면 뱃지 렌더 안 함 (fallback 안전)

### 2.3 본문 상단 수동 줄 제거 전략
- 모든 MD 파일의 `> 📅 최종 업데이트: 2026년 4월 X일` 줄 제거
- 제거 방식: 작업 대상 파일별로 Edit 도구 (일괄 `sed`보다 안전)
- Phase 1/2에서 각 파일 편집 시 같이 제거

### 2.4 빌드 검증
- `npm run build` 통과
- 로컬 `npm run dev`에서 뱃지 표시 확인 → 대표님 스크린샷 공유

---

## 3. Phase 1 — 고우선순위 콘텐츠 업데이트 (필수)

> 공식 [공식] 소스 기반 필수 갱신. 아래 항목은 2026-04-08 기준 **반드시 최신화** 필요한 것들.

### 3.1 `lastUpdated` 누락 4개 파일 채우기
| # | 파일 | 신규 `lastUpdated` |
|---|---|---|
| 1 | `content/docs/setup/first-run.md` | `2026-04-08` (본문 검증 후 갱신 여부 판단) |
| 2 | `content/docs/practice/create-file.md` | `2026-04-08` |
| 3 | `content/docs/practice/fix-error.md` | `2026-04-08` |
| 4 | `content/docs/practice/explain-code.md` | `2026-04-08` |

### 3.2 레퍼런스 정합성 (⚠️ 가장 시급)
| # | 파일 | 변경 내용 | 출처 |
|---|---|---|---|
| 5 | `reference/all-commands.md` | `/tag`, `/vim` **제거** + 신규 명령어 추가(`/powerup`, `/release-notes`, `/cost`, `/btw`, `/fork`, `/rewind`, `/loop`, `/batch`, `/ultraplan`, `/voice`, `/buddy` 등) | [공식] v2.1.92 |
| 6 | `reference/all-cli-flags.md` | `--worktree`, `--resume`, `--remote-control-session-name-prefix` 등 추가 | [공식] |

### 3.3 명령어 가이드 업데이트
| # | 파일 | 변경 내용 |
|---|---|---|
| 7 | `commands/commands-overview.md` | 신규 커맨드 목록 반영 |
| 8 | `commands/special-commands.md` | `/powerup`, `/loop`, `/batch`, `/btw`, `/fork`, `/rewind`, `/ultraplan` 섹션 |
| 9 | `commands/info-commands.md` | `/cost` 모델별·캐시히트 상세 분석 |
| 10 | `commands/session-commands.md` | `/rewind`, `/fork`, Transcript `/` 검색 |

### 3.4 설정 가이드 업데이트
| # | 파일 | 변경 내용 | 출처 |
|---|---|---|---|
| 11 | `config/settings-json.md` | `disableSkillShellExecution`, Effort level `low`/`medium`/`high` 단순화, 2026-03-22 → 2026-04-08 | [공식] v2.1.91, v2.1.92 |
| 12 | `config/mcp-setup.md` | 500KB 오버라이드(`_meta["anthropic/maxResultSizeChars"]`), RFC 9728 OAuth, **[R] 배열 파라미터 silently dropped 주의** | [공식] v2.1.91 / [R] Martin Garramon |
| 13 | `config/permissions-guide.md` | Recent 탭, 와일드카드 패턴(`Bash(git:*)`, `mcp__*__*`) | [공식] v2.1.89 / [R] Rajiv Pant |
| 14 | `config/skills-guide.md` | `/claude-api` 번들 확인, **[x] Simon Willison "캄브리아기 폭발" 인용** | [공식] v2.1.69 / [x] |
| 15 | `config/claude-md.md` | **[R] 3단계 계층**(`~/.claude/CLAUDE.md` / `./CLAUDE.md` / `./CLAUDE.local.md`) + **[x] Boris Cherny "2,500토큰/100줄 유지"** | [R] Morbel / [x] @bcherny |
| 16 | `config/hooks-intro.md` | **[R] Hooks = 강제 vs CLAUDE.md = 권고** 구분 | [R] Morbel |

### 3.5 고급 기능 업데이트
| # | 파일 | 변경 내용 | 출처 |
|---|---|---|---|
| 17 | `advanced/agent-teams.md` | `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 환경변수 필수, experimental 상태, **[R] 30 tips 체크리스트 박스** | [공식] / [R] John Kim |
| 18 | `advanced/voice-fast.md` | **20개 언어**, push-to-talk(스페이스바 hold) 방식 | [공식] v2.1.69 / [R] |
| 19 | `advanced/remote-control.md` | AI 생성 세션 이름, prefix 옵션 | [공식] v2.1.83 |
| 20 | `advanced/worktrees.md` | `--worktree` 플래그, `.claude/worktrees/`, 자동 정리 | [공식] v2.1.49 / [x] Boris Cherny |

### 3.6 신규 페이지 작성 (최소한)
| # | 신규 파일 | 카테고리 | 설명 |
|---|---|---|---|
| 21 | `advanced/ultraplan.md` | advanced | `/ultraplan` 클라우드 플랜 다듬기 (research preview) |
| 22 | `advanced/one-million-context.md` | advanced | Opus/Sonnet 4.6 **1M 컨텍스트** 전용 가이드 — 대표님 본인 플랜 사용 |

> 이 2개만 신규. 나머지는 전부 기존 파일에 편입.

### 3.7 팁 & FAQ 업데이트
| # | 파일 | 변경 내용 | 출처 |
|---|---|---|---|
| 23 | `tips/token-saving.md` | 1M 컨텍스트, 요금 사태 배경, 피크타임 회피(한국시간 환산 `[R][추정]`), MCP vs CLI (Playwright 4배 토큰), `/btw` 50% 절감 | [공식] / [R] 다수 |
| 24 | `tips/useful-tips.md` | Transcript `/` 검색, `--resume` 45% 빠름 | [공식] v2.1.83, v2.1.77 |
| 25 | `tips/btw-side-questions.md` | **/btw + /fork + /rewind 컨텍스트 위생 3종 세트**로 확장 | [x] @trq212 / [R] Hightower |
| 26 | `tips/faq.md` | 요금 소진 관련 FAQ 추가 | [R] DevClass |

---

## 4. Phase 2 — 중·저우선순위 (시간 여유 시 이번 세션, 아니면 다음)

### 4.1 기본·실습 페이지
| # | 파일 | 변경 |
|---|---|---|
| 27 | `basics/understanding-ui.md` | Transcript `/` 검색, Effort level 로고/스피너 표시 |
| 28 | `basics/essential-commands.md` | 최신 커맨드 반영 |

### 4.2 인트로·로드맵
| # | 파일 | 변경 | 출처 |
|---|---|---|---|
| 29 | `intro/claude-ecosystem.md` | **Opus 4.6 1M 컨텍스트** 포지셔닝, 경쟁 대비 | [공식] / [R] |
| 30 | `intro/do-i-need-this.md` | **[R] Claude Code vs Cursor vs Copilot** 합의 인용 | [R] |
| 31 | `next/roadmap.md` | **[x] Boris Cherny "정해진 정답 없다" 철학 마무리** + KAIROS `[추정]` 미래 기능 예고 | [x] / [R] |

### 4.3 Cowork·코드웹
| # | 파일 | 변경 |
|---|---|---|
| 32 | `cowork/cowork-dispatch.md` | Cowork + Dispatch 통합 재검증 |
| 33 | `cowork/cowork-desktop-control.md` | Computer Use Research Preview 상태 명시 |
| 34 | `codeweb/codeweb-start.md` | Default allowed domains 언급 |

### 4.4 Setup (Bedrock 포함)
| # | 파일 | 변경 |
|---|---|---|
| 35 | `setup/install-claude-code.md` | v2.1.92 기준 설치 명령어, **Bedrock 설정 마법사** 언급 |
| 36 | `setup/install-nodejs.md` | 버전 검증 (2026-03-22 → 2026-04-08) |

### 4.5 저우선순위
- `advanced/git-workflow.md`, `advanced/plugins.md`, `advanced/print-mode.md`, `advanced/sandbox-security.md` — 2026-03-22에 멈춘 파일들, 본문 내용 현행성만 점검 후 `lastUpdated` 갱신

---

## 5. 작업 순서 (실행 시)

```
1. Phase 0 — 렌더링 시스템 수정 (docs.ts, page.tsx, CSS)
   └── 로컬 빌드 검증 + 스크린샷
2. Phase 0 — 누락 4개 파일 lastUpdated 채우기
3. Phase 1 — 파일 번호 5~26번 순차 업데이트
   └── 각 파일마다 본문 수동 "📅 최종 업데이트" 줄 제거
   └── frontmatter lastUpdated: "2026-04-08"
4. 빌드 재검증 (npm run build)
5. 대표님 로컬 확인 + 승인
6. git commit + push → Vercel 자동 배포 확인
7. (시간 여유 시) Phase 2 진행
8. 노션 작업 보고서 DB에 기록 (CLAUDE.md 규칙)
```

---

## 6. QA 셀프체크 (구현 후)

- [ ] `npm run build` 에러 0
- [ ] 모든 신규·수정 파일 `lastUpdated: "2026-04-08"`
- [ ] 본문에 수동 `> 📅 최종 업데이트:` 줄 없음
- [ ] 각 페이지 최종 업데이트 뱃지 자동 렌더링 확인
- [ ] 각 페이지에 **비유** 최소 1개 (빠지면 재작성)
- [ ] Mac/Windows 코드 블록 둘 다 존재
- [ ] 출처 태그 `[공식]/[R]/[x]/[추정]` 규율 준수
- [ ] `/tag`, `/vim` 참조 완전 제거
- [ ] Effort level `ultrafast/ultrathink` 표기 완전 제거
- [ ] 구매자 시각 통과 — 첫 페이지만 봐도 우수 판단 가능
- [ ] Vercel 배포 URL에서 실제 확인

---

## 7. 리스크 & 질문 (대표님 확정 필요)

### 7.1 신규 파일 2개 추가 OK?
- `advanced/ultraplan.md`
- `advanced/one-million-context.md`
- → 기존 63개 → 65개. 홈 카테고리 수 표시("13개 카테고리")는 그대로, `advanced`만 8개 → 10개.
- **질문**: 이 2개 신규 허가?

### 7.2 공식 vs 커뮤니티 상충 처리 — Opus 4.6 1M 컨텍스트
- [공식] GitHub Release: "Max, Team, Enterprise 한정"
- [R] HN 1위 글: "추가 비용 없이 일반 출시"
- **처리안**: 공식 기준으로 "Max/Team/Enterprise에서 1M, Pro는 200K" 기재 + 커뮤니티 반응 인용
- **질문**: 이 처리 OK?

### 7.3 유출 사건 · 요금 버그 언급 수위
- 유출 사태(2026-03-31) → 가벼운 언급 or 생략?
- 요금 소진 사태(2026-04-01) → FAQ에 소개 (Anthropic 공식 인정 있으니 사실 전달 안전)
- **질문**: 유출 사태는 **생략** 쪽으로 가고 싶음 — 이 방향 OK?

### 7.4 Phase 2 범위
- 이번 세션에 Phase 1 + Phase 2 전부?
- 또는 Phase 1만 완료 + Phase 2는 다음 세션?
- **질문**: 선택 주세요

### 7.5 Vercel 배포
- 변경 완료 후 git commit + push → Vercel 자동 배포
- 본인 확인 후 push 할지, 아니면 완료 즉시 push?
- **질문**: push 타이밍 확인

---

## 8. 승인

아래 한 줄을 `[APPROVED]` 로 바꿔 주시면 즉시 Phase 0부터 시작합니다.

**상태**: `[PENDING APPROVAL]`

승인 시 답변 예:
- `[APPROVED]` — 전부 승인, 바로 시작
- `[APPROVED with changes]` + 수정 지시사항 → 플랜 수정 후 재승인
- `[REJECTED]` — 거부, 재설계
