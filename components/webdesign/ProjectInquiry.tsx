'use client'
import { useState, type FormEvent } from 'react'
import { SITE } from '@/lib/site'
import type { Locale } from '@/lib/webdesign-content'

export function ProjectInquiry({locale}:{locale:Locale}) {
 const de = locale === 'de'
 const [draft,setDraft] = useState('')
 function prepare(event:FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  setDraft(`${de?'Hallo Vantura-Team':'Hello Vantura team'},\n\n${de?'Unternehmen / Website':'Business / website'}: ${data.get('business')}\n${de?'Projekt':'Project'}: ${data.get('project')}\n${de?'Budget':'Budget'}: ${data.get('budget')}\n${de?'Zeitraum':'Timing'}: ${data.get('timing')}\n`)
 }
 return <section id="projektanfrage" className="agency-inquiry" aria-labelledby="inquiry-heading"><p className="agency-kicker">{de ? 'Ohne Termin · Unverbindlich' : 'No appointment · No obligation'}</p><h3 id="inquiry-heading">{de?'Erzähl uns von deinem Projekt.':'Tell us about your project.'} <span aria-hidden>↗</span></h3><form onSubmit={prepare} onChange={()=>setDraft('')}><p>{de?'Vier kurze Angaben reichen für den Einstieg. Wir bereiten daraus eine E-Mail vor, die du selbst verschickst.':'Four short details are enough to get started. We prepare an email for you to send.'}</p><div className="agency-inquiry-fields"><label>{de?'Unternehmen / Website':'Business / website'}<input name="business" required maxLength={150} autoComplete="organization" /></label><label>{de?'Gewünschter Zeitraum (optional)':'Preferred timing (optional)'}<input name="timing" maxLength={100} /></label><label>{de?'Budgetrahmen':'Budget range'}<select name="budget" defaultValue="offen"><option value="offen">{de?'Noch offen':'Not sure yet'}</option><option>450–980 €</option><option>980–1.490 €</option><option>1.490 € +</option></select></label><label className="agency-inquiry-wide">{de?'Was soll deine Website leisten?':'What should your website do?'}<textarea name="project" required maxLength={1200} rows={3}/></label></div><button className="agency-button agency-button-dark" type="submit">{de?'E-Mail vorbereiten':'Prepare email'} <span aria-hidden>↗</span></button>{draft && <div role="status" className="agency-inquiry-draft"><p>{de?'Dein Entwurf ist bereit. Es wurde noch nichts versendet.':'Your draft is ready. Nothing has been sent.'}</p><pre>{draft}</pre><a className="agency-button agency-button-dark" href={`mailto:${SITE.email}?subject=${encodeURIComponent(de?'Website-Projektanfrage':'Website project inquiry')}&body=${encodeURIComponent(draft)}`}>{de?'Im E-Mail-Programm öffnen':'Open in email app'} ↗</a><p>{de?'Kein E-Mail-Programm eingerichtet? Kopiere den Entwurf und sende ihn an die folgende Adresse.':'No email app? Copy the draft and send it to the address below.'}</p><a href={`mailto:${SITE.email}`} className="agency-text-link">{SITE.email}</a></div>}</form></section>
}
