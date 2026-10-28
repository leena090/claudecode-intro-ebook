---
title: "[공] Auto Mode가 이제 기본값 — Claude Code가 더 길게 일하게 됐어요 (2026년 8월)"
description: "2026년 8월 7일부터 Pro·Max·Team 플랜에서 Auto Mode가 기본으로 켜졌어요. Claude가 중간에 멈추지 않고 더 오래 작업을 이어가며, 위험 명령에는 자동 안전장치가 작동합니다"
tags: ["자동생성", "AutoMode", "자동모드", "허가", "안전장치", "기본설정"]
category: "tips"
order: 12
lastUpdated: "2026-10-28"
---

<div class="note-star">
★ <strong>[공]</strong> 마케팅 발표: Aug 7, 2026<br />
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/auto-mode-config">code.claude.com/docs/en/auto-mode-config</a><br />
👉 <strong>Pro·Max·Team 플랜</strong> 대상, 2026-08-07부터 기본 활성화
</div>

## 무엇이 달라졌나요?

2026년 8월 7일부터 **Auto Mode(오토 모드)** 가 Pro·Max·Team 플랜의 **기본 설정**이 됐어요.

> 🍱 **비유**: 이전에는 Claude가 매 단계마다 "이 파일 수정해도 될까요?"를 물어봤다면, 이제는 "알아서 하되, 위험한 건 한 번 더 확인할게요"로 바뀐 거예요.

---

## Auto Mode가 뭔가요?

**Auto Mode**는 Claude가 **허가 요청 없이 더 많은 작업을 알아서 처리**하는 모드예요. 단, 위험할 수 있는 명령(파일 삭제, 배포 등)에는 **백그라운드 안전 분류기(safety classifier)** 가 작동해서 한 번 더 확인해요.

| 일반 모드 | **Auto Mode** |
|---|---|
| 파일 수정 전 허가 요청 | 바로 수정, 중간에 안 물어봄 |
| 명령 실행 전 허가 요청 | 위험한 명령만 확인 |
| 더 자주 멈춤 | **더 오래 일함** |
| 짧은 작업에 적합 | **장기 작업에 적합** |

---

## 안전장치는 어떻게 작동하나요?

Auto Mode에는 **백그라운드 안전 classifier**가 포함돼 있어요. Claude가 명령을 실행하기 전에 숨겨진 분류기가 판단해요.

```
┌─────────────────────────────────────────┐
│  Claude가 명령 실행 전                    │
│                                          │
│  🔍 안전 classifier 판단                  │
│     └→ 안전하면: 바로 실행 ✅             │
│     └→ 위험하면: 허가 요청 ⚠️             │
│         예) rm -rf, git push --force     │
└─────────────────────────────────────────┘
```

> 🍱 **비유**: 회사 신입 직원이 업무를 알아서 처리하되, 계약서 서명이나 중요한 결정은 팀장에게 보고하는 것과 같아요.

---

## Auto Mode 청구 변경 (auto-mode-classifier-billing)

Auto Mode 사용 시 안전 classifier 실행에도 일부 비용이 발생할 수 있어요.

> ⚠️ **추정**: 구체적인 청구 방식은 공식 문서 `auto-mode-classifier-billing`에서 확인하세요.

---

## 이전 모드로 돌리고 싶다면?

### 방법 1: 설정에서 변경

```json
// ~/.claude/settings.json 또는 프로젝트 .claude/settings.json
{
  "permissionMode": "default"
}
```

### 방법 2: 명령줄 플래그

```bash
# 특정 실행에서만 이전 모드로
claude --permission-mode default
```

### 방법 3: `/config`로 변경

터미널에서 Claude Code 실행 중에:
```
/config
→ Permission Mode → default 선택
```

---

## 어떤 플랜에서 사용하나요?

| 플랜 | Auto Mode 기본값 |
|---|---|
| **Pro** | ✅ 기본 켜짐 |
| **Max** | ✅ 기본 켜짐 |
| **Team** | ✅ 기본 켜짐 |
| **Enterprise** | 관리자 설정에 따름 |
| **API 직접 사용** | 별도 설정 필요 |

---

## 💡 처음 Auto Mode를 쓰는 분을 위한 팁

1. **처음엔 작은 작업**부터 Auto Mode로 시작해봐요. 파일 몇 개 수정하는 버그 수정 정도가 좋아요.
2. **CLAUDE.md에 규칙 작성**: 절대 건드리면 안 되는 파일이나 명령을 명시해두면 Auto Mode에서도 Claude가 피해줘요.
3. **비용 주의**: 멈추지 않고 계속 실행하므로, 큰 작업은 예상 비용을 미리 확인하세요.
4. **불안하면 `/stop`**: 작업 중 이상하다 싶으면 언제든 `/stop`으로 멈출 수 있어요.
