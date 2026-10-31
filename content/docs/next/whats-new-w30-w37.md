---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7월 말~9월)"
description: "Auto mode 기본 전환, Self-hosted environments 베타, Projects 출시, Claude 5.5 패밀리 등 2026년 7월 말~9월 주요 8주치 업데이트 한국어 정리"
tags: ["자동생성", "주간업데이트", "신기능", "auto-mode", "self-hosted", "projects", "claude5-5", "2026"]
category: "next"
order: 17
lastUpdated: "2026-10-31"
---

<div class="note-star">
★ <strong>[공]</strong> 이 글은 <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com 공식 What's New</a> (W30~W37) 내용을 한국어로 정리한 것입니다.<br />
★ 오늘 날짜(2026-10-31) 기준 최신 업데이트. W31은 공식 문서에 게시되지 않았어요.<br />
★ 각 주차의 정확한 세부 내용은 공식 문서에서 확인하세요.
</div>

## 한 눈에 보는 8주 요약

| 주차 | 기간 (추정) | 핵심 |
|---|---|---|
| **W30** | 7/21~7/27 | (공식 문서 참조) |
| **W31** | 7/28~8/3 | (미게시) |
| **W32** | 8/4~8/10 | Self-hosted environments 베타, Auto mode 기본 전환 |
| **W33** | 8/11~8/17 | (공식 문서 참조) |
| **W34** | 8/18~8/24 | (공식 문서 참조) |
| **W35** | 8/25~8/31 | (공식 문서 참조) |
| **W36** | 9/1~9/7 | (공식 문서 참조) |
| **W37** | 9/8~9/14 | Projects 출시 예고, Claude 5.5 준비 |

> 💡 **참고**: W31은 공식 llms.txt에 등재되지 않았어요. 공휴일 등으로 업데이트가 없었을 가능성이 있어요.

---

## 🔑 W32 (8월 초): 두 가지 큰 변화

### 1. Auto Mode가 이제 기본값이에요 (Aug 7, 2026)

> 🚗 **비유**: 예전엔 차에 탈 때마다 "자동 기어로 바꿔줘"라고 말해야 했는데, 이제 처음부터 자동 기어로 설정된 거예요.

**이전**: Pro·Max·Team 플랜에서도 Auto mode를 직접 활성화해야 했어요.
**이후**: **Pro·Max·Team 플랜에서 Auto mode가 기본값**으로 바뀌었어요.

Auto mode가 뭔지 처음 들어본다면:
- Claude가 작업을 자율적으로 처리하되
- **위험한 명령 전에는 반드시 확인을 구하는** 안전한 자율 모드예요
- 긴 작업을 맡겨두고 자리를 비울 수 있어요

> ⚠️ 원하지 않는다면 설정에서 비활성화할 수 있어요. [Auto mode 설정 문서](/docs/advanced/auto-mode-config) 참조.

### 2. Self-hosted Environments 공개 베타 (Aug 6, 2026)

> 🏭 **비유**: 예전엔 Claude Code가 Anthropic 클라우드에서만 실행됐다면, 이제는 **여러분 회사 서버 안에서도** 실행할 수 있게 됐어요.

Self-hosted Environments는 Enterprise 고객을 위한 기능이에요:
- Claude Code 세션을 **자사 인프라(서버)에서 실행**
- 네트워크 안에서, 내부 서비스 옆에서 실행 가능
- 데이터가 외부로 나가지 않아도 되는 환경 구축 가능

지원 문서가 7개 페이지로 세분화됐어요:
- quickstart, deploy, configuration, testing, reference, identity 등

---

## 📋 W30~W37 기간 주요 신규 문서 항목

이 기간에 공식 문서에 새로 추가된 주요 섹션:

### Code Review 문서 확장

```
code-review.md (기존)
├── code-review-setup.md (신규)
├── code-review-customize.md (신규)
├── code-review-pull-requests.md (신규)
├── code-review-costs.md (신규)
├── code-review-local.md (신규)
└── code-review-troubleshooting.md (신규)
```

### Plugin 문서 전면 재구성

```
이전: /plugins, /discover-plugins, /plugins-reference (3개)
이후: /plugins/overview 아래 20개 이상 세부 문서로 확장
     (install, create, publish, measure, mods/*, 등)
```

### 기타 신규 문서

| 문서 | 내용 |
|---|---|
| `claude-projects.md` | Projects 기능 공식 가이드 |
| `claude-tag.md` | Claude Tag (Slack 외부 버전) |
| `desktop-ios-simulator.md` | iOS 시뮬레이터 연동 개발 |
| `cross-session-messaging.md` | 세션 간 메시지 전달 |
| `cloud-environments.md` | 클라우드 실행 환경 가이드 |
| `hipaa-setup.md` | HIPAA 준수 설정 가이드 |
| `auto-mode-classifier-billing.md` | Auto mode 분류기 과금 안내 |
| `claude-security.md` | Claude Security 제품 가이드 |
| `managed-settings.md` | 관리자용 통합 설정 |

---

## 🌍 다국어 문서 공식 지원 시작

W30-W37 기간에 특이한 변화가 있었어요: **공식 문서가 이제 다국어를 공식 지원**해요!

```
code.claude.com/docs/_llms/ko.txt  ← 한국어 문서 인덱스 추가!
code.claude.com/docs/_llms/jp.txt  ← 일본어
code.claude.com/docs/_llms/zh-cn.txt ← 중국어(간체)
code.claude.com/docs/_llms/zh-tw.txt ← 중국어(번체)
... (프랑스어, 독일어, 이탈리아어, 스페인어 등 11개 언어)
```

> 🎉 이제 공식 Claude Code 문서가 한국어로도 제공된다는 뜻이에요! LLM이 공식 문서를 참조할 때 한국어 버전을 활용할 수 있게 됐어요.

---

## 이어지는 변화들 (9월 이후)

W37 이후 September에 이어진 주요 발표:
- **9/17**: Claude Projects 정식 출시 (Desktop App)
- **9/22**: Claude Opus 5.5 출시
- **9/28**: Claude Sonnet 5.5 출시
- **10/7**: Claude Haiku 5.5 출시
- **10/15**: Code Review 정식 출시 (Team·Enterprise GA)

이 내용들은 각 별도 문서에서 자세히 다룰게요:
- [Claude 5.5 패밀리 정리](/docs/next/claude55-models)
- [Code Review 정식 출시 가이드](/docs/advanced/code-review-ga)
- [Claude Projects 사용법](/docs/advanced/claude-projects)
