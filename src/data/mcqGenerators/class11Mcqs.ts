import { McqQuestion } from '../../types/curriculum';
import { createMcq, fmtFrac } from './mcqHelpers';

function fact(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  return fact(n) / (fact(r) * fact(n - r));
}

export function generateClass11Mcqs(chapterNumber: number): McqQuestion[] {
  const list: McqQuestion[] = [];

  for (let i = 0; i < 100; i++) {
    const id = `c11-ch${chapterNumber}-q${i + 1}`;
    const k = Math.floor(i / 5) + 1;
    const type = i % 5;

    switch (chapterNumber) {
      case 1: {
        // Sets
        if (type === 0) {
          const n = (k % 6) + 2;
          const ans = Math.pow(2, n);
          list.push(
            createMcq(
              id,
              `If set $A$ has $${n}$ elements, the total number of subsets of $A$ is:`,
              `$${ans}$`,
              [`$${ans - 1}$`, `$${n * n}$`, `$${2 * n}$`],
              `A set with $n$ elements has $2^n = 2^{${n}} = ${ans}$ subsets.`,
              i
            )
          );
        } else if (type === 1) {
          const n = (k % 5) + 3;
          const ans = Math.pow(2, n) - 1;
          list.push(
            createMcq(
              id,
              `The number of proper subsets of a set with $${n}$ elements is:`,
              `$${ans}$`,
              [`$${ans + 1}$`, `$${ans - 1}$`, `$${n * 2}$`],
              `Proper subsets $= 2^n - 1 = 2^{${n}} - 1 = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const nA = (k % 8) + 12;
          const nB = (k % 6) + 10;
          const nInter = (k % 4) + 3;
          const nUnion = nA + nB - nInter;
          list.push(
            createMcq(
              id,
              `If $n(A) = ${nA}, n(B) = ${nB}$, and $n(A \\cap B) = ${nInter}$, then $n(A \\cup B)$ is:`,
              `$${nUnion}$`,
              [`$${nA + nB}$`, `$${nUnion + nInter}$`, `$${nUnion - 2}$`],
              `$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = ${nA} + ${nB} - ${nInter} = ${nUnion}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = -(k % 5) - 1;
          const b = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `Set-builder form $\\{x : x \\in \\mathbb{R}, ${a} < x \\le ${b}\\}$ as an interval is:`,
              `$(${a}, ${b}]$`,
              [`$[${a}, ${b}]$`, `$[${a}, ${b})$`, `$(${a}, ${b})$`],
              `Strict inequality $<$ uses open parenthesis $(${a}$, and $\\le$ uses closed bracket $${b}]$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `By De Morgan’s Law, $(A \\cup B)'$ is equal to:`,
              `$A' \\cap B'$`,
              [`$A' \\cup B'$`, `$A \\cap B$`, `$(A \\cap B)'$`],
              `De Morgan’s Law states $(A \\cup B)' = A' \\cap B'$.`,
              i
            )
          );
        }
        break;
      }

      case 2: {
        // Relations and Functions
        if (type === 0) {
          const p = (k % 4) + 2;
          const q = (k % 3) + 1;
          const ans = Math.pow(2, p * q);
          list.push(
            createMcq(
              id,
              `If $n(A) = ${p}$ and $n(B) = ${q}$, the number of relations from $A$ to $B$ is:`,
              `$${ans}$`,
              [`$${p * q}$`, `$${Math.pow(2, p + q)}$`, `$${ans / 2}$`],
              `Total relations $= 2^{n(A)\\cdot n(B)} = 2^{${p * q}} = ${ans}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 7) + 2;
          list.push(
            createMcq(
              id,
              `The domain of the real function $f(x) = \\sqrt{${a * a} - x^2}$ is:`,
              `$[-${a}, ${a}]$`,
              [`$(-${a}, ${a})$`, `$[0, ${a}]$`, `$\\mathbb{R}$`],
              `For real values, $${a * a} - x^2 \\ge 0 \\implies x^2 \\le ${a * a} \\implies x \\in [-${a}, ${a}]$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 8) + 2;
          list.push(
            createMcq(
              id,
              `The range of the function $f(x) = \\frac{|x - ${a}|}{x - ${a}}$ ($x \\neq ${a}$) is:`,
              `$\\{-1, 1\\}$`,
              [`$\\mathbb{R}$`, `$[-1, 1]$`, `$\\{0, 1\\}$`],
              `For $x > ${a}$, $f(x) = 1$; for $x < ${a}$, $f(x) = -1$. Thus Range $= \\{-1, 1\\}$.`,
              i
            )
          );
        } else if (type === 3) {
          const x = (k % 6) + 2;
          const val = -x - 0.3;
          list.push(
            createMcq(
              id,
              `Evaluate $[${val.toFixed(1)}]$ where $[\\cdot]$ is the Greatest Integer Function:`,
              `$${Math.floor(val)}$`,
              [`$${Math.ceil(val)}$`, `$${Math.floor(val) - 1}$`, `$${x}$`],
              `The greatest integer $\\le ${val.toFixed(1)}$ is $${Math.floor(val)}$.`,
              i
            )
          );
        } else {
          const c = (k % 6) + 1;
          list.push(
            createMcq(
              id,
              `The range of $f(x) = |x| + ${c}$ for $x \\in \\mathbb{R}$ is:`,
              `$[${c}, \\infty)$`,
              [`$(${c}, \\infty)$`, `$[0, \\infty)$`, `$\\mathbb{R}$`],
              `Since $|x| \\ge 0$, $|x| + ${c} \\ge ${c}$, so Range $= [${c}, \\infty)$.`,
              i
            )
          );
        }
        break;
      }

      case 3: {
        // Trigonometric Functions
        if (type === 0) {
          const degs = [30, 45, 60, 120, 135, 150, 210, 225, 240, 300, 315, 330];
          const d = degs[k % degs.length];
          list.push(
            createMcq(
              id,
              `Convert $${d}^\\circ$ into radian measure:`,
              `$${fmtFrac(d, 180)}\\pi$`,
              [
                `$${fmtFrac(d, 90)}\\pi$`,
                `$${fmtFrac(180, d)}\\pi$`,
                `$${fmtFrac(d, 360)}\\pi$`,
              ],
              `$\\text{Radians} = ${d}^\\circ \\times \\frac{\\pi}{180^\\circ} = ${fmtFrac(d, 180)}\\pi$.`,
              i
            )
          );
        } else if (type === 1) {
          const r = (k % 6) + 4;
          const arc = r * ((k % 3) + 2);
          list.push(
            createMcq(
              id,
              `In a circle of radius $${r}\\text{ cm}$, an arc of length $${arc}\\text{ cm}$ subtends a central angle (in radians) of:`,
              `$${fmtFrac(arc, r)}$ rad`,
              [`$${fmtFrac(r, arc)}$ rad`, `$${arc * r}$ rad`, `$${arc - r}$ rad`],
              `$\\theta = \\frac{l}{r} = \\frac{${arc}}{${r}} = ${fmtFrac(arc, r)}$ radians.`,
              i
            )
          );
        } else if (type === 2) {
          const angles = [
            { expr: '\\sin\\left(\\frac{13\\pi}{6}\\right)', ans: '$\\frac{1}{2}$' },
            { expr: '\\cos\\left(\\frac{7\\pi}{3}\\right)', ans: '$\\frac{1}{2}$' },
            { expr: '\\tan\\left(\\frac{19\\pi}{4}\\right)', ans: '$-1$' },
            { expr: '\\sin\\left(\\frac{31\\pi}{3}\\right)', ans: '$\\frac{\\sqrt{3}}{2}$' },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `The value of $${angles.expr}$ is:`,
              angles.ans,
              ['$0$', '$1$', '$-\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-1$'].filter(
                (v) => v !== angles.ans
              ),
              `Reduce modulo $2\\pi$ to the principal angle to obtain ${angles.ans}.`,
              i
            )
          );
        } else if (type === 3) {
          const triples = [
            [3, 4, 5],
            [5, 12, 13],
            [8, 15, 17],
            [7, 24, 25],
          ][k % 4];
          const [p, b, h] = triples;
          list.push(
            createMcq(
              id,
              `If $\\cos x = -\\frac{${b}}{${h}}$ and $x$ lies in Quadrant II, then $\\sin x$ equals:`,
              `$\\frac{${p}}{${h}}$`,
              [`$-\\frac{${p}}{${h}}$`, `$\\frac{${b}}{${h}}$`, `$-\\frac{${p}}{${b}}$`],
              `In Quadrant II, $\\sin x > 0$. Using $\\sin x = \\sqrt{1 - \\cos^2 x} = \\frac{${p}}{${h}}$.`,
              i
            )
          );
        } else {
          const m = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Simplify $\\frac{1 - \\cos ${2 * m}x}{2}$:`,
              `$\\sin^2 ${m}x$`,
              [`$\\cos^2 ${m}x$`, `$\\sin ${m}x$`, `$\\tan^2 ${m}x$`],
              `Using $1 - \\cos 2\\theta = 2\\sin^2\\theta$ with $\\theta = ${m}x$, expression equals $\\sin^2 ${m}x$.`,
              i
            )
          );
        }
        break;
      }

      case 4: {
        // Complex Numbers
        if (type === 0) {
          const exp = 4 * k + (k % 4);
          const vals = ['$1$', '$i$', '$-1$', '$-i$'];
          const ans = vals[exp % 4];
          list.push(
            createMcq(
              id,
              `The value of $i^{${exp}}$ is:`,
              ans,
              vals.filter((v) => v !== ans),
              `$${exp} \\equiv ${exp % 4} \\pmod 4$, so $i^{${exp}} = i^{${exp % 4}} = ${ans.replace(/\$/g, '')}$.`,
              i
            )
          );
        } else if (type === 1) {
          const triples = [
            [3, 4, 5],
            [5, 12, 13],
            [8, 15, 17],
            [6, 8, 10],
          ][k % 4];
          const [a, b, mod] = triples;
          list.push(
            createMcq(
              id,
              `The modulus of $z = ${a} - ${b}i$ is:`,
              `$${mod}$`,
              [`$${a + b}$`, `$${mod * mod}$`, `$${Math.abs(a - b)}$`],
              `$|z| = \\sqrt{${a}^2 + (-${b})^2} = \\sqrt{${mod * mod}} = ${mod}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 4) + 2;
          const b = (k % 3) + 1;
          const denom = a * a + b * b;
          list.push(
            createMcq(
              id,
              `The multiplicative inverse of $z = ${a} + ${b}i$ is:`,
              `$${fmtFrac(a, denom)} - ${fmtFrac(b, denom)}i$`,
              [
                `$${fmtFrac(a, denom)} + ${fmtFrac(b, denom)}i$`,
                `$${a} - ${b}i$`,
                `$${fmtFrac(b, denom)} - ${fmtFrac(a, denom)}i$`,
              ],
              `$z^{-1} = \\frac{\\bar{z}}{|z|^2} = \\frac{${a} - ${b}i}{${denom}}$.`,
              i
            )
          );
        } else if (type === 3) {
          const n = (k % 5) + 3;
          list.push(
            createMcq(
              id,
              `The conjugate of $z = -${n} + ${n + 2}i$ is:`,
              `$-${n} - ${n + 2}i$`,
              [`$${n} - ${n + 2}i$`, `$${n} + ${n + 2}i$`, `$-${n} + ${n + 2}i$`],
              `Conjugate reverses the sign of the imaginary part: $\\bar{z} = -${n} - ${n + 2}i$.`,
              i
            )
          );
        } else {
          const a = (k % 5) + 1;
          list.push(
            createMcq(
              id,
              `What is the sum $i^{${a}} + i^{${a + 1}} + i^{${a + 2}} + i^{${a + 3}}$?`,
              `$0$`,
              [`$1$`, `$i$`, `$-1$`],
              `The sum of any four consecutive powers of $i$ is always $0$.`,
              i
            )
          );
        }
        break;
      }

      case 5: {
        // Linear Inequalities
        if (type === 0) {
          const a = (k % 5) + 2;
          const b = a * ((k % 4) + 2);
          list.push(
            createMcq(
              id,
              `Solve $-${a}x \\ge ${b}$ for real $x$:`,
              `$(-\\infty, -${b / a}]$`,
              [`$[-${b / a}, \\infty)$`, `$(-\\infty, -${b / a})$`, `$[${b / a}, \\infty)$`],
              `Dividing by negative $-${a}$ flips the inequality: $x \\le -${b / a}$.`,
              i
            )
          );
        } else if (type === 1) {
          const c = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If $|x| < ${c}$, then $x$ belongs to:`,
              `$(-${c}, ${c})$`,
              [`$[-${c}, ${c}]$`, `$(-\\infty, ${c})$`, `$(${c}, \\infty)$`],
              `$|x| < a \\iff -a < x < a$, so $x \\in (-${c}, ${c})$.`,
              i
            )
          );
        } else if (type === 2) {
          const rhs = (k % 5) + 4;
          const maxN = rhs - 1;
          list.push(
            createMcq(
              id,
              `How many natural numbers $x$ satisfy $5x < ${5 * rhs}$?`,
              `$${maxN}$`,
              [`$${rhs}$`, `$${maxN - 1}$`, `$${rhs + 1}$`],
              `$x < ${rhs}$ with $x \\in \\mathbb{N}$ gives $\\{1, 2, \\dots, ${maxN}\\}$, i.e., $${maxN}$ numbers.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 4) + 3;
          const b = a * 2;
          list.push(
            createMcq(
              id,
              `Solve $4x + ${a} < 6x + ${a + b}$ for real $x$:`,
              `$(-${b / 2}, \\infty)$`,
              [`$(-\\infty, -${b / 2})$`, `$[-${b / 2}, \\infty)$`, `$(${b / 2}, \\infty)$`],
              `$-2x < ${b} \\implies x > -${b / 2} \\implies (-${b / 2}, \\infty)$.`,
              i
            )
          );
        } else {
          const c = (k % 6) + 3;
          list.push(
            createMcq(
              id,
              `The solution of $|x| \\ge ${c}$ on the real line is:`,
              `$(-\\infty, -${c}] \\cup [${c}, \\infty)$`,
              [`$[-${c}, ${c}]$`, `$(-${c}, ${c})$`, `[${c}, \\infty)`],
              `$|x| \\ge ${c} \\iff x \\le -${c}$ or $x \\ge ${c}$.`,
              i
            )
          );
        }
        break;
      }

      case 6: {
        // Permutations & Combinations
        if (type === 0) {
          const n = (k % 5) + 5;
          const r = (k % 2) + 2;
          const ans = fact(n) / fact(n - r);
          list.push(
            createMcq(
              id,
              `Evaluate $^{${n}}P_{${r}}$:`,
              `$${ans}$`,
              [`$${nCr(n, r)}$`, `$${ans * 2}$`, `$${n * r}$`],
              `$^{${n}}P_{${r}} = \\frac{${n}!}{(${n}-${r})!} = ${ans}$.`,
              i
            )
          );
        } else if (type === 1) {
          const n = (k % 5) + 6;
          const r = 2;
          const ans = nCr(n, r);
          list.push(
            createMcq(
              id,
              `How many chords can be drawn through $${n}$ points on a circle?`,
              `$${ans}$`,
              [`$${ans * 2}$`, `$${n * 2}$`, `$${nCr(n - 1, 2)}$`],
              `Each chord requires 2 points: $^{${n}}C_2 = \\frac{${n}(${n - 1})}{2} = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 4) + 3;
          const b = (k % 3) + 2;
          const n = a + b;
          const ans = nCr(n, 2);
          list.push(
            createMcq(
              id,
              `If $^{n}C_{${a}} = {^nC_{${b}}}$ ($a \\neq b$), then $^nC_2$ equals:`,
              `$${ans}$`,
              [`$${n}$`, `$${ans * 2}$`, `$${nCr(n, 3)}$`],
              `$n = ${a} + ${b} = ${n}$. Thus $^{${n}}C_2 = ${ans}$.`,
              i
            )
          );
        } else if (type === 3) {
          const d = (k % 3) + 3;
          const avail = (k % 3) + 5;
          const ans = fact(avail) / fact(avail - d);
          list.push(
            createMcq(
              id,
              `How many $${d}$-digit numbers can be formed using digits $1$ to $${avail}$ without repetition?`,
              `$${ans}$`,
              [`$${Math.pow(avail, d)}$`, `$${nCr(avail, d)}$`, `$${avail * d}$`],
              `Without repetition, count is $^{${avail}}P_{${d}} = ${ans}$.`,
              i
            )
          );
        } else {
          const m = (k % 4) + 3;
          const w = (k % 3) + 3;
          const ans = nCr(m, 1) * nCr(w, 2);
          list.push(
            createMcq(
              id,
              `In how many ways can a committee of $1$ man and $2$ women be chosen from $${m}$ men and $${w}$ women?`,
              `$${ans}$`,
              [`$${m + nCr(w, 2)}$`, `$${nCr(m + w, 3)}$`, `$${ans * 2}$`],
              `$^{${m}}C_1 \\times {^{${w}}C_2} = ${m} \\times ${nCr(w, 2)} = ${ans}$.`,
              i
            )
          );
        }
        break;
      }

      case 7: {
        // Binomial Theorem
        if (type === 0) {
          const n = (k % 12) + 5;
          list.push(
            createMcq(
              id,
              `The total number of terms in the expansion of $(3x - 2y)^{${n}}$ is:`,
              `$${n + 1}$`,
              [`$${n}$`, `$${n - 1}$`, `$${2 * n}$`],
              `$(a+b)^n$ has $n + 1 = ${n + 1}$ terms.`,
              i
            )
          );
        } else if (type === 1) {
          const n = (k % 5) + 4;
          const ans = Math.pow(2, n);
          list.push(
            createMcq(
              id,
              `The sum of all binomial coefficients $\\sum_{r=0}^{${n}} {^{${n}}C_r}$ equals:`,
              `$${ans}$`,
              [`$${ans - 1}$`, `$${n * 2}$`, `$${ans / 2}$`],
              `Put $a=1, b=1$ in $(a+b)^{${n}}$ to get $2^{${n}} = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 3) + 2;
          const n = 4;
          const coeff = nCr(n, 2) * Math.pow(a, 2);
          list.push(
            createMcq(
              id,
              `The coefficient of $x^2$ in the expansion of $(1 + ${a}x)^4$ is:`,
              `$${coeff}$`,
              [`$${nCr(n, 2)}$`, `$${a * a}$`, `$${coeff * 2}$`],
              `Term is $^4C_2 (${a}x)^2 = 6 \\times ${a * a}x^2 = ${coeff}x^2$.`,
              i
            )
          );
        } else if (type === 3) {
          const n = (k % 6) + 5;
          const ans = Math.pow(4, n);
          list.push(
            createMcq(
              id,
              `Using Binomial Theorem, $\\sum_{r=0}^{${n}} 3^r \\, {^{${n}}C_r}$ equals:`,
              `$${ans}$`,
              [`$${Math.pow(3, n)}$`, `$${Math.pow(2, n)}$`, `$${3 * n}$`],
              `By $(1 + x)^n$ with $x = 3$, sum $= (1 + 3)^{${n}} = 4^{${n}} = ${ans}$.`,
              i
            )
          );
        } else {
          const n = (k % 5) + 3;
          list.push(
            createMcq(
              id,
              `Evaluate $\\sum_{r=0}^{${n}} (-1)^r \\, {^{${n}}C_r}$:`,
              `$0$`,
              [`$1$`, `$${Math.pow(2, n)}$`, `$-1$`],
              `Setting $x = -1$ in $(1+x)^{${n}}$ gives $(1 - 1)^{${n}} = 0$.`,
              i
            )
          );
        }
        break;
      }

      case 8: {
        // Sequences and Series (GP & AM-GM)
        if (type === 0) {
          const a = (k % 4) + 2;
          const r = (k % 3) + 2;
          const n = (k % 3) + 4;
          const ans = a * Math.pow(r, n - 1);
          list.push(
            createMcq(
              id,
              `Find the $${n}\\text{th}$ term of the GP: $${a}, ${a * r}, ${a * r * r}, \\dots$`,
              `$${ans}$`,
              [`$${ans * r}$`, `$${ans / r}$`, `$${a * r * n}$`],
              `$a_n = a r^{n-1} = ${a} \\cdot ${r}^{${n - 1}} = ${ans}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 5) + 2;
          const b = a * ((k % 3) + 2) * ((k % 3) + 2);
          const gm = Math.sqrt(a * b);
          list.push(
            createMcq(
              id,
              `The Geometric Mean (GM) of $${a}$ and $${b}$ is:`,
              `$${gm}$`,
              [`$${(a + b) / 2}$`, `$${a * b}$`, `$${gm + 2}$`],
              `$\\text{GM} = \\sqrt{${a} \\times ${b}} = ${gm}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 5) + 3;
          const r = 2;
          const n = 5;
          const sn = a * (Math.pow(r, n) - 1);
          list.push(
            createMcq(
              id,
              `Find the sum of the first $5$ terms of the GP: $${a}, ${2 * a}, ${4 * a}, \\dots$`,
              `$${sn}$`,
              [`$${sn + a}$`, `$${a * 16}$`, `$${sn - a}$`],
              `$S_5 = \\frac{${a}(2^5 - 1)}{2 - 1} = ${a}(31) = ${sn}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `Sum to infinity of the GP $${a}, \\frac{${a}}{2}, \\frac{${a}}{4}, \\dots$ is:`,
              `$${2 * a}$`,
              [`$${a}$`, `$${4 * a}$`, `$\\frac{${a}}{2}$`],
              `$S_\\infty = \\frac{a}{1 - r} = \\frac{${a}}{1 - 1/2} = ${2 * a}$.`,
              i
            )
          );
        } else {
          const a = (k % 5) + 2;
          const c = a * 9;
          list.push(
            createMcq(
              id,
              `If $${a}, x, ${c}$ are positive numbers in GP, then $x$ equals:`,
              `$${3 * a}$`,
              [`$${(a + c) / 2}$`, `$${9 * a}$`, `$${2 * a}$`],
              `$x^2 = ac = ${a}(${c}) \\implies x = 3(${a}) = ${3 * a}$.`,
              i
            )
          );
        }
        break;
      }

      case 9: {
        // Straight Lines
        if (type === 0) {
          const x1 = (k % 4) + 1;
          const y1 = (k % 3) + 2;
          const m = (k % 5) + 2;
          const x2 = x1 + 2;
          const y2 = y1 + 2 * m;
          list.push(
            createMcq(
              id,
              `The slope of the line passing through $(${x1}, ${y1})$ and $(${x2}, ${y2})$ is:`,
              `$${m}$`,
              [`$-${m}$`, `$\\frac{1}{${m}}$`, `$${2 * m}$`],
              `$m = \\frac{${y2}-${y1}}{${x2}-${x1}} = \\frac{${2 * m}}{2} = ${m}$.`,
              i
            )
          );
        } else if (type === 1) {
          const m = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `The slope of a line perpendicular to $y = ${m}x + 7$ is:`,
              `$-\\frac{1}{${m}}$`,
              [`$${m}$`, `$-${m}$`, `$\\frac{1}{${m}}$`],
              `For perpendicular lines, $m_1 m_2 = -1 \\implies m_2 = -\\frac{1}{${m}}$.`,
              i
            )
          );
        } else if (type === 2) {
          const d = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Distance between parallel lines $3x - 4y + ${d + 5} = 0$ and $3x - 4y + ${d} = 0$ is:`,
              `$1$`,
              [`$5$`, `$\\frac{${2 * d}}{5}$`, `$2$`],
              `$d = \\frac{|${d + 5} - ${d}|}{\\sqrt{3^2 + (-4)^2}} = \\frac{5}{5} = 1$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 5) + 2;
          const b = (k % 4) + 3;
          list.push(
            createMcq(
              id,
              `Equation of the line making $x$-intercept $${a}$ and $y$-intercept $${b}$ is:`,
              `$\\frac{x}{${a}} + \\frac{y}{${b}} = 1$`,
              [
                `$\\frac{x}{${b}} + \\frac{y}{${a}} = 1$`,
                `$${a}x + ${b}y = 1$`,
                `$\\frac{x}{${a}} - \\frac{y}{${b}} = 1$`,
              ],
              `Intercept form is $\\frac{x}{a} + \\frac{y}{b} = 1 \\implies \\frac{x}{${a}} + \\frac{y}{${b}} = 1$.`,
              i
            )
          );
        } else {
          const c = ((k % 4) + 1) * 5;
          list.push(
            createMcq(
              id,
              `Perpendicular distance of the origin $(0,0)$ from the line $3x + 4y - ${c} = 0$ is:`,
              `$${c / 5}$`,
              [`$${c}$`, `$\\frac{${c}}{7}$`, `$${c / 5 + 2}$`],
              `$d = \\frac{|0 + 0 - ${c}|}{\\sqrt{3^2 + 4^2}} = \\frac{${c}}{5} = ${c / 5}$.`,
              i
            )
          );
        }
        break;
      }

      case 10: {
        // Conic Sections
        if (type === 0) {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The focus and length of latus rectum of the parabola $y^2 = ${4 * a}x$ are:`,
              `Focus $(${a}, 0)$, LR $= ${4 * a}$`,
              [
                `Focus $(0, ${a})$, LR $= ${4 * a}$`,
                `Focus $(${4 * a}, 0)$, LR $= ${a}$`,
                `Focus $(-${a}, 0)$, LR $= ${2 * a}$`,
              ],
              `Compare with $y^2 = 4ax$: $a = ${a}$, Focus $= (${a}, 0)$, LR $= 4a = ${4 * a}$.`,
              i
            )
          );
        } else if (type === 1) {
          const r = (k % 7) + 3;
          const h = (k % 4) + 1;
          const ky = (k % 3) + 2;
          list.push(
            createMcq(
              id,
              `The centre and radius of the circle $(x - ${h})^2 + (y + ${ky})^2 = ${r * r}$ are:`,
              `Centre $(${h}, -${ky})$, $r = ${r}$`,
              [
                `Centre $(-${h}, ${ky})$, $r = ${r}$`,
                `Centre $(${h}, ${ky})$, $r = ${r * r}$`,
                `Centre $(${h}, -${ky})$, $r = ${r * r}$`,
              ],
              `Compare with $(x-h)^2+(y-k)^2=r^2$: centre $(${h}, -${ky})$ and radius $\\sqrt{${r * r}} = ${r}$.`,
              i
            )
          );
        } else if (type === 2) {
          const triples = [
            [3, 4, 5],
            [5, 12, 13],
            [8, 15, 17],
            [6, 8, 10],
          ][k % 4];
          const [b, c, a] = triples;
          list.push(
            createMcq(
              id,
              `The eccentricity of the ellipse $\\frac{x^2}{${a * a}} + \\frac{y^2}{${b * b}} = 1$ is:`,
              `$${fmtFrac(c, a)}$`,
              [`$${fmtFrac(b, a)}$`, `$${fmtFrac(a, c)}$`, `$${fmtFrac(c, b)}$`],
              `$c = \\sqrt{${a * a} - ${b * b}} = ${c}$, so $e = \\frac{c}{a} = ${fmtFrac(c, a)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const triples = [
            [3, 4, 5],
            [5, 12, 13],
            [8, 15, 17],
            [6, 8, 10],
          ][k % 4];
          const [a, b, c] = triples;
          list.push(
            createMcq(
              id,
              `The eccentricity of the hyperbola $\\frac{x^2}{${a * a}} - \\frac{y^2}{${b * b}} = 1$ is:`,
              `$${fmtFrac(c, a)}$`,
              [`$${fmtFrac(b, a)}$`, `$${fmtFrac(a, c)}$`, `$${fmtFrac(c, b)}$`],
              `$c = \\sqrt{${a * a} + ${b * b}} = ${c}$, so $e = \\frac{c}{a} = ${fmtFrac(c, a)}$.`,
              i
            )
          );
        } else {
          const a = (k % 5) + 4;
          const b = (k % 3) + 2;
          list.push(
            createMcq(
              id,
              `Length of the latus rectum of ellipse $\\frac{x^2}{${a * a}} + \\frac{y^2}{${b * b}} = 1$ ($a > b$) is:`,
              `$${fmtFrac(2 * b * b, a)}$`,
              [`$${fmtFrac(2 * a * a, b)}$`, `$${fmtFrac(b * b, a)}$`, `$${2 * a}$`],
              `$\\text{LR} = \\frac{2b^2}{a} = \\frac{2(${b * b})}{${a}} = ${fmtFrac(2 * b * b, a)}$.`,
              i
            )
          );
        }
        break;
      }

      case 11: {
        // Introduction to 3D Geometry
        if (type === 0) {
          const octs = [
            { pt: '(2, 3, 4)', ans: 'Octant I' },
            { pt: '(-2, 3, 4)', ans: 'Octant II' },
            { pt: '(-2, -3, 4)', ans: 'Octant III' },
            { pt: '(2, -3, -4)', ans: 'Octant VIII' },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `In which octant does the point $${octs.pt}$ lie?`,
              octs.ans,
              ['Octant I', 'Octant II', 'Octant III', 'Octant VIII'].filter((o) => o !== octs.ans),
              `Check signs of $(x, y, z)$: $z > 0$ for I–IV, $z < 0$ for V–VIII $\\implies$ ${octs.ans}.`,
              i
            )
          );
        } else if (type === 1) {
          const x = (k % 6) + 2;
          const y = (k % 5) + 3;
          const z = (k % 4) + 1;
          list.push(
            createMcq(
              id,
              `The perpendicular distance of $P(${x}, ${y}, ${z})$ from the $xz$-plane is:`,
              `$${y}$`,
              [`$${x}$`, `$${z}$`, `$\\sqrt{${x * x + z * z}}$`],
              `Distance from $xz$-plane is $|y| = ${y}$.`,
              i
            )
          );
        } else if (type === 2) {
          const triples = [
            [3, 4, 5],
            [6, 8, 10],
            [5, 12, 13],
            [8, 15, 17],
          ][k % 4];
          const [y, z, d] = triples;
          const x = (k % 7) + 2;
          list.push(
            createMcq(
              id,
              `The distance of point $P(${x}, ${y}, ${z})$ from the $x$-axis is:`,
              `$${d}$`,
              [`$${x}$`, `$${y + z}$`, `$${d * d}$`],
              `Distance from $x$-axis $= \\sqrt{y^2 + z^2} = \\sqrt{${y}^2 + ${z}^2} = ${d}$.`,
              i
            )
          );
        } else if (type === 3) {
          const x1 = (k % 4) + 1;
          const y1 = (k % 3) + 2;
          const z1 = (k % 3) + 1;
          list.push(
            createMcq(
              id,
              `Distance between $A(${x1}, ${y1}, ${z1})$ and $B(${x1 + 2}, ${y1 + 3}, ${z1 + 6})$ is:`,
              `$7$`,
              [`$11$`, `$49$`, `$5$`],
              `$\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `Any point lying on the $z$-axis has coordinates of the form:`,
              `$(0, 0, z)$`,
              [`$(x, y, 0)$`, `$(0, y, z)$`, `$(x, 0, z)$`],
              `On the $z$-axis, both $x = 0$ and $y = 0$, giving $(0, 0, z)$.`,
              i
            )
          );
        }
        break;
      }

      case 12: {
        // Limits and Derivatives
        if (type === 0) {
          const p = (k % 7) + 2;
          const q = (k % 5) + 1;
          list.push(
            createMcq(
              id,
              `Evaluate $\\lim_{x \\to 0} \\frac{\\sin ${p}x}{${q}x}$:`,
              `$${fmtFrac(p, q)}$`,
              [`$${fmtFrac(q, p)}$`, `$1$`, `$0$`],
              `$\\frac{${p}}{${q}} \\lim_{x \\to 0} \\frac{\\sin ${p}x}{${p}x} = ${fmtFrac(p, q)}$.`,
              i
            )
          );
        } else if (type === 1) {
          const n = (k % 5) + 3;
          const a = (k % 3) + 2;
          const ans = n * Math.pow(a, n - 1);
          list.push(
            createMcq(
              id,
              `Evaluate $\\lim_{x \\to ${a}} \\frac{x^{${n}} - ${a}^{${n}}}{x - ${a}}$:`,
              `$${ans}$`,
              [`$${Math.pow(a, n)}$`, `$${n * a}$`, `$${ans / a}$`],
              `By standard limit $n a^{n-1} = ${n} \\cdot ${a}^{${n - 1}} = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const c = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `The derivative of $f(x) = x^3 + ${c}x^2 - 5$ at $x = 1$ is:`,
              `$${3 + 2 * c}$`,
              [`$${3 + c}$`, `$${c - 4}$`, `$${6 + 2 * c}$`],
              `$f'(x) = 3x^2 + ${2 * c}x \\implies f'(1) = 3 + ${2 * c} = ${3 + 2 * c}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Find $\\frac{d}{dx}(\\sin ${a}x)$:`,
              `$${a}\\cos ${a}x$`,
              [`$\\cos ${a}x$`, `$-${a}\\cos ${a}x$`, `$${a}\\sin ${a}x$`],
              `By Chain Rule, $\\frac{d}{dx}(\\sin ${a}x) = ${a}\\cos ${a}x$.`,
              i
            )
          );
        } else {
          const m = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\lim_{x \\to 0} \\frac{\\tan ${m}x}{x}$:`,
              `$${m}$`,
              [`$1$`, `$0$`, `$\\frac{1}{${m}}$`],
              `$${m} \\lim_{x \\to 0} \\frac{\\tan ${m}x}{${m}x} = ${m}$.`,
              i
            )
          );
        }
        break;
      }

      case 13: {
        // Statistics
        if (type === 0) {
          const sd = (k % 8) + 2;
          list.push(
            createMcq(
              id,
              `If the standard deviation of a dataset is $${sd}$, its variance is:`,
              `$${sd * sd}$`,
              [`$${sd * 2}$`, `$\\sqrt{${sd}}$`, `$${sd}$`],
              `Variance $= \\sigma^2 = ${sd}^2 = ${sd * sd}$.`,
              i
            )
          );
        } else if (type === 1) {
          const scale = (k % 4) + 2;
          const sd = (k % 5) + 3;
          list.push(
            createMcq(
              id,
              `If every observation in a data set with SD $= ${sd}$ is multiplied by $${scale}$, the new SD is:`,
              `$${sd * scale}$`,
              [`$${sd}$`, `$${sd + scale}$`, `$${sd * scale * scale}$`],
              `Multiplying observations by $k$ scales SD by $|k| = ${scale} \\implies ${sd * scale}$.`,
              i
            )
          );
        } else if (type === 2) {
          const add = (k % 9) + 5;
          const v = (k % 6) + 12;
          list.push(
            createMcq(
              id,
              `If variance of $10$ numbers is $${v}$ and $${add}$ is added to each number, the new variance is:`,
              `$${v}$`,
              [`$${v + add}$`, `$${v + add * add}$`, `$${v - add}$`],
              `Variance is independent of change of origin (adding a constant does not change variance).`,
              i
            )
          );
        } else if (type === 3) {
          const d = (k % 4) + 1;
          const arr = [2 * d, 4 * d, 6 * d, 8 * d, 10 * d];
          const mean = 6 * d;
          const md = (4 * d + 2 * d + 0 + 2 * d + 4 * d) / 5;
          list.push(
            createMcq(
              id,
              `Find the Mean Deviation about the mean for $${arr.join(', ')}$:`,
              `$${md}$`,
              [`$${mean}$`, `$${md + 1}$`, `$${2 * d}$`],
              `Mean $= ${mean}$. Deviations $|x_i - ${mean}|$ are $${4 * d}, ${2 * d}, 0, ${2 * d}, ${4 * d}$; average $= ${md}$.`,
              i
            )
          );
        } else {
          const sd = (k % 5) + 3;
          const mult = (k % 3) + 2;
          list.push(
            createMcq(
              id,
              `Variance of a data set is $${sd * sd}$. If each value is multiplied by $${mult}$, the new variance becomes:`,
              `$${sd * sd * mult * mult}$`,
              [`$${sd * sd * mult}$`, `$${sd * sd}$`, `$${sd * mult}$`],
              `New variance $= k^2 \\sigma^2 = ${mult}^2 \\times ${sd * sd} = ${sd * sd * mult * mult}$.`,
              i
            )
          );
        }
        break;
      }

      case 14:
      default: {
        // Probability
        if (type === 0) {
          const pa = ((k % 4) + 2) / 10;
          const pb = ((k % 3) + 3) / 10;
          const pab = 0.1;
          const ans = Math.round((pa + pb - pab) * 100) / 100;
          list.push(
            createMcq(
              id,
              `If $P(A) = ${pa.toFixed(1)}, P(B) = ${pb.toFixed(1)}$, and $P(A \\cap B) = 0.1$, find $P(A \\cup B)$:`,
              `$${ans.toFixed(2)}$`,
              [
                `$${(pa + pb).toFixed(2)}$`,
                `$${(1 - ans).toFixed(2)}$`,
                `$${(pa + pb + pab).toFixed(2)}$`,
              ],
              `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = ${pa.toFixed(1)} + ${pb.toFixed(1)} - 0.1 = ${ans.toFixed(2)}$.`,
              i
            )
          );
        } else if (type === 1) {
          const pu = (((k % 5) + 4) / 10).toFixed(1);
          const neither = (1 - parseFloat(pu)).toFixed(1);
          list.push(
            createMcq(
              id,
              `If $P(A \\cup B) = ${pu}$, find $P(A' \\cap B')$ (neither $A$ nor $B$):`,
              `$${neither}$`,
              [`$${pu}$`, `$${(parseFloat(pu) / 2).toFixed(2)}$`, `$1$`],
              `$P(A' \\cap B') = 1 - P(A \\cup B) = 1 - ${pu} = ${neither}$.`,
              i
            )
          );
        } else if (type === 2) {
          const pa = (((k % 4) + 2) / 10).toFixed(1);
          const pb = (((k % 3) + 2) / 10).toFixed(1);
          const ans = (parseFloat(pa) + parseFloat(pb)).toFixed(1);
          list.push(
            createMcq(
              id,
              `If $A$ and $B$ are mutually exclusive with $P(A) = ${pa}$ and $P(B) = ${pb}$, then $P(A \\cup B)$ is:`,
              `$${ans}$`,
              [
                `$${(parseFloat(pa) * parseFloat(pb)).toFixed(2)}$`,
                `$${(1 - parseFloat(ans)).toFixed(1)}$`,
                `$0$`,
              ],
              `For mutually exclusive events, $P(A \\cap B) = 0 \\implies P(A \\cup B) = ${pa} + ${pb} = ${ans}$.`,
              i
            )
          );
        } else if (type === 3) {
          const n = (k % 3) + 2;
          const total = Math.pow(2, n);
          list.push(
            createMcq(
              id,
              `A coin is tossed $${n}$ times. Find the probability of getting at least one head:`,
              `$${fmtFrac(total - 1, total)}$`,
              [`$${fmtFrac(1, total)}$`, `$${fmtFrac(n, total)}$`, `$\\frac{1}{2}$`],
              `$P(\\text{at least 1 H}) = 1 - P(\\text{all T}) = 1 - \\frac{1}{2^{${n}}} = ${fmtFrac(total - 1, total)}$.`,
              i
            )
          );
        } else {
          const r = (k % 4) + 3;
          const b = (k % 3) + 4;
          const tot = r + b;
          const fav = nCr(r, 2);
          const all = nCr(tot, 2);
          list.push(
            createMcq(
              id,
              `A bag has $${r}$ red and $${b}$ blue balls. Two balls are drawn together. Probability both are red is:`,
              `$${fmtFrac(fav, all)}$`,
              [
                `$${fmtFrac(nCr(b, 2), all)}$`,
                `$${fmtFrac(r * b, all)}$`,
                `$${fmtFrac(r, tot)}$`,
              ],
              `$P = \\frac{^{${r}}C_2}{^{${tot}}C_2} = ${fmtFrac(fav, all)}$.`,
              i
            )
          );
        }
        break;
      }
    }
  }

  return list;
}
