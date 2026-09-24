---
title: "[공] Auto mode가 이제 기본값 — 더 자율적인 Claude Code"
description: "2026년 9월 17일부터 Claude Code가 Pro·Max·Team 플랜에서 Auto mode를 기본으로 실행해요. 위험한 명령만 체크하고 나머지는 스스로 판단해서 더 오랫동안 작업해요"
tags: ["자동생성", "AutoMode", "권한모드", "기본값변경", "Pro", "Max", "Team"]
category: "advanced"
order: 29
lastUpdated: "2026-09-24"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 발표: <a href="https://claude.com/claude-code">claude.com/claude-code</a> (Sep 17, 2026)<br />
★ <strong>[공]</strong> Auto mode 문서: <a href="https://code.claude.com/docs/en/auto-mode-config">code.claude.com/docs/en/auto-mode-config</a>
</div>

## 무엇이 바뀌었나요?

2026년 9월 17일부터 **Claude Code Pro·Max·Team 플랜에서 Auto mode가 기본 권한 모드**가 됐어요.

| 구분 | 변경 전 | 변경 후 |
|---|---|---|
| **기본 모드** | Default mode | **Auto mode** |
| **작동 방식** | 모든 작업 전 확인 요청 | 안전 분류기가 위험 명령만 차단 |
| **적용 플랜** | — | Pro, Max, Team |
| **발표일** | — | 2026년 9월 17일 |

---

## Auto mode란?

Auto mode는 Claude Code가 **스스로 판단해서 더 오랫동안 작업을 진행**할 수 있게 해주는 모드예요.

> 🚗 **비유로 설명하면**: 
> - **Default mode** = 매번 "이 교차로에서 직진할까요?" 묻는 내비게이션  
> - **Auto mode** = 안전한 경로는 혼자 주행하고, 공사 구간이나 위험 도로만 "우회할까요?" 묻는 자율주행차

### Auto mode의 안전 장치

Auto mode가 기본값이 됐다고 해서 완전 자율은 아니에요. **배경 안전 분류기(safety classifier)**가 작동해요:

| 상황 | Auto mode 동작 |
|---|---|
| 일반 파일 읽기·편집 | ✅ 자동 진행 |
| 명령어 실행 (npm, git 등) | ✅ 자동 진행 |
| 파일 삭제 | ⚠️ 확인 요청 |
| 외부 서비스 호출 | ⚠️ 확인 요청 |
| 위험하다고 분류된 명령 | 🚫 차단 또는 확인 |

---

## 모드 전환 방법

Auto mode가 불편하다면 언제든 바꿀 수 있어요:

```bash
# 대화 중 Shift+Tab으로 모드 순환
# 또는 명령으로 변경
/mode default    # 기존 Default mode (모든 작업 확인)
/mode auto       # Auto mode (위험 명령만 확인) ← 이제 기본값
/mode ask        # Ask mode (모든 작업 전 항상 확인)
```

VS Code에서는 모드 인디케이터를 클릭해서 바꿀 수 있고, Desktop 앱에서는 모드 선택 버튼이 있어요.

---

## 왜 이렇게 바꿨나요?

공식 블로그 기준으로 이유를 설명하면:

> "Claude Code가 더 오랫동안 작업할 수 있으면서도 위험한 명령은 여전히 잡아내요."

더 많은 작업을 인간의 개입 없이 처리하되, 실제로 위험한 상황에서만 사용자에게 알리는 방식이에요. 이렇게 하면 Claude Code가 긴 작업(시간·단계가 많은 리팩토링, 마이그레이션 등)을 더 효율적으로 처리할 수 있어요.

---

## Auto mode 고급 설정

조직 차원에서 Auto mode를 세밀하게 제어할 수 있어요:

```json
// .claude/settings.json
{
  "autoMode": {
    "trustedRepos": ["github.com/mycompany/*"],
    "trustedBuckets": ["s3://company-bucket"],
    "trustedDomains": ["internal.company.com"],
    "hardDenyPatterns": ["rm -rf /", "DROP TABLE"]
  }
}
```

| 설정 | 설명 |
|---|---|
| `trustedRepos` | 이 리포지토리에서는 더 느슨하게 허용 |
| `trustedDomains` | 이 도메인 호출은 자동 허용 |
| `hardDenyPatterns` | 절대 실행 불가 패턴 등록 |

---

## 팁 & 주의사항

<div class="note-star">
★ <strong>처음 Auto mode를 사용한다면</strong>: 처음 며칠은 Claude가 어떤 판단을 내리는지 지켜보는 걸 추천해요. 특히 중요한 코드베이스에서는 주의 깊게 모니터링하세요.
</div>

- **개인 프로젝트**: Auto mode는 편리하고 효율적이에요
- **팀·기업 환경**: IT/보안팀과 상의해 Auto mode 설정을 조정하는 걸 추천해요
- **민감한 코드베이스**: 필요에 따라 특정 명령 패턴을 `hardDenyPatterns`로 차단하세요

---

## 정리

Auto mode 기본값 변경은 Claude Code를 더 실용적이고 효율적으로 쓸 수 있게 해주는 큰 변화예요. 매번 "이 작업 해도 될까요?"라고 묻던 시절은 지나고, 이제 Claude Code는 스스로 판단하면서 더 긴 작업도 중단 없이 처리해요 — 물론 진짜 위험한 일은 여전히 여러분에게 물어봐요.
