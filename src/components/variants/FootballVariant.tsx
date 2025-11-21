import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Flag, Activity } from 'lucide-react';

interface Player {
  name: string;
  number: number;
  img: string;
  isGK?: boolean;
}

const dreamTeam = {
  attackers: [
    { name: "Neymar", number: 14, img: "https://images.fotmob.com/image_resources/playerimages/19533.png" },
    { name: "Ronaldo", number: 9, img: "https://images.fotmob.com/image_resources/playerimages/30893.png" },
    { name: "Messi", number: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcZXJsunJO2BdHiEAZWZwUHdAw4ZDiCHfyg&s" },
  ],
  midfielders: [
    { name: "Zidane", number: 5, img: "https://images.fotmob.com/image_resources/playerimages/38422.png" },
    { name: "Pirlo", number: 21, img: "https://images.fotmob.com/image_resources/playerimages/1174702.png" },
    { name: "Iniesta", number: 8, img: "https://images.fotmob.com/image_resources/playerimages/30955.png" },
  ],
  defenders: [
    { name: "R. Carlos", number: 3, img: "https://images.fotmob.com/image_resources/playerimages/30659.png" },
    { name: "J.Terry", number: 3, img: "https://images.fotmob.com/image_resources/playerimages/30627.png" },
    { name: "Ramos", number: 4, img: "https://images.fotmob.com/image_resources/playerimages/30962.png" },
    { name: "Dani Alves", number: 2, img: "https://images.fotmob.com/image_resources/playerimages/33988.png" },
  ],
  gk: { name: "Buffon", number: 1, img: "https://images.fotmob.com/image_resources/playerimages/30717.png", isGK: true }
};

export const FootballVariant = () => {
  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50 p-8 pt-24 pb-32 relative overflow-hidden font-sans">
      {/* Pitch Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#022c22_100%)]" />
      
      {/* Center Circle Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-emerald-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500/20 rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <header className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-emerald-900/40 border border-emerald-500/30 mb-6 backdrop-blur-sm">
            <Trophy className="w-12 h-12 text-emerald-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-400 drop-shadow-lg">
            The Regista
          </h1>
          <p className="text-xl mt-4 text-emerald-200/60 font-medium tracking-widest">
            Orchestrating play from the deep.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Stats */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" /> Season Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-emerald-800/50 pb-2">
                  <span className="text-emerald-100/80">Matches Watched</span>
                  <span className="font-mono text-xl font-bold">142</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-800/50 pb-2">
                  <span className="text-emerald-100/80">Stadiums Visited</span>
                  <span className="font-mono text-xl font-bold">12</span>
                </div>
                <div className="flex justify-between items-center border-b border-emerald-800/50 pb-2">
                  <span className="text-emerald-100/80">Fantasy Rank</span>
                  <span className="font-mono text-xl font-bold text-yellow-400">Top 1%</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <Flag className="w-5 h-5" /> Allegiance
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-900 font-black text-2xl shadow-lg">
                  FC
                </div>
                <div>
                  <div className="font-bold text-lg">The Invincibles</div>
                  <div className="text-sm text-emerald-400">Since 2004</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center/Right: Dream XI / Tactical Board */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-emerald-800/30 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden min-h-[500px]"
          >
            {/* Tactical Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
               <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full" />
               <div className="absolute top-[10%] bottom-[10%] left-0 w-32 border-r border-y border-white" />
               <div className="absolute top-[10%] bottom-[10%] right-0 w-32 border-l border-y border-white" />
            </div>

            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5" /> All-Time XI
              </h3>
              <span className="text-xs font-mono bg-emerald-950/50 px-2 py-1 rounded text-emerald-400 border border-emerald-500/30">
                4-3-3 ATTACK
              </span>
            </div>

            {/* Formation Grid */}
            <div className="relative h-[600px] w-full flex flex-col justify-between py-4 px-2 md:px-8 z-10">
              {/* Forwards */}
              <div className="flex justify-around items-center">
                {dreamTeam.attackers.map(p => <PlayerBadge key={p.name} player={p} />)}
              </div>
              
              {/* Midfield */}
              <div className="flex justify-around items-center px-8 md:px-12">
                <PlayerBadge player={dreamTeam.midfielders[0]} />
                <PlayerBadge player={dreamTeam.midfielders[2]} />
              </div>
              <div className="flex justify-center items-center -mt-8">
                 <PlayerBadge player={dreamTeam.midfielders[1]} />
              </div>

              {/* Defense */}
              <div className="flex justify-between items-center mt-4">
                {dreamTeam.defenders.map(p => <PlayerBadge key={p.name} player={p} />)}
              </div>
{/* Coaches */}
<div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border-2 border-blue-400 bg-emerald-900 flex items-center justify-center shadow-lg">
  <span className="text-xs font-bold text-blue-300">Coach Jawad</span>
</div>

<div className="absolute bottom-4 right-4 w-20 h-20 rounded-full border-2 border-red-400 bg-emerald-900 flex items-center justify-center shadow-lg">
  <span className="text-xs font-bold text-red-300">Coach Reza</span>
</div>


              {/* GK */}
              <div className="flex justify-center mt-4">
                <PlayerBadge player={dreamTeam.gk} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const PlayerBadge = ({ player }: { player: Player }) => (
  <motion.div 
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex flex-col items-center gap-2 group cursor-pointer relative"
  >
    <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 ${player.isGK ? 'border-yellow-500' : 'border-emerald-400'} shadow-lg overflow-hidden bg-emerald-900`}>
      <img 
        src={player.img} 
        alt={player.name} 
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      {/* Number Badge */}
      <div className={`absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded-full ${player.isGK ? 'bg-yellow-500 text-black' : 'bg-white text-emerald-900'} shadow-sm z-10`}>
        {player.number}
      </div>
    </div>
    
    <span className="text-[10px] md:text-xs font-bold text-emerald-100 bg-emerald-950/80 px-2 py-0.5 rounded shadow-sm backdrop-blur-sm border border-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
      {player.name}
    </span>
  </motion.div>
);
