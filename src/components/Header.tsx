import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-3 no-underline">
            <span className="text-xl font-extrabold tracking-tight text-white">
              NOVOCERT
            </span>
            <span className="hidden sm:inline text-xs text-slate-400 font-medium">
              by WS Anlagentechnik GmbH
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Start
            </a>
            <a href="#/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Unterweisungen
            </a>
            <a href="#/impressum" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Impressum
            </a>
            <a href="https://novocert.de" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Pr&auml;senz-Schulungen
            </a>
            <a
              href="mailto:Consulting@ws-anlagentechnik.de"
              className="inline-flex items-center px-4 py-2 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-hover transition-colors"
            >
              Anfrage stellen
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-2 pt-4">
              <a href="#/" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white px-2 py-2">
                Start
              </a>
              <a href="#/" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white px-2 py-2">
                Unterweisungen
              </a>
              <a href="#/impressum" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white px-2 py-2">
                Impressum
              </a>
              <a href="https://novocert.de" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white px-2 py-2">
                Pr&auml;senz-Schulungen
              </a>
              <a
                href="mailto:Consulting@ws-anlagentechnik.de"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-hover mt-2"
              >
                Anfrage stellen
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
