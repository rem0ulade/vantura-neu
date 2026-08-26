import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Themengärten',
  description: 'Strauch-Pfingstrosen, Bauerngarten, Lotossee, Wasserwald, Wiesenlandschaften und General Sherman Tree im Arboretum Ellerhoop.',
}

const gardens = [
  {
    id: 'pfingstrosen',
    title: 'Strauch-Pfingstrosen',
    kicker: 'Highlight',
    image: '/arboretum/peonies.jpg',
    alt: 'Strauch-Pfingstrosen im Mai',
    body: [
      'Die Blüte der Strauch-Pfingstrosen ist eines der Highlights im Arboretum. In den letzten zehn Jahren entstand hier das größte Strauch-Päonien-Sortiment Deutschlands, wahrscheinlich sogar Europas: alle Wildarten und 245 Sorten – plus eigene Sichtung und Züchtung.',
      'Im Mittelpunkt stehen amerikanische Lutea-Hybriden und die chinesische Wildart Paeonia rockii sowie ihre Hybriden. Rund 500 zum Teil 25-jährige Exemplare dieser wüchsigen, über zwei Meter hohen Art stehen im Park. Sie gilt als gartenwürdiger als viele Suffruticosa-Hybriden aus China, Japan und Frankreich.',
    ],
  },
  {
    id: 'bauerngarten',
    title: 'Bauerngarten',
    kicker: 'Blütenmeer',
    image: '/arboretum/bauerngarten.jpg',
    alt: 'Bauerngarten mit Stockrosen',
    body: [
      'Vom Frühjahr bis zum Herbst ein riesiges Blütenmeer: Königskerzen, Schafgarbe, Brennende Liebe – und vor allem Stockrosen. Hunderte dieser über 2,50 m hohen Stauden, im Volksmund Malve oder Rosenpappel, bilden vermutlich die größte Anpflanzung in einem öffentlichen Park.',
      'Das Farbspektrum reicht von zartweiß über rosa, pink und gelb bis schwarzrot. Die Stockrose gehört zu den ältesten Zierpflanzen bäuerlicher Gärten, bekannt seit dem 16. Jahrhundert, zuerst Heil- und Nutzpflanze. Die schwarzrote Nigra-Form lieferte den Farbstoff Althein für Rotwein. Goethe feierte ihr zu Ehren jedes Jahr ein Malvenfest.',
    ],
  },
  {
    id: 'wiesen',
    title: 'Blühende Wiesenlandschaften',
    kicker: 'Von Narzisse bis Iris',
            image: '/arboretum/wiesenpark.jpg',
    alt: 'Narzissenwiese im Arboretum',
    body: [
      'Ende April blühen auf der großen Wiese zwischen Bauerngarten und Spielplatz rund 600.000 weiße Dichter-Narzissen (Narcissus poeticus „Actaea“). Dazu Teppiche aus wilden Alpenveilchen und seit 2018 Wiesen mit mehreren Orchideenarten.',
      'Der Wiesenpark auf den Erweiterungsflächen (seit 11. Juni 2016) ist ein Refugium für früher typische Wiesenpflanzen und -tiere: Kamille, Kornblumen, Klatsch-Mohn – und über 20.000 leuchtend blaue Wiesen-Iris, Professor Wardas Lieblingsfarbe, blühend im Juni. Sitzgruppen, Insekten und manchmal Zauneidechsen.',
    ],
  },
  {
    id: 'lotos',
    title: 'Lotossee',
    kicker: 'Juli & August',
    image: '/arboretum/lotosbluete.jpg',
    alt: 'Indische Lotosblume Nelumbo nucifera',
    body: [
      'Nirgendwo in Deutschland blüht die Indische Lotosblume (Nelumbo nucifera) in so ausgedehnter Freilandkultur. Sie ist Symbol für Vollkommenheit und Reinheit, in Asien Nahrung und Medizin – und Namensgeberin des jährlichen Festes. Geschrieben wird sie mit zwei o: Lotos. Lotus ist der Hornklee.',
      'Der Lotos-Effekt: Auf der mikrorauen Blattoberfläche perlen Wassertropfen ab und nehmen Schmutz mit. Diese Selbstreinigung inspiriert Lacke für Gebäudeoberflächen.',
    ],
  },
  {
    id: 'wasserwald',
    title: 'Wasserwald des Mississippi',
    kicker: 'Forschungsprojekt',
    image: '/arboretum/wasserwald.jpg',
    alt: 'Wasserwald im Arboretum Ellerhoop',
    body: [
      'Ein Teil des Sees bildet den Wasserwald des Mississippi nach. Die seltenen Wasser-Tupelobäume (Nyssa aquatica) können mit dem Wurzelkörper ganzjährig unter Wasser stehen – im Gegensatz zu Wald- und Sumpf-Tupelobaum. Die Gehölze sind ein Forschungsprojekt des Arboretums.',
    ],
  },
  {
    id: 'sherman',
    title: 'General Sherman Tree',
    kicker: 'Baumerlebniswelt',
    image: '/arboretum/sherman.jpg',
    alt: 'Nachbildung des General Sherman Tree',
    body: [
      'Der echte General Sherman im Sequoia-Nationalpark ist der voluminöseste lebende Baum der Erde: ein Riesenmammutbaum von rund 83,8 m Höhe und etwa 1.487 m³ Stammvolumen, 1900–2500 Jahre alt.',
      'Im Arboretum steht die weltweit einzige Nachbildung: der Stamm bis 11 Meter Höhe im Maßstab 1:1. Am 4. Oktober 2013 wurde in die Betonhülle ein damals 40-jähriger Mammutbaum – General Sherman Junior – gepflanzt, heute etwa 15 Meter hoch. Mittelpunkt der schulbiologischen Abteilung „Entwicklungsgeschichte der Bäume“.',
    ],
  },
]

export default function GaertenPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">17,3 Hektar</p>
        <h1>Themengärten, die sich über das Jahr drehen.</h1>
        <p>Wissenschaftlich und künstlerisch gestaltet – von der Päonie bis zum Mississippi-Wasserwald.</p>
      </header>
      {gardens.map((garden, index) => (
        <section key={garden.id} id={garden.id} className="ae-split" style={{ direction: index % 2 ? 'rtl' : 'ltr' }}>
          <img className="ae-photo" src={garden.image} alt={garden.alt} style={{ direction: 'ltr' }} />
          <div className="ae-panel" style={{ direction: 'ltr', background: index % 2 ? 'var(--cream)' : 'var(--forest)', color: index % 2 ? 'var(--ink)' : 'white' }}>
            <p className="ae-kicker" style={{ color: index % 2 ? 'var(--gold)' : '#e4d3a4' }}>{garden.kicker}</p>
            <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', margin: '8px 0 18px' }}>{garden.title}</h2>
            {garden.body.map((p) => (
              <p key={p.slice(0, 24)} style={{ color: index % 2 ? 'var(--muted)' : 'rgba(255,255,255,.74)' }}>{p}</p>
            ))}
          </div>
        </section>
      ))}
      <section className="ae-section" style={{ textAlign: 'center' }}>
        <p className="ae-kicker" style={{ color: 'var(--lotus)' }}>Wann was blüht</p>
        <h2 style={{ fontSize: 42, marginBottom: 16 }}>Den Höhepunkt nicht verpassen.</h2>
        <Link className="ae-cta" href="/arboretum/bluehkalender/">Zum Blühkalender</Link>
      </section>
    </main>
  )
}
