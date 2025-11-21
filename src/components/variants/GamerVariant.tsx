import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Sword, Zap } from 'lucide-react';

export const GamerVariant = () => {
  return (
    <div className="min-h-screen bg-[#0f0518] text-purple-50 p-8 pt-24 pb-32 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <header className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-purple-900/20 border border-purple-500/30 mb-6">
            <Gamepad2 className="w-12 h-12 text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            PLAYER_ONE
          </h1>
          <p className="text-xl mt-4 text-purple-200/60 uppercase tracking-widest">Level 99 Frontend Mage</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-purple-900/10 border border-purple-500/20 p-6 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6" /> Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-purple-800/50 pb-2">
                <span>Platinum Trophy</span>
                <span className="text-yellow-400 font-bold">100%</span>
              </li>
              <li className="flex justify-between items-center border-b border-purple-800/50 pb-2">
                <span>Hours Played</span>
                <span className="text-purple-300 font-mono">500</span>
              </li>
              <li className="flex justify-between items-center border-b border-purple-800/50 pb-2">
                <span>K/D Ratio</span>
                <span className="text-green-400 font-mono">2.45</span>
              </li>
            </ul>
          </motion.div>

          {/* Currently Playing */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-6 flex items-center gap-2">
              <Sword className="w-6 h-6" /> Currently Playing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Dota2", status: "Tank", type: "Online" },
                { name: "Hollow Knight", status: "Finish", type: "Metroidvania" },
                { name: "Darkwood", status: "Act 2", type: "RPG" },
                { name: "PES 2026", status: "Champions", type: "Football" }
              ].map((game) => (
                <div key={game.name} className="flex items-center justify-between bg-black/40 p-4 rounded-lg border border-purple-500/10 hover:border-purple-500/40 transition-colors">
                  <div>
                    <div className="font-bold text-white">{game.name}</div>
                    <div className="text-xs text-purple-400">{game.type}</div>
                  </div>
                  <div className="text-xs font-mono bg-purple-500/20 px-2 py-1 rounded text-purple-200">
                    {game.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-purple-300/40 text-sm uppercase tracking-widest">
          <Zap className="w-4 h-4" /> System Online // Ready Player One
        </div>
      </motion.div>
    </div>
  );
};
