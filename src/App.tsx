import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DimensionSwitcher, VariantType } from './components/DimensionSwitcher';
import { HomeVariant } from './components/variants/HomeVariant';
import { DevVariant } from './components/variants/DevVariant';
import { GamerVariant } from './components/variants/GamerVariant';
import { WriterVariant } from './components/variants/WriterVariant';
import { FootballVariant } from './components/variants/FootballVariant';
import { SocialVariant } from './components/variants/SocialVariant';

function App() {
  const [currentVariant, setCurrentVariant] = useState<VariantType>('home');

  const renderVariant = () => {
    switch (currentVariant) {
      case 'home': return <HomeVariant />;
      case 'dev': return <DevVariant />;
      case 'gamer': return <GamerVariant />;
      case 'writer': return <WriterVariant />;
      case 'football': return <FootballVariant />;
      case 'social': return <SocialVariant />;
      default: return <HomeVariant />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVariant}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.4 }}
        >
          {renderVariant()}
        </motion.div>
      </AnimatePresence>

      <DimensionSwitcher 
        currentVariant={currentVariant} 
        setVariant={setCurrentVariant} 
      />
    </div>
  );
}

export default App;
