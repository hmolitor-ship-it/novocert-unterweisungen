import { Play, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import type { Unterweisung } from '../lib/types';

interface Props {
  unterweisung: Unterweisung;
  onWeiter: () => void;
}

export default function VideoPlayer({ unterweisung, onWeiter }: Props) {
  return (
    <div className="space-y-6">
      {/* Video Placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-navy to-[#132F4C] rounded-xl overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur">
            <Play size={36} className="text-white ml-1" />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">
            Video-Unterweisung: {unterweisung.titel}
          </h3>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
            <Clock size={14} />
            {unterweisung.dauer}
          </div>
          <p className="text-slate-400 text-xs mt-4 max-w-md mx-auto">
            Video wird in Kuerze verfuegbar — Synthesia/HeyGen Produktion
          </p>
        </div>
      </div>

      {/* Lernziele */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h4 className="text-base font-bold text-navy mb-4">
          Lernziele dieser Unterweisung
        </h4>
        <ul className="space-y-2">
          {unterweisung.lernziele.map((lz, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              {lz}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={onWeiter}
        className="w-full flex items-center justify-center gap-2 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-hover transition-colors"
      >
        Weiter zum Wissenstest
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
