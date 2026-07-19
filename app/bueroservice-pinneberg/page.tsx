import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Büroservice Pinneberg | Mehr Zeit fürs Wesentliche',
  description:
    'Mobiler Büroservice für Unternehmen, Selbstständige, Privatkunden und Senioren im Kreis Pinneberg.',
};

const services = [
  ['Büroorganisation', 'Ablage, Sortierung und klare Strukturen für Unterlagen und tägliche Arbeitsabläufe.'],
  ['Schriftverkehr', 'Zuverlässige Unterstützung bei Korrespondenz, Anträgen und administrativen Aufgaben.'],
  ['Vorbereitende Buchhaltung', 'Kassenbuch, Belegorganisation sowie Kreditoren- und Debitorenverwaltung.'],
  ['Mahnwesen', 'Strukturierte Bearbeitung offener Vorgänge und Unterstützung bei Zahlungserinnerungen.'],
  ['Nebenkostenabrechnungen', 'Sorgfältige Vorbereitung und übersichtliche Aufbereitung Ihrer Abrechnungen.'],
  ['Individuelle Unterstützung', 'Flexible Dienstleistungen nach Bedarf – für einmalige Aufgaben oder laufende Entlastung.'],
];

export default function BueroservicePinnebergPage() {
  return (
    <main className="bp-page">
      <header className="bp-nav">
        <a href="#top" className="bp-brand">
          <span className="bp-logo">BP</span>
          <span><strong>Büroservice</strong><small>Pinneberg</small></span>
        </a>
        <nav>
          <a href="#leistungen">Leistungen</a>
          <a href="#zielgruppen">Für wen?</a>
          <a href="#kontakt" className="bp-nav-cta">Kontakt aufnehmen</a>
        </nav>
      </header>

      <section id="top" className="bp-hero">
        <div className="bp-hero-copy">
          <p className="bp-kicker">Mobiler Schreib- und Bürodienst</p>
          <h1>Mehr Zeit für die wichtigen Dinge.</h1>
          <p className="bp-lead">
            Büroorganisation, Schriftverkehr und vorbereitende Buchhaltung – zuverlässig, flexibel und nur dann, wenn Sie Unterstützung benötigen.
          </p>
          <div className="bp-actions">
            <a href="tel:+4915125025182" className="bp-primary">0151 250 251 82</a>
            <a href="#leistungen" className="bp-secondary">Leistungen ansehen</a>
          </div>
          <div className="bp-trust">
            <span>Für Unternehmen</span>
            <span>Für Selbstständige</span>
            <span>Für Privatkunden & Senioren</span>
          </div>
        </div>
        <div className="bp-hero-card">
          <span className="bp-card-label">Ihr Vorteil</span>
          <strong>Sie zahlen nur für tatsächlich erbrachte Leistungen.</strong>
          <p>Keine dauerhaften Personalkosten, kein zusätzlicher Verwaltungsaufwand und flexible Unterstützung genau dann, wenn sie gebraucht wird.</p>
        </div>
      </section>

      <section className="bp-strip">
        <span>Sortieren</span><span>Ablage</span><span>Schriftverkehr</span><span>Kassenbuch</span><span>Mahnwesen</span><span>Abrechnungen</span>
      </section>

      <section id="leistungen" className="bp-section bp-services">
        <div className="bp-head">
          <p className="bp-kicker">Unsere Leistungen</p>
          <h2>Struktur im Büro. Entlastung im Alltag.</h2>
          <p>Von einzelnen Aufgaben bis zur regelmäßigen Unterstützung: Der Büroservice Pinneberg schafft Ordnung, Übersicht und verlässliche Abläufe.</p>
        </div>
        <div className="bp-grid">
          {services.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="zielgruppen" className="bp-audiences bp-section">
        <div className="bp-audience bp-business">
          <p className="bp-kicker">Geschäftskunden</p>
          <h2>Damit Sie sich auf Ihr Kerngeschäft konzentrieren können.</h2>
          <p>
            Für kleine Unternehmen, Handwerksbetriebe, Vereine, Verbände und Existenzgründer: Wir übernehmen administrative Aufgaben, bringen Struktur in Unterlagen und unterstützen bei laufenden Büroprozessen.
          </p>
          <ul>
            <li>Flexible Entlastung ohne feste Personalkosten</li>
            <li>Unterstützung bei Engpässen und Rückständen</li>
            <li>Klare Ablage- und Organisationssysteme</li>
          </ul>
        </div>
        <div className="bp-audience bp-private">
          <p className="bp-kicker">Privatkunden & Senioren</p>
          <h2>Unterstützung bei Papierkram und Korrespondenz.</h2>
          <p>
            Wir helfen bei Schreiben an Behörden, Versicherungen und Ämter, beim Sortieren wichtiger Dokumente sowie beim Aufbau eines verständlichen Ablagesystems.
          </p>
          <ul>
            <li>Hilfe bei Anträgen und Formularen</li>
            <li>Ordnung für Belege und Dokumente</li>
            <li>Persönliche und verständliche Unterstützung</li>
          </ul>
        </div>
      </section>

      <section className="bp-process bp-section">
        <div className="bp-head">
          <p className="bp-kicker">So funktioniert es</p>
          <h2>Unkompliziert zur passenden Unterstützung.</h2>
        </div>
        <div className="bp-steps">
          <div><strong>01</strong><h3>Kontakt aufnehmen</h3><p>Rufen Sie an oder senden Sie eine kurze Nachricht mit Ihrem Anliegen.</p></div>
          <div><strong>02</strong><h3>Bedarf besprechen</h3><p>Gemeinsam klären wir Aufgaben, Umfang und den passenden Ablauf.</p></div>
          <div><strong>03</strong><h3>Entlastung erhalten</h3><p>Die vereinbarten Aufgaben werden zuverlässig und transparent bearbeitet.</p></div>
        </div>
      </section>

      <section id="kontakt" className="bp-contact bp-section">
        <div>
          <p className="bp-kicker">Jetzt Kontakt aufnehmen</p>
          <h2>Schaffen wir gemeinsam wieder Ordnung.</h2>
          <p>Beschreiben Sie kurz, wobei Sie Unterstützung benötigen. Der Büroservice Pinneberg meldet sich persönlich bei Ihnen zurück.</p>
        </div>
        <div className="bp-contact-card">
          <strong>Büroservice Pinneberg</strong>
          <span>Mobiler Schreib- und Bürodienst</span>
          <span>Postfach 11 27 · 25487 Holm</span>
          <a href="tel:+4915125025182">0151 250 251 82</a>
          <a href="mailto:info@bueroservice-pinneberg.de">info@bueroservice-pinneberg.de</a>
          <a href="mailto:info@bueroservice-pinneberg.de" className="bp-primary">Nachricht schreiben</a>
        </div>
      </section>

      <footer className="bp-footer">
        <span>© {new Date().getFullYear()} Büroservice Pinneberg</span>
        <span>Unverbindlicher Website-Konzeptentwurf</span>
      </footer>

      <style>{`
        :global(body){margin:0}.bp-page{--navy:#17263d;--blue:#4169a1;--sky:#eaf1f8;--orange:#e78a4e;--ink:#18212d;--muted:#637083;background:#fbfcfe;color:var(--ink);font-family:Arial,Helvetica,sans-serif}.bp-nav{display:flex;justify-content:space-between;align-items:center;padding:22px clamp(22px,6vw,88px);background:white;border-bottom:1px solid #e8edf3}.bp-brand{display:flex;align-items:center;gap:12px;color:var(--navy);text-decoration:none}.bp-brand>span:last-child{display:flex;flex-direction:column}.bp-brand small{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.bp-logo{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--navy);color:white;font-weight:800}.bp-nav nav{display:flex;gap:28px;align-items:center}.bp-nav nav a{color:var(--navy);text-decoration:none;font-size:14px;font-weight:700}.bp-nav-cta{background:var(--navy);color:white!important;padding:12px 18px;border-radius:999px}.bp-hero{display:grid;grid-template-columns:1.15fr .85fr;min-height:710px;background:linear-gradient(120deg,#f7fafc 0%,#e9f0f7 100%);padding:90px clamp(24px,7vw,110px);align-items:center;gap:8vw}.bp-kicker{text-transform:uppercase;letter-spacing:.16em;font-size:12px;font-weight:800;color:var(--blue)}h1,h2,h3,p{margin-top:0}h1,h2{font-family:Georgia,'Times New Roman',serif;font-weight:400;letter-spacing:-.035em;color:var(--navy)}h1{font-size:clamp(52px,7vw,92px);line-height:.98;margin:18px 0 28px;max-width:800px}h2{font-size:clamp(38px,5vw,62px);line-height:1.05;margin:12px 0 24px}.bp-lead{max-width:690px;font-size:21px;line-height:1.65;color:var(--muted)}.bp-actions{display:flex;gap:14px;flex-wrap:wrap;margin:34px 0}.bp-primary,.bp-secondary{display:inline-flex;justify-content:center;align-items:center;min-height:52px;padding:0 24px;border-radius:999px;text-decoration:none;font-weight:800;font-size:14px}.bp-primary{background:var(--navy);color:white}.bp-secondary{border:1px solid #b8c6d8;color:var(--navy);background:white}.bp-trust{display:flex;gap:20px;flex-wrap:wrap;color:#536174;font-size:13px}.bp-trust span:before{content:'✓';color:var(--orange);font-weight:800;margin-right:8px}.bp-hero-card{background:white;border-radius:24px;padding:46px;box-shadow:0 28px 80px rgba(23,38,61,.14);border:1px solid #e2e9f1}.bp-card-label{display:inline-block;background:#fff1e7;color:#a8511e;border-radius:999px;padding:8px 12px;font-size:11px;text-transform:uppercase;letter-spacing:.13em;font-weight:800;margin-bottom:24px}.bp-hero-card strong{display:block;font-family:Georgia,serif;font-size:34px;line-height:1.2;color:var(--navy);font-weight:400;margin-bottom:18px}.bp-hero-card p{color:var(--muted);line-height:1.7;margin-bottom:0}.bp-strip{display:flex;justify-content:center;gap:34px;flex-wrap:wrap;padding:20px;background:var(--navy);color:rgba(255,255,255,.78);text-transform:uppercase;letter-spacing:.1em;font-size:11px}.bp-section{padding:105px clamp(24px,7vw,110px)}.bp-head{max-width:790px;margin-bottom:52px}.bp-head>p:last-child{color:var(--muted);font-size:18px;line-height:1.7}.bp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.bp-grid article{background:white;border:1px solid #e5ebf2;border-radius:16px;padding:30px;min-height:210px}.bp-grid article>span{font-size:12px;font-weight:800;color:var(--orange)}.bp-grid h3{font-family:Georgia,serif;font-size:25px;color:var(--navy);font-weight:400;margin:22px 0 12px}.bp-grid p{color:var(--muted);line-height:1.65;margin-bottom:0}.bp-audiences{display:grid;grid-template-columns:1fr 1fr;padding:0}.bp-audience{padding:100px clamp(30px,7vw,100px)}.bp-business{background:var(--navy);color:white}.bp-business h2{color:white}.bp-business .bp-kicker{color:#a9c3e4}.bp-private{background:#edf3f8}.bp-audience>p:not(.bp-kicker){line-height:1.7;font-size:17px;opacity:.78}.bp-audience ul{padding-left:18px;line-height:2}.bp-process{background:white}.bp-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}.bp-steps>div{border-top:3px solid var(--orange);padding-top:24px}.bp-steps strong{color:var(--orange);font-size:13px}.bp-steps h3{font-family:Georgia,serif;color:var(--navy);font-size:27px;font-weight:400;margin:16px 0 10px}.bp-steps p{color:var(--muted);line-height:1.65}.bp-contact{display:grid;grid-template-columns:1.1fr .9fr;gap:8vw;align-items:center;background:#eef3f8}.bp-contact>div>p:last-child{color:var(--muted);font-size:18px;line-height:1.7}.bp-contact-card{background:white;padding:38px;border-radius:20px;box-shadow:0 24px 65px rgba(23,38,61,.1);display:flex;flex-direction:column;gap:10px}.bp-contact-card strong{font-family:Georgia,serif;font-size:29px;color:var(--navy);font-weight:400}.bp-contact-card a:not(.bp-primary){color:var(--blue);font-weight:800;text-decoration:none}.bp-contact-card .bp-primary{margin-top:18px}.bp-footer{display:flex;justify-content:space-between;gap:20px;padding:26px clamp(24px,7vw,110px);background:#101b2b;color:rgba(255,255,255,.65);font-size:12px}@media(max-width:900px){.bp-nav nav a:not(.bp-nav-cta){display:none}.bp-hero,.bp-contact{grid-template-columns:1fr}.bp-grid,.bp-steps{grid-template-columns:1fr 1fr}.bp-audiences{grid-template-columns:1fr}.bp-hero{padding-top:70px}}@media(max-width:620px){.bp-nav{padding:16px 18px}.bp-brand>span:last-child{display:none}.bp-nav-cta{padding:10px 13px!important}.bp-hero{padding:70px 22px;min-height:auto}.bp-section{padding:72px 22px}.bp-grid,.bp-steps{grid-template-columns:1fr}.bp-hero-card{padding:30px}.bp-audience{padding:72px 22px}.bp-footer{flex-direction:column}}
      `}</style>
    </main>
  );
}
