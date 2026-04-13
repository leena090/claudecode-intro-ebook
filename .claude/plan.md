# Plan — Cowork·MCP·플러그인·스킬 전면 업데이트 (2026-04-13)

> **상태**: `[APPROVED]` — 2026-04-13 대표님 승인
> **최종 업데이트**: 2026-04-13
> **리서치**: `.claude/research.md` (2026-04-13, deep-research-agent + Explore 에이전트)
> **대표님 스크린샷**: `/setup-cowork` 온보딩 마법사 2장 (직업 선택 → 플러그인 추천)

---

## 0. 목적과 원칙

### 0.1 목적
1. **Cowork GA(2026-04-09) 반영** — 3요소(스킬·플러그인·커넥터) 체계로 재구성
2. **신규 가이드 3개 추가** — setup-cowork, cowork-plugins, cowork-projects
3. **기존 6개 파일 업데이트** — 최신 기능·수치 반영
4. **MCP 토큰 비용 경고 일관화** — 모든 관련 페이지에 사실 기반 경고 연결
5. **방대하되 체계적** — 양 ↑, 구조 명확

### 0.2 불변 원칙 (이전 plan에서 계승)
- **타겟**: 40~60대 비개발자 왕초보
- **가독성**: 초등 5학년 수준
- **비유 필수**: 일상 예시 최소 1개/페이지
- **Mac/Windows 병기**
- **표 활용**: A vs B 있으면 무조건 비교표
- **출처 태그**: `[공식]` / `[R]` / `[스크린샷]`
- **토큰 비용 경고**: MCP·커넥터 관련 페이지에 사실 기반 수치 포함
- 모든 파일 `lastUpdated: "2026-04-13"` 갱신

### 0.3 토큰 비용 표기 원칙 (대표님 지시)
- **사실 기반만** — 추정 수치 금지
- 기존 검증된 데이터 활용:
  - MCP 서버 0개 → ~2K 토큰 / 4개 → ~67K 토큰 / 8개 → ~150K 토큰 `[R]`
  - MCP vs CLI: 4배 차이 (Playwright 114K vs CLI 27K) `[R]`
  - Tool Search 도입 후 46.9% 절감 `[R]`
  - "2~3개만 붙이기" 권장 `[공식+R]`
- **플러그인 vs 커넥터 구분 명확히**:
  - 플러그인(스킬 묶음) = 토큰 부담 거의 없음 (스킬 파일 자체는 가벼움)
  - 커넥터(MCP 서버) = 토큰 비용 발생 (매 대화마다 도구 목록 주입)
- 각 페이지에서 기존 `config/mcp-setup.md`의 "⚠️ MCP 토큰 비용 경고" 섹션으로 링크

---

## 1. 작업 범위 — 총 9개 파일 (3 Phase)

```
Phase 1: 신규 가이드 3개 (핵심 — 가장 먼저)
Phase 2: 기존 코워크 4개 업데이트
Phase 3: 설정 가이드 2개 업데이트 (MCP + 스킬)
```

---

## 2. Phase 1 — 신규 가이드 3개

### 2.1 `cowork/cowork-setup.md` — 코워크 첫 설정 마법사 ⭐ 핵심

> 대표님 스크린샷 기반. `/setup-cowork` 온보딩 전체 흐름 가이드

**프론트매터:**
```yaml
title: "코워크 첫 설정 — 나한테 맞는 AI 비서 세팅하기"
description: "직업 선택부터 플러그인 설치, 커넥터 연결까지 10분 완성 가이드"
tags: ["코워크", "설정", "플러그인", "커넥터", "스킬", "온보딩"]
category: "cowork"
order: 2  # cowork-intro(1) 다음
lastUpdated: "2026-04-13"
```

**목차 (체계적 구조):**
1. **코워크 3요소 한눈에 보기** — 스킬/플러그인/커넥터 비교표
   - 비유: "스킬 = 요리 레시피, 플러그인 = 레시피 모음집, 커넥터 = 냉장고 연결"
   - ⚠️ 커넥터(MCP)는 토큰 비용 발생 → 링크
2. **1단계: 직업 선택** — 14개 직업 카테고리 목록 + 스크린샷 설명
3. **2단계: 추천 플러그인 설치** — Add 버튼, 포함 스킬 확인법
   - 예시: Design 플러그인 (7 skills) — 디자인 크리틱, UX 카피, 접근성 검수...
