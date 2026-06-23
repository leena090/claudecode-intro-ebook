---
title: "[공] Artifacts — 세션 결과물을 팀과 공유하는 살아있는 웹 페이지"
description: "클로드가 만든 대시보드, 분석 결과, 비교표를 클릭 가능한 웹 페이지로 만들어 팀원에게 링크로 보내세요. Team·Enterprise 전용 베타 기능"
tags: ["고급", "artifacts", "아티팩트", "공유", "team", "enterprise", "베타", "자동생성"]
category: "advanced"
order: 27
lastUpdated: "2026-06-23"
---

<div class="note-star">
★ <strong>공식 문서 기준</strong> — <a href="https://code.claude.com/docs/en/artifacts">code.claude.com/docs/en/artifacts</a> <code>[공]</code><br />
★ <strong>베타 기능</strong> — Team 또는 Enterprise 플랜 필요. Anthropic API 직접 연결 + <code>/login</code> 인증 필수.<br />
★ Bedrock·Vertex·Foundry·API 키 인증에서는 사용 불가.
</div>

## 아티팩트(Artifacts)가 뭔가요?

클로드가 분석하거나 만든 결과물을 **claude.ai의 비공개 URL로 배포되는 인터랙티브 웹 페이지**로 변환해주는 기능이에요.

> 🍱 **비유로 설명하면**: 지금까지 Claude가 준 결과물은 터미널에 쭉 출력된 텍스트였어요. 아티팩트는 그 텍스트를 **예쁜 전자 보고서**로 만들어서 팀원에게 링크로 보낼 수 있게 해줘요. 팀원이 링크를 열면 Claude가 계속 업데이트하는 살아있는 페이지를 볼 수 있어요.

---

## 언제 쓰면 좋아요?

| 이럴 때 쓰세요 ✅ | 이런 건 아니에요 ❌ |
|---|---|
| PR 리뷰어에게 코드 변경사항 안내 | 폼 입력 데이터를 저장하는 앱 |
| 세션 데이터로 만든 대시보드 | 여러 페이지로 이루어진 웹사이트 |
| 여러 구현 방법 나란히 비교 | API를 실시간으로 호출하는 도구 |
| 긴 작업의 진행 상황 타임라인 | 외부 서비스와 연동되는 기능 |
| 슬랙 붙여넣기 대신 링크로 공유 | 조직 외부에 공개하는 페이지 |

---

## 어떻게 만드나요?

Claude가 적합하다고 판단하면 자동으로 아티팩트를 만들기도 하고, 직접 요청할 수도 있어요.

```
> 이 PR 변경사항을 주석 달린 diff로 보여주는 아티팩트 만들어줘

> 지난주 배포 실패를 서비스별로 보여주는 대시보드 아티팩트 만들고 계속 업데이트해줘
```

Claude가 HTML이나 마크다운 파일을 작성한 뒤 **"이 페이지를 claude.ai에 배포할게요"** 라고 허락을 요청해요. **Yes**를 클릭하면 URL이 출력되고 브라우저가 자동으로 열려요.

> 💡 **팁**: `Ctrl+]`을 누르면 터미널에서 가장 최근 아티팩트를 다시 열 수 있어요.

---

## 업데이트와 공유

### 아티팩트 업데이트

```
> 요약 차트 아래에 지역별 세부 내역 추가하고 다시 배포해줘
```

같은 URL에서 자동으로 업데이트돼요. 보고 있는 팀원들도 바로 새 내용을 볼 수 있어요.

다른 세션에서 업데이트하려면 URL을 직접 알려주면 돼요:

```
> https://claude.ai/code/artifact/5fbea6f3-... 에 오늘 수치로 업데이트해줘
```

### 팀원과 공유

아티팩트는 처음엔 **나만 볼 수 있어요**. 브라우저에서 페이지 헤더의 **Share** 버튼으로 공유 범위를 설정해요.

- **특정 사람에게 공유**: 이메일로 지정
- **우리 조직 전체**: 같은 조직 구성원 누구나 볼 수 있음

> ⚠️ **주의**: 조직 외부로는 공유할 수 없어요. 외부에 보내려면 HTML 파일을 직접 받아서 전달하세요.

---

## 어떤 페이지를 만들 수 있나요?

아티팩트는 HTML 한 페이지예요. HTML, CSS, 인라인 JavaScript로 표현 가능한 것은 뭐든 돼요.

### 예시 프롬프트 모음

**PR 리뷰 안내:**
```
> 이 PR에 대한 아티팩트 만들어줘. diff에 마진 주석 달고 심각도 색상 표시해줘.
```

**여러 방안 비교:**
```
> 설정 패널 레이아웃 4가지 버전을 아티팩트에 그리드로 놓고 각 장단점 한 줄씩 달아줘.
```

**인터랙티브 슬라이더:**
```
> 이 애니메이션 easing curve, duration, delay를 슬라이더로 조정하는 아티팩트 만들어줘.
```

**작업 진행 상황 추적:**
```
> 마이그레이션 계획을 체크리스트 아티팩트로 만들고, 진행하면서 항목 체크해줘.
```

---

## 아티팩트의 제약사항

| 제약 | 내용 |
|---|---|
| 외부 요청 불가 | CSP 정책으로 외부 스크립트, API 호출, WebSocket 불가. CSS·이미지는 인라인 처리 |
| 백엔드 없음 | 폼 데이터 저장, 뷰어 인증, API 실시간 호출 불가 |
| 단일 페이지 | 여러 페이지 링크 불가. 섹션 간 이동은 앵커(#) 활용 |
| 파일 형식 | `.html`, `.htm`, `.md` 만 지원 |
| 최대 크기 | 렌더링 크기 16 MiB 이하 |

> 💡 **토큰 절약 팁**: 래스터 이미지(jpg, png) 대신 SVG 또는 HTML+CSS로 다이어그램 그리기, 대용량 데이터는 요약본만 포함하기.

---

## 이용 요건

| 조건 | 내용 |
|---|---|
| 플랜 | Team 또는 Enterprise (개인 Pro/Max 불가) |
| 인증 | `/login`으로 claude.ai 계정 로그인 상태 |
| 모델 제공자 | Anthropic API만 지원 (Bedrock, Vertex, Foundry 제외) |
| 조직 정책 | CMEK, HIPAA, Zero Data Retention 정책 없는 조직 |
| Claude Code 버전 | CLI 최신 버전 또는 Claude 데스크톱 앱 v1.13576.0 이상 |

---

## 끄고 싶다면

```json
// settings.json
{
  "disableArtifact": true
}
```

또는 환경변수:
```bash
export CLAUDE_CODE_DISABLE_ARTIFACT=1
```

---

## 디자인 시스템 적용

아티팩트 페이지를 내 서비스 디자인에 맞추고 싶다면 `CLAUDE.md`에 디자인 토큰을 기록해주세요:

```markdown
## Design system
- Colors: primary #1a4d8f, accent #f59e0b, surface #f8fafc
- Typography: Inter, JetBrains Mono (코드)
- Spacing: 8px 단위, 6px border radius
```

Claude가 이 정보를 자기 판단보다 우선적으로 적용해요.

---

## 📌 핵심 한 줄

> Claude 세션의 결과물을 **팀과 링크 하나로 공유**하는 기능. Team·Enterprise에서 베타 제공.
