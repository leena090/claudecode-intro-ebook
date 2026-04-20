import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import MarkdownBody from '@/components/MarkdownBody'
import FooterNav from '@/components/FooterNav'
import { CATEGORIES, getDoc, getDocsByCategory, formatKoreanDate } from '@/lib/docs'
import { buildSidebarParts, findNeighbors } from '@/lib/sidebar-parts'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'

// ── 정적 경로 생성 ──
export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []
  for (const category of Object.keys(CATEGORIES)) {
    const docs = getDocsByCategory(category)
    docs.forEach(doc => params.push({ category, slug: doc.slug }))
  }
  return params
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const catMeta = CATEGORIES[category]
  if (!catMeta) notFound()

  const doc = getDoc(category, slug)
  if (!doc) notFound()

  const html = await markdownToHtml(doc.content)

  // 사이드바 TOC + 이웃 챕터
  const parts = buildSidebarParts()
  const activeHref = `/docs/${category}/${slug}`
  const { prev, next, current, partTitle, partNum } = findNeighbors(parts, activeHref)

  const lastUpdatedKorean = formatKoreanDate(doc.meta.lastUpdated)

  return (
    <div className="app">
      <Sidebar parts={parts} activeHref={activeHref} />

      <main className="reader">
        {/* 상단 breadcrumb + 이전/다음 chip */}
        <div className="reader-top">
          <nav className="breadcrumb" aria-label="빵부스러기">
            <Link href="/">표지</Link>
            <span className="bc-sep">/</span>
            <Link href={`/docs/${category}`}>{catMeta.title}</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{current?.num ?? ''} {doc.meta.title}</span>
          </nav>
          <div className="chapter-jump">
            {prev ? (
              <Link href={prev.href} className="btn-chip" aria-label="이전 챕터">← 이전</Link>
            ) : (
              <span className="btn-chip" aria-disabled="true">← 이전</span>
            )}
            {next ? (
              <Link href={next.href} className="btn-chip" aria-label="다음 챕터">다음 →</Link>
            ) : (
              <span className="btn-chip" aria-disabled="true">다음 →</span>
            )}
          </div>
        </div>

        <article className="reader-page">
          {/* 챕터 헤더 */}
          <header className="ch-header">
            <div className="ch-eyebrow">
              {current?.num && <span className="ch-num">{current.num}</span>}
              <span className="ch-part">{partNum ? `${partNum} · ` : ''}{partTitle ?? catMeta.title}</span>
            </div>
            <h1 className="ch-title">{doc.meta.title}</h1>
            {doc.meta.description && (
              <p className="ch-lead">{doc.meta.description}</p>
            )}
            {(lastUpdatedKorean || doc.meta.tags.length > 0) && (
              <div className="ch-meta">
                {lastUpdatedKorean && (
                  <>
                    <span>📅 {lastUpdatedKorean}</span>
                    {doc.meta.tags.length > 0 && <span className="dot" />}
                  </>
                )}
                {doc.meta.tags.slice(0, 4).map((tag, i) => (
                  <span key={tag}>
                    {i > 0 && <span className="dot" style={{ marginRight: 10 }} />}
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* 본문 */}
          <MarkdownBody html={html} />

          {/* 유튜브 임베드 (선택) */}
          {doc.meta.youtubeId && (
            <div className="callout insight" style={{ marginTop: 48 }}>
              <div className="callout-head">
                <span className="stamp">🎬</span>
                {doc.meta.youtubeTitle || '이 내용을 영상으로 보기'}
              </div>
              <div
                style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginTop: 12, borderRadius: 10, overflow: 'hidden' }}
              >
                <iframe
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  src={`https://www.youtube.com/embed/${doc.meta.youtubeId}`}
                  title={doc.meta.youtubeTitle || '관련 영상'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* 이전/다음 */}
          <FooterNav
            prev={prev ? { num: prev.num, title: prev.title, href: prev.href } : null}
            next={next ? { num: next.num, title: next.title, href: next.href } : null}
          />
        </article>
      </main>
    </div>
  )
}
