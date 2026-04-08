---
title: "스킬 시스템 — 나만의 명령어 만들기"
description: "SKILL.md로 커스텀 슬래시 커맨드를 만드는 방법 (Simon Willison: '올해 MCP를 초라하게 만들 기능')"
tags: ["설정", "스킬", "커스텀", "슬래시커맨드"]
category: "config"
order: 6
lastUpdated: "2026-04-08"
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

## 빌트인 스킬 (이미 만들어져 있는 것)

Claude Code에는 기본으로 들어있는 스킬도 있어요. 설치할 필요 없이 바로 쓸 수 있습니다:

| 스킬 | 용도 | 추가 버전 |
|------|------|---|
| `/simplify` | 코드 품질 검사 (3개 에이전트가 병렬로 리뷰) | v2.1.63 |
| `/batch` | 여러 파일 worktree 격리 병렬 작업 | v2.1.63 |
| `/loop` | 반복 작업 실행 (최소 1분, 3일 만료) | v2.1.63 |
| **`/claude-api`** | **Claude API + Anthropic SDK 빌드 가이드** | **v2.1.69 번들 포함** |
| `/debug` | 디버그 로깅 활성화 | - |

### ⭐ `/claude-api` 스킬 주목 (v2.1.69~ 기본 번들)

`/claude-api`는 **Anthropic Claude API나 SDK를 직접 써서 앱을 만들 때** 도움받는 스킬이에요. 2026-03-05 v2.1.69부터 **별도 설치 없이 기본 제공**됩니다.

**자동 발동 조건:**
- 코드에서 `anthropic`, `@anthropic-ai/sdk`, `claude_agent_sdk` 등을 import 할 때
- "Claude API로 뭐 만들어줘" 같은 요청이 들어올 때

**안 발동되는 경우:**
- OpenAI SDK, 다른 AI 서비스 코드
- 일반 코딩 (API 연동 없음)

> 🍱 **비유로 설명하면**: 요리할 때 "이 브랜드 제품은 이렇게 써요" 하고 전용 사용설명서가 자동으로 펼쳐지는 거예요. 내가 Anthropic 제품을 쓸 때만요.

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

스킬을 만들 수 있게 됐으니, 이제 **키보드 단축키 커스터마이징**도 해봅시다!
