import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";

gsap.registerPlugin(ScrollTrigger);

const WA_URL =
  "https://wa.me/60193939354?text=Hi%20Phonestudio%20Bangi!%20Nak%20tanya%20slot%20repair.%20Model:%20____.%20Issue:%20____.";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ duration: 650, easing: "ease-out-quart", once: true, offset: 50 });

    // Hero entrance timeline
    const els = ["#heroEyebrow", "#heroTitle", "#heroSub", "#heroActions", "#heroStats", "#heroDevice"];
    gsap.set(els, { y: 24, opacity: 0 });
    const tl = gsap.timeline({ delay: 0.15 });
    tl.to("#heroEyebrow", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .to("#heroTitle", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=.4")
      .to("#heroSub", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=.5")
      .to("#heroActions", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=.4")
      .to("#heroStats", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=.3")
      .to("#heroDevice", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=.4");

    // Counters
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          const t = +(el.dataset.count || "0");
          gsap.to({ v: 0 }, {
            v: t, duration: 1.6, ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.round((this.targets()[0] as { v: number }).v).toLocaleString();
            },
          });
        },
      });
    });

    document.querySelectorAll<HTMLElement>("[data-count-bento]").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          const t = +(el.dataset.countBento || "0");
          gsap.to({ v: 0 }, {
            v: t, duration: 1.4, ease: "power2.out",
            onUpdate: function () {
              el.textContent = String(Math.round((this.targets()[0] as { v: number }).v));
            },
          });
        },
      });
    });

    // Phone float
    gsap.to(".device-phone", { y: -12, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="font-sans">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-[200] h-[52px] flex items-center justify-between px-[22px] backdrop-blur-xl bg-background/80 border-b border-foreground/10">
        <a href="#" className="text-sm font-semibold tracking-[-0.3px] text-foreground">Phonestudio<span className="text-primary">.</span></a>
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#services" className="text-[0.8rem] text-foreground/80 hover:text-foreground transition-opacity">Services</a></li>
          <li><a href="#pricing" className="text-[0.8rem] text-foreground/80 hover:text-foreground transition-opacity">Pricing</a></li>
          <li><a href="#testimonials" className="text-[0.8rem] text-foreground/80 hover:text-foreground transition-opacity">Reviews</a></li>
          <li><a href="#process" className="text-[0.8rem] text-foreground/80 hover:text-foreground transition-opacity">How It Works</a></li>
        </ul>
        <a
          href={WA_URL}
          target="_blank" rel="noopener"
          className="text-[0.8rem] font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-full px-[1.1rem] py-[0.42rem] transition-all hover:scale-[1.02]"
        >
          Get a Quote
        </a>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 pt-[52px] pb-[120px] overflow-hidden bg-background"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-hero-glow" />

        <p id="heroEyebrow" className="relative text-[0.82rem] font-semibold tracking-[0.5px] text-primary uppercase mb-4">
          Trusted Phone Repair · Bangi
        </p>
        <h1
          id="heroTitle"
          className="relative font-bold leading-[1.04] tracking-[-0.04em] text-foreground max-w-[900px]"
          style={{ fontSize: "clamp(3.2rem, 7.5vw, 7rem)" }}
        >
          Repair Phone,
          <br />
          <em className="not-italic bg-gradient-yellow bg-clip-text text-transparent">
            siap hari sama.
          </em>
        </h1>
        <p
          id="heroSub"
          className="relative font-light leading-[1.7] text-body max-w-[520px] mt-6"
          style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
        >
          Screen pecah, bateri cepat habis, phone tak boleh charge? Kami repair cepat, kemas, dan bagi warranty up to 6 months.
        </p>
        <div id="heroActions" className="relative flex gap-4 items-center flex-wrap justify-center mt-10">
          <a href={WA_URL} target="_blank" rel="noopener" className="btn-primary">
            WhatsApp for Quote <span className="text-sm">›</span>
          </a>
          <a href="#process" className="btn-outline-brand">
            How It Works <span className="text-sm">›</span>
          </a>
        </div>

        <div id="heroStats" className="relative flex gap-8 sm:gap-16 mt-20 flex-wrap justify-center">
          {[
            { count: 50000, suffix: "+", label: "Phones repaired" },
            { count: 12, suffix: "yrs", label: "Experience" },
            { count: 6, suffix: "mo", label: "Warranty" },
            { count: 1, suffix: "hr", label: "Express repair" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-bold tracking-[-0.04em] text-foreground" style={{ fontSize: "2.2rem" }}>
                <span data-count={s.count}>0</span>
                <span className="text-base align-super ml-0.5">{s.suffix}</span>
              </div>
              <div className="text-[0.78rem] text-body mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Device */}
        <div id="heroDevice" className="relative mt-16">
          <div className="relative inline-block">
            <div
              className="device-phone relative overflow-hidden"
              style={{
                width: 200, height: 400,
                background: "linear-gradient(175deg, #2c2c2e 0%, #1c1c1e 100%)",
                borderRadius: 38,
                boxShadow:
                  "inset 0 0 0 1.5px rgba(255,255,255,.12), 0 60px 120px rgba(0,0,0,.22), 0 20px 40px rgba(0,0,0,.12)",
              }}
            >
              <div
                className="mx-auto relative z-[2]"
                style={{ width: 90, height: 26, background: "#1c1c1e", borderRadius: "0 0 16px 16px" }}
              />
              <div
                className="absolute inset-[6px] flex flex-col items-center pt-12 gap-3 overflow-hidden"
                style={{ borderRadius: 33, background: "linear-gradient(160deg, #1a1815 0%, #0d0c0a 100%)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='400'%3E%3Cpath d='M70 0 L50 90 L110 150 L30 280 L90 340 L70 400' stroke='%23ff453a' stroke-width='1.2' fill='none' opacity='.5'/%3E%3C/svg%3E\") center/cover",
                    animation: "crackFade 1.5s 1.6s ease forwards",
                  }}
                />
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{
                    background: "hsl(45 100% 51% / 0.18)",
                    border: "1.5px solid hsl(45 100% 51% / 0.4)",
                    color: "hsl(45 100% 60%)",
                    animation: "popIn 1s 1.8s ease both",
                  }}
                >
                  ✓
                </div>
                <div className="text-white text-[0.65rem] font-medium tracking-[0.5px] opacity-60">
                  REPAIR COMPLETE
                </div>
                <div className="w-[70%] flex flex-col gap-[0.45rem] mt-2">
                  {[100, 75, 55].map((w, i) => (
                    <div
                      key={i}
                      className="h-[6px] rounded-md bg-white/10"
                      style={{ width: `${w}%`, animation: `barReveal 1s ${2.1 + i * 0.1}s ease both` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-3 -right-6 bg-white rounded-2xl py-[0.7rem] px-4 shadow-soft flex items-center gap-2"
              style={{ animation: "badgeIn 1s 2s ease both" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "hsl(140 70% 45%)" }} />
              <div className="text-[0.7rem] font-semibold text-foreground whitespace-nowrap">Ready for pickup</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background py-[100px]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow" data-aos="fade-up">What We Fix</p>
            <h2 className="section-title mt-3" data-aos="fade-up" data-aos-delay="50">Setiap repair, covered.</h2>
            <p className="section-body mx-auto" data-aos="fade-up" data-aos-delay="100">
              Dari screen pecah sampai water damage motherboard — kami handle semua dengan precision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px]">
            {[
              { icon: "📱", name: "Screen Replacement", desc: "OEM-grade panels yang restore brightness, warna dan touch sensitivity asal.", price: "From RM 80" },
              { icon: "🔋", name: "Battery Replacement", desc: "Bateri capacity penuh. Most models siap dalam 30 minit termasuk calibration.", price: "From RM 60" },
              { icon: "💧", name: "Water Damage", desc: "Ultrasonic cleaning dan component-level repair untuk revive phone yang kena air.", price: "From RM 120" },
              { icon: "📷", name: "Camera Repair", desc: "Photo blur atau glass pecah? Camera module replacement untuk semua brand utama.", price: "From RM 90" },
              { icon: "🔌", name: "Charging Port", desc: "Resoldering atau full port replacement — USB-C, Lightning dan connector lama.", price: "From RM 70" },
              { icon: "🔧", name: "Back Glass & Frame", desc: "Restore look asal phone dan structural integrity dengan precision glass repair.", price: "From RM 100" },
            ].map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 60}
                className="bg-surface hover:bg-surface-2 transition-colors p-10 first:rounded-tl-2xl [&:nth-child(3)]:rounded-tr-2xl [&:nth-child(4)]:rounded-bl-2xl last:rounded-br-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[1.4rem] mb-6 shadow-soft">
                  {s.icon}
                </div>
                <div className="text-[1.05rem] font-semibold text-foreground tracking-[-0.02em] mb-2">{s.name}</div>
                <p className="text-[0.875rem] text-body leading-[1.65]">{s.desc}</p>
                <div className="mt-5 text-[0.8rem] font-semibold" style={{ color: "hsl(38 95% 42%)" }}>{s.price}</div>
                <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[0.8rem] font-medium mt-2 hover:gap-2 transition-all" style={{ color: "hsl(38 95% 42%)" }}>
                  Get quote ›
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO FEATURES */}
      <section id="features" className="bg-background py-[100px]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="mb-14" data-aos="fade-up">
            <p className="eyebrow">Why Phonestudio</p>
            <h2 className="section-title mt-3">Standard yang lain tak boleh match.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* c1 highlight */}
            <div data-aos="fade-up" className="md:col-span-7 rounded-[var(--radius-lg)] p-10 overflow-hidden bg-foreground text-white">
              <p className="text-[0.72rem] font-semibold tracking-[0.5px] uppercase text-white/50 mb-3">Warranty</p>
              <h3 className="text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em]">
                Up to 6 months guarantee on every repair.
              </h3>
              <p className="text-[0.875rem] leading-[1.65] mt-3 text-white/60">
                Kami stand behind our work. Apa-apa fail dalam tempoh warranty, kami repair free — no questions asked.
              </p>
              <div className="mt-4 font-bold tracking-[-0.05em] leading-none" style={{ fontSize: "4.5rem" }}>
                <span data-count-bento="6">0</span>
                <span className="text-3xl align-super ml-1">mo</span>
              </div>
            </div>
            {/* c2 */}
            <div data-aos="fade-up" data-aos-delay="80" className="md:col-span-5 rounded-[var(--radius-lg)] p-10 overflow-hidden bg-surface">
              <span className="text-[2.4rem] block mb-3">⚡</span>
              <p className="eyebrow mb-3">Speed</p>
              <h3 className="text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
                Most repairs done in 30–90 mins.
              </h3>
              <p className="text-[0.875rem] text-body leading-[1.65] mt-3">
                Walk-in pukul 10 pagi, pickup pukul 11. Repair ready, sama hari.
              </p>
            </div>
            {/* c3 */}
            <div data-aos="fade-up" className="md:col-span-4 rounded-[var(--radius-lg)] p-10 overflow-hidden bg-surface">
              <span className="text-[2.4rem] block mb-3">🔬</span>
              <p className="eyebrow mb-3">Quality</p>
              <h3 className="text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
                Genuine-grade parts only.
              </h3>
              <p className="text-[0.875rem] text-body leading-[1.65] mt-3">
                Kami tak guna part murah aftermarket yang merosakkan phone.
              </p>
            </div>
            {/* c4 yellow */}
            <div data-aos="fade-up" data-aos-delay="80" className="md:col-span-4 rounded-[var(--radius-lg)] p-10 overflow-hidden bg-primary text-foreground">
              <span className="text-[2.4rem] block mb-3">💬</span>
              <p className="text-[0.72rem] font-semibold tracking-[0.5px] uppercase text-foreground/60 mb-3">Transparency</p>
              <h3 className="text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em]">
                Quote dulu, proceed bila setuju.
              </h3>
              <p className="text-[0.875rem] leading-[1.65] mt-3 text-foreground/75">
                Tiada hidden fees. Anda approve quote, baru kami mula kerja.
              </p>
            </div>
            {/* c5 */}
            <div data-aos="fade-up" data-aos-delay="160" className="md:col-span-4 rounded-[var(--radius-lg)] p-10 overflow-hidden bg-surface">
              <span className="text-[2.4rem] block mb-3">🛡️</span>
              <p className="eyebrow mb-3">QC Check</p>
              <h3 className="text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground">
                15-point check selepas repair.
              </h3>
              <p className="text-[0.875rem] text-body leading-[1.65] mt-3">
                Setiap phone lulus QC sebelum kami return. Pastikan semua function jalan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS TICKER */}
      <div id="brands" className="bg-background py-16 overflow-hidden">
        <p className="text-center text-[0.75rem] font-semibold tracking-[0.5px] uppercase text-subtle mb-8">
          Devices we service
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
          <div className="ticker-track flex gap-14 w-max">
            {[...Array(2)].map((_, dup) =>
              ["Apple", "Samsung", "Xiaomi", "OPPO", "Vivo", "Realme", "Huawei", "Google Pixel", "OnePlus", "Nothing"].map((b, i) => (
                <span key={`${dup}-${i}`} className="text-base font-semibold text-surface-2 hover:text-body transition-colors whitespace-nowrap">
                  {b}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section id="process" className="bg-surface py-[100px]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="eyebrow" data-aos="fade-right">How It Works</p>
              <h2 className="section-title mt-3" data-aos="fade-right" data-aos-delay="50">
                Simple.<br />Painless. Done.
              </h2>
              <p className="section-body" data-aos="fade-right" data-aos-delay="100">
                Tiada booking susah. Tiada bil terkejut. Smooth repair experience, every time.
              </p>
              <div className="mt-10">
                {[
                  { t: "WhatsApp atau walk-in", d: "Message kami issue anda atau drop by terus. Pricing confirmed upfront, zero hidden charges." },
                  { t: "Free Diagnosis", d: "Full inspection percuma. Clear breakdown sebelum kami sentuh apa-apa." },
                  { t: "Express Repair", d: "Most jobs siap dalam 30–90 minit. Complex repairs siap hari sama atau next morning." },
                  { t: "QC Check + Warranty", d: "15-point QC sebelum handover. Setiap repair backed by warranty up to 6 months." },
                ].map((p, i) => (
                  <div key={i} data-aos="fade-right" data-aos-delay={i * 80} className="flex gap-5 py-7 border-b border-surface-2 last:border-b-0 items-start">
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-[0.72rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-foreground tracking-[-0.02em] mb-1">{p.t}</div>
                      <p className="text-[0.875rem] text-body leading-[1.65]">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-center" data-aos="fade-left">
              <div className="w-[260px] flex flex-col">
                {[
                  { label: "WhatsApp Message", time: "10:00 AM", color: "hsl(var(--primary))" },
                  { label: "Diagnosis Complete", time: "10:10 AM · Free", color: "hsl(140 70% 45%)" },
                  { label: "Repair In Progress", time: "10:20 AM", color: "hsl(28 90% 55%)" },
                  { label: "Ready for Pickup", time: "11:00 AM · Done ✓", color: "hsl(140 70% 45%)", last: true },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 py-4">
                    <div className="flex flex-col items-center w-7 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full" style={{ background: t.color }} />
                      {!t.last && (
                        <div className="w-[1.5px] h-9" style={{ background: `linear-gradient(to bottom, ${t.color}, ${t.color.replace(")", " / 0.2)")}` }} />
                      )}
                    </div>
                    <div>
                      <div className="text-[0.75rem] font-semibold text-foreground">{t.label}</div>
                      <div className="text-[0.68rem] text-body mt-0.5">{t.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-background py-[100px]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="eyebrow" data-aos="fade-up">Pricing</p>
            <h2 className="section-title mt-3" data-aos="fade-up" data-aos-delay="50">Upfront pricing.<br />No surprises.</h2>
            <p className="section-body mx-auto" data-aos="fade-up" data-aos-delay="100">
              Setiap quote confirmed sebelum kami mula. Apa yang anda nampak, itu yang anda bayar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Essential */}
            <div data-aos="fade-up" className="bg-surface rounded-[var(--radius-lg)] p-10">
              <div className="inline-block text-[0.65rem] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full mb-5" style={{ background: "hsl(45 100% 51% / 0.18)", color: "hsl(38 95% 42%)" }}>
                Essential
              </div>
              <div className="font-bold tracking-[-0.05em] leading-none text-foreground" style={{ fontSize: "3rem" }}>
                <span className="text-[1.2rem] align-super font-medium">RM</span>60
              </div>
              <div className="text-[0.78rem] text-body mt-1">starting from</div>
              <div className="h-px bg-border my-7" />
              <ul className="flex flex-col gap-3 list-none">
                {["Battery replacement", "Charging port repair", "Speaker & mic fix", "30-day warranty", "Walk-in service"].map((f, i) => (
                  <li key={i} className="text-[0.875rem] text-body flex items-start gap-2">
                    <span className="text-[0.8rem] font-bold mt-0.5 flex-shrink-0" style={{ color: "hsl(38 95% 42%)" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WA_URL} target="_blank" rel="noopener" className="block w-full text-center mt-8 rounded-full font-semibold text-[0.875rem] py-3.5 border-[1.5px] border-foreground/20 text-foreground hover:bg-foreground/5 transition-all">
                Get Started
              </a>
            </div>

            {/* Featured (dark) */}
            <div data-aos="fade-up" data-aos-delay="80" className="bg-foreground text-white rounded-[var(--radius-lg)] p-10 relative md:scale-[1.03]">
              <div className="inline-block text-[0.65rem] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full mb-5 bg-primary text-primary-foreground">
                Most Popular
              </div>
              <div className="font-bold tracking-[-0.05em] leading-none text-white" style={{ fontSize: "3rem" }}>
                <span className="text-[1.2rem] align-super font-medium">RM</span>120
              </div>
              <div className="text-[0.78rem] text-white/50 mt-1">starting from</div>
              <div className="h-px bg-white/10 my-7" />
              <ul className="flex flex-col gap-3 list-none">
                {["Screen replacement", "Back glass repair", "Camera module swap", "Up to 6-month warranty", "1-hour express service"].map((f, i) => (
                  <li key={i} className="text-[0.875rem] text-white/70 flex items-start gap-2">
                    <span className="text-[0.8rem] font-bold mt-0.5 flex-shrink-0 text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WA_URL} target="_blank" rel="noopener" className="block w-full text-center mt-8 rounded-full font-semibold text-[0.875rem] py-3.5 bg-primary text-primary-foreground hover:bg-primary-hover transition-all">
                Get Started
              </a>
            </div>

            {/* Premium */}
            <div data-aos="fade-up" data-aos-delay="160" className="bg-surface rounded-[var(--radius-lg)] p-10">
              <div className="inline-block text-[0.65rem] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full mb-5" style={{ background: "hsl(45 100% 51% / 0.18)", color: "hsl(38 95% 42%)" }}>
                Premium
              </div>
              <div className="font-bold tracking-[-0.05em] leading-none text-foreground" style={{ fontSize: "3rem" }}>
                <span className="text-[1.2rem] align-super font-medium">RM</span>200
              </div>
              <div className="text-[0.78rem] text-body mt-1">starting from</div>
              <div className="h-px bg-border my-7" />
              <ul className="flex flex-col gap-3 list-none">
                {["Motherboard-level repair", "Water damage recovery", "Data recovery service", "Up to 6-month warranty", "Priority slot"].map((f, i) => (
                  <li key={i} className="text-[0.875rem] text-body flex items-start gap-2">
                    <span className="text-[0.8rem] font-bold mt-0.5 flex-shrink-0" style={{ color: "hsl(38 95% 42%)" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WA_URL} target="_blank" rel="noopener" className="block w-full text-center mt-8 rounded-full font-semibold text-[0.875rem] py-3.5 bg-primary text-primary-foreground hover:bg-primary-hover transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-surface py-[100px]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="eyebrow" data-aos="fade-up">Reviews</p>
            <h2 className="section-title mt-3" data-aos="fade-up" data-aos-delay="50">Customers love us.</h2>
            <p className="section-body mx-auto" data-aos="fade-up" data-aos-delay="100">
              4.8★ on Google. Real feedback dari real customers di sekitar Bangi & Kajang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { stars: 5, text: "Dropped my iPhone 15 Pro and cracked the screen. Came in pagi, got it back lunch time. Screen feels exactly like original. Super impressed.", name: "Amirul H.", device: "iPhone 15 Pro · Screen Repair" },
              { stars: 5, text: "Battery habis cepat sangat. Dorang siap dalam 30 minit. Sekarang phone tahan satu hari penuh. Harga pun berpatutan, tak rasa kena tipu langsung.", name: "Syafiqah R.", device: "Samsung S23 · Battery Swap" },
              { stars: 5, text: "Phone terjatuh dalam kolam renang. Ingat dah habis. Hantar sini, dorang buat deep cleaning. Alhamdulillah phone hidup balik. Highly recommend!", name: "Faiz M.", device: "Xiaomi 14 · Water Damage" },
            ].map((t, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80} className="bg-white rounded-[var(--radius-lg)] p-8 shadow-soft">
                <div className="text-[0.85rem] tracking-[2px] mb-4" style={{ color: "hsl(38 95% 50%)" }}>
                  {"★".repeat(t.stars)}
                </div>
                <p className="text-[0.9rem] text-foreground leading-[1.72]">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-[0.85rem] font-bold" style={{ color: "hsl(38 95% 35%)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-[0.83rem] font-semibold text-foreground">{t.name}</div>
                    <div className="text-[0.75rem] text-body mt-0.5">{t.device}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-foreground py-[120px] text-center" data-aos="fade-up">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="font-bold tracking-[-0.04em] leading-[1.05] text-white max-w-[700px] mx-auto mb-4" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
            Ready to repair<br />your phone?
          </h2>
          <p className="text-base text-white/50 max-w-[440px] mx-auto mb-10 leading-[1.7]">
            Most repairs siap hari sama. Walk in atau WhatsApp kami sekarang — no appointment needed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={WA_URL} target="_blank" rel="noopener" className="btn-yellow-on-dark">WhatsApp Us ›</a>
            <a href="#pricing" className="btn-ghost-white">View Pricing ›</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(30_10%_6%)] py-12">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-10 border-b border-white/10">
            <div className="col-span-2 md:col-span-1">
              <div className="text-[0.92rem] font-semibold text-white/85 mb-3">Phonestudio Bangi<span className="text-primary">.</span></div>
              <p className="text-[0.8rem] text-white/40 leading-[1.7]">
                Professional smartphone specialist.<br />Genuine parts, expert hands, warranty guaranteed.
              </p>
            </div>
            <div>
              <h5 className="text-[0.72rem] font-semibold tracking-[0.5px] uppercase text-white/35 mb-4">Services</h5>
              <ul className="flex flex-col gap-2 list-none">
                {["Screen Repair", "Battery Swap", "Water Damage", "Camera Fix", "Data Recovery"].map((l) => (
                  <li key={l}><a href="#services" className="text-[0.8rem] text-white/50 hover:text-white/85 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[0.72rem] font-semibold tracking-[0.5px] uppercase text-white/35 mb-4">Brands</h5>
              <ul className="flex flex-col gap-2 list-none">
                {["Apple iPhone", "Samsung", "Xiaomi", "OPPO / Realme", "Vivo / Huawei"].map((l) => (
                  <li key={l}><a href="#" className="text-[0.8rem] text-white/50 hover:text-white/85 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[0.72rem] font-semibold tracking-[0.5px] uppercase text-white/35 mb-4">Contact</h5>
              <ul className="flex flex-col gap-2 list-none">
                <li className="text-[0.8rem] text-white/50">Bangi, Selangor</li>
                <li className="text-[0.8rem] text-white/50">Mon–Sat 10am–8pm</li>
                <li><a href={WA_URL} target="_blank" rel="noopener" className="text-[0.8rem] text-white/50 hover:text-white/85 transition-colors">wa.me/60193939354</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 flex-wrap gap-3">
            <span className="text-[0.72rem] text-white/30">© 2025 Phonestudio Bangi. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-[0.72rem] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="text-[0.72rem] text-white/30 hover:text-white/60 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href={WA_URL}
        target="_blank" rel="noopener"
        className="fixed bottom-7 right-7 z-[300] w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: "#25d366", boxShadow: "0 4px 20px rgba(37,211,102,.45)" }}
        aria-label="WhatsApp Phonestudio Bangi"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
