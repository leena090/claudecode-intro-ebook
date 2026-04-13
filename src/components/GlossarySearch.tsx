'use client'

// ── 한국어 용어 사전 검색 UI ──
// 가나다/알파벳 순 정렬, 실시간 검색 필터링
// 40~60대 가독성 최적화: 큰 글씨, 넉넉한 여백, 일상 비유

import { useState, useMemo } from 'react'

// ── 용어 데이터 타입 ──
interface Term {
  ko: string        // 한국어 용어
  en: string        // 영어 원문
  desc: string      // 쉬운 설명 (초5 수준)
  analogy?: string  // 일상 비유 (있으면)
  link?: string     // 관련 가이드 경로
  linkLabel?: string // 관련 가이드 표시 텍스트
}

// ── 전체 용어 데이터 (가나다 순) ──
const GLOSSARY: Term[] = [
  // ── ㄱ ──
  {
    ko: '구독',
    en: 'Subscription',
    desc: 'Claude를 사용하기 위해 매달 내는 요금제예요. Free(무료), Pro($20), Max($100~) 등이 있어요. Claude Code는 Pro 이상부터 사용 가능합니다.',
    analogy: '넷플릭스 구독 — 매달 요금 내고 서비스 이용',
    link: '/docs/tips/faq',
    linkLabel: '요금 FAQ',
  },
  {
    ko: '권한',
    en: 'Permission',
    desc: 'Claude가 어떤 작업을 할 수 있는지 허용/거부하는 설정이에요. 파일 수정, 명령 실행 등을 하나씩 허가할 수 있습니다.',
    analogy: '아이에게 "냉장고는 열어도 돼, 가스레인지는 만지면 안 돼" 하는 것',
    link: '/docs/config/permissions-guide',
    linkLabel: '권한 설정 가이드',
  },
  {
    ko: '깃',
    en: 'Git',
    desc: '파일의 변경 이력을 자동으로 기록해주는 도구예요. 워드 문서를 "보고서_최종", "보고서_진짜최종"으로 저장하는 대신, 깃이 모든 변경 내역을 자동으로 관리합니다.',
    analogy: '문서 변경 히스토리를 자동으로 저장하는 타임머신',
    link: '/docs/advanced/git-workflow',
    linkLabel: 'Git 워크플로우',
  },
  {
    ko: '깃허브',
    en: 'GitHub',
    desc: '깃으로 관리하는 파일들을 인터넷에 저장하고 공유하는 곳이에요. 구글 드라이브가 일반 파일용이라면, 깃허브는 코드 파일 전용 드라이브입니다.',
    analogy: '코드 전용 구글 드라이브',
  },
  // ── ㄴ ──
  {
    ko: '노드',
    en: 'Node.js',
    desc: 'Claude Code를 실행하기 위해 컴퓨터에 설치해야 하는 기본 프로그램이에요. Claude Code의 "엔진" 역할을 합니다.',
    analogy: '자동차의 엔진 — 이게 있어야 Claude Code가 돌아감',
    link: '/docs/setup/install-nodejs',
    linkLabel: 'Node.js 설치하기',
  },
  // ── ㄷ ──
  {
    ko: '다운로드',
    en: 'Download',
    desc: '인터넷에 있는 파일을 내 컴퓨터로 가져오는 거예요. Claude 데스크톱 앱을 설치하려면 먼저 다운로드해야 합니다.',
    analogy: '온라인 쇼핑에서 물건 주문하면 집으로 배달되는 것',
  },
  {
    ko: '다크 모드',
    en: 'Dark Mode',
    desc: '화면 배경을 어둡게 바꾸는 설정이에요. 밤에 눈이 편하고, 노트북 배터리도 아낄 수 있어요.',
    analogy: '스마트폰의 야간 모드와 같은 것',
  },
  {
    ko: '데스크톱 앱',
    en: 'Desktop App',
    desc: '컴퓨터에 직접 설치하는 Claude 프로그램이에요. 웹 브라우저 없이도 Claude를 사용할 수 있고, 코워크 기능은 이 앱에서만 됩니다.',
    analogy: '카카오톡 PC 버전처럼 설치해서 쓰는 프로그램',
    link: '/docs/setup/install-desktop',
    linkLabel: 'Desktop 앱 설치',
  },
  {
    ko: '디버깅',
    en: 'Debugging',
    desc: '프로그램에서 오류(버그)를 찾아서 고치는 작업이에요. Claude Code에게 "이거 왜 안 돼?" 라고 물어보면 알아서 찾아줍니다.',
    analogy: '고장난 가전제품을 AS 기사가 고치는 것',
  },
  {
    ko: '디스패치',
    en: 'Dispatch',
    desc: '스마트폰에서 사무실 컴퓨터의 Claude에게 일을 보내는 기능이에요. 퇴근 후에도 컴퓨터가 일을 처리합니다.',
    analogy: '배달 앱으로 음식 주문하듯이, 폰으로 컴퓨터에 일을 주문',
    link: '/docs/cowork/cowork-dispatch',
    linkLabel: 'Dispatch 사용법',
  },
  // ── ㄹ ──
  {
    ko: '로그',
    en: 'Log',
    desc: '프로그램이 무슨 일을 했는지 기록한 일지예요. 문제가 생겼을 때 로그를 보면 원인을 찾을 수 있어요.',
    analogy: '병원 진료 기록부 — 언제 무슨 일이 있었는지 다 기록되어 있음',
  },
  {
    ko: '루프',
    en: 'Loop',
    desc: '같은 작업을 반복해서 실행하는 기능이에요. `/loop 5m 배포 상태 확인` 처럼 일정 간격으로 반복합니다.',
    analogy: '알람 시계를 5분마다 울리게 설정하는 것',
  },
  {
    ko: '레포지토리',
    en: 'Repository (Repo)',
    desc: '프로젝트 파일들이 모여 있는 폴더예요. "코드 저장 폴더"라고 생각하시면 됩니다.',
    analogy: '서류 바인더 한 권 = 프로젝트 하나',
  },
  // ── ㅁ ──
  {
    ko: '메모리',
    en: 'Memory',
    desc: 'Claude가 이전 대화에서 배운 것을 기억하는 기능이에요. 프로젝트 구조, 빌드 방법, 내 취향 등을 자동으로 기억합니다.',
    analogy: '단골 카페 바리스타가 내 주문을 외우고 있는 것',
    link: '/docs/commands/commands-overview',
    linkLabel: '/memory 명령어',
  },
  {
    ko: '마크다운',
    en: 'Markdown',
    desc: '간단한 기호로 글을 예쁘게 꾸미는 방법이에요. # 붙이면 제목, * 붙이면 굵은 글씨. 메모장에서도 쓸 수 있어요.',
    analogy: '워드 없이도 글 서식을 넣는 간편 도구',
  },
  {
    ko: '모델',
    en: 'Model',
    desc: 'AI의 "두뇌" 종류예요. Claude에는 Opus(가장 똑똑), Sonnet(균형), Haiku(가장 빠름) 3가지가 있어요.',
    analogy: '자동차 등급 — 소형(Haiku), 중형(Sonnet), 대형(Opus)',
  },
  // ── ㅂ ──
  {
    ko: '버그',
    en: 'Bug',
    desc: '프로그램의 오류나 결함이에요. 원래 의도한 대로 작동하지 않는 것을 말합니다. Claude Code에게 "이 버그 고쳐줘"라고 하면 됩니다.',
    analogy: '요리 레시피대로 했는데 맛이 이상한 것 — 레시피(코드)에 실수가 있는 것',
  },
  {
    ko: '버전',
    en: 'Version',
    desc: '프로그램의 업데이트 단계를 나타내는 번호예요. v2.1.101처럼 숫자가 클수록 최신 버전입니다.',
    analogy: '스마트폰 OS 업데이트 — iOS 17, 18처럼 번호가 올라감',
  },
  {
    ko: '보이스 모드',
    en: 'Voice Mode',
    desc: '키보드 대신 말로 Claude에게 지시하는 기능이에요. 스페이스바를 누르고 있는 동안 말하면 됩니다.',
    analogy: '무전기처럼 버튼 누르고 말하기',
    link: '/docs/advanced/voice-fast',
    linkLabel: '음성 모드 가이드',
  },
  {
    ko: '배치',
    en: 'Batch',
    desc: '여러 파일이나 작업을 한꺼번에 처리하는 기능이에요. `/batch` 명령어로 사용합니다.',
    analogy: '세탁기에 빨래를 모아서 한 번에 돌리는 것',
  },
  {
    ko: '브랜치',
    en: 'Branch',
    desc: '원본은 그대로 두고, 복사본에서 실험해보는 기능이에요. 실패해도 원본이 안전합니다.',
    analogy: '요리 레시피 원본은 놔두고, 복사본에서 새 재료를 실험하는 것',
  },
  {
    ko: '빌드',
    en: 'Build',
    desc: '작성한 코드를 실제로 동작하는 프로그램으로 만드는 과정이에요.',
    analogy: '설계도(코드)를 실제 건물(프로그램)로 짓는 것',
  },
  // ── ㅅ ──
  {
    ko: '샌드박스',
    en: 'Sandbox',
    desc: '안전하게 격리된 실험 공간이에요. 여기서 코드를 실행하면 내 컴퓨터에 영향을 주지 않아요.',
    analogy: '어린이 놀이터의 모래놀이터 — 밖에는 영향 없이 안에서 마음껏 실험',
    link: '/docs/advanced/sandbox-security',
    linkLabel: '샌드박스 가이드',
  },
  {
    ko: '스크립트',
    en: 'Script',
    desc: '컴퓨터가 순서대로 실행하는 명령어 모음이에요. 자동화의 기본 단위입니다.',
    analogy: '연극 대본(스크립트) — 배우가 대본대로 연기하듯, 컴퓨터가 순서대로 실행',
  },
  {
    ko: '서브에이전트',
    en: 'Subagent',
    desc: 'Claude가 혼자 하기 어려운 일을 할 때, 전문 분야별로 부르는 도우미 AI예요.',
    analogy: '사장님이 전문 프리랜서를 고용해서 일을 맡기는 것',
  },
  {
    ko: '세션',
    en: 'Session',
    desc: 'Claude와 대화를 시작해서 끝낼 때까지의 한 묶음이에요. 카카오톡 채팅방 하나라고 생각하면 됩니다.',
    analogy: '카카오톡 채팅방 하나 = 세션 하나',
  },
  {
    ko: '스킬',
    en: 'Skill',
    desc: '자주 쓰는 명령을 저장해서 한 번에 실행하는 기능이에요. 스마트폰의 "단축어"와 비슷합니다.',
    analogy: '아이폰 단축어 — "출근 모드"를 누르면 알람 끄기+음악+내비 한 번에',
    link: '/docs/config/skills-guide',
    linkLabel: '스킬 만들기',
  },
  {
    ko: '슬래시 커맨드',
    en: 'Slash Command',
    desc: '/ 기호로 시작하는 특수 명령어예요. /help, /clear, /cost 같은 것들입니다. 말로 설명하는 것보다 빠르게 기능을 실행합니다.',
    analogy: '리모컨의 버튼 — "채널 3"이라고 말하는 대신 버튼 하나만 누르면 됨',
    link: '/docs/commands/commands-overview',
    linkLabel: '슬래시 커맨드 가이드',
  },
  // ── ㅇ ──
  {
    ko: '업데이트',
    en: 'Update',
    desc: '프로그램을 최신 버전으로 갱신하는 거예요. 새 기능이 추가되거나 오류가 수정됩니다. Claude Code는 자동 업데이트됩니다.',
    analogy: '스마트폰 앱 업데이트 — 새 기능 추가 + 버그 수정',
  },
  {
    ko: '오토 모드',
    en: 'Auto Mode',
    desc: 'Claude가 권한 판단을 스스로 하는 모드예요. 안전한 작업은 자동 승인, 위험한 작업은 물어봐요. 매번 "허용" 누르는 수고를 줄여줍니다.',
    analogy: '운전 중 차선 유지는 자동으로, 끼어들기는 운전자에게 물어보는 반자율 주행',
    link: '/docs/config/permissions-guide',
    linkLabel: '권한 모드 가이드',
  },
  {
    ko: '울트라플랜',
    en: 'Ultraplan',
    desc: '복잡한 계획을 클라우드에서 여러 AI가 동시에 세워주는 기능이에요. 터미널을 차지하지 않아서 다른 일을 할 수 있습니다.',
    analogy: '건축 설계를 여러 전문가가 회의실에서 동시에 검토하는 것',
    link: '/docs/advanced/ultraplan',
    linkLabel: 'Ultraplan 가이드',
  },
  {
    ko: '아티팩트',
    en: 'Artifact',
    desc: 'Claude가 만들어준 결과물(코드, 문서, 표 등)을 별도 창에서 보여주는 기능이에요.',
    analogy: '요리사가 음식을 만들어서 접시에 예쁘게 담아주는 것',
  },
  {
    ko: '에이전트',
    en: 'Agent',
    desc: '혼자서 판단하고 행동하는 AI예요. 그냥 답만 하는 게 아니라, 파일을 읽고, 수정하고, 테스트까지 스스로 합니다.',
    analogy: '지시만 하면 알아서 움직이는 직원',
  },
  {
    ko: '에이전트 팀',
    en: 'Agent Teams',
    desc: '여러 AI가 팀을 이뤄 동시에 작업하는 기능이에요. 한 명이 조사하고, 한 명이 코딩하고, 한 명이 검수합니다.',
    analogy: '회사에서 팀 프로젝트를 나눠서 하는 것',
    link: '/docs/advanced/agent-teams',
    linkLabel: '에이전트 팀',
  },
  {
    ko: '에포트',
    en: 'Effort',
    desc: 'AI가 얼마나 꼼꼼하게 작업할지 정하는 설정이에요. low(빠르게), medium(보통), high(꼼꼼하게) 3단계입니다. 기본값은 high예요.',
    analogy: '식당 주문 — 간단히(low), 보통(medium), 풀코스(high)',
    link: '/docs/commands/special-commands',
    linkLabel: '/effort 명령어',
  },
  {
    ko: '어드바이저',
    en: 'Advisor Tool',
    desc: '빠른 AI(Sonnet)가 실행하고, 똑똑한 AI(Opus)가 조언하는 협업 모드예요. 비용은 줄이면서 품질은 유지합니다.',
    analogy: '신입사원이 일하고 팀장이 방향을 잡아주는 것',
  },
  {
    ko: '워크트리',
    en: 'Worktree',
    desc: '같은 프로젝트를 여러 버전으로 동시에 작업할 수 있는 공간이에요. 각 에이전트가 서로 방해 없이 독립적으로 일합니다.',
    analogy: '같은 요리를 여러 조리대에서 동시에 만드는 것',
    link: '/docs/advanced/worktrees',
    linkLabel: 'Worktree 가이드',
  },
  {
    ko: '웹앱',
    en: 'Web App (claude.ai)',
    desc: '웹 브라우저에서 Claude와 대화하는 방법이에요. 설치 없이 바로 쓸 수 있지만, 코워크 기능은 안 됩니다.',
    analogy: '네이버 메일처럼 브라우저에서 바로 쓰는 것',
    link: '/docs/webapp/webapp-intro',
    linkLabel: '웹앱 가이드',
  },
  // ── ㅇ (추가) ──
  {
    ko: '인터페이스',
    en: 'Interface (UI)',
    desc: '사람과 컴퓨터가 소통하는 화면이에요. 버튼, 입력창, 메뉴 같은 것들이 인터페이스입니다.',
    analogy: '자동차 대시보드 — 속도계, 라디오 버튼, 에어컨 조절이 다 인터페이스',
  },
  {
    ko: '오픈소스',
    en: 'Open Source',
    desc: '누구나 무료로 사용하고 수정할 수 있는 소프트웨어예요. Node.js가 대표적인 오픈소스입니다.',
    analogy: '공개 레시피 — 누구나 보고 만들고 자기 방식으로 변형 가능',
  },
  // ── ㅈ ──
  {
    ko: '자동 완성',
    en: 'Auto-complete',
    desc: '글자를 몇 개만 치면 나머지를 자동으로 완성해주는 기능이에요. Tab 키를 누르면 슬래시 명령어가 자동 완성됩니다.',
    analogy: '스마트폰 키보드의 단어 추천 — "안녕하" 치면 "안녕하세요" 추천',
  },
  {
    ko: '자동화',
    en: 'Automation',
    desc: '사람이 반복하는 작업을 AI나 프로그램이 대신 하도록 만드는 거예요. 코워크, 스킬, 예약 작업이 자동화 도구입니다.',
    analogy: '세탁기 예약 — 내가 없어도 지정 시간에 빨래가 돌아감',
  },
  {
    ko: 'JSON',
    en: 'JSON',
    desc: '컴퓨터가 읽기 쉬운 형식의 텍스트 파일이에요. 설정 파일에 자주 쓰입니다. { } 중괄호 안에 "이름": "값" 형태로 적어요.',
    analogy: '엑셀 대신 메모장으로 쓴 정리표',
  },
  // ── ㅊ ──
  {
    ko: '채널',
    en: 'Channel',
    desc: '텔레그램이나 디스코드 같은 메신저를 통해 Claude Code를 원격으로 제어하는 기능이에요.',
    analogy: '카카오톡으로 집에 있는 로봇청소기를 켜는 것',
  },
  {
    ko: '체크포인트',
    en: 'Checkpoint',
    desc: '작업 중간에 "여기까지 OK" 하고 저장해두는 지점이에요. 나중에 문제가 생기면 이 지점으로 돌아갈 수 있어요.',
    analogy: '게임에서 세이브 포인트 저장하는 것',
  },
  // ── ㅋ ──
  {
    ko: '캐시',
    en: 'Cache',
    desc: '자주 쓰는 데이터를 임시 저장해서 다음에 더 빨리 불러오는 기능이에요. Claude Code도 캐시를 써서 토큰 비용을 줄입니다.',
    analogy: '자주 먹는 반찬을 냉장고에 미리 만들어 두는 것',
  },
  {
    ko: '커넥터',
    en: 'Connector',
    desc: 'Claude를 외부 서비스(Gmail, 구글 드라이브, Zoom 등)와 연결해주는 기능이에요.',
    analogy: '멀티탭 — 여러 기기를 하나에 꽂아서 쓰는 것',
    link: '/docs/cowork/cowork-connectors',
    linkLabel: '외부 서비스 연결',
  },
  {
    ko: '커밋',
    en: 'Commit',
    desc: '파일 변경 내역을 "여기까지 완료"하고 기록하는 거예요. 일기장에 오늘 날짜를 적고 도장 찍는 것과 같아요.',
    analogy: '일기장에 날짜 적고 "오늘 여기까지" 도장 찍기',
  },
  {
    ko: '컴팩트',
    en: 'Compact (/compact)',
    desc: '긴 대화를 압축해서 토큰을 절약하는 명령어예요. 대화가 길어져서 느려지면 `/compact` 한 번으로 가볍게 만들 수 있어요.',
    analogy: '꽉 찬 여행 가방을 압축팩으로 줄이는 것',
    link: '/docs/tips/token-saving',
    linkLabel: '토큰 절약 가이드',
  },
  {
    ko: '클리어',
    en: 'Clear (/clear)',
    desc: '현재 대화를 완전히 지우고 새로 시작하는 명령어예요. 주제가 바뀔 때 사용하면 AI가 헷갈리지 않아요.',
    analogy: '칠판 지우개로 싹 지우고 새 수업 시작하는 것',
  },
  {
    ko: '컨텍스트',
    en: 'Context',
    desc: 'AI가 기억하고 있는 대화 내용의 양이에요. Claude는 최대 100만 토큰(약 75만 글자)까지 기억할 수 있습니다.',
    analogy: 'AI의 단기 기억력 — 책상 위에 펼쳐놓을 수 있는 서류의 양',
    link: '/docs/advanced/one-million-context',
    linkLabel: '1M 컨텍스트 가이드',
  },
  {
    ko: '코워크',
    en: 'Cowork',
    desc: 'Claude 데스크톱 앱에서 AI가 내 컴퓨터를 직접 조작하는 기능이에요. 엑셀 열기, 웹 검색, 파일 정리를 대신 해줍니다.',
    analogy: '24시간 쉬지 않는 AI 비서',
    link: '/docs/cowork/cowork-intro',
    linkLabel: '코워크 시작하기',
  },
  {
    ko: '클로드',
    en: 'Claude',
    desc: 'Anthropic이 만든 AI입니다. 대화, 글쓰기, 코딩, 분석 등 다양한 일을 할 수 있어요.',
    analogy: '만능 AI 비서',
    link: '/docs/intro/what-is-claude-code',
    linkLabel: 'Claude란?',
  },
  {
    ko: '클로드 코드',
    en: 'Claude Code',
    desc: 'Claude를 터미널(검은 화면)에서 사용하는 도구예요. 가장 강력한 기능을 쓸 수 있고, 이 가이드의 주인공입니다.',
    analogy: 'Claude의 "프로 모드" — 손으로 직접 일을 시킬 수 있는 버전',
    link: '/docs/intro/what-is-claude-code',
    linkLabel: 'Claude Code란?',
  },
  // ── ㅌ ──
  {
    ko: '테마',
    en: 'Theme',
    desc: '화면의 전체적인 색상과 느낌을 바꾸는 설정이에요. 라이트 모드(밝은 배경)와 다크 모드(어두운 배경)가 대표적입니다.',
    analogy: '스마트폰 배경화면 바꾸기 — 전체 분위기가 달라짐',
  },
  {
    ko: '트랜스크립트',
    en: 'Transcript',
    desc: 'Claude와 나눈 전체 대화 기록이에요. 스크롤해서 이전 내용을 볼 수 있고, / 키로 검색도 됩니다.',
    analogy: '카카오톡 채팅방의 대화 기록 전체',
  },
  {
    ko: '터미널',
    en: 'Terminal',
    desc: '컴퓨터에 글자로 명령을 내리는 화면이에요. Mac은 "터미널", Windows는 "PowerShell"이라고 부릅니다.',
    analogy: '음성 비서 대신 채팅으로 컴퓨터에 명령하는 창구',
    link: '/docs/setup/first-run',
    linkLabel: '터미널 첫 실행',
  },
  {
    ko: '토큰',
    en: 'Token',
    desc: 'AI가 글을 읽고 쓸 때 사용하는 단위예요. 대략 한글 1글자 = 1~2토큰 정도입니다. 토큰을 많이 쓸수록 비용이 올라갑니다.',
    analogy: '택시 미터기 — 글자를 읽고 쓸 때마다 미터가 올라감',
    link: '/docs/tips/token-saving',
    linkLabel: '토큰 절약법',
  },
  {
    ko: '텔레포트',
    en: 'Teleport',
    desc: '웹에서 작업하던 내용을 터미널로, 또는 터미널에서 웹으로 옮기는 기능이에요.',
    analogy: '작업하던 서류를 사무실에서 집으로 순간이동시키는 것',
  },
  // ── ㅍ ──
  {
    ko: '패키지',
    en: 'Package',
    desc: '다른 개발자가 만든 코드 묶음을 가져다 쓰는 것이에요. npm이라는 도구로 설치합니다.',
    analogy: '레고 조립 세트 — 남이 만든 부품을 가져다 내 작품에 끼우는 것',
  },
  {
    ko: '파워셸',
    en: 'PowerShell',
    desc: 'Windows에서 사용하는 터미널(명령 입력 창)이에요. Mac의 "터미널"과 같은 역할을 합니다.',
    analogy: 'Windows 전용 명령 창구',
  },
  {
    ko: '포커스 뷰',
    en: 'Focus View',
    desc: 'Ctrl+O(Mac: Cmd+O)로 대화 내용을 숨기고 입력창만 보이게 하는 기능이에요. 화면이 복잡할 때 집중하기 좋습니다.',
    analogy: '카카오톡에서 키보드만 보이게 하는 것',
  },
  {
    ko: '프로젝트',
    en: 'Project',
    desc: '관련된 파일들을 하나로 묶어 관리하는 단위예요. "쇼핑몰 프로젝트", "블로그 프로젝트"처럼 이름을 붙여요.',
    analogy: '학교 과제를 과목별 폴더에 나눠 담는 것',
    link: '/docs/webapp/projects',
    linkLabel: '프로젝트 가이드',
  },
  {
    ko: '프롬프트',
    en: 'Prompt',
    desc: 'AI에게 보내는 지시문이에요. "이런 걸 해줘"라고 쓰는 모든 텍스트가 프롬프트입니다.',
    analogy: '식당에서 주문서에 적는 것 — 자세히 적을수록 원하는 게 나옴',
  },
  {
    ko: '플래그',
    en: 'Flag',
    desc: 'Claude Code를 실행할 때 추가로 붙이는 옵션이에요. --resume, --fast 같은 것들입니다.',
    analogy: '라면 끓일 때 "매운맛", "순한맛" 옵션을 고르는 것',
    link: '/docs/reference/all-cli-flags',
    linkLabel: '전체 플래그 목록',
  },
  {
    ko: '플러그인',
    en: 'Plugin',
    desc: 'Claude Code에 새 기능을 추가하는 확장 프로그램이에요.',
    analogy: '스마트폰에 앱을 추가로 설치하는 것',
    link: '/docs/advanced/plugins',
    linkLabel: '플러그인 가이드',
  },
  {
    ko: 'PR',
    en: 'Pull Request',
    desc: '"내가 수정한 코드를 확인해주세요"라고 요청하는 거예요. 팀장한테 보고서를 제출하는 것과 같습니다.',
    analogy: '수정한 보고서를 팀장에게 "이거 괜찮은지 확인해주세요" 하고 보내는 것',
  },
  // ── ㅎ ──
  {
    ko: '훅',
    en: 'Hook',
    desc: '특정 상황이 발생하면 자동으로 실행되는 규칙이에요. "파일을 저장할 때마다 자동 검사" 같은 자동화를 만들 수 있어요.',
    analogy: '현관문 열리면 자동으로 불이 켜지는 센서등',
    link: '/docs/config/hooks-intro',
    linkLabel: 'Hooks 가이드',
  },
  {
    ko: '하이브리드 모드',
    en: 'Hybrid Mode (opusplan)',
    desc: 'Sonnet으로 계획 세우고 Opus로 실행하는 모드예요. `/model opusplan`으로 켤 수 있어요. 비용 효율적이면서 품질 좋습니다.',
    analogy: '설계는 인턴이, 시공은 베테랑이 — 효율 최대화',
  },
  {
    ko: '확장 프로그램',
    en: 'Extension',
    desc: 'VS Code나 JetBrains 같은 에디터에 Claude Code를 추가하는 프로그램이에요. 에디터 안에서 바로 AI와 대화할 수 있어요.',
    analogy: '크롬 브라우저에 광고차단기를 추가하는 것처럼, 에디터에 AI를 추가',
    link: '/docs/setup/install-ide',
    linkLabel: 'IDE 설치 가이드',
  },
  // ── 영문 (알파벳 순) ──
  {
    ko: 'API 키',
    en: 'API Key',
    desc: 'AI 서비스를 사용하기 위한 비밀 암호예요. 집 열쇠처럼, 이게 있어야 Claude를 사용할 수 있습니다. 절대 다른 사람에게 보여주면 안 됩니다.',
    analogy: '집 현관 열쇠 — 없으면 문 못 열고, 남한테 주면 안 됨',
  },
  {
    ko: 'API',
    en: 'Application Programming Interface',
    desc: '프로그램끼리 서로 대화하는 방법이에요. Claude API를 통해 다른 프로그램에서 Claude를 사용할 수 있습니다.',
    analogy: '식당의 주문 창구 — 주방(AI)에 직접 들어가지 않아도 창구를 통해 주문 가능',
  },
  {
    ko: 'CLAUDE.md',
    en: 'CLAUDE.md',
    desc: 'Claude에게 "나는 이런 스타일로 일해"라고 알려주는 설정 파일이에요. 한 번 적어두면 매번 설명 안 해도 됩니다.',
    analogy: '단골 식당에 내 취향을 적어둔 메모 — "김치찌개 덜 짜게, 밥 적게"',
    link: '/docs/config/claude-md',
    linkLabel: 'CLAUDE.md 설정',
  },
  {
    ko: 'CLI',
    en: 'Command Line Interface',
    desc: '글자로 명령을 입력하는 방식이에요. 마우스 클릭 대신 키보드로 컴퓨터에 명령합니다. Claude Code가 CLI 도구입니다.',
    analogy: '터치스크린 대신 리모컨 버튼으로 TV를 조작하는 것',
  },
  {
    ko: 'MCP',
    en: 'Model Context Protocol',
    desc: 'Claude를 외부 도구(데이터베이스, 웹사이트, API 등)와 연결하는 기술이에요.',
    analogy: 'USB 포트 — 컴퓨터에 마우스, 키보드, 프린터를 꽂는 것처럼 AI에 도구를 연결',
    link: '/docs/config/mcp-setup',
    linkLabel: 'MCP 설정 가이드',
  },
  {
    ko: 'npm',
    en: 'Node Package Manager',
    desc: 'Node.js용 프로그램 설치 도구예요. Claude Code를 설치할 때 `npm install -g @anthropic-ai/claude-code` 명령어를 씁니다.',
    analogy: '앱스토어 — 필요한 프로그램을 검색해서 설치하는 곳',
    link: '/docs/setup/install-claude-code',
    linkLabel: '설치 가이드',
  },
  {
    ko: 'URL',
    en: 'Uniform Resource Locator',
    desc: '인터넷 주소예요. https://claude.ai 같은 것입니다. 브라우저 주소창에 입력하면 해당 사이트로 이동합니다.',
    analogy: '집 주소 — 그 주소를 알면 찾아갈 수 있는 것',
  },
  {
    ko: 'VS Code',
    en: 'Visual Studio Code',
    desc: 'Microsoft가 만든 무료 코드 편집기예요. Claude Code를 VS Code 안에서 바로 사용할 수도 있습니다.',
    analogy: '코드 전용 워드프로세서',
    link: '/docs/setup/install-ide',
    linkLabel: 'IDE 설치 가이드',
  },

  // ── 플래그 (CLI Flag) 모음 ──
  {
    ko: '--resume 플래그',
    en: '--resume',
    desc: '어제 하던 대화를 이어서 시작하는 옵션이에요. `claude --resume`으로 사용합니다. 로딩 속도가 45% 빨라졌어요.',
    analogy: '어제 보던 드라마 이어보기 버튼',
    link: '/docs/reference/all-cli-flags',
    linkLabel: '전체 플래그 목록',
  },
  {
    ko: '--print 플래그',
    en: '--print (-p)',
    desc: '질문 하나만 물어보고 바로 종료하는 옵션이에요. `claude -p "이 파일 뭐야?"` 처럼 사용합니다. 대화 없이 한 번만 실행.',
    analogy: '편의점에서 물 하나만 사고 바로 나오는 것',
    link: '/docs/reference/all-cli-flags',
    linkLabel: '전체 플래그 목록',
  },
  {
    ko: '--fast 플래그',
    en: '--fast',
    desc: '같은 AI 모델을 2.5배 빠른 속도로 사용하는 옵션이에요. 대신 비용이 더 들어요. `/fast` 명령어와 같습니다.',
    analogy: '택시 vs KTX — 같은 목적지를 더 빨리, 대신 더 비싸게',
  },
  {
    ko: '--model 플래그',
    en: '--model',
    desc: 'AI 모델을 지정하는 옵션이에요. `claude --model opus`, `claude --model sonnet` 처럼 사용합니다.',
    analogy: '커피 주문 시 "아메리카노로 주세요" 하고 종류를 지정하는 것',
  },
  {
    ko: '--permission-mode 플래그',
    en: '--permission-mode',
    desc: '권한 모드를 지정하는 옵션이에요. default(안전), auto(자동판단), plan(계획전용) 등을 선택할 수 있어요.',
    analogy: '자동차 운전 모드 — 수동(default), 반자동(auto), 크루즈(plan)',
    link: '/docs/config/permissions-guide',
    linkLabel: '권한 모드 가이드',
  },
  {
    ko: '--dangerously-skip-permissions 플래그',
    en: '--dangerously-skip-permissions',
    desc: '모든 권한 확인을 건너뛰는 옵션이에요. ⚠️ 이름에 "dangerously(위험하게)"가 들어간 이유가 있어요 — 모든 파일 수정을 무조건 허용하기 때문에 주의가 필요합니다.',
    analogy: '집 현관문을 항상 열어두는 것 — 편하지만 위험할 수 있음',
    link: '/docs/config/permissions-guide',
    linkLabel: '권한 모드 가이드',
  },
  {
    ko: '--effort 플래그',
    en: '--effort',
    desc: 'AI의 작업 강도를 미리 지정하는 옵션이에요. `claude --effort low` (빠르게) 또는 `claude --effort high` (꼼꼼하게).',
    analogy: '세차장에서 "간단 세차" vs "풀 코스 세차" 선택하는 것',
  },
  {
    ko: '--continue 플래그',
    en: '--continue (-c)',
    desc: '가장 최근 대화를 자동으로 이어서 시작하는 옵션이에요. --resume과 비슷하지만 세션 선택 없이 바로 이어집니다.',
    analogy: '넷플릭스에서 "이어보기" 눌러서 바로 재생되는 것',
  },
  {
    ko: '--worktree 플래그',
    en: '--worktree (-w)',
    desc: '독립된 작업 공간을 만들어 원본에 영향 없이 작업하는 옵션이에요. 에이전트 팀에서 서로 충돌 없이 일할 때 씁니다.',
    analogy: '각자 별도 책상에서 같은 프로젝트를 작업하는 것',
    link: '/docs/advanced/worktrees',
    linkLabel: 'Worktree 가이드',
  },
  {
    ko: '--bare 플래그',
    en: '--bare',
    desc: '훅, 플러그인, LSP 등을 모두 건너뛰고 가장 가볍게 실행하는 옵션이에요. 스크립트에서 Claude를 호출할 때 주로 씁니다.',
    analogy: '아무 옵션 없이 기본만 실행 — 군더더기 제거',
  },

  // ── 주요 명령어 (슬래시 커맨드) 모음 ──
  {
    ko: '/btw 명령어',
    en: '/btw (By The Way)',
    desc: '작업 중에 갑자기 다른 게 궁금할 때 잠깐 물어보는 명령어예요. 메인 대화 기록에 남지 않아서 컨텍스트가 더럽혀지지 않아요.',
    analogy: '수업 중에 선생님한테 몰래 쪽지 보내기 — 수업 흐름은 안 끊김',
    link: '/docs/tips/btw-side-questions',
    linkLabel: '/btw 가이드',
  },
  {
    ko: '/fork 명령어',
    en: '/fork',
    desc: '현재 대화 상태를 그대로 복사해서 다른 방향으로 실험하는 명령어예요. 원본 대화는 그대로 보존됩니다.',
    analogy: '게임 세이브 파일을 복사해서, 다른 선택을 해보는 것',
    link: '/docs/tips/btw-side-questions',
    linkLabel: 'fork + btw 가이드',
  },
  {
    ko: '/rewind 명령어',
    en: '/rewind',
    desc: 'AI가 수정한 파일이나 대화를 이전 상태로 되돌리는 명령어예요. Esc키를 두 번 눌러도 같은 효과입니다.',
    analogy: '리모컨의 되감기 버튼 — 방금 한 일을 취소',
  },
  {
    ko: '/powerup 명령어',
    en: '/powerup',
    desc: 'Claude Code의 기능을 애니메이션과 함께 배울 수 있는 인터랙티브 레슨이에요. 처음 쓰는 분은 이걸 먼저 해보세요!',
    analogy: '게임 튜토리얼 — 하나씩 따라하면서 조작법을 익히는 것',
    link: '/docs/commands/special-commands',
    linkLabel: '/powerup 가이드',
  },
  {
    ko: '/cost 명령어',
    en: '/cost',
    desc: '지금까지 얼마나 비용을 썼는지 보여주는 명령어예요. 모델별, 캐시 히트율까지 상세하게 나옵니다.',
    analogy: '통신사 앱에서 "이번 달 데이터 얼마나 썼지?" 확인하는 것',
    link: '/docs/commands/info-commands',
    linkLabel: '/cost 상세',
  },
  {
    ko: '/doctor 명령어',
    en: '/doctor',
    desc: 'Claude Code에 문제가 있는지 자가 진단하는 명령어예요. 뭔가 이상하면 이걸 먼저 실행해보세요.',
    analogy: '스마트폰의 "기기 진단" 기능',
  },
  {
    ko: '/init 명령어',
    en: '/init',
    desc: '새 프로젝트를 시작할 때 기본 설정을 자동으로 만들어주는 명령어예요. CLAUDE.md 파일도 자동 생성됩니다.',
    analogy: '새 노트를 사서 첫 페이지에 이름, 날짜, 과목을 적는 것',
  },
]

