import { useState, useEffect } from 'react';
import Rail from './components/Rail.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Trail from './components/Trail.jsx';
import Kit from './components/Kit.jsx';
import Hello from './components/Hello.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(
    () => !!sessionStorage.getItem('intro_seen')
  );

  useEffect(() => {
    const handleReplay = () => {
      try {
        sessionStorage.removeItem('intro_seen');
      } catch {
        /* storage disabled */
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      window.location.reload();
    };
    window.addEventListener('replay-intro', handleReplay);
    return () => window.removeEventListener('replay-intro', handleReplay);
  }, []);

  return (
    <>
      {!preloaderDone && (
        <Preloader onDone={() => setPreloaderDone(true)} />
      )}
      <Rail />
      <main id="app" style={!preloaderDone ? { visibility: 'hidden' } : undefined}>
        <Hero ready={preloaderDone} />
        <About />
        <Work />
        <Trail />
        <Kit />
        <Hello />
        <Footer />
      </main>
    </>
  );
}
