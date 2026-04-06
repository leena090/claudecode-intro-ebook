---
title: "스킬 시스템 — 나만의 명령어 만들기"
description: "SKILL.md로 커스텀 슬래시 커맨드를 만드는 방법"
tags: ["설정", "스킬", "커스텀", "슬래시커맨드"]
category: "config"
order: 6
lastUpdated: "2026-04-06"
---

> 📅 최종 업데이트: 2026년 4월 6일

## 스킬이 뭔가요?

**스킬**은 내가 직접 만드는 **나만의 슬래시 커맨드**입니다.

예를 들어, 매번 "블로그 글을 SEO에 맞게 써줘, 제목은 이렇게, 구조는 저렇게..."라고 말하는 게 귀찮다면?

`/blog` 라는 스킬을 만들어두면, 다음부터는 `/blog 오늘의 주제` 한 줄로 끝!

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

Claude Code에는 기본으로 들어있는 스킬도 있어요:

| 스킬 | 용도 |
|------|------|
| `/simplify` | 코드 품질 검사 (3개 에이전트가 병렬로 리뷰) |
| `/batch` | 여러 파일 대규모 변경 |
| `/loop` | 반복 작업 실행 |
| `/claude-api` | Claude API 문서 참조 |
| `/debug` | 디버그 로깅 활성화 |

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
