import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from './ExternalLink';

const About = () => {
  const stats = [
    { value: '6+', label: 'Projects Built' },
    { value: '3+', label: 'AI Domains' },
    { value: '100%', label: 'Self-Driven' },
    { value: '∞', label: 'Growth Mindset' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            01 · About Me
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tighter">
            The person<br />behind the code
          </h2>
          <p className="text-xl font-bold text-text mb-6">
            I'm a fresher in AI/ML — but "beginner" doesn't mean waiting around. It means I'm moving fast.
          </p>
          <div className="space-y-4 text-text-soft leading-relaxed mb-8">
            <p>
              I started from zero — no CS degree shortcut, no legacy tutorials. Just raw curiosity, a laptop, and a deep need to build things that actually work. Every concept I learn becomes a project. Every error message becomes a lesson.
            </p>
            <p>
              My philosophy: <strong className="text-text">learn it → understand it → build with it</strong>. I don't collect certificates. I ship code. Whether it's an NL2SQL API for clinics or a voice-enabled healthcare bot — I work on real problems, not toy examples.
            </p>
          </div>
          <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-2xl italic text-text relative">
            <p className="mb-4">
              "I may be a beginner, but I consistently put in extra effort, learn fast, and focus on smart work to solve real problems."
            </p>
            <cite className="block text-right text-text-muted text-xs font-mono not-italic">
              — Prince Pandit
            </cite>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-8 bg-bg-2 border border-white/10 rounded-3xl text-center group hover:border-primary/40 transition-colors shadow-xl"
            >
              <div className="text-4xl font-extrabold bg-grad-1 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-text-muted font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
