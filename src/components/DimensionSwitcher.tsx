import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Gamepad2, BookOpen, Trophy, Globe2, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

export type VariantType = 'home' | 'dev' | 'gamer' | 'writer' | 'football' | 'social';

interface DimensionSwitcherProps {
  currentVariant: VariantType;
  setVariant: (variant: VariantType) => void;
}

const variants = [
  { id: 'home', icon: Globe2, label: 'Prime', color: 'text-yellow-400' },
  { id: 'dev', icon: Code2, label: 'Dev_Ops', color: 'text-cyan-400' },
  { id: 'gamer', icon: Gamepad2, label: 'Player_1', color: 'text-purple-500' },
  { id: 'writer', icon: BookOpen, label: 'Author', color: 'text-amber-600' },
  { id: 'football', icon: Trophy, label: 'The_Regista', color: 'text-emerald-400' },
  { id: 'social', icon: Share2, label: 'Uplink', color: 'text-indigo-400' },
] as const;

export const DimensionSwitcher: React.FC<DimensionSwitcherProps> = ({ currentVariant, setVariant }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full p-2 flex gap-1 md:gap-2 shadow-2xl shadow-blue-900/20 overflow-x-auto no-scrollbar max-w-full">
        {variants.map((variant) => {
          const isActive = currentVariant === variant.id;
          const Icon = variant.icon;
          
          return (
            <button
              key={variant.id}
              onClick={() => setVariant(variant.id as VariantType)}
              className={cn(
                "relative group p-3 rounded-full transition-all duration-300 ease-out flex-shrink-0",
                isActive ? "bg-slate-800" : "hover:bg-slate-800/50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDimension"
                  className="absolute inset-0 bg-slate-700 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className={cn("w-5 h-5 transition-colors", isActive ? variant.color : "text-slate-400 group-hover:text-slate-200")} />
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className={cn("text-sm font-bold whitespace-nowrap overflow-hidden hidden md:block", variant.color)}
                  >
                    {variant.label}
                  </motion.span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
