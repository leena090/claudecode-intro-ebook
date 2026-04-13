---
title: "나만의 명령어 만들기 — 스킬 시스템"
description: "SKILL.md로 커스텀 슬래시 커맨드를 만드는 방법 + 빌트인 명령어 60개+ 전수 목록"
tags: ["스킬", "명령어", "설정"]
category: "config"
order: 6
lastUpdated: "2026-04-13"
---

## 스킬이 뭔가요?

**스킬**은 내가 직접 만드는 **나만의 슬래시 커맨드**입니다.

예를 들어, 매번 "블로그 글을 SEO에 맞게 써줘, 제목은 이렇게, 구조는 저렇게..."라고 말하는 게 귀찮다면?

`/blog` 라는 스킬을 만들어두면, 다음부터는 `/blog 오늘의 주제` 한 줄로 끝!

<div class="note-star">
★ <strong>왜 지금 중요한가요?</strong> 유명 개발자 <strong>Simon Willison</strong>은 Skills에 대해 이렇게 예측했어요:
<br /><br />
<em>"A Cambrian explosion in Skills will make this year's MCP rush look pedestrian by comparison."</em>
<br />
(스킬의 캄브리아기 폭발이 올해의 MCP 러시를 초라하게 만들 것이다)
<br /><br />
→ MCP보다 훨씬 가볍고, 필요할 때만 로드돼서 컨텍스트가 낭비되지 않아요. <code>[x]</code>
</div>

---

## 스킬 = SKILL.md 파일

스킬은 **SKILL.md**라는 파일 하나로 만듭니다.

### 파일 위치

```
# 모든 프로젝트에서 쓸 스킬 (글로벌)
~/.claude/skills/블로그/SKILL.md

# 특정 프로젝트에서만 쓸 스킬
내_프로젝트/.claude/skills/보고서/SKILL.md
```

> Mac: `~` = `/Users/내이름`
> Windows: `~` = `C:\Users\내이름`

---

## 스킬 만들기 (5분이면 됨)

### Step 1: 폴더 만들기

**Mac (터미널):**
```bash
mkdir -p ~/.claude/skills/blog
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\.claude\skills\blog" -Force
```

### Step 2: SKILL.md 작성

```markdown
---
name: blog
description: "SEO 최적화 블로그 글 작성"
---

# 블로그 작성 스킬

## 지시사항
1. 제목에 핵심 키워드 포함
2. H2/H3 구조로 작성
3. 2000자 이상
4. 메타 설명 포함
5. 내부 링크 2개 이상
6. CTA(행동 유도 문구) 마지막에 추가

## 톤앤매너
- 친근하고 따뜻한 말투
- 전문용어는 쉬운 말로 풀어서
- 50대 독자 기준으로 작성
```

### Step 3: 사용하기

```bash
/blog AI 자동화로 하루 1시간 아끼는 법
```

이렇게만 입력하면 SKILL.md에 적어둔 규칙대로 블로그 글이 작성됩니다!

---

## SKILL.md 문법

```yaml
---
name: 스킬이름        # /스킬이름 으로 호출
description: "설명"   # Claude가 자동 감지할 때 쓰는 설명
---
```

`name`이 곧 슬래시 커맨드가 됩니다:
- `name: blog` → `/blog`
- `name: report` → `/report`
- `name: 보고서` → `/보고서` (한글도 됨!)

---

## 실전 예시들

### 예시 1: 주간 보고서

```markdown
---
name: weekly-report
description: "주간 업무 보고서 자동 작성"
---

## 주간 보고서 작성 규칙
1. 이번 주 완료 항목 정리
2. 다음 주 계획 작성
3. 이슈/리스크 기록
4. 표 형식으로 깔끔하게
```

### 예시 2: 이메일 답장

```markdown
---
name: reply
description: "비즈니스 이메일 답장 작성"
---

## 이메일 답장 규칙
1. 공손하지만 간결하게
2. 핵심만 3줄 이내
3. 다음 액션 명확히
4. 마무리 인사 포함
```

### 예시 3: 상품 설명

