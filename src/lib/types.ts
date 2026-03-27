export interface Frage {
  frage: string;
  optionen: string[];
  korrekt: number;
  erklaerung: string;
}

export interface Unterweisung {
  id: number;
  slug: string;
  titel: string;
  kategorie: string;
  icon: string;
  dauer: string;
  rechtsgrundlage: string;
  beschreibung: string;
  lernziele: string[];
  fragen: Frage[];
}

export interface TeilnehmerDaten {
  vorname: string;
  nachname: string;
  email: string;
  firma: string;
}

export interface QuizAntwort {
  fragenIndex: number;
  gewaehlt: number;
  richtig: boolean;
}

export interface QuizErgebnis {
  unterweisungSlug: string;
  unterweisungTitel: string;
  score: number;
  total: number;
  bestanden: boolean;
  antworten: QuizAntwort[];
  datum: string;
}
