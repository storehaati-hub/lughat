/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BookOpen, Trophy, Library, Star, Flame, Settings, Mic, Menu, X } from 'lucide-react';
import { useProgress } from './hooks/useProgress';
import Dashboard from './components/Dashboard';
import LessonList from './components/LessonList';
import LessonSession from './components/LessonSession';
import QuizSession from './components/QuizSession';
import MatchingSession from './components/MatchingSession';
import Vocabulary from './components/Vocabulary';
import Phonetics from './components/Phonetics';
import { urduLessons } from './data/urduData';
import { motion, AnimatePresence } from 'motion/react';

export type ViewState = 'dashboard' | 'lessons' | 'lesson' | 'quiz' | 'match' | 'vocabulary' | 'phonetics';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { progress, addXP, markLessonCompleted, toggleWordMastered, resetProgress } = useProgress();

  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => { 
      window.removeEventListener('online', handleOnline); 
      window.removeEventListener('offline', handleOffline); 
    };
  }, []);

  const handleLessonSelect = (id: string) => {
    setSelectedLessonId(id);
    setCurrentView('lesson');
  };

  const startQuiz = (id: string) => {
    setSelectedLessonId(id);
    setCurrentView('quiz');
  };

  const startMatch = (id: string) => {
    setSelectedLessonId(id);
    setCurrentView('match');
  };

  const navItems = [
    { id: 'dashboard' as ViewState, label: 'Home' },
    { id: 'lessons' as ViewState, label: 'Learn' },
    { id: 'phonetics' as ViewState, label: 'Sounds' },
    { id: 'vocabulary' as ViewState, label: 'Vocab' },
  ];

  return (
    <div className="h-screen w-full bg-[#FDFCF8] text-[#1A1A1A] font-serif selection:bg-[#1A1A1A] selection:text-white flex flex-col overflow-hidden relative">
      
      {/* Offline Indicator fixed at top absolute */}
      <AnimatePresence>
        {isOffline && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="absolute top-0 left-0 right-0 bg-[#1A1A1A] text-white p-2 text-center z-[70] font-sans text-[9px] uppercase tracking-widest font-bold"
          >
            Offline Mode Active (Progress saves locally)
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <header className="w-full shrink-0 border-b border-[#1A1A1A]/10 flex items-center justify-between p-4 md:p-6 bg-[#FDFCF8] z-30 relative">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 md:p-3 border border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 rounded-sm transition-colors text-[#1A1A1A]"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase relative top-[-1px]">Lughat</h1>
        </div>
        <div className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-40">
          {navItems.find(i => i.id === currentView)?.label || 'Learn'}
        </div>
      </header>

      {/* Sidebar overlay & drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-[#1A1A1A]/10 backdrop-blur-sm z-50"
            />

            {/* Sidebar content */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-[85vw] max-w-[320px] bg-[#FDFCF8] z-[60] border-r border-[#1A1A1A]/10 shadow-2xl flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex flex-col items-start gap-1">
                  <h1 className="text-4xl font-black tracking-tighter uppercase">Lughat</h1>
                  <span className="text-[10px] font-sans tracking-widest uppercase opacity-50">Urdu Mastery</span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-[#1A1A1A]/5 rounded-full transition-colors -mr-2 -mt-2 text-[#1A1A1A]"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-center gap-6 border-b border-[#1A1A1A]/10 pb-4">
                  <span className="text-4xl md:text-5xl font-light leading-none italic">{progress.level}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest opacity-50">Level</span>
                </div>
                <div className="flex items-center gap-6 border-b border-[#1A1A1A]/10 pb-4">
                  <span className="text-4xl md:text-5xl font-light leading-none">{progress.xp}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest opacity-50">XP</span>
                </div>
              </div>

              <nav className="flex flex-col w-full space-y-6">
                {navItems.map((item) => {
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentView(item.id);
                        if (item.id !== 'lesson' && item.id !== 'quiz' && item.id !== 'match') {
                          setSelectedLessonId(null);
                        }
                        setIsSidebarOpen(false);
                      }}
                      className={`flex text-left transition-all duration-200 group ${
                        isActive ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/80'
                      }`}
                    >
                      <span className={`font-sans text-[13px] uppercase tracking-[0.2em] font-bold transform transition-transform group-hover:translate-x-2 ${isActive ? 'border-b border-[#1A1A1A] pb-1 translate-x-2' : ''}`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-auto pt-16 text-[10px] font-sans uppercase tracking-[0.2em] opacity-40 leading-relaxed">
                {isOffline ? 'Offline Mode Active' : 'Online • Synced'} <br/><br/> © Lughat Lab
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative w-full pt-safe">
         <div className="max-w-4xl mx-auto w-full min-h-full flex flex-col p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex-1 flex flex-col"
              >
                {currentView === 'dashboard' && (
                   <Dashboard 
                     progress={progress} 
                     onNavigate={(view) => setCurrentView(view)} 
                     onResetProgress={resetProgress}
                   />
                )}
                {currentView === 'lessons' && (
                   <LessonList 
                     progress={progress} 
                     onSelectLesson={handleLessonSelect}
                     onQuizLesson={startQuiz}
                     onMatchLesson={startMatch}
                   />
                )}
                {currentView === 'phonetics' && (
                   <Phonetics />
                )}
                {currentView === 'vocabulary' && (
                   <Vocabulary progress={progress} onToggleWord={toggleWordMastered} />
                )}
                {currentView === 'lesson' && selectedLessonId && (
                   <LessonSession 
                     lessonId={selectedLessonId} 
                     onComplete={() => {
                       markLessonCompleted(selectedLessonId);
                       addXP(20);
                       setCurrentView('lessons');
                     }}
                     onBack={() => setCurrentView('lessons')}
                   />
                )}
                {currentView === 'quiz' && selectedLessonId && (
                   <QuizSession 
                     lessonId={selectedLessonId} 
                     onComplete={(score, maxScore) => {
                       if (score === maxScore) {
                         addXP(50);
                       } else {
                         addXP(score * 10);
                       }
                       setCurrentView('lessons');
                     }}
                     onBack={() => setCurrentView('lessons')}
                   />
                )}
                {currentView === 'match' && selectedLessonId && (
                   <MatchingSession 
                     lessonId={selectedLessonId} 
                     onComplete={(xpEarned) => {
                       addXP(xpEarned);
                       setCurrentView('lessons');
                     }}
                     onBack={() => setCurrentView('lessons')}
                   />
                )}
              </motion.div>
            </AnimatePresence>
         </div>
      </main>
    </div>
  );
}
