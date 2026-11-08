import React, { useState, useMemo } from 'react';
import { BookMarked, Search, ExternalLink, Filter, Sparkles, BookOpen } from 'lucide-react';
import { BIBLE_PASSAGES } from '../data/bibleData';

export const BibleView: React.FC = () => {
  const [filterTestament, setFilterTestament] = useState<'ALL' | 'AT' | 'NT'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPassages = useMemo(() => {
    return BIBLE_PASSAGES.filter((p) => {
      const matchesTestament = filterTestament === 'ALL' || p.testament === filterTestament;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.book.toLowerCase().includes(q) ||
        p.reference.toLowerCase().includes(q) ||
        p.theme.toLowerCase().includes(q) ||
        p.context.toLowerCase().includes(q) ||
        p.massRelation.toLowerCase().includes(q);
      return matchesTestament && matchesSearch;
    });
  }, [filterTestament, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-200">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
          <BookMarked className="w-4 h-4" />
          <span>Fundamentação Bíblica da Eucaristia</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#5C1D2A]">
          A Sagrada Escritura na Santa Missa
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] max-w-3xl leading-relaxed">
          Cada palavra, oração e ação da Santa Missa está enraizada nas Sagradas Escrituras. Conheça as passagens proféticas do Antigo Testamento e a consumação no Novo Testamento, consultando sempre em fontes católicas autênticas.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs">
        {/* Testament Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-[#F4EFEB] rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setFilterTestament('ALL')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filterTestament === 'ALL'
                ? 'bg-white text-[#5C1D2A] shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Todas ({BIBLE_PASSAGES.length})
          </button>
          <button
            onClick={() => setFilterTestament('AT')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filterTestament === 'AT'
                ? 'bg-white text-[#5C1D2A] shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Antigo Testamento ({BIBLE_PASSAGES.filter((p) => p.testament === 'AT').length})
          </button>
          <button
            onClick={() => setFilterTestament('NT')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              filterTestament === 'NT'
                ? 'bg-white text-[#5C1D2A] shadow-xs'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Novo Testamento ({BIBLE_PASSAGES.filter((p) => p.testament === 'NT').length})
          </button>
        </div>

        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#8F6A10] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por livro, versículo ou tema eucarístico..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] text-xs sm:text-sm text-[#1C1917] placeholder-[#78716C] outline-none focus:border-[#C59B27]"
          />
        </div>
      </div>

      {/* Passages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPassages.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl bg-white border border-[#E7DFD5] p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#C59B27]/60 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F6A10] bg-[#F9F3DF] px-2.5 py-0.5 rounded-md">
                  {p.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}
                </span>
                <span className="font-serif font-bold text-base text-[#5C1D2A]">
                  {p.reference}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                  {p.theme}
                </h3>
                <span className="text-xs text-[#78716C] font-serif italic">
                  Livro de {p.book}
                </span>
              </div>

              {p.quote && (
                <blockquote className="border-l-2 border-[#C59B27] pl-3 py-1 font-serif italic text-xs sm:text-sm text-[#44403C] bg-[#FAF7F2]/60 rounded-r-lg">
                  "{p.quote}"
                </blockquote>
              )}

              {/* Context */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] block">
                  Contexto Bíblico:
                </span>
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  {p.context}
                </p>
              </div>

              {/* Relation to the Mass */}
              <div className="space-y-1 pt-1 border-t border-[#F4EFEB]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C1D2A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Relação com a Santa Missa:</span>
                </span>
                <p className="text-xs sm:text-sm text-[#332F2B] leading-relaxed">
                  {p.massRelation}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7DFD5]">
              <a
                href={p.catholicSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C1D2A] hover:underline"
              >
                <span>Consultar passagem na Bíblia da CNBB</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredPassages.length === 0 && (
        <div className="py-12 text-center text-[#78716C] bg-white rounded-2xl border border-[#E7DFD5]">
          <p className="text-sm">Nenhuma passagem bíblica encontrada com os critérios informados.</p>
        </div>
      )}
    </div>
  );
};
