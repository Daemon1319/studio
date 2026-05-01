import { contacts, studio } from '../lib/studio'

const socials = contacts.filter(
  (c) => c.id === 'instagram' || c.id === 'facebook',
)

const quickLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#book' },
]

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </h3>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line pt-10 sm:pt-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10 lg:gap-16">
        <div className="flex flex-col gap-3">
          <a
            href="#top"
            aria-label="Home"
            className="inline-flex items-center gap-2.5"
          >
            <span
              aria-hidden="true"
              className="block h-7 w-7 shrink-0 rounded-md border border-line bg-gradient-to-br from-accent to-accent-soft"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              {studio.brand}
            </span>
          </a>
          <p className="max-w-xs text-sm text-ink-soft sm:text-[15px]">
            {studio.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <ColumnHeading>Visit</ColumnHeading>
          <address className="not-italic text-sm text-ink sm:text-[15px]">
            {studio.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-1 flex flex-col gap-0.5">
            <span className="text-sm text-ink sm:text-[15px]">
              {studio.hours}
            </span>
            <span className="text-sm text-ink-soft">
              {studio.hoursNote}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <ColumnHeading>Follow</ColumnHeading>
          <ul className="flex flex-wrap gap-2.5">
            {socials.map((c) => (
              <li key={c.id}>
                <a
                  aria-label={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-surface focus-visible:border-ink focus-visible:bg-ink focus-visible:text-surface focus-visible:outline-none"
                >
                  {c.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink-soft">
            For inquiries, message us via the{' '}
            <a
              href="#book"
              className="underline-offset-4 hover:text-ink hover:underline focus-visible:text-ink focus-visible:underline focus-visible:outline-none"
            >
              booking section
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line py-6 sm:mt-14">
        <p className="text-sm text-ink-soft">
          © {year} {studio.brand}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
