import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Globe, ArrowUpRight, Wifi } from 'lucide-react';

const mySocials = [
  { 
    name: "GitHub", 
    handle: "@JAWADGithub", 
    url: "https://github.com/jawadstalker", 
    icon: Github, 
    color: "hover:text-white",
    borderColor: "group-hover:border-white/50"
  },
  { 
    name: "Twitter", 
    handle: "JAWADTwitter", 
    url: "https://twitter.com/myTwitter", 
    icon: Twitter, 
    color: "hover:text-sky-400",
    borderColor: "group-hover:border-sky-400/50"
  },
  { 
    name: "LinkedIn", 
    handle: "JAWAD-in-Profile", 
    url: "https://www.linkedin.com/in/jawad-vafaee-586a19363/", 
    icon: Linkedin, 
    color: "hover:text-blue-500",
    borderColor: "group-hover:border-blue-500/50"
  },
  { 
    name: "Email", 
    handle: "jawadvamps@example.com", 
    url: "jawadvamps@example.com", 
    icon: Mail, 
    color: "hover:text-rose-400",
    borderColor: "group-hover:border-rose-400/50"
  },
  { 
    name: "Portfolio", 
    handle: "", 
    url: "https://mysite.com", 
    icon: Globe, 
    color: "hover:text-emerald-400",
    borderColor: "group-hover:border-emerald-400/50"
  }
];

const friendSocials = [
  { 
    name: "GitHub", 
    handle: "@REZAGithub", 
    url: "https://github.com/ThePsychof", 
    icon: Github, 
    color: "hover:text-white",
    borderColor: "group-hover:border-white/50"
  },
  { 
    name: "Twitter", 
    handle: "@REZATwitter", 
    url: "https://twitter.com/friendTwitter", 
    icon: Twitter, 
    color: "hover:text-sky-400",
    borderColor: "group-hover:border-sky-400/50"
  },
  { 
    name: "LinkedIn", 
    handle: "REZA-in-Profile", 
    url: "https://www.linkedin.com/in/thepsychof/", 
    icon: Linkedin, 
    color: "hover:text-blue-500",
    borderColor: "group-hover:border-blue-500/50"
  },
  { 
    name: "Email", 
    handle: "REZA@example.com", 
    url: "mailto:friend@example.com", 
    icon: Mail, 
    color: "hover:text-rose-400",
    borderColor: "group-hover:border-rose-400/50"
  },
  { 
    name: "Portfolio", 
    handle: "", 
    url: "https://friendSite.com", 
    icon: Globe, 
    color: "hover:text-emerald-400",
    borderColor: "group-hover:border-emerald-400/50"
  }
];

export const SocialVariant = () => {
  return (
    <div className="min-h-screen bg-[#050510] text-indigo-50 p-8 pt-24 pb-32 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050510] to-[#050510]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f11a_1px,transparent_1px),linear-gradient(to_bottom,#6366f11a_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >

        {/* Header */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping" />
            <Wifi className="w-8 h-8 text-indigo-400 relative z-10" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300">
            THE UPLINK
          </h1>

          <p className="text-indigo-300/50 mt-4 font-mono text-sm uppercase tracking-widest">
            Establishing Secure Connection...
          </p>
        </header>

        {/* === TWO COLUMN LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* COLUMN 1 - YOUR LINKS */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-indigo-200/80 tracking-wider uppercase">
              Jawad Networks
            </h2>

            <div className="space-y-4">
              {mySocials.map((social, i) => (
                <SocialCard key={social.name + "_me"} social={social} delay={i} direction="left" />
              ))}
            </div>
          </div>

          {/* COLUMN 2 - FRIEND LINKS */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-indigo-200/80 tracking-wider uppercase">
              Reza Networks
            </h2>

            <div className="space-y-4">
              {friendSocials.map((social, i) => (
                <SocialCard key={social.name + "_friend"} social={social} delay={i} direction="right" />
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

// --- Reusable Card Component ---
const SocialCard = ({ social, delay, direction }) => (
  <motion.a
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: delay * 0.1 }}
    className={`group relative flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${social.borderColor}`}
  >
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg bg-black/20 ${social.color} transition-colors`}>
        <social.icon className="w-6 h-6" />
      </div>

      <div>
        <div className="font-bold text-lg group-hover:text-white transition-colors">{social.name}</div>
        <div className="text-sm text-indigo-200/40 font-mono">{social.handle}</div>
      </div>
    </div>

    <ArrowUpRight className="w-5 h-5 text-indigo-200/20 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />

    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.a>
);
