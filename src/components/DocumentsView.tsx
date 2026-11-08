import React, { useState, useMemo } from 'react';
import { Scroll, ExternalLink, Search, Church, Filter } from 'lucide-react';
import { CHURCH_DOCUMENTS } from '../data/documentsData';

export const DocumentsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['TODOS', 'Catecismo', 'Concílio', 'Instrução Litúrgica', 'Encíclica', 'Direito Canônico', 'Carta Apostólica'];

  const filteredDocs = useMemo(() => {
    return CHURCH_DOCUMENTS.filter((doc) => {
      const matchesCat = selectedCategory === 'TODOS' || doc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        (doc.latinTitle && doc.latinTitle.toLowerCase().includes(q)) ||
        doc.promulgator.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.keyParagraphs.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-200">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
          <Church className="w-4 h-4" />
          <span>Biblioteca do Magistério Católico</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#5C1D2A]">
          Documentos Oficiais da Igreja
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] max-w-3xl leading-relaxed">
          Toda a catequese sobre a Santa Missa brota da fidelidade aos ensinamentos oficiais dos Sumos Pontífices, dos Concílios Ecumênicos e das Congregações Romanas. Consulte os textos integrais diretamente no portal oficial da Santa Sé (Vatican.va).
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3 p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8F6A10] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por documento, papa ou parágrafos..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] text-xs sm:text-sm text-[#1C1917] placeholder-[#78716C] outline-none focus:border-[#C59B27]"
            />
          </div>

          <span className="text-xs text-[#78716C] font-mono tabular-nums">
            {filteredDocs.length} documentos disponíveis
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
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

      {/* Documents List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="rounded-2xl bg-white border border-[#E7DFD5] p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#C59B27]/60 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F6A10] bg-[#F9F3DF] px-2.5 py-0.5 rounded-md">
                  {doc.category}
                </span>
                <span className="text-xs font-mono text-[#78716C]">
                  Ano {doc.year}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#5C1D2A]">
                  {doc.title}
                </h3>
                {doc.latinTitle && (
                  <p className="text-xs text-[#78716C] font-serif italic mt-0.5">
                    {doc.latinTitle}
                  </p>
                )}
                <p className="text-xs font-medium text-[#44403C] mt-1">
                  Promulgado por: {doc.promulgator}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                {doc.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-[#F4EFEB]">
                <div className="text-xs text-[#57534E]">
                  <strong className="text-[#1C1917]">Importância para a formação: </strong>
                  {doc.importance}
                </div>

                <div className="text-xs text-[#57534E] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E7DFD5]">
                  <strong className="text-[#8F6A10]">Parágrafos essenciais: </strong>
                  <span className="font-mono text-xs">{doc.keyParagraphs}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7DFD5]">
              <a
                href={doc.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C1D2A] hover:underline"
              >
                <span>Acessar texto integral no {doc.sourceLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
