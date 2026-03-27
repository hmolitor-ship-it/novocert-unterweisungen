const KATEGORIEN = [
  'Alle',
  'Sicherheit',
  'Gefahrstoffe',
  'Fahrer',
  'Hoehe',
  'Elektro',
  'Gesundheit',
  'Umwelt',
];

const labels: Record<string, string> = {
  Alle: 'Alle',
  Sicherheit: 'Sicherheit',
  Gefahrstoffe: 'Gefahrstoffe',
  Fahrer: 'Fahrer & Bediener',
  Hoehe: 'Hoehenarbeit',
  Elektro: 'Elektro',
  Gesundheit: 'Gesundheit',
  Umwelt: 'Umwelt',
};

interface Props {
  aktiv: string;
  onChange: (kat: string) => void;
}

export default function KategorieFilter({ aktiv, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {KATEGORIEN.map((kat) => (
        <button
          key={kat}
          onClick={() => onChange(kat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            aktiv === kat
              ? 'bg-blue text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-blue/40 hover:text-blue'
          }`}
        >
          {labels[kat] ?? kat}
        </button>
      ))}
    </div>
  );
}
