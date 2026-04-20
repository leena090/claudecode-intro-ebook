import { CATEGORIES, LEARNING_TABS, getDocsByCategory } from './docs'
import type { SidebarPart } from '@/components/Sidebar'

// ── 사이드바 TOC 데이터 구성 ──
// LEARNING_TABS(학습 레벨) → PART, 그 안의 카테고리 문서들을 1.1 · 1.2… 번호로 평탄화
export function buildSidebarParts(): SidebarPart[] {
  const parts: SidebarPart[] = []
  const coveredCats = new Set<string>()
  LEARNING_TABS.forEach((tab, tabIdx) => {
    const partNum = tab.id === 'design' ? 'SPECIAL' : `PART ${tabIdx + 1}`
    const chapters: SidebarPart['chapters'] = []
    let chapIdx = 1
    tab.categories.forEach(catSlug => {
      coveredCats.add(catSlug)
      const docs = getDocsByCategory(catSlug)
      docs.forEach(doc => {
        const num = `${tabIdx + 1}.${chapIdx}`
        chapters.push({
          title: doc.title,
          href: `/docs/${catSlug}/${doc.slug}`,
          slug: doc.slug,
          category: catSlug,
          num,
        })
        chapIdx += 1
      })
    })
    if (chapters.length > 0) {
      parts.push({
        id: tab.id,
        num: partNum,
        title: tab.title,
        subtitle: tab.subtitle,
        chapters,
      })
    }
  })

  // LEARNING_TABS에 포함 안 된 카테고리(예: stories)는 별도 PART로 자동 추가
  const orphanCats = Object.keys(CATEGORIES).filter(c => !coveredCats.has(c))
  orphanCats.forEach((catSlug, i) => {
    const catMeta = CATEGORIES[catSlug]
    if (!catMeta) return
    const docs = getDocsByCategory(catSlug)
    if (docs.length === 0) return
    const partIdx = LEARNING_TABS.length + i + 1
    const chapters: SidebarPart['chapters'] = docs.map((doc, di) => ({
      title: doc.title,
      href: `/docs/${catSlug}/${doc.slug}`,
      slug: doc.slug,
      category: catSlug,
      num: `${partIdx}.${di + 1}`,
    }))
    parts.push({
      id: `cat-${catSlug}`,
      num: `PART ${partIdx}`,
      title: catMeta.title,
      subtitle: catMeta.description,
      chapters,
    })
  })
  return parts
}

// ── 특정 href의 prev / next 챕터 ──
export function findNeighbors(parts: SidebarPart[], activeHref: string) {
  const flat = parts.flatMap(p => p.chapters.map(c => ({ ...c, partTitle: p.title, partNum: p.num })))
  const idx = flat.findIndex(c => c.href === activeHref)
  if (idx < 0) return { prev: null, next: null, current: null, partTitle: null, partNum: null }
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
    current: flat[idx],
    partTitle: flat[idx]?.partTitle ?? null,
    partNum: flat[idx]?.partNum ?? null,
  }
}

// 참고 상수 (활용 여지)
export { CATEGORIES, LEARNING_TABS }
