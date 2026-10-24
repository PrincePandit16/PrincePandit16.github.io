import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MemeStory from './components/MemeStory';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-primary/30">
      {/* Global Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <MemeStory />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Journey />
        <Contact />
      </main>

      <footer className="py-12 text-center text-text-muted text-xs font-mono relative z-10">
        <p>Crafted with obsession by <a href="https://github.com/PrincePandit16" target="_blank" className="text-primary-2 hover:underline">Prince Pandit</a> · AI/ML & GenAI Engineer · 2025</p>
        <p className="mt-2">Built with curiosity, caffeine, and an unhealthy amount of Stack Overflow.</p>
      </footer>
    </div>
  );
}

export default App;
