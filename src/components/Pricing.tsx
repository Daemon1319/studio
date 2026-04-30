type Money = {
  amount: number
  unit?: string
  from?: boolean
}

type Package = {
  name: string
  details: string[]
  price: Money
  inclusions: string[]
}

type Service = {
  name: string
  description: string
  highlights: string[]
}

const packages: Package[] = [
  {
    name: 'Solo / Duo Self Photo',
    details: [
      '1–2 persons',
      '10 min unli self-shoot',
      '1 colored backdrop',
      '10 min photo selecting',
    ],
    price: { amount: 99 },
    inclusions: [
      '1 × 4R collage photo with frame',
      '10 enhanced digital copies',
    ],
  },
  {
    name: 'Student Package',
    details: [
      '4–5 persons',
      '20 min unli self-shoot',
      '1 colored backdrop',
      '10 min photo selecting',
    ],
    price: { amount: 300 },
    inclusions: [
      '2 × 4R collage photos with frame',
      '15 enhanced digital copies',
    ],
  },
  {
    name: 'Group Package',
    details: [
      '5–6 persons',
      '30 min unli self-shoot',
      '2 colored backdrops',
      '15 min photo selecting',
    ],
    price: { amount: 500 },
    inclusions: [
      '2 × 5R collage photos with frame',
      '20 enhanced digital copies',
    ],
  },
]

const services: Service[] = [
  {
    name: 'Portraits & Headshots',
    description:
      'Editorial-style portrait sessions for personal, professional, or LinkedIn use.',
    highlights: [
      '1–2 hour studio or location session',
      '1–2 outfit changes',
      '15–20 final edited photos',
      'Optional retouching for headshots',
    ],
  },
  {
    name: 'Family & Group Sessions',
    description:
      'Multi-person sessions, indoor or outdoor, with photographer-led direction.',
    highlights: [
      '1.5–2 hour session',
      'Up to 8 people standard (more on request)',
      '25–35 final edited photos',
      'Studio or outdoor location',
    ],
  },
  {
    name: 'Weddings & Events',
    description:
      'Coverage for weddings, debuts, birthdays, and milestone events.',
    highlights: [
      '4–10 hour coverage options',
      '1–2 photographer team',
      '200–500+ final edited photos',
      'Online gallery + USB delivery',
    ],
  },
  {
    name: 'Pre-debut & Pre-wedding',
    description:
      'Concept-driven sessions on location or in-studio with wardrobe planning.',
    highlights: [
      'Concept consultation included',
      'Up to 3 outfits / looks',
      'Studio + 1 outdoor location possible',
      '40–60 final edited photos',
    ],
  },
  {
    name: 'Maternity & Newborn',
    description:
      'Soft, intimate sessions for expecting parents and the first weeks at home.',
    highlights: [
      'Studio or in-home session',
      'Wardrobe and prop guidance',
      '15–25 final edited photos',
      'Optional sibling / family combinations',
    ],
  },
  {
    name: 'Brand & Commercial',
    description:
      'Product, brand, and commercial photography for businesses and creators.',
    highlights: [
      'Half or full-day shoot options',
      'Commercial usage license included',
      'Lifestyle, e-commerce, or campaign style',
      'High-res delivery + selects gallery',
    ],
  },
]

const addons: { name: string; description?: string; price: Money }[] = [
  {
    name: 'Additional pax',
    description: 'Add another person to any package.',
    price: { amount: 100, unit: 'pax' },
  },
  {
    name: 'Additional copy',
    description: 'Extra enhanced digital photo.',
    price: { amount: 50, from: true },
  },
  {
    name: 'All copies',
    description: 'Take home every photo from the session.',
    price: { amount: 100 },
  },
  {
    name: '8R print copy',
    description: 'Larger printed photo.',
    price: { amount: 150, unit: 'piece' },
  },
  {
    name: 'Extra time',
    description: 'Add 5 minutes to your session.',
    price: { amount: 80 },
  },
  {
    name: 'Additional backdrop',
    description: 'Switch to another backdrop color.',
    price: { amount: 100 },
  },
  {
    name: 'Backdrop floor extension',
    description: 'Extend backdrop onto the floor for full-body shots.',
    price: { amount: 200 },
  },
]

