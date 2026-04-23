import { useState, useMemo } from 'react';
import { urduLessons, allWords, Word } from '../data/urduData';
import { speakWord } from '../utils/speech';
import { Volume2, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  lessonId: string;
  onComplete: (score: number, maxScore: number) => void;
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

export default function QuizSession({ lessonId, onComplete, onBack }: Props) {
  const lesson = urduLessons.find(l => l.id === lessonId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  if (!lesson) return null;
  const questions = lesson.words;

  // Generate options memoized for current question
  const currentOptions = useMemo(() => {
    const currentWord = questions[currentIndex];
    if (!currentWord) return [];
    
    // Pick 3 random distractor words from all vocabulary
    const distractors = allWords.filter(w => w.id !== currentWord.id);
    const randomDistractors = shuffle(distractors).slice(0, 3);
    
    // Mix current word with distractors
    return shuffle([currentWord, ...randomDistractors]);
  }, [currentIndex, questions]);

  if (currentIndex >= questions.length) {
    return null; // Will trigger onComplete soon or handle loading state
  }

  const currentWord = questions[currentIndex];
  const progressPercent = (currentIndex / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    if (selectedAnswer !== null) return; // Prevent changing answer
    
    setSelectedAnswer(optionId);
    
    const correct = optionId === currentWord.id;
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
      // Let's play a happy ding maybe, or just speak the word
      speakWord(currentWord.urdu, currentWord.transliteration);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      onComplete(score + (isCorrect ? 1 : 0), questions.length);
    }
  };

  const getOptionClass = (optionId: string) => {
    if (selectedAnswer === null) {
      return "border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A]";
    }
    if (optionId === currentWord.id) {
      return "bg-[#1A1A1A] border-[#1A1A1A] text-white";
    }
    if (optionId === selectedAnswer && optionId !== currentWord.id) {
      return "bg-red-50 border-red-500 text-red-800";
    }
    return "border-[#1A1A1A]/5 opacity-30 text-[#1A1A1A]";
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
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col">
          <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-4 opacity-60">Examination</p>
          <h2 className="text-4xl md:text-5xl font-light leading-[0.9] tracking-tight italic mb-8">Identify the <br/>Translation</h2>
          
          <div className="bg-white p-10 flex flex-col items-center justify-center border border-[#1A1A1A]/5 shadow-sm rounded-sm mb-12 relative">
             <button 
               onClick={() => speakWord(currentWord.urdu, currentWord.transliteration)}
               className="absolute top-6 right-6 w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
             >
               <Volume2 size={18} />
             </button>
             <div className="text-6xl md:text-7xl font-light text-[#1A1A1A] leading-[0.9] tracking-tight mb-4 text-center" dir="rtl">
               {currentWord.urdu}
             </div>
             <p className="text-xl md:text-2xl font-light italic opacity-70">
               {currentWord.transliteration}
             </p>
          </div>

          <div className="space-y-4">
            {currentOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full text-left p-6 md:p-8 border transition-all font-sans text-sm md:text-base uppercase tracking-widest font-bold ${getOptionClass(option.id)}`}
              >
                {option.english}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Result Area */}
        <AnimatePresence>
          {selectedAnswer && (
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`p-8 pb-safe border-t border-[#1A1A1A]/10 flex flex-col space-y-6 ${
                isCorrect ? 'bg-white' : 'bg-red-50'
              }`}
            >
              <div className={`flex flex-col mb-4`}>
                <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-50">Result</p>
                <span className={`text-4xl md:text-5xl font-light italic ${isCorrect ? 'text-[#1A1A1A]' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct.' : 'Incorrect.'}
                </span>
              </div>
              
              {!isCorrect && (
                <div className="font-sans text-xs md:text-sm uppercase tracking-widest text-[#1A1A1A] mb-4">
                  The answer was: <span className="font-bold">{currentWord.english}</span>
                </div>
              )}
              
              <button 
                onClick={handleNext}
                className={`w-full py-5 md:py-6 font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-center transition-all shadow-sm ${
                  isCorrect ? 'bg-[#1A1A1A] text-white hover:bg-black' : 'bg-red-800 text-white hover:bg-red-900'
                }`}
              >
                <span>{currentIndex === questions.length - 1 ? 'Finish Exam' : 'Next Question'}</span>
                <ArrowRight size={18} className="ml-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
