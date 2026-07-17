---
title: "[공] 주간 업데이트: 2026년 7월 13일 ~ 17일 (Week 29)"
description: "Artifacts에 MCP 커넥터로 실시간 데이터 연결, 스크린 리더 지원 정식 추가"
tags: ["업데이트", "2026", "week29", "artifacts", "mcp", "accessibility", "스크린리더", "실시간", "자동생성"]
category: "next"
order: 19
lastUpdated: "2026-07-17"
---

<div class="note-star">
★ <strong>공식 발표 기준</strong> — Week 29 (2026-07-13 ~ 2026-07-17) 업데이트 내역. <code>[공]</code><br />
👉 <a href="https://code.claude.com/docs/en/whats-new/2026-w29" target="_blank">공식 문서: code.claude.com/docs/en/whats-new/2026-w29</a>
</div>

## 이번 주 핵심 변경 (2개)

---

### 1️⃣ Artifacts + MCP 커넥터 — 공유 페이지에 실시간 데이터 연결 🔌

저번 주에 나온 **Artifacts**(공유 페이지)에 이번엔 **MCP 커넥터**를 붙일 수 있게 됐어요. 덕분에 고정된 결과물이 아닌, **살아있는 대시보드**를 만들 수 있어요.

> 🍱 **비유**: 월별 매출 보고서를 프린트해서 벽에 붙여두면 그게 전부예요 — 어제 데이터가 굳어있죠. 그런데 MCP 커넥터를 연결하면 실시간 전광판처럼 지금 이 순간의 데이터가 표시돼요.

**어떻게 쓰나요?**

Artifact를 만들 때 MCP 커넥터를 선택하면 돼요:

```
이 GitHub 이슈 목록을 Artifact로 만들어줘. 실시간으로 업데이트되게.
```

Claude Code가 GitHub MCP 커넥터를 연결한 Artifact 페이지를 만들어줘요.

**활용 예시:**

| 예시 | MCP 커넥터 |
|---|---|
| CI/CD 빌드 현황 대시보드 | GitHub Actions MCP |
| 팀 이슈 트래커 | GitHub Issues MCP |
| 슬랙 메시지 모아보기 | Slack MCP |
| 데이터베이스 조회 결과 | DB MCP |

<div class="note-circle">
○ 페이지를 공유받은 사람도 MCP 커넥터가 연결된 같은 데이터를 실시간으로 볼 수 있어요<br />
○ 공식 문서: <a href="https://code.claude.com/docs/en/artifacts" target="_blank">code.claude.com/docs/en/artifacts</a>
</div>

---

### 2️⃣ 스크린 리더 모드 — 시각 장애인 지원 공식 추가 ♿

Claude Code가 이제 **VoiceOver(macOS), NVDA(Windows)** 같은 스크린 리더와 함께 동작하는 **공식 지원 모드**를 제공해요.

> 🍱 **비유**: 점자 안내판이 없던 건물에 점자 표지판과 음성 안내 시스템을 새로 설치한 것과 같아요. 시각 장애가 있는 분들도 건물 안에서 길을 찾을 수 있게 된 거예요.

**스크린 리더 모드에서 개선되는 것들:**

| 항목 | 설명 |
|---|---|
| 코드 출력 | 스크린 리더가 읽기 좋은 형식으로 변환 |
| 진행 표시 | 음성으로 작업 진행 상황 안내 |
| 단축키 | 스크린 리더 친화적 키 배열 |
| 색상 의존 제거 | 색상 없이도 이해되는 출력 형식 |

**설정 방법:**
```bash
# 스크린 리더 모드 활성화
claude --screen-reader

# 또는 settings.json에서
# { "accessibility": { "screenReader": true } }
```

<div class="note-circle">
○ 공식 문서: <a href="https://code.claude.com/docs/en/accessibility" target="_blank">code.claude.com/docs/en/accessibility</a><br />
○ 색약·저시력 분들을 위한 고대비 테마도 함께 지원돼요
</div>
