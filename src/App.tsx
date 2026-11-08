/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ModulesView } from './components/ModulesView';
import { LessonView } from './components/LessonView';
import { BibleView } from './components/BibleView';
import { DocumentsView } from './components/DocumentsView';
import { GlossaryView } from './components/GlossaryView';
import { ProgressView } from './components/ProgressView';
import { QuizModal } from './components/QuizModal';
import { SearchModal } from './components/SearchBar';
import { OfflineIndicator } from './components/OfflineIndicator';
import { useProgress } from './hooks/useProgress';
import { MODULES_DATA } from './data/modulesData';
import { MODULE_QUIZZES } from './data/quizzesData';
import { LessonSection, ModuleData } from './types';

type TabType = 'home' | 'modules' | 'bible' | 'documents' | 'glossary' | 'progress';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [currentModuleId, setCurrentModuleId] = useState<string>('modulo-1');
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [activeQuizModuleId, setActiveQuizModuleId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const {
    progress,
    toggleLessonCompleted,
    isLessonCompleted,
    toggleBookmark,
    isBookmarked,
    saveQuizScore,
    setLastVisited,
    resetAllProgress,
    totalLessons,
    completedCount,
    progressPercentage,
  } = useProgress();

  // Global keyboard shortcut: Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, currentLessonId]);

  const handleStartCourse = () => {
    const lastId = progress.lastVisitedLessonId || 'm1-a1';
    // Find which module contains this lesson
    let foundMod = MODULES_DATA[0];
    for (const m of MODULES_DATA) {
      if (m.lessons.some((l) => l.id === lastId)) {
        foundMod = m;
        break;
      }
    }
    setCurrentModuleId(foundMod.id);
    setCurrentLessonId(lastId);
  };

  const handleSelectLesson = (moduleId: string, lessonId: string) => {
    setCurrentModuleId(moduleId);
    setCurrentLessonId(lessonId);
    setLastVisited(lessonId);
  };

  const handleBackToModules = () => {
    setCurrentLessonId(null);
    setActiveTab('modules');
  };

  // Find current lesson and module
  const currentModule = MODULES_DATA.find((m) => m.id === currentModuleId) || MODULES_DATA[0];
  const currentLesson = currentLessonId
    ? currentModule.lessons.find((l) => l.id === currentLessonId) || currentModule.lessons[0]
    : null;

  // Determine previous and next lessons across modules
  let previousLessonObj: { moduleId: string; lesson: LessonSection } | undefined = undefined;
  let nextLessonObj: { moduleId: string; lesson: LessonSection } | undefined = undefined;

  if (currentLesson) {
    const lessonIdx = currentModule.lessons.findIndex((l) => l.id === currentLesson.id);
    if (lessonIdx > 0) {
      previousLessonObj = {
        moduleId: currentModule.id,
        lesson: currentModule.lessons[lessonIdx - 1],
      };
    } else {
      // Check previous module's last lesson
      const modIdx = MODULES_DATA.findIndex((m) => m.id === currentModule.id);
      if (modIdx > 0) {
        const prevMod = MODULES_DATA[modIdx - 1];
        previousLessonObj = {
          moduleId: prevMod.id,
          lesson: prevMod.lessons[prevMod.lessons.length - 1],
        };
      }
    }

    if (lessonIdx < currentModule.lessons.length - 1) {
      nextLessonObj = {
        moduleId: currentModule.id,
        lesson: currentModule.lessons[lessonIdx + 1],
      };
    } else {
      // Check next module's first lesson
      const modIdx = MODULES_DATA.findIndex((m) => m.id === currentModule.id);
      if (modIdx < MODULES_DATA.length - 1) {
        const nextMod = MODULES_DATA[modIdx + 1];
        nextLessonObj = {
          moduleId: nextMod.id,
          lesson: nextMod.lessons[0],
        };
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-[#F0DFC8] selection:text-[#5C1D2A]">
      {/* Top Bar */}
      <Navbar
        activeTab={currentLessonId ? 'modules' : activeTab}
        onNavigate={(tab) => {
          setCurrentLessonId(null);
          setActiveTab(tab);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        progressPercentage={progressPercentage}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentLessonId && currentLesson ? (
          <LessonView
            lesson={currentLesson}
            module={currentModule}
            isCompleted={isLessonCompleted(currentLesson.id)}
            isBookmarked={isBookmarked(currentLesson.id)}
            onToggleCompleted={toggleLessonCompleted}
            onToggleBookmark={toggleBookmark}
            onNavigateLesson={handleSelectLesson}
            onBackToModules={handleBackToModules}
            previousLesson={previousLessonObj}
            nextLesson={nextLessonObj}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <HomeView
                onStartCourse={handleStartCourse}
                onNavigateToModule={(modId) => {
                  setCurrentModuleId(modId);
                  setActiveTab('modules');
                }}
                onNavigateTab={(tab) => {
                  setCurrentLessonId(null);
                  setActiveTab(tab);
                }}
                completedLessonsCount={completedCount}
                totalLessonsCount={totalLessons}
                progressPercentage={progressPercentage}
              />
            )}

            {activeTab === 'modules' && (
              <ModulesView
                onSelectLesson={handleSelectLesson}
                onOpenQuiz={(modId) => setActiveQuizModuleId(modId)}
                isLessonCompleted={isLessonCompleted}
                quizScores={progress.quizScores}
                initialModuleId={currentModuleId}
              />
            )}

            {activeTab === 'bible' && <BibleView />}

            {activeTab === 'documents' && <DocumentsView />}

            {activeTab === 'glossary' && <GlossaryView />}

            {activeTab === 'progress' && (
              <ProgressView
                progress={progress}
                totalLessons={totalLessons}
                completedCount={completedCount}
                progressPercentage={progressPercentage}
                onSelectLesson={handleSelectLesson}
                onNavigateToModules={() => setActiveTab('modules')}
                onResetProgress={resetAllProgress}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setCurrentLessonId(null);
          setActiveTab(tab);
        }}
        onResetProgress={resetAllProgress}
      />

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={handleSelectLesson}
        onNavigateToTab={(tab) => {
          setCurrentLessonId(null);
          setActiveTab(tab);
        }}
      />

      {/* Quiz Modal */}
      {activeQuizModuleId && MODULE_QUIZZES[activeQuizModuleId] && (
        <QuizModal
          quiz={MODULE_QUIZZES[activeQuizModuleId]}
          isOpen={true}
          onClose={() => setActiveQuizModuleId(null)}
          onSaveScore={(score, total) => {
            saveQuizScore(activeQuizModuleId, score, total);
          }}
        />
      )}

      {/* Offline Status Toast */}
      <OfflineIndicator />
    </div>
  );
}
