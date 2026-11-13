import React, { useState } from 'react';
import { Menu, X, Sigma } from 'lucide-react';
import { ClassLevel } from '../types/curriculum';

interface NavbarProps {
  activeClass: ClassLevel | null;
  onSelectClass: (lvl: ClassLevel) => void;
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeClass,
  onSelectClass,
  onGoHome,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const classes: Array<{ level: ClassLevel; label: string }> = [
    { level: '9', label: 'Class 9' },
    { level: '10', label: 'Class 10' },
    { level: '11', label: 'Class 11' },
    { level: '12', label: 'Class 12' },
  ];

  return (
    <header className="site-header sticky top-0 z-40 no-print">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => { onGoHome(); setMobileOpen(false); }}
          className="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-sm"
        >
          <span className="brand-mark"><Sigma size={23} strokeWidth={1.7} /></span> Sankhya<span className="brand-dot">.</span>
        </button>

        {/* Zone 2: 4 Single-line Class Links */}
        <nav aria-label="Classes" className="hidden md:flex items-center gap-8 text-sm font-medium">
          {classes.map((item) => {
            const isActive = activeClass === item.level;
            return (
              <button
                key={item.level}
                type="button"
                onClick={() => onSelectClass(item.level)}
                className={`whitespace-nowrap shrink-0 py-1 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-sm ${
                  isActive
                    ? 'text-blue-700 font-semibold underline underline-offset-4 decoration-2 decoration-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => { onGoHome(); setMobileOpen(false); }}
            className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            All Classes
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-slate-200 bg-white px-4 py-2 grid grid-cols-2 gap-2">
          {classes.map((item) => (
            <button
              key={item.level}
              type="button"
              onClick={() => {
                onSelectClass(item.level);
                setMobileOpen(false);
              }}
              className={`py-2.5 px-3 text-sm font-semibold rounded-lg border text-left cursor-pointer ${
                activeClass === item.level
                  ? 'bg-blue-50 border-blue-200 text-blue-800'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
