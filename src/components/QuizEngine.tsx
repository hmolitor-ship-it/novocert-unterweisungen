import { useState, useCallback } from 'react';
import type { Unterweisung, QuizAntwort } from '../lib/types';
import { useAppStore } from '../lib/store';
import Fortschrittsbalken from './Fortschrittsbalken';
import QuizFrage from './QuizFrage';

interface Props {
  unterweisung: Unterweisung;
}

export default function QuizEngine({ unterweisung }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [antworten, setAntworten] = useState<QuizAntwort[]>([]);
  const setErgebnis = useAppStore((s) => s.setErgebnis);

  const fragen = unterweisung.fragen;
  const total = fragen.length;

  const handleAnswer = useCallback(
    (gewaehlt: number) => {
      const frage = fragen[currentIdx];
      const richtig = gewaehlt === frage.korrekt;
      setAntworten((prev) => [
        ...prev,
        { fragenIndex: currentIdx, gewaehlt, richtig },
      ]);
    },
    [currentIdx, fragen],
  );

  const handleWeiter = useCallback(() => {
    if (currentIdx + 1 < total) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Quiz complete
      const finalAntworten = antworten;
      // need to include the latest answer if not yet
      const score = finalAntworten.filter((a) => a.richtig).length;
      const bestanden = score / total >= 0.8;

      const ergebnis = {
        unterweisungSlug: unterweisung.slug,
        unterweisungTitel: unterweisung.titel,
        score,
        total,
        bestanden,
        antworten: finalAntworten,
        datum: new Date().toISOString(),
      };
      setErgebnis(ergebnis);
      window.location.hash = `/ergebnis/${unterweisung.slug}`;
    }
  }, [currentIdx, total, antworten, unterweisung, setErgebnis]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
      <Fortschrittsbalken current={currentIdx} total={total} />
      <QuizFrage
        key={currentIdx}
        frage={fragen[currentIdx]}
        index={currentIdx}
        total={total}
        onAnswer={handleAnswer}
        onWeiter={handleWeiter}
      />
    </div>
  );
}
