export type ClassLevel = '9' | '10' | '11' | '12';

export type ChapterTab = 'formulas' | 'practice';

export interface FormulaItem {
  id: string;
  title: string;
  latex: string;
  note?: string;
}

export interface McqQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  solution: string;
}

export interface ChapterMeta {
  id: string;
  classLevel: ClassLevel;
  chapterNumber: number;
  title: string;
  formulas: FormulaItem[];
}
