import { useState, useEffect, useMemo } from 'react';
import { urduLessons } from '../data/urduData';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  lessonId: string;
  onComplete: (score: number) => void;
  onBack: () => void;
}

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface Card {
  id: string; // unique card id 'en-wordId' or 'ur-wordId'
  wordId: string;
  type: 'en' | 'ur';
  content: string;
  isMatched: boolean;
}

export default function MatchingSession({ lessonId, onComplete, onBack }: Props) {
  const lesson = urduLessons.find(l => l.id === lessonId);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  useEffect(() => {
    if (!lesson) return;
    
    // Pick up to 5 words for a manageable grid (10 cards)
    const selectedWords = shuffle(lesson.words).slice(0, 5);
    
    // Generate pair of cards for each
    const generatedCards: Card[] = [];
    selectedWords.forEach(w => {
      generatedCards.push({ id: `en-${w.id}`, wordId: w.id, type: 'en', content: w.english, isMatched: false });
      generatedCards.push({ id: `ur-${w.id}`, wordId: w.id, type: 'ur', content: w.urdu, isMatched: false });
    });
    
    setCards(shuffle(generatedCards));
  }, [lesson]);

  const handleCardClick = (card: Card) => {
    if (card.isMatched || selectedCards.length === 2 || selectedCards.includes(card.id)) return;
    
    const newSelected = [...selectedCards, card.id];
    setSelectedCards(newSelected);
    
    if (newSelected.length === 2) {
      setMoves(m => m + 1);
      const card1 = cards.find(c => c.id === newSelected[0]);
      const card2 = cards.find(c => c.id === newSelected[1]);
      
      if (card1 && card2 && card1.wordId === card2.wordId && card1.type !== card2.type) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.wordId === card1.wordId ? { ...c, isMatched: true } : c
          ));
          setSelectedCards([]);
          setMatchedPairs(p => p + 1);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  const isComplete = matchedPairs > 0 && matchedPairs === cards.length / 2;

  if (!lesson) return null;

  return (
    <div className="absolute inset-0 bg-[#FDFCF8] z-50 flex flex-col pt-safe">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col h-full relative">
        <div className="flex items-center p-6 border-b border-[#1A1A1A]/10">
          <button onClick={onBack} className="p-2 -ml-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition">
            <X size={24} />
          </button>
          <div className="flex-1 mx-6 h-1 bg-[#1A1A1A]/10 overflow-hidden">
             <div 
               className="h-full bg-[#1A1A1A] transition-all duration-300 ease-out" 
               style={{ width: `${(matchedPairs / (cards.length / 2)) * 100 || 0}%` }} 
             />
          </div>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1A1A1A]">{moves} Moves</span>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col justify-center">
          <div className="mb-10 text-center md:pb-8">
              <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-4 opacity-60">Exercise</p>
              <h2 className="text-4xl md:text-5xl font-light leading-[0.9] tracking-tight italic">Find the <br/>Matches</h2>
          </div>

          <motion.div 
             className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
             initial="hidden"
             animate="show"
             variants={{
               hidden: { opacity: 0 },
               show: { opacity: 1, transition: { staggerChildren: 0.1 } }
             }}
          >
            {cards.map((card) => {
              const isSelected = selectedCards.includes(card.id);
              return (
                <motion.button
                  key={card.id}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCardClick(card)}
                  className={`p-6 border flex items-center justify-center min-h-[100px] md:min-h-[120px] text-center transition-all duration-300 ${
                    card.isMatched 
                      ? 'bg-transparent border-[#1A1A1A]/10 text-transparent pointer-events-none' 
                      : isSelected
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-md'
                        : 'bg-white border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A] hover:shadow-sm'
                  }`}
                >
                  <span className={`${card.type === 'ur' ? 'text-4xl md:text-5xl font-light' : 'text-sm md:text-base font-sans uppercase font-bold tracking-widest'}`}>
                    {card.content}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <AnimatePresence>
          {isComplete && (
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`p-8 pb-safe border-t border-[#1A1A1A]/10 flex flex-col space-y-6 bg-white shrink-0`}
            >
              <div className={`flex flex-col mb-4`}>
                <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-50">Excellent</p>
                <span className={`text-4xl md:text-5xl font-light italic text-[#1A1A1A]`}>
                  Exercise Complete
                </span>
              </div>
              
              <button 
                onClick={() => onComplete(50)} // 50 XP for matching game
                className={`w-full py-5 md:py-6 font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-center transition-all shadow-sm bg-[#1A1A1A] text-white hover:bg-black`}
              >
                <span>Return to Modules</span>
                <ArrowRight size={18} className="ml-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
