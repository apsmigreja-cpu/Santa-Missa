import React, { useState } from 'react';
import { Download, Smartphone, X, Share2, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed as standalone PWA, hide install affordances
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`flex items-center gap-2 rounded-lg bg-[#5C1D2A] text-white font-medium hover:bg-[#471520] transition-colors shadow-sm ${
          compact ? 'px-2.5 py-1.5 text-xs' : 'px-3.5 py-2 text-sm'
        }`}
        title="Instalar aplicativo no seu dispositivo"
      >
        <Download className="w-4 h-4 text-[#E5C158]" />
        <span>Instalar App</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-2 rounded-lg border border-[#D8CEBE] bg-[#F4EFEB] text-[#5C1D2A] font-medium hover:bg-[#ECE4DC] transition-colors ${
            compact ? 'px-2.5 py-1.5 text-xs' : 'px-3.5 py-2 text-sm'
          }`}
          title="Como instalar no iPhone ou iPad"
        >
          <Smartphone className="w-4 h-4 text-[#C59B27]" />
          <span>Instalar no iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-md rounded-2xl bg-[#FAF7F2] p-6 shadow-2xl border border-[#D8CEBE] text-[#1C1917]">
              <div className="flex items-center justify-between pb-3 border-b border-[#E7DFD5]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#5C1D2A] flex items-center justify-center text-[#E5C158] font-serif font-bold text-base">
                    †
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#5C1D2A]">Instalar no iPhone / iPad</h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 text-[#78716C] hover:text-[#1C1917] rounded-md"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-[#44403C]">
                <p>
                  Para adicionar o <strong>Curso sobre a Santa Missa</strong> à sua tela de início sem precisar da App Store:
                </p>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E7DFD5]">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#5C1D2A] shrink-0">
                    <Share2 className="w-5 h-5 text-[#5C1D2A]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1917]">1. Toque no botão Compartilhar</span>
                    <p className="text-xs text-[#78716C] mt-0.5">Localizado na barra inferior do navegador Safari (o quadrado com uma seta para cima).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E7DFD5]">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#5C1D2A] shrink-0">
                    <PlusSquare className="w-5 h-5 text-[#5C1D2A]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1917]">2. Selecione "Adicionar à Tela de Início"</span>
                    <p className="text-xs text-[#78716C] mt-0.5">Role o menu para baixo e toque nesta opção com o ícone de cruz (+).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F9F3DF] border border-[#E5C158]/50">
                  <span className="text-xs text-[#8F6A10]">
                    O aplicativo funcionará em tela cheia como um app nativo, com carregamento rápido e acesso a aulas mesmo sem internet!
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-[#5C1D2A] py-2.5 text-sm font-semibold text-white hover:bg-[#471520] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
