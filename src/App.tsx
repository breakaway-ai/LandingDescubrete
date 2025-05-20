import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Nepsis from './components/Nepsis';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Community />
        <Nepsis />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
