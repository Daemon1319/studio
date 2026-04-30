import { useEffect, useState } from 'react'

const slides = [
  {
    label: 'Portrait session',
    className:
      'bg-[radial-gradient(circle_at_30%_30%,#c89968_0%,#7a5a36_55%,#1a120a_100%)]',
  },
  {
    label: 'Wedding day',
    className:
      'bg-[radial-gradient(circle_at_70%_30%,#d9b896_0%,#8a6244_50%,#1a0e08_100%)]',
  },
  {
    label: 'Editorial / brand',
    className:
      'bg-[radial-gradient(circle_at_50%_70%,#3a342c_0%,#14110d_60%,#050402_100%)]',
  },
  {
    label: 'Self-photo session',
    className:
      'bg-[radial-gradient(circle_at_50%_30%,#e8c98a_0%,#a07c40_55%,#3d2c14_100%)]',
  },
]

const SLIDE_MS = 6000

const stats = [
  { value: '₱99', label: 'Self-photo session' },
  { value: 'Walk-ins', label: 'No appointment needed' },
  { value: 'Same-day', label: 'Digital copies' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_MS,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      aria-labelledby="hero-heading"
      className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-16"
    >
      <div className="order-2 flex flex-col gap-5 sm:gap-6 md:order-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Quezon City · Photography Studio
        </span>

        <h1
          id="hero-heading"
          className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          A studio for self-photos, portraits, weddings, and brands.
        </h1>

        <p className="max-w-md text-base text-ink-soft sm:text-lg">
          Walk-ins welcome. Self-photos from ₱99. Full sessions on request.
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-ink focus-visible:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base"
          >
            Book a session
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:text-accent focus-visible:outline-none sm:text-base"
          >
            View pricing
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <dl className="mt-2 grid grid-cols-3 divide-x divide-line border-y border-line py-4 sm:mt-4 sm:py-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 px-3 first:pl-0 last:pr-0"
            >
              <dt className="order-2 text-[11px] uppercase tracking-[0.12em] text-ink-mute">
                {stat.label}
              </dt>
              <dd className="order-1 text-base font-semibold tracking-tight text-ink sm:text-lg">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="order-1 md:order-2">
        <div
          aria-label="Studio work showcase"
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_30px_60px_-30px_rgba(17,17,17,0.4)]"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.label}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${slide.className} ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {slides[active].label}
          </span>
        </div>
      </div>
    </section>
  )
}
