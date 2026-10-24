import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillSets = [
    {
      title: 'AI / Machine Learning',
      icon: '🤖',
      color: 'bg-primary/10 text-primary-2 border-primary/20',
      skills: ['Python', 'scikit-learn', 'TensorFlow', 'Keras', 'PyTorch(basics)', 'NLP', 'ANN'],
    },
    {
      title: 'Generative AI',
      icon: '✨',
      color: 'bg-cyan/10 text-cyan border-cyan/20',
      skills: ['LangChain', 'HuggingFace', 'RAG', 'Prompt Engineering', 'LLMs', 'Vector DBs', 'Embeddings', 'LangGraph'],
    },
    {
      title: 'Data Science',
      icon: '📊',
      color: 'bg-pink/10 text-pink border-pink/20',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'EDA', 'Feature Eng.', 'Streamlit', 'PostgreSQL'],
    },
    {
      title: 'Backend & APIs',
      icon: '⚡',
      color: 'bg-mint/10 text-mint border-mint/20',
      skills: ['FastAPI', 'REST APIs', 'Pydantic', 'SQLAlchemy'],
    },
    {
      title: 'Tools & Workflow',
      icon: '🛠️',
      color: 'bg-amber/10 text-amber border-amber/20',
      skills: ['AWS', 'Git / GitHub', 'Jupyter', 'VS Code', 'Google Colab', 'n8n', 'Linux', 'Docker'],
    },
    {
      title: 'AI Ecosystem',
      icon: '🌐',
      color: 'bg-primary/10 text-primary-2 border-primary/20',
      skills: ['Claude Code', 'Groq','gemini'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            03 · Technical Skills
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tighter">
            Tools I actually use<br />to build things
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillSets.map((set, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-bg-2 border border-white/10 rounded-3xl shadow-xl group hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${set.color} border`}>
                  {set.icon}
                </div>
                <h3 className="font-bold text-xl">{set.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {set.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-soft text-[10px] font-mono group-hover:text-text transition-colors">
                    {skill}
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

export default Skills;
