import React from 'react';
import {
  ArrowRight,
  BookOpen,
  BookMarked,
  Church,
  HelpCircle,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Flame,
  Heart
} from 'lucide-react';
import { APP_CONFIG, MODULES_DATA } from '../data/modulesData';
import { PWAInstallButton } from './PWAInstallButton';

interface HomeViewProps {
  onStartCourse: () => void;
  onNavigateToModule: (moduleId: string) => void;
  onNavigateTab: (tab: 'modules' | 'bible' | 'documents' | 'glossary' | 'progress') => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
  progressPercentage: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartCourse,
  onNavigateToModule,
  onNavigateTab,
  completedLessonsCount,
  totalLessonsCount,
  progressPercentage,
}) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-200">
      {/* Hero Marquee Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4EFEB] to-[#FAF7F2] border-b border-[#E7DFD5] pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7DFD5] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5C1D2A]">
                  {APP_CONFIG.provisionalName}
                </span>
                <span className="text-[#A8A29E] text-xs">·</span>
                <span className="text-xs text-[#78716C]">Rito Romano</span>
              </div>

              {/* Mandatory welcoming phrase */}
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#5C1D2A] leading-snug border-l-3 border-[#C59B27] pl-4 sm:pl-6 my-2 text-balance">
                "{APP_CONFIG.subheading}"
              </blockquote>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed max-w-2xl">
                Um ambiente digital de formação católica para toda a comunidade. Conheça detalhadamente cada momento da celebração eucarística, seus fundamentos bíblicos, significados litúrgicos e os ensinamentos perenes da Igreja.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onStartCourse}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#5C1D2A] text-white font-semibold text-sm hover:bg-[#471520] transition-colors shadow-md group"
                >
                  <span>Começar minha formação</span>
                  <ArrowRight className="w-4 h-4 text-[#E5C158] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigateTab('modules')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#D8CEBE] text-[#5C1D2A] font-semibold text-sm hover:bg-[#F9F3DF] transition-colors"
                >
                  <Layers className="w-4 h-4 text-[#8F6A10]" />
                  <span>Explorar os 7 Módulos</span>
                </button>

                <div className="sm:hidden w-full pt-1">
                  <PWAInstallButton />
                </div>
              </div>

              {/* Quiet metadata stats bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#78716C]">
                <div>
                  <strong className="text-[#1C1917] font-semibold font-mono tabular-nums">7</strong> Módulos
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <strong className="text-[#1C1917] font-semibold font-mono tabular-nums">54</strong> Aulas Estruturadas
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <strong className="text-[#1C1917] font-semibold font-mono tabular-nums">100%</strong> Local & Sem Login
                </div>
              </div>
            </div>

            {/* Right Column: Reverent Liturgical Focal Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#D8CEBE] shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-[#F4EFEB]">
                <img
                  src="/src/assets/images/hero_altar_eucharist_1794092583985.jpg"
                  alt="Altar da Santa Missa em solene celebração católica com velas acesas e cálice sagrado"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E5C158]">
                    O Santo Sacrifício
                  </span>
                  <p className="font-serif italic text-sm text-[#F4EFEB] leading-snug">
                    "Do nascer ao pôr do sol, seja oferecida ao vosso nome uma oblação pura."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuation Card if user already started */}
      {completedLessonsCount > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#C59B27]/40 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F6A10]">
                Continuar de onde você parou
              </span>
              <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                Você já concluiu {completedLessonsCount} de {totalLessonsCount} aulas ({progressPercentage}%)
              </h3>
              <p className="text-xs text-[#78716C]">
                Seu progresso está armazenado com segurança no seu navegador.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigateTab('progress')}
                className="px-4 py-2 text-xs font-semibold text-[#5C1D2A] border border-[#D8CEBE] rounded-xl hover:bg-[#FAF7F2] transition"
              >
                Ver Detalhes
              </button>
              <button
                onClick={onStartCourse}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#5C1D2A] rounded-xl hover:bg-[#471520] transition flex items-center gap-1.5"
              >
                <span>Continuar Aula</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Highlight of the Mystery of the Holy Eucharist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#5C1D2A] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5C158] font-semibold">
                <Flame className="w-4 h-4" />
                <span>O Coração da Nossa Fé</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                A Eucaristia: Fonte e Ápice de Toda a Vida Cristã
              </h2>
              <p className="text-sm sm:text-base text-[#F4EFEB] leading-relaxed font-light">
                A Santa Missa não é uma encenação teatral nem uma simples confraternização comunitária. Em cada altar católico, perpetua-se sacramentalmente o único e mesmo sacrifício de Cristo no Calvário. Ali, o pão e o vinho tornam-se verdadeira, real e substancialmente o Corpo, Sangue, Alma e Divindade de Nosso Senhor Jesus Cristo.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-serif italic text-[#FCEBA4]">
                <span>"A Igreja vive da Eucaristia." — São João Paulo II</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E5C158]/40 shadow-lg aspect-4/3 bg-[#40101B]">
                <img
                  src="/src/assets/images/consecration_chalice_host_1794092584133.jpg"
                  alt="Momento solene da consagração e elevação do cálice e da hóstia santa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Modules Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
              Estrutura Pedagógica Completa
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#5C1D2A]">
              Os 7 Módulos de Formação
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C]">
              Estudo passo a passo de cada etapa do rito romano e da teologia sacramental.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('modules')}
            className="text-xs font-semibold text-[#5C1D2A] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Ver todas as aulas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES_DATA.map((mod) => (
            <div
              key={mod.id}
              onClick={() => onNavigateToModule(mod.id)}
              className="p-5 rounded-2xl bg-white border border-[#E7DFD5] hover:border-[#C59B27] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#5C1D2A] font-serif font-bold text-sm flex items-center justify-center border border-[#E7DFD5] group-hover:bg-[#5C1D2A] group-hover:text-[#E5C158] transition-colors">
                    {mod.number}
                  </span>
                  <span className="text-xs text-[#78716C] font-mono">
                    {mod.lessons.length} aulas
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-[#78716C] font-serif italic mt-0.5 line-clamp-1">
                    {mod.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
                  {mod.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4EFEB] flex items-center justify-between text-xs font-semibold text-[#5C1D2A] group-hover:text-[#40101B]">
                <span>Acessar módulo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access to Complementary Pillars: Bible, Documents, Glossary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
            Pilares da Tradição
          </span>
          <h2 className="font-serif font-bold text-2xl text-[#5C1D2A]">
            Aprofunde suas Fontes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: Bible */}
          <div
            onClick={() => onNavigateTab('bible')}
            className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD5] hover:border-[#C59B27] hover:shadow-xs transition cursor-pointer space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F9F3DF] text-[#8F6A10] flex items-center justify-center">
              <BookMarked className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors">
              Fundamentos Bíblicos
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Passagens do Antigo e Novo Testamento que fundamentam cada rito, com links diretos para a Bíblia da CNBB.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#5C1D2A] flex items-center gap-1">
              <span>Consultar passagens</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Documents */}
          <div
            onClick={() => onNavigateTab('documents')}
            className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD5] hover:border-[#C59B27] hover:shadow-xs transition cursor-pointer space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F9F3DF] text-[#8F6A10] flex items-center justify-center">
              <Church className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors">
              Documentos Oficiais
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Acesse o Catecismo, a Sacrosanctum Concilium, a IGMR e as encíclicas papais com parágrafos selecionados.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#5C1D2A] flex items-center gap-1">
              <span>Explorar biblioteca</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Glossary */}
          <div
            onClick={() => onNavigateTab('glossary')}
            className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#E7DFD5] hover:border-[#C59B27] hover:shadow-xs transition cursor-pointer space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F9F3DF] text-[#8F6A10] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#5C1D2A] transition-colors">
              Glossário Litúrgico
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Dicionário A-Z explicando termos como Ambão, Altar, Epiclese, Transubstanciação e Casula.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#5C1D2A] flex items-center gap-1">
              <span>Buscar termos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
