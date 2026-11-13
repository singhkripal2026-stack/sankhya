import { McqQuestion } from '../../types/curriculum';
import { createMcq, fmtFrac, gcd, lcm } from './mcqHelpers';

export function generateClass10Mcqs(chapterNumber: number): McqQuestion[] {
  const list: McqQuestion[] = [];

  for (let i = 0; i < 100; i++) {
    const id = `c10-ch${chapterNumber}-q${i + 1}`;
    const k = Math.floor(i / 5) + 1;
    const type = i % 5;

    switch (chapterNumber) {
      case 1: {
        // Real Numbers
        if (type === 0) {
          const a = ((k % 6) + 2) * 6;
          const b = ((k % 5) + 3) * 6;
          const h = gcd(a, b);
          const l = lcm(a, b);
          list.push(
            createMcq(
              id,
              `Find $\\text{HCF}(${a}, ${b})$ and $\\text{LCM}(${a}, ${b})$:`,
              `HCF $= ${h}$, LCM $= ${l}$`,
              [
                `HCF $= ${h * 2}$, LCM $= ${l}$`,
                `HCF $= ${h}$, LCM $= ${a * b}$`,
                `HCF $= 1$, LCM $= ${l}$`,
              ],
              `Using prime factorisation, $\\text{HCF}(${a},${b}) = ${h}$ and $\\text{LCM} = \\frac{${a} \\times ${b}}{${h}} = ${l}$.`,
              i
            )
          );
        } else if (type === 1) {
          const h = (k % 6) + 4;
          const a = h * ((k % 4) + 2);
          const b = h * ((k % 3) + 5);
          const l = (a * b) / h;
          list.push(
            createMcq(
              id,
              `Given $\\text{HCF}(${a}, ${b}) = ${h}$, what is $\\text{LCM}(${a}, ${b})$?`,
              `$${l}$`,
              [`$${l + h}$`, `$${a * b}$`, `$${l / 2}$`],
              `$\\text{LCM} = \\frac{a \\times b}{\\text{HCF}} = \\frac{${a} \\times ${b}}{${h}} = ${l}$.`,
              i
            )
          );
        } else if (type === 2) {
          const p = [2, 3, 5, 7][k % 4];
          const q = [3, 5, 7, 11][k % 4];
          list.push(
            createMcq(
              id,
              `If $A = ${p}^2 \\cdot ${q}^3$ and $B = ${p}^3 \\cdot ${q}^2$, then $\\text{LCM}(A, B)$ is:`,
              `$${p}^3 \\cdot ${q}^3$`,
              [`$${p}^2 \\cdot ${q}^2$`, `$${p}^5 \\cdot ${q}^5$`, `$${p}^3 \\cdot ${q}^2$`],
              `LCM takes the highest power of each prime factor: $${p}^3 \\cdot ${q}^3$.`,
              i
            )
          );
        } else if (type === 3) {
          const base = [4, 6, 8, 9, 12, 14][k % 6];
          list.push(
            createMcq(
              id,
              `For any natural number $n$, can $${base}^n$ end with the digit $0$?`,
              'No, because 5 is not a prime factor',
              [
                'Yes, for all even $n$',
                'Yes, when $n$ is a multiple of 5',
                'Yes, for $n = 10$',
              ],
              `A number ending in $0$ must contain both $2$ and $5$ in its prime factorisation. $${base}^n$ lacks prime factor $5$.`,
              i
            )
          );
        } else {
          const s = [2, 3, 5, 7][k % 4];
          const m = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The number $${m} + \\sqrt{${s}}$ is always:`,
              'Irrational',
              ['Rational', 'An integer', 'Whole number'],
              `Sum of a rational number ($${m}$) and an irrational number ($\\sqrt{${s}}$) is always irrational.`,
              i
            )
          );
        }
        break;
      }

      case 2: {
        // Polynomials
        if (type === 0) {
          const r1 = (k % 5) + 1;
          const r2 = (k % 4) + 2;
          const sum = r1 + r2;
          const prod = r1 * r2;
          list.push(
            createMcq(
              id,
              `The sum and product of zeroes of $x^2 - ${sum}x + ${prod}$ are respectively:`,
              `$${sum}$ and $${prod}$`,
              [`$-${sum}$ and $${prod}$`, `$${sum}$ and $-${prod}$`, `$${prod}$ and $${sum}$`],
              `Here $a=1, b=-${sum}, c=${prod}$. Sum $= -\\frac{b}{a} = ${sum}$, Product $= \\frac{c}{a} = ${prod}$.`,
              i
            )
          );
        } else if (type === 1) {
          const s = (k % 6) + 2;
          const p = (k % 5) + 1;
          list.push(
            createMcq(
              id,
              `A quadratic polynomial whose sum of zeroes is $${s}$ and product of zeroes is $-${p}$ is:`,
              `$x^2 - ${s}x - ${p}$`,
              [`$x^2 + ${s}x - ${p}$`, `$x^2 - ${s}x + ${p}$`, `$x^2 - ${p}x - ${s}$`],
              `$p(x) = x^2 - (\\text{Sum})x + \\text{Product} = x^2 - ${s}x - ${p}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 4) + 1;
          const b = -((k % 5) + 3);
          const c = (k % 3) + 2;
          const sum = -b / a;
          const prod = c / a;
          const ans = sum * sum - 2 * prod;
          list.push(
            createMcq(
              id,
              `If $\\alpha, \\beta$ are zeroes of $${a}x^2 ${b}x + ${c}$, find $\\alpha^2 + \\beta^2$:`,
              `$${fmtFrac(Math.round(ans * a * a), a * a)}$`,
              [
                `$${fmtFrac(b * b + 2 * a * c, a * a)}$`,
                `$${fmtFrac(b * b, a * a)}$`,
                `$${fmtFrac(c, a)}$`,
              ],
              `$\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = \\left(${fmtFrac(-b, a)}\\right)^2 - 2\\left(${fmtFrac(c, a)}\\right) = ${fmtFrac(b * b - 2 * a * c, a * a)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const n = (k % 5) + 1;
          list.push(
            createMcq(
              id,
              `If the graph of $y = p(x)$ intersects the $x$-axis at $${n}$ distinct points, how many real zeroes does $p(x)$ have?`,
              `$${n}$`,
              [`$${n + 1}$`, `$${n - 1}$`, `$0$`],
              `Number of real zeroes equals the number of distinct $x$-intercepts on the graph ($${n}$).`,
              i
            )
          );
        } else {
          const m = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If one zero of the quadratic polynomial $p(x) = ${m}x^2 + 13x + k$ is the reciprocal of the other, then $k$ equals:`,
              `$${m}$`,
              [`$-${m}$`, `$13$`, `$\\frac{1}{${m}}$`],
              `Product of reciprocal zeroes is $\\alpha \\cdot \\frac{1}{\\alpha} = 1 = \\frac{c}{a} = \\frac{k}{${m}} \\implies k = ${m}$.`,
              i
            )
          );
        }
        break;
      }

      case 3: {
        // Pair of Linear Equations
        if (type === 0) {
          const m = (k % 4) + 3;
          const val = 3 * m;
          list.push(
            createMcq(
              id,
              `For what value of $k$ do $2x + 3y = 7$ and $${2 * m}x + ky = 14$ have no solution?`,
              `$${val}$`,
              [`$-${val}$`, `$${val + 2}$`, `$${m}$`],
              `For parallel lines (no solution), $\\frac{2}{${2 * m}} = \\frac{3}{k} \\neq \\frac{7}{14} \\implies k = ${val}$.`,
              i
            )
          );
        } else if (type === 1) {
          const x = (k % 5) + 3;
          const y = (k % 4) + 1;
          list.push(
            createMcq(
              id,
              `Solve $x + y = ${x + y}$ and $x - y = ${x - y}$:`,
              `$x = ${x}, \\; y = ${y}$`,
              [
                `$x = ${y}, \\; y = ${x}$`,
                `$x = ${x + 1}, \\; y = ${y - 1}$`,
                `$x = ${x + y}, \\; y = ${x - y}$`,
              ],
              `Adding both equations gives $2x = ${2 * x} \\implies x = ${x}$, so $y = ${y}$.`,
              i
            )
          );
        } else if (type === 2) {
          const c = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `The pair of equations $x = ${c}$ and $y = -${c + 1}$ graphically represents lines which are:`,
              `Intersecting at $(${c}, -${c + 1})$`,
              ['Parallel', 'Coincident', `Intersecting at $(-${c + 1}, ${c})$`],
              `$x = ${c}$ is vertical and $y = -${c + 1}$ is horizontal; they intersect perpendicularly at $(${c}, -${c + 1})$.`,
              i
            )
          );
        } else if (type === 3) {
          const kVal = (k % 5) + 2;
          list.push(
            createMcq(
              id,
              `If the lines $3x + 2ky = 2$ and $2x + 5y + 1 = 0$ are parallel, then $k$ equals:`,
              `$\\frac{15}{4}$`,
              [`$\\frac{4}{15}$`, `$\\frac{3}{5}$`, `$15$`],
              `$\\frac{3}{2} = \\frac{2k}{5} \\implies 4k = 15 \\implies k = \\frac{15}{4}$.`,
              i
            )
          );
        } else {
          const a = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `If $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$ satisfy $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$, the system is:`,
              'Consistent with infinitely many solutions',
              [
                'Inconsistent with no solution',
                'Consistent with a unique solution',
                'Represented by intersecting lines',
              ],
              `All three ratios equal means the two lines are coincident (dependent & consistent, infinitely many solutions).`,
              i
            )
          );
        }
        break;
      }

      case 4: {
        // Quadratic Equations
        if (type === 0) {
          const a = (k % 3) + 1;
          const b = (k % 5) + 4;
          const c = (k % 4) + 1;
          const D = b * b - 4 * a * c;
          list.push(
            createMcq(
              id,
              `The discriminant of $${a}x^2 + ${b}x + ${c} = 0$ is:`,
              `$${D}$`,
              [`$${D + 4 * a * c}$`, `$${b * b + 4 * a * c}$`, `$${-D}$`],
              `$D = b^2 - 4ac = ${b}^2 - 4(${a})(${c}) = ${b * b} - ${4 * a * c} = ${D}$.`,
              i
            )
          );
        } else if (type === 1) {
          const r = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If $x^2 - ${2 * r}x + k = 0$ has two equal real roots, then $k$ equals:`,
              `$${r * r}$`,
              [`$${2 * r}$`, `$${r}$`, `$-${r * r}$`],
              `Equal roots $\\implies D = 0 \\implies (-${2 * r})^2 - 4(1)(k) = 0 \\implies k = ${r * r}$.`,
              i
            )
          );
        } else if (type === 2) {
          const r1 = (k % 5) + 1;
          const r2 = -((k % 4) + 2);
          const b = -(r1 + r2);
          const c = r1 * r2;
          list.push(
            createMcq(
              id,
              `The roots of the quadratic equation $x^2 ${b >= 0 ? `+ ${b}` : `${b}`}x ${c} = 0$ are:`,
              `$${r1}, \\; ${r2}$`,
              [`$-${r1}, \\; ${-r2}$`, `$${r1}, \\; ${-r2}$`, `$${r1 + 1}, \\; ${r2 - 1}$`],
              `Factoring gives $(x - ${r1})(x + ${-r2}) = 0 \\implies x = ${r1}, ${r2}$.`,
              i
            )
          );
        } else if (type === 3) {
          const p = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `The nature of roots of $x^2 + ${p}x + ${p * p} = 0$ is:`,
              'No real roots',
              ['Two distinct real roots', 'Two equal real roots', 'One real and one zero root'],
              `$D = ${p}^2 - 4(1)(${p * p}) = -3(${p * p}) < 0 \\implies$ no real roots.`,
              i
            )
          );
        } else {
          const n = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If $x = ${n}$ is a root of $x^2 - kx + ${n * 3} = 0$, find $k$:`,
              `$${n + 3}$`,
              [`$${n - 3}$`, `$${3 * n}$`, `$${n}$`],
              `Substitute $x = ${n}$: $${n}^2 - k(${n}) + ${3 * n} = 0 \\implies k = ${n} + 3 = ${n + 3}$.`,
              i
            )
          );
        }
        break;
      }

      case 5: {
        // Arithmetic Progressions
        if (type === 0) {
          const a = (k % 7) + 2;
          const d = (k % 5) + 3;
          const n = (k % 8) + 8;
          const an = a + (n - 1) * d;
          list.push(
            createMcq(
              id,
              `Find the $${n}\\text{th}$ term of the AP: $${a}, ${a + d}, ${a + 2 * d}, \\dots$`,
              `$${an}$`,
              [`$${an + d}$`, `$${an - d}$`, `$${a + n * d}$`],
              `$a_n = a + (n-1)d = ${a} + (${n}-1)(${d}) = ${an}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 5) + 1;
          const d = (k % 4) + 2;
          const n = 10 + (k % 6);
          const sn = (n / 2) * (2 * a + (n - 1) * d);
          list.push(
            createMcq(
              id,
              `Find the sum of the first $${n}$ terms of the AP: $${a}, ${a + d}, ${a + 2 * d}, \\dots$`,
              `$${sn}$`,
              [`$${sn + n}$`, `$${sn - d}$`, `$${sn * 2}$`],
              `$S_{${n}} = \\frac{${n}}{2}[2(${a}) + (${n}-1)(${d})] = ${sn}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 6) + 3;
          const c = a + 2 * ((k % 5) + 2);
          const b = (a + c) / 2;
          list.push(
            createMcq(
              id,
              `If $${a}, x, ${c}$ are three consecutive terms of an AP, then $x$ equals:`,
              `$${b}$`,
              [`$${b + 1}$`, `$${a + c}$`, `$${c - a}$`],
              `In an AP, $2x = ${a} + ${c} \\implies x = \\frac{${a + c}}{2} = ${b}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 4) + 2;
          const b = (k % 5) + 3;
          const n = (k % 6) + 4;
          const an = a * (2 * n - 1) + b;
          list.push(
            createMcq(
              id,
              `If $S_n = ${a}n^2 + ${b}n$ for an AP, find its $${n}\\text{th}$ term $a_{${n}}$:`,
              `$${an}$`,
              [`$${an + 2 * a}$`, `$${a * n * n + b * n}$`, `$${2 * a * n}$`],
              `$a_n = S_n - S_{n-1} = ${a}(2n-1) + ${b} = ${an}$.`,
              i
            )
          );
        } else {
          const n = 20 + k * 2;
          const sum = (n * (n + 1)) / 2;
          list.push(
            createMcq(
              id,
              `The sum of the first $${n}$ positive integers $1 + 2 + \\dots + ${n}$ is:`,
              `$${sum}$`,
              [`$${sum - n}$`, `$${sum + n}$`, `$${n * n}$`],
              `$S_n = \\frac{n(n+1)}{2} = \\frac{${n}(${n + 1})}{2} = ${sum}$.`,
              i
            )
          );
        }
        break;
      }

      case 6: {
        // Triangles (Similarity & BPT)
        if (type === 0) {
          const ad = (k % 5) + 2;
          const db = (k % 4) + 3;
          const ae = ad * 2;
          const ec = db * 2;
          list.push(
            createMcq(
              id,
              `In $\\triangle ABC$, $DE \\parallel BC$. If $AD = ${ad}\\text{ cm}, DB = ${db}\\text{ cm}, AE = ${ae}\\text{ cm}$, then $EC$ is:`,
              `$${ec}\\text{ cm}$`,
              [`$${ec + 2}\\text{ cm}$`, `$${db}\\text{ cm}$`, `$${ae + ec}\\text{ cm}$`],
              `By BPT, $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{${ad}}{${db}} = \\frac{${ae}}{EC} \\implies EC = ${ec}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 1) {
          const r1 = (k % 4) + 2;
          const r2 = r1 + 1;
          const p1 = r1 * 6;
          const p2 = r2 * 6;
          list.push(
            createMcq(
              id,
              `If $\\triangle ABC \\sim \\triangle PQR$ with $AB = ${r1}\\text{ cm}, PQ = ${r2}\\text{ cm}$ and $\\text{Perim}(\\triangle ABC) = ${p1}\\text{ cm}$, find $\\text{Perim}(\\triangle PQR)$:`,
              `$${p2}\\text{ cm}$`,
              [`$${p1 + 3}\\text{ cm}$`, `$${p2 * 2}\\text{ cm}$`, `$${r2 * 4}\\text{ cm}$`],
              `Ratio of perimeters equals ratio of corresponding sides: $\\frac{${p1}}{P} = \\frac{${r1}}{${r2}} \\implies P = ${p2}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 2) {
          const ad = (k % 4) + 2;
          const ab = ad + ((k % 3) + 3);
          const bc = ab * 2;
          const de = ad * 2;
          list.push(
            createMcq(
              id,
              `In $\\triangle ABC$, $DE \\parallel BC$ with $AD = ${ad}\\text{ cm}, AB = ${ab}\\text{ cm}, BC = ${bc}\\text{ cm}$. Find $DE$:`,
              `$${de}\\text{ cm}$`,
              [`$${ab}\\text{ cm}$`, `$${bc / 2}\\text{ cm}$`, `$${de + 2}\\text{ cm}$`],
              `$\\triangle ADE \\sim \\triangle ABC \\implies \\frac{DE}{BC} = \\frac{AD}{AB} \\implies DE = \\frac{${ad}}{${ab}} \\times ${bc} = ${de}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = ((k % 4) + 4) * 10;
          const b = ((k % 3) + 5) * 10;
          const c = 180 - a - b;
          list.push(
            createMcq(
              id,
              `If $\\triangle ABC \\sim \\triangle DEF$, $\\angle A = ${a}^\\circ$ and $\\angle E = ${b}^\\circ$, then $\\angle C$ is:`,
              `$${c}^\\circ$`,
              [`$${a}^\\circ$`, `$${b}^\\circ$`, `$${a + b}^\\circ$`],
              `$\\angle B = \\angle E = ${b}^\\circ$, so $\\angle C = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = ${c}^\\circ$.`,
              i
            )
          );
        } else {
          const s = (k % 5) + 3;
          list.push(
            createMcq(
              id,
              `A vertical pole of length $${s}\\text{ m}$ casts a shadow $${s * 2}\\text{ m}$ long. Simultaneously a tower casts a shadow $${s * 10}\\text{ m}$ long. Height of tower is:`,
              `$${s * 5}\\text{ m}$`,
              [`$${s * 10}\\text{ m}$`, `$${s * 20}\\text{ m}$`, `$${s * 2}\\text{ m}$`],
              `By AA similarity, $\\frac{h}{${s * 10}} = \\frac{${s}}{${s * 2}} = \\frac{1}{2} \\implies h = ${s * 5}\\text{ m}$.`,
              i
            )
          );
        }
        break;
      }

      case 7: {
        // Coordinate Geometry
        if (type === 0) {
          const triples = [
            [3, 4, 5],
            [6, 8, 10],
            [5, 12, 13],
            [8, 15, 17],
          ][k % 4];
          const [dx, dy, d] = triples;
          const x1 = (k % 5) + 1;
          const y1 = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `The distance between $A(${x1}, ${y1})$ and $B(${x1 + dx}, ${y1 + dy})$ is:`,
              `$${d}$ units`,
              [`$${dx + dy}$ units`, `$${d + 2}$ units`, `$${Math.abs(dx - dy)}$ units`],
              `$d = \\sqrt{(${dx})^2 + (${dy})^2} = ${d}$ units.`,
              i
            )
          );
        } else if (type === 1) {
          const x1 = (k % 6) * 2 - 4;
          const y1 = (k % 5) * 2 + 2;
          const x2 = x1 + 6;
          const y2 = y1 - 4;
          list.push(
            createMcq(
              id,
              `The mid-point of the line segment joining $(${x1}, ${y1})$ and $(${x2}, ${y2})$ is:`,
              `$(${(x1 + x2) / 2}, ${(y1 + y2) / 2})$`,
              [
                `$(${x1 + x2}, ${y1 + y2})$`,
                `$(${(x2 - x1) / 2}, ${(y2 - y1) / 2})$`,
                `$(${(x1 + x2) / 2 + 1}, ${(y1 + y2) / 2})$`,
              ],
              `$M = \\left(\\frac{${x1}+${x2}}{2}, \\frac{${y1}+${y2}}{2}\\right) = (${(x1 + x2) / 2}, ${(y1 + y2) / 2})$.`,
              i
            )
          );
        } else if (type === 2) {
          const triples = [
            [3, 4, 5],
            [6, 8, 10],
            [5, 12, 13],
            [7, 24, 25],
          ][k % 4];
          const [x, y, d] = triples;
          list.push(
            createMcq(
              id,
              `The distance of the point $(-${x}, ${y})$ from the origin is:`,
              `$${d}$`,
              [`$${x + y}$`, `$${y - x}$`, `$${d * d}$`],
              `$\\sqrt{(-${x})^2 + ${y}^2} = \\sqrt{${x * x + y * y}} = ${d}$.`,
              i
            )
          );
        } else if (type === 3) {
          const m = (k % 3) + 1;
          const n = (k % 2) + 2;
          const y1 = -n * 2;
          const y2 = m * 2;
          list.push(
            createMcq(
              id,
              `In what ratio does the $x$-axis divide the segment joining $(1, ${y1})$ and $(4, ${y2})$?`,
              `$${fmtFrac(n, m).replace('\\frac{', '').replace('}{', ':').replace('}', '')}${gcd(n, m) === n && n === m ? '1:1' : ''}$`.includes(':')
                ? `$${n / gcd(n, m)} : ${m / gcd(n, m)}$`
                : `$${n} : ${m}$`,
              [`$${m} : ${n}$`, `$1 : ${m + n}$`, `$${n + 1} : ${m}$`],
              `Set $y$-coordinate $= 0$: $\\frac{k(${y2}) + 1(${y1})}{k+1} = 0 \\implies k = \\frac{${-y1}}{${y2}} = \\frac{${n}}{${m}}$.`,
              i
            )
          );
        } else {
          const a = (k % 5) + 1;
          const b = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `The centroid of the triangle with vertices $(${a}, 1), (${a + 3}, 5), (${a + 6}, 3)$ is:`,
              `$(${a + 3}, 3)$`,
              [`$(${a + 2}, 3)$`, `$(${a + 3}, 4)$`, `$(${3 * a + 9}, 9)$`],
              `$G = \\left(\\frac{${a}+${a + 3}+${a + 6}}{3}, \\frac{1+5+3}{3}\\right) = (${a + 3}, 3)$.`,
              i
            )
          );
        }
        break;
      }

      case 8: {
        // Introduction to Trigonometry
        if (type === 0) {
          const n = (k % 9) + 2;
          list.push(
            createMcq(
              id,
              `The value of $${n}\\sec^2 A - ${n}\\tan^2 A$ is:`,
              `$${n}$`,
              [`$1$`, `$0$`, `$${n * 2}$`],
              `$${n}(\\sec^2 A - \\tan^2 A) = ${n}(1) = ${n}$.`,
              i
            )
          );
        } else if (type === 1) {
          const pairs = [
            { q: '\\sin 30^\\circ + \\cos 60^\\circ', a: '$1$' },
            { q: '\\tan^2 45^\\circ + \\cos^2 30^\\circ - \\sin^2 60^\\circ', a: '$1$' },
            { q: '2\\sin 30^\\circ \\cos 30^\\circ', a: '$\\frac{\\sqrt{3}}{2}$' },
            { q: '\\sec 60^\\circ \\cdot \\cos 60^\\circ', a: '$1$' },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `Evaluate $${pairs.q}$:`,
              pairs.a,
              ['$0$', '$\\frac{1}{2}$', '$2$', '$\\sqrt{3}$'].filter((x) => x !== pairs.a),
              `Substitute standard angles $30^\\circ, 45^\\circ, 60^\\circ$ to obtain ${pairs.a}.`,
              i
            )
          );
        } else if (type === 2) {
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
              `If $\\sin A = \\frac{${p}}{${h}}$ ($A$ acute), then $\\cos A$ equals:`,
              `$\\frac{${b}}{${h}}$`,
              [`$\\frac{${p}}{${b}}$`, `$\\frac{${h}}{${b}}$`, `$\\frac{${b}}{${p}}$`],
              `Base $= \\sqrt{${h}^2 - ${p}^2} = ${b}$, so $\\cos A = \\frac{${b}}{${h}}$.`,
              i
            )
          );
        } else if (type === 3) {
          const m = (k % 6) + 3;
          list.push(
            createMcq(
              id,
              `If $\\sin\\theta + \\cos\\theta = \\sqrt{2}$, then $${m}(\\tan\\theta + \\cot\\theta)$ equals:`,
              `$${2 * m}$`,
              [`$${m}$`, `$${4 * m}$`, `$2$`],
              `Squaring gives $1 + 2\\sin\\theta\\cos\\theta = 2 \\implies \\sin\\theta\\cos\\theta = \\frac{1}{2}$. Thus $\\tan\\theta + \\cot\\theta = 2$, giving $${2 * m}$.`,
              i
            )
          );
        } else {
          const c = (k % 8) + 2;
          list.push(
            createMcq(
              id,
              `Simplify $${c}(1 - \\sin^2\\theta)\\sec^2\\theta$:`,
              `$${c}$`,
              [`$0$`, `$${c * 2}$`, `$1$`],
              `$(1 - \\sin^2\\theta)\\sec^2\\theta = \\cos^2\\theta \\cdot \\frac{1}{\\cos^2\\theta} = 1$, so result is $${c}$.`,
              i
            )
          );
        }
        break;
      }

      case 9: {
        // Some Applications of Trigonometry
        if (type === 0) {
          const d = ((k % 9) + 2) * 10;
          list.push(
            createMcq(
              id,
              `From a point $${d}\\text{ m}$ away from the foot of a tower, the angle of elevation of the top is $45^\\circ$. The tower height is:`,
              `$${d}\\text{ m}$`,
              [`$${d}\\sqrt{3}\\text{ m}$`, `$\\frac{${d}}{\\sqrt{3}}\\text{ m}$`, `$${d * 2}\\text{ m}$`],
              `$\\tan 45^\\circ = \\frac{h}{${d}} = 1 \\implies h = ${d}\\text{ m}$.`,
              i
            )
          );
        } else if (type === 1) {
          const d = ((k % 8) + 3) * 5;
          list.push(
            createMcq(
              id,
              `The angle of elevation of the top of a building from a point $${d}\\text{ m}$ from its base is $60^\\circ$. Height of building is:`,
              `$${d}\\sqrt{3}\\text{ m}$`,
              [`$${d}\\text{ m}$`, `$\\frac{${d}}{\\sqrt{3}}\\text{ m}$`, `$${d * 2}\\text{ m}$`],
              `$h = ${d}\\tan 60^\\circ = ${d}\\sqrt{3}\\text{ m}$.`,
              i
            )
          );
        } else if (type === 2) {
          const h = ((k % 7) + 2) * 3;
          list.push(
            createMcq(
              id,
              `A tree of height $${h}\\text{ m}$ casts a shadow of length $${h}\\sqrt{3}\\text{ m}$. The Sun’s angle of elevation is:`,
              `$30^\\circ$`,
              [`$45^\\circ$`, `$60^\\circ$`, `$90^\\circ$`],
              `$\\tan\\theta = \\frac{${h}}{${h}\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$.`,
              i
            )
          );
        } else if (type === 3) {
          const h = ((k % 8) + 3) * 10;
          list.push(
            createMcq(
              id,
              `A kite is flying at a height of $${h}\\text{ m}$ above ground with its string inclined at $30^\\circ$ to the horizontal. Length of string is:`,
              `$${2 * h}\\text{ m}$`,
              [`$${h}\\text{ m}$`, `$${h}\\sqrt{3}\\text{ m}$`, `$${h / 2}\\text{ m}$`],
              `$\\sin 30^\\circ = \\frac{${h}}{L} = \\frac{1}{2} \\implies L = ${2 * h}\\text{ m}$.`,
              i
            )
          );
        } else {
          const d = ((k % 6) + 2) * 10;
          list.push(
            createMcq(
              id,
              `An observer spots a car at angle of depression $30^\\circ$ from a cliff $${d}\\text{ m}$ high. Distance of car from cliff base is:`,
              `$${d}\\sqrt{3}\\text{ m}$`,
              [`$${d}\\text{ m}$`, `$\\frac{${d}}{\\sqrt{3}}\\text{ m}$`, `$${2 * d}\\text{ m}$`],
              `$\\tan 30^\\circ = \\frac{${d}}{x} \\implies x = ${d}\\sqrt{3}\\text{ m}$.`,
              i
            )
          );
        }
        break;
      }

      case 10: {
        // Circles (Tangents)
        if (type === 0) {
          const triples = [
            [5, 12, 13],
            [6, 8, 10],
            [7, 24, 25],
            [8, 15, 17],
          ][k % 4];
          const [r, t, op] = triples;
          list.push(
            createMcq(
              id,
              `From a point $P$ at distance $${op}\\text{ cm}$ from centre $O$, a tangent $PT$ of length $${t}\\text{ cm}$ is drawn. The radius is:`,
              `$${r}\\text{ cm}$`,
              [`$${op - t}\\text{ cm}$`, `$${r + 2}\\text{ cm}$`, `$${t}\\text{ cm}$`],
              `$r = \\sqrt{OP^2 - PT^2} = \\sqrt{${op}^2 - ${t}^2} = ${r}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 1) {
          const ang = ((k % 6) + 4) * 10;
          list.push(
            createMcq(
              id,
              `Tangents $PA$ and $PB$ from $P$ to a circle with centre $O$ are inclined at $${ang}^\\circ$. Find $\\angle POA$:`,
              `$${90 - ang / 2}^\\circ$`,
              [`$${ang}^\\circ$`, `$${180 - ang}^\\circ$`, `$${ang / 2}^\\circ$`],
              `$\\angle AOB = 180^\\circ - ${ang}^\\circ$. Since $OP$ bisects $\\angle AOB$, $\\angle POA = 90^\\circ - ${ang / 2}^\\circ = ${90 - ang / 2}^\\circ$.`,
              i
            )
          );
        } else if (type === 2) {
          const ab = (k % 5) + 5;
          const cd = (k % 4) + 6;
          const ad = (k % 3) + 4;
          const bc = ab + cd - ad;
          list.push(
            createMcq(
              id,
              `Quadrilateral $ABCD$ circumscribes a circle. If $AB = ${ab}\\text{ cm}, CD = ${cd}\\text{ cm}, AD = ${ad}\\text{ cm}$, then $BC$ is:`,
              `$${bc}\\text{ cm}$`,
              [`$${ab + cd}\\text{ cm}$`, `$${bc + 2}\\text{ cm}$`, `$${ad}\\text{ cm}$`],
              `$AB + CD = AD + BC \\implies ${ab} + ${cd} = ${ad} + BC \\implies BC = ${bc}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const dist = (k % 8) + 4;
          list.push(
            createMcq(
              id,
              `The distance between two parallel tangents of a circle of radius $${dist}\\text{ cm}$ is:`,
              `$${2 * dist}\\text{ cm}$`,
              [`$${dist}\\text{ cm}$`, `$${4 * dist}\\text{ cm}$`, `$0\\text{ cm}$`],
              `Two parallel tangents lie at opposite ends of a diameter, so distance $= 2r = ${2 * dist}\\text{ cm}$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `How many tangents can be drawn to a circle from an external point?`,
              '2',
              ['1', '0', 'Infinitely many'],
              'Exactly 2 tangents of equal length can be drawn from any external point to a circle.',
              i
            )
          );
        }
        break;
      }

      case 11: {
        // Areas Related to Circles
        if (type === 0) {
          const r = 7 * ((k % 3) + 1);
          const theta = [30, 60, 90, 120][k % 4];
          const area = Math.round(((theta / 360) * (22 / 7) * r * r) * 100) / 100;
          list.push(
            createMcq(
              id,
              `Find the area of a sector of angle $${theta}^\\circ$ in a circle of radius $${r}\\text{ cm}$ ($\\pi = \\frac{22}{7}$):`,
              `$${fmtFrac(theta * 22 * r * r, 360 * 7)}\\text{ cm}^2$`,
              [
                `$${fmtFrac(theta * 22 * r, 360 * 7)}\\text{ cm}^2$`,
                `$${22 * (r / 7) * r}\\text{ cm}^2$`,
                `$${area + 10}\\text{ cm}^2$`,
              ],
              `$A = \\frac{${theta}}{360} \\times \\frac{22}{7} \\times ${r}^2 = ${fmtFrac(theta * 22 * r * r, 360 * 7)}\\text{ cm}^2$.`,
              i
            )
          );
        } else if (type === 1) {
          const mins = ((k % 5) + 1) * 5;
          const deg = mins * 6;
          list.push(
            createMcq(
              id,
              `What angle is swept by the minute hand of a clock in $${mins}$ minutes?`,
              `$${deg}^\\circ$`,
              [`$${deg / 2}^\\circ$`, `$${mins}^\\circ$`, `$${deg * 2}^\\circ$`],
              `Minute hand sweeps $6^\\circ$ per minute, so in $${mins}$ min it sweeps $${mins} \\times 6^\\circ = ${deg}^\\circ$.`,
              i
            )
          );
        } else if (type === 2) {
          const r = 7 * ((k % 4) + 1);
          const arcLen = (60 / 360) * 2 * (22 / 7) * r;
          list.push(
            createMcq(
              id,
              `In a circle of radius $${r}\\text{ cm}$, an arc subtends $60^\\circ$ at the centre. The length of the arc is ($\\pi = \\frac{22}{7}$):`,
              `$${fmtFrac(2 * 22 * r, 6 * 7)}\\text{ cm}$`,
              [
                `$${fmtFrac(22 * r * r, 6 * 7)}\\text{ cm}$`,
                `$${(2 * 22 * r) / 7}\\text{ cm}$`,
                `$${Math.round(arcLen) + 3}\\text{ cm}$`,
              ],
              `$l = \\frac{60}{360} \\times 2\\pi r = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times ${r} = ${fmtFrac(2 * 22 * r, 6 * 7)}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const r = (k % 5) + 4;
          const seg = r * r;
          list.push(
            createMcq(
              id,
              `A chord of a circle of radius $${r}\\text{ cm}$ subtends a right angle at the centre. Area of $\\triangle OAB$ (to subtract from sector) is:`,
              `$${seg / 2}\\text{ cm}^2$`,
              [`$${seg}\\text{ cm}^2$`, `$${2 * seg}\\text{ cm}^2$`, `$${seg / 4}\\text{ cm}^2$`],
              `Since $\\angle AOB = 90^\\circ$, $\\text{Area}(\\triangle OAB) = \\frac{1}{2} r^2 = \\frac{${seg}}{2} = ${seg / 2}\\text{ cm}^2$.`,
              i
            )
          );
        } else {
          const r1 = (k % 4) + 3;
          const r2 = (k % 3) + 4;
          const R = r1 + r2;
          list.push(
            createMcq(
              id,
              `If the sum of circumferences of two circles of radii $${r1}\\text{ cm}$ and $${r2}\\text{ cm}$ equals the circumference of a circle of radius $R$, then $R$ is:`,
              `$${R}\\text{ cm}$`,
              [`$${Math.abs(r1 - r2)}\\text{ cm}$`, `$${r1 * r2}\\text{ cm}$`, `$${Math.round(Math.sqrt(r1 * r1 + r2 * r2) * 10) / 10}\\text{ cm}$`],
              `$2\\pi R = 2\\pi r_1 + 2\\pi r_2 \\implies R = ${r1} + ${r2} = ${R}\\text{ cm}$.`,
              i
            )
          );
        }
        break;
      }

      case 12: {
        // Surface Areas and Volumes
        if (type === 0) {
          const a = (k % 6) + 2;
          const sa = 10 * a * a;
          list.push(
            createMcq(
              id,
              `Two cubes each of side $${a}\\text{ cm}$ are joined end to end. The surface area of the resulting cuboid is:`,
              `$${sa}\\text{ cm}^2$`,
              [`$${12 * a * a}\\text{ cm}^2$`, `$${6 * a * a}\\text{ cm}^2$`, `$${8 * a * a}\\text{ cm}^2$`],
              `Dimensions are $2a \\times a \\times a$. Surface area $= 2(2a^2 + a^2 + 2a^2) = 10a^2 = ${sa}\\text{ cm}^2$.`,
              i
            )
          );
        } else if (type === 1) {
          const r = (k % 4) + 2;
          const h = (k % 5) + 5;
          list.push(
            createMcq(
              id,
              `A medicine capsule is a cylinder of radius $${r}\\text{ mm}$ and cylindrical length $${h}\\text{ mm}$ with two hemispherical ends. Its surface area in terms of $\\pi$ is:`,
              `$${2 * r * (h + 2 * r)}\\pi\\text{ mm}^2$`,
              [
                `$${2 * r * (h + r)}\\pi\\text{ mm}^2$`,
                `$${r * r * h}\\pi\\text{ mm}^2$`,
                `$${4 * r * h}\\pi\\text{ mm}^2$`,
              ],
              `$\\text{TSA} = 2\\pi rh + 4\\pi r^2 = 2\\pi r(h + 2r) = ${2 * r * (h + 2 * r)}\\pi\\text{ mm}^2$.`,
              i
            )
          );
        } else if (type === 2) {
          const r = (k % 4) + 3;
          const h = (k % 3) + 4;
          const ratio = fmtFrac(3 * 1, 1);
          list.push(
            createMcq(
              id,
              `A cylinder and a cone have the same radius $${r}\\text{ cm}$ and same height $${h}\\text{ cm}$. The ratio of volume of cylinder to volume of cone is:`,
              `$3 : 1$`,
              [`$1 : 3$`, `$2 : 1$`, `$4 : 3$`],
              `$\\frac{\\pi r^2 h}{\\frac{1}{3}\\pi r^2 h} = 3 : 1$ (${ratio} ratio).`,
              i
            )
          );
        } else if (type === 3) {
          const a = ((k % 4) + 2) * 2;
          const r = a / 2;
          list.push(
            createMcq(
              id,
              `A hemisphere of diameter $${a}\\text{ cm}$ surmounts a cube of side $${a}\\text{ cm}$. The total surface area of the solid is:`,
              `$${6 * a * a} + ${r * r}\\pi\\text{ cm}^2$`,
              [
                `$${6 * a * a} + ${2 * r * r}\\pi\\text{ cm}^2$`,
                `$${6 * a * a} - ${r * r}\\pi\\text{ cm}^2$`,
                `$${5 * a * a} + ${2 * r * r}\\pi\\text{ cm}^2$`,
              ],
              `$\\text{TSA} = 6a^2 - \\pi r^2 + 2\\pi r^2 = 6a^2 + \\pi r^2 = ${6 * a * a} + ${r * r}\\pi\\text{ cm}^2$.`,
              i
            )
          );
        } else {
          const r = (k % 4) + 2;
          const h = r * 3;
          list.push(
            createMcq(
              id,
              `Volume of a toy made of a cone of height $${h}\\text{ cm}$ mounted on a hemisphere of radius $${r}\\text{ cm}$ is:`,
              `$${(r * r * h) / 3 + (2 * r * r * r) / 3}\\pi\\text{ cm}^3$`,
              [
                `$${r * r * h}\\pi\\text{ cm}^3$`,
                `$${(4 * r * r * r) / 3}\\pi\\text{ cm}^3$`,
                `$${2 * r * r * h}\\pi\\text{ cm}^3$`,
              ],
              `$V = \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = ${((r * r * h) + 2 * r * r * r) / 3}\\pi\\text{ cm}^3$.`,
              i
            )
          );
        }
        break;
      }

      case 13: {
        // Statistics
        if (type === 0) {
          const mean = (k % 10) + 15;
          const med = mean + 2;
          const mode = 3 * med - 2 * mean;
          list.push(
            createMcq(
              id,
              `Using the empirical relation, if Mean $= ${mean}$ and Median $= ${med}$, then Mode equals:`,
              `$${mode}$`,
              [`$${mode - 4}$`, `$${mean + 1}$`, `$${2 * med - mean}$`],
              `$\\text{Mode} = 3\\,\\text{Median} - 2\\,\\text{Mean} = 3(${med}) - 2(${mean}) = ${mode}$.`,
              i
            )
          );
        } else if (type === 1) {
          const mode = (k % 8) + 20;
          const mean = mode - 3;
          const med = (mode + 2 * mean) / 3;
          list.push(
            createMcq(
              id,
              `If Mode $= ${mode}$ and Mean $= ${mean}$, find the Median:`,
              `$${med}$`,
              [`$${med + 2}$`, `$${(mode + mean) / 2}$`, `$${med - 1}$`],
              `$3\\,\\text{Median} = ${mode} + 2(${mean}) = ${mode + 2 * mean} \\implies \\text{Median} = ${med}$.`,
              i
            )
          );
        } else if (type === 2) {
          const f1 = (k % 6) + 12;
          const f0 = f1 - 4;
          const f2 = f1 - 6;
          const l = 20;
          const h = 10;
          const ans = l + ((f1 - f0) / (2 * f1 - f0 - f2)) * h;
          list.push(
            createMcq(
              id,
              `For modal class $20\\text{--}30$ with $f_1 = ${f1}, f_0 = ${f0}, f_2 = ${f2}$, the Mode is:`,
              `$${ans}$`,
              [`$${ans + 2}$`, `$${l + 5}$`, `$${ans - 3}$`],
              `$\\text{Mode} = 20 + \\frac{${f1}-${f0}}{2(${f1})-${f0}-${f2}} \\times 10 = ${ans}$.`,
              i
            )
          );
        } else if (type === 3) {
          const l = 30;
          const n = 50;
          const cf = 15 + (k % 5);
          const f = 10;
          const h = 10;
          const med = l + ((n / 2 - cf) / f) * h;
          list.push(
            createMcq(
              id,
              `In a distribution of $n = 50$, median class is $30\\text{--}40$, $cf = ${cf}$, $f = 10$. The Median is:`,
              `$${med}$`,
              [`$${med + 4}$`, `$${med - 2}$`, `$35$`],
              `$\\text{Median} = 30 + \\frac{25 - ${cf}}{10} \\times 10 = ${med}$.`,
              i
            )
          );
        } else {
          const a = ((k % 6) + 2) * 10 + 5;
          list.push(
            createMcq(
              id,
              `In Assumed Mean method $\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i}$, if $a = ${a}$, $\\sum f_i d_i = 60$, and $\\sum f_i = 30$, find $\\bar{x}$:`,
              `$${a + 2}$`,
              [`$${a - 2}$`, `$${a + 30}$`, `$${a + 0.5}$`],
              `$\\bar{x} = ${a} + \\frac{60}{30} = ${a + 2}$.`,
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
          const pPct = ((k % 9) + 1) * 7;
          const pDec = (pPct / 100).toFixed(2);
          const notP = ((100 - pPct) / 100).toFixed(2);
          list.push(
            createMcq(
              id,
              `If $P(E) = ${pDec}$, then the probability of “not $E$” is:`,
              `$${notP}$`,
              [`$${pDec}$`, `$${(1 + pPct / 100).toFixed(2)}$`, `$0$`],
              `$P(\\text{not } E) = 1 - ${pDec} = ${notP}$.`,
              i
            )
          );
        } else if (type === 1) {
          const queries = [
            { q: 'a red face card', num: 6 },
            { q: 'an ace', num: 4 },
            { q: 'a king of hearts', num: 1 },
            { q: 'a black queen', num: 2 },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `One card is drawn at random from a deck of $52$ cards. Find the probability of getting ${queries.q}:`,
              `$${fmtFrac(queries.num, 52)}$`,
              [
                `$${fmtFrac(queries.num + 2, 52)}$`,
                `$${fmtFrac(13, 52)}$`,
                `$${fmtFrac(queries.num, 26)}$`,
              ],
              `There are $${queries.num}$ favourable cards out of $52$, so $P = ${fmtFrac(queries.num, 52)}$.`,
              i
            )
          );
        } else if (type === 2) {
          const cases = [
            { q: 'a doublet', num: 6 },
            { q: 'a sum equal to $9$', num: 4 },
            { q: 'a sum greater than $10$', num: 3 },
            { q: 'both numbers prime', num: 9 },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `Two dice are rolled together. What is the probability of getting ${cases.q}?`,
              `$${fmtFrac(cases.num, 36)}$`,
              [
                `$${fmtFrac(cases.num + 3, 36)}$`,
                `$${fmtFrac(cases.num, 6)}$`,
                `$${fmtFrac(1, 18)}$`.includes(fmtFrac(cases.num, 36)) ? '$\\frac{5}{36}$' : '$\\frac{1}{18}$',
              ],
              `Total outcomes $= 36$, favourable $= ${cases.num}$, so $P = ${fmtFrac(cases.num, 36)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const r = (k % 5) + 3;
          const b = (k % 4) + 4;
          const tot = r + b;
          list.push(
            createMcq(
              id,
              `A bag contains $${r}$ red balls and $${b}$ black balls. One ball is drawn at random. Probability it is red is:`,
              `$${fmtFrac(r, tot)}$`,
              [`$${fmtFrac(b, tot)}$`, `$${fmtFrac(r, b)}$`, `$${fmtFrac(1, tot)}$`],
              `$P(\\text{Red}) = \\frac{${r}}{${r}+${b}} = ${fmtFrac(r, tot)}$.`,
              i
            )
          );
        } else {
          const neg = -((k % 5) + 1) * 0.2;
          list.push(
            createMcq(
              id,
              `Which of the following CANNOT be the probability of an event?`,
              `$${neg.toFixed(1)}$`,
              [`$0.25$`, `$\\frac{3}{4}$`, `$65\\%$`],
              `Probability satisfies $0 \\le P(E) \\le 1$, so it can never be negative ($${neg.toFixed(1)}$).`,
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
