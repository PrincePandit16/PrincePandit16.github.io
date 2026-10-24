import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const steps = [
    { phase: 'Foundation', title: 'Python & Data Science Fundamentals', desc: 'Core Python, Pandas, NumPy, statistics, and EDA. Structured courses + immediate application to mini-projects.', tags: ['Python', 'Pandas', 'Statistics', 'EDA'] },
    { phase: 'ML Phase', title: 'Classical Machine Learning', desc: 'Supervised and unsupervised learning — regression, classification, clustering, SVMs. Built the AI Email Classifier.', tags: ['scikit-learn', 'Feature Eng.', 'Model Eval', 'Kaggle'] },
    { phase: 'Deep Learning', title: 'Neural Networks & ANN', desc: 'ANN architectures, backpropagation, and deployment. Applied to the ANN Customer Churn Predictor.', tags: ['TensorFlow', 'Keras', 'ANN', 'Streamlit'] },
    { phase: 'NLP + Voice', title: 'Natural Language Processing & Voice AI', desc: 'Built the Talking Healthcare Chatbot — a complete NLP pipeline with intent classification and voice I/O.', tags: ['NLTK', 'Intent Classification', 'SpeechRecognition', 'Voice AI'] },
    { phase: 'Backend + APIs', title: 'FastAPI & Production Code Patterns', desc: 'Realised AI models are useless without APIs. Learned FastAPI, REST design, database integration, and auth.', tags: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'REST'] },
    { phase: 'GenAI Era', title: 'LLMs, LangChain & Generative AI', desc: 'Deep in LangChain, RAG pipelines, and LLM integration. Built TweetForge and the Clinic NL2SQL API.', tags: ['LangChain', 'RAG', 'HuggingFace', 'Prompt Eng.'] },
    { phase: 'Now → Agentic AI', title: 'Agentic AI Engineer Intern @ ArisGlobal', desc: 'Exploring enterprise LangGraph workflows, production RAG architectures, and AWS-powered GenAI systems.', tags: ['LangGraph', 'AWS', 'Enterprise AI', 'Agentic Systems'], current: true },
  ];

  return (
    <section id="journey" className="py-24 px-6 bg-bg-2/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            06 · Learning Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tighter">
            How I got here —<br />honestly
          </h2>
          <p className="text-text-soft max-w-2xl mx-auto">
            Self-driven, intentional, and still accelerating.
          </p>
        </div>

        <div className="relative space-y-6 pl-11 md:pl-16">
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-cyan/20 via-cyan/70 to-pink/30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-5 md:p-6 rounded-2xl border transition-all ${
                step.current ? 'bg-cyan/5 border-cyan/30 shadow-lg shadow-cyan/5' : 'bg-bg border-white/10 hover:border-cyan/20'
              }`}
            >
              <div className={`absolute -left-[45px] md:-left-[65px] top-5 size-10 rounded-full border flex items-center justify-center z-10 ${
                step.current ? 'bg-cyan/15 border-cyan/60 text-cyan' : 'bg-bg-2 border-cyan/30 text-cyan/80'
              }`}>
                <span className="font-mono text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span className={`text-[10px] uppercase tracking-widest font-mono font-bold ${
                  step.current ? 'text-cyan' : 'text-primary-2'
                }`}>{step.phase}</span>
                <h3 className="text-xl font-bold leading-tight">{step.title}</h3>
              </div>
              <p className="text-text-soft text-sm leading-relaxed mb-6">
                {step.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-text-soft text-[10px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
