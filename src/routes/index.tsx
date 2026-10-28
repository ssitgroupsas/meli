import { createFileRoute } from "@tanstack/react-router";
import mascot from "@/assets/melibot-mascot.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "MELIBOT by AITEC — Agente Inteligente para Mercado Libre",
      },
      {
        name: "description",
        content:
          "Atención 24/7, ventas automáticas, indicadores de gestión en tiempo real y postventa con IA para vendedores de Mercado Libre.",
      },
      {
        property: "og:title",
        content: "MELIBOT by AITEC — Agente Inteligente para Mercado Libre",
      },
      {
        property: "og:description",
        content:
          "Atención 24/7, ventas automáticas, indicadores de gestión en tiempo real y postventa con IA para vendedores de Mercado Libre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5493815955447";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.16-1.32A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.06.79.82-2.98-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.66 6.66 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64 1.53.66 2.13.72 2.9.6.46-.06 1.46-.6 1.66-1.18.2-.58.2-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

function IconClock({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconTrendingUp({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function IconChart({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function IconShield({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-france text-france-foreground">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function ChatDemo() {
  return (
    <div className="relative w-full max-w-md animate-fade-up [animation-delay:200ms]">
      {/* Floating KPI chips */}
      <div className="float-soft absolute -left-4 -top-6 z-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg shadow-brand/30 sm:-left-8 sm:block">
        <p className="font-display text-2xl font-bold text-france">+42 %</p>
        <p className="text-xs font-medium text-muted-foreground">Rendimiento</p>
      </div>
      <div className="float-soft absolute -bottom-6 -left-8 z-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg shadow-brand/30 [animation-delay:1.5s] sm:block">
        <p className="font-display text-2xl font-bold text-france">2,8x</p>
        <p className="text-xs font-medium text-muted-foreground">Velocidad</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-brand/20">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-border bg-primary px-5 py-4">
          <img
            src={mascot}
            alt="MELIBOT"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-11 w-11 rounded-full bg-card object-cover ring-2 ring-card/60"
          />
          <div className="min-w-0">
            <p className="font-display text-sm font-bold leading-tight text-primary-foreground">
              Asistente de Ventas AI
            </p>
            <p className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-france" />
              En línea ahora · Automático
            </p>
          </div>
          <span className="ml-auto rounded-full bg-france px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-france-foreground">
            ACTIVO 24 HORAS
          </span>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 px-5 py-5">
          <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-france px-4 py-2.5 text-sm text-france-foreground">
            ¡Hola! ¿Tienen stock disponible para despacho hoy?
            <span className="mt-1 block text-right text-[10px] opacity-70">14:02</span>
          </div>
          <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-secondary px-4 py-2.5 text-sm text-secondary-foreground">
            ¡Hola! Sí, tenemos stock confirmado y listo para entrega inmediata.
            <span className="mt-1 block text-[10px] text-muted-foreground">14:02 · Instantáneo</span>
          </div>
          <div className="self-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-france/30 bg-france/10 px-3 py-1 text-[11px] font-bold text-france">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Respondido en 0.4 s
            </span>
          </div>
          <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-france px-4 py-2.5 text-sm text-france-foreground">
            ¿Puedo abonar con tarjeta en cuotas sin interés?
            <span className="mt-1 block text-right text-[10px] opacity-70">14:03</span>
          </div>
          <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-secondary px-4 py-2.5 text-sm text-secondary-foreground">
            ¡Totalmente! Aceptamos hasta 6 cuotas sin recargo. Te envío el enlace de compra.
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
              Enlace de compra →
            </span>
            <span className="mt-1 block text-[10px] text-muted-foreground">14:03 · Instantáneo</span>
          </div>
        </div>

        {/* Footer strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-border bg-cream px-5 py-3 text-[11px] font-semibold text-muted-foreground">
          <span>100 % Cobertura</span>
          <span className="text-france">·</span>
          <span>Más Conversión</span>
          <span className="text-france">·</span>
          <span>Cierre de Ventas</span>
        </div>
      </div>
    </div>
  );
}

function DashboardDemo() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-brand/20">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
        <div>
          <h3 className="font-display text-lg font-bold">Indicadores de Gestión</h3>
          <p className="text-xs text-muted-foreground">Monitoreo y Control Comercial</p>
        </div>
        <span className="rounded-full bg-france px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-france-foreground">
          Majul AI · Analytics
        </span>
      </div>
      <div className="grid gap-4 px-6 py-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs font-medium text-muted-foreground">Ventas</p>
          <p className="mt-1 font-display text-2xl font-bold">USD 148,5 K</p>
          <p className="text-xs font-bold text-france">▲ 34,8 %</p>
          <svg viewBox="0 0 100 28" className="mt-2 h-7 w-full" aria-hidden>
            <polyline
              points="0,24 15,20 30,22 45,14 60,16 75,8 100,4"
              fill="none"
              stroke="var(--color-brand-deep)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs font-medium text-muted-foreground">Conversión</p>
          <p className="mt-1 font-display text-2xl font-bold">94,2 %</p>
          <p className="text-xs text-muted-foreground">conversaciones → compra</p>
          <div className="mt-2 flex h-7 items-end gap-1" aria-hidden>
            <span className="w-full rounded-sm bg-brand-deep/50" style={{ height: "45%" }} />
            <span className="w-full rounded-sm bg-brand-deep/70" style={{ height: "62%" }} />
            <span className="w-full rounded-sm bg-brand" style={{ height: "78%" }} />
            <span className="w-full rounded-sm bg-brand" style={{ height: "70%" }} />
            <span className="w-full rounded-sm bg-france" style={{ height: "92%" }} />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs font-medium text-muted-foreground">Tiempo real</p>
          <p className="mt-1 font-display text-2xl font-bold">+12,4 %</p>
          <p className="text-xs text-muted-foreground">Control comercial</p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-france/30 bg-france/10 px-2.5 py-1 text-[10px] font-bold text-france">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-france" />
            EN VIVO
          </span>
        </div>
      </div>
      <div className="grid gap-4 border-t border-border bg-cream px-6 py-5 sm:grid-cols-3">
        {[
          { label: "Rendimiento", value: "+42 %" },
          { label: "Velocidad", value: "2,8x" },
          { label: "Precisión", value: "100 %" },
        ].map((m) => (
          <div key={m.label} className="flex items-baseline justify-between rounded-xl bg-card px-4 py-3">
            <span className="text-xs font-medium text-muted-foreground">{m.label}</span>
            <span className="font-display text-lg font-bold text-france">{m.value}</span>
          </div>
        ))}
      </div>
      <p className="border-t border-border px-6 py-2.5 text-center text-[10px] text-muted-foreground">
        Valores de demostración. No constituyen resultados garantizados.
      </p>
    </div>
  );
}

const MODULES = [
  {
    tag: "Módulo A",
    title: "Atención 24/7 e Inmediata",
    icon: IconClock,
    description:
      "Responde consultas de compradores a toda hora: stock, despacho, medios de pago y cuotas, con envío del enlace de compra.",
    points: ["Respuesta en menos de 1 segundo", "Stock confirmado en tiempo real", "Enlace de compra en el chat"],
  },
  {
    tag: "Módulo B",
    title: "Ventas automáticas",
    icon: IconTrendingUp,
    description:
      "Conduce cada conversación hacia el cierre de la venta, orientando la charla a la conversión con llamados a la acción claros.",
    points: ["100 % Cobertura: ninguna consulta sin atender", "Más conversión, cierre de ventas", "Manejo de objeciones frecuentes"],
  },
  {
    tag: "Módulo C",
    title: "Indicadores de gestión",
    icon: IconChart,
    description:
      "Tablero de monitoreo y control comercial en tiempo real: ventas, conversión, rendimiento, velocidad y precisión.",
    points: ["Control comercial en vivo", "Variaciones y tendencias por indicador", "Atribución de consultas que terminan en compra"],
  },
  {
    tag: "Módulo D",
    title: "Postventa y reclamos",
    icon: IconShield,
    description:
      "Gestión inmediata de reclamos con IA, resolución total con garantía y solución integral, y aviso por WhatsApp en tiempo real.",
    points: ["Clasificación y respuesta inmediata", "Resolución total: garantía y solución", "Escalamiento a humano cuando corresponde"],
  },
];

const FLOW = [
  { step: "1", label: "Llega la consulta" },
  { step: "2", label: "MELIBOT responde < 1 s" },
  { step: "3", label: "Envía el enlace de compra" },
  { step: "4", label: "Todo queda en tu tablero" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={mascot}
              alt="MELIBOT"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-display text-lg font-extrabold tracking-tight">
              MELIBOT
              <span className="ml-1.5 align-middle text-[10px] font-bold uppercase tracking-widest text-france">
                by AITEC
              </span>
            </span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#modulos" className="transition-colors hover:text-france">Módulos</a>
            <a href="#indicadores" className="transition-colors hover:text-france">Indicadores</a>
            <a href="#postventa" className="transition-colors hover:text-france">Postventa</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] md:ml-4"
          >
            <WhatsAppIcon />
            Contáctanos
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand/40 blur-3xl"
            aria-hidden
          />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pt-20">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-france/30 bg-france/5 px-3.5 py-1.5 text-xs font-bold text-france">
                <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-france" />
                ACTIVO 24 HORAS · 7 días de la semana
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                <span className="block whitespace-nowrap">Agente Inteligente</span>
                <span className="block whitespace-nowrap">para <span className="text-highlight">Mercado Libre</span></span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                MELIBOT atiende a tus compradores las 24 horas, responde en menos de un
                segundo, conduce cada conversación al cierre de la venta y gestiona
                reclamos con IA — con un panel de indicadores para controlar todo en
                tiempo real, con avisos por WhatsApp.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-france px-6 py-3 text-sm font-bold text-france-foreground shadow-lg shadow-france/25 transition-transform hover:scale-[1.03]"
                >
                  <WhatsAppIcon />
                  ¡Contáctanos!
                </a>
                <a
                  href="#indicadores"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold transition-colors hover:bg-accent"
                >
                  Ver indicadores
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-france" />
                  Respuesta &lt; 1 s
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-france" />
                  100 % Cobertura
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-france" />
                  Aviso por WhatsApp
                </span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative mt-8 sm:mt-20 lg:mt-14">
                <img
                  src={mascot}
                  alt="MELIBOT, agente de ventas con IA"
                  width={1024}
                  height={1024}
                  className="float-soft absolute -top-32 right-2 z-10 hidden h-32 w-32 rounded-3xl object-contain drop-shadow-xl sm:block lg:-top-40 lg:right-4 lg:h-40 lg:w-40"
                />
                <ChatDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Flow strip */}
        <section className="border-y border-border bg-cream">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {FLOW.map((f) => (
              <div key={f.step} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-france font-display text-sm font-bold text-france-foreground">
                  {f.step}
                </span>
                <span className="text-sm font-semibold">{f.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section id="modulos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-france">
              Cuatro capacidades
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Todo el ciclo de venta, en un solo agente
            </h2>
            <p className="mt-3 text-muted-foreground">
              De la primera consulta al reclamo resuelto: MELIBOT automatiza la relación
              con el comprador de punta a punta.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {MODULES.map((m) => (
              <article
                key={m.tag}
                className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/25"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-france">
                      {m.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold">{m.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {m.points.map((p) => (
                    <CheckItem key={p}>{p}</CheckItem>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Dashboard */}
        <section id="indicadores" className="bg-cream py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-france">
                Módulo C · Analytics
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
                Tu gestión comercial, bajo control
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ventas, conversión y control en tiempo real, con rendimiento, velocidad y
                precisión de la atención.
              </p>
            </div>
            <div className="mt-12">
              <DashboardDemo />
            </div>
          </div>
        </section>

        {/* Postventa */}
        <section id="postventa" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-france">
                Módulo D
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
                Servicio Post-venta y Reclamos
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                MELIBOT clasifica cada reclamo, responde de inmediato y ejecuta la
                resolución dentro de las reglas de tu negocio. Si el caso excede esas
                reglas, escala a un humano con el resumen completo.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Gestión inmediata",
                    text: "Atención y respuesta de reclamos con IA, sin esperas.",
                  },
                  {
                    title: "Resolución total",
                    text: "Garantía y solución integral dentro de tus reglas comerciales.",
                  },
                  {
                    title: "Aviso por WhatsApp",
                    text: "Notificación en tiempo real de cada movimiento del caso.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-deep" />
                    <div>
                      <h3 className="font-display font-bold">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-xl shadow-brand/20">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-france text-france-foreground">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold leading-tight">WhatsApp</p>
                      <p className="text-[11px] text-muted-foreground">Aviso en tiempo real</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    Activo
                  </span>
                </div>
                <div className="mt-5 rounded-2xl rounded-bl-md bg-france px-4 py-3 text-sm text-france-foreground">
                  Nuevo reclamo recibido y resuelto con IA: garantía aplicada, repuesto
                  en camino. El caso quedó registrado en tu tablero.
                  <span className="mt-1 block text-right text-[10px] opacity-70">Ahora</span>
                </div>
                <p className="mt-4 text-center text-[11px] text-muted-foreground">
                  Seguimiento de cada caso hasta su cierre, en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 sm:px-6">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-primary px-6 py-16 text-center">
            <img
              src={mascot}
              alt=""
              width={1024}
              height={1024}
              loading="lazy"
              className="pointer-events-none absolute -bottom-8 -right-6 hidden h-56 w-56 object-contain opacity-95 sm:block lg:-right-2 lg:h-64 lg:w-64"
            />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              ¿Listo para vender mientras duermes?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Poné a MELIBOT a trabajar en tu cuenta de Mercado Libre hoy mismo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-france px-8 py-4 text-base font-bold text-france-foreground shadow-xl shadow-france/30 transition-transform hover:scale-[1.04]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              ¡Contáctanos por WhatsApp!
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={mascot}
                alt="MELIBOT"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="font-display text-lg font-extrabold">
                MELIBOT
                <span className="ml-1.5 align-middle text-[10px] font-bold uppercase tracking-widest text-france">
                  by AITEC
                </span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Agente Inteligente para Mercado Libre. Atención 24/7 · Ventas automáticas ·
              Indicadores de gestión · Postventa y reclamos.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold">Una oferta de</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              AITEC · E-commerce Intelligence
              <br />
              AITEC Artificial Intelligence Consulting
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold">Contacto</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-france hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp +54 9 381 595 5447
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-4 py-5 text-[11px] leading-relaxed text-muted-foreground sm:px-6">
            MELIBOT es un producto independiente. "Mercado Libre" es una marca de su
            titular; MELIBOT no está afiliado ni es oficial de dicha plataforma. Las
            cifras mostradas son valores de demostración y no constituyen resultados
            garantizados.
          </p>
        </div>
      </footer>
    </div>
  );
}
