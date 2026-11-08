import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeTab: 'home' | 'modules' | 'bible' | 'documents' | 'glossary' | 'progress';
  onNavigate: (tab: 'home' | 'modules' | 'bible' | 'documents' | 'glossary' | 'progress') => void;
  onOpenSearch: () => void;
  progressPercentage: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  progressPercentage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'modules' | 'bible' | 'documents' | 'glossary'; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'modules', label: 'Módulos' },
    { id: 'bible', label: 'Escrituras' },
    { id: 'documents', label: 'Documentos' },
    { id: 'glossary', label: 'Glossário' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5] transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 sm:gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 group focus:outline-hidden"
          >
            <div className="w-8 h-8 rounded-lg bg-[#5C1D2A] text-[#E5C158] flex items-center justify-center font-serif text-lg font-bold shadow-xs group-hover:scale-105 transition-transform">
              †
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#5C1D2A] tracking-tight group-hover:text-[#40101B] transition-colors leading-none">
                Santa Missa
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8F6A10] font-sans font-medium">
                Formação Católica
              </span>
            </div>
          </button>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#44403C]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  activeTab === item.id
                    ? 'text-[#5C1D2A] font-semibold'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59B27] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action area */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#57534E] hover:text-[#5C1D2A] hover:bg-[#F4EFEB] rounded-lg transition-colors"
              title="Pesquisar no curso (Ctrl+K)"
              aria-label="Abrir busca"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* PWA Install Button */}
            <div className="hidden sm:block">
              <PWAInstallButton compact />
            </div>

            {/* Progress CTA */}
            <button
              onClick={() => onNavigate('progress')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'progress'
                  ? 'bg-[#5C1D2A] text-white border-[#5C1D2A]'
                  : 'bg-white border-[#D8CEBE] text-[#5C1D2A] hover:bg-[#F9F3DF]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#C59B27]" />
              <span className="hidden sm:inline">Progresso:</span>
              <span className="font-mono tabular-nums text-xs font-bold text-[#8F6A10]">
                {progressPercentage}%
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[#57534E] hover:text-[#1C1917] rounded-lg"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-xs pt-16 animate-in fade-in">
          <div className="bg-[#FAF7F2] border-b border-[#E7DFD5] p-5 shadow-xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#5C1D2A] text-white'
                      : 'text-[#44403C] hover:bg-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('progress');
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left font-medium transition-colors ${
                  activeTab === 'progress'
                    ? 'bg-[#5C1D2A] text-white'
                    : 'text-[#44403C] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C59B27]" />
                  <span>Meu Progresso de Aprendizagem</span>
                </div>
                <span className="font-mono text-xs font-bold text-[#C59B27] bg-[#5C1D2A]/10 px-2 py-0.5 rounded">
                  {progressPercentage}%
                </span>
              </button>
            </div>

            <div className="pt-3 border-t border-[#E7DFD5] flex justify-between items-center">
              <PWAInstallButton />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex items-center gap-1.5 text-xs text-[#5C1D2A] font-medium p-2"
              >
                <Search className="w-4 h-4" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
