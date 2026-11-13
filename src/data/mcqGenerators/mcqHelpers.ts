import { McqQuestion } from '../../types/curriculum';

export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

export function fmtFrac(num: number, den: number): string {
  if (den === 0) return '0';
  const sign = (num < 0) !== (den < 0) ? -1 : 1;
  const n = Math.abs(num);
  const d = Math.abs(den);
  const g = gcd(n, d);
  const rn = sign * (n / g);
  const rd = d / g;
  if (rd === 1) return `${rn}`;
  if (rn < 0) return `-\\frac{${Math.abs(rn)}}{${rd}}`;
  return `\\frac{${rn}}{${rd}}`;
}

export function createMcq(
  id: string,
  question: string,
  correctOpt: string,
  wrongOpts: string[],
  solution: string,
  seedIndex: number
): McqQuestion {
  const unique: string[] = [correctOpt];
  for (const w of wrongOpts) {
    if (!unique.includes(w)) {
      unique.push(w);
    }
    if (unique.length === 4) break;
  }

  // Deterministic fallback padding if any distractor collided
  let pad = 1;
  while (unique.length < 4) {
    const candidate = `$${pad * 7 + (seedIndex % 5)}$`;
    if (!unique.includes(candidate)) unique.push(candidate);
    pad++;
  }

  // Deterministic rotation of options based on seedIndex so correct answer distributes evenly across A, B, C, D
  const shift = seedIndex % 4;
  const rotated: [string, string, string, string] = [
    unique[(0 + shift) % 4],
    unique[(1 + shift) % 4],
    unique[(2 + shift) % 4],
    unique[(3 + shift) % 4],
  ];
  const correctIndex = rotated.indexOf(correctOpt);

  return {
    id,
    question,
    options: rotated,
    correctIndex,
    solution,
  };
}
