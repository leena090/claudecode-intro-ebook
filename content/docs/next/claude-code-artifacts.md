---
title: "[공] 아티팩트 공유 — Claude Code 결과물을 링크로 팀원에게 전달"
description: "Claude Code가 만든 대시보드·보고서·차트를 비공개 웹페이지로 발행해서 팀원과 공유하는 기능. Team·Enterprise 플랜 전용"
tags: ["아티팩트", "공유", "team", "enterprise", "artifacts", "웹페이지", "자동생성"]
category: "next"
order: 12
lastUpdated: "2026-06-25"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code 공식 문서. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/artifacts" target="_blank">공식 문서: code.claude.com/docs/en/artifacts</a><br />
⚠️ <strong>Team 또는 Enterprise 플랜 전용</strong> — Pro·Max 플랜에서는 이용 불가
</div>

---

> 🍱 **한 줄 비유**: Claude Code가 만든 보고서를 "출력해서 나눠주는" 대신, **링크 하나로 팀 전체에게 실시간으로 공유**하는 기능이에요.

---

## 이게 뭔가요?

Claude Code가 작업 결과를 **비공개 웹페이지(URL)로 발행**하는 기능이에요. 만든 결과물을 링크로 팀원에게 보내면, 그 사람이 브라우저에서 바로 볼 수 있어요.

> 🍱 **비유로 설명**: 예전엔 보고서를 카카오톡으로 사진 찍어 보냈다면, 이제는 Claude가 보고서를 웹사이트로 만들어서 "이 링크 열어봐" 하는 거예요. 열 때마다 최신 내용으로 자동 업데이트까지 돼요.

**어떤 걸 만들 수 있나요?**

| 용도 | 예시 |
|---|---|
| PR 리뷰 안내 | 코드 변경 내역 + 설명이 담긴 페이지 |
| 대시보드 | 데이터 분석 결과 차트·표 |
| 옵션 비교 | 여러 구현 방법 나란히 놓고 비교 |
| 진행 상황 추적 | 긴 작업 중 단계별 체크리스트 |
| 인터랙티브 도구 | 슬라이더·토글로 값 조절하는 페이지 |

---

## 사용하는 방법

**Claude에게 직접 요청:**

```
PR 코드 변경사항을 주석과 함께 정리한 아티팩트 만들어줘.

지난 주 배포 실패 현황을 서비스별로 보여주는 대시보드 만들어줘.
```

Claude가 HTML 파일을 만들고 발행하기 전에 허락을 구해요. "허용(Yes)"을 누르면 브라우저에서 자동으로 열려요.

**단축키로 다시 열기:**
```
Ctrl + ]
```
가장 최근 아티팩트를 터미널에서 바로 다시 열어요.

**자동 브라우저 열기 끄기:**
```bash
export CLAUDE_CODE_ARTIFACT_AUTO_OPEN=0
```

---

## 팀원과 공유하기

새로 만든 아티팩트는 **나만 볼 수 있어요**. 공유하려면:

1. 브라우저에서 페이지 열기
2. 페이지 상단의 **Share(공유)** 버튼 클릭
3. 특정 사람 또는 조직 전체에게 공개

| 주의사항 | 내용 |
|---|---|
| 범위 | 같은 조직(회사) 내부 공유만 가능. 외부 공유 불가 |
| 수정 | 링크 받은 사람은 읽기만 가능. 수정은 나만 함 |
| 외부 전달 | HTML 파일 자체를 직접 파일로 보내야 함 |

---

## 아티팩트 업데이트

Claude에게 수정을 요청하면 **같은 URL에서 바로 업데이트**돼요.

```
요약 차트 아래에 지역별 세부 내역 추가하고 다시 발행해줘.
```

링크를 열어둔 사람들한테 실시간으로 업데이트가 보여요. 각 발행본이 버전으로 저장되어, Share 설정에서 어느 버전을 공유할지 선택할 수 있어요.

**다른 세션에서 기존 아티팩트 수정:**
```
https://claude.ai/code/artifact/5fbea6f3-... 이 페이지에 오늘 수치로 업데이트해줘.
```

---

## 이용 조건

| 조건 | 내용 |
|---|---|
| **플랜** | **Team 또는 Enterprise** (Pro·Max 불가) |
| 로그인 방법 | `/login`으로 claude.ai 로그인 필요 (API 키 방식 불가) |
| 모델 제공자 | Anthropic API만 가능 (Amazon Bedrock·Google Vertex·Microsoft Foundry 불가) |
| 예외 | CMEK·HIPAA·Zero Data Retention 적용 조직은 불가 |

---

## 기술적 제한 (개발자 참고)

| 제한 | 내용 |
|---|---|
| 외부 요청 없음 | 다른 서버로 데이터 요청 불가 (CSP 정책) |
| 백엔드 없음 | 폼 데이터 저장·API 호출 불가 |
| 단일 페이지 | 여러 페이지(라우트) 구성 불가 |
| 파일 형식 | `.html`, `.htm`, `.md`만 가능 |
| 크기 제한 | 렌더링 후 16 MiB 이하 |

---

## 끄는 방법

```bash
# 환경 변수로 끄기
export CLAUDE_CODE_DISABLE_ARTIFACT=1

# 설정 파일로 끄기 (settings.json)
{ "disableArtifact": true }

# 권한 규칙으로 끄기 (settings.json)
{ "permissions": { "deny": ["Artifact"] } }
```

---

<div class="note-circle">
○ <strong>webapp/artifacts.md</strong>의 "아티팩트"와 다른 기능이에요. 그 기능은 claude.ai 웹 채팅 화면 오른쪽의 결과물 창이고, 이 기능은 Claude Code에서 링크로 공유하는 기능이에요.<br />
○ 공식 아티팩트 갤러리: <a href="https://claude.ai/code/artifacts" target="_blank">claude.ai/code/artifacts</a>에서 내가 만든 모든 아티팩트를 볼 수 있어요.
</div>

## 📎 관련 가이드

- [아티팩트 — AI가 만든 결과물 바로 보기](/docs/webapp/artifacts) — claude.ai 채팅 아티팩트 (다른 기능)
- [Dynamic Workflows — 서브에이전트 병렬 처리](/docs/advanced/dynamic-workflows)
- [팀 플랜 기능 비교](/docs/setup/plans)
