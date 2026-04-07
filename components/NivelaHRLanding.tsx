"use client";

import { useState, CSSProperties } from "react";
import Image from "next/image";

/* ─── TYPES ─────────────────────────────────────────────── */
interface StyleMap {
  [key: string]: CSSProperties;
}

/* ─── STYLES ─────────────────────────────────────────────── */
const s: StyleMap = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#EDE9FF",
    color: "#1A1640",
    overflowX: "hidden",
  },
  // NAV
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 5vw", height: 72,
    background: "rgba(237, 233, 255, 0.92)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(74, 63, 216, 0.1)",
  },
  navLinks: {
    display: "flex", gap: "2rem", listStyle: "none",
    alignItems: "center", margin: 0, padding: 0,
  },
  hamburger: {
    display: "none", flexDirection: "column", gap: 5,
    background: "none", border: "none", cursor: "pointer", padding: 6,
  },
  hamburgerLine: {
    width: 24, height: 2, background: "#4A3FD8",
    borderRadius: 2, display: "block",
  },
  mobileMenu: {
    position: "fixed", top: 72, left: 0, right: 0, zIndex: 99,
    background: "rgba(237,233,255,0.98)", backdropFilter: "blur(16px)",
    padding: "1.5rem 5vw",
    display: "flex", flexDirection: "column", gap: "1.25rem",
    borderBottom: "1px solid rgba(74,63,216,0.1)",
  },
  // HERO
  hero: {
    minHeight: "100vh", display: "flex",
    alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden", padding: "96px 5vw 80px",
  },
  heroBubble: {
    position: "absolute", borderRadius: "50%",
    background: "linear-gradient(135deg,#B8AEFF 0%,#E8A4C8 100%)",
    opacity: 0.45, pointerEvents: "none",
  },
  heroContent: { position: "relative", zIndex: 2, maxWidth: 760, textAlign: "center" },
  heroBadge: {
    display: "inline-block",
    background: "rgba(74,63,216,0.1)", color: "#4A3FD8",
    border: "1px solid rgba(74,63,216,0.2)",
    padding: "0.35rem 1.1rem", borderRadius: 999,
    fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em",
    textTransform: "uppercase", marginBottom: "1.5rem",
  },
  heroH1: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "clamp(2.6rem,5.5vw,4.2rem)",
    fontWeight: 800, lineHeight: 1.08, color: "#1A1640",
    marginBottom: "1.5rem", letterSpacing: "-0.02em",
  },
  heroSub: {
    fontSize: "1.1rem", color: "#4A4578", lineHeight: 1.65,
    maxWidth: 580, margin: "0 auto 2.5rem", fontWeight: 300,
  },
  heroActions: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" },
  btnPrimary: {
    background: "#4A3FD8", color: "#fff", border: "none", cursor: "pointer",
    padding: "0.85rem 2rem", borderRadius: 999, fontFamily: "inherit",
    fontSize: "0.95rem", fontWeight: 500,
  },
  btnOutline: {
    background: "transparent", color: "#4A3FD8",
    border: "1.5px solid #4A3FD8", cursor: "pointer",
    padding: "0.85rem 2rem", borderRadius: 999, fontFamily: "inherit",
    fontSize: "0.95rem", fontWeight: 500,
  },
  // SECTIONS
  sectionLabel: {
    display: "inline-block", color: "#F06B8A",
    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em",
    textTransform: "uppercase", marginBottom: "0.75rem",
  },
  sectionTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700,
    lineHeight: 1.15, color: "#1A1640",
    letterSpacing: "-0.02em", marginBottom: "1rem",
  },
  sectionSub: {
    color: "#4A4578", fontSize: "1rem",
    lineHeight: 1.65, fontWeight: 300, maxWidth: 520,
  },
  // PROBLEMS
  problems: { background: "#F5F2FF", padding: "90px 5vw" },
  problemsGrid: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    gap: "1rem", marginTop: "2.5rem",
  },
  problemCard: {
    background: "#fff", borderRadius: 14,
    padding: "1.1rem 1.2rem",
    border: "1px solid rgba(74,63,216,0.08)",
    display: "flex", alignItems: "flex-start", gap: "0.75rem",
  },
  problemDot: {
    width: 8, height: 8, borderRadius: "50%",
    background: "#F06B8A", flexShrink: 0, marginTop: 5,
  },
  problemText: { fontSize: "0.88rem", color: "#4A4578", lineHeight: 1.4, margin: 0 },
  // VISUAL BUBBLES
  pvsCircle: {
    position: "absolute", borderRadius: "50%",
    background: "linear-gradient(135deg,#B0A6FF 0%,#E890B8 100%)",
  },
  pvsBadge: {
    position: "absolute", background: "#fff", borderRadius: 14,
    padding: "0.75rem 1.1rem",
    boxShadow: "0 8px 28px rgba(74,63,216,0.15)",
    fontFamily: "'Sora', sans-serif",
  },
  pvsNum: { fontSize: "1.4rem", fontWeight: 700, color: "#4A3FD8", display: "block" },
  pvsLbl: { fontSize: "0.72rem", color: "#8A86B0", fontWeight: 400, fontFamily: "inherit" },
  // SERVICES
  services: { padding: "90px 5vw" },
  servicesHeader: { textAlign: "center", marginBottom: "3rem" },
  servicesSubCenter: {
    color: "#4A4578", fontSize: "1rem", lineHeight: 1.65,
    fontWeight: 300, maxWidth: 480, margin: "0 auto",
  },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" },
  serviceCard: {
    background: "#fff", borderRadius: 24, padding: "2rem 1.75rem",
    border: "1px solid rgba(74,63,216,0.08)",
    position: "relative", overflow: "hidden",
  },
  serviceCardTop: { position: "absolute", top: 0, left: 0, right: 0, height: 4 },
  serviceIcon: {
    width: 48, height: 48, borderRadius: 12,
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: "1.25rem", fontSize: "1.3rem",
  },
  serviceTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "1.15rem", fontWeight: 700, color: "#1A1640", marginBottom: "0.75rem",
  },
  serviceDesc: {
    fontSize: "0.88rem", color: "#4A4578",
    lineHeight: 1.55, marginBottom: "1.25rem", fontWeight: 300,
  },
  serviceItems: { listStyle: "none", padding: 0, margin: 0 },
  serviceItem: {
    fontSize: "0.83rem", color: "#4A4578",
    padding: "0.3rem 0", display: "flex", alignItems: "center", gap: "0.5rem",
  },
  serviceItemDot: {
    width: 5, height: 5, borderRadius: "50%",
    background: "#F06B8A", flexShrink: 0,
  },
  serviceBenefits: {
    marginTop: "1.5rem", padding: "1rem 1.1rem",
    borderRadius: 8, background: "#EDE9FF",
  },
  serviceBenefitsLabel: {
    display: "block", fontSize: "0.78rem", fontWeight: 600,
    color: "#8A86B0", textTransform: "uppercase",
    letterSpacing: "0.06em", marginBottom: "0.5rem",
  },
  serviceBenefitsText: {
    fontSize: "0.82rem", color: "#4A3FD8",
    lineHeight: 1.45, margin: 0, fontWeight: 500,
  },
  // WHY
  why: { background: "#2E268A", position: "relative", overflow: "hidden", padding: "90px 5vw" },
  whyInner: { maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 },
  whyGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", marginTop: "3rem" },
  whyCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 14, padding: "1.5rem 1.25rem", textAlign: "center",
  },
  whyNum: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "2.4rem", fontWeight: 800, color: "#F06B8A",
    display: "block", marginBottom: "0.3rem",
  },
  whyCardTitle: { fontSize: "0.9rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" },
  whyCardText: { fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.45, fontWeight: 300 },
  // CTA
  ctaSection: { background: "#F5F2FF", padding: "90px 5vw" },
  ctaInner: {
    maxWidth: 900, margin: "0 auto",
    display: "grid", gridTemplateColumns: "1fr 1.2fr",
    gap: "4rem", alignItems: "center",
  },
  ctaForm: {
    background: "#fff", borderRadius: 24, padding: "2.25rem 2rem",
    border: "1px solid rgba(74,63,216,0.1)",
    boxShadow: "0 12px 40px rgba(74,63,216,0.08)",
  },
  ctaFormTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "1.2rem", fontWeight: 700, color: "#1A1640", marginBottom: "1.5rem",
  },
  formGroup: { marginBottom: "1rem" },
  formLabel: {
    display: "block", fontSize: "0.8rem", fontWeight: 500,
    color: "#4A4578", marginBottom: "0.35rem",
  },
  formInput: {
    width: "100%", background: "#EDE9FF",
    border: "1.5px solid transparent", borderRadius: 8,
    padding: "0.7rem 1rem", fontFamily: "inherit",
    fontSize: "0.9rem", color: "#1A1640", outline: "none",
  },
  formTextarea: {
    width: "100%", background: "#EDE9FF",
    border: "1.5px solid transparent", borderRadius: 8,
    padding: "0.7rem 1rem", fontFamily: "inherit",
    fontSize: "0.9rem", color: "#1A1640", outline: "none",
    resize: "vertical", minHeight: 100,
  },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  formSubmit: {
    width: "100%", background: "#4A3FD8", color: "#fff",
    border: "none", cursor: "pointer", padding: "0.9rem",
    borderRadius: 999, fontFamily: "inherit",
    fontSize: "0.95rem", fontWeight: 500, marginTop: "0.5rem",
  },
  formDisclaimer: { textAlign: "center", fontSize: "0.75rem", color: "#8A86B0", marginTop: "0.75rem" },
  // FOOTER
  footer: {
    background: "#1A1640", padding: "2.5rem 5vw",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexWrap: "wrap", gap: "1rem",
  },
  footerText: { fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" },
  footerLink: { color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.82rem" },
};

/* ─── SUB-COMPONENTS ─────────────────────────────────────── */
function Bubble({ style }: { style: CSSProperties }) {
  return <div style={{ ...s.heroBubble, ...style }} />;
}

function ServiceItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={s.serviceItem}>
      <span style={s.serviceItemDot} />
      {children}
    </li>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function NivelaHRLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", comentarios: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", empresa: "", email: "", comentarios: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={s.root}>
      <style>{`
        .nav-link-btn {
          background: none; border: none; cursor: pointer;
          font-family: inherit; font-size: 0.9rem; font-weight: 400;
          color: #4A4578; letter-spacing: 0.01em; padding: 0;
        }
        .nav-link-btn:hover { color: #4A3FD8; }
        .nav-cta-btn {
          background: #4A3FD8; color: #fff; border: none; cursor: pointer;
          padding: 0.55rem 1.3rem; border-radius: 999px;
          font-family: inherit; font-size: 0.9rem; font-weight: 500;
        }
        .nav-cta-btn:hover { background: #6C62E8; }
        .btn-primary:hover { background: #6C62E8; }
        .btn-outline:hover { background: #4A3FD8; color: #fff; }
        .form-input:focus { border-color: #4A3FD8 !important; background: #fff !important; }
        @media (max-width: 900px) {
          .problems-inner { grid-template-columns: 1fr !important; }
          .problems-right { display: none !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: repeat(2,1fr) !important; }
          .cta-inner { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={s.nav}>
        <Image src="/logo.png" alt="NivelaHR" width={120} height={32} style={{ objectFit: "contain" }} priority />

        <ul className="nav-links-desktop" style={s.navLinks}>
          <li><button className="nav-link-btn" onClick={() => scrollTo("nosotros")}>Nosotros</button></li>
          <li><button className="nav-link-btn" onClick={() => scrollTo("servicios")}>Servicios</button></li>
          <li><button className="nav-link-btn" onClick={() => scrollTo("por-que")}>¿Por qué NivelaHR?</button></li>
          <li><button className="nav-cta-btn" onClick={() => scrollTo("contacto")}>Conversemos</button></li>
        </ul>

        <button
          className="hamburger-btn"
          style={{ ...s.hamburger, display: "none" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span style={s.hamburgerLine} />
          <span style={s.hamburgerLine} />
          <span style={s.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={s.mobileMenu}>
          <button className="nav-link-btn" style={{ fontSize: "1rem", textAlign: "left" }} onClick={() => scrollTo("nosotros")}>Nosotros</button>
          <button className="nav-link-btn" style={{ fontSize: "1rem", textAlign: "left" }} onClick={() => scrollTo("servicios")}>Servicios</button>
          <button className="nav-link-btn" style={{ fontSize: "1rem", textAlign: "left" }} onClick={() => scrollTo("por-que")}>¿Por qué NivelaHR?</button>
          <button className="nav-cta-btn" style={{ borderRadius: 999, padding: "0.75rem 1.5rem", fontSize: "0.95rem" }} onClick={() => scrollTo("contacto")}>Conversemos</button>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={s.hero}>
        <Bubble style={{ width: 420, height: 420, top: -80, left: -120 }} />
        <Bubble style={{ width: 260, height: 260, top: 60, right: "8vw" }} />
        <Bubble style={{ width: 160, height: 160, bottom: 80, left: "12vw", opacity: 0.3 }} />
        <Bubble style={{ width: 100, height: 100, bottom: 40, right: "22vw", opacity: 0.5, background: "linear-gradient(135deg,#A094FF,#F08AB0)" }} />
        <Bubble style={{ width: 70, height: 70, top: "30vh", left: "38vw", opacity: 0.4, background: "linear-gradient(135deg,#9B8FFF,#D87FA4)" }} />

        <div style={s.heroContent}>
          <div style={s.heroBadge}>Consultoría HR · Nacimos IA Ready</div>
          <h1 style={s.heroH1}>
            El HR que tu empresa<br />
            <span style={{ color: "#4A3FD8" }}>necesita</span>, cuando<br />
            lo <span style={{ color: "#F06B8A" }}>necesita</span>.
          </h1>
          <p style={s.heroSub}>
            Acompañamos a empresas en crecimiento con soluciones modernas de gestión de personas —
            ágiles, customizadas y potenciadas con tecnología.
          </p>
          <div style={s.heroActions}>
            <button className="btn-primary" style={s.btnPrimary} onClick={() => scrollTo("contacto")}>
              Hablemos de tu equipo
            </button>
            <button className="btn-outline" style={s.btnOutline} onClick={() => scrollTo("servicios")}>
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section style={s.problems} id="nosotros">
        <div className="problems-inner" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <span style={s.sectionLabel}>¿Te suena familiar?</span>
            <h2 style={s.sectionTitle}>Desafíos reales<br />que resolvemos</h2>
            <p style={s.sectionSub}>
              Liderás una organización con desafíos humanos cada vez más complejos.
              Estamos acá para ayudarte a resolverlos con claridad y agilidad.
            </p>
            <div style={s.problemsGrid}>
              {[
                "Dificultad para reclutar el talento correcto",
                "Alta rotación y problemas para retener personas clave",
                "Liderazgos informales sin estructura clara",
                "Comunicación interna poco efectiva",
                "Clima laboral con tensiones o baja motivación",
                "Sin datos para decidir sobre salarios y beneficios",
              ].map((p, i) => (
                <div key={i} style={s.problemCard}>
                  <div style={s.problemDot} />
                  <p style={s.problemText}>{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="problems-right" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 340, height: 340, position: "relative" }}>
              <div style={{ ...s.pvsCircle, width: 280, height: 280, top: 0, left: 30, opacity: 0.35 }} />
              <div style={{ ...s.pvsCircle, width: 180, height: 180, top: 80, left: 120, opacity: 0.45 }} />
              <div style={{ ...s.pvsCircle, width: 100, height: 100, top: 230, left: 10, opacity: 0.5, background: "linear-gradient(135deg,#9B8FFF,#D87FA4)" }} />
              <div style={{ ...s.pvsBadge, top: 30, right: 0 }}>
                <span style={s.pvsNum}>20+</span>
                <span style={s.pvsLbl}>años de experiencia</span>
              </div>
              <div style={{ ...s.pvsBadge, bottom: 60, right: 10 }}>
                <span style={s.pvsNum}>IA</span>
                <span style={s.pvsLbl}>Ready desde el día 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={s.services} id="servicios">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={s.servicesHeader}>
            <span style={s.sectionLabel}>Lo que hacemos</span>
            <h2 style={s.sectionTitle}>Nuestros servicios</h2>
            <p style={s.servicesSubCenter}>
              Tres unidades de negocio integradas, pensadas para crecer con tu empresa.
            </p>
          </div>

          <div className="services-grid" style={s.servicesGrid}>
            {/* Reclutamiento */}
            <div style={s.serviceCard}>
              <div style={{ ...s.serviceCardTop, background: "#4A3FD8" }} />
              <div style={{ ...s.serviceIcon, background: "rgba(74,63,216,0.1)" }}>🎯</div>
              <h3 style={s.serviceTitle}>Reclutamiento & Selección</h3>
              <p style={s.serviceDesc}>
                Encontramos el talento adecuado con metodologías modernas,
                evaluaciones objetivas y foco en tu cultura.
              </p>
              <ul style={s.serviceItems}>
                <ServiceItem>Búsqueda y selección de personal</ServiceItem>
                <ServiceItem>Evaluaciones de potencial</ServiceItem>
                <ServiceItem>Construcción de marca empleadora</ServiceItem>
              </ul>
              <div style={s.serviceBenefits}>
                <span style={s.serviceBenefitsLabel}>Beneficios</span>
                <p style={s.serviceBenefitsText}>
                  Mejores candidatos · Planes de sucesión · Ahorro en tiempo y costo
                </p>
              </div>
            </div>

            {/* Desarrollo Organizacional */}
            <div style={s.serviceCard}>
              <div style={{ ...s.serviceCardTop, background: "#F06B8A" }} />
              <div style={{ ...s.serviceIcon, background: "rgba(240,107,138,0.1)" }}>🏗️</div>
              <h3 style={s.serviceTitle}>Desarrollo Organizacional</h3>
              <p style={s.serviceDesc}>
                Diseñamos estructuras sólidas, procesos claros y estrategias
                alineadas al mercado.
              </p>
              <ul style={s.serviceItems}>
                <ServiceItem>Diseño de estructuras organizacionales</ServiceItem>
                <ServiceItem>Análisis de salarios y beneficios</ServiceItem>
                <ServiceItem>Implementación de evaluaciones de desempeño</ServiceItem>
                <ServiceItem>Diseño de evaluaciones de potencial y 9 box</ServiceItem>
                <ServiceItem>Programas de coaching para gerentes</ServiceItem>
                <ServiceItem>Capacitaciones en liderazgo</ServiceItem>
                <ServiceItem>Auditoría y reingeniería de procesos de HR</ServiceItem>
              </ul>
              <div style={s.serviceBenefits}>
                <span style={s.serviceBenefitsLabel}>Beneficios</span>
                <p style={s.serviceBenefitsText}>
                  Estructura alineada · Procesos claros · Retención de talento
                </p>
              </div>
            </div>

            {/* Tecnología */}
            <div style={s.serviceCard}>
              <div style={{ ...s.serviceCardTop, background: "linear-gradient(90deg,#4A3FD8,#F06B8A)" }} />
              <div style={{ ...s.serviceIcon, background: "linear-gradient(135deg,rgba(74,63,216,0.1),rgba(240,107,138,0.1))" }}>⚡</div>
              <h3 style={s.serviceTitle}>Tecnología Aplicada a HR</h3>
              <p style={s.serviceDesc}>
                Automatizamos y digitalizamos procesos de gestión de personas para que
                tu equipo se enfoque en lo que importa.
              </p>
              <ul style={s.serviceItems}>
                <ServiceItem>Transformación digital de HR</ServiceItem>
                <ServiceItem>Implementación de herramientas IA</ServiceItem>
                <ServiceItem>Automatización de procesos</ServiceItem>
              </ul>
              <div style={s.serviceBenefits}>
                <span style={s.serviceBenefitsLabel}>Beneficios</span>
                <p style={s.serviceBenefitsText}>
                  Mayor eficiencia · Decisiones basadas en datos · HR escalable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section style={s.why} id="por-que">
        <div style={s.whyInner}>
          <span style={{ ...s.sectionLabel, color: "#F06B8A" }}>Por qué elegirnos</span>
          <h2 style={{ ...s.sectionTitle, color: "#fff" }}>
            Experiencia que marca<br />la diferencia
          </h2>
          <p style={{ ...s.sectionSub, color: "rgba(255,255,255,0.65)", maxWidth: 480 }}>
            Un equipo multidisciplinario con experiencia en empresas globales,
            orientado a resolver los problemas de tu empresa.
          </p>
          <div className="why-grid" style={s.whyGrid}>
            {[
              { num: "20+", title: "Años de experiencia", text: "Cada consultor con más de dos décadas en grandes organizaciones globales." },
              { num: "3", title: "Unidades integradas", text: "Reclutamiento, desarrollo organizacional y tecnología trabajando juntos." },
              { num: "IA", title: "Nacimos IA Ready", text: "Incorporamos tecnología de punta desde el primer día, no como add-on." },
              { num: "100%", title: "Soluciones custom", text: "Sin paquetes genéricos. Cada solución es diseñada para tu empresa." },
            ].map((c, i) => (
              <div key={i} style={s.whyCard}>
                <span style={s.whyNum}>{c.num}</span>
                <h4 style={s.whyCardTitle}>{c.title}</h4>
                <p style={s.whyCardText}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ── */}
      <section style={s.ctaSection} id="contacto">
        <div className="cta-inner" style={s.ctaInner}>
          <div>
            <span style={s.sectionLabel}>Conversemos</span>
            <h2 style={s.sectionTitle}>¿Listo para<br />nivelar tu HR?</h2>
            <p style={s.sectionSub}>
              Completá el formulario y nos ponemos en contacto en menos de 24 horas.
              Sin compromisos, solo una charla.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={s.ctaForm}>
            <h3 style={s.ctaFormTitle}>Contanos sobre tu empresa</h3>
            <div className="form-row" style={s.formRow}>
              <div style={s.formGroup}>
                <label style={s.formLabel}>Nombre</label>
                <input
                  className="form-input" name="nombre" type="text"
                  placeholder="Tu nombre" required
                  value={form.nombre} onChange={handleChange}
                  style={s.formInput}
                />
              </div>
              <div style={s.formGroup}>
                <label style={s.formLabel}>Empresa</label>
                <input
                  className="form-input" name="empresa" type="text"
                  placeholder="Nombre de la empresa" required
                  value={form.empresa} onChange={handleChange}
                  style={s.formInput}
                />
              </div>
            </div>
            <div style={s.formGroup}>
              <label style={s.formLabel}>Email</label>
              <input
                className="form-input" name="email" type="email"
                placeholder="tu@empresa.com" required
                value={form.email} onChange={handleChange}
                style={s.formInput}
              />
            </div>
            <div style={s.formGroup}>
              <label style={s.formLabel}>¿En qué podemos ayudarte?</label>
              <textarea
                className="form-input" name="comentarios"
                placeholder="Contanos brevemente el desafío que estás enfrentando..."
                required value={form.comentarios} onChange={handleChange}
                style={s.formTextarea}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              style={{ ...s.formSubmit, opacity: status === "loading" ? 0.7 : 1 }}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje →"}
            </button>

            {status === "success" && (
              <p style={{ ...s.formDisclaimer, color: "#4A3FD8", fontWeight: 500 }}>
                ✓ Mensaje enviado. Te contactamos en menos de 24hs.
              </p>
            )}
            {status === "error" && (
              <p style={{ ...s.formDisclaimer, color: "#D44F6E", fontWeight: 500 }}>
                ✗ Error al enviar. Por favor escribinos a info@nivelahr.com
              </p>
            )}
            {status === "idle" && (
              <p style={s.formDisclaimer}>
                Tu información es confidencial. Te respondemos en menos de 24hs.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={s.footer}>
        <p style={s.footerText}>© 2025 NivelaHR. Todos los derechos reservados.</p>
        <a href="mailto:info@nivelahr.com" style={s.footerLink}>info@nivelahr.com</a>
      </footer>
    </div>
  );
}
