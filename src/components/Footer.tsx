import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-extrabold tracking-tight mb-2">NOVOCERT</h3>
            <p className="text-sm text-slate-400">
              Schulungsmarke der WS Anlagentechnik GmbH
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Rechtssichere Online-Unterweisungen mit
              sofortigem Nachweisdokument.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#/" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Start
                </a>
              </li>
              <li>
                <a href="#/impressum" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#/datenschutz" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="https://novocert.de" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Pr&auml;senz-Schulungen
                </a>
              </li>
              <li>
                <a href="https://scc-schulung.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  SCC-Pr&uuml;fungsvorbereitung
                </a>
              </li>
              <li>
                <a href="https://ws-anlagentechnik.de" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  WS Anlagentechnik
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail size={16} className="text-blue shrink-0" />
                <a href="mailto:Consulting@ws-anlagentechnik.de" className="hover:text-white transition-colors">
                  Consulting@ws-anlagentechnik.de
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone size={16} className="text-blue shrink-0" />
                <a href="tel:+4922415459561" className="hover:text-white transition-colors">
                  +49 2241 5459561
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={16} className="text-blue shrink-0 mt-0.5" />
                <span>Koenigsberger Str. 23, 53840 Troisdorf</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
          &copy; 2026 WS Anlagentechnik GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
