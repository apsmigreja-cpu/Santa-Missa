export interface LessonSection {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  subtitle: string;
  durationMinutes: number;
  isFullyDeveloped: boolean;
  intro: string;
  whatHappens: string;
  liturgicalMeaning: string;
  biblicalFoundation: {
    reference: string;
    textExcerpt?: string;
    explanation: string;
  };
  churchTeaching: {
    source: string;
    paragraphs?: string;
    text: string;
    documentUrl?: string;
  };
  gesturesAndSymbols: {
    title: string;
    description: string;
    icon?: string;
  }[];
  practicalImportance: string;
  reflectionQuestion: string;
  latinPrayerOrKeyPhrase?: {
    latin: string;
    portuguese: string;
  };
}

export interface ModuleData {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image?: string;
  lessons: LessonSection[];
}

export interface BiblePassage {
  id: string;
  book: string;
  reference: string;
  testament: 'AT' | 'NT';
  context: string;
  massRelation: string;
  quote?: string;
  catholicSourceUrl: string;
  theme: string;
}

export interface ChurchDocument {
  id: string;
  title: string;
  latinTitle?: string;
  promulgator: string;
  year: number;
  category: 'Concílio' | 'Catecismo' | 'Encíclica' | 'Instrução Litúrgica' | 'Direito Canônico' | 'Carta Apostólica';
  description: string;
  importance: string;
  keyParagraphs: string;
  officialUrl: string;
  sourceLabel: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  etymology?: string;
  category: 'Espaço Sagrado' | 'Objetos Litúrgicos' | 'Vestes' | 'Partes da Missa' | 'Ações e Gestos' | 'Livros Litúrgicos';
  simpleExplanation: string;
  theologicalExplanation: string;
  relatedModuleId?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ModuleQuiz {
  moduleId: string;
  title: string;
  questions: QuizQuestion[];
}

export interface UserProgress {
  completedLessons: string[]; // lesson ids
  quizScores: Record<string, { score: number; total: number; date: string }>;
  bookmarkedLessons: string[];
  lastVisitedLessonId?: string;
}
