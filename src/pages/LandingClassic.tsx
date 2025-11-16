// src/pages/LandingClassic.tsx
import React from "react";

function Container({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-[10px] font-bold text-white">
            KS
          </div>
          <span className="text-sm font-semibold tracking-tight">Kart Order</span>
        </div>

        <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
          <a href="#why" className="hover:text-gray-900">
            Why Kart Order
          </a>
          <a href="#features" className="hover:text-gray-900">
            Features
          </a>
          <a href="#examples" className="hover:text-gray-900">
            Live examples
          </a>
          <a href="#pricing" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="#faq" className="hover:text-gray-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="hidden rounded-lg border border-gray-200 px-3 py-1.5 text-sm md:block"
          >
            Sign in
          </a>
          <a
            href="/login"
            className="rounded-lg bg-black px-3.5 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Start free
          </a>
        </div>
      </Container>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-40" />
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:gap-16 md:py-20">
        <div>
          {/* your exact pill — kept verbatim */}
          <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Live in
            minutes — no code
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Turn WhatsApp messages into clean, trackable orders.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Kart Order reads your WhatsApp texts and creates neat order lines with
            quantities, <b>brands</b>, and <b>variants</b>. Fix anything with one
            click — the AI learns from you.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
            >
              Start free — 25 orders/day
            </a>
            <a
              href="#why"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Why Kart Order?
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-gray-700">
            <li>• AI parsing with human-in-the-loop fixes</li>
            <li>• Brand/variant awareness (e.g., Almarai · Full Fat)</li>
            <li>• Instant contact actions (call / WhatsApp)</li>
            <li>• Order status: Pending · Shipped · Paid</li>
            <li>• Admin: org disable, spend caps, product aliases</li>
          </ul>
        </div>

        {/* screenshot stack */}
        <div className="relative">
          <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-200 to-emerald-200 blur-2xl opacity-60" />
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
            <img src="/1.png" alt="Dashboard screenshot" className="block w-full" />
          </div>

          <div className="absolute -bottom-6 -right-6 hidden w-[42%] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl md:block">
            <img src="/2.png" alt="Mobile screenshot" className="block w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function LogoRow() {
  const cls = "h-6 opacity-60";
  return (
    <Container className="py-10">
      <p className="text-center text-xs uppercase tracking-widest text-gray-500">
        Works with
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className={cls}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Phone_font_awesome.svg"
          className={cls}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/OOjs_UI_icon_cart.svg"
          className={cls}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Marketo.svg"
          className={cls}
        />
      </div>
    </Container>
  );
}

/** NEW: Why KartoSync — pain points with outcomes */
function Why() {
  const blocks = [
    {
      t: "Missed orders in chat chaos",
      d: "Multiple customers send lists through the day. It’s easy to miss a message or forget to dispatch.",
      out: "Every message turns into a tracked order with status. Nothing slips.",
      kpi: "↓ Missed orders",
    },
    {
      t: "Brand & variant confusion",
      d: "“Milk” can mean Almarai 1L Full Fat or Low Fat. Staff pick the wrong item.",
      out: "AI picks brand/variant from text. You can correct once; it remembers.",
      kpi: "↓ Wrong items",
    },
    {
      t: "Manual copy-paste takes time",
      d: "Typing each item, unit and qty into sheets wastes staff hours.",
      out: "Instant structured lines. Edit inline. Export or fulfil directly.",
      kpi: "↓ 30–50% handling time",
    },
    {
      t: "Customer follow-ups",
      d: "Back-and-forth calls for clarifications slows fulfilment.",
      out: "Order card has quick Call / WhatsApp. Resolve in seconds.",
      kpi: "↑ Faster dispatch",
    },
  ];

  return (
    <section id="why" className="bg-gray-50 py-16 md:py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Why shops choose Kart Order
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          Clear outcomes, not buzzwords. Kart Order reduces mistakes and frees up
          staff time — starting day one.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b) => (
            <div
              key={b.t}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="text-sm font-semibold text-gray-900">{b.t}</div>
              <div className="mt-1 text-sm text-gray-600">{b.d}</div>
              <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
                <b>Outcome:</b> {b.out}
              </div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] text-gray-700">
                ✅ {b.kpi}
              </div>
            </div>
          ))}
        </div>

        {/* mini ROI callout */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
          <b>Example ROI:</b> If your staff spends ~2 minutes typing each
          WhatsApp order and you do 150/day, that’s ~5 hours saved daily. Even a
          20% reduction pays for itself on day one.
        </div>
      </Container>
    </section>
  );
}

