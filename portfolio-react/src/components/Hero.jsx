import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from './ExternalLink';

const Hero = () => {
  const skills = [
    { name: 'Python', active: true },
    { name: 'LangChain', active: true },
    { name: 'FastAPI', active: true },
    { name: 'RAG', active: true },
    { name: 'TensorFlow', active: true },
    { name: 'HuggingFace', active: false },
    { name: 'NLP', active: false },
    { name: 'Streamlit', active: false },
    { name: 'SQL', active: false },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Mesh Blobs */}
      <div className="mesh-blob w-[500px] h-[500px] bg-primary/30 top-[-10%] left-[-10%] animate-drift" />
      <div className="mesh-blob w-[400px] h-[400px] bg-cyan/20 bottom-[-10%] right-[-10%] animate-drift" style={{ animationDelay: '-8s' }} />
      <div className="mesh-blob w-[300px] h-[300px] bg-pink/20 top-[20%] left-[40%] animate-drift" style={{ animationDelay: '-12s' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-8 shadow-lg shadow-primary/10"
        >
          <span className="text-mint">✦</span>
          Entry-Level · AI/ML · GenAI · Data Science
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-6"
        >
          <span className="block">Turning Curiosity</span>
          <span className="block bg-grad-1 bg-clip-text text-transparent">into Intelligent</span>
          <span className="block text-cyan italic">Systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-text-soft text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hey, I'm <span className="text-primary-2 font-bold">Prince Pandit</span> — a fresher who learns relentlessly, builds obsessively, and believes that <span className="text-primary-2 font-bold">smart work beats just hard work</span> every single time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-3 py-1 rounded-full text-[10px] font-mono border transition-colors ${
                skill.active
                ? 'border-primary/30 bg-primary/10 text-primary-2'
                : 'border-white/10 bg-white/5 text-text-muted'
              }`}
            >
              {skill.name}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-grad-1 text-white font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-text font-bold hover:bg-white/10 hover:-translate-y-1 transition-all"
          >
            Let's Connect →
          </a>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-[10px] uppercase tracking-widest font-mono">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
