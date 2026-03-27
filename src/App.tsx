import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import UnterweisungListe from './pages/UnterweisungListe';
import UnterweisungDetail from './pages/UnterweisungDetail';
import ErgebnisSeite from './pages/ErgebnisSeite';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function parseHash(): { route: string; param: string } {
  const hash = window.location.hash.replace('#', '') || '/';
  if (hash.startsWith('/unterweisung/')) {
    return { route: 'detail', param: hash.replace('/unterweisung/', '') };
  }
  if (hash.startsWith('/ergebnis/')) {
    return { route: 'ergebnis', param: hash.replace('/ergebnis/', '') };
  }
  if (hash === '/impressum') return { route: 'impressum', param: '' };
  if (hash === '/datenschutz') return { route: 'datenschutz', param: '' };
  return { route: 'liste', param: '' };
}

export default function App() {
  const [routeState, setRouteState] = useState(parseHash);

  useEffect(() => {
    const onHashChange = () => setRouteState(parseHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const { route, param } = routeState;

  let page: React.ReactNode;
  switch (route) {
    case 'detail':
      page = <UnterweisungDetail slug={param} />;
      break;
    case 'ergebnis':
      page = <ErgebnisSeite slug={param} />;
      break;
    case 'impressum':
      page = <Impressum />;
      break;
    case 'datenschutz':
      page = <Datenschutz />;
      break;
    default:
      page = <UnterweisungListe />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-light-bg)]">
      <Header />
      <main className="flex-1">{page}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
