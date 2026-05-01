import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect, useState } from 'react'
import { contacts } from '../lib/studio'

const calUsername = import.meta.env.VITE_CAL_USERNAME ?? 'your-cal-username'
const calEvent = import.meta.env.VITE_CAL_EVENT ?? 'studio'
const calLink = `${calUsername}/${calEvent}`
const calNamespace = calEvent

function SubsectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
      <span className="h-px w-8 bg-ink" aria-hidden="true" />
      {children}
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </h3>
  )
}

export default function Booking() {
  const [calLoaded, setCalLoaded] = useState(false)
  const isPlaceholder = calUsername === 'your-cal-username'

  useEffect(() => {
    if (isPlaceholder) return

    let cancelled = false
    ;(async () => {
      const cal = await getCalApi({ namespace: calNamespace })
      if (cancelled) return
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#b8924a',
            'cal-text': '#111111',
            'cal-text-emphasis': '#111111',
            'cal-bg': '#ffffff',
            'cal-bg-muted': '#f5f0e8',
            'cal-border': '#c9b58c',
            'cal-border-subtle': '#ddcca6',
          },
          dark: {
            'cal-brand': '#b8924a',
            'cal-text': '#111111',
            'cal-text-emphasis': '#111111',
            'cal-bg': '#ffffff',
            'cal-bg-muted': '#f5f0e8',
            'cal-border': '#c9b58c',
            'cal-border-subtle': '#ddcca6',
          },
        },
      })
      cal('on', {
        action: 'linkReady',
        callback: () => setCalLoaded(true),
      })
    })()

    return () => {
      cancelled = true
    }
  }, [isPlaceholder])

  return (
    <section
      id="book"
      aria-labelledby="booking-heading"
      className="scroll-mt-24"
    >
      <header className="flex flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Book
        </span>
        <h2
          id="booking-heading"
          className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          Schedule a session
        </h2>
        <p className="max-w-xl text-ink-soft">
          Pick a date and time for a self-photo session, or message us for
          custom shoots and full photography services.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:gap-8">
        <SubsectionHeading>Self-photo session</SubsectionHeading>

        <p className="text-sm text-ink-soft sm:text-[15px]">
          Pick a date and time. No account needed — you'll get a confirmation
          email.
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_28px_-12px_rgba(17,17,17,0.18)]">
          {isPlaceholder ? (
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center sm:py-24">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Calendar setup pending
              </span>
              <p className="max-w-md text-base text-ink">
                Add your Cal.com username to{' '}
                <code className="rounded bg-bg px-1.5 py-0.5 font-mono text-sm">
                  VITE_CAL_USERNAME
                </code>{' '}
                in <code className="rounded bg-bg px-1.5 py-0.5 font-mono text-sm">.env</code>{' '}
                and the booking calendar will appear here.
              </p>
            </div>
          ) : (
            <>
              {!calLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 bg-surface text-sm text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 animate-pulse rounded-full bg-accent"
                  />
                  Loading calendar…
                </div>
              )}
              <Cal
                namespace={calNamespace}
                calLink={calLink}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '720px',
                  overflow: 'scroll',
                }}
                config={{ layout: 'month_view' }}
              />
            </>
          )}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6 sm:mt-16 sm:gap-8">
        <SubsectionHeading>Photography services & custom shoots</SubsectionHeading>

        <p className="text-sm text-ink-soft sm:text-[15px]">
          For weddings, brand work, and custom sessions, message us directly.
          We reply within a day.
        </p>

        <ul className="flex flex-wrap gap-2.5">
          {contacts.map((c) => (
            <li key={c.id}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-surface focus-visible:border-ink focus-visible:bg-ink focus-visible:text-surface focus-visible:outline-none"
              >
                {c.icon}
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 text-center text-sm text-ink-soft sm:mt-14">
        Walk-ins welcome during studio hours.
      </p>
    </section>
  )
}
