import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { CATEGORIES, getDocsByCategory } from '@/lib/docs'
import { buildSidebarParts } from '@/lib/sidebar-parts'
import { notFound } from 'next/navigation'

// ── 정적 경로 생성 ──
export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(slug => ({ category: slug }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const catMeta = CATEGORIES[category]
  if (!catMeta) notFound()

  const docs = getDocsByCategory(category)
  const parts = buildSidebarParts()
  const activeHref = `/docs/${category}`

  // 해당 카테고리가 속한 PART 찾기
  const ownPart = parts.find(p => p.chapters.some(c => c.category === category))

  return (
    <div className="app">
      <Sidebar parts={parts} activeHref={activeHref} />

      <main className="reader">
        <div className="reader-top">
          <nav className="breadcrumb">
            <Link href="/">표지</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{catMeta.title}</span>
          </nav>
          <div className="chapter-jump">
            <Link href="/" className="btn-chip">← 표지</Link>
          </div>
        </div>

        <article className="reader-page">
          <header className="ch-header">
            <div className="ch-eyebrow">
              <span className="ch-num">{catMeta.icon}</span>
              <span className="ch-part">{ownPart ? `${ownPart.num} · ${ownPart.title}` : '카테고리'}</span>
            </div>
            <h1 className="ch-title">{catMeta.title}</h1>
            <p className="ch-lead">{catMeta.description}</p>
            <div className="ch-meta">
              <span>{docs.length}개의 챕터</span>
            </div>
          </header>

          <div className="cards">
            {docs.map((doc, i) => (
              <Link key={doc.slug} href={`/docs/${category}/${doc.slug}`} className="card">
                <span className="c-icon">{String(i + 1).padStart(2, '0')}</span>
                <div className="c-title">{doc.title}</div>
                <p className="c-body">{doc.description}</p>
              </Link>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
