---
title: "[공] Claude Code 주간 업데이트 W30~W37 (2026년 7~9월)"
description: "2026년 7월 말~9월 Claude Code 공식 What's New 업데이트 요약 (W30, W32~W37). 세부 내용은 공식 문서 확인 필요"
tags: ["자동생성", "whatsnew", "업데이트", "W30", "W32", "W33", "W34", "W35", "W36", "W37"]
category: "next"
order: 20
lastUpdated: "2026-10-02"
---

<div class="note-star">
★ <strong>[공]</strong> 공식 What's New: <a href="https://code.claude.com/docs/en/whats-new/index">code.claude.com/docs/en/whats-new</a>
</div>

> ⚠️ **W30~W37은 이번 감시 실행에서 신규 감지된 주간 업데이트입니다.** 각 주차의 세부 내용은 공식 문서에서 직접 확인하세요. 이 문서는 신규 추가 사실을 알리는 목적의 인덱스예요.

---

## 주간 업데이트 목록 (W30~W37)

이전 감시에서 마지막으로 확인된 주차는 **W29** (2026-07-18)였어요. 이번에 아래 주차들이 새롭게 추가됐어요:

| 주차 | 날짜 (추정) | 공식 문서 링크 |
|---|---|---|
| W30 | 2026-07-21 ~ 07-27 | [whats-new/2026-w30](https://code.claude.com/docs/en/whats-new/2026-w30) |
| W32 | 2026-08-04 ~ 08-10 | [whats-new/2026-w32](https://code.claude.com/docs/en/whats-new/2026-w32) |
| W33 | 2026-08-11 ~ 08-17 | [whats-new/2026-w33](https://code.claude.com/docs/en/whats-new/2026-w33) |
| W34 | 2026-08-18 ~ 08-24 | [whats-new/2026-w34](https://code.claude.com/docs/en/whats-new/2026-w34) |
| W35 | 2026-08-25 ~ 08-31 | [whats-new/2026-w35](https://code.claude.com/docs/en/whats-new/2026-w35) |
| W36 | 2026-09-01 ~ 09-07 | [whats-new/2026-w36](https://code.claude.com/docs/en/whats-new/2026-w36) |
| W37 | 2026-09-08 ~ 09-14 | [whats-new/2026-w37](https://code.claude.com/docs/en/whats-new/2026-w37) |

> 📌 W31은 llms.txt에 포함되지 않았어요 (공개 안 됐거나 통합된 것으로 추정).

---

## 이 기간의 주요 신규 기능 (별도 감지된 내용 기반)

이 기간에 마케팅 페이지와 블로그에서 별도로 확인된 주요 내용이에요:

| 날짜 | 내용 | 별도 문서 |
|---|---|---|
| Aug 6, 2026 | **Artifacts** 공개 베타 | [artifacts.md 참조](artifacts-feature.md) |
| Aug 7, 2026 | **Self-Hosted Environments** 공개 베타 | `advanced/self-hosted-environments.md` |
| Sep 1, 2026 | **Claude Fable 5.1 + Mythos 5.1** 출시 | `next/new-models-sep-oct2026.md` |
| Sep 17, 2026 | **Auto mode 기본 켜짐** (Pro/Max/Team) | `next/auto-mode-default.md` |
| Sep 22, 2026 | **Claude Opus 5.5** 출시 | `next/new-models-sep-oct2026.md` |
| Sep 28, 2026 | **Claude Sonnet 5.5** 출시 | `next/new-models-sep-oct2026.md` |

---

## 놓친 기간이 왜 생겼나요?

이전 감시 실행(2026-07-20, 21차)에서 마지막 확인 주차가 W29였어요. 이번 실행(2026-10-02, 22차)까지 약 2.5개월 간격이 생겼어요. 일반적으로 이 루틴은 매일 실행되지만, 이번에는 GitHub Actions 스냅샷 파일 기준으로 장기 누락분을 한꺼번에 감지했어요.

---

## 다음 회차에서 다룰 예정

10개 파일 제한으로 이번 회차에서 개별 주차 내용을 상세히 다루지 못했어요. 다음 회차에서 각 주차의 세부 기능 변경 사항을 개별 파일로 작성할 예정이에요.

**다음 회차 미룸 목록:**
- W30~W37 개별 주차 상세 내용
- `cross-session-messaging` 세션 간 메시지 신규 기능
- `claude-security` 보안 제품 소개
- `github-actions-cloud-providers` GitHub Actions 클라우드 통합
- `plugins/` 구조 전체 재편 (20개 이상 신규 문서)
- `agent-sdk/hooks`, `configuration`, `examples`, `troubleshooting` SDK 신규 문서
- `cloud-environments` 및 `claude-apps-gateway-on-aws` 신규 문서
- `managed-settings`, `settings-reference`, `settings-example` 설정 문서 신규 추가
- `desktop-ios-simulator` iOS 시뮬레이터 지원
- `plugin-evals` 플러그인 평가 시스템
