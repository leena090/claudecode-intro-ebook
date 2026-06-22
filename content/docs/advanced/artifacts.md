---
title: "[공] 아티팩트(Artifacts) — 세션 결과물을 브라우저 링크로 공유하기"
description: "Claude Code 세션에서 만든 대시보드·비교표·체크리스트를 클릭 한 번에 브라우저 페이지로 게시하고 조직 내 팀원에게 링크로 공유 (Team·Enterprise 전용, 베타)"
tags: ["고급", "아티팩트", "artifacts", "공유", "Team", "Enterprise", "링크", "자동생성"]
category: "advanced"
order: 22
lastUpdated: "2026-06-22"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — 베타 기능. Team·Enterprise 플랜 전용. Anthropic 직접 API만 지원 (AWS Bedrock·GCP Vertex·Azure 불가). <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a>
</div>

## 아티팩트(Artifacts)가 뭔가요?

Claude Code가 만들어 낸 결과물 — 차트, 요약 보고서, 비교표, 체크리스트 — 을 **브라우저에서 열 수 있는 실시간 웹 페이지로 게시**해요. 생성된 페이지는 `claude.ai` 내 **비공개 URL**에 올라가요. 같은 조직 내 팀원한테만 링크를 공유할 수 있어요.

> 🍱 **비유**: 터미널에 나온 텍스트는 마치 주방에서 요리사가 소리로 설명하는 거예요. 아티팩트는 그 내용을 예쁜 접시에 담아 손님(팀원) 테이블에 갖다 주는 것과 같아요 — 텍스트 대신 보기 좋은 페이지로요.

---

## 어떤 상황에 써요?

| 쓰기 좋은 경우 ✅ | 안 맞는 경우 ❌ |
|----------------|-------------|
| PR 리뷰어에게 변경 사항 시각적으로 설명 | 조직 밖 외부인과 공유 |
| 여러 구현 방식을 나란히 비교 | 여러 페이지·여러 라우트 필요 |
| 대규모 작업 진행 상황 실시간 공유 | API 호출·폼 데이터 저장 |
| 슬랙에 긴 텍스트 붙여넣는 대신 링크 전달 | Bedrock·Vertex·Azure 사용 중 |

---

## 사용 방법

### 아티팩트 만들기

Claude에게 자연어로 요청하거나, Claude가 스스로 판단해서 게시하기도 해요.

```text
# 예시 1: PR 리뷰어를 위한 설명 페이지
> 이 PR을 변경 사항 주석과 함께 설명하는 아티팩트 만들어줘

# 예시 2: 배포 실패 대시보드 (조사하면서 계속 업데이트)
> 지난주 배포 실패 현황을 서비스별로 보여주는 대시보드 아티팩트 만들고,
  조사하면서 계속 업데이트해줘

# 예시 3: A/B/C 방식 비교 페이지
> 설정 패널 레이아웃 4가지 변형을 나란히 보여주는 아티팩트 만들어줘

# 예시 4: 체크리스트 (작업하면서 완료 표시)
> 이 마이그레이션 계획을 체크리스트 아티팩트로 만들고, 완료되면 체크해줘
```

Claude Code가 **"이 아티팩트를 게시할까요?"** 라고 물어보면 **Yes** 를 선택하면 돼요.  
브라우저가 자동으로 열리고 URL이 출력돼요.

```bash
# 가장 최근 아티팩트를 다시 열 때
Ctrl+]
```

### 아티팩트 업데이트하기

```text
# 현재 세션에서 업데이트
> 요약 차트 아래에 지역별 세부 분류 추가하고 다시 게시해줘

# 다른 세션에서 업데이트할 때 (URL이 필요해요)
> https://claude.ai/code/artifact/5fbea6f3-... 를 오늘 수치로 업데이트해줘
```

페이지를 열어둔 팀원들은 **업데이트된 내용을 자동으로** 봐요.

### 공유하기

처음엔 나만 볼 수 있어요. 브라우저 페이지 상단의 **Share 버튼**으로 팀원에게 공개할 수 있어요.

