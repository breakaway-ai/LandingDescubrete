import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Nepsis from './components/Nepsis';
import Content from './components/Content';
import Community from './components/Community';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Nepsis />
        <Content />
        <Community />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
