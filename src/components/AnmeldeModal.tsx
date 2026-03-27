import { useState } from 'react';
import { X } from 'lucide-react';
import { useAppStore } from '../lib/store';

interface Props {
  onClose: () => void;
  onComplete: () => void;
}

export default function AnmeldeModal({ onClose, onComplete }: Props) {
  const setTeilnehmerDaten = useAppStore((s) => s.setTeilnehmerDaten);
  const [form, setForm] = useState({ vorname: '', nachname: '', email: '', firma: '' });
  const [datenschutz, setDatenschutz] = useState(false);
  const [fehler, setFehler] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.vorname || !form.nachname || !form.email || !form.firma) {
      setFehler('Bitte alle Felder ausfuellen.');
      return;
    }
    if (!datenschutz) {
      setFehler('Bitte stimmen Sie den Datenschutzhinweisen zu.');
      return;
    }
    setTeilnehmerDaten(form);
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          aria-label="Schliessen"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-navy mb-1">Anmeldung</h2>
        <p className="text-sm text-slate-500 mb-6">
          Bitte melden Sie sich an, um den Wissenstest zu starten.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Vorname *</label>
              <input
                type="text"
                value={form.vorname}
                onChange={(e) => setForm({ ...form, vorname: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                placeholder="Max"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nachname *</label>
              <input
                type="text"
                value={form.nachname}
                onChange={(e) => setForm({ ...form, nachname: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                placeholder="Mustermann"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">E-Mail *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
              placeholder="max.mustermann@firma.de"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Firma *</label>
            <input
              type="text"
              value={form.firma}
              onChange={(e) => setForm({ ...form, firma: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
              placeholder="Musterfirma GmbH"
            />
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={datenschutz}
              onChange={(e) => setDatenschutz(e.target.checked)}
              className="mt-0.5 accent-blue"
            />
            <span className="text-xs text-slate-500">
              Ich stimme den{' '}
              <a href="#/datenschutz" className="text-blue underline" target="_blank">
                Datenschutzhinweisen
              </a>{' '}
              zu. *
            </span>
          </label>

          {fehler && (
            <p className="text-sm text-red-600 font-medium">{fehler}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-hover transition-colors"
          >
            Unterweisung starten
          </button>
        </form>
      </div>
    </div>
  );
}
