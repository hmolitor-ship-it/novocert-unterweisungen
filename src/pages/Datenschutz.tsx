export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-navy mb-8">Datenschutzerklaerung</h1>

      <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            1. Verantwortliche Stelle
          </h2>
          <p>
            WS Anlagentechnik GmbH<br />
            Koenigsberger Str. 23<br />
            53840 Troisdorf<br />
            E-Mail: Consulting@ws-anlagentechnik.de<br />
            Telefon: +49 2241 5459561
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            2. Erfassung allgemeiner Informationen
          </h2>
          <p>
            Beim Besuch unserer Website werden automatisch Informationen
            allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles)
            beinhalten etwa die Art des Webbrowsers, das verwendete
            Betriebssystem, den Domainnamen Ihres Internet-Service-Providers
            und aehnliches. Hierbei handelt es sich ausschliesslich um
            Informationen, die keine Rueckschluesse auf Ihre Person zulassen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            3. Anmelde- und Kontaktformular
          </h2>
          <p>
            Wenn Sie das Anmeldeformular fuer eine Unterweisung nutzen,
            erheben wir folgende Daten: Vorname, Nachname, E-Mail-Adresse und
            Firma. Diese Daten werden ausschliesslich zur Erstellung des
            Unterweisungsnachweises (PDF) verwendet und nicht an Dritte
            weitergegeben. Die Daten werden lokal in Ihrem Browser gespeichert
            und nicht an unsere Server uebertragen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            4. Cookies
          </h2>
          <p>
            Diese Website verwendet ausschliesslich technisch notwendige
            Cookies bzw. localStorage-Eintraege, um Ihre Cookie-Praeferenz zu
            speichern. Es werden keine Tracking-, Analyse- oder
            Marketing-Cookies eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            5. Hosting
          </h2>
          <p>
            Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133,
            Walnut, CA 91789, USA) gehostet. Die Server von Vercel befinden
            sich unter anderem in der EU. Vercel verarbeitet Daten im Rahmen
            der Auftragsverarbeitung. Weitere Informationen finden Sie in der
            Datenschutzerklaerung von Vercel.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            6. Google Fonts (lokal)
          </h2>
          <p>
            Diese Website nutzt die Schriftart &quot;Plus Jakarta Sans&quot;
            von Google Fonts. Die Schriftarten werden ueber Google-Server
            eingebunden. Beim Aufruf der Seite wird eine Verbindung zu
            Google-Servern hergestellt, wobei Ihre IP-Adresse uebermittelt
            wird. Weitere Informationen finden Sie in der
            Datenschutzerklaerung von Google.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            7. Betroffenenrechte
          </h2>
          <p>Sie haben folgende Rechte:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Recht auf Auskunft (&sect;15 DSGVO)</li>
            <li>Recht auf Berichtigung (&sect;16 DSGVO)</li>
            <li>Recht auf Loeschung (&sect;17 DSGVO)</li>
            <li>Recht auf Einschraenkung der Verarbeitung (&sect;18 DSGVO)</li>
            <li>Recht auf Datenuebertragbarkeit (&sect;20 DSGVO)</li>
            <li>Recht auf Widerspruch (&sect;21 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Zur Ausuebung Ihrer Rechte wenden Sie sich bitte an:
            Consulting@ws-anlagentechnik.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-2">
            8. Beschwerderecht bei der Aufsichtsbehoerde
          </h2>
          <p>
            Sie haben das Recht, sich bei der zustaendigen
            Datenschutz-Aufsichtsbehoerde zu beschweren:
            Landesbeauftragte fuer Datenschutz und Informationsfreiheit
            Nordrhein-Westfalen.
          </p>
        </section>
      </div>
    </div>
  );
}
