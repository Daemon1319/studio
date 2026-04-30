import { useEffect, useState } from 'react'

const links = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#book' },
]

type NavProps = {
  brand?: string
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      {
        // Trigger when a section's middle band crosses the viewport.
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export default function Nav({ brand = 'Studio' }: NavProps) {
  const ids = links.map((l) => l.href.slice(1))
  const active = useActiveSection(ids)

  return (
    <header className="sticky top-3 z-50 rounded-2xl border border-line bg-surface/95 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <a
          href="#top"
          aria-label="Home"
          className="inline-flex shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <span
            aria-hidden="true"
            className="block h-7 w-7 shrink-0 rounded-md border border-line bg-gradient-to-br from-accent to-accent-soft"
          />
          {brand && (
            <span className="font-display text-sm font-semibold tracking-tight text-ink sm:text-lg">
              {brand}
            </span>
          )}
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 sm:gap-7 lg:gap-8">
            {links.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`border-b pb-1 text-xs tracking-wide transition-colors sm:text-sm focus-visible:outline-none ${
                      isActive
                        ? 'border-accent text-ink'
                        : 'border-transparent text-ink-soft hover:border-accent hover:text-ink focus-visible:border-accent focus-visible:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