```markdown
---
name: product
description: "상품 소개 글 자동 생성"
---

## 상품 설명 규칙
1. 혜택 중심 (기능 나열 X)
2. 고객 후기 형식 포함
3. 비교표 추가
4. CTA 버튼 문구 제안
```

---

## 빌트인 명령어 전수 목록 (60개+)

Claude Code에는 설치 없이 바로 쓸 수 있는 명령어가 60개 이상 있어요. 자주 쓰는 것 위주로 카테고리별 정리해 드릴게요.

### 대화·세션 관리 — "정리하고 이어가기"

| 명령어 | 이걸 하면 뭐가 되는데? |
|--------|-------------------|
| `/clear` | 대화 기록 전부 지우고 새로 시작 (`/reset`, `/new`도 같음) |
| `/compact` | 오래된 대화를 AI가 요약해서 토큰 절약 |
| `/context` | 지금 토큰 얼마나 썼는지 색상 그리드로 보기 |
| `/rename` | 현재 세션에 이름 붙이기 |
| `/resume` | 이전 세션 이어서 하기 |
| `/branch` | 지금 시점에서 대화 분기 (두 방향 동시 탐색) |
| `/export` | 대화 기록 파일로 저장 |
| `/rewind` | 클로드가 한 코드 변경 되돌리기 |

### 코드 리뷰·품질 — "내가 짠 코드 점검받기"

| 명령어 | 이걸 하면 뭐가 되는데? |
|--------|-------------------|
| `/simplify` | 최근 변경 코드를 3개 AI가 동시에 리뷰 |
| `/batch` | 코드베이스 전체에 대규모 변경 (병렬 실행) |
| `/review` | PR 스타일 코드 리뷰 |
| `/security-review` | 보안 취약점 스캔 |

### 계획·사고 — "코드 안 건드리고 분석만"

| 명령어 | 이걸 하면 뭐가 되는데? |
|--------|-------------------|
| `/plan` | 읽기 전용 모드에서 분석만 (코드 수정 안 함) |
| `/effort` | AI 사고 깊이 조절 (low / medium / high) |

### 반복·자동화 — "알아서 돌아가게"

| 명령어 | 이걸 하면 뭐가 되는데? |
|--------|-------------------|
| `/loop` | 세션 안에서 작업 반복 실행 |
| `/schedule` | 클라우드에서 예약 실행 (기기 꺼져도 동작) |
| `/debug` | 디버그 로깅 활성화 |
| `/remote-control` | 현재 세션을 claude.ai에서 원격 접속 |
| `/btw` | 메인 대화에 안 남는 사이드 질문 (토큰 50% 절약) |

### 설정·모드 — "내 환경 맞추기"

| 명령어 | 이걸 하면 뭐가 되는데? |
|--------|-------------------|
| `/init` | CLAUDE.md 파일 자동 생성 |
| `/memory` | 자동 메모리 조회·관리 |
| `/model` | AI 모델 교체 (opus / sonnet / haiku) |
| `/fast` | 빠른 출력 모드 (같은 모델, 6배 속도) |
| `/output-style` | 출력 스타일 변경 (기본 / 설명형 / 학습형) |
| `/theme` | 색상 테마 변경 |
| `/vim` | Vim 편집 모드 |
| `/copy` | 마지막 응답 클립보드 복사 |
| `/voice` | 음성 입력 (코딩 용어 인식 최적화) |

### 진단·계정 — "문제 확인하기"

| 명령어 | 이걸 하면 뭐가 되는데? |
|--------|-------------------|
| `/help` | 쓸 수 있는 명령어 전체 목록 |
| `/doctor` | Claude Code 설치 상태 진단 |
| `/cost` | 현재 세션 API 비용 확인 |
| `/usage` | 구독 쿼터·속도 제한 확인 |
| `/stats` | 최근 사용 패턴·세션 기록 시각화 |
| `/powerup` | 기능별 인터랙티브 튜토리얼 |
| `/insights` | 최근 30일 세션 분석 → 개선 제안 |
| `/bug` | 버그 리포트 제출 |

<div class="note-star">★ <strong>팁</strong>: 명령어가 기억 안 나면 <strong>/</strong> 하나만 입력하세요. 전체 목록이 자동으로 뜨고, 글자를 입력하면 실시간 필터링돼요.</div>

