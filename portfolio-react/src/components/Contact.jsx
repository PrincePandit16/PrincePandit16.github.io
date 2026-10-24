import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from './ExternalLink';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
          07 · Contact
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-16 tracking-tighter">
          Let's build<br />something together.
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-grad-3 border border-primary/20 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Still reading? <span className="text-primary-2">Hire me.</span>
            </h3>
            <p className="text-text-soft mb-10 max-w-lg mx-auto leading-relaxed">
              Entry-level in title. Builder in practice. If you want someone who learns fast, ships real things, and brings genuine enthusiasm to every problem — let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ExternalLink
                href="mailto:iamprince1606@gmail.com"
                className="px-8 py-3 rounded-full bg-grad-1 text-white font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
              >
                📧 Email me now
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/prince200"
                className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-text font-bold hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                💼 LinkedIn
              </ExternalLink>
              <ExternalLink
                href="https://github.com/PrincePandit16"
                className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-text font-bold hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                🐙 Check GitHub
              </ExternalLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
