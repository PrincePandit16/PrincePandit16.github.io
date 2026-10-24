import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const edu = [
    {
      badge: '🎓 Bachelor\'s Degree',
      badgeColor: 'bg-primary/10 text-primary-2 border-primary/30',
      name: 'B.E. in Artificial Intelligence and Data Science',
      inst: 'SITRC',
      year: '2021 – 2025',
      grade: 'CGPA: 8.14 / 10',
      desc: 'Strong foundation in Artificial Intelligence & Data Science with hands-on experience in Machine Learning, Deep Learning, Data Analytics, DBMS, and Software Development along with practical exposure to Generative AI and real-world AI projects.',
      tags: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Python', 'Data Analytics'],
      main: true,
    },
    {
      badge: '🏫 Higher Secondary',
      badgeColor: 'bg-cyan/10 text-cyan border-cyan/30',
      name: 'Science Stream · PCM + CS',
      inst: 'P.G. Junior College',
      year: '2019 – 2021',
      grade: '79.18%',
      desc: 'First exposure to programming logic, analytical thinking, and problem solving.',
      tags: ['Physics', 'Chemistry', 'Maths', 'Computer Science'],
      main: false,
    },
    {
      badge: '🏫 Secondary School',
      badgeColor: 'bg-cyan/10 text-cyan border-cyan/30',
      name: 'SSC Board Education',
      inst: 'M. M. High School',
      year: '2018 – 2019',
      grade: '70.17%',
      desc: 'Built the academic foundation in mathematics, science, and logical reasoning that later sparked my interest in technology and problem solving.',
      tags: ['Mathematics', 'Science', 'Logical Thinking', 'Problem Solving'],
      main: false,
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            02 · Education
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tighter">
            Where it all<br />began.
          </h2>
          <p className="text-text-soft max-w-2xl mx-auto">
            Academic foundation that sparked the curiosity to build real things.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {edu.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-3xl border transition-all shadow-xl ${
                item.main ? 'bg-primary/10 border-primary/30 scale-105 z-10' : 'bg-bg-2 border-white/10'
              }`}
            >
              <span className={`px-3 py-1 rounded-full border text-[10px] font-bold mb-6 inline-block ${item.badgeColor}`}>
                {item.badge}
              </span>
              <h3 className="text-xl font-bold mb-2 leading-tight">{item.name}</h3>
              <p className="text-text-soft text-sm mb-4">{item.inst}</p>
              <div className="flex flex-wrap gap-3 text-text-muted text-xs font-mono mb-6">
                <span>{item.year}</span>
                <span>•</span>
                <span>{item.grade}</span>
              </div>
              <p className="text-text-soft text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, j) => (
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

export default Education;
