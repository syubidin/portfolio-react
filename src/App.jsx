import Rail from './components/Rail.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Trail from './components/Trail.jsx';
import Kit from './components/Kit.jsx';
import Hello from './components/Hello.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Rail />
      <main id="app">
        <Hero />
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
