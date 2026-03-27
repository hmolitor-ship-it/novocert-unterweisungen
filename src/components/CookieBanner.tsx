import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('nc_cookies');
    if (stored === null) {
      setVisible(true);
    }
  }, []);

  const handle = (accepted: boolean) => {
    localStorage.setItem('nc_cookies', accepted ? 'accepted' : 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-white p-4 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-slate-300 flex-1">
          Diese Website verwendet ausschliesslich technisch notwendige Cookies.{' '}
          <a href="#/datenschutz" className="text-blue underline">
            Datenschutz
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handle(false)}
            className="px-5 py-2 bg-white text-navy text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={() => handle(true)}
            className="px-5 py-2 bg-white text-navy text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
