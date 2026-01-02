/* app.js */
const { useEffect, useMemo, useRef, useState } = React;

/* ---------- Utils ---------- */
function useEscape(handler) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && handler();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handler]);
}

/* ---------- Components ---------- */

function Hero({ car, ctaRef }) {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-media">
          <img src={car.defaultImage} alt={car.title} />
        </div>

        <div>
          <h1 className="hero-title">{car.title}</h1>
          <p className="hero-sub">
            {car.subtitle} • 📍 {car.location}
          </p>
          <div className="hero-price">{car.price}</div>

          <a ref={ctaRef} className="btn btn-primary cta" href={car.contactEmail}>
            ✉️ Contacter le vendeur
          </a>
          <p className="no-pro">
	  Vente entre particuliers uniquement – professionnels merci de vous abstenir
	  (sauf achat direct).
	</p>

          <div className="top-specs">
            {car.topSpecs.map((s, i) => (
              <div className="pill" key={i}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function BuyerFit({ advantages }) {
  return (
    <section className="buyer-fit">
      <div className="container card">
      <h2>🎯 Ce véhicule est fait pour vous si :</h2>
      <ul>
            {advantages.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
      </ul>
      </div>
    </section>
  );
}

function KeyPoints({ points }) {
  return (
    <section className="section">
      <div className="container">
        <div className="key-points">
          <h2>✅ Les essentiels à retenir</h2>
          <ul>
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Details({ car }) {
  return (
    <section className="section">
      <div className="container">
        <h2>🔎 Détails du véhicule</h2>

        <div className="cards">
          {car.detailsCards.map((card, i) => (
            <div className="card" key={i}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((it, j) => (
                  <li key={j} className={it.highlight ? "highlight" : ""}>
                    <span className="label">{it.label} :</span>
                    <span className="value">{it.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ car }) {
  const categories = useMemo(
    () => [
      { key: "exterieur", label: "Extérieur" },
      { key: "interieur", label: "Intérieur" },
      { key: "coffre", label: "Coffre" },
      { key: "media", label: "Multimédia" },
    ],
    []
  );

  const [active, setActive] = useState("exterieur");
  const [lightbox, setLightbox] = useState(null);

  const images = car.images?.[active] || [car.defaultImage];

  return (
    <section className="section">
      <div className="container">
        <h2>🖼️ Galerie photos</h2>

        <div className="tabs">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`tab ${active === c.key ? "active" : ""}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <img key={i} src={src} onClick={() => setLightbox(src)} />
          ))}
        </div>

        {lightbox && (
          <div className="lightbox" onClick={() => setLightbox(null)}>
            <img src={lightbox} />
          </div>
        )}
      </div>
    </section>
  );
}

function ProWarning() {
  return (
    <section className="section">
      <div className="container">
    <p className="pro-warning">
      🚫 Vente entre particuliers uniquement — professionnels merci de vous abstenir
      <br />
      <small>(sauf achat direct sans négociation)</small>
    </p>
    </div>
    </section>
  );
}

function StickyCTA({ car, targetRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    io.observe(targetRef.current);
    return () => io.disconnect();
  }, [targetRef]);

  return (
    <div className={`sticky-cta ${visible ? "visible" : ""}`}>
      <a className="btn btn-primary cta" href={car.contactEmail}>
        ✉️ Contacter le vendeur
      </a>
    </div>
  );
}

/* ---------- App ---------- */

function App() {
  const ctaRef = useRef(null);
  return (
    <>
      <Hero car={window.CAR} ctaRef={ctaRef} />

      {/* 🔥 NOUVEAU BLOC POUR NON-INITIÉS */}
      <KeyPoints points={window.CAR.keyPoints} />
      <BuyerFit advantages={window.CAR.advantages} />
      <Details car={window.CAR} />
      <Gallery car={window.CAR} />
      <ProWarning />
      <StickyCTA car={window.CAR} targetRef={ctaRef} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

