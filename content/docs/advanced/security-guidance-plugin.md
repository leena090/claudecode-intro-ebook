---
title: "[공] 보안 지도 플러그인 — Claude가 코드를 짜면서 스스로 보안 검토해요"
description: "security-guidance 플러그인을 설치하면 Claude가 코드를 작성하는 동안 자동으로 보안 취약점을 찾고 같은 세션에서 바로 수정해요"
tags: ["고급", "보안", "security", "플러그인", "plugin", "자동생성", "2026", "week22"]
category: "advanced"
order: 29
lastUpdated: "2026-06-06"
---

<div class="note-star">
★ <strong>공식 문서 기반</strong> — code.claude.com/docs/en/security-guidance. Week 22 (2026-05-25~29) 출시. <code>[공]</code>
</div>

## 보안 지도 플러그인이 뭔가요?

**`security-guidance` 플러그인**은 Claude Code가 코드를 작성하는 동안 **자동으로 보안 취약점을 검토하고, 같은 세션 안에서 바로 수정**하는 기능이에요.

> 🍱 **비유로 설명하면**: 요리사가 음식을 만들면서 동시에 위생사가 옆에서 "저 재료는 유통기한 지났어요", "이 조리법은 살균이 안 돼요" 라고 바로 알려주는 것처럼 — 코드를 짜면서 실시간으로 보안 문제를 잡아줘요.

기존에는 코드를 다 짠 후에 별도로 보안 검토를 했어야 했는데, 이제는 **작성 중에 자동으로 함께** 이루어져요.

---

## 어떤 보안 문제를 잡아주나요?

| 취약점 유형 | 예시 |
|------------|------|
| **SQL 인젝션** | 사용자 입력이 직접 쿼리에 들어가는 경우 |
| **XSS (크로스 사이트 스크립팅)** | HTML에 삽입되는 미검증 데이터 |
| **하드코딩된 비밀정보** | API 키, 패스워드가 코드에 직접 들어간 경우 |
| **안전하지 않은 의존성** | 취약점이 있는 버전의 라이브러리 사용 |
| **인증·권한 오류** | 잘못된 접근 제어 패턴 |
| **OWASP Top 10** | 주요 웹 보안 취약점 기준 검토 |

> 🍱 **비유**: 건물 설계도를 그리면서 소방서 직원이 옆에서 "여기 비상구가 너무 좁아요", "저 가스관 위치가 위험해요" 라고 동시에 알려주는 것처럼요.

---

## 설치 방법

```bash
# 플러그인 설치
claude plugin install security-guidance

# 설치 확인
claude plugin list
```

설치 후 자동으로 활성화돼요. 별도 설정 없이 Claude가 코드를 작성하면 함께 보안 검토가 시작돼요.

---

## 어떻게 동작하나요?

### 기본 동작

1. Claude가 코드를 작성하거나 수정할 때
2. 보안 지도 플러그인이 해당 코드를 자동으로 분석
3. 취약점 발견 시 → Claude에게 알림
4. Claude가 **같은 세션 안에서 바로 수정**

예시 흐름:
```
사용자: "로그인 API 만들어줘"

Claude: [코드 작성 중...]
         [security-guidance 분석: 비밀번호를 평문으로 DB에 저장하는 패턴 감지]
         "잠깐, 비밀번호 저장 방식에 보안 문제가 있어요.
          bcrypt로 해싱해서 저장하도록 수정할게요."

         [수정된 코드로 자동 대체]
```

### 수동으로 보안 검토 요청하기

플러그인 없이도 Claude에게 직접 요청할 수 있어요:

```bash
# 현재 변경 사항 보안 검토
/code-review
```

하지만 `security-guidance` 플러그인은 **자동으로, 작성 중에** 실시간으로 잡아준다는 차이가 있어요.

---

## 프로젝트에 항상 활성화하기

특정 프로젝트에서 항상 보안 지도를 켜두려면 `.claude/settings.json`에 추가하세요:

```json
// .claude/settings.json
{
  "plugins": ["security-guidance"]
}
```

이제 이 프로젝트에서 Claude Code를 실행할 때마다 자동으로 보안 지도가 함께 돌아가요.

---

## 보안 지도 vs 코드 리뷰 비교

| 비교 | security-guidance 플러그인 | /code-review |
|------|---------------------------|--------------|
| **시점** | 코드 작성 중 (실시간) | 작성 후 (일괄) |
| **자동화** | 완전 자동 | 수동 명령 |
| **수정** | 자동 수정 제안 | 수정 제안만 |
| **범위** | 보안 특화 | 전반적 코드 품질 |
| **사용 상황** | 신규 코드 작성 시 | PR 전 최종 검토 |

> 🍱 **비유**: security-guidance는 요리하면서 실시간으로 위생 점검하는 것이고, /code-review는 다 만든 요리를 마지막에 전체적으로 맛보는 것이에요. 둘 다 쓰면 더 안전해요.

---

## 실전 팁

### 백엔드 API 개발에 필수

```bash
# 결제 API 같은 중요한 기능 개발 시
claude plugin install security-guidance
claude

# 이제 Claude한테 그냥 시키면 됨
"결제 처리 API 엔드포인트 만들어줘"
# → Claude가 코드 짜면서 보안 자동 체크
```

### 팀 전체에 강제 적용

```json
// .claude/settings.json (프로젝트 공용)
{
  "plugins": ["security-guidance"],
  "permissions": {
    "deny": ["Write(.env)"]
  }
}
```

이 파일을 레포에 커밋해두면 팀 전원이 같은 보안 지도를 받아요.

---

## 플러그인 비활성화

필요하다면 일시적으로 끌 수 있어요:

```bash
# 세션에서 비활성화
claude plugin disable security-guidance

# 프로젝트에서 제거
claude plugin uninstall security-guidance
```

---

## 더 알아보기

- [공식 문서: security-guidance](https://code.claude.com/docs/en/security-guidance)
- [플러그인 사용 가이드](/docs/cowork/cowork-plugins) — 플러그인 전반적 사용법
- [주간 업데이트 Week 22](/docs/next/whats-new-w21-w22) — security-guidance가 나온 주 전체 업데이트
- [/code-review 가이드](/docs/commands/commands-overview) — 일괄 코드 리뷰 방법

<div class="note-circle">
○ security-guidance 플러그인은 공식 마켓플레이스에서 설치해요<br />
○ 보안 검토는 참고 자료예요 — 실제 보안 감사는 전문가와 함께 하세요
</div>
