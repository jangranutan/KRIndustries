import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "./assets/logo.jpeg";
import pic0 from "./assets/pic0.jpeg";
import pic1 from "./assets/pic1.jpeg";
import picOne from "./assets/pic-1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/pic4.jpeg";
import pic5 from "./assets/pic5.jpeg";
import pic6 from "./assets/pic6.jpeg";
import pic7 from "./assets/pic7.jpeg";
import pic8 from "./assets/pic8.jpeg";
import pic9 from "./assets/pic9.jpeg";
import pic10 from "./assets/pic10.jpeg";

/* ─── SEO Component ───────────────────────────────────────────────────────── */
function SEO() {
  useEffect(() => {
    const meta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    document.title = "KR Industries | PP & HDPE Woven Fabric Bags Manufacturer — Panipat, Haryana";

    meta("description", "KR Industries manufactures premium PP & HDPE woven fabric bags, sacks and plastic packing articles in Panipat, Haryana. ISO QMS certified, 1,60,000 bags/day capacity. Contact us for bulk orders.");
    meta("keywords", "PP woven bags manufacturer, HDPE woven sacks, woven fabric bags Panipat, plastic packaging Haryana, woven sacks supplier India, PP bags bulk, HDPE bags manufacturer");
    meta("author", "KR Industries");
    meta("robots", "index, follow");
    meta("viewport", "width=device-width, initial-scale=1");

    // Open Graph
    meta("og:type", "website", true);
    meta("og:title", "KR Industries | PP & HDPE Woven Fabric Bags Manufacturer", true);
    meta("og:description", "Premium woven fabric bags & sacks manufacturer from Panipat, Haryana. ISO QMS certified. 1,60,000 bags/day capacity. Trusted by leading brands.", true);
    meta("og:url", "https://krindustries.in", true);
    meta("og:site_name", "KR Industries", true);
    meta("og:locale", "en_IN", true);

    // Twitter Card
    meta("twitter:card", "summary_large_image");
    meta("twitter:title", "KR Industries | PP & HDPE Woven Fabric Bags Manufacturer");
    meta("twitter:description", "Premium woven fabric bags & sacks manufacturer from Panipat, Haryana. ISO QMS certified.");

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://krindustries.in";

    // JSON-LD structured data
    let ld = document.querySelector("#ld-json");
    if (!ld) { ld = document.createElement("script"); ld.id = "ld-json"; ld.type = "application/ld+json"; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ManufacturingBusiness",
      "name": "KR Industries",
      "description": "Manufacturer of PP & HDPE Woven Fabric Bags, Sacks and Plastic Packing Articles",
      "url": "https://krindustries.in",
      "telephone": "+91-99963-24256",
      "email": "krindustries2710@gmail.com",
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Khasra No. 2/2, 3/1, 7/2, 8, 9, 10, Murabba No. 22, Opp. Village Nain Govt. School, Bhindari Road, Nain",
        "addressLocality": "Panipat",
        "addressRegion": "Haryana",
        "postalCode": "132113",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 29.3909, "longitude": 76.9635 },
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 120 },
      "sameAs": [],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Woven Fabric Packaging Products",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "PP Woven Fabric Bags" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "HDPE Woven Sacks" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Plastic Packing Articles" } }
        ]
      }
    });

    return () => {};
  }, []);
  return null;
}