const backdropColors = [
  { name: 'Beige', hex: '#d9c8b0' },
  { name: 'Pastel Pink', hex: '#f3c8cd' },
  { name: 'Emerald', hex: '#1f6b54' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Gray', hex: '#9c9c9c' },
  { name: 'Pastel Blue', hex: '#bcd2e6' },
]

function formatMoney({ amount, unit, from }: Money) {
  const base = `₱${amount.toLocaleString('en-PH')}`
  return `${from ? 'From ' : ''}${base}${unit ? ` / ${unit}` : ''}`
}

function SubsectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
      <span className="h-px w-8 bg-ink" aria-hidden="true" />
      {children}
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </h3>
  )
}

function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200 group-open:rotate-180"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="mx-auto w-full max-w-3xl scroll-mt-24"
    >
      <header className="flex flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Pricing
        </span>
        <h2
          id="pricing-heading"
          className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          Sessions &amp; Add-ons
        </h2>
        <p className="max-w-xl text-ink-soft">
          Transparent pricing. No surprises. Walk in, shoot, leave with prints
          and digital copies.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:gap-10">
        <SubsectionHeading>Self-photo Packages</SubsectionHeading>

        <ul className="flex flex-col gap-4">
          {packages.map((pkg) => (
            <li key={pkg.name}>
              <details className="group rounded-2xl border border-line bg-surface transition-colors hover:border-ink/30 open:border-ink/40 open:shadow-[0_8px_28px_-12px_rgba(17,17,17,0.18)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <h4 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {pkg.name}
                  </h4>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {formatMoney(pkg.price)}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink-soft transition-colors group-hover:border-ink/40 group-hover:text-ink">
                      <Chevron />
                    </span>
                  </div>
                </summary>

                <div className="border-t border-line px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <p className="text-sm text-ink-soft sm:text-base">
                    {pkg.details.join(' · ')}
                  </p>

                  <div className="mt-4 flex flex-col gap-2 rounded-xl border border-line bg-bg px-4 py-3.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Includes
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {pkg.inclusions.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm text-ink sm:text-[15px]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-6 sm:mt-16 sm:gap-8">
        <SubsectionHeading>Photography Services</SubsectionHeading>

        <p className="text-sm text-ink-soft sm:text-[15px]">
          Rates depend on the scope, location, and hours required.
        </p>

        <ul className="flex flex-col gap-3">
          {services.map((svc) => (
            <li key={svc.name}>
              <details className="group rounded-xl border border-line bg-transparent transition-colors hover:border-ink/30 open:border-ink/40 open:bg-surface/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <h4 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                    {svc.name}
                  </h4>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors group-hover:text-ink">
                    <Chevron />
                  </span>
                </summary>

                <div className="border-t border-line-soft px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <p className="text-sm text-ink-soft sm:text-[15px]">
                    {svc.description}
                  </p>

                  <ul className="mt-3 flex flex-col gap-1.5">
                    {svc.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink bg-transparent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-surface focus-visible:bg-ink focus-visible:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-base"
          >
            Request a quote
            <span aria-hidden="true">→</span>
          </a>
          <p className="text-sm text-ink-soft">
            We reply within a day on Instagram or Facebook.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6 sm:mt-16 sm:gap-8">
        <SubsectionHeading>Add-ons</SubsectionHeading>

        <ul className="flex flex-col divide-y divide-line">
          {addons.map((svc) => (
            <li
              key={svc.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-base font-medium text-ink sm:text-lg">
                  {svc.name}
                </span>
                {svc.description && (
                  <span className="text-sm text-ink-soft">
                    {svc.description}
                  </span>
                )}
              </div>
              <span className="shrink-0 text-base font-semibold tracking-tight text-ink sm:text-lg">
                {formatMoney(svc.price)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:mt-16">
        <SubsectionHeading>Backdrop colors</SubsectionHeading>
        <ul
          aria-label="Available backdrop colors"
          className="flex flex-wrap gap-3"
        >
          {backdropColors.map((color) => (
            <li
              key={color.name}
              className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-3.5"
            >
              <span
                aria-hidden="true"
                className="h-6 w-6 rounded-full border border-ink/20 ring-1 ring-inset ring-black/5"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-sm text-ink">{color.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-16">
        <a
          href="#book"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-ink focus-visible:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base"
        >
          Book a session
        </a>
        <p className="text-sm text-ink-soft">
          Have questions? Message us — we reply fast.
        </p>
      </div>
    </section>
  )
}
