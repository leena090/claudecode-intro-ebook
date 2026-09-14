---
title: "[공] Claude Code 주간 업데이트 W30~W34 (2026년 7~8월)"
description: "2026년 7월 말~8월 말 Claude Code 공식 문서에 추가된 주요 신기능과 변경사항을 한국어로 정리했어요"
tags: ["자동생성", "주간업데이트", "whats-new", "w30", "w34", "신기능", "2026년8월"]
category: "next"
order: 18
lastUpdated: "2026-09-14"
---

<div class="note-star">
★ <strong>한 줄 요약</strong> — 2026년 7월 말~8월 말(W30~W34) 업데이트 모음이에요. 셀프 호스팅 환경, 새 설정 레퍼런스, 플러그인 평가 시스템 등이 추가됐습니다. <code>[공]</code> 공식 문서 기준<br />
★ <strong>참고</strong> — W31 업데이트 파일은 이번 공식 문서 인덱스에서 누락되어 있어요 (추정: 배포 스킵 또는 W30/W32에 통합)
</div>

## W30~W34란?

클로드 공식 문서 팀은 매주 **"What's New"(왓츠 뉴)** 페이지를 발행해요.  
W30은 2026년 제30주차(약 7월 21~27일), W34는 제34주차(약 8월 18~24일)예요.

이 기간(W30~W34) 동안 공식 문서에 새로 추가된 주요 페이지들을 정리해봤어요.

---

## 이 기간의 핵심 변경 요약

| 분류 | 추가된 것 | 의미 |
|---|---|---|
| 🏠 셀프 호스팅 | `self-hosted-environments` 7페이지 suite | 회사 서버에 클로드 직접 설치 |
| ☁️ 클라우드 환경 | `cloud-environments` | 클라우드 환경 공식 가이드 |
| 🔗 에이전트 통신 | `cross-session-messaging` | 에이전트끼리 세션 넘어 대화 |
| ⚙️ 설정 레퍼런스 | `settings-reference`, `settings-example` | 설정 파일 완전 가이드 |
| 🔌 플러그인 평가 | `plugin-evals` | 플러그인 품질 테스트 시스템 |
| 🖥️ iOS 시뮬레이터 | `desktop-ios-simulator` | Mac에서 iOS 앱 개발 보조 |
| 🔒 보안 가이드 | `claude-security` | 클로드 보안 전용 문서 |
| 🚀 GitHub Actions | `github-actions-cloud-providers` | 클라우드 제공자 연동 CI/CD |
| 🏢 관리자 설정 | `managed-settings` | 조직 전체 설정 중앙 관리 |
| 🌐 AWS 게이트웨이 | `claude-apps-gateway-on-aws` | AWS에 클로드 앱 게이트웨이 배포 |
| 📚 SDK 예제 | `agent-sdk/examples` | Agent SDK 예제 코드 모음 |

---

## 가장 주목할 만한 변경: 셀프 호스팅 환경

> 🏗️ **비유**: 지금까지 클로드를 쓰는 건  
> "커피숍 와이파이로 인터넷 쓰는 것"이었다면,  
> 셀프 호스팅은 **"우리 집에 기가 인터넷을 직접 깔아서 쓰는 것"**이에요.

공식 문서에 **7개 페이지짜리 셀프 호스팅 가이드**가 새로 추가됐어요:

1. **개요** — 셀프 호스팅이 뭔지, 언제 쓰는지
2. **빠른 시작** — 처음 설치하는 분들을 위한 가이드
3. **배포** — 실제 서버에 올리는 방법
4. **설정** — 각종 옵션 세팅
5. **테스트** — 제대로 작동하는지 확인
6. **레퍼런스** — 상세 설정값 전체 목록
7. **신원 인증** — 사용자 인증/권한 관리

> 📌 **언제 필요한가요?**  
> 회사 보안 정책상 외부 서버에 코드를 올릴 수 없거나,  
> 사내 전용 클로드 환경이 필요한 기업/팀에게 필요한 기능이에요.  
> 개인 사용자나 소규모 팀은 기본 클라우드 환경으로 충분해요.

---

## 새로운 설정 레퍼런스 페이지

`settings-reference.md`와 `settings-example.md`가 추가됐어요.

이전에는 설정 파일(`settings.json`)의 모든 옵션이 여러 페이지에 흩어져 있었는데,  
이제 **한 페이지에서 전체 설정값을 참조**할 수 있게 됐어요.

```json
// settings-example.md에서 제공하는 예시 구조 (공식 발표 기준)
{
  "model": "claude-opus-5",
  "permissions": {
    "allow": ["Bash(git:*)"],
    "deny": []
  },
  "env": {
    "MY_VAR": "value"
  }
}
```

> 📌 **공식 문서**: [Settings Reference](https://code.claude.com/docs/en/settings-reference)  
> [Settings Example](https://code.claude.com/docs/en/settings-example)

---

## 플러그인 평가 시스템 (Plugin Evals)

플러그인(Plugin)을 만드는 개발자라면 주목해야 할 새 기능이에요.

> 🎓 **비유**: 학교 시험처럼,  
> 내가 만든 플러그인이 실제로 잘 작동하는지 **자동으로 채점**해주는 시스템이에요.

- 플러그인이 원하는 대로 동작하는지 테스트
- 여러 시나리오를 자동으로 실행해서 결과 확인
- CI/CD(자동 배포 파이프라인)에 연결 가능

> 📌 **공식 문서**: [Plugin Evals](https://code.claude.com/docs/en/plugin-evals)

---

## 삭제된 페이지

이번 기간에 공식 문서에서 **제거된 페이지**도 있어요:

| 제거된 페이지 | 추정 이유 |
|---|---|
| `ultraplan` | 기능 통합 또는 개편 (추정) |
| `desktop-changelog` | 다른 페이지로 통합 (추정) |
| `agent-sdk/slash-commands` | 명령어 문서 개편 (추정) |

> ⚠️ 정확한 제거 이유는 공식 발표가 없어 추정이에요.  
> 실제로 해당 기능이 사라진 건 아니고, 문서 구조가 바뀐 것으로 보여요.

---

## 이런 분들에게 도움이 돼요

| 상황 | 추천 확인 사항 |
|---|---|
| 회사에서 클로드 환경 구축 중 | 셀프 호스팅 환경 가이드 |
| 설정 파일 옵션을 전부 알고 싶다 | Settings Reference |
| 플러그인을 직접 만들고 있다 | Plugin Evals |
| Mac에서 iOS 앱 개발 | desktop-ios-simulator |
| GitHub Actions와 연동 중 | github-actions-cloud-providers |