---

### 빌트인 스킬 (추가 설치 필요 없음)

명령어와 별도로, 특정 상황에서 자동으로 발동되는 **빌트인 스킬**도 있어요:

| 스킬 | 이걸 하면 뭐가 되는데? | 자동 발동 조건 |
|------|-------------------|-------------|
| `/simplify` | 코드 품질 3중 검사 | 코드 변경 후 |
| `/batch` | 대규모 병렬 작업 | 여러 파일 동시 수정 |
| `/loop` | 반복 실행 자동화 | 반복 작업 요청 시 |
| **`/claude-api`** | **Claude API 빌드 가이드** | 코드에서 `anthropic` import 시 |
| `/debug` | 디버그 로깅 | 오류 분석 시 |

### `/claude-api` 스킬 — Claude API로 앱 만들 때 자동 도움

`/claude-api`는 **Anthropic Claude API나 SDK를 직접 써서 앱을 만들 때** 자동으로 발동되는 스킬이에요. v2.1.69부터 **별도 설치 없이 기본 제공**.

**자동 발동 조건:**
- 코드에서 `anthropic`, `@anthropic-ai/sdk` 등을 import 할 때
- "Claude API로 뭐 만들어줘" 같은 요청이 들어올 때

> 비유하면: 요리할 때 "이 브랜드 제품은 이렇게 써요" 하고 전용 사용설명서가 자동으로 펼쳐지는 거예요.

---

## SKILL.md 고급 설정 (프론트매터)

스킬의 프론트매터에 추가 설정을 넣을 수 있어요:

```yaml
---
name: my-command
description: "이 스킬이 뭘 하는지 설명"
argument-hint: [issue-number]     # 사용 시 힌트 표시
disable-model-invocation: true    # 위험한 작업일 때 수동 확인 강제
allowed-tools: [Read, Edit, Bash] # 이 스킬이 쓸 수 있는 도구 제한
---
```

| 설정 | 이걸 하면 뭐가 되는데? |
|------|-------------------|
| `argument-hint` | `/스킬이름` 입력 시 뒤에 뭘 적어야 하는지 힌트 표시 |
| `disable-model-invocation` | 부작용 있는 작업에서 AI가 마음대로 실행 못 하게 차단 |
| `allowed-tools` | 스킬이 특정 도구만 쓸 수 있게 제한 (보안) |

---

## 플러그인으로 스킬 묶어서 배포하기

여러 스킬을 **플러그인으로 묶어서** 한꺼번에 설치할 수도 있어요.

Claude Code에서 `/plugin` 명령어를 실행하면 4개 탭이 나와요:

| 탭 | 이걸 하면 뭐가 되는데? |
|---|-------------------|
| **Discover** | 새 플러그인 탐색 |
| **Installed** | 설치된 플러그인 관리 |
| **Marketplaces** | 외부 마켓플레이스 추가 |
| **Errors** | 플러그인 오류 확인 |

```bash
# 플러그인 설치
/plugin install marketing@claude-plugins-official

# 외부 마켓플레이스 추가
/plugin marketplace add owner/github-repo
```

<div class="note-circle">○ 코워크 Desktop 앱에서도 플러그인을 쓸 수 있어요. 자세한 내용은 <a href="/docs/cowork/cowork-plugins">플러그인 가이드</a>를 참고하세요.</div>

---

## 스킬 관리

### 내 스킬 목록 보기
```bash
/help
```
목록 하단에 커스텀 스킬이 표시됩니다.

### 스킬 비활성화
```bash
claude --disable-slash-commands
```
이 옵션으로 실행하면 모든 스킬이 비활성화됩니다.

---

## 다음 단계

스킬을 만들 수 있게 됐으니, 이제 더 배워봐요!

- [키보드 단축키 커스터마이징](/docs/config/keybindings) — 나만의 단축키 설정
- [내 직업에 맞는 플러그인 받기](/docs/cowork/cowork-plugins) — 스킬 묶음으로 한번에 설치
- [외부 도구를 AI에 연결하기](/docs/config/mcp-setup) — MCP 서버로 GitHub, Notion 연동
