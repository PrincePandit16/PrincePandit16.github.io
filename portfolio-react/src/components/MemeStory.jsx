import React from 'react';
import { motion } from 'framer-motion';

const MemeStory = () => {
  const memes = [
    {
      num: '1',
      title: 'Student vs Recruiter Energy',
      vibe: 'The wake-up call',
      vs: {
        left: { em: '😤', who: 'What I thought mattered', say: '"I watched 100+ tutorials, finished 10 courses, and got certified."', status: 'bad' },
        right: { em: '🤨', who: 'What the recruiter said', say: '"That\'s cool. But... show me what you actually built."', status: 'good' },
      },
      tagline: 'Tutorials end. Projects speak forever.',
      reveal: [
        { label: 'Mindset', text: 'I hit this wall early and it redirected everything. I realised that knowledge without output is just expensive entertainment. That realisation is why every project in my portfolio exists.' },
        { label: 'Approach', text: 'I now treat every new concept as incomplete until I\'ve shipped something with it. NL2SQL API, Email Classifier, TweetForge — each one was me proving a concept isn\'t just theory.' },
        { label: 'For you', text: 'I don\'t just bring knowledge to a team. I bring working outputs. Day one, I\'m already thinking about what I can build.' },
      ],
    },
    {
      num: '2',
      title: 'The GenAI Overwhelm Is Real',
      vibe: 'The chaos phase',
      chaos: [
        'LLMs', 'LangChain', 'NLP', 'RAG Pipelines', 'Transformers', 'Vector DBs', 'Fine-tuning', 'HuggingFace', 'Agents', 'Prompt Engineering', 'Embeddings', 'FastAPI', 'FAISS', 'OpenAI API', 'Chroma DB'
      ],
      resolve: 'Me: "Okay. Deep breath. One concept at a time. Let\'s build."',
      tagline: 'Overwhelm is a phase. Determination is a trait.',
      reveal: [
        { label: 'Mindset', text: 'GenAI is enormous and messy. I didn\'t pretend otherwise. I looked at the chaos, acknowledged it, and built a system to tackle it anyway. That\'s not naive optimism — that\'s execution.' },
        { label: 'Strategy', text: 'I break massive domains into digestible chunks. Learn one concept → go deep → build something → move on.' },
        { label: 'Soft skill', text: 'I\'m comfortable with ambiguity. In real AI work, the problem space is always messy. I\'ve trained myself to stay structured inside the chaos.' },
      ],
    },
    {
      num: '3',
      title: 'The Builder Mindset Unlocked',
      vibe: 'The transformation',
      flow: [
        { phase: 'Phase 1', em: '🤯', text: '"I have absolutely no idea what I\'m doing or why this error exists."', dim: true },
        { phase: 'Phase 2', em: '🚀', text: '"I just shipped a real AI application. Users can actually use this."', dim: false },
      ],
      note: 'Every single project started as Phase 1. Every single one shipped as Phase 2.',
      tagline: 'From confusion to creation. That\'s the whole game.',
      reveal: [
        { label: 'Pattern', text: 'I\'ve been in Phase 1 many times. Staring at blank files, broken APIs, and error stacks. I stayed in the problem until I figured it out. That\'s not talent — that\'s discipline.' },
        { label: 'Track record', text: 'Talking Healthcare Bot, Clinic NL2SQL, TweetForge — all started as Phase 1 and shipped as Phase 2. This is a repeatable pattern.' },
        { label: 'For you', text: 'I don\'t give up when things get hard. Not as a motivational line — as a proven track record you can verify on my GitHub.' },
      ],
    },
  ];

  return (
    <section id="story" className="py-24 px-6 bg-bg-2/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-2 text-[10px] uppercase tracking-widest font-mono mb-6">
            02 · My Story in Memes
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tighter">
            Three truths I learned<br />the hard way
          </h2>
          <p className="text-text-soft max-w-2xl mx-auto">
            Honest snapshots of my journey. Because the best way to show who you are is to tell the truth — even when it's funny.
          </p>
        </div>

        <div className="grid gap-8">
          {memes.map((meme, i) => (
            <MemeCard key={i} meme={meme} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemeCard = ({ meme, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-bg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
    >
      <div className="p-6 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary-2 text-xs font-mono font-bold">
            {meme.num}
          </span>
          <h3 className="font-bold text-lg">{meme.title}</h3>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-text-muted font-mono hidden sm:block">{meme.vibe}</span>
      </div>

      <div className="p-8">
        {meme.vs && (
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="p-6 bg-white/5 rounded-2xl text-center border border-white/5">
              <span className="text-5xl block mb-4">{meme.vs.left.em}</span>
              <div className="text-[10px] uppercase text-text-muted font-mono mb-2">{meme.vs.left.who}</div>
              <div className="font-bold text-text-soft">{meme.vs.left.say}</div>
            </div>
            <div className="text-center text-primary font-black text-2xl italic">VS ➔</div>
            <div className="p-6 bg-primary/10 rounded-2xl text-center border border-primary/20">
              <span className="text-5xl block mb-4">{meme.vs.right.em}</span>
              <div className="text-[10px] uppercase text-text-muted font-mono mb-2">{meme.vs.right.who}</div>
              <div className="font-bold text-primary-2">{meme.vs.right.say}</div>
            </div>
          </div>
        )}

        {meme.chaos && (
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">😵‍💫</span>
              <span className="text-text-soft">Me on Day 1 of Generative AI. Topics in the syllabus:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {meme.chaos.map((item, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-soft text-xs font-mono">
                  {item}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-text font-bold">
              <span>💪</span> {meme.resolve}
            </div>
          </div>
        )}

        {meme.flow && (
          <div className="text-center">
            <div className="grid md:grid-cols-3 gap-6 items-center mb-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-4xl block mb-2">{meme.flow[0].em}</span>
                <div className="text-[10px] uppercase text-text-muted font-mono mb-1">{meme.flow[0].phase}</div>
                <div className="text-sm font-bold text-text-soft">{meme.flow[0].text}</div>
              </div>
              <div className="text-center text-primary font-black text-2xl italic">➔</div>
              <div className="p-6 bg-mint/10 rounded-2xl border border-mint/20">
                <span className="text-4xl block mb-2">{meme.flow[1].em}</span>
                <div className="text-[10px] uppercase text-text-muted font-mono mb-1">{meme.flow[1].phase}</div>
                <div className="text-sm font-bold text-mint">{meme.flow[1].text}</div>
              </div>
            </div>
            <p className="text-text-muted text-sm italic">{meme.note}</p>
          </div>
        )}
      </div>

      <div className="p-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs italic text-text-soft">{meme.tagline}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            isOpen ? 'bg-primary text-white' : 'bg-white/10 text-text hover:bg-white/20'
          }`}
        >
          {isOpen ? 'Close Insights ▴' : 'What this says about me ▾'}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="px-8 pb-8 pt-0"
        >
          <div className="space-y-4">
            {meme.reveal.map((item, idx) => (
              <div key={idx} className="grid md:grid-cols-4 gap-4 py-3 border-t border-white/5">
                <span className="text-primary-2 text-xs uppercase tracking-widest font-mono font-bold">{item.label}</span>
                <p className="md:col-span-3 text-sm text-text-soft leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MemeStory;
