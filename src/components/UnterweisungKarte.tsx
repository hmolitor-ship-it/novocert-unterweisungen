import { Clock, HelpCircle } from 'lucide-react';
import type { Unterweisung } from '../lib/types';

const kategorieColors: Record<string, string> = {
  Sicherheit: 'bg-red-100 text-red-700',
  Gefahrstoffe: 'bg-orange-100 text-orange-700',
  Fahrer: 'bg-amber-100 text-amber-700',
  Hoehe: 'bg-purple-100 text-purple-700',
  Elektro: 'bg-yellow-100 text-yellow-700',
  Gesundheit: 'bg-emerald-100 text-emerald-700',
  Umwelt: 'bg-teal-100 text-teal-700',
};

interface Props {
  unterweisung: Unterweisung;
}

export default function UnterweisungKarte({ unterweisung }: Props) {
  const colorClass = kategorieColors[unterweisung.kategorie] ?? 'bg-slate-100 text-slate-700';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue/30 transition-all duration-200 flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Category badge */}
        <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colorClass}`}>
          {unterweisung.kategorie}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy mb-2 leading-tight">
          {unterweisung.titel}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-4 flex-1 line-clamp-3">
          {unterweisung.beschreibung}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {unterweisung.dauer}
          </span>
          <span className="flex items-center gap-1">
            <HelpCircle size={14} />
            {unterweisung.fragen.length} Fragen
          </span>
        </div>

        {/* Rechtsgrundlage */}
        <p className="text-xs text-slate-400 mb-4">
          {unterweisung.rechtsgrundlage}
        </p>

        {/* CTA */}
        <a
          href={`#/unterweisung/${unterweisung.slug}`}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-hover transition-colors"
        >
          Jetzt starten
        </a>
      </div>
    </div>
  );
}
