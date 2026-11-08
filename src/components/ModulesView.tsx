import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Award,
  Play,
  Clock,
  Sparkles,
  ChevronDown,
  Layers
} from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { MODULE_QUIZZES } from '../data/quizzesData';
import { ModuleData } from '../types';

interface ModulesViewProps {
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  onOpenQuiz: (moduleId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  quizScores: Record<string, { score: number; total: number; date: string }>;
  initialModuleId?: string;
}

export const ModulesView: React.FC<ModulesViewProps> = ({
  onSelectLesson,
  onOpenQuiz,
  isLessonCompleted,
  quizScores,
  initialModuleId,
}) => {
  const [expandedModuleId, setExpandedModuleId] = useState<string>(
    initialModuleId || 'modulo-1'
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-200">
      {/* Title & Introduction */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
          <Layers className="w-4 h-4" />
          <span>Itinerário de Formação Litúrgica</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#5C1D2A]">
          Os 7 Módulos da Santa Missa
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] max-w-3xl leading-relaxed">
          Cada celebração eucarística é uma jornada sagrada com Cristo. Percorra os 7 módulos sequenciais para conhecer os fundamentos bíblicos, o significado de cada gesto e a profunda riqueza teológica da Missa.
        </p>
      </div>

      {/* Modules List */}
      <div className="space-y-5">
        {MODULES_DATA.map((mod) => {
          const isExpanded = expandedModuleId === mod.id;
          const completedInModule = mod.lessons.filter((l) => isLessonCompleted(l.id)).length;
          const percentage = Math.round((completedInModule / mod.lessons.length) * 100);
          const hasQuiz = !!MODULE_QUIZZES[mod.id];
          const quizRecord = quizScores[mod.id];

          return (
            <div
              key={mod.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white border-[#C59B27]/60 shadow-md ring-1 ring-[#C59B27]/20'
                  : 'bg-[#FAF7F2] border-[#E7DFD5] hover:border-[#D8CEBE]'
              }`}
            >
              {/* Module Header Row */}
              <div
                onClick={() => setExpandedModuleId(isExpanded ? '' : mod.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#5C1D2A] text-[#E5C158] flex items-center justify-center font-serif text-lg font-bold shrink-0 shadow-xs mt-0.5">
                    {mod.number}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-[#8F6A10] font-semibold uppercase tracking-wider">
                      <span>Módulo {mod.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{mod.lessons.length} aulas</span>
                    </div>
                    <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1917] hover:text-[#5C1D2A] transition-colors">
                      {mod.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#78716C] line-clamp-1 sm:line-clamp-none">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status Badges & Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-[#E7DFD5]">
                  {/* Progress Indicator */}
                  <div className="text-right">
                    <div className="text-xs font-semibold text-[#1C1917] flex items-center gap-1.5">
                      {completedInModule === mod.lessons.length && mod.lessons.length > 0 ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                      ) : null}
                      <span>{completedInModule}/{mod.lessons.length} conclúidas</span>
                    </div>
                    <div className="w-24 sm:w-28 bg-[#E7DFD5] h-1.5 rounded-full overflow-hidden mt-1">
                      <div
                        className="bg-[#C59B27] h-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-2 text-[#78716C] hover:text-[#5C1D2A] rounded-lg">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Module Expanded Details & Lesson Roster */}
              {isExpanded && (
                <div className="border-t border-[#E7DFD5] px-5 sm:px-6 py-6 bg-[#FCFAF6] space-y-6 animate-in fade-in duration-150">
                  <p className="text-sm text-[#44403C] leading-relaxed max-w-3xl">
                    {mod.description}
                  </p>

                  {/* Actions Bar: Start / Quiz */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => onSelectLesson(mod.id, mod.lessons[0].id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5C1D2A] text-white text-xs sm:text-sm font-semibold hover:bg-[#471520] transition shadow-xs"
                    >
                      <Play className="w-4 h-4 fill-current text-[#E5C158]" />
                      <span>Iniciar Módulo</span>
                    </button>

                    {hasQuiz && (
                      <button
                        onClick={() => onOpenQuiz(mod.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D8CEBE] text-xs sm:text-sm font-semibold text-[#5C1D2A] hover:bg-[#F9F3DF] transition"
                      >
                        <Award className="w-4 h-4 text-[#C59B27]" />
                        <span>Questionário de Fixação</span>
                        {quizRecord && (
                          <span className="text-[11px] font-mono text-[#8F6A10] font-bold">
                            ({quizRecord.score}/{quizRecord.total})
                          </span>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Lesson List */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
                      Aulas deste Módulo:
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {mod.lessons.map((lesson) => {
                        const completed = isLessonCompleted(lesson.id);

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => onSelectLesson(mod.id, lesson.id)}
                            className="p-3.5 rounded-xl bg-white border border-[#E7DFD5] hover:border-[#C59B27] hover:shadow-xs transition flex items-center justify-between gap-3 cursor-pointer group"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E7DFD5] text-xs font-semibold text-[#78716C] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#C59B27] group-hover:text-[#5C1D2A] transition-colors">
                                {lesson.number}
                              </span>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-semibold text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors truncate">
                                    {lesson.title}
                                  </h4>
                                  {!lesson.isFullyDeveloped && (
                                    <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 shrink-0">
                                      Guia
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#78716C] truncate mt-0.5">
                                  {lesson.subtitle}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#A8A29E]">
                                <Clock className="w-3 h-3" />
                                <span>{lesson.durationMinutes}m</span>
                              </span>
                              {completed ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#5C1D2A] group-hover:translate-x-0.5 transition" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
