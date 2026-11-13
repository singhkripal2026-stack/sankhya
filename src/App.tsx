import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { ChapterMeta, ClassLevel } from './types/curriculum';
import { CHAPTERS_BY_CLASS, CLASS_LIST } from './data/curriculumIndex';
import { Navbar } from './components/Navbar';
import { ChapterView } from './components/ChapterView';

export default function App() {
  const [selectedClass, setSelectedClass] = useState<ClassLevel | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<ChapterMeta | null>(null);
  const [heroImgError, setHeroImgError] = useState(false);

  const handleGoHome = () => {
    setSelectedClass(null);
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectClass = (lvl: ClassLevel) => {
    setSelectedClass(lvl);
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (chapter: ChapterMeta) => {
    setSelectedChapter(chapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeClassInfo = selectedClass
    ? CLASS_LIST.find((c) => c.level === selectedClass) ?? null
    : null;
  const classChapters = selectedClass ? CHAPTERS_BY_CLASS[selectedClass] : [];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Navbar
        activeClass={selectedClass}
        onSelectClass={handleSelectClass}
        onGoHome={handleGoHome}
      />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* View 1: Simple Home Page — Only Class 9, 10, 11, 12 */}
          {selectedClass === null && (
            <div className="space-y-8 sm:space-y-10">
              {/* Compact Editorial Intro Split */}
              <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4">
                    <div className="text-xs font-medium text-blue-700">
                      CBSE Rationalised Mathematics · Classes 9 to 12
                    </div>
                    <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-[1.15] tracking-tight text-balance">
                      Select your class to study formulas and timed MCQ papers.
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                      Every rationalised NCERT chapter organized cleanly with two focused tools: a complete chapter formula sheet and a 100-question timed MCQ test paper.
                    </p>
                  </div>

                  <div className="lg:col-span-5 min-h-[200px] sm:min-h-[240px] bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200">
                    {!heroImgError ? (
                      <img
                        src="/src/assets/images/hero_math_atlas_1794587002862.jpg"
                        alt="Mathematics study desk with brass compass, geometry set square, and parabola notebook"
                        referrerPolicy="no-referrer"
                        onError={() => setHeroImgError(true)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <Compass className="w-10 h-10 text-blue-700 mb-2" />
                        <span className="font-display text-base font-semibold text-slate-900">
                          CBSE Class 9–12 Mathematics
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Four Class Cards: Class 9, Class 10, Class 11, Class 12 */}
              <section aria-label="Select CBSE Class" className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Choose Your Class
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {CLASS_LIST.map((cls) => (
                    <button
                      key={cls.level}
                      type="button"
                      onClick={() => handleSelectClass(cls.level)}
                      className="group p-6 bg-white border border-slate-200 hover:border-blue-600 rounded-xl text-left flex flex-col justify-between gap-6 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                    >
                      <div className="space-y-2.5">
                        <div className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                          CBSE Mathematics
                        </div>
                        <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                          {cls.title}
                        </div>
                        <p className="text-sm text-slate-600 tabular-nums leading-relaxed">
                          {cls.tagline}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                        <span>Open {cls.chapterCount} Chapters</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* View 2: Selected Class Chapters Grid */}
          {selectedClass !== null && selectedChapter === null && activeClassInfo && (
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleGoHome}
                    className="inline-flex items-center gap-2 min-h-[44px] px-3 -ml-3 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>All Classes</span>
                  </button>

                  <span className="font-mono text-xs font-medium text-slate-500 tabular-nums">
                    {activeClassInfo.chapterCount} Chapters · {activeClassInfo.chapterCount * 100} MCQs
                  </span>
                </div>

                <div className="space-y-1">
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {activeClassInfo.title} Mathematics Chapters
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600">
                    Click any chapter to open its Formula List and 100-MCQ Timed Practice Paper.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {classChapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => handleSelectChapter(ch)}
                    className="group p-5 sm:p-6 bg-white border border-slate-200 hover:border-blue-600 rounded-xl text-left flex flex-col justify-between gap-5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    <div className="space-y-2">
                      <div className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                        Chapter {String(ch.chapterNumber).padStart(2, '0')}
                      </div>
                      <h2 className="font-display text-lg font-bold text-slate-900 leading-snug">
                        {ch.title}
                      </h2>
                      <div className="text-xs sm:text-sm text-slate-500 tabular-nums">
                        {ch.formulas.length} Formulas · 100 Timed MCQs
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      <span>Open Chapter</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* View 3: Selected Chapter — Strictly Formula List & Timed Practice Paper */}
          {selectedClass !== null && selectedChapter !== null && (
            <ChapterView
              chapter={selectedChapter}
              onBackToClass={() => {
                setSelectedChapter(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 no-print">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <span className="font-display text-sm font-bold text-slate-900">Sankhya</span>
          <span>CBSE Class 9–12 Mathematics · Formula Lists & Timed 100-MCQ Practice Papers</span>
        </div>
      </footer>
    </div>
  );
}
