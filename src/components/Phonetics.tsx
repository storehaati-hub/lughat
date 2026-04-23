import { useState } from 'react';
import { urduAlphabet, PhoneticLetter } from '../data/phoneticsData';
import { speakWord } from '../utils/speech';
import { Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Phonetics() {
  const [selectedLetter, setSelectedLetter] = useState<PhoneticLetter | null>(null);

  // Animation variants setup for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="p-8 md:p-16 space-y-12">
      <header>
        <h2 className="text-4xl md:text-6xl font-light leading-[0.9] tracking-tight italic">Phonetics</h2>
        <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] mt-4 opacity-60">Articulation Guide</p>
      </header>

      {/* Selected Letter Spotlight */}
      <AnimatePresence mode="wait">
        {selectedLetter ? (
          <motion.div 
            key={selectedLetter.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white border border-[#1A1A1A]/10 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start rounded-sm relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#FDFCF8] rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20 transition-transform duration-1000 group-hover:scale-150 opacity-50 pointer-events-none"></div>
            
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[#F7F6F2] border border-[#1A1A1A]/10 flex items-center justify-center text-6xl md:text-7xl text-[#1A1A1A] font-light z-10">
              {selectedLetter.letter}
            </div>
            
            <div className="flex-1 z-10 w-full text-center md:text-left">
              <div className="flex justify-center md:justify-between items-start mb-2 md:mb-4">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-0">{selectedLetter.name}</h3>
                <button 
                  onClick={() => speakWord(selectedLetter.letter, selectedLetter.name)}
                  className="hidden md:flex w-10 h-10 rounded-full border border-[#1A1A1A]/20 items-center justify-center transition hover:bg-[#1A1A1A] hover:text-white"
                >
                  <Volume2 size={16} />
                </button>
              </div>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-50 mb-4 md:mb-6">Sound: {selectedLetter.sound}</p>
              <p className="font-sans text-xs md:text-sm opacity-70 leading-relaxed max-w-sm mx-auto md:mx-0">
                {selectedLetter.description} <br/><br/>
                <span className="italic opacity-80">Example: {selectedLetter.example}</span>
              </p>

              <button 
                onClick={() => speakWord(selectedLetter.letter, selectedLetter.name)}
                className="md:hidden mt-6 mx-auto w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center transition hover:bg-[#1A1A1A] hover:text-white"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-[#1A1A1A]/10 p-12 shadow-sm rounded-sm text-center font-sans text-xs uppercase tracking-widest opacity-50"
          >
            Select a character to view articulation guide
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-6"
      >
        {urduAlphabet.map((char) => (
          <motion.button
            variants={itemVariants}
            key={char.id}
            onClick={() => {
              setSelectedLetter(char);
              speakWord(char.letter, char.name);
            }}
            className={`aspect-square flex flex-col justify-center items-center p-2 md:p-4 border transition-all duration-300 ${
              selectedLetter?.id === char.id 
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] scale-105 shadow-md z-10 relative' 
                : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/40 hover:bg-[#F7F6F2]'
            }`}
          >
            <span className="text-3xl md:text-4xl mb-2 font-light">{char.letter}</span>
            <span className={`font-sans text-[7px] md:text-[9px] uppercase tracking-widest ${selectedLetter?.id === char.id ? 'opacity-80' : 'opacity-40'}`}>
              {char.name}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
