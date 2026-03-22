import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ── 카테고리 메타데이터 정의 ──
// 각 카테고리의 제목, 설명, 아이콘, 순서를 관리
export const CATEGORIES: Record<string, { title: string; description: string; icon: string; order: number }> = {
  intro: { title: '소개', description: 'Claude Code가 무엇인지 이해합니다', icon: '🚀', order: 1 },
  setup: { title: '설치 & 시작', description: '설치하고 첫 실행까지 완료합니다', icon: '⚙️', order: 2 },
  basics: { title: '기본 사용법', description: 'UI 이해와 필수 명령어를 익힙니다', icon: '📚', order: 3 },
  practice: { title: '실습', description: '실제 작업을 따라 해봅니다', icon: '💻', order: 4 },
  // 신규 카테고리: 슬래시 커맨드 완전 가이드
  commands: { title: '슬래시 커맨드', description: '/ 명령어로 Claude Code를 자유자재로 제어합니다', icon: '⌨️', order: 5 },
  // 신규 카테고리: CLAUDE.md, hooks, MCP 설정
  config: { title: '설정 & 커스터마이징', description: 'CLAUDE.md, hooks, MCP로 나만의 환경을 만듭니다', icon: '🔧', order: 6 },
  // 신규 카테고리: 에이전트 팀, 자동화, 원격 제어
  advanced: { title: '고급 기능', description: '에이전트 팀, 자동화, 원격 제어를 배웁니다', icon: '🚀', order: 7 },
  // 기존 카테고리: order 5→8로 변경
  tips: { title: '팁 & FAQ', description: '유용한 팁과 자주 묻는 질문', icon: '💡', order: 8 },
  // 기존 카테고리: order 6→9로 변경
  next: { title: '다음 단계', description: '더 깊이 학습하는 로드맵', icon: '🗺️', order: 9 },
  // 신규 카테고리: 전체 명령어, CLI 플래그, 단축키 목록
  reference: { title: '레퍼런스', description: '전체 명령어, CLI 플래그, 단축키 목록', icon: '📖', order: 10 },
}

// 문서 메타데이터 인터페이스
export interface DocMeta {
  title: string
  description: string
  tags: string[]
  category: string
  order: number
  slug: string
}

// content/docs 디렉토리 경로 (빌드 타임 기준)
const contentDir = path.join(process.cwd(), 'content', 'docs')

// ── 특정 카테고리의 문서 목록 반환 ──
// order 필드 기준으로 오름차순 정렬
export function getDocsByCategory(category: string): DocMeta[] {
  const categoryDir = path.join(contentDir, category)
  if (!fs.existsSync(categoryDir)) return []

  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'))
  const docs = files.map(file => {
    const slug = file.replace('.md', '')
    const content = fs.readFileSync(path.join(categoryDir, file), 'utf-8')
    const { data } = matter(content)
    return {
      title: (data['title'] as string | undefined) || slug,
      description: (data['description'] as string | undefined) || '',
      tags: (data['tags'] as string[] | undefined) || [],
      category: (data['category'] as string | undefined) || category,
      order: (data['order'] as number | undefined) || 99,
      slug,
    }
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
  return {
    meta: {
      title: (data['title'] as string | undefined) || slug,
      description: (data['description'] as string | undefined) || '',
      tags: (data['tags'] as string[] | undefined) || [],
      category: (data['category'] as string | undefined) || category,
      order: (data['order'] as number | undefined) || 99,
      slug,
    },
    content,
  }
}
