import React from 'react';
import {
  GraduationCap,
  Award,
  Bookmark,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { UserProgress } from '../types';

interface ProgressViewProps {
  progress: UserProgress;
  totalLessons: number;
  completedCount: number;
  progressPercentage: number;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  onNavigateToModules: () => void;
  onResetProgress: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  progress,
  totalLessons,
  completedCount,
  progressPercentage,
  onSelectLesson,
  onNavigateToModules,
  onResetProgress,
}) => {
  // Find bookmarked lesson objects
  const bookmarkedLessonItems: { moduleId: string; moduleTitle: string; lesson: any }[] = [];
  MODULES_DATA.forEach((mod) => {
    mod.lessons.forEach((l) => {
      if (progress.bookmarkedLessons.includes(l.id)) {
        bookmarkedLessonItems.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          lesson: l,
        });
      }
    });
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-200">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
          <GraduationCap className="w-4 h-4" />
          <span>Área de Aprendizagem & Memória Local</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#5C1D2A]">
          Meu Progresso na Formação
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed">
          Acompanhe seu avanço em cada módulo da celebração eucarística. Todo o seu histórico é guardado diretamente na memória deste dispositivo.
        </p>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1: Percentage */}
        <div className="p-6 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
            Aproveitamento Geral
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-serif font-bold text-[#5C1D2A] tabular-nums">
              {progressPercentage}%
            </span>
            <span className="text-xs text-[#78716C]">do curso dominado</span>
          </div>
          <div className="w-full bg-[#E7DFD5] h-2 rounded-full overflow-hidden mt-2">
            <div
              className="bg-[#C59B27] h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Card 2: Lessons count */}
        <div className="p-6 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
            Aulas Concluídas
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-serif font-bold text-[#8F6A10] tabular-nums">
              {completedCount}
            </span>
            <span className="text-xs text-[#78716C]">de {totalLessons} aulas totais</span>
          </div>
          <p className="text-xs text-[#A8A29E] mt-2">
            {totalLessons - completedCount} aulas restantes para a conclusão integral.
          </p>
        </div>

        {/* Card 3: Quizzes */}
        <div className="p-6 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
            Questionários Realizados
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-serif font-bold text-[#1C1917] tabular-nums">
              {Object.keys(progress.quizScores).length}
            </span>
            <span className="text-xs text-[#78716C]">de 7 módulos</span>
          </div>
          <p className="text-xs text-[#A8A29E] mt-2">
            Testes de fixação doutrinária com gabarito comentado.
          </p>
        </div>
      </div>

      {/* Bookmarked / Saved for Offline Reading */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-[#8F6A10]" />
          <h2 className="font-serif font-bold text-xl text-[#5C1D2A]">
            Aulas Favoritas & Salvas Offline ({bookmarkedLessonItems.length})
          </h2>
        </div>

        {bookmarkedLessonItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookmarkedLessonItems.map((item) => (
              <button
                key={item.lesson.id}
                onClick={() => onSelectLesson(item.moduleId, item.lesson.id)}
                className="p-4 rounded-xl bg-white border border-[#E7DFD5] hover:border-[#C59B27] text-left transition flex items-center justify-between group shadow-xs"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8F6A10] font-semibold block">
                    {item.moduleTitle}
                  </span>
                  <span className="text-sm font-semibold text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors line-clamp-1">
                    {item.lesson.title}
                  </span>
                  <span className="text-xs text-[#78716C] line-clamp-1">
                    {item.lesson.subtitle}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#5C1D2A] group-hover:translate-x-1 transition shrink-0 ml-2" />
              </button>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-white border border-dashed border-[#D8CEBE] text-center text-[#78716C]">
            <p className="text-xs sm:text-sm">
              Você ainda não favoritou nenhuma aula. Toque no ícone de marcador dentro de qualquer aula para salvá-la aqui para acesso imediato.
            </p>
          </div>
        )}
      </div>

      {/* Quiz Scores Record */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#8F6A10]" />
          <h2 className="font-serif font-bold text-xl text-[#5C1D2A]">
            Resultados dos Questionários de Fixação
          </h2>
        </div>

        {Object.keys(progress.quizScores).length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(progress.quizScores).map(([modId, res]) => {
              const mod = MODULES_DATA.find((m) => m.id === modId);
              return (
                <div
                  key={modId}
                  className="p-4 rounded-xl bg-white border border-[#E7DFD5] flex items-center justify-between shadow-xs"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#1C1917]">
                      {mod ? mod.title : modId}
                    </h3>
                    <span className="text-xs text-[#78716C]">
                      Realizado em {new Date(res.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-lg text-[#5C1D2A] tabular-nums">
                      {res.score} / {res.total}
                    </span>
                    <span className="block text-[11px] text-[#8F6A10] font-mono">
                      {Math.round((res.score / res.total) * 100)}% acertos
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-white border border-dashed border-[#D8CEBE] text-center text-[#78716C]">
            <p className="text-xs sm:text-sm">
              Nenhum questionário respondido até o momento. Acesse a área de Módulos para testar seu conhecimento!
            </p>
          </div>
        )}
      </div>

      {/* Progress by Module Breakdown */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-xl text-[#5C1D2A]">
          Detalhamento por Módulo
        </h2>
        <div className="space-y-3">
          {MODULES_DATA.map((mod) => {
            const completedInMod = mod.lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
            const pct = Math.round((completedInMod / mod.lessons.length) * 100);

            return (
              <div
                key={mod.id}
                className="p-4 rounded-xl bg-white border border-[#E7DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-[#8F6A10] uppercase tracking-wider">
                    Módulo {mod.number}
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">
                    {mod.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 sm:w-40 bg-[#E7DFD5] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#5C1D2A] h-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#5C1D2A] w-12 text-right tabular-nums">
                    {completedInMod}/{mod.lessons.length}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset progress */}
      <div className="pt-6 border-t border-[#E7DFD5] flex items-center justify-between">
        <button
          onClick={onNavigateToModules}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5C1D2A] text-white text-xs sm:text-sm font-semibold hover:bg-[#471520] transition shadow-xs"
        >
          <BookOpen className="w-4 h-4 text-[#E5C158]" />
          <span>Continuar Formação nos Módulos</span>
        </button>

        <button
          onClick={onResetProgress}
          className="inline-flex items-center gap-1.5 text-xs text-[#78716C] hover:text-rose-700 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Zerar histórico</span>
        </button>
      </div>
    </div>
  );
};
