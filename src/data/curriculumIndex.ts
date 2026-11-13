import { ChapterMeta, ClassLevel, McqQuestion } from '../types/curriculum';
import { class9ChapterMetas } from './formulas/class9Formulas';
import { class10ChapterMetas } from './formulas/class10Formulas';
import { class11ChapterMetas } from './formulas/class11Formulas';
import { class12ChapterMetas } from './formulas/class12Formulas';
import { generateClass9Mcqs } from './mcqGenerators/class9Mcqs';
import { generateClass10Mcqs } from './mcqGenerators/class10Mcqs';
import { generateClass11Mcqs } from './mcqGenerators/class11Mcqs';
import { generateClass12Mcqs } from './mcqGenerators/class12Mcqs';

export interface ClassOverview {
  level: ClassLevel;
  title: string;
  chapterCount: number;
  tagline: string;
}

export const CLASS_LIST: ClassOverview[] = [
  {
    level: '9',
    title: 'Class 9',
    chapterCount: 12,
    tagline: '12 NCERT Chapters · Formula Lists & 1,200 Timed MCQs',
  },
  {
    level: '10',
    title: 'Class 10',
    chapterCount: 14,
    tagline: '14 NCERT Chapters · Formula Lists & 1,400 Timed MCQs',
  },
  {
    level: '11',
    title: 'Class 11',
    chapterCount: 14,
    tagline: '14 NCERT Chapters · Formula Lists & 1,400 Timed MCQs',
  },
  {
    level: '12',
    title: 'Class 12',
    chapterCount: 13,
    tagline: '13 NCERT Chapters · Formula Lists & 1,300 Timed MCQs',
  },
];

export const CHAPTERS_BY_CLASS: Record<ClassLevel, ChapterMeta[]> = {
  '9': class9ChapterMetas,
  '10': class10ChapterMetas,
  '11': class11ChapterMetas,
  '12': class12ChapterMetas,
};

export function getMcqsForChapter(
  classLevel: ClassLevel,
  chapterNumber: number
): McqQuestion[] {
  switch (classLevel) {
    case '9':
      return generateClass9Mcqs(chapterNumber);
    case '10':
      return generateClass10Mcqs(chapterNumber);
    case '11':
      return generateClass11Mcqs(chapterNumber);
    case '12':
      return generateClass12Mcqs(chapterNumber);
  }
}
