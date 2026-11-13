import React, { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Flag,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { McqQuestion } from '../types/curriculum';
import { MathText } from './MathText';

interface TimedMcqRunnerProps {
  title: string;
  questions: McqQuestion[];
  durationMinutes: number;
  onExitTest: () => void;
}

export const TimedMcqRunner: React.FC<TimedMcqRunnerProps> = ({
  title,
  questions,
  durationMinutes,
  onExitTest,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);
  const [submitted, setSubmitted] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'wrong' | 'skipped'>('all');

  useEffect(() => {
    if (submitted) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [submitted]);

  const activeQ = questions[currentIdx];

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const rem = secs % 60;
    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    for (const q of questions) {
      const sel = answers[q.id];
      if (sel === undefined) skipped++;
      else if (sel === q.correctIndex) correct++;
      else wrong++;
    }
    return {
      correct,
      wrong,
      skipped,
      total: questions.length,
      pct: Math.round((correct / Math.max(questions.length, 1)) * 100),
    };
  }, [answers, questions]);

  const handleRestart = () => {
    setCurrentIdx(0);
    setAnswers({});
    setFlagged({});
    setSecondsLeft(durationMinutes * 60);
    setSubmitted(false);
    setReviewFilter('all');
  };

  if (submitted) {
    const timeTaken = durationMinutes * 60 - secondsLeft;
    const reviewItems = questions
      .map((q, idx) => ({ q, idx, chosen: answers[q.id] }))
      .filter(({ q, chosen }) => {
        if (reviewFilter === 'correct') return chosen === q.correctIndex;
        if (reviewFilter === 'wrong') return chosen !== undefined && chosen !== q.correctIndex;
        if (reviewFilter === 'skipped') return chosen === undefined;
        return true;
      });

    return (
      <div className="space-y-6">
        {/* Result Summary */}
        <div className="p-5 sm:p-8 bg-white border border-slate-200 rounded-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-medium text-blue-700">
                Test Paper Submitted · {title}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                Score: {stats.correct} / {stats.total} ({stats.pct}%)
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Test</span>
              </button>
              <button
                type="button"
                onClick={onExitTest}
                className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                Change Set
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 tabular-nums">
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
              <div className="text-xs text-emerald-800">Correct</div>
              <div className="font-mono text-xl font-bold text-emerald-900">{stats.correct}</div>
            </div>
            <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg">
              <div className="text-xs text-red-800">Incorrect</div>
              <div className="font-mono text-xl font-bold text-red-900">{stats.wrong}</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-600">Unattempted</div>
              <div className="font-mono text-xl font-bold text-slate-900">{stats.skipped}</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-600">Time Taken</div>
              <div className="font-mono text-xl font-bold text-slate-900">
                {formatTime(timeTaken)}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="font-display text-lg font-bold text-slate-900">
            Answer Key & Stepwise Solutions
          </h4>
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg overflow-x-auto">
            {(
              [
                { id: 'all', label: `All (${stats.total})` },
                { id: 'correct', label: `Correct (${stats.correct})` },
                { id: 'wrong', label: `Wrong (${stats.wrong})` },
                { id: 'skipped', label: `Skipped (${stats.skipped})` },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setReviewFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  reviewFilter === f.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Review Questions */}
        <div className="space-y-4">
          {reviewItems.length === 0 ? (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-xl text-sm text-slate-500">
              No questions in this filter category.
            </div>
          ) : (
            reviewItems.map(({ q, idx, chosen }) => {
              const isCorrect = chosen === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className="p-5 bg-white border border-slate-200 rounded-xl space-y-3"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-mono tabular-nums">
                    <span className="text-slate-500">Question {idx + 1}</span>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-700 font-semibold">
                        <XCircle className="w-4 h-4" />{' '}
                        {chosen === undefined
                          ? 'Unattempted'
                          : `Marked (${String.fromCharCode(65 + chosen)})`}
                      </span>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                    <MathText text={q.question} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {q.options.map((opt, oIdx) => {
                      const isRightOpt = oIdx === q.correctIndex;
                      const isUserWrong = chosen === oIdx && !isRightOpt;
                      return (
                        <div
                          key={oIdx}
                          className={`px-3.5 py-2.5 rounded-lg border ${
                            isRightOpt
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                              : isUserWrong
                                ? 'bg-red-50 border-red-300 text-red-900'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className="font-mono text-xs mr-2 font-semibold">
                            ({String.fromCharCode(65 + oIdx)})
                          </span>
                          <MathText text={opt} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Solution: </span>
                    <MathText text={q.solution} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }

  const attemptedCount = Object.keys(answers).length;
  const isLowTime = secondsLeft <= 120;

  return (
    <div className="space-y-4">
      {/* Top Test Status Strip */}
      <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs text-slate-500 font-medium truncate">{title}</div>
          <div className="text-sm font-semibold text-slate-900 tabular-nums">
            Attempted: {attemptedCount} / {questions.length}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-sm font-bold tabular-nums ${
              isLowTime
                ? 'bg-red-50 border-red-300 text-red-800'
                : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}
          >
            <Clock className="w-4 h-4 text-blue-700" />
            <span>{formatTime(secondsLeft)}</span>
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Submit Paper
          </button>
        </div>
      </div>

      {/* Main Split: Active Question + Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Question Card */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-5 sm:p-7 flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                Question {currentIdx + 1} of {questions.length} · 1 Mark
              </span>
              <button
                type="button"
                onClick={() =>
                  setFlagged((prev) => ({ ...prev, [activeQ.id]: !prev[activeQ.id] }))
                }
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                  flagged[activeQ.id]
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flagged[activeQ.id] ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
              <MathText text={activeQ.question} />
            </div>

            <div className="space-y-2.5 pt-1">
              {activeQ.options.map((opt, idx) => {
                const chosen = answers[activeQ.id] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [activeQ.id]: idx }))
                    }
                    className={`w-full min-h-[48px] text-left px-4 py-3 rounded-lg border transition-colors flex items-center gap-3 cursor-pointer ${
                      chosen
                        ? 'bg-blue-50 border-blue-600 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                        chosen
                          ? 'bg-blue-700 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base">
                      <MathText text={opt} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {answers[activeQ.id] !== undefined && (
                <button
                  type="button"
                  onClick={() =>
                    setAnswers((prev) => {
                      const next = { ...prev };
                      delete next[activeQ.id];
                      return next;
                    })
                  }
                  className="px-3 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Clear Response
                </button>
              )}
            </div>

            {currentIdx < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Save & Next
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
              >
                Finish & Submit
              </button>
            )}
          </div>
        </div>

        {/* Question Palette */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-display text-sm font-bold text-slate-900">
              Question Palette ({questions.length})
            </h4>
            <button
              type="button"
              onClick={onExitTest}
              className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
            >
              Exit Test
            </button>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-1.5 max-h-[340px] overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIdx;
              const isAnswered = answers[q.id] !== undefined;
              const isFlagged = flagged[q.id];

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-9 rounded-md font-mono text-xs font-semibold border transition-colors cursor-pointer tabular-nums ${
                    isCurrent
                      ? 'bg-blue-700 border-blue-700 text-white'
                      : isFlagged
                        ? 'bg-amber-50 border-amber-300 text-amber-900'
                        : isAnswered
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span>Forest: Active</span>
            <span>Green: Answered</span>
            <span>Amber: Review</span>
          </div>
        </aside>
      </div>
    </div>
  );
};
