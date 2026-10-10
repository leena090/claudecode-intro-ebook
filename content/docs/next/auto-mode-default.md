---
title: "[공] Auto mode가 이제 기본값이에요"
description: "2026년 9월 17일부터 Pro·Max·Team 플랜에서 Auto mode가 기본으로 적용돼 Claude가 더 오래 스스로 작업합니다"
tags: ["자동생성", "auto-mode", "권한", "2026-Q3", "기본설정변경"]
category: "next"
order: 11
lastUpdated: "2026-10-10"
---

## 이제 Claude Code가 기본으로 "자동 운전 모드"예요 🚗

2026년 9월 17일부터 **Pro·Max·Team 플랜 사용자**는 Claude Code를 열면 자동으로 **Auto mode(자동 모드)**가 켜져 있습니다.

마치 내비게이션을 켜면 자동으로 경로 안내가 시작되는 것처럼 — 별도 설정 없이 Claude가 더 오래, 더 자율적으로 작업할 수 있어요.

> **[공] 공식 발표 기준** — claude.com/claude-code 마케팅 페이지, 2026-09-17 Blog 게재

---

## Auto mode란 뭔가요?

Auto mode는 Claude Code가 **안전하다고 판단되는 명령은 자동 실행**하고, 위험한 명령은 여전히 여러분의 승인을 받는 모드입니다.

```
이전 (Manual mode 기본):
  사용자 명령 → Claude 제안 → 사용자가 "Y" 누름 → 실행

현재 (Auto mode 기본):
  사용자 명령 → Claude 실행 → [위험 감지 시만] 승인 요청
```

### 안전 장치는요?
Auto mode에는 **AI 기반 분류기(classifier)**가 내장돼 있어요. 위험하다고 판단되는 행동(예: 시스템 파일 삭제, 외부로 데이터 전송)은 Auto mode에서도 반드시 승인을 받습니다.

---

## 어떻게 달라지나요?

| 항목 | 이전(Manual 기본) | 현재(Auto 기본) |
|---|---|---|
| 파일 편집 | 매번 승인 요청 | 자동 실행 |
| 명령어 실행 | 매번 승인 요청 | 안전한 것만 자동 |
| 위험한 명령 | 승인 요청 | 여전히 승인 요청 |
| 작업 시간 | 짧은 세션 적합 | 장시간 작업 가능 |

---

## Manual mode로 되돌리려면?

Auto mode가 불편하다면 언제든지 바꿀 수 있어요:

```bash
# 세션 중 Manual로 전환
/permissions
# → Permission modes 탭에서 변경

# 또는 설정 파일에서
# ~/.claude/settings.json
{
  "permissionMode": "manual"
}
```

또는 `/config`를 열어 **Permission mode** 항목에서 직접 변경하세요.

---

## Auto mode 규칙 편집하기

W35 업데이트(2026년 8월)부터 `/permissions` 명령에 **Auto mode 탭**이 생겼어요. 어떤 명령을 자동으로 허용하거나 차단할지 직접 규칙을 추가·수정할 수 있습니다.

```bash
/permissions
# → Auto mode 탭 선택
# → Allow rule 또는 Deny rule 추가
```

> 💡 **팁**: 팀 환경에서는 `managed-settings`로 조직 전체에 Auto mode 규칙을 배포할 수도 있어요.

---

## 초보자를 위한 추천 설정

처음 Claude Code를 쓴다면 **Auto mode 기본값을 그대로** 두세요. 이미 Anthropic이 안전 기준을 꼼꼼히 설정해뒀으니, 대부분의 일상 작업은 편하게 자동으로 진행됩니다.

다만 아래 상황이라면 Manual mode를 고려하세요:
- 🏢 보안이 중요한 회사 프로젝트
- 🔐 민감한 데이터를 다루는 작업
- 🎓 Claude Code 작동 방식을 하나씩 배우는 중

---

> 📌 **출처**: [공] claude.com/claude-code (2026-09-17 blog 업데이트)  
> Auto mode classifier 과금: [공] code.claude.com/docs/en/auto-mode-classifier-billing
