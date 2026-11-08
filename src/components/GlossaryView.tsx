import React, { useState, useMemo } from 'react';
import { HelpCircle, Search, BookOpen, Layers } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { GlossaryTerm } from '../types';

export const GlossaryView: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('TODAS');
  const [selectedCategory, setSelectedCategory] = useState<string>('TODAS');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const alphabet = ['TODAS', ...Array.from(new Set(GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase()))).sort()];
  const categories = ['TODAS', 'Espaço Sagrado', 'Objetos Litúrgicos', 'Vestes', 'Partes da Missa', 'Ações e Gestos', 'Livros Litúrgicos'];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      const firstLetter = t.term[0].toUpperCase();
      const matchesLetter = selectedLetter === 'TODAS' || firstLetter === selectedLetter;
      const matchesCat = selectedCategory === 'TODAS' || t.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        (t.etymology && t.etymology.toLowerCase().includes(q)) ||
        t.simpleExplanation.toLowerCase().includes(q) ||
        t.theologicalExplanation.toLowerCase().includes(q);

      return matchesLetter && matchesCat && matchesSearch;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [selectedLetter, selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-200">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
          <HelpCircle className="w-4 h-4" />
          <span>Dicionário Litúrgico Ilustrado</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#5C1D2A]">
          Glossário dos Termos da Santa Missa
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] max-w-3xl leading-relaxed">
          Compreender a terminologia litúrgica aproxima o fiel do mistério. Explore o vocabulário sagrado da Igreja Católica, com explicações simples para o dia a dia e o aprofundamento teológico de cada símbolo.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#8F6A10] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar termo litúrgico (ex: Ambão, Cálice, Epiclese)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] text-xs sm:text-sm text-[#1C1917] placeholder-[#78716C] outline-none focus:border-[#C59B27]"
          />
        </div>

        {/* Alphabet Bar */}
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-xs text-[#78716C] mr-1 font-medium">Letra:</span>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-serif font-bold transition-colors ${
                selectedLetter === letter
                  ? 'bg-[#5C1D2A] text-white'
                  : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#E7DFD5]'
              }`}
            >
              {letter === 'TODAS' ? 'T' : letter}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#F4EFEB]">
          <span className="text-xs text-[#78716C] mr-1 self-center font-medium">Categoria:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#5C1D2A] text-white shadow-xs'
                  : 'bg-[#F4EFEB] text-[#57534E] hover:bg-[#E7DFD5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTerms.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl bg-white border border-[#E7DFD5] p-5 sm:p-6 space-y-3.5 shadow-xs hover:border-[#C59B27]/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F6A10] bg-[#F9F3DF] px-2.5 py-0.5 rounded-md">
                {t.category}
              </span>
              {t.etymology && (
                <span className="text-[11px] text-[#78716C] font-serif italic">
                  {t.etymology}
                </span>
              )}
            </div>

            <h3 className="font-serif font-bold text-xl text-[#5C1D2A]">
              {t.term}
            </h3>

            {/* Simple explanation */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] block">
                Significado Prático:
              </span>
              <p className="text-xs sm:text-sm text-[#292524] leading-relaxed">
                {t.simpleExplanation}
              </p>
            </div>

            {/* Theological explanation */}
            <div className="space-y-1 p-3 rounded-xl bg-[#FAF7F2] border border-[#E7DFD5]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F6A10] block">
                Significado Teológico:
              </span>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                {t.theologicalExplanation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="py-12 text-center text-[#78716C] bg-white rounded-2xl border border-[#E7DFD5]">
          <p className="text-sm">Nenhum termo encontrado para os critérios selecionados.</p>
        </div>
      )}
    </div>
  );
};
