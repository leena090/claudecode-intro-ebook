---
title: "[공] Artifacts(아티팩트) — 세션 결과물을 인터랙티브 웹페이지로 공유"
description: "Claude Code 세션의 작업 결과를 프라이빗 URL의 인터랙티브 페이지로 팀원과 공유. PR 리뷰, 대시보드, 선택지 비교 등에 활용. Team·Enterprise 전용"
tags: ["고급", "artifacts", "아티팩트", "공유", "Team", "Enterprise", "인터랙티브", "자동생성"]
category: "advanced"
order: 22
lastUpdated: "2026-06-18"
---

<div class="note-star">
★ <strong>공식 출처</strong> — Claude Code 공식 문서 (베타). <code>[공]</code><br />
★ <strong>Team·Enterprise 전용</strong> — Pro·Max 플랜에서는 사용 불가<br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a>
</div>

## Artifacts(아티팩트)가 뭔가요?

**Artifacts**는 Claude Code 세션에서 만든 결과물을 **조직 내부 프라이빗 웹페이지**로 게시해서 팀원과 공유하는 기능이에요.

> 🍱 **비유**: 클로드가 열심히 분석한 결과를 터미널 화면에서 복사해서 슬랙에 붙여넣던 걸, 이제는 **예쁜 웹페이지 링크 하나**로 공유할 수 있어요. 팀원이 링크를 열면 살아있는 페이지가 보이고, 클로드가 작업을 계속 하면 **실시간으로 업데이트**돼요.

---

## 어떤 경우에 쓸까요?

터미널 텍스트보다 **시각적으로 보는 게 훨씬 편한 경우**에 써요.

| 이럴 때 써요 ✅ | 구체적 예시 |
|--------------|-----------|
| PR 리뷰 공유 | 수정 diff + 주석을 나란히 배치한 페이지 |
| 대시보드 | 배포 실패 현황을 차트로 실시간 업데이트 |
| 선택지 비교 | 4가지 UI 레이아웃을 한 화면에 나란히 |
| 진행 상황 공유 | 마이그레이션 체크리스트가 하나씩 체크됨 |
| 인터랙티브 시뮬레이션 | 슬라이더로 애니메이션 속도 조절해보기 |

> 🍱 **비유**: "이 보고서를 읽어보세요"라고 PDF 10쪽을 보내던 걸, 이제 "이 링크 열어보세요"라고 하면 예쁘게 정리된 인터랙티브 페이지가 뜨는 거예요.

---

## 쓸 수 있는 조건 ⚠️

| 필수 조건 | 상세 |
|----------|------|
| **플랜** | Team 또는 Enterprise (Pro·Max ❌) |
| **인증** | `/login`으로 claude.ai 로그인 필요 (API 키 인증 ❌) |
| **모델 제공사** | Anthropic API (Bedrock·Vertex·Foundry ❌) |
| **클라이언트** | Claude Code CLI 또는 데스크톱 앱 v1.13576.0 이상 |
| **조직 정책** | CMEK·HIPAA·Zero Data Retention 설정 없음 |

<div class="note-star">
★ 베타(beta) 기능이에요. 조건이 앞으로 바뀔 수 있어요.
</div>

---

## 어떻게 만드나요?

### 방법 1: Claude가 알아서 만들기

적합한 결과물이면 Claude가 스스로 Artifact를 제안해요.

### 방법 2: 직접 요청하기

```text
> 이 PR을 diff와 주석을 함께 보여주는 artifact로 만들어줘

> 지난주 배포 실패 현황을 서비스별로 보여주는 대시보드 artifact 만들어줘

> 설정 패널 레이아웃 4가지를 한 페이지에 비교하는 artifact 만들어줘
```

### 게시 과정

1. Claude가 게시 전 **확인을 물어봐요** ("이 파일을 claude.ai에 게시할까요?")
2. **예(Yes)** 선택 → URL이 출력되고 브라우저가 자동으로 열려요
3. 이미 한 번 승인한 artifact는 다시 물어보지 않아요

> 🍱 **비유**: 사진을 인터넷에 처음 올릴 때만 "정말 올릴까요?" 물어보고, 그 다음부터는 바로 올리는 것처럼요.

---

## 터미널 단축키

```bash
# 최근 artifact 다시 열기
Ctrl+]

# 브라우저 자동 열기 끄기 (환경 변수)
export CLAUDE_CODE_ARTIFACT_AUTO_OPEN=0
```

---

## 업데이트 방법

```text
> 요약 차트 아래에 지역별 세부 내용 추가하고 다시 게시해줘
```

- 같은 URL에서 **실시간 업데이트**돼요
- 각 게시는 **버전**으로 저장돼요
- 공유 화면에서 어떤 버전을 볼지 선택 가능해요
- **다른 세션**에서 업데이트하려면 artifact URL을 Claude에게 알려줘야 해요

```text
> https://claude.ai/code/artifact/5fbea6f3-...을 오늘 데이터로 업데이트해줘
```

---

## 공유 방법

- 처음에는 **나만 볼 수 있어요**
- 브라우저에서 artifact 열고 → 상단 **Share(공유)** 버튼
- 특정 팀원 또는 조직 전체에게 공개 가능
- **조직 외부 공개는 불가능**해요 (외부 공유 시 HTML 파일로 직접 전달)

<div class="note-circle">
○ 공유한 사람은 <strong>보기만</strong> 가능해요. 편집은 나만 할 수 있어요<br />
○ Artifact 갤러리: <a href="https://claude.ai/code/artifacts" target="_blank">claude.ai/code/artifacts</a>
</div>

---

## 디자인 시스템 적용

Artifact는 기본 스타일이 자동으로 적용되지만, **회사/팀 디자인 시스템**에 맞추고 싶으면 CLAUDE.md나 테마 파일에 설정해두면 돼요.

```markdown
## Design system

- Colors: primary #1a4d8f, accent #f59e0b, surface #f8fafc
- Typography: Inter for body, JetBrains Mono for code
- Spacing: 8px scale, 6px border radius
```

Claude가 이 내용을 읽고 디자인에 반영해줘요.

---

## 기술적 제약 (알아두면 좋아요)

| 제약 | 내용 |
|------|------|
| 외부 리소스 없음 | 다른 서버 파일·API 호출 불가 (CSS·JS·이미지 모두 내장) |
| 백엔드 없음 | 폼 저장, 로그인, API 연동 불가 |
| 단일 페이지 | 여러 페이지 링크 구조 불가 |
| 파일 형식 | `.html`, `.htm`, `.md`만 |
| 크기 제한 | 렌더링 결과 16MiB 이하 |

---

## 끄는 방법

```json
// ~/.claude/settings.json
{
  "disableArtifact": true
}
```

```bash
# 환경 변수로 끄기
export CLAUDE_CODE_DISABLE_ARTIFACT=1
```

또는 권한 설정에서 `Artifact`를 `permissions.deny`에 추가.

---

## 한 줄 요약

> **Team·Enterprise** 사용자라면: Claude 세션 결과물을 **"링크 하나**"로 팀원과 공유할 수 있어요. PR 리뷰, 대시보드, 비교 페이지에 써보세요.

---

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">code.claude.com/docs/en/artifacts</a><br />
○ 연관 기능: <a href="/docs/config/mcp-setup">MCP 서버 연결</a> (artifact에 실시간 데이터 붙이기) · <a href="/docs/config/skills-guide">Skills 가이드</a>
</div>