const COLORS = {
  green: "#1a6b4a",
  greenLight: "#e8f5ee",
  greenMid: "#2d9264",
  dark: "#1a1f2e",
  darkCard: "#1e2435",
  text: "#e8eaf0",
  muted: "#8a90a0",
  border: "rgba(255,255,255,0.08)",
  accent: "#3ab87a",
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);
    if (media.addEventListener) {
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
    if (media.addListener) {
      media.addListener(handler);
      return () => media.removeListener(handler);
    }
    return undefined;
  }, [query]);
  return matches;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 860px)");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Photos", path: "/photos" },
    { label: "Quality", path: "/quality" },
    { label: "Process", path: "/process" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled || menuOpen ? "rgba(15,20,32,0.96)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
      borderBottom: scrolled || menuOpen ? `1px solid ${COLORS.border}` : "none",
      boxShadow: scrolled || menuOpen ? "0 24px 60px rgba(0,0,0,0.18)" : "none",
      padding: isMobile ? "0.75rem 1rem" : "0 2rem",
      transition: "all 0.3s ease",
      display: "flex", flexDirection: "column", alignItems: "stretch",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", minHeight: 80, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: "1 1 auto", minWidth: 0 }}>
          <img src={logoImg} alt="KR Industries logo" style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover" }} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: 1.2, color: COLORS.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            KR INDUSTRIES
          </span>
        </div>

        {isMobile && (
          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.08)",
              color: COLORS.text,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              flexShrink: 0,
              position: "relative",
              zIndex: 101,
              minWidth: 44,
              minHeight: 44,
            }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span style={{ display: "inline-flex", flexDirection: "column", gap: 3 }}>
              <span style={{ width: 18, height: 2, background: COLORS.text, borderRadius: 1 }} />
              <span style={{ width: 18, height: 2, background: COLORS.text, borderRadius: 1 }} />
              <span style={{ width: 18, height: 2, background: COLORS.text, borderRadius: 1 }} />
            </span>
            {menuOpen && <span style={{ lineHeight: 1 }}>{menuOpen ? "Close" : "Menu"}</span>}
          </button>
        )}
      </div>

      <div style={{
        display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "0.75rem" : "2rem",
        alignItems: isMobile ? "stretch" : "center",
        marginTop: isMobile ? "0.75rem" : 0,
        paddingBottom: isMobile ? "0.75rem" : 0,
      }}>
        {links.map(link => (
          <NavLink
            key={link.label}
            to={link.path}
            end={link.path === "/"}
            style={({ isActive }) => ({
              fontSize: 13, fontWeight: 500,
              color: isActive ? COLORS.accent : COLORS.muted,
              textDecoration: "none",
              transition: "color 0.2s",
              letterSpacing: 0.5,
              display: isMobile ? "block" : undefined,
              padding: isMobile ? "0.75rem 0" : undefined,
              borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : undefined,
            })}
            onClick={() => { if (isMobile) setMenuOpen(false); }}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", textAlign: "center",
      padding: "8rem 2rem 4rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* background rings */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700, borderRadius: "50%",
        border: "1px solid rgba(58,184,122,0.08)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500, height: 500, borderRadius: "50%",
        border: "1px solid rgba(58,184,122,0.12)",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "rgba(58,184,122,0.1)", border: "1px solid rgba(58,184,122,0.25)",
        borderRadius: 100, padding: "5px 16px", marginBottom: "2rem",
        fontSize: 12, color: COLORS.accent, fontWeight: 500, letterSpacing: 1,
        textTransform: "uppercase",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.accent, display: "inline-block" }} />
        KR INDUSTRIES · PP & HDPE Woven Bags Manufacturer
      </div>


      <p style={{
        fontSize: 17, color: COLORS.muted, maxWidth: 520,
        lineHeight: 1.8, marginBottom: "2.5rem",
      }}>
        KR Industries manufactures premium PP & HDPE woven fabric bags and sacks from Panipat, Haryana — delivering quality at scale for industries across India.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/quality" style={{
          padding: "12px 28px", borderRadius: 8,
          background: COLORS.accent, color: "#fff",
          fontWeight: 600, fontSize: 14, textDecoration: "none",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >Our Quality Policy</Link>
        <Link to="/contact" style={{
          padding: "12px 28px", borderRadius: 8,
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff", fontWeight: 500, fontSize: 14, textDecoration: "none",
          transition: "border-color 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
        >Get in Touch</Link>
      </div>

      {/* stats row */}
      <div style={{
        display: "flex", gap: 0, marginTop: "4rem", flexWrap: "wrap", justifyContent: "center",
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16,
        background: "rgba(255,255,255,0.03)", overflow: "hidden",
      }}>
        {[
          { val: "1,60,000", sub: "Bags / day capacity" },
          { val: "120+", sub: "Skilled workforce" },
          { val: "100%", sub: "Customer satisfaction" },
          { val: "0%", sub: "Target rejection rate" },
        ].map((s, i) => (
          <div key={i} style={{
            padding: "1.5rem 2.5rem", textAlign: "center",
          }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 700, color: COLORS.accent }}>{s.val}</div>
            <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 4, letterSpacing: 0.3 }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: "🏭", title: "Modern facility", desc: "Located at Bhindari Road, Nain, Panipat — a neat, clean, and well-equipped manufacturing plant." },
    { icon: "👷", title: "Expert team", desc: "120+ skilled professionals delivering quality products through collaborative effort and expertise." },
    { icon: "🚚", title: "On-time delivery", desc: "Committed to meeting every customer delivery schedule at competitive, market-aligned prices." },
    { icon: "🏅", title: "Trusted by industry", desc: "Preferred supplier of Poly Bag Industries, Aarjavam Techfab, Shree Ganesh Ji Industries, and more." },
  ];

  return (
    <section id="about" style={{ padding: "6rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.accent, marginBottom: "0.75rem", fontWeight: 600 }}>Who we are</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, marginBottom: "1rem", color: COLORS.text }}>
          Built on family values,<br />driven by quality
        </h2>
        <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.8, maxWidth: 560, marginBottom: "3rem" }}>
          Founded in 2023 by Amit Kumar and Vinay Kundu, KR Industries has rapidly grown into a trusted manufacturer of PP & HDPE woven fabric packaging solutions.
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
        {cards.map((c, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14, padding: "1.5rem",
              transition: "border-color 0.25s, transform 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(58,184,122,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} style={{ marginTop: "3rem" }}>
        <div style={{ fontSize: 12, color: COLORS.muted, marginBottom: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>Our clients</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Poly Bag Industries", "Aarjavam Techfab Pvt. Ltd.", "Shree Ganesh Ji Industries"].map((c, i) => (
            <span key={i} style={{
              padding: "6px 16px", borderRadius: 100,
              background: "rgba(58,184,122,0.08)", border: "1px solid rgba(58,184,122,0.2)",
              fontSize: 12, color: COLORS.accent, fontWeight: 500,
            }}>{c}</span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function Products() {
  return (
    <section id="products" style={{ padding: "6rem 2rem", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.accent, marginBottom: "0.75rem", fontWeight: 600 }}>What we make</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, marginBottom: "3rem", color: COLORS.text }}>Product range</h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            {
              tag: "Primary product",
              title: "PP Woven Fabric Bags",
              desc: "Polypropylene woven bags for industrial and agricultural packaging — strong, lightweight, and reusable.",
              specs: ["High tensile strength", "UV stabilized", "Custom print ready", "Multiple sizes"],
            },
            {
              tag: "Primary product",
              title: "HDPE Woven Sacks",
              desc: "High-density polyethylene sacks ideal for cement, chemicals, grains, and other heavy-duty packaging needs.",
              specs: ["Moisture resistant", "Laminated options", "Load-bearing design", "Food-grade variants"],
            },
            {
              tag: "Packaging solutions",
              title: "Plastic Packing Articles",
              desc: "A full range of plastic packaging articles for the safe transport and storage of goods across industries.",
              specs: ["Custom dimensions", "Bulk orders", "Fast turnaround", "QC at every stage"],
            },
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "1.8rem", height: "100%",
                transition: "border-color 0.25s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(58,184,122,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
              >
                <span style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: 1,
                  textTransform: "uppercase", color: COLORS.accent,
                  display: "block", marginBottom: 12,
                }}>{p.tag}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.specs.map((s, j) => (
                    <span key={j} style={{
                      fontSize: 11, padding: "4px 10px", borderRadius: 100,
                      background: "rgba(255,255,255,0.06)", color: COLORS.muted,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Photos() {
  const images = [
    { title: "", src: pic0 },
    { title: "", src: pic1 },
    { title: "", src: picOne },
    { title: "", src : pic2 },
    { title: "", src: pic3 },
    { title: "", src: pic4 },
    { title: "", src: pic5 },
    { title: "", src: pic6 },
    { title: "", src: pic7 },
    { title: "", src: pic8 },
    { title: "", src: pic9 },   
    { title: "", src: pic10 },
  ];

  return (
    <section id="photos" style={{ padding: "6rem 2rem", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.accent, marginBottom: "0.75rem", fontWeight: 600 }}>Visual tour</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, marginBottom: "3rem", color: COLORS.text }}>Factory and product photos</h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {images.map((image, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div style={{
                borderRadius: 18, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
              }}>
                <img src={image.src} alt={image.title} style={{ width: "100%", display: "block", height: 220, objectFit: "cover" }} />
                <div style={{ padding: "1.2rem", color: COLORS.text }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: COLORS.text }}>{image.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  const objectives = [
    "Maintain & keep the business running smoothly",
    "100% on-time product delivery",
    "Enhance end-user satisfaction continuously",
    "Reduce process rejection to 0%",
  ];

  const pillars = [
    { icon: "📈", title: "Continual improvement", desc: "Driven by quality policy, audit results, data analysis and management reviews held every six months." },
    { icon: "🔄", title: "Corrective action", desc: "Documented procedures eliminate root causes of non-conformities and prevent recurrence at every stage." },
    { icon: "🛡️", title: "Preventive action", desc: "Proactive analysis of potential non-conformities before they can impact product or process quality." },
    { icon: "📋", title: "Management review", desc: "MRC chaired by the Partner reviews QMS suitability, adequacy, and effectiveness at least twice yearly." },
  ];

  return (
    <section id="quality" style={{ padding: "6rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.accent, marginBottom: "0.75rem", fontWeight: 600 }}>QMS</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, marginBottom: "3rem", color: COLORS.text }}>Quality commitment</h2>
      </FadeIn>

      {/* Policy block */}
      <FadeIn>
        <div style={{
          background: "rgba(58,184,122,0.06)",
          borderRadius: 16, padding: "2rem", marginBottom: "3rem",
        }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: COLORS.accent, fontWeight: 600, marginBottom: 12 }}>Quality policy</div>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "#c8cdd8" }}>
            KR Industries is committed to continual improvement in quality management system, product quality and productivity. We enhance customer satisfaction by providing excellent quality and fulfilling all customer requirements. We ensure products are competitive in price and supplied as per delivery schedules. Continual improvement in QMS effectiveness through the involvement of all concerned is also our commitment.
          </p>
        </div>
      </FadeIn>

      {/* Objectives */}
      <FadeIn>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Quality objectives</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: "3rem" }}>
          {objectives.map((o, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: 12, padding: "1.1rem", display: "flex", alignItems: "flex-start", gap: 12,
            }}>
              <div style={{
                minWidth: 28, height: 28, borderRadius: "50%",
                background: "rgba(58,184,122,0.15)", border: "1px solid rgba(58,184,122,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: COLORS.accent,
              }}>{i + 1}</div>
              <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.6 }}>{o}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Pillars */}
      <FadeIn>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>QMS pillars</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: 14, padding: "1.4rem",
              transition: "border-color 0.25s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(58,184,122,0.3)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <div style={{ fontSize: 26, marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Customer enquiry & order", desc: "All specs, statutory, and regulatory requirements are captured from the customer purchase order." },
    { title: "Purchasing & incoming materials", desc: "Raw materials are procured from approved suppliers and inspected at the storage stage before production begins." },
    { title: "Production & in-process inspection", desc: "Manufacturing of PP & HDPE woven bags with in-process testing at every stage as per Quality Inspection Plans." },
    { title: "Quality assurance & testing", desc: "Finished goods are inspected and tested. Non-conforming products are segregated, reviewed, and dispositioned." },
    { title: "Dispatch & delivery", desc: "Products dispatched as per customer schedules. Delivery performance tracked through key performance indicators." },
    { title: "Feedback & improvement", desc: "Customer complaints and satisfaction data feed into management reviews and corrective/preventive action cycles." },
  ];

  return (
    <section id="process" style={{ padding: "6rem 2rem", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.accent, marginBottom: "0.75rem", fontWeight: 600 }}>How we work</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, marginBottom: "3rem", color: COLORS.text }}>
            From order to delivery
          </h2>
        </FadeIn>

        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    minWidth: 40, height: 40, borderRadius: "50%",
                    background: "#0f1420", border: `2px solid rgba(58,184,122,${0.8 - i * 0.1})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: COLORS.accent, zIndex: 1,
                  }}>{i + 1}</div>
                  <div style={{
                    flex: 1, background: "rgba(255,255,255,0.03)",
                    borderRadius: 12, padding: "1.1rem 1.4rem", marginBottom: 8,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 5 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", product: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const isMobile = useMediaQuery("(max-width: 900px)");

  const inputStyle = (field) => ({
    width: "100%", padding: "10px 14px", borderRadius: 8,
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${errors[field] ? "rgba(239,100,100,0.5)" : "rgba(255,255,255,0.1)"}`,
    color: "#e8eaf0", fontSize: 14, outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Inter', sans-serif",
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("sending");
    // Simulate form submission (replace with your backend/Formspree endpoint)
    setTimeout(() => setStatus("success"), 1400);
  };

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => { const n = { ...e }; delete n[field]; return n; });
  };

  const infoItems = [
    { icon: "📍", label: "Address", content: "Khasra No. 2/2, 3/1, 7/2, 8, 9, 10\nMurabba No. 22, Opp. Village Nain\nGovt. School, Bhindari Road, Nain\nPanipat – 132113, Haryana, India" },
    { icon: "📞", label: "Phone", content: "+91 99963 24256" },
    { icon: "✉️", label: "Email", content: "krindustries2710@gmail.com" },
    { icon: "🕐", label: "Working hours", content: "Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed" },
  ];

  return (
    <section id="contact" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.accent, marginBottom: "0.75rem", fontWeight: 600 }}>Reach us</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, marginBottom: "0.5rem", color: COLORS.text }}>Get in touch</h2>
        <p style={{ color: COLORS.muted, fontSize: 15, marginBottom: "3rem" }}>Send us an enquiry and we'll get back to you within one business day.</p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: 24, alignItems: "start" }}>

        {/* Info column */}
        <FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {infoItems.map((c, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "1.1rem 1.3rem",
                display: "flex", alignItems: "flex-start", gap: 12,
              }}>
                <span style={{ fontSize: 20, lineHeight: 1 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.accent, marginBottom: 5 }}>{c.label}</div>
                  <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.8, whiteSpace: "pre-line" }}>{c.content}</p>
                </div>
              </div>
            ))}

            {/* Quick links */}
            <div style={{
              background: "rgba(58,184,122,0.06)", border: "1px solid rgba(58,184,122,0.2)",
              borderRadius: 12, padding: "1.1rem 1.3rem",
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.accent, marginBottom: 10 }}>Products we supply</div>
              {["PP Woven Fabric Bags", "HDPE Woven Sacks", "Plastic Packing Articles"].map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: COLORS.accent, display: "inline-block" }} />
                  <span style={{ fontSize: 13, color: COLORS.muted }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Form column */}
        <FadeIn delay={0.1}>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, padding: "2rem",
          }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message sent!</h3>
                <p style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button onClick={() => { setStatus("idle"); setForm({ name: "", company: "", phone: "", email: "", product: "", message: "" }); }}
                  style={{ marginTop: 24, padding: "10px 24px", borderRadius: 8, background: COLORS.accent, color: "#fff", border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 20 }}>Enquiry form</div>

                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <label style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500, display: "block", marginBottom: 6, letterSpacing: 0.5 }}>
                      Full name <span style={{ color: "#ef6464" }}>*</span>
                    </label>
                    <input
                      type="text" placeholder="Rajesh Kumar" value={form.name}
                      onChange={e => handleChange("name", e.target.value)}
                      style={inputStyle("name")}
                      onFocus={e => e.target.style.borderColor = "rgba(58,184,122,0.5)"}
                      onBlur={e => e.target.style.borderColor = errors.name ? "rgba(239,100,100,0.5)" : "rgba(255,255,255,0.1)"}
                    />
                    {errors.name && <span style={{ fontSize: 11, color: "#ef6464", marginTop: 4, display: "block" }}>Name is required</span>}
                  </div>
                  <div>
                    <label style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500, display: "block", marginBottom: 6, letterSpacing: 0.5 }}>Company name</label>
                    <input
                      type="text" placeholder="Acme Packaging Ltd." value={form.company}
                      onChange={e => handleChange("company", e.target.value)}
                      style={inputStyle("company")}
                      onFocus={e => e.target.style.borderColor = "rgba(58,184,122,0.5)"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <label style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500, display: "block", marginBottom: 6, letterSpacing: 0.5 }}>
                      Email <span style={{ color: "#ef6464" }}>*</span>
                    </label>
                    <input
                      type="email" placeholder="you@company.com" value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                      style={inputStyle("email")}
                      onFocus={e => e.target.style.borderColor = "rgba(58,184,122,0.5)"}
                      onBlur={e => e.target.style.borderColor = errors.email ? "rgba(239,100,100,0.5)" : "rgba(255,255,255,0.1)"}
                    />
                    {errors.email && <span style={{ fontSize: 11, color: "#ef6464", marginTop: 4, display: "block" }}>Valid email required</span>}
                  </div>
                  <div>
                    <label style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500, display: "block", marginBottom: 6, letterSpacing: 0.5 }}>Phone number</label>
                    <input
                      type="tel" placeholder="+91 98765 43210" value={form.phone}
                      onChange={e => handleChange("phone", e.target.value)}
                      style={inputStyle("phone")}
                      onFocus={e => e.target.style.borderColor = "rgba(58,184,122,0.5)"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                </div>

                {/* Product select */}
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500, display: "block", marginBottom: 6, letterSpacing: 0.5 }}>Product of interest</label>
                  <select
                    value={form.product} onChange={e => handleChange("product", e.target.value)}
                    style={{ ...inputStyle("product"), appearance: "none", cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "rgba(58,184,122,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  >
                    <option value="" style={{ background: "#1a1f2e" }}>Select a product…</option>
                    <option value="pp-bags" style={{ background: "#1a1f2e" }}>PP Woven Fabric Bags</option>
                    <option value="hdpe-sacks" style={{ background: "#1a1f2e" }}>HDPE Woven Sacks</option>
                    <option value="plastic-packing" style={{ background: "#1a1f2e" }}>Plastic Packing Articles</option>
                    <option value="other" style={{ background: "#1a1f2e" }}>Other / Not sure</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500, display: "block", marginBottom: 6, letterSpacing: 0.5 }}>
                    Message <span style={{ color: "#ef6464" }}>*</span>
                  </label>
                  <textarea
                    rows={4} placeholder="Tell us about your requirements — quantity, bag size, print specifications…"
                    value={form.message} onChange={e => handleChange("message", e.target.value)}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: 100 }}
                    onFocus={e => e.target.style.borderColor = "rgba(58,184,122,0.5)"}
                    onBlur={e => e.target.style.borderColor = errors.message ? "rgba(239,100,100,0.5)" : "rgba(255,255,255,0.1)"}
                  />
                  {errors.message && <span style={{ fontSize: 11, color: "#ef6464", marginTop: 4, display: "block" }}>Message is required</span>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    width: "100%", padding: "12px", borderRadius: 8,
                    background: status === "sending" ? "rgba(58,184,122,0.5)" : COLORS.accent,
                    color: "#fff", border: "none", fontSize: 14, fontWeight: 600,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "opacity 0.2s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.opacity = "0.88"; }}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  {status === "sending" ? "Sending…" : "Send enquiry →"}
                </button>

                <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 12, textAlign: "center" }}>
                  We typically respond within 1 business day.
                </p>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "1.5rem 2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 8,
    }}>
      <span style={{ fontSize: 12, color: COLORS.muted }}>© 2025 KR Industries, Panipat, Haryana</span>
      <span style={{ fontSize: 11, color: "rgba(138,144,160,0.6)" }}>Quality Manual Issue KRI001 · Rev 00 · 01-10-2025</span>
    </footer>
  );
}

export { SEO, Nav, Hero, About, Products, Photos, Quality, Process, Contact, Footer };
