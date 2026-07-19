import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hof Zurmühlen | Pensionsstall in Halstenbek',
  description:
    'Pferdegerechte Pensionshaltung, persönliche Betreuung und eine vielseitige Reitanlage im Süden von Halstenbek.',
};

const features = [
  ['Persönliche Betreuung', 'Ein familiär geführter Betrieb mit Erfahrung, kurzen Wegen und einem offenen Ohr für Pferd und Reiter.'],
  ['Eigene Futterproduktion', 'Heu, Heulage und Stroh aus eigener Erzeugung – für nachvollziehbare Qualität und zuverlässige Versorgung.'],
  ['Viel Bewegung', 'Weidegang von Mai bis Oktober, täglicher Paddockgang in Herden und Ausreitmöglichkeiten in der Umgebung.'],
];

const services = [
  'Geräumige Innen-, Außen- und Paddockboxen',
  'Tägliches Misten und Einstreuen mit Stroh',
  'Zweimal täglich Heu oder Heulage',
  'Zweimal täglich Hafer oder Pellets',
  'Rein- und Rausbringen unter der Woche',
  'Decken-, Glocken- und Medikamentenservice auf Wunsch',
];

export default function HofZurmuehlenPage() {
  return (
    <main className="hz-page">
      <header className="hz-nav">
        <a className="hz-brand" href="#top" aria-label="Hof Zurmühlen Startseite">
          <span className="hz-mark">HZ</span>
          <span>Hof Zurmühlen</span>
        </a>
        <nav aria-label="Seitennavigation">
          <a href="#hof">Unser Hof</a>
          <a href="#anlage">Reitanlage</a>
          <a href="#haltung">Pensionshaltung</a>
          <a className="hz-nav-cta" href="tel:+4917641411341">Besichtigung anfragen</a>
        </nav>
      </header>

      <section id="top" className="hz-hero">
        <div className="hz-hero-overlay" />
        <div className="hz-hero-content">
          <p className="hz-eyebrow">Pensionsstall · Halstenbek</p>
          <h1>Ein Ort, an dem Pferd und Reiter sich wohlfühlen.</h1>
          <p className="hz-lead">
            Pferdegerechte Haltung, persönliche Betreuung und eine vielseitige Reitanlage – familiengeführt mit Herz und Pferdeverstand.
          </p>
          <div className="hz-actions">
            <a className="hz-primary" href="tel:+4917641411341">Besichtigung vereinbaren</a>
            <a className="hz-secondary" href="#anlage">Die Anlage entdecken</a>
          </div>
          <div className="hz-quickfacts" aria-label="Kurzinformationen">
            <span>Innen- & Außenboxen</span>
            <span>Reithalle & Dressurplatz</span>
            <span>Weide- & Paddockgang</span>
          </div>
        </div>
      </section>

      <section id="hof" className="hz-intro hz-section">
        <div>
          <p className="hz-kicker">Landwirtschaft in dritter Generation</p>
          <h2>Verantwortung für Tiere und Natur – jeden Tag.</h2>
        </div>
        <div className="hz-copy">
          <p>
            Im Süden von Halstenbek, am Rande von Pinneberg-Waldenau, liegt unser landwirtschaftlicher Familienbetrieb. Jan Hinsch führt den Reit- und Pensionsstall mit langjähriger Erfahrung und echter Leidenschaft weiter.
          </p>
          <p>
            Die Verbindung aus Pferdehaltung, eigener Futter- und Strohproduktion sowie einem sorgfältigen Weidemanagement schafft verlässliche Qualität aus einer Hand.
          </p>
        </div>
      </section>

      <section className="hz-feature-grid hz-section">
        {features.map(([title, text]) => (
          <article key={title} className="hz-feature-card">
            <span className="hz-dot" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="anlage" className="hz-split hz-section">
        <div className="hz-image hz-image-arena" role="img" aria-label="Pferd auf einer Reitanlage" />
        <div className="hz-panel">
          <p className="hz-kicker">Unsere Reitanlage</p>
          <h2>Gute Bedingungen – bei jedem Wetter.</h2>
          <p>
            Für Training, Bodenarbeit und entspannte Zeit mit dem Pferd stehen eine Reithalle, ein wetterfester Dressurplatz und ein Roundpen zur Verfügung.
          </p>
          <div className="hz-stats">
            <div><strong>15 × 30 m</strong><span>Reithalle</span></div>
            <div><strong>20 × 40 m</strong><span>Dressurplatz</span></div>
            <div><strong>2</strong><span>Ausreitgebiete</span></div>
          </div>
          <ul>
            <li>Helle, freundliche Stallgassen</li>
            <li>Großzügige Paddockboxen</li>
            <li>Ausritte im Baumschulgelände und Forst Klövensteen</li>
          </ul>
        </div>
      </section>

      <section id="haltung" className="hz-services hz-section">
        <div className="hz-services-head">
          <p className="hz-kicker">Pensionshaltung</p>
          <h2>Das Wohl des Pferdes steht im Mittelpunkt.</h2>
          <p>
            Tageslicht, frische Luft, ausgewogene Fütterung, Bewegung und Sozialkontakt bilden die Grundlage unserer täglichen Arbeit.
          </p>
        </div>
        <div className="hz-service-list">
          {services.map((service) => (
            <div key={service}><span>✓</span>{service}</div>
          ))}
        </div>
      </section>

      <section className="hz-quote hz-section">
        <blockquote>
          „Nur ein zufriedenes Pferd kann die Zufriedenheit auf seinen Halter übertragen.“
        </blockquote>
        <span>Unsere Philosophie</span>
      </section>

      <section className="hz-contact hz-section">
        <div>
          <p className="hz-kicker">Kennenlernen</p>
          <h2>Sie suchen einen passenden Platz für Ihr Pferd?</h2>
          <p>Rufen Sie uns an und vereinbaren Sie einen persönlichen Besichtigungstermin auf dem Hof.</p>
        </div>
        <div className="hz-contact-card">
          <strong>Hof Zurmühlen</strong>
          <span>Nienhöfen 7</span>
          <span>25469 Halstenbek</span>
          <a href="tel:+4917641411341">0176 41411341</a>
          <a href="mailto:info@hof-zurmuehlen.de">info@hof-zurmuehlen.de</a>
          <a className="hz-primary" href="tel:+4917641411341">Jetzt anrufen</a>
        </div>
      </section>

      <footer className="hz-footer">
        <span>© {new Date().getFullYear()} Hof Zurmühlen</span>
        <span>Unverbindlicher Website-Konzeptentwurf</span>
      </footer>

      <style>{`
        :global(body) { margin: 0; }
        .hz-page { --green:#274638; --cream:#f4f0e6; --sand:#d7c7a7; --ink:#1f2823; --muted:#66706a; background:#fffdf8; color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        .hz-nav { position:absolute; z-index:10; top:0; left:0; right:0; display:flex; align-items:center; justify-content:space-between; padding:24px clamp(24px,5vw,72px); color:white; }
        .hz-brand { display:flex; align-items:center; gap:12px; color:white; text-decoration:none; font-weight:700; letter-spacing:.02em; }
        .hz-mark { display:grid; place-items:center; width:38px; height:38px; border:1px solid rgba(255,255,255,.6); border-radius:50%; font-family:Georgia,serif; }
        .hz-nav nav { display:flex; align-items:center; gap:28px; }
        .hz-nav nav a { color:white; text-decoration:none; font-size:14px; }
        .hz-nav-cta { border:1px solid rgba(255,255,255,.7); border-radius:999px; padding:12px 18px; }
        .hz-hero { min-height:92vh; position:relative; display:flex; align-items:flex-end; background:url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=2200&q=88') center 42%/cover no-repeat; }
        .hz-hero-overlay { position:absolute; inset:0; background:linear-gradient(90deg,rgba(10,24,17,.82) 0%,rgba(10,24,17,.48) 48%,rgba(10,24,17,.12) 100%),linear-gradient(0deg,rgba(10,24,17,.55),transparent 55%); }
        .hz-hero-content { position:relative; z-index:2; max-width:790px; color:white; padding:180px clamp(24px,7vw,110px) 72px; }
        .hz-eyebrow,.hz-kicker { text-transform:uppercase; letter-spacing:.18em; font-size:12px; font-weight:700; }
        .hz-eyebrow { color:#e3d6b9; }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Georgia,'Times New Roman',serif; font-weight:400; letter-spacing:-.03em; }
        h1 { font-size:clamp(48px,7vw,88px); line-height:.98; margin:18px 0 24px; }
        h2 { font-size:clamp(36px,5vw,60px); line-height:1.05; margin:12px 0 24px; }
        .hz-lead { max-width:650px; font-size:clamp(18px,2vw,23px); line-height:1.55; color:rgba(255,255,255,.86); }
        .hz-actions { display:flex; gap:14px; flex-wrap:wrap; margin:34px 0 42px; }
        .hz-primary,.hz-secondary { display:inline-flex; justify-content:center; align-items:center; min-height:50px; padding:0 24px; border-radius:999px; text-decoration:none; font-weight:700; font-size:14px; }
        .hz-primary { background:var(--cream); color:var(--green); }
        .hz-secondary { border:1px solid rgba(255,255,255,.5); color:white; }
        .hz-quickfacts { display:flex; flex-wrap:wrap; gap:22px; color:rgba(255,255,255,.78); font-size:13px; }
        .hz-quickfacts span::before { content:'•'; color:#e3d6b9; margin-right:9px; }
        .hz-section { padding:100px clamp(24px,7vw,110px); }
        .hz-intro { display:grid; grid-template-columns:1fr 1fr; gap:8vw; align-items:start; background:var(--cream); }
        .hz-kicker { color:#7d6a48; }
        .hz-copy { font-size:18px; line-height:1.75; color:var(--muted); }
        .hz-feature-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; background:var(--cream); padding-top:0; }
        .hz-feature-card { background:#fffdf8; border:1px solid rgba(39,70,56,.12); padding:34px; border-radius:4px; }
        .hz-dot { display:block; width:10px; height:10px; background:var(--green); border-radius:50%; margin-bottom:26px; }
        .hz-feature-card h3 { font-family:Georgia,serif; font-size:25px; font-weight:400; margin-bottom:12px; }
        .hz-feature-card p { color:var(--muted); line-height:1.65; margin-bottom:0; }
        .hz-split { display:grid; grid-template-columns:1.05fr .95fr; padding:0; min-height:720px; }
        .hz-image { min-height:560px; background-size:cover; background-position:center; }
        .hz-image-arena { background-image:url('https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=1600&q=86'); }
        .hz-panel { background:var(--green); color:white; padding:100px clamp(32px,6vw,90px); display:flex; flex-direction:column; justify-content:center; }
        .hz-panel .hz-kicker { color:#d9c79f; }
        .hz-panel p { color:rgba(255,255,255,.74); line-height:1.7; font-size:17px; }
        .hz-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin:32px 0; }
        .hz-stats div { border-top:1px solid rgba(255,255,255,.25); padding-top:16px; }
        .hz-stats strong,.hz-stats span { display:block; }
        .hz-stats strong { font-family:Georgia,serif; font-size:25px; font-weight:400; }
        .hz-stats span { color:rgba(255,255,255,.6); font-size:12px; margin-top:4px; }
        .hz-panel ul { padding-left:18px; line-height:1.9; color:rgba(255,255,255,.83); }
        .hz-services { display:grid; grid-template-columns:.9fr 1.1fr; gap:9vw; align-items:start; }
        .hz-services-head p:last-child { color:var(--muted); line-height:1.7; font-size:17px; }
        .hz-service-list { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .hz-service-list div { display:flex; gap:12px; align-items:flex-start; border-bottom:1px solid #e4e1d8; padding:18px 0; line-height:1.45; }
        .hz-service-list span { color:var(--green); font-weight:700; }
        .hz-quote { text-align:center; background:#d9cbaa; color:var(--green); }
        .hz-quote blockquote { font-family:Georgia,serif; font-size:clamp(30px,4vw,52px); line-height:1.2; max-width:900px; margin:0 auto 24px; }
        .hz-quote span { text-transform:uppercase; letter-spacing:.16em; font-size:12px; font-weight:700; }
        .hz-contact { display:grid; grid-template-columns:1.2fr .8fr; gap:8vw; background:#f7f5ef; align-items:center; }
        .hz-contact > div > p:last-child { color:var(--muted); font-size:18px; line-height:1.6; max-width:620px; }
        .hz-contact-card { background:white; padding:38px; border:1px solid #e2ded3; display:flex; flex-direction:column; gap:10px; box-shadow:0 24px 60px rgba(31,40,35,.08); }
        .hz-contact-card strong { font-family:Georgia,serif; font-size:28px; margin-bottom:6px; }
        .hz-contact-card a:not(.hz-primary) { color:var(--green); text-decoration:none; font-weight:700; }
        .hz-contact-card .hz-primary { margin-top:18px; background:var(--green); color:white; }
        .hz-footer { display:flex; justify-content:space-between; gap:20px; padding:26px clamp(24px,7vw,110px); background:#1d3329; color:rgba(255,255,255,.65); font-size:12px; }
        @media (max-width:900px) {
          .hz-nav nav a:not(.hz-nav-cta) { display:none; }
          .hz-intro,.hz-split,.hz-services,.hz-contact { grid-template-columns:1fr; }
          .hz-feature-grid { grid-template-columns:1fr; }
          .hz-split { min-height:auto; }
          .hz-panel { padding:72px 28px; }
          .hz-services { gap:40px; }
        }
        @media (max-width:620px) {
          .hz-nav { padding:18px 20px; }
          .hz-brand > span:last-child { display:none; }
          .hz-nav-cta { padding:10px 14px!important; }
          .hz-hero { min-height:860px; }
          .hz-hero-content { padding:150px 22px 46px; }
          h1 { font-size:52px; }
          .hz-section { padding:72px 22px; }
          .hz-stats,.hz-service-list { grid-template-columns:1fr; }
          .hz-footer { flex-direction:column; }
        }
      `}</style>
    </main>
  );
}
