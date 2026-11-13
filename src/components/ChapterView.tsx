import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Clock,
  FileCheck2,
  Printer,
} from 'lucide-react';
import { ChapterMeta, ChapterTab, McqQuestion } from '../types/curriculum';
import { getMcqsForChapter } from '../data/curriculumIndex';
import { MathText } from './MathText';
import { TimedMcqRunner } from './TimedMcqRunner';

interface ChapterViewProps {
  chapter: ChapterMeta;
  onBackToClass: () => void;
}

interface TestSession {
  id: string;
  title: string;
  durationMinutes: number;
  questions: McqQuestion[];
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onBackToClass,
}) => {
  const [activeTab, setActiveTab] = useState<ChapterTab>('formulas');
  const [activeSession, setActiveSession] = useState<TestSession | null>(null);

  useEffect(() => {
    setActiveTab('formulas');
    setActiveSession(null);
  }, [chapter.id]);

  const allMcqs = useMemo(
    () => getMcqsForChapter(chapter.classLevel, chapter.chapterNumber),
    [chapter.classLevel, chapter.chapterNumber]
  );

  const practiceSets = useMemo(() => {
    return [
      {
        id: `${chapter.id}-set-1`,
        label: 'Practice Set 1',
        range: 'Questions 1 – 25',
        questions: allMcqs.slice(0, 25),
        durationMinutes: 25,
      },
      {
        id: `${chapter.id}-set-2`,
        label: 'Practice Set 2',
        range: 'Questions 26 – 50',
        questions: allMcqs.slice(25, 50),
        durationMinutes: 25,
      },
      {
        id: `${chapter.id}-set-3`,
        label: 'Practice Set 3',
        range: 'Questions 51 – 75',
        questions: allMcqs.slice(50, 75),
        durationMinutes: 25,
      },
      {
        id: `${chapter.id}-set-4`,
        label: 'Practice Set 4',
        range: 'Questions 76 – 100',
        questions: allMcqs.slice(75, 100),
        durationMinutes: 25,
      },
    ];
  }, [allMcqs, chapter.id]);

  const handleTabSwitch = (tab: ChapterTab) => {
    setActiveTab(tab);
    if (tab === 'formulas') {
      setActiveSession(null);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Chapter Header & 2-Tab Switcher */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 no-print">
          <button
            type="button"
            onClick={onBackToClass}
            className="inline-flex items-center gap-2 min-h-[44px] px-3 -ml-3 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Class {chapter.classLevel} Chapters</span>
          </button>

          <div className="text-xs font-mono text-slate-500 tabular-nums">
            Class {chapter.classLevel} · Chapter {String(chapter.chapterNumber).padStart(2, '0')}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-1.5 min-w-0">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
              {chapter.chapterNumber}. {chapter.title}
            </h1>
            <p className="text-sm text-slate-600 tabular-nums">
              {chapter.formulas.length} Key Formulas · 100 Time-Bound Practice MCQs
            </p>
          </div>

          {/* Strictly Two Tabs: Formula List & Practice Paper */}
          <div
            role="tablist"
            aria-label="Chapter content sections"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg w-full sm:w-auto overflow-x-auto no-print shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'formulas'}
              onClick={() => handleTabSwitch('formulas')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'formulas'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpenCheck className="w-4 h-4 text-blue-700" />
              <span>Formula List ({chapter.formulas.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'practice'}
              onClick={() => handleTabSwitch('practice')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-blue-700" />
              <span>Practice Paper (100 MCQs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Formula List */}
      {activeTab === 'formulas' && (
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 no-print">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Chapter Formula Sheet
              </h2>
              <p className="text-sm text-slate-600">
                Complete NCERT definitions, theorems, and algebraic identities for quick revision.
              </p>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Formulas</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapter.formulas.map((formula, idx) => (
              <article
                key={formula.id}
                className="p-5 bg-white border border-slate-200 rounded-xl flex flex-col justify-between gap-3"
              >
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {String(idx + 1).padStart(2, '0')}. {formula.title}
                    </h3>
                  </div>

                  <div className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-slate-900 overflow-x-auto">
                    <MathText text={formula.latex} block />
                  </div>
                </div>

                {formula.note && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <MathText text={formula.note} />
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Tab 2: Time-Bound 100 MCQ Practice Paper */}
      {activeTab === 'practice' && (
        <section className="space-y-6">
          {activeSession ? (
            <TimedMcqRunner
              key={activeSession.id}
              title={activeSession.title}
              questions={activeSession.questions}
              durationMinutes={activeSession.durationMinutes}
              onExitTest={() => setActiveSession(null)}
            />
          ) : (
            <div className="space-y-6">
              {/* Full 100-MCQ Timed Paper Card */}
              <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="text-xs font-mono font-semibold text-blue-700 tabular-nums">
                    Full Chapter Test · 100 Questions · 90 Minutes
                  </div>
                  <h2 className="font-display text-2xl font-bold text-slate-900">
                    Complete 100-MCQ Chapter Practice Paper
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Attempt all 100 CBSE exam-pattern MCQs in one timed 90-minute test session with question palette navigation, review flagging, instant score report, and stepwise solutions.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveSession({
                      id: `${chapter.id}-full-100`,
                      title: `Class ${chapter.classLevel} · Ch ${chapter.chapterNumber}: ${chapter.title} (Full 100 MCQs)`,
                      durationMinutes: 90,
                      questions: allMcqs,
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Clock className="w-4 h-4" />
                  <span>Start 100-MCQ Test (90 Min)</span>
                </button>
              </div>

              {/* Quarter Sets: 25 MCQs x 4 Sets */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Or Practice in 25-Minute Timed Sets
                  </h3>
                  <span className="text-xs font-mono text-slate-500 tabular-nums">
                    4 Sets × 25 Questions = 100 MCQs
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {practiceSets.map((set) => (
                    <button
                      key={set.id}
                      type="button"
                      onClick={() =>
                        setActiveSession({
                          id: set.id,
                          title: `Class ${chapter.classLevel} · Ch ${chapter.chapterNumber}: ${set.label}`,
                          durationMinutes: set.durationMinutes,
                          questions: set.questions,
                        })
                      }
                      className="group p-5 bg-white border border-slate-200 hover:border-blue-600 rounded-xl text-left flex flex-col justify-between gap-4 transition-colors cursor-pointer"
                    >
                      <div className="space-y-1.5">
                        <div className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                          {set.durationMinutes} Minutes · 25 MCQs
                        </div>
                        <div className="font-display text-lg font-bold text-slate-900">
                          {set.label}
                        </div>
                        <div className="text-xs text-slate-500 tabular-nums">
                          {set.range}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                        <span>Start Set</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
