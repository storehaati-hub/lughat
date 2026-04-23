import { UserProgress } from '../hooks/useProgress';
import { urduLessons, allWords } from '../data/urduData';
import { ViewState } from '../App';
import { Play, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface Props {
  progress: UserProgress;
  onNavigate: (view: ViewState) => void;
  onResetProgress: () => void;
}

export default function Dashboard({ progress, onNavigate, onResetProgress }: Props) {
  const totalLessons = urduLessons.length;
  const completedCount = progress.completedLessons.length;
  const totalWords = allWords.length;
  const masteredCount = progress.masteredWords.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100) || 0;
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="p-8 md:p-16 space-y-10 md:space-y-16"
      >
        <section className="flex justify-between items-start">
          <div>
             <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-4 opacity-60">Status Report</p>
             <h2 className="text-4xl md:text-6xl font-light leading-[0.9] tracking-tight italic">Welcome <br/>Back</h2>
          </div>
          <button
             onClick={() => setShowConfirm(true)}
             className="hidden md:flex p-3 border border-[#1A1A1A]/20 hover:border-red-500 hover:text-red-600 transition-colors rounded-full"
             title="Reset Level & XP"
          >
             <RotateCcw size={16} />
          </button>
        </section>

        <motion.section 
           initial={{ y: 20 }}
           animate={{ y: 0 }}
           transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
           className="bg-white border border-[#1A1A1A]/5 shadow-sm rounded-sm p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#FDFCF8] rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20 transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-4 md:mb-8 relative z-10">
            <div>
              <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest mb-2 md:mb-4">Learning Trajectory</p>
              <div className="text-4xl md:text-6xl font-light mb-6">{progressPercent}%</div>
              
              <button 
                onClick={() => onNavigate('lessons')}
                className="mt-4 md:mt-8 px-8 py-4 md:px-12 md:py-6 bg-[#1A1A1A] text-white font-sans text-xs uppercase tracking-[0.2em] font-bold transition-transform hover:scale-105 active:scale-95"
              >
                Resume Learning
              </button>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-4xl md:text-6xl font-light leading-none italic">{completedCount}</span>
               <span className="text-xl md:text-2xl opacity-50 mt-1 md:mt-2">/ {totalLessons}</span>
               <span className="font-sans text-[9px] uppercase tracking-widest opacity-50 mt-2 md:mt-4">Modules</span>
            </div>
          </div>
        </motion.section>

        <motion.section 
           initial={{ y: 20 }}
           animate={{ y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
           className="grid grid-cols-2 gap-4 md:gap-8"
        >
          <div className="bg-[#F7F6F2] p-6 md:p-10 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-colors">
            <div className="text-4xl md:text-6xl font-light mb-2 md:mb-4">{progress.level}</div>
            <div className="text-[9px] md:text-[11px] font-sans uppercase tracking-widest opacity-50">Current Level</div>
          </div>
          <div className="bg-[#F7F6F2] p-6 md:p-10 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-colors">
            <div className="text-4xl md:text-6xl font-light mb-2 md:mb-4 italic">{masteredCount}</div>
            <div className="text-[9px] md:text-[11px] font-sans uppercase tracking-widest opacity-50">Words Mastered</div>
          </div>
        </motion.section>
        
        <motion.section 
           initial={{ y: 20 }}
           animate={{ y: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
           className="aspect-video md:aspect-[2.5/1] w-full border border-[#1A1A1A]/10 p-6 md:p-10 flex flex-col justify-between group hover:border-[#1A1A1A]/20 transition-colors"
        >
           <h4 className="font-sans text-[9px] md:text-[11px] uppercase tracking-widest mb-6">Daily Progress</h4>
            <div className="flex-1 flex items-end gap-1 mb-6 md:mb-8 overflow-hidden">
              <div className="flex-1 bg-[#1A1A1A] transition-all duration-1000 ease-out" style={{ height: `${Math.max(2, Math.min(100, ((progress.xp % 120) / 120) * 100))}%` }}></div>
            </div>
            <p className="text-xs md:text-sm font-sans opacity-60 leading-relaxed md:w-2/3">
              You have earned <span className="text-[#1A1A1A] font-bold">{progress.xp % 120} / 120 XP</span> towards your next level. 
              Keep up the good work.
            </p>
        </motion.section>

        <motion.section
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="md:hidden flex justify-center pt-8 border-t border-[#1A1A1A]/10"
        >
          <button 
             onClick={() => setShowConfirm(true)}
             className="px-6 py-3 border border-[#1A1A1A]/20 text-[#1A1A1A]/60 font-sans text-xs uppercase tracking-widest hover:bg-red-50 hover:text-red-800 hover:border-red-200 transition-colors"
          >
            Reset Level & XP
          </button>
        </motion.section>
      </motion.div>

      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FDFCF8] p-8 md:p-12 border border-[#1A1A1A]/10 max-w-md w-full shadow-2xl relative"
            >
              <h3 className="text-2xl md:text-4xl font-light mb-4">Reset Progress?</h3>
              <p className="font-sans text-sm opacity-70 leading-relaxed mb-8">
                Are you sure you want to reset all progress? This will reset your Level, XP, completed lessons, and mastered words back to 0. This cannot be undone.
              </p>
              <div className="flex justify-end gap-2 md:gap-4 font-sans text-xs uppercase tracking-widest font-bold">
                <button 
                  onClick={() => setShowConfirm(false)} 
                  className="px-4 py-3 md:px-6 hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => { 
                    onResetProgress(); 
                    setShowConfirm(false); 
                  }} 
                  className="px-4 py-3 md:px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Confirm Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
