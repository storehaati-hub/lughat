import { useState } from 'react';
import { urduLessons } from '../data/urduData';
import { speakWord } from '../utils/speech';
import { Volume2, ArrowRight, ArrowLeft, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  lessonId: string;
  onComplete: () => void;
  onBack: () => void;
}

export default function LessonSession({ lessonId, onComplete, onBack }: Props) {
  const lesson = urduLessons.find(l => l.id === lessonId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!lesson) return null;

  const words = lesson.words;
  const currentWord = words[currentIndex];
  const progressPercent = ((currentIndex + 1) / words.length) * 100;

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(curr => curr + 1);
      setFlipped(false);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(curr => curr - 1);
      setFlipped(false);
    }
  };

  const handleSpeak = (e: any) => {
    e.stopPropagation();
    speakWord(currentWord.urdu, currentWord.transliteration);
  };

  return (
    <div className="absolute inset-0 bg-[#FDFCF8] z-50 flex flex-col pt-safe">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col h-full relative">
        {/* Top Bar */}
        <div className="flex items-center p-6 border-b border-[#1A1A1A]/10">
          <button onClick={onBack} className="p-2 -ml-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition">
            <X size={24} />
          </button>
          <div className="flex-1 mx-6 h-1 bg-[#1A1A1A]/10 overflow-hidden">
            <div 
              className="h-full bg-[#1A1A1A] transition-all duration-300 ease-out" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1A1A1A]/40">{currentIndex + 1} / {words.length}</span>
        </div>

        {/* Main Flashcard */}
        <div className="flex-1 px-8 flex flex-col justify-center items-center pb-20 mt-12 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-sm shrink-0 aspect-[3/4] md:aspect-[4/5] perspective-1000 relative"
              onClick={() => setFlipped(!flipped)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d cursor-pointer"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Front: Urdu */}
                <div className="absolute w-full h-full backface-hidden bg-white p-10 flex flex-col justify-center items-center text-center shadow-sm border border-[#1A1A1A]/5 rounded-sm">
                  <button 
                    onClick={handleSpeak}
                    className="absolute top-8 right-8 w-12 h-12 border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
                  >
                    <Volume2 size={20} />
                  </button>
                  <div className="text-7xl md:text-8xl font-light text-[#1A1A1A] leading-[0.9] tracking-tight mt-8 break-words text-right w-full" dir="rtl">
                    {currentWord.urdu}
                  </div>
                  <div className="text-[#1A1A1A]/40 mt-12 text-[9px] uppercase tracking-widest font-sans font-bold">
                    Tap to translate
                  </div>
                </div>

                {/* Back: English & Transliteration */}
                <div className="absolute w-full h-full backface-hidden bg-[#1A1A1A] text-white p-10 flex flex-col justify-between items-start shadow-sm rounded-sm"
                     style={{ transform: 'rotateY(180deg)' }}>
                  <div className="w-full">
                     <p className="font-sans text-[10px] uppercase tracking-widest mb-1 opacity-50">Translation</p>
                     <div className="text-4xl md:text-5xl font-light leading-none mb-6">{currentWord.english}</div>
                     
                     <p className="font-sans text-[10px] uppercase tracking-widest mb-1 mt-8 opacity-50">Phonetic</p>
                     <div className="text-2xl md:text-3xl font-light italic text-white/70">{currentWord.transliteration}</div>
                  </div>
                  
                  <div className="text-white/40 text-[9px] uppercase tracking-widest font-sans font-bold self-center">
                    Tap to return
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls */}
        <div className="p-8 bg-[#FDFCF8] border-t border-[#1A1A1A]/10 flex justify-between items-center z-30 pb-safe">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-14 h-14 flex flex-col items-center justify-center outline-none transition ${
              currentIndex === 0 ? 'text-[#1A1A1A]/20' : 'text-[#1A1A1A] hover:opacity-60'
            }`}
          >
            <ArrowLeft size={24} />
            <span className="text-[8px] font-sans uppercase tracking-widest mt-1">Prev</span>
          </button>
          
          <button 
            onClick={handleNext}
            className="bg-[#1A1A1A] text-white px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] font-bold outline-none flex items-center gap-4 transition hover:bg-black"
          >
            <span>{currentIndex === words.length - 1 ? "Complete" : "Continue"}</span>
            {currentIndex === words.length - 1 ? <Check size={18} /> : <ArrowRight size={18} />}
          </button>
        </div>
      </div>
      
      {/* Add CSS for 3D card flips scoped somewhat here if needed, but Tailwind doesn't have standard 3d transform utils out of box */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}} />
    </div>
  );
}
