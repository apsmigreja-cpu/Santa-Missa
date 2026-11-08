import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';
import { ModuleQuiz } from '../types';

interface QuizModalProps {
  quiz: ModuleQuiz;
  isOpen: boolean;
  onClose: () => void;
  onSaveScore: (score: number, total: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  isOpen,
  onClose,
  onSaveScore,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      const finalScore = selectedOption === currentQ.correctIndex ? score : score;
      setIsFinished(true);
      onSaveScore(finalScore, quiz.questions.length);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-2xl bg-[#FAF7F2] border border-[#D8CEBE] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E7DFD5] bg-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8F6A10]">
              Fixação Teológica
            </span>
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#5C1D2A]">
              {quiz.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] rounded-lg"
            aria-label="Fechar questionário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isFinished ? (
            <>
              {/* Question counter */}
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span>
                  Pergunta <strong className="text-[#1C1917]">{currentQuestionIndex + 1}</strong> de {quiz.questions.length}
                </span>
                <span className="font-mono font-medium text-[#8F6A10]">
                  Acertos: {score}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#E7DFD5] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#C59B27] h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question text */}
              <h4 className="font-serif text-lg font-semibold text-[#1C1917] leading-relaxed">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  let optionStyles = 'border-[#D8CEBE] bg-white hover:border-[#C59B27] text-[#1C1917]';
                  if (selectedOption === idx) {
                    optionStyles = 'border-[#5C1D2A] bg-[#F9F3DF] text-[#5C1D2A] font-medium shadow-xs';
                  }

                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctIndex) {
                      optionStyles = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium';
                    } else if (selectedOption === idx) {
                      optionStyles = 'border-rose-400 bg-rose-50 text-rose-950';
                    } else {
                      optionStyles = 'border-[#E7DFD5] bg-white text-[#78716C] opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition flex items-start gap-3 ${optionStyles}`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 leading-snug">{opt}</span>
                      {isAnswerSubmitted && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correctIndex && (
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation card after submit */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-white border border-[#D8CEBE] space-y-1.5 animate-in fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8F6A10] uppercase tracking-wide">
                    <span>Explicação Doutrinária:</span>
                  </div>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Finished view */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F9F3DF] text-[#8F6A10] flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl text-[#5C1D2A]">
                  Questionário Concluído!
                </h4>
                <p className="text-sm text-[#78716C] mt-1">
                  Seu resultado foi salvo localmente no seu progresso.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] max-w-xs mx-auto">
                <div className="text-3xl font-serif font-bold text-[#5C1D2A]">
                  {score} / {quiz.questions.length}
                </div>
                <div className="text-xs text-[#78716C] mt-1">
                  {Math.round((score / quiz.questions.length) * 100)}% de aproveitamento
                </div>
              </div>

              <p className="text-xs text-[#44403C] max-w-sm mx-auto leading-relaxed">
                {score === quiz.questions.length
                  ? 'Excelente domínio teológico e litúrgico! Você assimilou com perfeição os mistérios deste módulo.'
                  : 'Bom trabalho! Você pode revisar as aulas deste módulo para consolidar os pontos que ainda suscitaram dúvidas.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="px-6 py-3.5 border-t border-[#E7DFD5] bg-white flex items-center justify-between">
          {!isFinished ? (
            <>
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="ml-auto px-5 py-2 rounded-xl bg-[#5C1D2A] text-white text-sm font-semibold hover:bg-[#471520] transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="ml-auto inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#5C1D2A] text-white text-sm font-semibold hover:bg-[#471520] transition"
                >
                  <span>{isLastQuestion ? 'Ver Resultado' : 'Próxima Pergunta'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E5C158]" />
                </button>
              )}
            </>
          ) : (
            <div className="w-full flex items-center justify-between gap-3">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#D8CEBE] text-xs font-semibold text-[#5C1D2A] hover:bg-[#FAF7F2] transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer Teste</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#5C1D2A] text-white text-sm font-semibold hover:bg-[#471520] transition"
              >
                Continuar Estudos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
