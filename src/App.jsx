import { useState, useEffect, useRef } from 'react'

/* ───── Scroll Animation Hook ───── */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ───── SVG Icons ───── */
const Icons = {
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
  ),
  BarChart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Cloud: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
  ),
  Layout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
}

/* ───── Navbar ───── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
            <span className="text-white text-sm font-black">D</span>
          </div>
          <span className="text-slate-900">Data<span className="gradient-text">Flow</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-600 hover:text-primary-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-slate-600 hover:text-primary-600 transition-colors">How It Works</a>
          <a href="#faq" className="text-sm text-slate-600 hover:text-primary-600 transition-colors">FAQ</a>
          <a href="#cta" className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25 active:scale-95">
            Get Started
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu">
          {mobileOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-6 pb-6 space-y-4">
          <a href="#features" onClick={() => setMobileOpen(false)} className="block text-slate-600 py-2">Features</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-slate-600 py-2">How It Works</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-slate-600 py-2">FAQ</a>
          <a href="#cta" onClick={() => setMobileOpen(false)} className="block text-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-xl">Get Started</a>
        </div>
      )}
    </nav>
  )
}

/* ───── Hero Illustration (SVG) ───── */
function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background card */}
        <rect x="40" y="30" width="420" height="340" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        
        {/* Header bar */}
        <rect x="60" y="50" width="380" height="40" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        <circle cx="80" cy="70" r="6" fill="#ef4444" opacity="0.8"/>
        <circle cx="98" cy="70" r="6" fill="#f59e0b" opacity="0.8"/>
        <circle cx="116" cy="70" r="6" fill="#22c55e" opacity="0.8"/>
        <text x="160" y="75" fill="#94a3b8" fontSize="12" fontFamily="monospace">SELECT * FROM analytics</text>

        {/* Chart area */}
        <rect x="60" y="110" width="240" height="160" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        
        {/* Bar chart */}
        <rect x="85" y="210" width="24" height="40" rx="4" fill="#c7d2fe" className="float-1"/>
        <rect x="120" y="185" width="24" height="65" rx="4" fill="#a5b4fc" className="float-2"/>
        <rect x="155" y="160" width="24" height="90" rx="4" fill="#818cf8" className="float-3"/>
        <rect x="190" y="140" width="24" height="110" rx="4" fill="#6366f1" className="float-4"/>
        <rect x="225" y="125" width="24" height="125" rx="4" fill="#4f46e5" className="float-1"/>
        <rect x="260" y="145" width="24" height="105" rx="4" fill="#6366f1" className="float-2"/>
        
        {/* Trend line */}
        <path d="M 85 205 Q 155 155 225 130 T 284 148" stroke="#06b6d4" strokeWidth="2.5" fill="none" strokeLinecap="round" className="pulse-glow"/>

        {/* Side panel - metrics */}
        <rect x="320" y="110" width="120" height="72" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="335" y="134" fill="#94a3b8" fontSize="10">Queries/sec</text>
        <text x="335" y="158" fill="#0f172a" fontSize="22" fontWeight="700">2,847</text>
        <circle cx="420" cy="142" r="12" fill="#eef2ff" className="pulse-glow"/>
        <path d="M415 142l3 3 7-7" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        <rect x="320" y="198" width="120" height="72" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="335" y="222" fill="#94a3b8" fontSize="10">Uptime</text>
        <text x="335" y="248" fill="#0f172a" fontSize="22" fontWeight="700">99.9%</text>
        <circle cx="420" cy="230" r="12" fill="#ecfdf5" className="pulse-glow"/>
        <path d="M415 230l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        {/* SQL code block */}
        <rect x="60" y="285" width="380" height="65" rx="12" fill="#1e1b4b"/>
        <text x="80" y="307" fill="#818cf8" fontSize="11" fontFamily="monospace">SELECT</text>
        <text x="125" y="307" fill="#e2e8f0" fontSize="11" fontFamily="monospace">department, AVG(revenue)</text>
        <text x="80" y="325" fill="#818cf8" fontSize="11" fontFamily="monospace">FROM</text>
        <text x="115" y="325" fill="#22d3ee" fontSize="11" fontFamily="monospace">sales_data</text>
        <text x="195" y="325" fill="#818cf8" fontSize="11" fontFamily="monospace">GROUP BY</text>
        <text x="275" y="325" fill="#22d3ee" fontSize="11" fontFamily="monospace">department</text>
        <text x="352" y="325" fill="#818cf8" fontSize="11" fontFamily="monospace">;</text>
        
        {/* Floating elements */}
        <circle cx="45" cy="380" r="25" fill="#eef2ff" opacity="0.6" className="float-3"/>
        <circle cx="460" cy="40" r="18" fill="#ecfeff" opacity="0.6" className="float-2"/>
      </svg>

      {/* Glow effect */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"></div>
    </div>
  )
}

