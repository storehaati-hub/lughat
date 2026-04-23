import { useState } from 'react';
import { UserProgress } from '../hooks/useProgress';
import { allWords } from '../data/urduData';
import { speakWord } from '../utils/speech';
import { Search, Volume2, Star } from 'lucide-react';

interface Props {
  progress: UserProgress;
  onToggleWord: (id: string) => void;
}

export default function Vocabulary({ progress, onToggleWord }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const filteredWords = allWords.filter(word => {
    const matchesSearch = 
      word.english.toLowerCase().includes(searchTerm.toLowerCase()) || 
      word.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.urdu.includes(searchTerm);
      
    if (showSavedOnly) {
      return matchesSearch && progress.masteredWords.includes(word.id);
    }
    
    return matchesSearch;
  });

  return (
    <div className="p-8 md:p-16 space-y-12 md:space-y-16 flex flex-col h-full bg-[#FDFCF8] overflow-hidden">
      <header className="shrink-0">
        <h2 className="text-4xl md:text-6xl font-light leading-[0.9] tracking-tight italic">Lexicon</h2>
        <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] mt-4 opacity-60">Vocabulary Builder</p>
      </header>

      <div className="relative shrink-0">
        <input 
          type="text" 
          placeholder="Search translation or Urdu..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 pl-10 pr-4 text-sm md:text-base font-sans placeholder:uppercase placeholder:font-sans placeholder:tracking-widest placeholder:text-[10px] md:placeholder:text-[11px] focus:outline-none focus:border-[#1A1A1A] transition rounded-none"
        />
        <Search size={16} className="absolute left-2 top-4 md:top-5 text-[#1A1A1A]/40" />
      </div>
      
      <div className="flex gap-4 md:gap-8 border-b border-[#1A1A1A]/10 pb-4 shrink-0">
        <button 
          onClick={() => setShowSavedOnly(false)}
          className={`font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold pb-2 transition ${!showSavedOnly ? 'border-b border-[#1A1A1A] text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'}`}
        >
          All Words
        </button>
        <button 
          onClick={() => setShowSavedOnly(true)}
          className={`font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold pb-2 transition ${showSavedOnly ? 'border-b border-[#1A1A1A] text-[#1A1A1A]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'}`}
        >
          Saved Only
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 min-h-0 pr-4">
        {filteredWords.length === 0 ? (
          <div className="text-center font-sans text-xs uppercase tracking-widest text-[#1A1A1A]/40 py-12">No corresponding entries.</div>
        ) : (
          <ul className="space-y-6 md:space-y-8">
          {filteredWords.map(word => {
            const isSaved = progress.masteredWords.includes(word.id);
            return (
              <li key={word.id} className="flex flex-col md:flex-row md:items-baseline md:justify-between group border-b border-[#1A1A1A]/5 pb-6 hover:border-[#1A1A1A]/20 transition-colors">
                <div className="flex justify-between items-center md:block mb-4 md:mb-0">
                  <span className="text-4xl md:text-5xl pr-4 font-light text-right md:text-left flex-1" dir="rtl">{word.urdu}</span>
                </div>
                <div className="flex-1 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start md:pl-8 md:border-l border-[#1A1A1A]/10">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest opacity-80 font-bold mb-1">{word.english}</span>
                    <span className="font-light italic text-[#1A1A1A]/60 md:text-lg">{word.transliteration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:mt-4 md:pl-0">
                      <button 
                        onClick={() => speakWord(word.urdu, word.transliteration)}
                        className="w-10 h-10 md:w-8 md:h-8 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center transition hover:bg-[#1A1A1A] hover:text-white"
                      >
                        <Volume2 size={14} className="md:w-3 md:h-3" />
                      </button>
                      <button 
                        onClick={() => onToggleWord(word.id)}
                        className={`w-10 h-10 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition ${isSaved ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'border-[#1A1A1A]/20 hover:border-[#1A1A1A]'}`}
                      >
                        <Star size={14} className="md:w-3 md:h-3" fill={isSaved ? "currentColor" : "none"} />
                      </button>
                  </div>
                </div>
              </li>
            );
          })}
          </ul>
        )}
      </div>
    </div>
  );
}
