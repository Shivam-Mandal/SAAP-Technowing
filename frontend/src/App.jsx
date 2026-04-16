import heroImage from './assets/hero.png';

const navItems = ['Platform', 'Services', 'Partners', 'Insights', 'Contact'];

const metrics = [
  { value: '120+', label: 'Enterprise launches' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: '32%', label: 'Faster fulfillment cycles' },
  { value: '14', label: 'Integrated partner systems' },
];

const services = [
  {
    title: 'B2B Marketplace Systems',
    description:
      'Composable marketplaces built for procurement, catalog depth, distributor workflows, and territory-aware pricing.',
  },
  {
    title: 'Cloud Architecture',
    description:
      'Migration and platform engineering for resilient systems with observability, scale, and controlled operating costs.',
  },
  {
    title: 'AI Process Automation',
    description:
      'Business-grade automation for quoting, inventory sync, customer service routing, and decision support.',
  },
];

const pillars = [
  'Headless storefronts and seller portals',
  'ERP, payment, and logistics integrations',
  'Actionable analytics for inventory and growth',
  'Secure deployment pipelines with release controls',
];

const partners = [
  { name: 'Globex Logistics', tag: 'Cross-border fulfillment', color: 'from-sky-500 to-cyan-400' },
  { name: 'Innotech Pay', tag: 'Payments and settlement', color: 'from-emerald-500 to-lime-400' },
  { name: 'OmniSys ERP', tag: 'Inventory and procurement', color: 'from-amber-500 to-orange-400' },
  { name: 'CloudNet Infra', tag: 'Scalable hosting', color: 'from-indigo-500 to-violet-400' },
];

const articles = [
  {
    title: 'Designing B2B experiences that feel consumer-grade',
    category: 'UX Strategy',
  },
  {
    title: 'What modern marketplace ops teams automate first',
    category: 'Operations',
  },
  {
    title: 'How SAAP teams ship reliable platform releases',
    category: 'Engineering',
  },
];

function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(96,165,250,0.18),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#f8fafc_45%,_#f8fafc_100%)]" />

        <header className="relative z-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">SAAP Technowing</p>
              <p className="mt-1 text-sm text-slate-300">Digital commerce and transformation studio</p>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-300">
                  {item}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Book a strategy call
            </a>
          </div>
        </header>

        <main className="relative z-10">
          <section id="platform" className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-32 lg:pt-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-300/10 px-4 py-1 text-sm font-medium text-cyan-100">
                BuyyBox-ready product teams for modern B2B growth
              </div>
              <h1 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                We build commerce platforms that move as fast as your market.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                SAAP Technowing designs and ships digital products for enterprises that need better procurement flows,
                smarter integrations, and dependable platform scale.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore our services
                </a>
                <a
                  href="#partners"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See ecosystem partners
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-sm">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                  <img src={heroImage} alt="SAAP Technowing platform preview" className="h-full w-full object-cover" />
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Delivery</p>
                    <p className="mt-2 text-2xl font-bold text-white">6-week</p>
                    <p className="mt-1 text-sm text-slate-300">Sprint-based rollout for new marketplace capabilities.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Operations</p>
                    <p className="mt-2 text-2xl font-bold text-white">24/7</p>
                    <p className="mt-1 text-sm text-slate-300">Monitoring and response workflows for critical flows.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-24">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <SectionTitle
                eyebrow="Why Teams Choose Us"
                title="Engineering depth with product thinking baked in."
                description="We pair strategy, implementation, and operational discipline so launches feel intentional from day one."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div key={pillar} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-cyan-300">
                      +
                    </div>
                    <p className="mt-4 text-lg font-semibold text-slate-900">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Services"
                title="Focused delivery across product, platform, and automation."
                description="We help teams modernize legacy stacks, launch revenue channels, and make day-to-day operations easier to run."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {services.map((service, index) => (
                  <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="partners" className="bg-slate-950 py-24 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Ecosystem"
                title="Trusted integration partners that strengthen every launch."
                description="From logistics to ERP and payments, we plug into the tools enterprise teams already depend on."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                {partners.map((partner) => (
                  <div key={partner.name} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${partner.color}`} />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                        <p className="mt-3 text-base text-slate-300">{partner.tag}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                        Active
                      </div>
                    </div>
                    <p className="mt-10 text-sm uppercase tracking-[0.35em] text-slate-500">Ready for shared delivery</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Insights"
                title="Thinking that supports every product decision."
                description="We document what we learn in the field so teams can make sharper calls on roadmap, architecture, and rollout."
                align="center"
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {articles.map((article) => (
                  <article key={article.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">{article.category}</p>
                    <h3 className="mt-5 text-2xl font-bold text-slate-900">{article.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Short-form perspective pieces for teams building serious digital commerce infrastructure.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
              <div className="rounded-[2rem] bg-slate-950 p-10 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Let&apos;s Build</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight">Bring your next platform idea into production.</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  Whether you are shaping a marketplace, modernizing a legacy workflow, or integrating mission-critical
                  systems, we can help define the next release with clarity.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Email</p>
                    <p className="mt-2 text-lg font-medium text-slate-900">hello@saaptechnowing.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Focus</p>
                    <p className="mt-2 text-lg font-medium text-slate-900">Commerce, cloud, AI operations</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Availability</p>
                    <p className="mt-2 text-lg font-medium text-slate-900">Discovery sessions open this month</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10 bg-slate-950/95">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 SAAP Technowing. Built for reliable digital transformation.</p>
            <div className="flex gap-6">
              <a href="#platform" className="transition hover:text-cyan-300">
                Platform
              </a>
              <a href="#services" className="transition hover:text-cyan-300">
                Services
              </a>
              <a href="#contact" className="transition hover:text-cyan-300">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