// ── 초성 그룹 매핑 ──
// 한글 용어는 초성별, 영문은 "A~Z" 그룹으로 분류
function getGroup(ko: string): string {
  const first = ko.charAt(0)
  // 영문/특수문자/기호(--,/)로 시작하면 "A~Z" 그룹에 포함
  if (/[A-Za-z\-\/]/.test(first)) return 'A~Z'
  // 한글 초성 추출
  const code = first.charCodeAt(0) - 0xAC00
  if (code < 0) return 'A~Z'
  const cho = Math.floor(code / (21 * 28))
  const choList = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']
  return choList[cho] ?? '기타'
}

// ── 그룹 정렬 순서 ──
const GROUP_ORDER = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','A~Z']

export default function GlossarySearch() {
  const [query, setQuery] = useState('')

  // 검색 필터링 — 한국어·영어·설명·비유 모두 검색
  const filtered = useMemo(() => {
    if (!query.trim()) return GLOSSARY
    const q = query.toLowerCase().trim()
    return GLOSSARY.filter(t =>
      t.ko.toLowerCase().includes(q) ||
      t.en.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      (t.analogy?.toLowerCase().includes(q) ?? false)
    )
  }, [query])

  // 그룹별로 묶기
  const grouped = useMemo(() => {
    const map = new Map<string, Term[]>()
    for (const term of filtered) {
      const g = getGroup(term.ko)
      if (!map.has(g)) map.set(g, [])
      map.get(g)!.push(term)
    }
    // 정렬된 순서로 반환
    return GROUP_ORDER
      .filter(g => map.has(g))
      .map(g => ({ group: g, terms: map.get(g)! }))
  }, [filtered])

  return (
    <div>
      {/* 검색 입력 — 크고 눈에 잘 띄게 */}
      <div className="sticky top-14 z-40 py-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="relative">
          {/* 돋보기 아이콘 */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
            style={{ color: 'var(--text-muted)' }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="용어를 검색하세요 (예: 토큰, Git, 커밋...)"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border text-[15px] outline-none transition-colors"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: query ? 'var(--accent-text)' : 'var(--border)',
              color: 'var(--text-primary)',
            }}
          />
          {/* 검색 결과 수 */}
          {query && (
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              {filtered.length}개 결과
            </span>
          )}
        </div>
      </div>

      {/* 결과 없음 */}
      {filtered.length === 0 && (
        <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
          <div className="text-3xl mb-3">🔍</div>
          <p className="text-[15px]">&quot;{query}&quot;에 해당하는 용어가 없어요.</p>
          <p className="text-sm mt-1">다른 단어로 검색해보세요.</p>
        </div>
      )}

      {/* 그룹별 용어 목록 */}
      {grouped.map(({ group, terms }) => (
        <div key={group} className="mb-8">
          {/* 그룹 헤더 (ㄱ, ㄴ, ...) */}
          <div
            className="sticky top-[7.5rem] z-30 py-2 px-3 mb-3 rounded-lg text-sm font-bold"
            style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent-text)',
            }}
          >
            {group}
          </div>

          {/* 용어 카드 목록 */}
          <div className="space-y-3">
            {terms.map(term => (
              <div
                key={term.ko}
                className="p-4 rounded-xl border"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* 용어 이름 */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className="text-[17px] font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {term.ko}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
                  >
                    {term.en}
                  </span>
                </div>

                {/* 설명 */}
                <p className="text-[14px] leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {term.desc}
                </p>

                {/* 비유 (있으면) */}
                {term.analogy && (
                  <div
                    className="text-[13px] italic pl-3 mb-2"
                    style={{
                      color: 'var(--text-muted)',
                      borderLeft: '2px solid var(--accent-text)',
                    }}
                  >
                    💡 비유: {term.analogy}
                  </div>
                )}

                {/* 관련 가이드 링크 (있으면) */}
                {term.link && (
                  <a
                    href={term.link}
                    className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    📖 {term.linkLabel ?? '관련 가이드'} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
