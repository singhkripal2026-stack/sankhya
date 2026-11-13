import { McqQuestion } from '../../types/curriculum';
import { createMcq, fmtFrac } from './mcqHelpers';

function fact(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

export function generateClass12Mcqs(chapterNumber: number): McqQuestion[] {
  const list: McqQuestion[] = [];

  for (let i = 0; i < 100; i++) {
    const id = `c12-ch${chapterNumber}-q${i + 1}`;
    const k = Math.floor(i / 5) + 1;
    const type = i % 5;

    switch (chapterNumber) {
      case 1: {
        // Relations and Functions
        if (type === 0) {
          const n = (k % 3) + 2;
          const ans = Math.pow(2, n * n - n);
          list.push(
            createMcq(
              id,
              `The number of reflexive relations on a set with $${n}$ elements is:`,
              `$${ans}$`,
              [`$${Math.pow(2, n * n)}$`, `$${Math.pow(2, n)}$`, `$${ans / 2}$`],
              `Number of reflexive relations on $n$ elements $= 2^{n^2 - n} = 2^{${n * n - n}} = ${ans}$.`,
              i
            )
          );
        } else if (type === 1) {
          const n = (k % 4) + 3;
          const ans = fact(n);
          list.push(
            createMcq(
              id,
              `How many bijective (one-one and onto) functions can be defined from a set of $${n}$ elements onto itself?`,
              `$${ans}$`,
              [`$${Math.pow(n, n)}$`, `$${Math.pow(2, n)}$`, `$${ans / 2}$`],
              `Number of bijections from an $n$-element set to itself is $n! = ${n}! = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const m = (k % 4) + 2;
          const n = m + 1;
          list.push(
            createMcq(
              id,
              `Let $A$ have $${m}$ elements and $B$ have $${n}$ elements. Total functions from $A$ to $B$ is:`,
              `$${Math.pow(n, m)}$`,
              [`$${Math.pow(m, n)}$`, `$${m * n}$`, `$${fact(n)}$`],
              `Total functions from $A$ to $B$ $= n(B)^{n(A)} = ${n}^{${m}} = ${Math.pow(n, m)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = ${a}x + 5$ is:`,
              'Both one-one and onto (Bijective)',
              [
                'One-one but not onto',
                'Onto but not one-one',
                'Neither one-one nor onto',
              ],
              `Every non-constant linear function on $\\mathbb{R}$ is strictly monotonic (1-1) with range $\\mathbb{R}$ (onto).`,
              i
            )
          );
        } else {
          const d = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `On $\\mathbb{Z}$, relation $R = \\{(a, b) : a - b \\text{ is divisible by } ${d}\\}$ is:`,
              'An equivalence relation',
              [
                'Reflexive and symmetric only',
                'Symmetric and transitive only',
                'Reflexive only',
              ],
              `$a-a=0$ (reflexive), $-(a-b)$ (symmetric), and sum of multiples (transitive) hold, so $R$ is an equivalence relation.`,
              i
            )
          );
        }
        break;
      }

      case 2: {
        // Inverse Trigonometric Functions
        if (type === 0) {
          const cases = [
            { q: '\\sin^{-1}\\left(-\\frac{1}{2}\\right)', a: '$-\\frac{\\pi}{6}$' },
            { q: '\\cos^{-1}\\left(-\\frac{1}{2}\\right)', a: '$\\frac{2\\pi}{3}$' },
            { q: '\\tan^{-1}(-\\sqrt{3})', a: '$-\\frac{\\pi}{3}$' },
            { q: '\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)', a: '$\\frac{3\\pi}{4}$' },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `Find the principal value of $${cases.q}$:`,
              cases.a,
              ['$-\\frac{\\pi}{6}$', '$\\frac{2\\pi}{3}$', '$-\\frac{\\pi}{3}$', '$\\frac{3\\pi}{4}$', '$\\frac{\\pi}{6}$'].filter(
                (v) => v !== cases.a
              ),
              `Using principal value branch and negative argument identity gives ${cases.a}.`,
              i
            )
          );
        } else if (type === 1) {
          const c = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The domain of the function $f(x) = \\sin^{-1}(${c}x - 1)$ is:`,
              `$[0, ${fmtFrac(2, c)}]$`,
              [
                `$[-1, 1]$`,
                `$[-${fmtFrac(1, c)}, ${fmtFrac(1, c)}]$`,
                `$(0, ${fmtFrac(2, c)})$`,
              ],
              `$-1 \\le ${c}x - 1 \\le 1 \\implies 0 \\le ${c}x \\le 2 \\implies 0 \\le x \\le ${fmtFrac(2, c)}$.`,
              i
            )
          );
        } else if (type === 2) {
          const num = (k % 3) + 3;
          const den = num + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\sin^{-1}\\left(\\sin \\frac{${num}\\pi}{${den}}\\right)$:`,
              `$\\frac{${den - num}\\pi}{${den}}$`,
              [
                `$\\frac{${num}\\pi}{${den}}$`,
                `$-\\frac{${num}\\pi}{${den}}$`,
                `$\\frac{\\pi}{${den}}$`,
              ],
              `Since $\\frac{${num}\\pi}{${den}} > \\frac{\\pi}{2}$, rewrite $\\sin\\left(\\pi - \\frac{${den - num}\\pi}{${den}}\\right) = \\sin\\frac{${den - num}\\pi}{${den}}$, which lies in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.`,
              i
            )
          );
        } else if (type === 3) {
          const x = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\sin\\left(\\sin^{-1}\\frac{1}{${x}} + \\cos^{-1}\\frac{1}{${x}}\\right)$:`,
              `$1$`,
              [`$0$`, `$\\frac{1}{${x}}$`, `$-1$`],
              `Since $\\sin^{-1} u + \\cos^{-1} u = \\frac{\\pi}{2}$ for $|u|\\le 1$, $\\sin(\\frac{\\pi}{2}) = 1$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `The principal value branch of $\\cos^{-1} x$ is:`,
              `$[0, \\pi]$`,
              [
                `$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$`,
                `$(0, \\pi)$`,
                `$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$`,
              ],
              `By definition, $\\cos^{-1}: [-1, 1] \\to [0, \\pi]$.`,
              i
            )
          );
        }
        break;
      }

      case 3: {
        // Matrices
        if (type === 0) {
          const m = (k % 4) + 2;
          const n = (k % 3) + 3;
          const p = (k % 5) + 1;
          list.push(
            createMcq(
              id,
              `If matrix $A$ is of order $${m} \\times ${n}$ and $B$ is of order $${n} \\times ${p}$, the order of $AB$ is:`,
              `$${m} \\times ${p}$`,
              [`$${n} \\times ${n}$`, `$${p} \\times ${m}$`, `$${m} \\times ${n}$`],
              `$(m \\times n)(n \\times p)$ yields a matrix of order $m \\times p = ${m} \\times ${p}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 7) + 2;
          const b = (k % 5) + 1;
          list.push(
            createMcq(
              id,
              `If $M = \\begin{bmatrix} 0 & a & -${b} \\\\ -${a} & 0 & 4 \\\\ b & -4 & 0 \\end{bmatrix}$ is skew-symmetric, then $a + b$ equals:`,
              `$${a + b}$`,
              [`$${a - b}$`, `$0$`, `$-${a + b}$`],
              `For skew-symmetric matrix, $M_{ij} = -M_{ji}$, so $a = ${a}$ and $b = ${b} \\implies a + b = ${a + b}$.`,
              i
            )
          );
        } else if (type === 2) {
          const n = (k % 3) + 2;
          const entries = n * n;
          const ans = Math.pow(2, entries);
          list.push(
            createMcq(
              id,
              `The number of all possible $${n} \\times ${n}$ matrices with each entry $0$ or $1$ is:`,
              `$${ans}$`,
              [`$${entries * 2}$`, `$${Math.pow(2, n)}$`, `$${ans / 2}$`],
              `Each of the $${entries}$ entries has $2$ choices, giving $2^{${entries}} = ${ans}$.`,
              i
            )
          );
        } else if (type === 3) {
          const c = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If $A$ is a square matrix satisfying $A^2 = A$, then $(I + A)^2 - ${c}A$ equals:`,
              `$I + ${3 - c}A$`,
              [`$I + ${2 - c}A$`, `$I - ${c}A$`, `$${3 - c}A$`],
              `$(I+A)^2 = I + 2A + A^2 = I + 3A$. Subtracting $${c}A$ gives $I + ${3 - c}A$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `For two invertible matrices $A$ and $B$ of same order, $(AB)^T$ equals:`,
              `$B^T A^T$`,
              [`$A^T B^T$`, `$(BA)^T$`, `$A^{-1} B^{-1}$`],
              `By reversal law of transpose, $(AB)^T = B^T A^T$.`,
              i
            )
          );
        }
        break;
      }

      case 4: {
        // Determinants
        if (type === 0) {
          const n = (k % 2) + 2; // 2 or 3
          const scalar = (k % 4) + 2;
          const detA = (k % 5) + 3;
          const ans = Math.pow(scalar, n) * detA;
          list.push(
            createMcq(
              id,
              `If $A$ is a square matrix of order $${n}$ and $|A| = ${detA}$, then $|${scalar}A|$ equals:`,
              `$${ans}$`,
              [`$${scalar * detA}$`, `$${Math.pow(scalar, n)}$`, `$${ans * scalar}$`],
              `$|kA| = k^n |A| = ${scalar}^{${n}} \\times ${detA} = ${ans}$.`,
              i
            )
          );
        } else if (type === 1) {
          const detA = (k % 7) + 2;
          const ans = detA * detA;
          list.push(
            createMcq(
              id,
              `If $A$ is a $3 \\times 3$ matrix with $|A| = ${detA}$, then $|\\text{adj}(A)|$ equals:`,
              `$${ans}$`,
              [`$${detA}$`, `$${detA * detA * detA}$`, `$${3 * detA}$`],
              `$|\\text{adj}(A)| = |A|^{n-1} = ${detA}^{3-1} = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const x = (k % 5) + 2;
          const sq = x * x;
          list.push(
            createMcq(
              id,
              `If $\\begin{vmatrix} x & 1 \\\\ ${sq} & x \\end{vmatrix} = 0$, then $x$ equals:`,
              `$\\pm ${x}$`,
              [`$${x}$ only`, `$\\pm ${sq}$`, `$0$`],
              `$x^2 - ${sq} = 0 \\implies x = \\pm ${x}$.`,
              i
            )
          );
        } else if (type === 3) {
          const detA = (k % 6) + 3;
          list.push(
            createMcq(
              id,
              `If $A$ is an invertible matrix with $|A| = ${detA}$, then $|A^{-1}|$ equals:`,
              `$\\frac{1}{${detA}}$`,
              [`$${detA}$`, `$-${detA}$`, `$\\frac{1}{${detA * detA}}$`],
              `$|A^{-1}| = \\frac{1}{|A|} = \\frac{1}{${detA}}$.`,
              i
            )
          );
        } else {
          const detA = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `If $A$ is a $3 \\times 3$ matrix with $|A| = ${detA}$, then $|A \\cdot \\text{adj}(A)|$ equals:`,
              `$${Math.pow(detA, 3)}$`,
              [`$${detA}$`, `$${detA * detA}$`, `$${3 * detA}$`],
              `$A(\\text{adj } A) = |A|I_3$, so $|A(\\text{adj } A)| = ||A|I_3| = |A|^3 = ${Math.pow(detA, 3)}$.`,
              i
            )
          );
        }
        break;
      }

      case 5: {
        // Continuity and Differentiability
        if (type === 0) {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The derivative of $\\sin(${a}x^2)$ with respect to $x$ is:`,
              `$${2 * a}x\\cos(${a}x^2)$`,
              [
                `$\\cos(${a}x^2)$`,
                `$${a}x\\cos(${a}x^2)$`,
                `$-${2 * a}x\\cos(${a}x^2)$`,
              ],
              `By Chain Rule, $\\cos(${a}x^2) \\cdot \\frac{d}{dx}(${a}x^2) = ${2 * a}x\\cos(${a}x^2)$.`,
              i
            )
          );
        } else if (type === 1) {
          const c = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If $f(x) = \\begin{cases} kx + 1, & x \\le ${c} \\\\ 3x - 5, & x > ${c} \\end{cases}$ is continuous at $x = ${c}$, find $k$:`,
              `$${fmtFrac(3 * c - 6, c)}$`,
              [
                `$${fmtFrac(3 * c - 5, c)}$`,
                `$3$`,
                `$${fmtFrac(3 * c - 4, c)}$`,
              ],
              `Set $k(${c}) + 1 = 3(${c}) - 5 \\implies ${c}k = ${3 * c - 6} \\implies k = ${fmtFrac(3 * c - 6, c)}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Find $\\frac{d}{dx}\\left(e^{\\tan ${a}x}\\right)$:`,
              `$${a}\\sec^2(${a}x)\\, e^{\\tan ${a}x}$`,
              [
                `$e^{\\tan ${a}x}$`,
                `$\\sec^2(${a}x)\\, e^{\\tan ${a}x}$`,
                `$${a}\\tan(${a}x)\\, e^{\\tan ${a}x}$`,
              ],
              `Derivative of $e^u$ is $e^u u' = e^{\\tan ${a}x} \\cdot ${a}\\sec^2(${a}x)$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `If $x = t^2$ and $y = ${2 * a}t$, then $\\frac{dy}{dx}$ equals:`,
              `$\\frac{${a}}{t}$`,
              [`$\\frac{t}{${a}}$`, `$${a}t$`, `$-\\frac{${a}}{t}$`],
              `$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{${2 * a}}{2t} = \\frac{${a}}{t}$.`,
              i
            )
          );
        } else {
          const m = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `If $y = \\tan^{-1}(${m}x)$, then $\\frac{dy}{dx}$ is:`,
              `$\\frac{${m}}{1 + ${m * m}x^2}$`,
              [
                `$\\frac{1}{1 + ${m * m}x^2}$`,
                `$\\frac{${m}}{\\sqrt{1 - ${m * m}x^2}}$`,
                `$\\frac{1}{1 + x^2}$`,
              ],
              `$\\frac{d}{dx}(\\tan^{-1} u) = \\frac{u'}{1 + u^2} = \\frac{${m}}{1 + ${m * m}x^2}$.`,
              i
            )
          );
        }
        break;
      }

      case 6: {
        // Application of Derivatives
        if (type === 0) {
          const r = (k % 6) + 3;
          list.push(
            createMcq(
              id,
              `The rate of change of the area of a circle with respect to its radius $r$ at $r = ${r}\\text{ cm}$ is:`,
              `$${2 * r}\\pi\\text{ cm}^2/\\text{cm}$`,
              [
                `$${r * r}\\pi\\text{ cm}^2/\\text{cm}$`,
                `$${r}\\pi\\text{ cm}^2/\\text{cm}$`,
                `$2\\pi\\text{ cm}^2/\\text{cm}$`,
              ],
              `$\\frac{dA}{dr} = \\frac{d}{dr}(\\pi r^2) = 2\\pi r = 2\\pi(${r}) = ${2 * r}\\pi$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 5) + 2;
          const x = (k % 4) + 5;
          const mr = 2 * a * x + 12;
          list.push(
            createMcq(
              id,
              `Total revenue from $x$ units is $R(x) = ${a}x^2 + 12x + 7$. Marginal revenue at $x = ${x}$ is:`,
              `$${mr}$`,
              [`$${mr + 12}$`, `$${2 * a * x}$`, `$${a * x * x + 12 * x + 7}$`],
              `$MR = R'(x) = ${2 * a}x + 12 \\implies R'(${x}) = ${2 * a}(${x}) + 12 = ${mr}$.`,
              i
            )
          );
        } else if (type === 2) {
          const r1 = (k % 4) + 1;
          const r2 = r1 + 4;
          const b = r1 + r2;
          const c = r1 * r2;
          list.push(
            createMcq(
              id,
              `Function $f(x) = \\frac{x^3}{3} - \\frac{${b}x^2}{2} + ${c}x + 1$ is strictly decreasing on:`,
              `$(${r1}, ${r2})$`,
              [
                `$(-\\infty, ${r1}) \\cup (${r2}, \\infty)$`,
                `$(-${r2}, -${r1})$`,
                `$(${r1}, \\infty)$`,
              ],
              `$f'(x) = x^2 - ${b}x + ${c} = (x - ${r1})(x - ${r2}) < 0$ on $(${r1}, ${r2})$.`,
              i
            )
          );
        } else if (type === 3) {
          const c = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `The minimum value of $f(x) = (x - ${c})^2 + 9$ for $x \\in \\mathbb{R}$ is:`,
              `$9$`,
              [`$${c}$`, `$0$`, `$${c * c + 9}$`],
              `Since $(x - ${c})^2 \\ge 0$, minimum occurs at $x = ${c}$ giving $f(${c}) = 9$.`,
              i
            )
          );
        } else {
          const s = (k % 5) + 4;
          list.push(
            createMcq(
              id,
              `Two positive numbers whose sum is $${2 * s}$ and whose product is maximum are:`,
              `$${s}$ and $${s}$`,
              [`$1$ and $${2 * s - 1}$`, `$${s - 2}$ and $${s + 2}$`, `$${s / 2}$ and $${1.5 * s}$`],
              `By AM–GM or derivative of $x(${2 * s} - x)$, maximum occurs when both numbers are equal: $${s}, ${s}$.`,
              i
            )
          );
        }
        break;
      }

      case 7: {
        // Integrals
        if (type === 0) {
          const a = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\int \\frac{dx}{x^2 + ${a * a}}$:`,
              `$\\frac{1}{${a}}\\tan^{-1}\\left(\\frac{x}{${a}}\\right) + C$`,
              [
                `$\\tan^{-1}\\left(\\frac{x}{${a}}\\right) + C$`,
                `$\\frac{1}{${2 * a}}\\ln\\left|\\frac{x-${a}}{x+${a}}\\right| + C$`,
                `$\\sin^{-1}\\left(\\frac{x}{${a}}\\right) + C$`,
              ],
              `Standard formula: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a} + C$.`,
              i
            )
          );
        } else if (type === 1) {
          const c = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\int e^x\\left(${c}\\sin x + ${c}\\cos x\\right)dx$:`,
              `$${c}e^x\\sin x + C$`,
              [
                `$${c}e^x\\cos x + C$`,
                `$-${c}e^x\\sin x + C$`,
                `$${c}e^x(\\sin x - \\cos x) + C$`,
              ],
              `Using $\\int e^x[f(x)+f'(x)]dx = e^x f(x) + C$ with $f(x) = ${c}\\sin x$.`,
              i
            )
          );
        } else if (type === 2) {
          const n = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\int_0^{\\pi/2} \\frac{\\sin^{${n}} x}{\\sin^{${n}} x + \\cos^{${n}} x}\\,dx$:`,
              `$\\frac{\\pi}{4}$`,
              [`$\\frac{\\pi}{2}$`, `$\\pi$`, `$0$`],
              `By King Property $P_4$: $2I = \\int_0^{\\pi/2} 1\\,dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$.`,
              i
            )
          );
        } else if (type === 3) {
          const c = (k % 7) + 1;
          const lim = '\\frac{\\pi}{2}';
          list.push(
            createMcq(
              id,
              `Evaluate $\\int_{-\\pi/2}^{\\pi/2} (x^3 + x\\cos x + ${c})\\,dx$:`,
              `$${c}\\pi$`,
              [`$0$`, `$${2 * c}\\pi$`, `$\\frac{${c}\\pi}{2}$`],
              `$x^3$ and $x\\cos x$ are odd on $[-${lim}, ${lim}]$ so their integral is $0$. Remaining $\\int_{-\\pi/2}^{\\pi/2} ${c}\\,dx = ${c}\\pi$.`,
              i
            )
          );
        } else {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Evaluate $\\int \\frac{dx}{\\sqrt{${a * a} - x^2}}$:`,
              `$\\sin^{-1}\\left(\\frac{x}{${a}}\\right) + C$`,
              [
                `$\\frac{1}{${a}}\\sin^{-1}\\left(\\frac{x}{${a}}\\right) + C$`,
                `$\\frac{1}{${a}}\\tan^{-1}\\left(\\frac{x}{${a}}\\right) + C$`,
                `$\\ln|x + \\sqrt{${a * a} - x^2}| + C$`,
              ],
              `Standard formula: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\left(\\frac{x}{a}\\right) + C$.`,
              i
            )
          );
        }
        break;
      }

      case 8: {
        // Application of Integrals
        if (type === 0) {
          const r = (k % 7) + 2;
          list.push(
            createMcq(
              id,
              `The area of the circle $x^2 + y^2 = ${r * r}$ in the first quadrant is:`,
              `$\\frac{${r * r}\\pi}{4}$`,
              [`$${r * r}\\pi$`, `$\\frac{${r * r}\\pi}{2}$`, `$${r}\\pi$`],
              `Total area $= \\pi r^2 = ${r * r}\\pi$; first quadrant is $\\frac{1}{4}$ of total $= \\frac{${r * r}\\pi}{4}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 5) + 3;
          const b = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `The total area enclosed by the ellipse $\\frac{x^2}{${a * a}} + \\frac{y^2}{${b * b}} = 1$ is:`,
              `$${a * b}\\pi$`,
              [`$${2 * a * b}\\pi$`, `$${a + b}\\pi$`, `$\\frac{${a * b}\\pi}{4}$`],
              `Area of ellipse $= \\pi ab = \\pi(${a})(${b}) = ${a * b}\\pi$.`,
              i
            )
          );
        } else if (type === 2) {
          const m = (k % 5) + 1;
          const b = (k % 3) + 2;
          const area = (b * b * b) / 3 * m;
          list.push(
            createMcq(
              id,
              `Area bounded by $y = ${m}x^2$, the $x$-axis, and $x = 0, x = ${b}$ is:`,
              `$${fmtFrac(m * b * b * b, 3)}$`,
              [
                `$${m * b * b}$`,
                `$${fmtFrac(m * b * b, 2)}$`,
                `$${Math.round(area) + 4}$`,
              ],
              `$A = \\int_0^{${b}} ${m}x^2\\,dx = \\left[\\frac{${m}x^3}{3}\\right]_0^{${b}} = ${fmtFrac(m * b * b * b, 3)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 4) + 1;
          list.push(
            createMcq(
              id,
              `Area bounded by $y = |x|$ from $x = -${a}$ to $x = ${a}$ and the $x$-axis is:`,
              `$${a * a}$`,
              [`$${a}$`, `$${2 * a * a}$`, `$\\frac{${a * a}}{2}$`],
              `$2 \\int_0^{${a}} x\\,dx = 2 \\cdot \\frac{${a}^2}{2} = ${a * a}$.`,
              i
            )
          );
        } else {
          const b = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Area bounded by the line $y = 2x$, the $x$-axis, and $x = ${b}$ is:`,
              `$${b * b}$`,
              [`$${2 * b}$`, `$\\frac{${b * b}}{2}$`, `$${2 * b * b}$`],
              `$\\int_0^{${b}} 2x\\,dx = [x^2]_0^{${b}} = ${b * b}$.`,
              i
            )
          );
        }
        break;
      }

      case 9: {
        // Differential Equations
        if (type === 0) {
          const ord = (k % 3) + 2;
          const deg = (k % 2) + 1;
          list.push(
            createMcq(
              id,
              `What is the sum of order and degree of $\\left(\\frac{d^{${ord}}y}{dx^{${ord}}}\\right)^{${deg}} + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$?`,
              `$${ord + deg}$`,
              [`$${ord + 4}$`, `$${ord * deg}$`, `$${ord + deg + 1}$`],
              `Highest derivative is order $${ord}$ with exponent (degree) $${deg}$. Sum $= ${ord} + ${deg} = ${ord + deg}$.`,
              i
            )
          );
        } else if (type === 1) {
          const c = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The Integrating Factor (IF) of $\\frac{dy}{dx} + \\frac{${c}}{x}y = x^2$ ($x > 0$) is:`,
              `$x^{${c}}$`,
              [`$e^{${c}x}$`, `$${c}\\ln x$`, `$\\frac{1}{x^{${c}}}$`],
              `$\\text{IF} = e^{\\int \\frac{${c}}{x}dx} = e^{${c}\\ln x} = x^{${c}}$.`,
              i
            )
          );
        } else if (type === 2) {
          const ord = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `How many arbitrary constants are present in the general solution of a differential equation of order $${ord}$?`,
              `$${ord}$`,
              [`$${ord - 1}$`, `$${ord + 1}$`, `$0$`],
              `The general solution of an $n\\text{th}$-order DE contains exactly $n = ${ord}$ arbitrary constants.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The Integrating Factor of $\\frac{dy}{dx} + ${a}y = e^{2x}$ is:`,
              `$e^{${a}x}$`,
              [`$e^{-${a}x}$`, `$${a}x$`, `$e^{2x}$`],
              `$\\text{IF} = e^{\\int ${a}\\,dx} = e^{${a}x}$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `The degree of the differential equation $\\frac{d^2y}{dx^2} + \\sin\\left(\\frac{dy}{dx}\\right) = 0$ is:`,
              'Not defined',
              ['1', '2', '0'],
              `Because $\\sin(dy/dx)$ is not a polynomial in derivatives, the degree is not defined.`,
              i
            )
          );
        }
        break;
      }

      case 10: {
        // Vector Algebra
        if (type === 0) {
          const triples = [
            [1, 2, 2, 3],
            [2, 3, 6, 7],
            [1, 4, 8, 9],
            [3, 4, 12, 13],
          ][k % 4];
          const [a, b, c, mag] = triples;
          list.push(
            createMcq(
              id,
              `The magnitude of the vector $\\vec{v} = ${a}\\hat{i} - ${b}\\hat{j} + ${c}\\hat{k}$ is:`,
              `$${mag}$`,
              [`$${a + b + c}$`, `$${mag * mag}$`, `$${mag + 2}$`],
              `$|\\vec{v}| = \\sqrt{${a}^2 + (-${b})^2 + ${c}^2} = \\sqrt{${mag * mag}} = ${mag}$.`,
              i
            )
          );
        } else if (type === 1) {
          const p = (k % 5) + 2;
          const ans = 2 * p - 6;
          list.push(
            createMcq(
              id,
              `If $\\vec{a} = ${p}\\hat{i} + 2\\hat{j} - 3\\hat{k}$ and $\\vec{b} = 2\\hat{i} + \\lambda\\hat{j} + 2\\hat{k}$ are perpendicular, find $\\lambda$:`,
              `$${fmtFrac(6 - 2 * p, 2)}$`,
              [
                `$${fmtFrac(2 * p - 6, 2)}$`,
                `$0$`,
                `$${ans}$`,
              ],
              `$\\vec{a}\\cdot\\vec{b} = 0 \\implies ${2 * p} + 2\\lambda - 6 = 0 \\implies \\lambda = ${fmtFrac(6 - 2 * p, 2)}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 4) + 2;
          const b = (k % 3) + 3;
          list.push(
            createMcq(
              id,
              `If $|\\vec{a}| = ${a}, |\\vec{b}| = ${b}$, and $|\\vec{a} \\times \\vec{b}| = \\frac{${a * b}}{2}$, the acute angle between $\\vec{a}$ and $\\vec{b}$ is:`,
              `$30^\\circ$`,
              [`$45^\\circ$`, `$60^\\circ$`, `$90^\\circ$`],
              `$\\sin\\theta = \\frac{|\\vec{a}\\times\\vec{b}|}{|\\vec{a}||\\vec{b}|} = \\frac{1}{2} \\implies \\theta = 30^\\circ$.`,
              i
            )
          );
        } else if (type === 3) {
          const p = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `Find the projection of $\\vec{a} = ${p}\\hat{i} + 3\\hat{j} + 2\\hat{k}$ on $\\vec{b} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$:`,
              `$${fmtFrac(p + 10, 3)}$`,
              [`$${p + 10}$`, `$${fmtFrac(p + 6, 3)}$`, `$3$`],
              `$\\text{Proj} = \\frac{${p}(1) + 3(2) + 2(2)}{\\sqrt{1^2+2^2+2^2}} = \\frac{${p + 10}}{3} = ${fmtFrac(p + 10, 3)}$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `If $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors with $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, then $\\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{c} + \\vec{c}\\cdot\\vec{a}$ equals:`,
              `$-\\frac{3}{2}$`,
              [`$\\frac{3}{2}$`, `$0$`, `$-3$`],
              `$(\\vec{a}+\\vec{b}+\\vec{c})^2 = 0 \\implies 1 + 1 + 1 + 2(\\sum \\vec{a}\\cdot\\vec{b}) = 0 \\implies -\\frac{3}{2}$.`,
              i
            )
          );
        }
        break;
      }

      case 11: {
        // Three Dimensional Geometry
        if (type === 0) {
          const triples = [
            [1, 2, 2, 3],
            [2, 3, 6, 7],
            [3, 4, 12, 13],
            [1, 4, 8, 9],
          ][k % 4];
          const [a, b, c, mag] = triples;
          list.push(
            createMcq(
              id,
              `If a line has direction ratios $${a}, -${b}, ${c}$, its direction cosines are:`,
              `$${fmtFrac(a, mag)}, \\; -${fmtFrac(b, mag)}, \\; ${fmtFrac(c, mag)}$`,
              [
                `$${a}, \\; -${b}, \\; ${c}$`,
                `$${fmtFrac(a, a + b + c)}, \\; -${fmtFrac(b, a + b + c)}, \\; ${fmtFrac(c, a + b + c)}$`,
                `$${fmtFrac(a, mag * mag)}, \\; -${fmtFrac(b, mag * mag)}, \\; ${fmtFrac(c, mag * mag)}$`,
              ],
              `Divide by $\\sqrt{${a}^2+${b}^2+${c}^2} = ${mag}$.`,
              i
            )
          );
        } else if (type === 1) {
          const p = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `If lines $\\frac{x-1}{-${p}} = \\frac{y-2}{2} = \\frac{z-3}{1}$ and $\\frac{x-1}{3} = \\frac{y-1}{k} = \\frac{z-6}{2}$ are perpendicular, find $k$:`,
              `$${fmtFrac(3 * p - 2, 2)}$`,
              [`$${fmtFrac(2 - 3 * p, 2)}$`, `$0$`, `$${3 * p}$`],
              `$-${p}(3) + 2k + 1(2) = 0 \\implies 2k = ${3 * p - 2} \\implies k = ${fmtFrac(3 * p - 2, 2)}$.`,
              i
            )
          );
        } else if (type === 2) {
          list.push(
            createMcq(
              id,
              `For any line making angles $\\alpha, \\beta, \\gamma$ with the coordinate axes, $\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma$ equals:`,
              `$2$`,
              [`$1$`, `$3$`, `$0$`],
              `$(1 - \\cos^2\\alpha) + (1 - \\cos^2\\beta) + (1 - \\cos^2\\gamma) = 3 - 1 = 2$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 5) + 1;
          const b = (k % 4) + 2;
          const c = (k % 3) + 3;
          list.push(
            createMcq(
              id,
              `Vector equation of the line passing through $(${a}, ${b}, ${c})$ and parallel to $2\\hat{i} - \\hat{j} + 3\\hat{k}$ is:`,
              `$\\vec{r} = (${a}\\hat{i} + ${b}\\hat{j} + ${c}\\hat{k}) + \\lambda(2\\hat{i} - \\hat{j} + 3\\hat{k})$`,
              [
                `$\\vec{r} = (2\\hat{i} - \\hat{j} + 3\\hat{k}) + \\lambda(${a}\\hat{i} + ${b}\\hat{j} + ${c}\\hat{k})$`,
                `$\\vec{r} = (${a}\\hat{i} + ${b}\\hat{j} + ${c}\\hat{k}) - \\lambda(2\\hat{i} + \\hat{j} + 3\\hat{k})$`,
                `$\\vec{r} = \\lambda(${a + 2}\\hat{i} + ${b - 1}\\hat{j} + ${c + 3}\\hat{k})$`,
              ],
              `Formula $\\vec{r} = \\vec{a} + \\lambda\\vec{b}$ uses position vector of point as $\\vec{a}$ and direction vector as $\\vec{b}$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `Direction cosines of the $y$-axis are:`,
              `$(0, 1, 0)$`,
              [`$(1, 0, 0)$`, `$(0, 0, 1)$`, `$(1, 1, 1)$`],
              `$y$-axis makes $90^\\circ, 0^\\circ, 90^\\circ$ with $x, y, z$ axes, giving $(\\cos 90^\\circ, \\cos 0^\\circ, \\cos 90^\\circ) = (0, 1, 0)$.`,
              i
            )
          );
        }
        break;
      }

      case 12: {
        // Linear Programming
        if (type === 0) {
          const a = (k % 4) + 3;
          const b = (k % 3) + 2;
          const z1 = a * 4 + b * 0;
          const z2 = a * 2 + b * 5;
          const z3 = a * 0 + b * 4;
          const maxZ = Math.max(z1, z2, z3);
          list.push(
            createMcq(
              id,
              `Corner points of a bounded feasible region are $(0,0), (4,0), (2,5), (0,4)$. Maximum of $Z = ${a}x + ${b}y$ is:`,
              `$${maxZ}$`,
              [`$${z1}$`, `$${z3}$`, `$${maxZ + 3}$`].filter((v) => v !== `$${maxZ}$`),
              `Evaluate $Z$ at corner points: $Z(4,0)=${z1}, Z(2,5)=${z2}, Z(0,4)=${z3}$. Maximum is $${maxZ}$.`,
              i
            )
          );
        } else if (type === 1) {
          const p = (k % 5) + 2;
          const q = (k % 4) + 3;
          list.push(
            createMcq(
              id,
              `If $Z = px + qy$ attains the same optimal value at two corner points $(3, 4)$ and $(5, 2)$, then $Z$ is optimal at:`,
              'Every point on the segment joining $(3,4)$ and $(5,2)$',
              [
                'Only the midpoint $(4,3)$',
                'Only at $(3,4)$',
                'No point in the region',
              ],
              `When two adjacent corner points give the same optimal $Z$ ($p=${p}, q=${q}$), every point on the line segment joining them yields the same optimal value.`,
              i
            )
          );
        } else if (type === 2) {
          list.push(
            createMcq(
              id,
              `In an LPP, the constraints $x \\ge 0, y \\ge 0$ restrict the feasible region to:`,
              'First Quadrant',
              ['Second Quadrant', 'All four quadrants', 'Origin only'],
              `$x \\ge 0$ and $y \\ge 0$ define the non-negative First Quadrant.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 4) + 2;
          const b = (k % 3) + 3;
          const m = a * 1 + b * 3;
          list.push(
            createMcq(
              id,
              `Corner points of a bounded region are $(0,0), (3,0), (1,3), (0,2)$. Minimum of $Z = ${a}x + ${b}y$ (excluding origin, or over region with $x+y \\ge 2$ giving $(2,0),(3,0),(1,3),(0,2)$) is:`,
              `$${Math.min(2 * a, 2 * b, m)}$`,
              [`$${3 * a}$`, `$${m + 4}$`, `$0$`],
              `Evaluate $Z = ${a}x + ${b}y$ at $(2,0): ${2 * a}$, $(3,0): ${3 * a}$, $(1,3): ${m}$, $(0,2): ${2 * b}$. Minimum is $${Math.min(2 * a, 2 * b, m)}$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `The linear function $Z = ax + by$ which is to be maximised or minimised is called the:`,
              'Objective function',
              ['Feasible constraint', 'Optimal corner', 'Decision slack'],
              `By definition, $Z = ax + by$ is the Objective Function.`,
              i
            )
          );
        }
        break;
      }

      case 13:
      default: {
        // Probability
        if (type === 0) {
          const pa = 0.4;
          const pb = 0.5;
          const pab = ((k % 3) + 1) * 0.1;
          const ans = fmtFrac(Math.round(pab * 10), Math.round(pb * 10));
          list.push(
            createMcq(
              id,
              `If $P(A) = 0.4, P(B) = 0.5$, and $P(A \\cap B) = ${pab.toFixed(1)}$, find $P(A|B)$:`,
              `$${ans}$`,
              [
                `$${fmtFrac(Math.round(pab * 10), 4)}$`,
                `$${pab.toFixed(1)}$`,
                `$${(pa * pb).toFixed(2)}$`,
              ],
              `$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{${pab.toFixed(1)}}{0.5} = ${ans}$.`,
              i
            )
          );
        } else if (type === 1) {
          const pa = ((k % 4) + 2) / 10;
          const pb = ((k % 3) + 3) / 10;
          const union = Math.round((pa + pb - pa * pb) * 100) / 100;
          list.push(
            createMcq(
              id,
              `If $A$ and $B$ are independent events with $P(A) = ${pa.toFixed(1)}$ and $P(B) = ${pb.toFixed(1)}$, find $P(A \\cup B)$:`,
              `$${union.toFixed(2)}$`,
              [
                `$${(pa + pb).toFixed(2)}$`,
                `$${(pa * pb).toFixed(2)}$`,
                `$${(1 - union).toFixed(2)}$`,
              ],
              `$P(A \\cap B) = P(A)P(B) = ${(pa * pb).toFixed(2)}$. Then $P(A \\cup B) = ${pa.toFixed(1)} + ${pb.toFixed(1)} - ${(pa * pb).toFixed(2)} = ${union.toFixed(2)}$.`,
              i
            )
          );
        } else if (type === 2) {
          const c = (k % 4) + 1;
          const mean = 0 * 0.2 + 1 * 0.5 + 2 * 0.3 + c * 0;
          list.push(
            createMcq(
              id,
              `A random variable $X$ takes values $0, 1, 2$ with probabilities $0.2, 0.5, 0.3$. Its mean $E(X)$ is:`,
              `$${mean.toFixed(1)}$`,
              [`$1.0$`, `$1.5$`, `$0.8$`],
              `$E(X) = \\sum x_i p_i = 0(0.2) + 1(0.5) + 2(0.3) = 1.1$.`,
              i
            )
          );
          // Vary mean by k cleanly!
          const p0 = 0.2;
          const p2 = ((k % 4) + 1) * 0.1;
          const p1 = Math.round((1 - p0 - p2) * 10) / 10;
          const expVal = Math.round((0 * p0 + 1 * p1 + 2 * p2) * 10) / 10;
          list[list.length - 1] = createMcq(
            id,
            `A random variable $X$ takes values $0, 1, 2$ with probabilities $${p0}, ${p1}, ${p2}$. Find its mean $E(X)$:`,
            `$${expVal.toFixed(1)}$`,
            [
              `$${(expVal + 0.3).toFixed(1)}$`,
              `$${(expVal - 0.2).toFixed(1)}$`,
              `$1.0$`.includes(expVal.toFixed(1)) ? `$0.5$` : `$1.0$`,
            ],
            `$E(X) = 0(${p0}) + 1(${p1}) + 2(${p2}) = ${expVal.toFixed(1)}$.`,
            i
          );
        } else if (type === 3) {
          const a = (k % 3) + 2;
          const b = (k % 2) + 3;
          const pA = 0.5;
          const p1 = a / 5;
          const p2 = b / 5;
          const ans = fmtFrac(a, a + b);
          list.push(
            createMcq(
              id,
              `Two equally likely boxes: Box I has $${a}$ red out of $5$ balls; Box II has $${b}$ red out of $5$ balls. A red ball is drawn. Probability it came from Box I (by Bayes' Theorem) is:`,
              `$${ans}$`,
              [
                `$${fmtFrac(b, a + b)}$`,
                `$${fmtFrac(a, 5)}$`,
                `$\\frac{1}{2}$`,
              ],
              `$P(E_1|R) = \\frac{0.5 \\cdot (${p1.toFixed(1)})}{0.5(${p1.toFixed(1)}) + 0.5(${p2.toFixed(1)})} = ${ans}$ (Note $P(E_1)=${pA}$ cancels).`,
              i
            )
          );
        } else {
          const p1 = ((k % 3) + 1) / 5;
          const p2 = ((k % 2) + 1) / 4;
          const atLeastOne = Math.round((1 - (1 - p1) * (1 - p2)) * 100) / 100;
          list.push(
            createMcq(
              id,
              `Probabilities of solving a problem independently by $A$ and $B$ are $${p1.toFixed(2)}$ and $${p2.toFixed(2)}$. Probability the problem is solved is:`,
              `$${atLeastOne.toFixed(2)}$`,
              [
                `$${(p1 * p2).toFixed(2)}$`,
                `$${((1 - p1) * (1 - p2)).toFixed(2)}$`,
                `$${(p1 + p2).toFixed(2)}$`,
              ],
              `$P(\\text{solved}) = 1 - P(\\bar{A})P(\\bar{B}) = 1 - (${(1 - p1).toFixed(2)})(${(1 - p2).toFixed(2)}) = ${atLeastOne.toFixed(2)}$.`,
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
