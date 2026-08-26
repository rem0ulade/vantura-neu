import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Geschichte',
  description: 'Vom historischen Münsterhof über den Baumpark Timm & Co. zur norddeutschen Gartenschau auf 17,3 Hektar.',
}

export default function GeschichtePage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Von der Dendrologie zur Gartenschau</p>
        <h1>Ein Park mit tiefem Wurzelwerk.</h1>
        <p>Thiensen, Münsterhof, Krüssmann, Warda und ein Förderkreis, der die Schließung verhinderte.</p>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <p>Das Urdorf Ellerhoop lag im heutigen Ortsteil Thiensen. 1349 standen hier die ersten drei Höfe des Dorfes.</p>
          <p>1943 kaufte die Baumschule Timm & Co. den historischen Münsterhof. 1956 richtete Erich Frahm mit dem Dendrologen Dr. h. c. Gerd Krüssmann ein 3,5 Hektar großes Arboretum ein.</p>
          <p>1980 erwarb der Kreis Pinneberg unter Landrat W. Hebisch das Gelände inklusive 10 Hektar Erweiterung – mit Zuschüssen des Förderfonds „Naherholung Hamburger Umland“. Ein Arbeitskreis aus Kreis, Bund deutscher Baumschulen, Botanischem Garten der Universität Hamburg und IPTS entstand. Erste Planungen: Dipl.-Ing. H. Kasten. Gesamt-Thematik und Gestaltung auf nun 17,3 Hektar: Prof. Hans-Dieter Warda.</p>
          <p>1989 Gründung des Förderkreises Arboretum Baumpark Ellerhoop-Thiensen e. V. Zum 1. Januar 1996 übernahm er die Betriebsträgerschaft – gegen die drohende Schließung aus Kostengründen.</p>
          <p>Seit 1985 leitete Hans-Dieter Warda das Arboretum ehrenamtlich wissenschaftlich und künstlerisch. 2001 Horst-Koehler-Gedächtnispreis, 2003 Bundesverdienstkreuz am Bande.</p>
          <p>Von Oktober 2021 bis November 2022 war Herwyn Ehlers Vorsitzender. Am 29. November 2022 wurde Aenne von Wurmb für drei Jahre zur Vorsitzenden gewählt.</p>
          <p><Link href="/arboretum/verein/">Zum Förderkreis</Link></p>
        </div>
      </section>
    </main>
  )
}
