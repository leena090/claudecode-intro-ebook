---
title: "[공] 주간 업데이트: 2026년 5월 18일 ~ 22일 (Week 21)"
description: "Auto mode가 Pro 플랜·Sonnet 4.6에서도 사용 가능! /code-review 신규 명령어, /usage 상세 내역, /usage-credits 이름 변경까지 한번에 정리"
tags: ["업데이트", "2026", "week21", "auto-mode", "code-review", "usage", "자동생성"]
category: "next"
order: 9
lastUpdated: "2026-06-05"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Claude Code v2.1.143 ~ v2.1.149 (2026-05-18 ~ 22) 릴리즈 노트 기반이에요. <a href="https://code.claude.com/docs/en/whats-new/2026-w21">원문 보기</a>
</div>

## 이번 주 한 줄 요약

> **"Auto mode, 이제 Pro 플랜 쓰는 분도 쓸 수 있어요!"**

---

## 🔓 Auto mode, Pro 플랜으로 확장

지금까지 Auto mode는 특정 플랜만 쓸 수 있었는데, 이번 주부터 **Pro 플랜**에서도 사용 가능해졌어요. **Sonnet 4.6 모델도 지원**됩니다.

> 🍱 **비유로 설명하면**: Auto mode는 클로드에게 "일일이 물어보지 말고, 알아서 해"라고 맡기는 모드예요. 마치 믿을 수 있는 직원에게 "이 업무는 그냥 처리해줘, 이상한 거 있으면 그때 알려줘"라고 하는 것과 같아요.

### Auto mode가 뭔가요?

| 일반 모드 | Auto mode |
|-----------|-----------|
| 파일 수정할 때마다 "이렇게 해도 될까요?" 물어봄 | 안전한 작업은 그냥 진행, 위험한 것만 알려줌 |
| 허락 요청이 많아서 집중이 흐트러짐 | 작업 흐름이 끊기지 않음 |
| 내가 항상 옆에 있어야 함 | 잠깐 자리를 비워도 OK |

### 사용 방법

터미널에서 `Shift+Tab`을 눌러 모드를 순환하면 Auto mode가 나타나요.

```bash
# 최신 버전으로 업데이트 먼저
claude update
```

업데이트 후 `Shift+Tab`으로 순환하면 계정 조건에 맞을 때 Auto mode가 표시됩니다.

<div class="note-star">
★ <strong>주의</strong> — Auto mode는 백그라운드 안전 분류기(safety classifier)를 사용해요. 평범한 파일 수정·테스트 실행은 자동 승인, 삭제나 외부 API 호출 같은 위험한 작업은 여전히 알려줘요.
</div>

---

## 📊 /usage — 이제 어디서 토큰을 쓰는지 보여줘요

`/usage` 명령어가 업그레이드됐어요. 전에는 그냥 전체 사용량만 보여줬는데, 이제는 **어떤 스킬·서브에이전트·MCP 서버가 얼마나 쓰는지** 카테고리별로 분류해줘요.

```
/usage
```

| 항목 | 내용 |
|------|------|
| 스킬(Skills) | /deep-research 같은 스킬이 쓴 토큰 |
| 서브에이전트 | 백그라운드에서 돌아간 에이전트 비용 |
| MCP 서버 | 연결된 외부 도구 사용량 |
| 플러그인 | 설치된 플러그인 비용 |

> 🍱 **비유로 설명하면**: 예전엔 카드 명세서에 "이번 달 총 100만원"만 나왔다면, 이제는 "식비 30만원, 교통비 15만원, 쇼핑 55만원"처럼 항목별로 나와요.

---

## 💳 '여분 사용량' → '사용 크레딧'으로 이름 변경

헷갈리는 이름이 정리됐어요.

| 이전 이름 | 새 이름 | 명령어 |
|-----------|---------|--------|
| Extra usage | Usage credits | `/usage-credits` |
| `/extra-usage` 명령어 | `/usage-credits` | 둘 다 작동 |

> 아직 `/extra-usage`를 쓰고 계셔도 당장은 괜찮아요. 하지만 앞으로는 `/usage-credits`로 쓰는 게 좋아요.

---

## 🔍 /code-review — 새 코드 리뷰 명령어

새로운 `/code-review` 명령어가 추가됐어요! 코드에서 실제로 **동작이 잘못된 버그**를 찾아줘요.

```
# 기본 리뷰
/code-review

# 높은 강도로 리뷰 (더 꼼꼼하게)
/code-review high

# GitHub PR에 인라인 코멘트로 달기
/code-review --comment
```

### `/code-review` vs `/simplify` 차이

| 명령어 | 목적 |
|--------|------|
| `/code-review` | 버그·보안 취약점·로직 오류 찾기 |
| `/simplify` | 중복 코드 정리, 더 간결하게 고치기 |

> 🍱 **비유로 설명하면**: `/code-review`는 "이 코드가 제대로 **작동**하는가?"를 확인하는 거고, `/simplify`는 "이 코드가 충분히 **깔끔**한가?"를 확인하는 거예요.

---

## 기타 개선사항

| 항목 | 내용 |
|------|------|
| 백그라운드 세션 | `/resume` 목록에서 `bg` 표시로 확인 가능 |
| `claude agents --json` | 실행 중인 세션을 JSON으로 출력, 스크립트 활용 |
| Windows PowerShell 도구 | Bedrock·Vertex·Foundry 사용자도 기본 활성화 |
| 플러그인 설치 전 미리보기 | 명령어·에이전트·MCP 서버 목록을 설치 전에 확인 가능 |
| GFM 체크박스 렌더링 | 마크다운 `- [ ]` 체크박스가 제대로 표시 |

---

## 이번 주 총정리

| 태그 | 변경 내용 | 대상 |
|------|-----------|------|
| [공] | Auto mode — Pro 플랜·Sonnet 4.6 지원 확대 | Pro 플랜 사용자 |
| [공] | /code-review 명령어 신규 추가 | 모든 사용자 |
| [공] | /usage 카테고리별 상세 내역 | 모든 사용자 |
| [공] | Extra usage → Usage credits 이름 변경 | 모든 사용자 |

> 다음 주(Week 22)엔 더 큰 소식이 있어요 — **Claude Opus 4.8 출시**와 **Dynamic Workflows** 리서치 프리뷰가 공개됩니다! 👀
