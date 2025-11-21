import React from 'react';
import { motion } from 'framer-motion';

export const HomeVariant = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black -z-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10" />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
          Earth-616 // Prime Dimension
        </h2>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 tracking-tighter drop-shadow-2xl mb-6">
          INVINCIBLE
          <br />
          <span className="text-white text-4xl md:text-6xl block mt-2">VARIANTS</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Welcome to the nexus. We are a multidimensional entity: <span className="text-cyan-400">Frontend Developer</span>, <span className="text-purple-400">Gamer</span>, <span className="text-amber-500">Writer</span>, and <span className="text-emerald-400">Football Fanatic</span>.
        </p>
        <p className= "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          <span className="text-red-600">Jawad +</span>
          <span className="text-blue-400"> Reza</span>
        </p>

        <div className="mt-12 animate-bounce text-slate-500 text-sm">
          Select a dimension below to traverse
        </div>
      </motion.div>
    </div>
  );
};
