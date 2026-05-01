import { useCallback, useEffect, useMemo, useState } from 'react'

type CategoryId = 'all' | 'self-photo' | 'portraits' | 'weddings' | 'brand'

type GalleryItem = {
  id: string
  title: string
  category: Exclude<CategoryId, 'all'>
  aspect: string
  className: string
}

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'self-photo', label: 'Self-photo' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'brand', label: 'Brand' },
]

const items: GalleryItem[] = [
  {
    id: '1',
    title: 'Studio portrait · Maya',
    category: 'portraits',
    aspect: 'aspect-[3/4]',
    className:
      'bg-[radial-gradient(circle_at_30%_30%,#d4a874_0%,#8a5e36_60%,#1a0f08_100%)]',
  },
  {
    id: '2',
    title: 'Solo self-photo · Pastel pink',
    category: 'self-photo',
    aspect: 'aspect-[4/5]',
    className:
      'bg-[radial-gradient(circle_at_50%_30%,#f3c8cd_0%,#c4868c_55%,#3d1c20_100%)]',
  },
  {
    id: '3',
    title: 'Brand campaign · Studio',
    category: 'brand',
    aspect: 'aspect-[1/1]',
    className:
      'bg-[radial-gradient(circle_at_50%_50%,#2a2520_0%,#14110d_60%,#050402_100%)]',
  },
  {
    id: '4',
    title: 'Wedding · Golden hour',
    category: 'weddings',
    aspect: 'aspect-[3/4]',
    className:
      'bg-[radial-gradient(circle_at_60%_40%,#e8c8b0_0%,#a06c44_60%,#1a0a05_100%)]',
  },
  {
    id: '5',
    title: 'Group session · Beige',
    category: 'self-photo',
    aspect: 'aspect-[4/3]',
    className:
      'bg-[radial-gradient(circle_at_50%_50%,#d9c8b0_0%,#a48a64_55%,#3a2e1f_100%)]',
  },
  {
    id: '6',
    title: 'Corporate headshot',
    category: 'portraits',
    aspect: 'aspect-[4/5]',
    className:
      'bg-[radial-gradient(circle_at_40%_30%,#c8b896_0%,#7a6240_60%,#1c1208_100%)]',
  },
  {
    id: '7',
    title: 'Wedding · Reception',
    category: 'weddings',
    aspect: 'aspect-[3/2]',
    className:
      'bg-[radial-gradient(circle_at_30%_50%,#f0d8c4_0%,#b88860_55%,#2c1a10_100%)]',
  },
  {
    id: '8',
    title: 'Editorial · Brand',
    category: 'brand',
    aspect: 'aspect-[3/4]',
    className:
      'bg-[radial-gradient(circle_at_30%_30%,#5a4a36_0%,#14110d_65%,#000000_100%)]',
  },
  {
    id: '9',
    title: 'Self-photo · Emerald backdrop',
    category: 'self-photo',
    aspect: 'aspect-[4/5]',
    className:
      'bg-[radial-gradient(circle_at_50%_40%,#3d8a72_0%,#1f6b54_55%,#0a2a20_100%)]',
  },
  {
    id: '10',
    title: 'Portrait · Natural light',
    category: 'portraits',
    aspect: 'aspect-[3/4]',
    className:
      'bg-[radial-gradient(circle_at_70%_30%,#e8b58a_0%,#9a6f48_55%,#2a1c12_100%)]',
  },
  {
    id: '11',
    title: 'Pre-wedding · Outdoor',
    category: 'weddings',
    aspect: 'aspect-[1/1]',
    className:
      'bg-[radial-gradient(circle_at_40%_60%,#d8c4a8_0%,#9a7848_60%,#241808_100%)]',
  },
  {
    id: '12',
    title: 'Product · Catalog',
    category: 'brand',
    aspect: 'aspect-[4/5]',
    className:
      'bg-[radial-gradient(circle_at_50%_30%,#a8a098_0%,#3a342c_60%,#0a0808_100%)]',
  },
  {
    id: '13',
    title: 'Solo · Pastel blue',
    category: 'self-photo',
    aspect: 'aspect-[3/4]',
    className:
      'bg-[radial-gradient(circle_at_50%_30%,#bcd2e6_0%,#7494b4_55%,#1c2e44_100%)]',
  },
  {
    id: '14',
    title: 'Studio portrait · B&W',
    category: 'portraits',
    aspect: 'aspect-[4/5]',
    className:
      'bg-[radial-gradient(circle_at_30%_40%,#bdbdbd_0%,#3a3a3a_60%,#0a0a0a_100%)]',
  },
  {
    id: '15',
    title: 'Wedding · Detail shot',
    category: 'weddings',
    aspect: 'aspect-[3/4]',
    className:
      'bg-[radial-gradient(circle_at_60%_30%,#ead7b8_0%,#a07c44_55%,#2c1c0c_100%)]',
  },
]

const INITIAL_VISIBLE = 9

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? items
        : items.filter((i) => i.category === activeCategory),
    [activeCategory],
  )

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visible.length < filtered.length

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE)
  }, [activeCategory])

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length,
    )
  }, [filtered.length])
  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % filtered.length,
    )
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxIndex, close, prev, next])

  const activeItem =
    lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24"
    >
      <header className="flex flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Gallery
        </span>
        <h2
          id="gallery-heading"
          className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          Selected work
        </h2>
        <p className="max-w-xl text-ink-soft">
          A curated set of recent sessions across self-photo, portraits,
          weddings, and brand work.
        </p>
      </header>

      <div className="mt-8 -mx-4 overflow-x-auto px-4 sm:mt-10 sm:mx-0 sm:overflow-visible sm:px-0">
        <ul
          role="tablist"
          aria-label="Filter by category"
          className="flex w-max gap-2 sm:w-auto sm:flex-wrap"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? 'border-ink bg-ink text-surface'
                      : 'border-line bg-surface text-ink-soft hover:border-ink/40 hover:text-ink'
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-ink-soft">
          No work in this category yet.
        </p>
      ) : (
        <div className="mt-8 columns-2 gap-3 [column-fill:_balance] sm:gap-4 md:columns-3">
          {visible.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Open ${item.title}`}
              className={`group relative mb-3 block w-full overflow-hidden rounded-xl border border-line bg-ink break-inside-avoid sm:mb-4 ${item.aspect} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105 ${item.className}`}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </button>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((v) => v + INITIAL_VISIBLE)
            }
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink bg-transparent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-surface focus-visible:bg-ink focus-visible:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-base"
          >
            Show more
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      )}

      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-end p-4 sm:p-6">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-12 sm:pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4"
            >
              <ArrowIcon direction="left" />
            </button>

            <div
              className={`relative max-h-[78vh] w-full max-w-3xl overflow-hidden rounded-2xl ${activeItem.aspect} ${activeItem.className}`}
              style={{ height: '78vh' }}
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div
            className="flex flex-col gap-1 px-4 pb-6 text-white sm:px-12 sm:pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              {categories.find((c) => c.id === activeItem.category)?.label}
            </span>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-base font-medium sm:text-lg">
                {activeItem.title}
              </p>
              <p className="text-sm text-white/60">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
