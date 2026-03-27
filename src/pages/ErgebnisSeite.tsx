import { useEffect } from 'react';
import { CheckCircle, XCircle, Download, RotateCcw } from 'lucide-react';
import { useAppStore } from '../lib/store';
import { generateNachweisPDF } from '../lib/pdfGenerator';
import unterweisungen from '../data/unterweisungen.json';
import type { Unterweisung } from '../lib/types';

const data = unterweisungen as Unterweisung[];

interface Props {
  slug: string;
}

export default function ErgebnisSeite({ slug }: Props) {
  const ergebnis = useAppStore((s) => s.ergebnis);
  const teilnehmer = useAppStore((s) => s.teilnehmerDaten);

  const uw = data.find((u) => u.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!ergebnis || !uw) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Kein Ergebnis vorhanden</h2>
        <a href="#/" className="text-blue underline">
          Zurueck zur Uebersicht
        </a>
      </div>
    );
  }

  const prozent = Math.round((ergebnis.score / ergebnis.total) * 100);
  const passed = ergebnis.bestanden;

  const handleDownload = () => {
    if (!teilnehmer) return;
    generateNachweisPDF(teilnehmer, ergebnis, uw.rechtsgrundlage, uw.dauer);
  };

  // Circle animation
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (prozent / 100) * circumference;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Score circle */}
      <div className="text-center mb-10">
        <div className="inline-block relative mb-6">
          <svg width="140" height="140" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={passed ? '#16a34a' : '#dc2626'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dashoffset 1s ease-out' }}
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="central"
              className="text-2xl font-bold"
              fill={passed ? '#16a34a' : '#dc2626'}
              fontSize="24"
              fontWeight="bold"
            >
              {prozent}%
            </text>
          </svg>
        </div>

        <h1
          className={`text-3xl font-extrabold mb-2 ${
            passed ? 'text-emerald-600' : 'text-red-600'
          }`}
        >
          {passed ? 'Bestanden!' : 'Leider nicht bestanden'}
        </h1>
        <p className="text-slate-500">
          {ergebnis.score} von {ergebnis.total} Fragen richtig
        </p>
        {!passed && (
          <p className="text-sm text-slate-400 mt-1">
            Mindestens 80% richtige Antworten erforderlich.
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        {passed && teilnehmer && (
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Download size={18} />
            Unterweisungsnachweis herunterladen
          </button>
        )}
        {!passed && (
          <a
            href={`#/unterweisung/${slug}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-hover transition-colors"
          >
            <RotateCcw size={18} />
            Unterweisung wiederholen
          </a>
        )}
        <a
          href="#/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Zurueck zur Uebersicht
        </a>
      </div>

      {/* Details */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-bold text-navy mb-4">Auswertung im Detail</h3>
        <div className="space-y-3">
          {uw.fragen.map((frage, idx) => {
            const antwort = ergebnis.antworten.find((a) => a.fragenIndex === idx);
            const richtig = antwort?.richtig ?? false;

            return (
              <div
                key={idx}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  richtig ? 'bg-emerald-50' : 'bg-red-50'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {richtig ? (
                    <CheckCircle size={18} className="text-emerald-500" />
                  ) : (
                    <XCircle size={18} className="text-red-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700">
                    {idx + 1}. {frage.frage}
                  </p>
                  {!richtig && (
                    <p className="text-xs text-slate-500 mt-1">
                      Richtige Antwort: {frage.optionen[frage.korrekt]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
