import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from './ExternalLink';

const Projects = () => {
  const projects = [
    {
      title: 'AI Research & Recommendation Agent',
      tag: 'AI · Agents · LangGraph · Groq',
      impact: 'Live Demo',
      impactColor: 'bg-mint/10 text-mint border-mint/20',
      prob: 'Business analysts spend hours manually researching companies and crafting strategic reports. This autonomous multi-step AI agent runs a LangGraph-style workflow across 5 specialized nodes — generating company insights, business challenges, AI opportunity mapping, and a CEO-ready strategic pitch with a 90-day roadmap.',
      stack: ['LangGraph', 'Groq LLM', 'Streamlit', 'Python', 'State Machine', 'Prompt Eng.'],
      links: [
        { label: 'Live Demo ↗', href: 'https://ai-research-recommendation-agent.streamlit.app/' },
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16/ai-research-recommendation-agent' },
      ],
      glow: 'bg-primary',
    },
    {
      title: 'AI Competitive Intelligence Agent',
      tag: 'AI · Agents · Automation',
      impact: 'Business impact',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Analysts spend hours manually tracking competitors and market shifts. This autonomous AI agent researches companies, monitors market trends, and auto-generates strategic reports — delivering actionable intelligence without the manual grind.',
      stack: ['Python', 'AI Agents', 'LLM', 'Automation', 'Report Gen.'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16/AI_Competitive_Intelligence_Agent' },
      ],
      glow: 'bg-cyan',
    },
    {
      title: 'Clinic NL2SQL API',
      tag: 'AI · NLP · API',
      impact: 'Healthcare impact',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Clinic staff can\'t query databases without SQL. This API translates natural language questions into SQL — so non-technical medical staff can retrieve patient data instantly using plain English.',
      stack: ['FastAPI', 'LLM', 'SQL', 'Prompt Eng.', 'Python'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16' },
      ],
      glow: 'bg-pink',
    },
    {
      title: 'FastAPI Task Manager',
      tag: 'Backend · CRUD',
      impact: 'Production pattern',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Full-featured task management REST API with auth, database integration and clean architecture. The backbone pattern for any serious AI application backend.',
      stack: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'SQLite', 'JWT'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16' },
      ],
      glow: 'bg-amber',
    },
    {
      title: 'TweetForge',
      tag: 'GenAI · LLM',
      impact: 'Content automation',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Content creators waste hours crafting posts. TweetForge uses LLMs to generate tweet threads, viral hooks, and content calendars from a single topic input in seconds.',
      stack: ['LangChain', 'OpenAI API', 'FastAPI', 'Prompt Eng.'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16' },
      ],
      glow: 'bg-primary',
    },
    {
      title: 'AI Email Classifier',
      tag: 'ML · NLP',
      impact: 'Business automation',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Businesses receive thousands of emails daily. This classifier auto-categorises emails into support, sales, spam, or urgent — cutting manual triage time and freeing teams to focus on what matters.',
      stack: ['NLP', 'scikit-learn', 'TF-IDF', 'Python', 'Pandas'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16/AI_Email_Classifier' },
      ],
      glow: 'bg-cyan',
    },
    {
      title: 'ANN Customer Churn Predictor',
      tag: 'Deep Learning · ANN',
      impact: 'Business Intelligence',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Banks lose millions to customer churn every year. This end-to-end ANN model predicts which customers are likely to leave, giving businesses time to act. Deployed as a live Streamlit web app.',
      stack: ['TensorFlow', 'Keras', 'Streamlit', 'Pandas', 'scikit-learn'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16/ANN-Customer-Churn-Prediction' },
      ],
      glow: 'bg-pink',
    },
    {
      title: 'SEC-RAG',
      tag: 'AI · Security · RAG · LLMs',
      impact: 'Security impact',
      impactColor: 'bg-white/5 text-text-soft border-white/10',
      prob: 'Analyzing security documents is tedious and prone to oversight. SEC-RAG implements a specialized Retrieval-Augmented Generation pipeline to allow security professionals to query complex security policies and standards with high precision and cited sources.',
      stack: ['RAG', 'LangChain', 'Vector DB', 'Python', 'Security Analysis'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16/sec-rag' },
      ],
      glow: 'bg-cyan',
    },
    {
      title: 'MyAI-Core',
      tag: 'AI · Framework · Core Engine',
      impact: 'Under Development',
      impactColor: 'bg-primary/10 text-primary-2 border-primary/30',
      prob: 'Currently architecting a centralized AI core designed to unify multiple LLM capabilities into a single, extensible framework. Focusing on modularity, prompt optimization, and efficient state management for complex AI agent interactions.',
      stack: ['Python', 'Agentic AI', 'Modular Architecture', 'LLM Orchestration'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/PrincePandit16/MyAI-Core' },
      ],
      glow: 'bg-primary',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            04 · Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tighter">
            Real problems.<br />Real solutions.
          </h2>
          <p className="text-text-soft max-w-2xl mx-auto">
            Every project started with a genuine problem — not a tutorial to follow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 bg-bg-2 border border-white/10 rounded-3xl overflow-hidden group hover:border-primary/40 transition-all shadow-xl"
            >
              {/* Background Glow */}
              <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${proj.glow} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-text-muted font-mono">{proj.tag}</span>
                  <span className={`px-3 py-1 rounded-full border text-[10px] uppercase tracking-widest font-mono ${proj.impactColor}`}>
                    {proj.impact}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight">{proj.title}</h3>
                <p className="text-text-soft text-sm leading-relaxed">
                  {proj.prob}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.stack.map((s, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-text-soft text-[10px] font-mono">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  {proj.links.map((link, i) => (
                    <ExternalLink
                      key={i}
                      href={link.href}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-soft text-xs font-bold hover:bg-white/10 hover:text-text transition-all flex items-center gap-2"
                    >
                      {link.label}
                      <span className="text-[10px]">↗</span>
                    </ExternalLink>
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

export default Projects;
