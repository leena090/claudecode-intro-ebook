---
title: "[공] Code Review 정식 출시 & Auto Mode 기본값화 & Self-hosted 베타"
description: "2026년 8~10월 Claude Code 주요 업데이트 세 가지: Code Review 일반 출시(GA), Auto Mode가 기본값으로 변경, 자체 인프라 실행(Self-hosted) 공개 베타 시작"
tags: ["자동생성", "코드리뷰", "Code Review", "Auto Mode", "자동모드", "Self-hosted", "셀프호스티드"]
category: "next"
order: 17
lastUpdated: "2026-11-02"
---

<div class="note-star">
★ <strong>[공] 공식 발표 기준</strong> — 마케팅 페이지 공식 발표 내용을 바탕으로 작성했어요.<br/>
★ Code Review GA: Oct 15, 2026 / Auto Mode 기본값화: Aug 7, 2026 / Self-hosted 베타: Aug 6, 2026
</div>

---

## 1. Code Review 정식 출시 (GA) — Team·Enterprise

### 무엇이 달라졌나요?

**Code Review**가 Team과 Enterprise 플랜에서 **일반 출시(GA, Generally Available)**됐어요.

> 🔍 **비유로 설명하면**: 베타 테스트 기간 동안 선택받은 사람만 쓸 수 있던 카페가 드디어 일반 손님 모두에게 문을 연 거예요.

### Code Review가 뭔가요?

- **AI 에이전트가 PR(풀 리퀘스트)을 자동 검토**해주는 기능
- 버그 가능성이 있는 코드, 성능 이슈, 보안 취약점을 사람보다 빠르게 감지
- GitHub와 연동해서 PR이 올라오면 자동으로 리뷰 코멘트를 달아줘요

### 어디서 쓸 수 있나요?

| 플랜 | Code Review 사용 |
|------|----------------|
| **Team** | ✅ 정식 지원 |
| **Enterprise** | ✅ 정식 지원 |
| Pro / Max | 추정: 별도 안내 없음 |

### Claude Code에서 쓰는 법

```bash
# PR 코드 리뷰 시작
/code-review

# 원격 PR 리뷰 (PR 번호 지정)
/code-review 123
```

---

## 2. Auto Mode 기본값화 — Pro·Max·Team 플랜

### 무엇이 달라졌나요?

Claude Code가 이제 **Auto Mode(자동 모드)를 기본값으로** 실행해요 (Pro, Max, Team 플랜 기준).

> 🚗 **비유로 설명하면**: 이전에는 운전자가 직접 수동 기어를 조작해야 했는데, 이제 기본이 자동 기어로 바뀐 거예요. 원하면 수동으로 전환도 가능하고요.

### Auto Mode가 뭔가요?

- Claude가 지시받은 작업을 **사람 개입 없이 자동으로 계속 진행**하는 모드
- **백그라운드 안전 분류기(classifier) 포함** — 위험한 명령(파일 삭제, 권한 변경 등)은 자동으로 멈추고 확인을 요청해요

### 주의할 점

Auto Mode가 기본값이 됐다고 해서 "뭐든 다 알아서 한다"는 뜻은 아니에요. **위험한 명령은 여전히 사람에게 확인을 요청**해요.

---

## 3. Self-hosted Environments — 공개 베타 시작

### 무엇인가요?

**Self-hosted environments**는 Claude Code 세션을 **여러분의 자체 서버·인프라에서 직접 실행**할 수 있는 기능이에요.

> 🏠 **비유로 설명하면**: 지금까지 Anthropic 클라우드라는 "외부 주방"을 빌려 요리했다면, 이제 여러분 회사 "자체 주방"에 직접 요리사(Claude)를 초대하는 거예요.

### 왜 필요한가요?

| 상황 | Self-hosted가 필요한 이유 |
|------|--------------------------|
| 금융·의료·정부 기관 | 데이터를 외부 서버에 보내기 어려움 |
| 내부 API·DB 접근 필요 | 회사 내부 서비스와 직접 통신 가능 |
| 보안 정책 준수 | 네트워크 경계 안에서 실행 |

### 현재 상태

- 2026-08-06 기준 **공개 베타(Public Beta)** 시작
- Team/Enterprise 플랜 필요 (추정)
- 세부 설정은 공식 문서 [Self-hosted documentation](https://code.claude.com/docs/en/third-party-integrations) 참조

---

## 세 기능 요약

| 기능 | 출시 | 대상 플랜 |
|------|------|-----------|
| Code Review GA | Oct 15, 2026 | Team, Enterprise |
| Auto Mode 기본값화 | Aug 7, 2026 | Pro, Max, Team |
| Self-hosted Environments | Aug 6, 2026 (베타) | Team, Enterprise (추정) |

---

## 출처

- claude.com/claude-code 마케팅 페이지 "Latest feature announcements" (2026-11-02 확인)
- Code Review 공식 Blog: Oct 15, 2026
- Auto mode Blog: Aug 7, 2026
- Self-hosted Blog: Aug 6, 2026