4. **3단계: 커넥터 연결 (선택)** — Gmail, Calendar, Drive OAuth 인증
   - ⚠️ 커넥터는 필요한 것만 (토큰 비용 경고 표 인용)
5. **4단계: 작업 환경 맞춤** — 진행 상황 패널 설명
6. **설정 후 바로 해볼 것** — `/스킬이름` 실행 예시 3개
7. **나중에 추가·삭제하기** — Settings > Customize 경로

**핵심 포인트:**
- 대표님 스크린샷 2장의 UI 흐름을 텍스트로 충실히 재현
- 각 단계 Mac/Windows 차이점 (있다면)
- 진행 상황 패널(우측) 설명

---

### 2.2 `cowork/cowork-plugins.md` — 플러그인 완전 가이드

**프론트매터:**
```yaml
title: "플러그인 — 내 직업에 맞는 스킬 묶음 설치하기"
description: "11개 부서별 플러그인 소개, 설치·관리법, 토큰 비용 없이 AI 능력 확장"
tags: ["코워크", "플러그인", "스킬", "직업별", "마켓플레이스"]
category: "cowork"
order: 8  # 기존 파일 뒤에
lastUpdated: "2026-04-13"
```

**목차:**
1. **플러그인이 뭔가요?** — 스킬 묶음이라는 개념
   - 비유: "앱스토어에서 '사진 편집 패키지' 받으면 필터·보정·콜라주가 한번에 깔리는 것"
   - 핵심: 플러그인 자체는 토큰 부담 거의 없음 (커넥터와 구분)
2. **부서별 사전 제작 플러그인 11개+** — 전수 목록표
   - 마케팅, 영업, 운영, 법무, 재무, 디자인, 엔지니어링, HR, 데이터사이언스, 리서치, 투자은행
   - 각 플러그인 포함 스킬 수 + 핵심 기능 1줄
3. **설치 방법** — `/setup-cowork` vs Settings > Customize
4. **설치된 플러그인 관리** — 비활성화, 삭제, 업데이트
5. **스킬 개별 실행법** — `/스킬이름` + 실전 예시
6. **Claude Code에서의 플러그인** — `/plugin` 명령어 (4탭: Discover/Installed/Marketplaces/Errors)
   - Desktop vs Code 차이 비교표
