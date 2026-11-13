import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Timer, Check, MoveUpRight } from 'lucide-react';
import { ChapterMeta, ClassLevel } from './types/curriculum';
import { CHAPTERS_BY_CLASS, CLASS_LIST } from './data/curriculumIndex';
import { Navbar } from './components/Navbar';
import { ChapterView } from './components/ChapterView';

export default function App() {
  const [selectedClass, setSelectedClass] = useState<ClassLevel | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<ChapterMeta | null>(null);

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
    <div className="app-shell min-h-screen flex flex-col">
      <Navbar
        activeClass={selectedClass}
        onSelectClass={handleSelectClass}
        onGoHome={handleGoHome}
      />

      <main className="site-main flex-1">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* View 1: Simple Home Page — Only Class 9, 10, 11, 12 */}
          {selectedClass === null && (
            <div className="space-y-8 sm:space-y-10">
              <section className="home-hero">
                <div className="hero-copy">
                  <div className="eyebrow"><span className="status-dot" /> CBSE Rationalised Mathematics · Classes 9 to 12</div>
                  <h1>Select your class to study <em>formulas</em> and timed MCQ papers<span className="accent-period">.</span></h1>
                  <p>Every rationalised NCERT chapter organized cleanly with two focused tools: a complete chapter formula sheet and a 100-question timed MCQ test paper.</p>
                  <a href="#classes" className="hero-cta">Choose your class <ArrowRight size={18} /></a>
                  <div className="hero-notes"><span><Check size={15} /> NCERT aligned</span><span><Check size={15} /> Chapter-wise practice</span></div>
                </div>
                <div className="math-art" aria-hidden="true">
                  <div className="art-label">THE BEAUTY OF MATHEMATICS</div>
                  <svg viewBox="0 0 420 400" fill="none">
                    <defs><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" stroke="currentColor" strokeOpacity=".10" /></pattern></defs>
                    <rect width="420" height="400" fill="url(#grid)" />
                    <circle cx="214" cy="198" r="132" stroke="currentColor" strokeOpacity=".45" />
                    <circle cx="214" cy="198" r="94" stroke="currentColor" strokeOpacity=".22" />
                    <path d="M80 290 214 66 346 290Z" fill="#d6e7a6" fillOpacity=".12" stroke="#d6e7a6" strokeWidth="2" />
                    <path d="M45 198H385M214 35V355" stroke="currentColor" strokeOpacity=".35" strokeDasharray="4 7" />
                    <path d="M75 295Q214 -55 353 295" stroke="#d6e7a6" strokeWidth="3" />
                    <path d="m214 198 132 92" stroke="currentColor" strokeOpacity=".35" />
                    <circle cx="214" cy="66" r="5" fill="#d6e7a6" /><circle cx="80" cy="290" r="5" fill="#d6e7a6" /><circle cx="346" cy="290" r="5" fill="#d6e7a6" />
                    <text x="231" y="61" fill="currentColor" fontSize="16" fontFamily="serif" fontStyle="italic">y = x²</text>
                    <text x="305" y="192" fill="currentColor" fontSize="14" fontFamily="serif" fontStyle="italic">r</text>
                    <text x="194" y="385" fill="currentColor" fontSize="14" fontFamily="serif" fontStyle="italic">x</text>
                  </svg>
                  <div className="art-caption"><span>∑</span><div>Formula Lists<br /><strong>Mathematics, made clear.</strong></div><MoveUpRight size={20} /></div>
                </div>
              </section>
              <div className="study-strip">
                <div><BookOpen size={22} /><span>Complete chapter<br /><strong>Formula sheets</strong></span></div>
                <div><Timer size={22} /><span>100 questions per chapter<br /><strong>Timed MCQ papers</strong></span></div>
                <div className="strip-note">One chapter at a time.<br /><strong>A little more confident, every day.</strong></div>
              </div>

              {/* Four Class Cards: Class 9, Class 10, Class 11, Class 12 */}
              <section id="classes" aria-label="Select CBSE Class" className="class-section space-y-4">
                <div className="section-heading"><div><div className="eyebrow">YOUR NEXT CHAPTER</div><h2>Choose Your Class</h2></div><span>Four classes. One place to learn.</span></div>

                <div className="class-grid">
                  {CLASS_LIST.map((cls) => (
                    <button
                      key={cls.level}
                      type="button"
                      onClick={() => handleSelectClass(cls.level)}
                      className="class-card group text-left"
                    >
                      <div className="space-y-2.5">
                        <div className="class-card-top"><span className="class-number">{cls.level}</span><MoveUpRight size={23} /></div>
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
                    <span>...by KP Sir</span>
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

      <footer className="site-footer border-t border-slate-200 py-6 no-print">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <span className="font-display text-sm font-bold text-slate-900">Sankhya</span>
          <span>CBSE Class 9–12 Mathematics · Formula Lists & Timed 100-MCQ Practice Papers</span>
        </div>
      </footer>
    </div>
  );
}
