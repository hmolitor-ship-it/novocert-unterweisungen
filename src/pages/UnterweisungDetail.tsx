import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, HelpCircle, Scale } from 'lucide-react';
import unterweisungen from '../data/unterweisungen.json';
import type { Unterweisung } from '../lib/types';
import { useAppStore } from '../lib/store';
import VideoPlayer from '../components/VideoPlayer';
import AnmeldeModal from '../components/AnmeldeModal';
import QuizEngine from '../components/QuizEngine';

const data = unterweisungen as Unterweisung[];

type Phase = 'video' | 'anmeldung' | 'quiz';

interface Props {
  slug: string;
}

export default function UnterweisungDetail({ slug }: Props) {
  const teilnehmer = useAppStore((s) => s.teilnehmerDaten);
  const resetQuiz = useAppStore((s) => s.resetQuizAntworten);
  const [phase, setPhase] = useState<Phase>('video');

  const uw = data.find((u) => u.slug === slug);

  useEffect(() => {
    resetQuiz();
    setPhase('video');
    window.scrollTo(0, 0);
  }, [slug, resetQuiz]);

  if (!uw) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Unterweisung nicht gefunden</h2>
        <a href="#/" className="text-blue underline">
          Zurueck zur Uebersicht
        </a>
      </div>
    );
  }

  const handleVideoWeiter = () => {
    if (teilnehmer) {
      setPhase('quiz');
    } else {
      setPhase('anmeldung');
    }
  };

  const handleAnmeldungComplete = () => {
    setPhase('quiz');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Back */}
      <a
        href="#/"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-blue mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Zurueck zur Uebersicht
      </a>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">
          {uw.titel}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {uw.dauer}
          </span>
          <span className="flex items-center gap-1">
            <HelpCircle size={14} />
            {uw.fragen.length} Pruefungsfragen
          </span>
          <span className="flex items-center gap-1">
            <Scale size={14} />
            {uw.rechtsgrundlage}
          </span>
        </div>
      </div>

      {/* Phase content */}
      {phase === 'video' && (
        <VideoPlayer unterweisung={uw} onWeiter={handleVideoWeiter} />
      )}

      {phase === 'anmeldung' && (
        <AnmeldeModal
          onClose={() => setPhase('video')}
          onComplete={handleAnmeldungComplete}
        />
      )}

      {phase === 'quiz' && <QuizEngine unterweisung={uw} />}
    </div>
  );
}
