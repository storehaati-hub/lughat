import { urduLessons } from '../data/urduData';
import { UserProgress } from '../hooks/useProgress';
import { CheckCircle, PlayCircle, HelpCircle } from 'lucide-react';

interface Props {
  progress: UserProgress;
  onSelectLesson: (id: string) => void;
  onQuizLesson: (id: string) => void;
  onMatchLesson: (id: string) => void;
}

export default function LessonList({ progress, onSelectLesson, onQuizLesson, onMatchLesson }: Props) {
  return (
    <div className="p-8 md:p-16 space-y-12 md:space-y-16">
      <header className="mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-light leading-[0.9] tracking-tight italic">Modules</h2>
        <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] mt-4 opacity-60">Curriculum Syllabus</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {urduLessons.map((lesson, index) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          const isLocked = index > 0 && !progress.completedLessons.includes(urduLessons[index - 1].id);

          return (
            <div 
              key={lesson.id} 
              className={`bg-white border p-6 md:p-10 transition-shadow ${
                isLocked ? 'opacity-50 border-[#1A1A1A]/5 bg-gray-50' : 'border-[#1A1A1A]/10 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                   <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest mb-2 opacity-50">Module 0{index + 1}</p>
                   <h3 className="text-3xl md:text-4xl tracking-tight leading-tight">{lesson.title}</h3>
                </div>
                <div className={`text-[10px] uppercase tracking-widest font-sans font-bold flex flex-col items-end ${
                    isCompleted ? 'text-green-800' : 'text-[#1A1A1A]'
                  }`}>
                  {isCompleted ? <span className="opacity-70 bg-[#1A1A1A] text-white px-3 py-1">Completed</span> : <span className="opacity-40">{lesson.words.length} items</span>}
                </div>
              </div>
              <p className="text-sm md:text-base font-sans opacity-60 mb-8 md:mb-12 max-w-xl">{lesson.description}</p>
              
              {!isLocked && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
                  <button 
                    onClick={() => onSelectLesson(lesson.id)}
                    className="p-4 md:p-6 lg:col-span-2 border border-[#1A1A1A] text-left hover:bg-[#1A1A1A] hover:text-white group flex flex-col outline-none w-full transition-all duration-300"
                  >
                    <span className="text-[9px] uppercase tracking-tighter opacity-50 group-hover:text-white/60">Study</span>
                    <span className="text-sm md:text-base font-bold uppercase mt-1">Start Lesson</span>
                  </button>
                  <button 
                    onClick={() => onQuizLesson(lesson.id)}
                    disabled={!isCompleted}
                    className={`p-4 md:p-6 border text-left flex flex-col w-full outline-none transition-all duration-300 ${
                      isCompleted 
                        ? 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white group' 
                        : 'border-[#1A1A1A]/10 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-tighter opacity-50 group-hover:text-white/60">Exam</span>
                    <span className="text-sm md:text-base font-bold uppercase mt-1">Take Quiz</span>
                  </button>
                  <button 
                    onClick={() => onMatchLesson(lesson.id)}
                    disabled={!isCompleted}
                    className={`p-4 md:p-6 border text-left flex flex-col w-full outline-none transition-all duration-300 ${
                      isCompleted 
                        ? 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-neutral-100 group' 
                        : 'border-[#1A1A1A]/10 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-tighter opacity-50">Exercise</span>
                    <span className="text-sm md:text-base font-bold uppercase mt-1">Matching</span>
                  </button>
                </div>
              )}
              {isLocked && (
                <div className="text-[9px] font-bold opacity-40 uppercase tracking-widest font-sans p-4 border border-[#1A1A1A]/10 text-center">
                  Complete previous to unlock
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
