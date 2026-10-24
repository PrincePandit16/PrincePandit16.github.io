import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from './ExternalLink';

const Experience = () => {
  const experiences = [
    {
      role: 'Agentic AI Engineer Intern',
      company: 'ArisGlobal',
      date: 'Jun. 2026 – Present',
      location: '📍 Bengaluru, Karnataka',
      current: true,
      bullets: [
        'Onboarding into enterprise Agentic AI development, collaborating with cross-functional engineering teams to understand ongoing LLM and LangGraph-based project architectures.',
        'Exploring production RAG pipelines, agentic workflows, and AWS cloud integrations to build foundational knowledge of the team\'s GenAI ecosystem.',
        'Actively researching LangChain tooling, prompt engineering strategies, and multi-agent design patterns to contribute to upcoming development sprints.',
      ],
      tags: ['LangGraph', 'LangChain', 'LLMs', 'AWS', 'RAG', 'Prompt Engineering', 'GenAI'],
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Infosys Springboard',
      date: 'Dec. 2025 – Mar. 2026',
      location: '📍 Umbergaon, Gujarat',
      current: false,
      bullets: [
        'Engineered a Zero-Shot NLP classification model for enterprise email intent detection across 5+ classes, achieving 85%+ F1-score on real-world data.',
        'Built a custom preprocessing pipeline (tokenization, lemmatization, stop-word removal) reducing input noise by 40% and improving model convergence.',
        'Integrated the model into an agile AI workflow, cutting manual email triage time by 60% across high-volume communication pipelines.',
      ],
      tags: ['Zero-Shot NLP', 'Python', 'scikit-learn', 'NLTK', 'Streamlit', 'Email Classification'],
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Enjay IT Solutions Ltd',
      date: 'Apr. 2025 – Oct. 2025',
      location: '📍 Bhilad, Gujarat',
      current: false,
      bullets: [
        'Deployed end-to-end ML pipelines using scikit-learn for regression and clustering tasks, achieving 90% model accuracy on production business datasets.',
        'Applied feature engineering and hyperparameter tuning to optimize supervised learning models across multiple production use cases, improving generalization and reliability.',
        'Leveraged Pandas and NumPy for large-scale data wrangling, boosting pipeline processing speed by 30% on legacy datasets.',
      ],
      tags: ['scikit-learn', 'Pandas', 'NumPy', 'ML Pipelines', 'Feature Engineering', 'Python'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            05 · Experience
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
            Where I've<br />been building.
          </h2>
          <p className="text-text-soft mt-4">Real internships. Real teams. Real impact.</p>
        </div>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-bg border-2 border-primary flex items-center justify-center z-10 hidden md:flex">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#8b7cff]" />
              </div>

              <div className={`p-8 rounded-3xl border transition-all ${
                exp.current ? 'bg-primary/5 border-primary/30 shadow-lg shadow-primary/5' : 'bg-bg-2 border-white/10'
              }`}>
                <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                  <div>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full bg-mint/10 border border-mint/20 text-mint text-[10px] uppercase tracking-widest font-mono mb-3 inline-block">
                        Current
                      </span>
                    )}
                    <h3 className="text-2xl font-bold leading-tight">{exp.role}</h3>
                    <p className="text-primary-2 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-muted font-mono">{exp.date}</p>
                    <p className="text-xs text-text-soft">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 text-text-soft text-sm leading-relaxed mb-6">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-text-soft text-[10px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