7. **⚠️ 플러그인 vs 커넥터 — 비용이 다릅니다**
   - 플러그인(스킬 묶음): 토큰 추가 비용 거의 없음
   - 커넥터(MCP 서버): 매 대화마다 도구 목록 토큰 소비 → 상세는 [MCP 토큰 비용 경고](/docs/config/mcp-setup#mcp-토큰-비용-경고) 참고

---

### 2.3 `cowork/cowork-projects.md` — 프로젝트 기능

**프론트매터:**
```yaml
title: "프로젝트 — 업무별로 AI를 따로 세팅하기"
description: "여러 업무를 섞지 않고 프로젝트별 독립 관리, Dispatch와 결합"
tags: ["코워크", "프로젝트", "컨텍스트", "Dispatch", "분리"]
category: "cowork"
order: 9
lastUpdated: "2026-04-13"
```

**목차:**
1. **프로젝트가 왜 필요한가요?**
   - 비유: "서류함이 하나면 회계·영업·인사 서류가 뒤섞여요. 프로젝트 = 서류함 분리"
2. **프로젝트 만들기** — 생성 위치, 이름 짓기
3. **프로젝트별 독립 기능**
   - 커스텀 지시사항 (프로젝트마다 다른 성격)
   - 전용 파일 연결
   - 전용 스케줄 태스크
   - 전용 커넥터 설정
4. **claude.ai 프로젝트 가져오기** — 기존 웹 프로젝트 → Cowork 이전
5. **Dispatch + 프로젝트 = 멀티태스킹** — 폰에서 여러 프로젝트 전환 실전
6. **실전 예시: 빵집 사장님의 프로젝트 3개**
   - "재고관리" / "SNS 마케팅" / "매출정산" 프로젝트 분리 시나리오

---

## 3. Phase 2 — 기존 코워크 파일 4개 업데이트

### 3.1 `cowork/cowork-intro.md` — GA 반영 + 3요소 구조

**변경 내용:**
- GA 정식 출시 (2026-04-09) 상태 반영 — "연구 프리뷰" → "정식 출시"
- 3요소(스킬·플러그인·커넥터) 구조 소개 추가 (기존에 없음)
- 엔터프라이즈 신기능 6가지 간략 언급 (RBAC, 지출 한도 등)
- 코워크 출시 타임라인 표 추가 (2026-01 ~ 2026-04)
- → `cowork-setup.md`로 연결: "첫 설정은 여기서"

### 3.2 `cowork/cowork-dispatch.md` — Dispatch + Computer Use

**변경 내용:**
- Dispatch + Computer Use 결합 신기능 (2026-04-09) 추가
  - 기존: 파일 작업 + 터미널 명령만
  - 신규: 앱 열기, UI 탐색, 다단계 워크플로우
  - 예시: "이메일에서 경비 보고서 처리"
- 실전 사용 시나리오 보강

### 3.3 `cowork/cowork-connectors.md` — 50개+ 커넥터 + 토큰 경고

**변경 내용:**
- 커넥터 수: 기존 표기 → "50개 이상" `[공식]`
- 신규 커넥터 추가: Zoom MCP (회의 요약), WordPress, Apollo, Clay 등
- 2-탭 구조 설명: Web connectors / Desktop extensions
- Per-tool Connector Controls (커넥터별 읽기/쓰기 세밀 제어)
- **⚠️ 커넥터 = MCP 서버 → 토큰 비용 경고 섹션 추가**
  - 기존 mcp-setup.md 비용표 인용 + 링크
  - "커넥터 많이 연결 = MCP 많이 설치와 동일, 필요한 것만"
  - 체크리스트: 커넥터 정리 기준

### 3.4 `cowork/cowork-getting-started.md` — setup-cowork 연결

**변경 내용 (최소):**
- `/setup-cowork` 마법사 안내 추가 (→ cowork-setup.md 링크)
- GA 상태 반영

---

## 4. Phase 3 — 설정 가이드 2개 업데이트

### 4.1 `config/mcp-setup.md` — Desktop Extensions + Registry

**변경 내용:**
- **Desktop Extensions (.mcpb)** 섹션 신규 추가
  - 원클릭 설치 (.mcpb 더블클릭)
  - Node.js 별도 설치 불필요 (런타임 내장)
  - Settings > Extensions 관리
  - 비유: "앱스토어에서 앱 받듯이 MCP 서버 설치"
- **MCP Registry** 추가 — registry.modelcontextprotocol.io
- **MCP 서버 발견 방법** 섹션 추가 (5개 경로)
  1. 공식 Registry
  2. Smithery (smithery.ai)
  3. awesome-mcp-servers (GitHub)
  4. Docker MCP Catalog
  5. Postman MCP 서버 목록
- **원격 MCP 서버** 설정 예시 (url + headers 방식)
- **생태계 현황 수치** — 10,000개+ 서버, SDK 9,700만 다운로드/월
- 기존 토큰 비용 경고 섹션 유지 + "커넥터도 MCP" 주석 추가

### 4.2 `config/skills-guide.md` — 빌트인 명령어 60개+ 보강

**변경 내용:**
- 빌트인 명령어 전수 목록표 (카테고리별)
  - 세션 관리: /clear, /compact, /context, /rename, /resume, /branch, /export, /rewind
  - 코드 리뷰: /simplify, /batch, /review, /security-review
  - 계획: /plan, /effort
  - 워크플로우: /loop, /schedule, /debug, /remote-control, /btw
  - 메모리: /init, /memory, /model, /fast, /output-style, /theme, /vim, /copy, /voice
  - 진단: /login, /help, /doctor, /bug, /cost, /usage, /stats, /powerup, /insights
- **Claude Code `/plugin` 명령어** — 4탭 구조 설명
- 커스텀 스킬 프론트매터 설정 상세 (argument-hint, disable-model-invocation, allowed-tools)
- 기존 내용과 중복 없이 보강 (읽어보고 없는 것만 추가)

---

## 5. 파일 순서 매핑 (order 조정)

### cowork/ 카테고리 최종 order
| order | 파일 | 상태 |
|---|---|---|
| 1 | cowork-intro.md | 업데이트 |
| **2** | **cowork-setup.md** | **신규** |
| 3 | cowork-getting-started.md | 최소 업데이트 |
| 4 | cowork-desktop-control.md | 변경 없음 |
| 5 | cowork-dispatch.md | 업데이트 |
| 6 | cowork-scheduled.md | 변경 없음 |
| 7 | cowork-office.md | 변경 없음 |
| 8 | cowork-connectors.md | 업데이트 |
| **9** | **cowork-plugins.md** | **신규** |
| **10** | **cowork-projects.md** | **신규** |

> cowork-getting-started.md의 기존 order가 2 → 3으로 변경 필요

---

## 6. 작업 순서 (실행 시)

```
1. Phase 1 — 신규 3개 작성 (병렬 가능: 에이전트 팀)
   ├── cowork-setup.md (스크린샷 기반 핵심)
   ├── cowork-plugins.md
   └── cowork-projects.md
2. Phase 2 — 기존 4개 업데이트
   ├── cowork-intro.md (GA 반영)
   ├── cowork-dispatch.md (Computer Use 결합)
   ├── cowork-connectors.md (50개+ 커넥터 + 토큰 경고)
   └── cowork-getting-started.md (링크 추가)
3. Phase 3 — 설정 2개 업데이트
   ├── config/mcp-setup.md (Desktop Extensions)
   └── config/skills-guide.md (60개+ 명령어)
4. order 조정 — cowork-getting-started.md order: 2 → 3
5. 빌드 검증 — npm run build
6. 로컬 프리뷰 — 대표님 확인
7. git commit + push → Vercel 배포
8. 노션 작업 보고서 업로드
```

### 팀 구성 (제안)
```
writer-1 (technical-writer) — cowork-setup.md + cowork-plugins.md
writer-2 (technical-writer) — cowork-projects.md + cowork-intro.md 업데이트
writer-3 (technical-writer) — cowork-dispatch.md + cowork-connectors.md 업데이트
본인 (오케스트레이터) — mcp-setup.md + skills-guide.md 업데이트 + 전체 QA
```

---

## 7. QA 셀프체크 (구현 후)

- [ ] `npm run build` 에러 0
- [ ] 모든 신규·수정 파일 `lastUpdated: "2026-04-13"`
- [ ] 각 페이지 비유 최소 1개
- [ ] Mac/Windows 병기 (해당 시)
- [ ] 출처 태그 규율 준수
- [ ] **토큰 비용 경고 일관성**: 커넥터/MCP 관련 페이지 모두 사실 기반 수치 + mcp-setup.md 링크
- [ ] 플러그인 vs 커넥터 비용 차이 명확 구분
- [ ] order 충돌 없음 (cowork 1~10)
- [ ] 구매자 시각 — "돈 주고 사겠는가?"
- [ ] Vercel 배포 확인

---

## 8. 리스크 & 질문

### 8.1 스크린샷 삽입
- 대표님이 보내주신 `/setup-cowork` 스크린샷 2장을 페이지에 삽입할까요?
- 삽입 시 `public/images/` 경로로 복사 필요
- **질문**: 스크린샷 삽입 여부?

### 8.2 기존 cowork-getting-started.md order 변경
- 현재 order: 2 → 신규 cowork-setup.md가 2를 차지
- getting-started를 3으로 밀어야 함
- **영향**: 사이드바 순서 변경 (설치 가이드 → 첫 설정 마법사 → 시작하기)
- **질문**: 이 순서 OK?

### 8.3 advanced/plugins.md, advanced/plugin-marketplace.md 중복
- 기존 advanced/ 에도 플러그인 관련 2개 파일 존재
- 신규 cowork/cowork-plugins.md와 관점 구분:
  - cowork/cowork-plugins.md = Desktop 사용자용 (초보, 클릭 설치)
  - advanced/plugins.md = Claude Code 사용자용 (개발자, CLI)
- 상호 링크로 연결하되 내용 중복은 최소화
- **질문**: 이 구분 OK?

---

## 9. 승인

아래를 `[APPROVED]`로 바꿔 주시면 Phase 1부터 시작합니다.

**상태**: `[APPROVED]` — 2026-04-13 승인

추가 원칙 (승인 시 확인):
- UX Copy 원칙: 결과 먼저, 기술 용어 괄호 안으로 (feedback_benefit-first-ux-copy.md)
- 스크린샷 삽입, order 변경, advanced 중복 처리 → 미확인 질문은 합리적 판단으로 진행