/* ───── Hero Section ───── */
function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-sm text-primary-700 font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            Now with real-time streaming
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Unlock Insights with{' '}
            <span className="gradient-text">Big Data & SQL</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
            Transform raw data into actionable intelligence. Query billions of rows in seconds, build stunning dashboards, and scale your analytics effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cta" id="hero-cta" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25 active:scale-95 text-base">
              Get Started <Icons.ArrowRight />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-primary-300 hover:text-primary-700 transition-all text-base bg-white">
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['#6366f1','#06b6d4','#8b5cf6','#ec4899'].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{background: c}}>
                  {['A','M','S','K'][i]}
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">2,400+</span> data teams already onboard
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

/* ───── Social Proof ───── */
function SocialProof() {
  const logos = [
    { name: 'Snowflake', letter: 'S' },
    { name: 'Databricks', letter: 'D' },
    { name: 'Stripe', letter: 'S' },
    { name: 'Shopify', letter: 'Sh' },
    { name: 'Airbnb', letter: 'A' },
    { name: 'Spotify', letter: 'Sp' },
  ]

  return (
    <section className="py-12 md:py-16 border-y border-slate-100 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-400 tracking-widest uppercase mb-8">
          Trusted by data-driven teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((logo, i) => (
            <div key={i} className="animate-on-scroll flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default" style={{transitionDelay: `${i * 0.08}s`}}>
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                {logo.letter}
              </div>
              <span className="text-base font-semibold text-slate-400">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── Features ───── */
function Features() {
  const features = [
    {
      icon: <Icons.Zap />,
      title: 'Lightning-Fast Queries',
      desc: 'Run complex SQL queries across billions of rows in under a second with our distributed engine.',
      color: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50',
    },
    {
      icon: <Icons.BarChart />,
      title: 'Real-Time Analytics',
      desc: 'Monitor live data streams and trigger instant alerts when metrics hit your thresholds.',
      color: 'from-primary-500 to-primary-700',
      bg: 'bg-primary-50',
    },
    {
      icon: <Icons.Database />,
      title: 'Universal Data Connectors',
      desc: 'Connect to PostgreSQL, MySQL, BigQuery, Redshift, and 50+ data sources in one click.',
      color: 'from-emerald-400 to-teal-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: <Icons.Layout />,
      title: 'Interactive Dashboards',
      desc: 'Build drag-and-drop dashboards that update in real time. Share them with a single link.',
      color: 'from-violet-500 to-purple-700',
      bg: 'bg-violet-50',
    },
    {
      icon: <Icons.Cloud />,
      title: 'Cloud-Native Architecture',
      desc: 'Scales automatically on AWS, GCP, or Azure. Zero infrastructure management required.',
      color: 'from-accent-400 to-accent-600',
      bg: 'bg-cyan-50',
    },
    {
      icon: <Icons.Shield />,
      title: 'Enterprise-Grade Security',
      desc: 'SOC 2 Type II compliant with end-to-end encryption, SSO, and role-based access controls.',
      color: 'from-rose-400 to-pink-600',
      bg: 'bg-rose-50',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="text-sm font-semibold text-primary-600 tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Everything you need to master your data</h2>
          <p className="text-lg text-slate-500">From raw ingestion to polished insights — one platform, zero compromises.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`animate-on-scroll delay-${i % 5 + 1} group relative p-7 bg-white rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 transition-transform`}>
                <div className={`bg-gradient-to-br ${f.color} bg-clip-text`}>
                  {f.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── How It Works ───── */
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect Your Data',
      desc: 'Link your databases, cloud warehouses, or upload CSV files. We support 50+ integrations out of the box.',
    },
    {
      num: '02',
      title: 'Analyze & Query',
      desc: 'Write SQL in our intelligent editor with autocomplete, or use the visual query builder — no code needed.',
    },
    {
      num: '03',
      title: 'Share Insights',
      desc: 'Export interactive dashboards, schedule automated reports, and collaborate with your team in real time.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <p className="text-sm font-semibold text-primary-600 tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">From data to decisions in three steps</h2>
          <p className="text-lg text-slate-500">No steep learning curve. Get value from your data on day one.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-accent-400"></div>

          {steps.map((s, i) => (
            <div key={i} className={`animate-on-scroll delay-${i + 1} relative text-center`}>
              <div className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-primary-600/25 mb-6">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── FAQ ───── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'What SQL databases and warehouses do you support?',
      a: 'We support all major SQL databases including PostgreSQL, MySQL, SQL Server, Oracle, and cloud warehouses like Snowflake, BigQuery, Redshift, and Databricks. New connectors are added monthly.',
    },
    {
      q: 'Do I need prior experience with Big Data tools?',
      a: 'Not at all. Our visual query builder lets you explore data without writing a single line of SQL. For power users, our SQL editor includes intelligent autocomplete and error suggestions.',
    },
    {
      q: 'How does pricing work?',
      a: 'We offer a generous free tier for individuals and small teams. Paid plans start at $29/month and scale based on query volume and the number of connected data sources. Enterprise plans include dedicated support and SLA guarantees.',
    },
    {
      q: 'Can I integrate DataFlow with my existing tools?',
      a: 'Yes. We offer native integrations with Slack, Notion, Jira, and all major BI tools. Our REST API and webhook support let you build custom workflows with any platform.',
    },
    {
      q: 'Is my data secure on your platform?',
      a: 'Security is our top priority. All data is encrypted at rest and in transit. We are SOC 2 Type II certified, GDPR compliant, and offer single sign-on (SSO) with role-based access controls.',
    },
    {
      q: 'Do you offer team or enterprise plans?',
      a: 'Absolutely. Our Team plan supports unlimited members with shared dashboards and collaborative editing. Enterprise plans include custom SLAs, dedicated infrastructure, and a named account manager.',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm font-semibold text-primary-600 tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Common questions, real answers</h2>
          <p className="text-lg text-slate-500">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`animate-on-scroll delay-${(i % 4) + 1} border border-slate-100 rounded-2xl bg-white hover:border-primary-200 transition-colors overflow-hidden`}>
              <button
                id={`faq-toggle-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <span className={`shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <Icons.ChevronDown />
                </span>
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p className="px-6 pb-5 text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── CTA Section ───── */
function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-4xl mx-auto px-6 text-center animate-on-scroll">
        <div className="relative p-12 md:p-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/20 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to unlock your data's potential?</h2>
            <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
              Join 2,400+ teams using DataFlow to turn raw data into revenue. Start free — no credit card required.
            </p>
            <a
              href="#"
              id="footer-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all hover:shadow-xl hover:shadow-black/10 active:scale-95 text-base"
            >
              Get Started <Icons.ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───── Footer ───── */
function Footer() {
  const columns = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Documentation'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press Kit', 'Partners'],
    },
    {
      title: 'Resources',
      links: ['SQL Guide', 'Big Data 101', 'API Reference', 'Community', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Cookie Policy'],
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white text-sm font-black">D</span>
              </div>
              DataFlow
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              The modern analytics platform for teams who need fast answers from big data. Query, visualize, and share — all in one place.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              {['X', 'LinkedIn', 'GitHub'].map((name) => (
                <a key={name} href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors flex items-center justify-center text-sm font-bold text-slate-400 hover:text-white" aria-label={name}>
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 DataFlow, Inc. All rights reserved.</p>
          <p className="text-sm">Built for data teams that move fast.</p>
        </div>
      </div>
    </footer>
  )
}

/* ───── App ───── */
export default function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
