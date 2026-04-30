import { useEffect, useState } from 'react'

const slides = [
  {
    label: 'Portrait session',
    className:
      'bg-[radial-gradient(circle_at_30%_30%,#e8d5c0_0%,#c8a96e_55%,#7a5a36_100%)]',
  },
  {
    label: 'Wedding day',
    className:
      'bg-[radial-gradient(circle_at_70%_30%,#f5e6dc_0%,#d9bf8a_55%,#3a2e22_100%)]',
  },
  {
    label: 'Editorial / brand',
    className:
      'bg-[radial-gradient(circle_at_50%_70%,#3a342c_0%,#1f1b16_60%,#0c0a08_100%)]',
  },
  {
    label: 'Studio light',
    className:
      'bg-[radial-gradient(circle_at_50%_30%,#fff8ee_0%,#ead7b3_60%,#b08c52_100%)]',
  },
]

const SLIDE_MS = 6000

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
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          San Pablo City · Photography Studio
        </span>

        <h1
          id="hero-heading"
          className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          A studio for portraits, weddings, and brands.
        </h1>

        <p className="max-w-md text-base text-ink-soft sm:text-lg">
          Walk-ins welcome. Same-day photos. Based in San Pablo City.
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft focus-visible:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base"
          >
            Book a session
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none sm:text-base"
          >
            View pricing
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <div
          aria-label="Studio work showcase"
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)]"
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

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

          <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-surface/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {slides[active].label}
          </span>
        </div>
      </div>
    </section>
  )
}
