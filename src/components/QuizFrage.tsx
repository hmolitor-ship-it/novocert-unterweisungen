import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Frage } from '../lib/types';

interface Props {
  frage: Frage;
  index: number;
  total: number;
  onAnswer: (gewaehlt: number) => void;
  onWeiter: () => void;
}

export default function QuizFrage({ frage, index, total, onAnswer, onWeiter }: Props) {
  const [gewaehlt, setGewaehlt] = useState<number | null>(null);
  const answered = gewaehlt !== null;
  const labels = ['A', 'B', 'C', 'D'];

  const handleSelect = (optIdx: number) => {
    if (answered) return;
    setGewaehlt(optIdx);
    onAnswer(optIdx);
  };

  return (
    <div>
      {/* Question */}
      <p className="text-xs text-slate-400 mb-2">
        Frage {index + 1} von {total}
      </p>
      <h3 className="text-lg font-bold text-navy mb-6 leading-snug">
        {frage.frage}
      </h3>

      {/* Options 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {frage.optionen.map((opt, i) => {
          let borderClass = 'border-slate-200 hover:border-blue/40';
          let bgClass = 'bg-white';
          let textClass = 'text-slate-700';

          if (answered) {
            if (i === frage.korrekt) {
              borderClass = 'border-emerald-500';
              bgClass = 'bg-emerald-50';
              textClass = 'text-emerald-800';
            } else if (i === gewaehlt && i !== frage.korrekt) {
              borderClass = 'border-red-500';
              bgClass = 'bg-red-50';
              textClass = 'text-red-800';
            } else {
              borderClass = 'border-slate-100';
              bgClass = 'bg-slate-50';
              textClass = 'text-slate-400';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${borderClass} ${bgClass} ${answered ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                answered && i === frage.korrekt
                  ? 'bg-emerald-500 text-white'
                  : answered && i === gewaehlt
                    ? 'bg-red-500 text-white'
                    : 'bg-slate-100 text-slate-500'
              }`}>
                {answered && i === frage.korrekt ? (
                  <CheckCircle size={16} />
                ) : answered && i === gewaehlt && i !== frage.korrekt ? (
                  <XCircle size={16} />
                ) : (
                  labels[i]
                )}
              </span>
              <span className={`text-sm font-medium ${textClass}`}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`p-4 rounded-xl mb-6 ${
          gewaehlt === frage.korrekt
            ? 'bg-emerald-50 border border-emerald-200'
            : 'bg-amber-50 border border-amber-200'
        }`}>
          <p className="text-sm text-slate-700">{frage.erklaerung}</p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button
          onClick={onWeiter}
          className="w-full py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-hover transition-colors"
        >
          {index + 1 < total ? 'Naechste Frage \u2192' : 'Ergebnis anzeigen \u2192'}
        </button>
      )}
    </div>
  );
}