/** Existing features — kept */
function Features() {
  const feats = [
    {
      title: "Brand & variant aware",
      desc: "“1 L Almarai Milk · Full Fat” is parsed as qty, unit, brand, and variant automatically.",
      icon: "🧠",
    },
    {
      title: "One-click fixes",
      desc: "Edit items inline (qty/unit/brand/variant). Your corrections teach the model for next time.",
      icon: "✏️",
    },
    {
      title: "Fast contact actions",
      desc: "Call or WhatsApp the customer instantly from the order card.",
      icon: "⚡",
    },
    {
      title: "Admin controls",
      desc: "Disable orgs, see AI spend & caps, trigger retraining, and manage products/aliases.",
      icon: "🛡️",
    },
  ];
  return (
    <section id="features" className="py-16 md:py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Everything you need
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          Built for busy storefronts and marketplaces that live on WhatsApp.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {feats.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-2 text-base font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-gray-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** NEW: Live examples — real WhatsApp text → parsed result cards */
function Examples() {
  const rows = [
    {
      msg: "pls send 2 almarai milk full fat 1L + 1 bread",
      parsed: [
        "2 × Milk · Brand: Almarai · Variant: Full Fat · Unit: 1L",
        "1 × Bread",
      ],
    },
    {
      msg: "3 பால் பாக்கெட் + 2 coke 330ml",
      parsed: ["3 × Milk · Unit: pack", "2 × Coca-Cola · Unit: 330ml"],
    },
    {
      msg: "need 5kg basmati rice (daawat) + 1kg tata salt",
      parsed: [
        "5 kg · Basmati Rice · Brand: Daawat",
        "1 kg · Salt · Brand: Tata",
      ],
    },
  ];

  return (
    <section id="examples" className="bg-gray-50 py-16 md:py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Live examples
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          From messy messages to exact line items — with brand and variant.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {rows.map((r, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="text-[11px] uppercase tracking-wide text-gray-500">
                WhatsApp message
              </div>
              <div className="mt-1 rounded-lg bg-gray-50 p-3 text-sm text-gray-800">
                “{r.msg}”
              </div>

              <div className="mt-3 text-[11px] uppercase tracking-wide text-gray-500">
                Parsed items
              </div>
              <ul className="mt-1 grid gap-2 text-sm text-gray-800">
                {r.parsed.map((p, j) => (
                  <li
                    key={j}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* your modal/screenshot tile */}
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <img src="/1.png" className="w-full" alt="Fix modal screenshot" />
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      sub: "25 orders/day",
      features: ["AI parsing", "Manual fixes", "Basic support"],
      cta: "Start free",
      href: "/login",
      badge: "Most popular",
    },
    {
      name: "Pro",
      price: "$29",
      sub: "Unlimited orders",
      features: ["Everything in Free", "PDF invoices", "Priority support"],
      cta: "Upgrade",
      href: "/login",
      highlight: true,
    },
  ];
  return (
    <section id="pricing" className="py-16 md:py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Simple pricing
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          Start free. Upgrade when you’re ready. No contracts.
        </p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                p.highlight ? "border-black" : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{p.name}</div>
                {p.badge && (
                  <span className="rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="mt-2 text-3xl font-bold">
                {p.price}
                <span className="text-base font-normal text-gray-500">/mo</span>
              </div>
              <div className="text-sm text-gray-600">{p.sub}</div>

              <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <a
                href={p.href}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold ${
                  p.highlight
                    ? "bg-black text-white hover:bg-black/90"
                    : "border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const qa = [
    {
      q: "Does it work without coding?",
      a: "Yes. Paste your WhatsApp number and start. No engineers required.",
    },
    {
      q: "What about mistakes?",
      a: "Fix with one click. The AI learns your brand/variant preferences over time.",
    },
    {
      q: "Is my data safe?",
      a: "We store only what’s needed to process orders. Admins can disable orgs anytime.",
    },
  ];
  return (
    <section id="faq" className="py-16 md:py-20">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {qa.map((x) => (
            <div key={x.q} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="font-semibold">{x.q}</div>
              <div className="mt-1 text-sm text-gray-600">{x.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-gray-600 md:flex-row">
        <div>© {new Date().getFullYear()} Kart Order</div>
        <div className="flex items-center gap-4">
          <a href="#why" className="hover:text-gray-900">
            Why Kart Order
          </a>
          <a href="#pricing" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="/login" className="hover:text-gray-900">
            Sign in
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default function LandingClassic() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoRow />
      <Why />
      <Features />
      <Examples />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}