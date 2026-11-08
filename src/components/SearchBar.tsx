import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, BookMarked, HelpCircle, ArrowRight } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { BIBLE_PASSAGES } from '../data/bibleData';
import { GLOSSARY_TERMS } from '../data/glossaryData';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  onNavigateToTab: (tab: 'bible' | 'documents' | 'glossary') => void;
}

export const SearchModal: React.FC<SearchBarProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
  onNavigateToTab,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      return { lessons: [], terms: [], bible: [] };
    }

    const matchedLessons: { moduleId: string; moduleTitle: string; lessonId: string; title: string; subtitle: string }[] = [];
    MODULES_DATA.forEach((mod) => {
      mod.lessons.forEach((l) => {
        if (
          l.title.toLowerCase().includes(q) ||
          l.subtitle.toLowerCase().includes(q) ||
          l.intro.toLowerCase().includes(q) ||
          l.liturgicalMeaning.toLowerCase().includes(q)
        ) {
          matchedLessons.push({
            moduleId: mod.id,
            moduleTitle: mod.title,
            lessonId: l.id,
            title: l.title,
            subtitle: l.subtitle,
          });
        }
      });
    });

    const matchedTerms = GLOSSARY_TERMS.filter(
      (term) =>
        term.term.toLowerCase().includes(q) ||
        term.simpleExplanation.toLowerCase().includes(q) ||
        term.theologicalExplanation.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedBible = BIBLE_PASSAGES.filter(
      (b) =>
        b.book.toLowerCase().includes(q) ||
        b.reference.toLowerCase().includes(q) ||
        b.theme.toLowerCase().includes(q) ||
        b.massRelation.toLowerCase().includes(q)
    ).slice(0, 4);

    return {
      lessons: matchedLessons.slice(0, 6),
      terms: matchedTerms,
      bible: matchedBible,
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    searchResults.lessons.length + searchResults.terms.length + searchResults.bible.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-2xl rounded-2xl bg-[#FAF7F2] shadow-2xl border border-[#D8CEBE] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#E7DFD5] bg-white">
          <Search className="w-5 h-5 text-[#8F6A10] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar momentos da Missa, termos litúrgicos, passagens bíblicas..."
            className="w-full bg-transparent text-[#1C1917] placeholder-[#78716C] text-sm sm:text-base outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#78716C] hover:text-[#1C1917] rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-[#5C1D2A] hover:bg-[#FAF7F2] rounded-md transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {query.trim().length < 2 && (
            <div className="py-8 text-center text-[#78716C]">
              <p className="text-sm">Digite ao menos duas letras para buscar em todo o acervo.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-xs">
                {['Transubstanciação', 'Ofertório', 'Ato Penitencial', 'Kyrie', 'Cálice', 'Epiclese'].map((sug) => (
                  <button
                    key={sug}
                    onClick={() => setQuery(sug)}
                    className="px-2.5 py-1 rounded-full bg-white border border-[#E7DFD5] hover:border-[#C59B27] text-[#5C1D2A] transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim().length >= 2 && totalResults === 0 && (
            <div className="py-8 text-center text-[#78716C]">
              <p className="text-sm">Nenhum resultado encontrado para "{query}".</p>
              <p className="text-xs text-[#A8A29E] mt-1">Experimente outros termos como "Eucaristia", "Altar" ou "Glória".</p>
            </div>
          )}

          {/* Lessons */}
          {searchResults.lessons.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6A10] mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Aulas do Curso ({searchResults.lessons.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.lessons.map((item) => (
                  <button
                    key={item.lessonId}
                    onClick={() => {
                      onSelectLesson(item.moduleId, item.lessonId);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F9F3DF]/60 border border-[#E7DFD5] transition flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs text-[#78716C]">{item.moduleTitle}</div>
                      <div className="text-sm font-semibold text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#57534E] line-clamp-1">{item.subtitle}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#5C1D2A] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Glossary Terms */}
          {searchResults.terms.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8F6A10] mb-2">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Termos do Glossário ({searchResults.terms.length})</span>
                </div>
                <button
                  onClick={() => {
                    onNavigateToTab('glossary');
                    onClose();
                  }}
                  className="text-xs text-[#5C1D2A] hover:underline"
                >
                  Ver todo o glossário
                </button>
              </div>
              <div className="space-y-1.5">
                {searchResults.terms.map((term) => (
                  <div
                    key={term.id}
                    className="p-3 rounded-xl bg-white border border-[#E7DFD5] hover:border-[#C59B27]/60 transition"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-[#5C1D2A]">{term.term}</span>
                      <span className="text-xs text-[#78716C]">· {term.category}</span>
                    </div>
                    <p className="text-xs text-[#44403C] mt-1 leading-relaxed">
                      {term.simpleExplanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bible References */}
          {searchResults.bible.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8F6A10] mb-2">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-3.5 h-3.5" />
                  <span>Referências Bíblicas ({searchResults.bible.length})</span>
                </div>
                <button
                  onClick={() => {
                    onNavigateToTab('bible');
                    onClose();
                  }}
                  className="text-xs text-[#5C1D2A] hover:underline"
                >
                  Ver toda a Bíblia
                </button>
              </div>
              <div className="space-y-1.5">
                {searchResults.bible.map((b) => (
                  <div
                    key={b.id}
                    className="p-3 rounded-xl bg-white border border-[#E7DFD5]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#5C1D2A]">{b.reference}</span>
                      <span className="text-xs text-[#78716C]">{b.theme}</span>
                    </div>
                    <p className="text-xs text-[#44403C] mt-1 line-clamp-2">
                      {b.massRelation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
