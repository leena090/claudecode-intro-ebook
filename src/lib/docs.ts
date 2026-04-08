import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ── 카테고리 메타데이터 정의 ──
// 각 카테고리의 제목, 설명, 아이콘, 순서를 관리
export const CATEGORIES: Record<string, { title: string; description: string; icon: string; order: number }> = {
  // ── 기초 영역 ──
  intro: { title: '소개', description: 'Claude 생태계와 각 도구의 역할을 이해합니다', icon: '🚀', order: 1 },
  setup: { title: '설치 & 시작', description: '설치하고 첫 실행까지 완료합니다', icon: '⚙️', order: 2 },
  basics: { title: '기본 사용법', description: 'UI 이해와 필수 명령어를 익힙니다', icon: '📚', order: 3 },
  practice: { title: '실습', description: '실제 작업을 따라 해봅니다', icon: '💻', order: 4 },
  // ── Claude 웹앱 & 코워크 영역 ──
  webapp: { title: 'Claude 웹앱', description: '아티팩트, 프로젝트, 채팅 등 claude.ai 완전 가이드', icon: '🌐', order: 5 },
  cowork: { title: '코워크', description: '데스크톱 제어, Dispatch, 예약 작업으로 업무 자동화', icon: '🤝', order: 6 },
  // ── Claude Code 심화 영역 ──
  commands: { title: '슬래시 커맨드', description: '/ 명령어로 Claude Code를 자유자재로 제어합니다', icon: '⌨️', order: 7 },
  config: { title: '설정 & 커스터마이징', description: 'CLAUDE.md, hooks, MCP, 스킬로 나만의 환경을 만듭니다', icon: '🔧', order: 8 },
  codeweb: { title: 'Claude Code 웹', description: 'claude.ai/code에서 브라우저로 코딩하기', icon: '☁️', order: 9 },
  advanced: { title: '고급 기능', description: '에이전트 팀, 워크트리, 원격 제어를 배웁니다', icon: '🔥', order: 10 },
  // ── 마무리 영역 ──
  tips: { title: '팁 & FAQ', description: '토큰 절약법, 유용한 팁과 자주 묻는 질문', icon: '💡', order: 11 },
  next: { title: '다음 단계', description: '더 깊이 학습하는 로드맵', icon: '🗺️', order: 12 },
  reference: { title: '레퍼런스', description: '전체 명령어, CLI 플래그, 단축키 목록', icon: '📖', order: 13 },
}

// 문서 메타데이터 인터페이스
export interface DocMeta {
  title: string
  description: string
  tags: string[]
  category: string
  order: number
  slug: string
  // 최종 업데이트 날짜 (프론트매터 lastUpdated 필드) — "YYYY-MM-DD" 문자열
  // 없으면 undefined → 페이지 헤더 뱃지 렌더링 생략
  lastUpdated?: string
}

// content/docs 디렉토리 경로 (빌드 타임 기준)
const contentDir = path.join(process.cwd(), 'content', 'docs')

// ── 특정 카테고리의 문서 목록 반환 ──
// order 필드 기준으로 오름차순 정렬
export function getDocsByCategory(category: string): DocMeta[] {
  const categoryDir = path.join(contentDir, category)
  if (!fs.existsSync(categoryDir)) return []

  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'))
  const docs: DocMeta[] = files.map(file => {
    const slug = file.replace('.md', '')
    const content = fs.readFileSync(path.join(categoryDir, file), 'utf-8')
    const { data } = matter(content)
    // lastUpdated는 optional이며 exactOptionalPropertyTypes 제약을 맞추기 위해
    // 값이 있을 때만 필드를 spread로 포함 (undefined 할당 회피)
    const lastUpdatedRaw = data['lastUpdated'] as string | undefined
    const meta: DocMeta = {
      title: (data['title'] as string | undefined) || slug,
      description: (data['description'] as string | undefined) || '',
      tags: (data['tags'] as string[] | undefined) || [],
      category: (data['category'] as string | undefined) || category,
      order: (data['order'] as number | undefined) || 99,
      slug,
      ...(lastUpdatedRaw ? { lastUpdated: lastUpdatedRaw } : {}),
    }
    return meta
  })
  // order 필드 기준 오름차순 정렬
  return docs.sort((a, b) => a.order - b.order)
}

// ── 모든 카테고리 목록과 문서 수 반환 ──
// order 기준으로 정렬해 홈페이지 그리드에 사용
export function getAllCategories() {
  return Object.entries(CATEGORIES)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([slug, meta]) => ({
      slug,
      ...meta,
      docCount: getDocsByCategory(slug).length,
    }))
}

// ── 단일 문서 읽기 ──
// 해당 파일이 없으면 null 반환
export function getDoc(category: string, slug: string): { meta: DocMeta; content: string } | null {
  const filePath = path.join(contentDir, category, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  // lastUpdated optional 필드 — exactOptionalPropertyTypes 제약 대응 (spread)
  const lastUpdatedRaw = data['lastUpdated'] as string | undefined
  const meta: DocMeta = {
    title: (data['title'] as string | undefined) || slug,
    description: (data['description'] as string | undefined) || '',
    tags: (data['tags'] as string[] | undefined) || [],
    category: (data['category'] as string | undefined) || category,
    order: (data['order'] as number | undefined) || 99,
    slug,
    ...(lastUpdatedRaw ? { lastUpdated: lastUpdatedRaw } : {}),
  }
  return { meta, content }
}

// ── 날짜 문자열을 한국어 포맷으로 변환 ──
// "2026-04-08" → "2026년 4월 8일"
// 프론트매터 lastUpdated 값을 페이지 뱃지에 표시할 때 사용
export function formatKoreanDate(isoDate: string | undefined): string | null {
  if (!isoDate) return null
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!match) return isoDate // 형식이 다르면 원본 반환 (fallback)
  const [, year, month, day] = match
  // 앞의 0 제거 (04 → 4)
  const m = parseInt(month!, 10)
  const d = parseInt(day!, 10)
  return `${year}년 ${m}월 ${d}일`
}
