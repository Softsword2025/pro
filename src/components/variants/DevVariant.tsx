import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layers, GitBranch, ExternalLink } from 'lucide-react';

const projects = [
  { title: "Sport News", desc: "A Simple React App For Sport News.", stack: ["React", "Tailwind", "Sport"], url: "https://sport-news-blush-nine.vercel.app/" },
  { title: "Book world", desc: "Common WEB site for reading and buying book", stack: ["HTML", "CSS", "JS"], url: "https://jawadstalker.github.io/Bookworld/test" },
  { title: "Fantasy Book Notifier", desc: "This site helps you gather some information from book web site.", stack: ["Python", "Flask", "HTML", "WEB scrapping"], url: "https://github.com/jawadstalker/FantasyBookNotifier" },
];

export const DevVariant = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 p-8 pt-24 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <header className="mb-16 border-b border-cyan-900/50 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <Terminal className="w-10 h-10 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-cyan-400">
              DEV_OPS <span className="text-slate-600 text-2xl font-mono">v.2.0.25</span>
            </h1>
          </div>
          <p className="text-xl text-cyan-200/70 max-w-2xl font-mono">
            Architecting digital realities. Obsessed with clean code, performance, and pixel-perfect implementation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-cyan-400" /> Tech Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'TypeScript', 'UI/UX', 'Tailwind CSS', 'Python', 'JS'].map((tech, i) => (
                <motion.div 
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cyan-950/30 border border-cyan-900/50 p-4 rounded-lg hover:bg-cyan-900/30 transition-colors"
                >
                  <span className="font-mono text-cyan-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Layers className="text-cyan-400" /> Recent Deployments
            </h2>
            <div className="space-y-4">
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="group block bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-slate-400 mb-4">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.stack.map(s => (
                      <span key={s} className="text-xs bg-slate-800 text-cyan-200/60 px-2 py-1 rounded border border-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-cyan-950/20 border border-cyan-900/30 rounded-lg font-mono text-sm text-cyan-300/80">
          <div className="flex items-center gap-2 mb-2 text-cyan-500">
            <GitBranch className="w-4 h-4" />
            <span>git status</span>
          </div>
          <p>On branch main</p>
          <p>Your branch is up to date with 'origin/main'.</p>
          <p className="mt-2">nothing to commit, working tree clean</p>
        </div>
      </motion.div>
    </div>
  );
};
