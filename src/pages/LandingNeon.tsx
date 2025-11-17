// src/pages/LandingNeon.tsx
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement>;

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <section className={`relative ${className}`} {...rest}>
    {children}
  </section>
);
export default function LandingNeon() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      {/* Neon header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0F1A]/70 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[10px] font-extrabold">
              KO
            </div>
            <span className="text-sm font-semibold tracking-tight">KartOrder</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="/" className="hover:text-white">Classic</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <a
            href="https://calendly.com/manoj-officialmail/30min"
            className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3.5 py-2 text-sm font-semibold text-black"
          >
            Start free
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section className="overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              ⚡ AI for WhatsApp orders
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Fewer mistakes. Faster packing. Happy customers.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Parse brand & variant from messy chats. Fix once, the model remembers. Your team moves twice as fast.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black"
              >
                Try free — 25/day
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90"
              >
                See features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-2xl" />
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
              <img src="/1.png" alt="Dashboard screenshot" className="block w-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden w-[42%] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl md:block">
              <img src="/2.png" alt="Mobile screenshot" className="block w-full" />
            </div>
          </div>
        </div>
      </Section>

      {/* Simple features row */}
      <Section id="features" className="py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 md:grid-cols-3">
          {[
            ["🧠 Brand-aware parsing", "Understands Almarai Full Fat vs. Low Fat, etc."],
            ["✏️ One-click fixes", "Correct once; the AI learns for next time."],
            ["📦 Faster fulfilment", "Cleaner picks = fewer WhatsApp back-and-forths."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xl">{t}</div>
              <div className="mt-1 text-sm text-white/70">{d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing snippet */}
      <Section id="pricing" className="py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-5xl gap-4 px-4 md:grid-cols-2">
          {[
            ["Free", "$0/mo", "25 orders/day"],
            ["Pro", "$29/mo", "Unlimited orders"],
          ].map(([name, price, sub]) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{name}</div>
              </div>
              <div className="mt-2 text-3xl font-bold">
                {price} <span className="text-base font-normal text-white/60">/mo</span>
              </div>
              <div className="text-sm text-white/70">{sub}</div>
              <a
                href="/login"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 text-sm text-white/70">
          <div>© {new Date().getFullYear()} KartOrder</div>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-white">Classic</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/login" className="hover:text-white">Sign in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}