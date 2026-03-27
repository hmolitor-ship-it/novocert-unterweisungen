import { useState, useMemo } from 'react';
import { Shield, BookOpen, FileCheck } from 'lucide-react';
import unterweisungen from '../data/unterweisungen.json';
import type { Unterweisung } from '../lib/types';
import KategorieFilter from '../components/KategorieFilter';
import UnterweisungKarte from '../components/UnterweisungKarte';

const data = unterweisungen as Unterweisung[];
const totalFragen = data.reduce((sum, u) => sum + u.fragen.length, 0);

export default function UnterweisungListe() {
  const [kategorie, setKategorie] = useState('Alle');

  const filtered = useMemo(
    () => (kategorie === 'Alle' ? data : data.filter((u) => u.kategorie === kategorie)),
    [kategorie],
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-[#132F4C] text-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Online-Unterweisungen
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-2">
            Rechtssicher. Digital. Nachweisbar.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-8">
            Jaehrliche Pflichtunterweisungen gemaess &sect;12 ArbSchG und DGUV Vorschrift 1.
            Inklusive Wissenstest und sofortigem PDF-Unterweisungsnachweis.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-slate-300">
              <Shield size={20} className="text-blue" />
              <span className="text-sm font-medium">{data.length} Unterweisungen</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <BookOpen size={20} className="text-blue" />
              <span className="text-sm font-medium">{totalFragen} Pruefungsfragen</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <FileCheck size={20} className="text-blue" />
              <span className="text-sm font-medium">Sofortiger Nachweis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <KategorieFilter aktiv={kategorie} onChange={setKategorie} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((uw) => (
            <UnterweisungKarte key={uw.id} unterweisung={uw} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-400 py-12">
            Keine Unterweisungen in dieser Kategorie.
          </p>
        )}
      </section>

      {/* Info box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-blue/5 border border-blue/20 rounded-xl p-6 text-center">
          <h3 className="text-base font-bold text-navy mb-2">
            Fuer Arbeitgeber
          </h3>
          <p className="text-sm text-slate-600">
            9,90 EUR pro abgeschlossene Unterweisung mit Nachweis.
            Keine Abo-Pflicht, keine versteckten Kosten.
            Rechtskonformer PDF-Nachweis sofort nach Bestehen.
          </p>
          <a
            href="mailto:Consulting@ws-anlagentechnik.de"
            className="inline-block mt-4 px-6 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-hover transition-colors"
          >
            Jetzt Anfrage stellen
          </a>
        </div>
      </section>
    </div>
  );
}
