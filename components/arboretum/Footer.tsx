import Link from 'next/link'
import { AE } from '@/lib/arboretum'

export function ArboretumFooter() {
  return (
    <footer className="ae-footer">
      <div className="ae-footer-grid">
        <div>
          <h4>{AE.name}</h4>
          <p>
            {AE.address}<br />
            {AE.zip}<br />
            <a href={AE.phoneHref}>{AE.phone}</a><br />
            <a href={`mailto:${AE.email}`}>{AE.email}</a>
          </p>
          <p style={{ marginTop: 16 }}>
            Träger: Förderkreis Arboretum Baumpark Ellerhoop-Thiensen e. V.
          </p>
        </div>
        <div>
          <h4>Besuch</h4>
          <ul>
            <li><Link href="/arboretum/besucherinfos/">Öffnungszeiten & Preise</Link></li>
            <li><Link href="/arboretum/gaerten/">Themengärten</Link></li>
            <li><Link href="/arboretum/bluehkalender/">Blühkalender</Link></li>
            <li><Link href="/arboretum/veranstaltungen/">Veranstaltungen</Link></li>
            <li><a href={AE.shop} target="_blank" rel="noreferrer">Onlineshop</a></li>
          </ul>
        </div>
        <div>
          <h4>Förderkreis</h4>
          <ul>
            <li><Link href="/arboretum/verein/">Mitglied werden</Link></li>
            <li><Link href="/arboretum/spenden/">Spenden</Link></li>
            <li><Link href="/arboretum/partner/">Partner & Sponsoren</Link></li>
            <li><Link href="/arboretum/gartenakademie/">Gartenakademie</Link></li>
            <li><Link href="/arboretum/kontakt/">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="ae-legal">
        <span>
          <Link href="/arboretum/impressum/">Impressum</Link>
          {' · '}
          <Link href="/arboretum/datenschutz/">Datenschutz</Link>
          {' · '}
          <Link href="/arboretum/agb/">AGB</Link>
        </span>
        <span>
          Konzeptentwurf als Geschenk von{' '}
          <a href="https://vantura-studios.com">Jonathan Kokalj</a>
        </span>
      </div>
    </footer>
  )
}