| 공유 범위 | 설명 |
|---------|------|
| 나만 (기본) | 처음 게시 시 나만 볼 수 있어요 |
| 특정 팀원 | 조직 내 지정한 사람만 |
| 조직 전체 | 같은 claude.ai 조직의 모든 멤버 |
| 조직 밖 | ❌ 불가 (외부 공유는 HTML 파일을 직접 공유하세요) |

---

## 인터랙티브 아티팩트도 만들 수 있어요

단순 텍스트·차트뿐 아니라 **슬라이더·토글·드래그** 같은 인터랙션도 지원해요.

```text
# 슬라이더로 애니메이션 타이밍 조절
> 이 트랜지션 easing curve, duration, delay를 슬라이더로 조절하고
  실시간으로 애니메이션 미리보기가 되는 아티팩트 만들어줘

# 이슈 트리아지 보드 (드래그 앤 드롭)
> 열린 이슈를 Now·Next·Later·Cut 컬럼으로 드래그하는 트리아지 보드 아티팩트 만들어줘.
  최종 정렬을 터미널에 붙여넣을 수 있는 "Copy as prompt" 버튼도 추가해줘
```

---

## 자동 실행 끄기·켜기

```bash
# 브라우저 자동 열기 끄기
export CLAUDE_CODE_ARTIFACT_AUTO_OPEN=0

# 아티팩트 기능 자체 끄기 (설정 파일)
# ~/.claude/settings.json 또는 프로젝트 .claude/settings.json
{
  "disableArtifact": true
}

# 아티팩트 기능 끄기 (환경 변수)
export CLAUDE_CODE_DISABLE_ARTIFACT=1

# 권한 규칙으로 끄기
# .claude/settings.json
{
  "permissions": {
    "deny": ["Artifact"]
  }
}
```

---

## 아티팩트 페이지 제한 사항

아티팩트는 **단일 HTML 페이지**예요. 아래 제한을 알아두세요:

| 제한 | 내용 |
|------|------|
| 외부 요청 불가 | CDN·API·WebSocket 등 외부 리소스 로드 안 됨 (CSP 차단) |
| 백엔드 없음 | 폼 데이터 저장·외부 API 호출 불가 |
| 단일 페이지 | 다중 라우트·서브페이지 없음 (앵커로 구성) |
| 파일 형식 | `.html`, `.htm`, `.md` 만 지원 |
| 최대 크기 | 렌더링 크기 **16 MiB** 이하 |

> 💡 토큰 비용 절약 팁: SVG나 CSS로 도표 그리기, 대용량 이미지 data URI 피하기, 불필요한 인터랙션 생략하기

---

## 디자인 시스템 맞추기

우리 서비스 브랜딩과 어울리게 하려면 CLAUDE.md에 디자인 토큰을 기록하세요:

```markdown
## Design system
- Colors: primary #1a4d8f, accent #f59e0b, surface #f8fafc
- Typography: Pretendard for body, D2Coding for code
- Spacing: 8px scale, 6px border radius
```

Claude가 이 정보를 우선 참고해서 아티팩트 스타일을 맞춰줘요.

---

## 이용 조건

| 조건 | 내용 |
|------|------|
| **플랜** | Team 또는 Enterprise (Pro·Max 불가) |
| **로그인** | `/login`으로 claude.ai 로그인 필수 (API Key 세션 불가) |
| **모델 제공자** | Anthropic 직접 API 만 (Bedrock·Vertex·Azure 불가) |
| **조직 정책** | CMEK·HIPAA·Zero Data Retention 설정 조직 불가 |

> 🍱 **비유**: 아티팩트는 회사 사내 게시판 같아요. 회사(조직) 구성원만 볼 수 있고, 회사 안에서만 공유돼요. 외부 업체에는 PDF로 내보내서 따로 드려야 해요.

---

<div class="note-circle">
○ 베타 기능 — 기능·UI가 변경될 수 있어요<br />
○ Team plan: 기본 활성화 / Enterprise: 관리자가 별도 활성화 필요<br />
○ 아티팩트 갤러리: <a href="https://claude.ai/code/artifacts" target="_blank">claude.ai/code/artifacts</a><br />
○ 연관 기능: <a href="/docs/advanced/plugins">플러그인</a> · <a href="/docs/config/mcp-setup">MCP 서버</a> · <a href="/docs/advanced/routines">루틴</a>
</div>
