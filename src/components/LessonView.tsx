import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Bookmark,
  Share2,
  BookOpen,
  Church,
  Scroll,
  HelpCircle,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  Check,
  Flame,
  Minus,
  Plus
} from 'lucide-react';
import { LessonSection, ModuleData } from '../types';

interface LessonViewProps {
  lesson: LessonSection;
  module: ModuleData;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleCompleted: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onNavigateLesson: (moduleId: string, lessonId: string) => void;
  onBackToModules: () => void;
  previousLesson?: { moduleId: string; lesson: LessonSection };
  nextLesson?: { moduleId: string; lesson: LessonSection };
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  module,
  isCompleted,
  isBookmarked,
  onToggleCompleted,
  onToggleBookmark,
  onNavigateLesson,
  onBackToModules,
  previousLesson,
  nextLesson,
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1); // 0 = small, 1 = normal, 2 = large
  const [copiedLink, setCopiedLink] = useState(false);

  const fontSizes = ['text-sm sm:text-base', 'text-base sm:text-lg', 'text-lg sm:text-xl'];
  const headingSizes = ['text-xl sm:text-2xl', 'text-2xl sm:text-3xl', 'text-3xl sm:text-4xl'];

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Estou estudando "${lesson.title}" no Curso sobre a Santa Missa:\n"${lesson.subtitle}"\n\nAprenda mais sobre a liturgia e a Eucaristia!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E7DFD5]">
        <button
          onClick={onBackToModules}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#5C1D2A] hover:text-[#40101B] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar ao {module.title}</span>
        </button>

        {/* Action icons: Font size, Bookmark, Share, Completion */}
        <div className="flex items-center gap-2">
          {/* Font Resizer */}
          <div className="flex items-center rounded-lg bg-white border border-[#D8CEBE] p-0.5">
            <button
              onClick={() => setFontSizeLevel((prev) => Math.max(0, prev - 1))}
              disabled={fontSizeLevel === 0}
              className="p-1 text-[#78716C] hover:text-[#1C1917] disabled:opacity-30"
              title="Diminuir texto"
              aria-label="Diminuir tamanho da fonte"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 text-[11px] font-mono text-[#57534E]">A</span>
            <button
              onClick={() => setFontSizeLevel((prev) => Math.min(2, prev + 1))}
              disabled={fontSizeLevel === 2}
              className="p-1 text-[#78716C] hover:text-[#1C1917] disabled:opacity-30"
              title="Aumentar texto"
              aria-label="Aumentar tamanho da fonte"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(lesson.id)}
            className={`p-2 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-[#F9F3DF] text-[#8F6A10] border-[#E5C158]'
                : 'bg-white text-[#78716C] border-[#D8CEBE] hover:text-[#5C1D2A]'
            }`}
            title={isBookmarked ? 'Remover dos favoritos' : 'Salvar aula para ler offline'}
            aria-label="Favoritar aula"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Share */}
          <button
            onClick={handleShareWhatsApp}
            className="p-2 rounded-lg bg-white border border-[#D8CEBE] text-[#78716C] hover:text-[#5C1D2A] transition-colors"
            title="Compartilhar no WhatsApp"
            aria-label="Compartilhar"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Mark Complete Button */}
          <button
            onClick={() => onToggleCompleted(lesson.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              isCompleted
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white text-[#5C1D2A] border-[#D8CEBE] hover:bg-[#F9F3DF]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-current" />
            <span>{isCompleted ? 'Concluída' : 'Marcar Concluída'}</span>
          </button>
        </div>
      </div>

      {/* Lesson Header */}
      <header className="py-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8F6A10] uppercase tracking-wider">
          <span>{module.title}</span>
          <span aria-hidden="true">·</span>
          <span>Aula {lesson.number}</span>
          <span aria-hidden="true">·</span>
          <span>{lesson.durationMinutes} min de leitura</span>
          {!lesson.isFullyDeveloped && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Guia Estrutural
              </span>
            </>
          )}
        </div>

        <h1 className={`font-serif font-bold text-[#5C1D2A] leading-tight ${headingSizes[fontSizeLevel]}`}>
          {lesson.title}
        </h1>

        <p className="text-sm sm:text-base text-[#78716C] font-serif italic">
          {lesson.subtitle}
        </p>

        {/* Latin key phrase card if available */}
        {lesson.latinPrayerOrKeyPhrase && (
          <div className="mt-4 p-4 rounded-xl bg-white border border-[#E7DFD5] shadow-xs">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8F6A10] block mb-1">
              Oração / Frase Litúrgica em Latim
            </span>
            <div className="font-serif italic text-sm sm:text-base text-[#1C1917]">
              "{lesson.latinPrayerOrKeyPhrase.latin}"
            </div>
            <div className="text-xs text-[#78716C] mt-1">
              Tradução: {lesson.latinPrayerOrKeyPhrase.portuguese}
            </div>
          </div>
        )}
      </header>

      {/* Mandatory 9 Pedagogical Sections */}
      <div className={`space-y-10 text-[#292524] leading-relaxed ${fontSizes[fontSizeLevel]}`}>
        {/* Section 1: Introdução */}
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
            <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
              1
            </span>
            <span>Introdução</span>
          </h2>
          <p className="text-[#332F2B] leading-relaxed">
            {lesson.intro}
          </p>
        </section>

        {/* Section 2: O que acontece neste momento da Missa? */}
        <section className="space-y-2 p-5 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs">
          <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
            <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
              2
            </span>
            <span>O que acontece neste momento da Missa?</span>
          </h2>
          <p className="text-[#44403C] leading-relaxed">
            {lesson.whatHappens}
          </p>
        </section>

        {/* Section 3: Significado litúrgico */}
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
            <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
              3
            </span>
            <span>Significado Litúrgico</span>
          </h2>
          <p className="text-[#332F2B] leading-relaxed">
            {lesson.liturgicalMeaning}
          </p>
        </section>

        {/* Section 4: Fundamentação bíblica */}
        <section className="space-y-3 p-5 rounded-2xl bg-[#F9F3DF]/60 border border-[#E5C158]/60">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
              <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
                4
              </span>
              <span>Fundamentação Bíblica</span>
            </h2>
            <span className="text-xs font-bold font-serif text-[#8F6A10]">
              {lesson.biblicalFoundation.reference}
            </span>
          </div>

          {lesson.biblicalFoundation.textExcerpt && (
            <blockquote className="border-l-2 border-[#C59B27] pl-3 py-1 font-serif italic text-sm text-[#44403C]">
              "{lesson.biblicalFoundation.textExcerpt}"
            </blockquote>
          )}

          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
            {lesson.biblicalFoundation.explanation}
          </p>
        </section>

        {/* Section 5: O que ensina a Igreja? */}
        <section className="space-y-3 p-5 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
              <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
                5
              </span>
              <span>O que ensina a Igreja?</span>
            </h2>
            <span className="text-xs text-[#78716C] font-medium">
              {lesson.churchTeaching.source} {lesson.churchTeaching.paragraphs}
            </span>
          </div>

          <p className="text-[#44403C] leading-relaxed text-sm sm:text-base">
            {lesson.churchTeaching.text}
          </p>

          {lesson.churchTeaching.documentUrl && (
            <a
              href={lesson.churchTeaching.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C1D2A] hover:underline pt-1"
            >
              <span>Consultar documento oficial no Vaticano</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </section>

        {/* Section 6: Gestos, símbolos e palavras */}
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
            <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
              6
            </span>
            <span>Gestos, Símbolos e Palavras</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {lesson.gesturesAndSymbols.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E7DFD5] space-y-1.5"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-[#5C1D2A]">
                  <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Por que isso é importante? */}
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5C1D2A] flex items-center gap-2">
            <span className="text-xs font-sans font-bold text-[#8F6A10] border border-[#E5C158] px-1.5 py-0.5 rounded">
              7
            </span>
            <span>Por que isso é importante?</span>
          </h2>
          <p className="text-[#332F2B] leading-relaxed">
            {lesson.practicalImportance}
          </p>
        </section>

        {/* Section 8: Para refletir */}
        <section className="p-5 rounded-2xl bg-[#FAF4ED] border border-[#D8CEBE] space-y-2">
          <div className="flex items-center gap-2 text-[#5C1D2A]">
            <HelpCircle className="w-5 h-5 text-[#8F6A10]" />
            <h2 className="font-serif font-bold text-base sm:text-lg">
              8. Para Refletir
            </h2>
          </div>
          <p className="font-serif italic text-base text-[#1C1917] leading-relaxed pl-7">
            "{lesson.reflectionQuestion}"
          </p>
        </section>

        {/* Development status note if needed */}
        {!lesson.isFullyDeveloped && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Nota da Formação:</strong> Esta aula apresenta a estrutura teológica e litúrgica essencial estabelecida pelo Missal Romano. Seus conteúdos continuam sendo enriquecidos com citações adicionais dos Santos Padres e do Magistério pontifício.
          </div>
        )}
      </div>

      {/* Section 9: Continue sua formação (Navigation & Next Lesson) */}
      <section className="mt-12 pt-8 border-t border-[#E7DFD5] space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-[#5C1D2A]">
            9. Continue sua Formação
          </h3>
          <button
            onClick={handleCopyLink}
            className="text-xs text-[#78716C] hover:text-[#5C1D2A] flex items-center gap-1"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link copiado!' : 'Copiar link desta aula'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Previous Lesson */}
          {previousLesson ? (
            <button
              onClick={() => onNavigateLesson(previousLesson.moduleId, previousLesson.lesson.id)}
              className="p-4 rounded-xl bg-white border border-[#E7DFD5] hover:border-[#C59B27] text-left transition flex items-start gap-3 group"
            >
              <ArrowLeft className="w-5 h-5 text-[#8F6A10] group-hover:-translate-x-1 transition-transform shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Aula Anterior
                </span>
                <span className="text-sm font-semibold text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors line-clamp-1">
                  {previousLesson.lesson.title}
                </span>
              </div>
            </button>
          ) : (
            <div className="p-4 rounded-xl border border-dashed border-[#E7DFD5] text-xs text-[#A8A29E] flex items-center justify-center">
              Primeira aula deste módulo
            </div>
          )}

          {/* Next Lesson */}
          {nextLesson ? (
            <button
              onClick={() => onNavigateLesson(nextLesson.moduleId, nextLesson.lesson.id)}
              className="p-4 rounded-xl bg-[#5C1D2A] text-white hover:bg-[#471520] text-left transition flex items-start justify-between gap-3 group shadow-xs"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#E5C158] block">
                  Próxima Aula
                </span>
                <span className="text-sm font-semibold line-clamp-1">
                  {nextLesson.lesson.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#E5C158] group-hover:translate-x-1 transition-transform shrink-0 mt-0.5" />
            </button>
          ) : (
            <button
              onClick={onBackToModules}
              className="p-4 rounded-xl bg-[#8F6A10] text-white hover:bg-[#78580E] text-left transition flex items-center justify-between group"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#FCEBA4] block">
                  Módulo Concluído
                </span>
                <span className="text-sm font-semibold">
                  Voltar à lista de módulos e fazer o teste
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FCEBA4]" />
            </button>
          )}
        </div>
      </section>
    </article>
  );
};
