import React from 'react';
import { Heart, Sparkles, BookOpen, RotateCcw } from 'lucide-react';
import { APP_CONFIG } from '../data/modulesData';

interface FooterProps {
  onNavigate: (tab: 'home' | 'modules' | 'bible' | 'documents' | 'glossary' | 'progress') => void;
  onResetProgress: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onResetProgress }) => {
  return (
    <footer className="mt-20 bg-[#F4EFEB] border-t border-[#E7DFD5] text-[#44403C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#5C1D2A] text-[#E5C158] flex items-center justify-center font-serif text-sm font-bold">
                †
              </span>
              <span className="font-serif font-bold text-lg text-[#5C1D2A]">
                {APP_CONFIG.provisionalName}
              </span>
            </div>
            <p className="text-xs text-[#78716C] leading-relaxed max-w-md">
              {APP_CONFIG.subheading}
            </p>
            <p className="text-[11px] text-[#A8A29E] leading-relaxed max-w-md">
              {APP_CONFIG.authorNote}
            </p>
            <div className="pt-2 text-xs font-serif italic text-[#8F6A10]">
              "Adoremus in aeternum Sanctissimum Sacramentum."
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5C1D2A]">
              Formação & Conteúdo
            </h4>
            <ul className="space-y-1.5 text-xs text-[#57534E]">
              <li>
                <button
                  onClick={() => onNavigate('modules')}
                  className="hover:text-[#5C1D2A] transition-colors"
                >
                  7 Módulos de Estudo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bible')}
                  className="hover:text-[#5C1D2A] transition-colors"
                >
                  Fundamentação Bíblica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-[#5C1D2A] transition-colors"
                >
                  Documentos da Igreja (Vaticano)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glossary')}
                  className="hover:text-[#5C1D2A] transition-colors"
                >
                  Glossário Litúrgico A-Z
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Storage & Preferences */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5C1D2A]">
              Dispositivo & Progresso
            </h4>
            <p className="text-[11px] text-[#78716C] leading-relaxed">
              Os dados de aulas concluídas e notas de questionários ficam salvos diretamente no navegador deste aparelho (sem necessidade de cadastro).
            </p>
            <div className="pt-2">
              <button
                onClick={onResetProgress}
                className="inline-flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#5C1D2A] transition-colors border border-[#D8CEBE] rounded-lg px-2.5 py-1.5 bg-white hover:bg-[#FAF7F2]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Progresso</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78716C]">
          <span>
            {APP_CONFIG.provisionalName} · Plataforma Católica PWA
          </span>
          <div className="flex items-center gap-2">
            <span>Para maior glória de Deus</span>
            <span>·</span>
            <span>Omnia in Bonum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
