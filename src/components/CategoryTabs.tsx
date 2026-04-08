'use client'

// ── 홈페이지 카테고리 탭 UI ──
// 14개 카테고리를 5개 학습 레벨 탭으로 그룹화해서 압도감 제거
// 기본 선택: 왕초보 탭
// 탭 전환 시 해당 레벨의 카테고리 카드만 렌더링

import Link from 'next/link'
import { useState } from 'react'
import type { LearningTab } from '@/lib/docs'

// 카테고리 메타 데이터 타입 (서버에서 받아옴)
interface CategoryWithCount {
  slug: string
  title: string
  description: string
  icon: string
  order: number
  docCount: number
}

interface CategoryTabsProps {
  tabs: LearningTab[]
  categories: CategoryWithCount[]
}

export default function CategoryTabs({ tabs, categories }: CategoryTabsProps) {
  // 기본 선택: 첫 번째 탭 (클로드 왕초보)
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id ?? 'beginner')

  // 카테고리 slug → 전체 데이터 매핑 (O(1) 조회)
  const categoryMap = new Map(categories.map(c => [c.slug, c]))

  // 현재 활성 탭의 카테고리 목록
  const activeTab = tabs.find(t => t.id === activeTabId)
  const visibleCategories = (activeTab?.categories ?? [])
    .map(slug => categoryMap.get(slug))
    .filter((c): c is CategoryWithCount => c !== undefined)

  return (
    <div>
      {/* 탭 네비게이션 — 5개 버튼 가로 배치 (모바일: 2행) */}
      <div
        className="flex flex-wrap gap-2 mb-8 pb-4 border-b"
        style={{ borderColor: 'var(--border)' }}
        role="tablist"
        aria-label="학습 레벨"
      >
        {tabs.map(tab => {
          const isActive = tab.id === activeTabId
          // 탭에 속한 카테고리의 총 문서 수 계산 → 뱃지로 표시
          const totalDocs = tab.categories
            .map(slug => categoryMap.get(slug)?.docCount ?? 0)
            .reduce((a, b) => a + b, 0)

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(tab.id)}
              className="flex-1 min-w-[140px] px-4 py-3 rounded-xl border transition-all"
              style={{
                background: isActive ? 'var(--accent-soft)' : 'var(--bg-secondary)',
                borderColor: isActive ? 'var(--accent-text)' : 'var(--border)',
                color: isActive ? 'var(--accent-text)' : 'var(--text-primary)',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">{tab.icon}</span>
                <span className="text-[14px]">{tab.title}</span>
                <span
                  className="text-[11px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: isActive ? 'var(--accent-text)' : 'var(--border)',
                    color: isActive ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  {totalDocs}
                </span>
              </div>
              {/* 서브타이틀 — 탭 아래 작은 설명 */}
              <div
                className="text-[11.5px] mt-1 leading-tight"
                style={{ color: isActive ? 'var(--accent-text)' : 'var(--text-muted)' }}
              >
                {tab.subtitle}
              </div>
            </button>
          )
        })}
      </div>

      {/* 선택된 탭의 카테고리 카드 그리드 — 2열 반응형 */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        role="tabpanel"
        aria-labelledby={activeTabId}
      >
        {visibleCategories.map(cat => (
          <Link
            key={cat.slug}
            href={`/docs/${cat.slug}`}
            className="card-hover group p-5 rounded-xl border"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
              textDecoration: 'none',
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
              >
                {cat.docCount}개
              </span>
            </div>
            <h2
              className="font-semibold text-[15px] mb-1"
              style={{ color: 'var(--text-primary)' }}
            >
              {cat.title}
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
