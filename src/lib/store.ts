import { create } from 'zustand';
import type { TeilnehmerDaten, QuizErgebnis, Unterweisung } from './types';

interface AppState {
  teilnehmerDaten: TeilnehmerDaten | null;
  setTeilnehmerDaten: (daten: TeilnehmerDaten) => void;

  currentUnterweisung: Unterweisung | null;
  setCurrentUnterweisung: (uw: Unterweisung | null) => void;

  quizAntworten: Record<number, number>;
  setQuizAntwort: (fragenIndex: number, antwortIndex: number) => void;
  resetQuizAntworten: () => void;

  ergebnis: QuizErgebnis | null;
  setErgebnis: (ergebnis: QuizErgebnis) => void;

  cookiesAccepted: boolean | null;
  setCookiesAccepted: (val: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  teilnehmerDaten: null,
  setTeilnehmerDaten: (daten) => set({ teilnehmerDaten: daten }),

  currentUnterweisung: null,
  setCurrentUnterweisung: (uw) => set({ currentUnterweisung: uw }),

  quizAntworten: {},
  setQuizAntwort: (fragenIndex, antwortIndex) =>
    set((state) => ({
      quizAntworten: { ...state.quizAntworten, [fragenIndex]: antwortIndex },
    })),
  resetQuizAntworten: () => set({ quizAntworten: {} }),

  ergebnis: null,
  setErgebnis: (ergebnis) => set({ ergebnis }),

  cookiesAccepted: null,
  setCookiesAccepted: (val) => set({ cookiesAccepted: val }),
}));
