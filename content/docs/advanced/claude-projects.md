---
title: "[공] Projects — 여러 작업을 Claude에게 한번에 맡기기"
description: "Projects는 관련된 여러 코딩 작업을 하나의 대화에서 Claude가 병렬로 처리하게 해주는 기능이에요. Pro·Max 플랜 퍼블릭 베타"
tags: ["자동생성", "Projects", "병렬세션", "클라우드세션", "프로젝트관리"]
category: "advanced"
order: 28
lastUpdated: "2026-09-25"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 문서: <a href="https://code.claude.com/docs/en/claude-projects">code.claude.com/docs/en/claude-projects</a><br />
퍼블릭 베타 (Pro·Max 플랜, 단계적 롤아웃 중) — Team·Enterprise는 추후 지원 예정
</div>

## Projects가 뭔가요?

**Projects**는 Claude Code에서 **관련된 여러 코딩 작업을 하나의 대화로 통합 관리**하는 기능이에요.

> 🏗️ **비유로 설명하면**: 기존 Claude Code는 "직원 한 명에게 일 하나씩 지시하는 것"이었어요. Projects는 마치 **"PM(프로젝트 관리자)인 당신이 Claude에게 전체 프로젝트를 넘기면, Claude가 알아서 여러 작업자(클라우드 세션)에게 일을 나눠주고 관리하는 것"** 이에요.

---

## 어떻게 동작하나요?

```
👤 당신 (PM 역할)
  → Claude에게 "이 프로젝트에서 할 일들이야" 전달

🧠 Claude (코디네이터 역할)
  → 각 작업별로 스레드(Thread) 생성
  → 각 스레드를 클라우드 세션으로 병렬 실행

☁️ 클라우드 세션들 (작업자 역할)
  → 서로 다른 작업을 동시에 처리
  → 완료·질문 시 Claude가 당신에게 보고
```

---

## 핵심 특징

| 특징 | 설명 |
|---|---|
| 🔄 **병렬 처리** | 여러 클라우드 세션이 동시에 작동 |
| 📱 **모바일 스티어링** | 폰에서 진행 상황 확인·지시 가능 |
| 🌙 **백그라운드 실행** | 노트북 닫아도 클라우드 세션은 계속 실행 |
| 📚 **컨텍스트 공유** | 저장소, 지시사항, 기억을 스레드 간 공유 |

---

## Projects vs 개별 세션 관리

| 방법 | 특징 |
|---|---|
| **개별 세션** | 직접 각 세션에 배경 설명, 진행 확인 필요 |
| **Projects** | Claude가 조율 — 뭘 할지 지시하면 나머지는 Claude가 |

> 💡 **예시**: "이 레포의 버그 3개 고쳐줘, 테스트도 작성하고, README도 업데이트해줘"라고 하면 Claude가 각 작업을 별개 스레드로 나눠 동시에 처리해요.

---

## 지금 사용할 수 없다면?

Projects는 **단계적 롤아웃** 중이에요. 내 계정에 아직 안 보인다면:

1. claude.ai/code 사이드바에서 **Projects** 확인
2. 없으면 → [대기자 명단 신청](https://claude.com/form/projects)

**그 사이 대안**: [병렬 에이전트 실행](https://code.claude.com/docs/en/agents)으로 비슷하게 활용할 수 있어요.

---

## 가용성

| 항목 | 상태 |
|---|---|
| **Pro·Max 플랜** | 퍼블릭 베타 (단계적 제공) |
| **Team·Enterprise** | 추후 지원 예정 |
| **필요 조건** | 클라우드 세션 사용 경험 있는 계정 우선 제공 |

> 📌 공식 발표 기준 — 정확한 요금제별 세부 기능은 [공식 문서](https://code.claude.com/docs/en/claude-projects)에서 확인하세요.
