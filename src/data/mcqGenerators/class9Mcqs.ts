import { McqQuestion } from '../../types/curriculum';
import { createMcq, fmtFrac } from './mcqHelpers';

export function generateClass9Mcqs(chapterNumber: number): McqQuestion[] {
  const list: McqQuestion[] = [];

  for (let i = 0; i < 100; i++) {
    const id = `c9-ch${chapterNumber}-q${i + 1}`;
    const k = Math.floor(i / 5) + 1;
    const type = i % 5;

    switch (chapterNumber) {
      case 1: {
        // Number Systems
        if (type === 0) {
          const base = [2, 3, 5, 6, 7][k % 5];
          const expNum = (k % 3) + 1;
          const val = Math.pow(base, expNum);
          list.push(
            createMcq(
              id,
              `Evaluate $(${Math.pow(base, 3)})^{${expNum}/3}$:`,
              `$${val}$`,
              [`$${val * base}$`, `$${base + expNum}$`, `$${Math.pow(base, 2)}$`],
              `Since $${Math.pow(base, 3)} = ${base}^3$, $(${base}^3)^{${expNum}/3} = ${base}^{${expNum}} = ${val}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = k + 2;
          const b = k + 1;
          const ans = a - b;
          list.push(
            createMcq(
              id,
              `The value of $(\\sqrt{${a}} + \\sqrt{${b}})(\\sqrt{${a}} - \\sqrt{${b}})$ is:`,
              `$${ans}$`,
              [`$${a + b}$`, `$\\sqrt{${a * b}}$`, `$${2 * a}$`],
              `Using $(x + y)(x - y) = x^2 - y^2$: $(\\sqrt{${a}})^2 - (\\sqrt{${b}})^2 = ${a} - ${b} = ${ans}$.`,
              i
            )
          );
        } else if (type === 2) {
          const d = (k % 8) + 1;
          list.push(
            createMcq(
              id,
              `Express $0.\\overline{${d}}$ in the form $\\frac{p}{q}$ ($q \\neq 0$):`,
              `$${fmtFrac(d, 9)}$`,
              [`$${fmtFrac(d, 10)}$`, `$${fmtFrac(d, 99)}$`, `$${fmtFrac(d + 1, 9)}$`],
              `Let $x = 0.\\overline{${d}}$. Then $10x - x = ${d} \\implies 9x = ${d} \\implies x = ${fmtFrac(d, 9)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = (k % 6) + 3;
          const b = a - 1;
          list.push(
            createMcq(
              id,
              `Rationalising the denominator of $\\frac{1}{\\sqrt{${a}} - \\sqrt{${b}}}$ gives:`,
              `$\\sqrt{${a}} + \\sqrt{${b}}$`,
              [`$\\sqrt{${a}} - \\sqrt{${b}}$`, `$\\frac{\\sqrt{${a}} + \\sqrt{${b}}}{${a + b}}$`, `$${a} - ${b}$`],
              `Multiply by conjugate $\\sqrt{${a}} + \\sqrt{${b}}$: denominator becomes ${a} - ${b} = 1, leaving $\\sqrt{${a}} + \\sqrt{${b}}$.`,
              i
            )
          );
        } else {
          const m = (k % 5) + 2;
          const n = (k % 4) + 1;
          const p = (k % 3) + 2;
          list.push(
            createMcq(
              id,
              `Simplify $${p}^{${m}} \\cdot ${p}^{${n}}$:`,
              `$$${p}^{${m + n}}$$`.replace('$$', '$').replace('$$', '$'),
              [`$${p}^{${m * n}}$`, `$${p}^{${m - n}}$`, `$${p * 2}^{${m + n}}$`],
              `By exponent law $a^m \\cdot a^n = a^{m+n}$, we get $${p}^{${m}+${n}} = ${p}^{${m + n}}$.`,
              i
            )
          );
        }
        break;
      }

      case 2: {
        // Polynomials
        if (type === 0) {
          const a = (k % 7) + 1;
          const b = (k % 5) + 2;
          const val = a * 1 * 1 + b * 1 - (a + b);
          list.push(
            createMcq(
              id,
              `If $p(x) = ${a}x^2 + ${b}x - ${a + b}$, then $p(1)$ equals:`,
              `$${val}$`,
              [`$${a + b}$`, `$${2 * a}$`, `$${-b}$`],
              `$p(1) = ${a}(1)^2 + ${b}(1) - ${a + b} = ${a} + ${b} - ${a + b} = ${val}$.`,
              i
            )
          );
        } else if (type === 1) {
          const r = (k % 6) + 1;
          const c = (k % 4) + 2;
          const kVal = -(r * r + c * r);
          list.push(
            createMcq(
              id,
              `If $(x - ${r})$ is a factor of $x^2 + ${c}x + k$, then $k$ equals:`,
              `$${kVal}$`,
              [`$${-kVal}$`, `$${r + c}$`, `$${r * c}$`],
              `By Factor Theorem, $p(${r}) = 0 \\implies ${r}^2 + ${c}(${r}) + k = 0 \\implies k = ${kVal}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 5) + 2;
          const b = (k % 4) + 1;
          list.push(
            createMcq(
              id,
              `Using identity $(x+a)(x+b)$, expand $(x + ${a})(x + ${b})$:`,
              `$x^2 + ${a + b}x + ${a * b}$`,
              [`$x^2 + ${a * b}x + ${a + b}$`, `$x^2 + ${a - b}x + ${a * b}$`, `$x^2 + ${a + b}x - ${a * b}$`],
              `$(x+${a})(x+${b}) = x^2 + (${a}+${b})x + (${a})(${b}) = x^2 + ${a + b}x + ${a * b}$.`,
              i
            )
          );
        } else if (type === 3) {
          const x = -(k % 4) - 2;
          const y = (k % 3) + 1;
          const z = -(x + y);
          const ans = 3 * x * y * z;
          list.push(
            createMcq(
              id,
              `Without calculating cubes directly, find $(${x})^3 + (${y})^3 + (${z})^3$:`,
              `$${ans}$`,
              [`$${-ans}$`, `$${x + y + z}$`, `$${ans + 6}$`],
              `Since $(${x}) + (${y}) + (${z}) = 0$, $x^3 + y^3 + z^3 = 3xyz = 3(${x})(${y})(${z}) = ${ans}$.`,
              i
            )
          );
        } else {
          const d = (k % 7) + 2;
          const coeff = (k % 5) + 3;
          list.push(
            createMcq(
              id,
              `The zero of the linear polynomial $p(x) = ${coeff}x - ${coeff * d}$ is:`,
              `$${d}$`,
              [`$-${d}$`, `$${coeff}$`, `$\\frac{1}{${d}}$`],
              `Set $${coeff}x - ${coeff * d} = 0 \\implies x = \\frac{${coeff * d}}{${coeff}} = ${d}$.`,
              i
            )
          );
        }
        break;
      }

      case 3: {
        // Coordinate Geometry
        if (type === 0) {
          const qIdx = k % 4;
          const x = (qIdx === 0 || qIdx === 3 ? 1 : -1) * ((k % 7) + 1);
          const y = (qIdx === 0 || qIdx === 1 ? 1 : -1) * ((k % 5) + 2);
          const qNames = ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'];
          list.push(
            createMcq(
              id,
              `In which quadrant does the point $(${x}, ${y})$ lie?`,
              qNames[qIdx],
              qNames.filter((_, idx) => idx !== qIdx),
              `Point $(${x}, ${y})$ has sign (${x > 0 ? '+' : '-'}, ${y > 0 ? '+' : '-'}), which lies in ${qNames[qIdx]}.`,
              i
            )
          );
        } else if (type === 1) {
          const x = ((k % 8) + 2) * (k % 2 === 0 ? 1 : -1);
          const y = ((k % 6) + 3) * (k % 3 === 0 ? -1 : 1);
          list.push(
            createMcq(
              id,
              `The perpendicular distance of the point $P(${x}, ${y})$ from the $x$-axis is:`,
              `$${Math.abs(y)}$`,
              [`$${Math.abs(x)}$`, `$${Math.abs(x) + Math.abs(y)}$`, `$-${Math.abs(y)}$`],
              `Distance of $(x, y)$ from the $x$-axis equals $|y| = |${y}| = ${Math.abs(y)}$.`,
              i
            )
          );
        } else if (type === 2) {
          const x = ((k % 9) + 1) * -1;
          const y = (k % 7) + 2;
          list.push(
            createMcq(
              id,
              `The perpendicular distance of the point $Q(${x}, ${y})$ from the $y$-axis is:`,
              `$${Math.abs(x)}$`,
              [`$${Math.abs(y)}$`, `$${x}$`, `$0$`],
              `Distance of $(x, y)$ from the $y$-axis equals $|x| = |${x}| = ${Math.abs(x)}$.`,
              i
            )
          );
        } else if (type === 3) {
          const x = (k % 9) + 1;
          const y = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `The mirror image of the point $(${x}, ${y})$ across the $x$-axis is:`,
              `$(${x}, -${y})$`,
              [`$(-${x}, ${y})$`, `$(-${x}, -${y})$`, `$(${y}, ${x})$`],
              `Reflecting $(x, y)$ across the $x$-axis changes the sign of the ordinate: $(${x}, -${y})$.`,
              i
            )
          );
        } else {
          const a = (k % 10) + 1;
          list.push(
            createMcq(
              id,
              `A point whose abscissa is $${a}$ and lies on the $x$-axis has coordinates:`,
              `$(${a}, 0)$`,
              [`$(0, ${a})$`, `$(${a}, ${a})$`, `$(-${a}, 0)$`],
              `Every point on the $x$-axis has $y = 0$, so the coordinates are $(${a}, 0)$.`,
              i
            )
          );
        }
        break;
      }

      case 4: {
        // Linear Equations in Two Variables
        if (type === 0) {
          const a = (k % 5) + 2;
          const b = (k % 4) + 1;
          const x0 = (k % 3) + 1;
          const y0 = (k % 3) + 2;
          const rhs = a * x0 + b * y0;
          list.push(
            createMcq(
              id,
              `If $(${x0}, ${y0})$ is a solution of $${a}x + ${b}y = k$, then $k$ equals:`,
              `$${rhs}$`,
              [`$${rhs + 2}$`, `$${a + b}$`, `$${rhs - a}$`],
              `Substitute $x = ${x0}, y = ${y0}$: $k = ${a}(${x0}) + ${b}(${y0}) = ${rhs}$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = (k % 6) + 2;
          const b = (k % 5) + 1;
          const c = (k % 7) + 3;
          list.push(
            createMcq(
              id,
              `When $${a}x = ${b}y + ${c}$ is written in standard form $Ax + By + C = 0$, the value of $B$ is:`,
              `$-${b}$`,
              [`$${b}$`, `$${a}$`, `$-${c}$`],
              `Rearranging gives $${a}x - ${b}y - ${c} = 0$, so $B = -${b}$.`,
              i
            )
          );
        } else if (type === 2) {
          const a = (k % 4) + 2;
          const c = a * ((k % 5) + 1);
          list.push(
            createMcq(
              id,
              `At what point does the line $${a}x + 3y = ${c}$ intersect the $x$-axis?`,
              `$(${c / a}, 0)$`,
              [`$(0, ${c / a})$`, `$(${c}, 0)$`, `$(0, ${c})$`],
              `On the $x$-axis, $y = 0 \\implies ${a}x = ${c} \\implies x = ${c / a}$. Point is $(${c / a}, 0)$.`,
              i
            )
          );
        } else if (type === 3) {
          const m = (k % 5) + 2;
          const x = (k % 4) + 1;
          list.push(
            createMcq(
              id,
              `Which point lies on the line $y = ${m}x + 1$?`,
              `$(${x}, ${m * x + 1})$`,
              [`$(${x}, ${m * x})$`, `$(${x}, ${m + x})$`, `$(${m * x + 1}, ${x})$`],
              `For $x = ${x}$, $y = ${m}(${x}) + 1 = ${m * x + 1}$.`,
              i
            )
          );
        } else {
          const p = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `How many solutions does the linear equation $${p}x + 5y = 12$ have?`,
              'Infinitely many solutions',
              ['Exactly one solution', 'Exactly two solutions', 'No solution'],
              'Every linear equation in two variables represents a line with infinitely many points, hence infinitely many solutions.',
              i
            )
          );
        }
        break;
      }

      case 5: {
        // Introduction to Euclid's Geometry
        if (type === 0) {
          const ab = (k % 8) + 6;
          list.push(
            createMcq(
              id,
              `If point $C$ lies between $A$ and $B$ such that $AC = BC$ and $AB = ${ab * 2}\\text{ cm}$, then $AC$ is:`,
              `$${ab}\\text{ cm}$`,
              [`$${ab * 2}\\text{ cm}$`, `$${ab * 4}\\text{ cm}$`, `$${ab + 2}\\text{ cm}$`],
              `Since $AC = BC$ and $AC + BC = AB$, $AC = \\frac{1}{2}AB = \\frac{1}{2}(${ab * 2}) = ${ab}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 1) {
          const dims = [
            { obj: 'a point', ans: '0' },
            { obj: 'a line', ans: '1' },
            { obj: 'a surface', ans: '2' },
            { obj: 'a solid', ans: '3' },
          ][k % 4];
          list.push(
            createMcq(
              id,
              `According to Euclid, the number of dimensions ${dims.obj} has is:`,
              dims.ans,
              ['0', '1', '2', '3'].filter((d) => d !== dims.ans),
              `In Euclidean geometry: Point = 0D, Line = 1D, Surface = 2D, Solid = 3D. Thus ${dims.obj} has ${dims.ans} dimension(s).`,
              i
            )
          );
        } else if (type === 2) {
          const x = (k % 9) + 5;
          list.push(
            createMcq(
              id,
              `If $x = y$ and $y = ${x}$, then $x = ${x}$ follows from which Euclid axiom?`,
              'Things equal to the same thing are equal to one another',
              [
                'The whole is greater than the part',
                'Equals subtracted from equals give equal remainders',
                'A circle can be drawn with any centre and radius',
              ],
              'This is Euclid’s Axiom 1 (transitivity of equality).',
              i
            )
          );
        } else if (type === 3) {
          const n = (k % 6) + 2;
          list.push(
            createMcq(
              id,
              `If $A = B$ and $${n}$ is added to both sides, then $A + ${n} = B + ${n}$. This uses:`,
              'Euclid’s Second Axiom',
              ['Euclid’s First Axiom', 'Euclid’s Fifth Postulate', 'Euclid’s Third Axiom'],
              'Euclid’s Second Axiom states: If equals are added to equals, the wholes are equal.',
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `How many distinct straight lines can be drawn passing through two given distinct points?`,
              'Exactly 1',
              ['0', '2', 'Infinitely many'],
              'By Euclid’s Postulate 1 (and Axiom 5.1), a unique straight line passes through two distinct points.',
              i
            )
          );
        }
        break;
      }

      case 6: {
        // Lines and Angles
        if (type === 0) {
          const a = ((k % 7) + 2) * 10;
          list.push(
            createMcq(
              id,
              `The complement of an angle measuring $${a}^\\circ$ is:`,
              `$${90 - a}^\\circ$`,
              [`$${180 - a}^\\circ$`, `$${a}^\\circ$`, `$${360 - a}^\\circ$`],
              `Complementary angles sum to $90^\\circ$, so complement $= 90^\\circ - ${a}^\\circ = ${90 - a}^\\circ$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = ((k % 12) + 3) * 10;
          list.push(
            createMcq(
              id,
              `Two angles form a linear pair. If one angle is $${a}^\\circ$, the other angle is:`,
              `$${180 - a}^\\circ$`,
              [`$${90 - a}^\\circ$`, `$${a}^\\circ$`, `$${360 - a}^\\circ$`],
              `Linear pair angles sum to $180^\\circ$, so other angle $= 180^\\circ - ${a}^\\circ = ${180 - a}^\\circ$.`,
              i
            )
          );
        } else if (type === 2) {
          const r1 = (k % 4) + 1;
          const r2 = r1 + 1;
          const total = r1 + r2;
          const unit = 180 / total;
          const larger = Math.round(r2 * unit * 10) / 10;
          const smaller = Math.round(r1 * unit * 10) / 10;
          list.push(
            createMcq(
              id,
              `Two supplementary angles are in the ratio $${r1} : ${r2}$. The larger angle is:`,
              `$${larger}^\\circ$`,
              [`$${smaller}^\\circ$`, `$${Math.round(unit)}^\\circ$`, `$${90}^\\circ$`],
              `$(${r1}+${r2})x = 180^\\circ \\implies x = ${unit}^\\circ$. Larger angle $= ${r2}(${unit}^\\circ) = ${larger}^\\circ$.`,
              i
            )
          );
        } else if (type === 3) {
          const ang = ((k % 8) + 4) * 10;
          list.push(
            createMcq(
              id,
              `Two lines $AB$ and $CD$ intersect at $O$. If $\\angle AOC = ${ang}^\\circ$, then vertically opposite $\\angle BOD$ equals:`,
              `$${ang}^\\circ$`,
              [`$${180 - ang}^\\circ$`, `$${90 - ang / 2}^\\circ$`, `$${360 - ang}^\\circ$`],
              `By Theorem 6.1, vertically opposite angles are equal, so $\\angle BOD = \\angle AOC = ${ang}^\\circ$.`,
              i
            )
          );
        } else {
          const ang = ((k % 7) + 4) * 10;
          list.push(
            createMcq(
              id,
              `A transversal cuts two parallel lines. If one interior angle on the same side is $${ang}^\\circ$, the other co-interior angle is:`,
              `$${180 - ang}^\\circ$`,
              [`$${ang}^\\circ$`, `$${90 - ang / 2}^\\circ$`, `$${360 - ang}^\\circ$`],
              `Interior angles on the same side of a transversal are supplementary: $180^\\circ - ${ang}^\\circ = ${180 - ang}^\\circ$.`,
              i
            )
          );
        }
        break;
      }

      case 7: {
        // Triangles
        if (type === 0) {
          const a = ((k % 5) + 4) * 10;
          const b = ((k % 4) + 3) * 10;
          const c = 180 - a - b;
          list.push(
            createMcq(
              id,
              `In $\\triangle ABC$, if $\\angle A = ${a}^\\circ$ and $\\angle B = ${b}^\\circ$, then $\\angle C$ is:`,
              `$${c}^\\circ$`,
              [`$${a + b}^\\circ$`, `$${90 - c}^\\circ$`, `$${180 - a}^\\circ$`],
              `By angle sum property, $\\angle C = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = ${c}^\\circ$.`,
              i
            )
          );
        } else if (type === 1) {
          const vert = ((k % 6) + 3) * 10;
          const base = (180 - vert) / 2;
          list.push(
            createMcq(
              id,
              `In isosceles $\\triangle ABC$ with $AB = AC$, if $\\angle A = ${vert}^\\circ$, then $\\angle B$ equals:`,
              `$${base}^\\circ$`,
              [`$${vert}^\\circ$`, `$${180 - vert}^\\circ$`, `$${base + 10}^\\circ$`],
              `Since $AB = AC$, $\\angle B = \\angle C = \\frac{180^\\circ - ${vert}^\\circ}{2} = ${base}^\\circ$.`,
              i
            )
          );
        } else if (type === 2) {
          const side = (k % 9) + 4;
          list.push(
            createMcq(
              id,
              `If $\\triangle ABC \\cong \\triangle PQR$, $AB = ${side}\\text{ cm}$, and $\\angle B = 55^\\circ$, then $PQ$ equals:`,
              `$${side}\\text{ cm}$`,
              [`$${side + 2}\\text{ cm}$`, `$${side * 2}\\text{ cm}$`, `$${side - 1}\\text{ cm}$`],
              `By CPCT (Corresponding Parts of Congruent Triangles), $PQ = AB = ${side}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const a = ((k % 4) + 4) * 10;
          const b = ((k % 3) + 4) * 10;
          list.push(
            createMcq(
              id,
              `Side $BC$ of $\\triangle ABC$ is produced to $D$. If $\\angle A = ${a}^\\circ$ and $\\angle B = ${b}^\\circ$, exterior $\\angle ACD$ is:`,
              `$${a + b}^\\circ$`,
              [`$${180 - a - b}^\\circ$`, `$${Math.abs(a - b)}^\\circ$`, `$${a}^\\circ$`],
              `Exterior angle equals the sum of the two interior opposite angles: $${a}^\\circ + ${b}^\\circ = ${a + b}^\\circ$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `Which of the following is NOT a valid criterion for triangle congruence?`,
              'SSA (Side-Side-Angle)',
              ['SAS (Side-Angle-Side)', 'ASA (Angle-Side-Angle)', 'RHS (Right-Hypotenuse-Side)'],
              'Valid congruence rules are SAS, ASA, AAS, SSS, and RHS. SSA does not guarantee congruence.',
              i
            )
          );
        }
        break;
      }

      case 8: {
        // Quadrilaterals
        if (type === 0) {
          const ang = ((k % 7) + 5) * 10;
          list.push(
            createMcq(
              id,
              `In parallelogram $ABCD$, if $\\angle A = ${ang}^\\circ$, then adjacent angle $\\angle B$ is:`,
              `$${180 - ang}^\\circ$`,
              [`$${ang}^\\circ$`, `$${90}^\\circ$`, `$${360 - ang}^\\circ$`],
              `Consecutive (adjacent) angles of a parallelogram are supplementary: $180^\\circ - ${ang}^\\circ = ${180 - ang}^\\circ$.`,
              i
            )
          );
        } else if (type === 1) {
          const bc = ((k % 8) + 3) * 2;
          list.push(
            createMcq(
              id,
              `In $\\triangle ABC$, $E$ and $F$ are mid-points of $AB$ and $AC$. If $BC = ${bc}\\text{ cm}$, then $EF$ equals:`,
              `$${bc / 2}\\text{ cm}$`,
              [`$${bc}\\text{ cm}$`, `$${bc * 2}\\text{ cm}$`, `$${bc / 2 + 2}\\text{ cm}$`],
              `By Mid-Point Theorem, $EF = \\frac{1}{2}BC = \\frac{1}{2}(${bc}) = ${bc / 2}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 2) {
          const p = ((k % 6) + 4) * 4;
          list.push(
            createMcq(
              id,
              `The perimeter of $\\triangle ABC$ is $${p}\\text{ cm}$. The perimeter of the triangle formed by joining its mid-points is:`,
              `$${p / 2}\\text{ cm}$`,
              [`$${p}\\text{ cm}$`, `$${p / 4}\\text{ cm}$`, `$${p * 2}\\text{ cm}$`],
              `By Mid-Point Theorem, each side is halved, so the perimeter is $\\frac{1}{2}(${p}) = ${p / 2}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const ang = ((k % 5) + 3) * 10;
          list.push(
            createMcq(
              id,
              `Diagonals of rhombus $ABCD$ intersect at $O$. If $\\angle OAB = ${ang}^\\circ$, then $\\angle OBA$ equals:`,
              `$${90 - ang}^\\circ$`,
              [`$${ang}^\\circ$`, `$${180 - ang}^\\circ$`, `$${90}^\\circ$`],
              `Diagonals of a rhombus intersect at $90^\\circ$ ($\\angle AOB = 90^\\circ$). So $\\angle OBA = 90^\\circ - ${ang}^\\circ = ${90 - ang}^\\circ$.`,
              i
            )
          );
        } else {
          const a = ((k % 5) + 4) * 10;
          const b = ((k % 4) + 6) * 10;
          const c = ((k % 3) + 7) * 10;
          const d = 360 - (a + b + c);
          list.push(
            createMcq(
              id,
              `Three angles of a quadrilateral are $${a}^\\circ, ${b}^\\circ, ${c}^\\circ$. The fourth angle is:`,
              `$${d}^\\circ$`,
              [`$${180 - d}^\\circ$`, `$${d + 20}^\\circ$`, `$${d - 10}^\\circ$`],
              `Angle sum of a quadrilateral is $360^\\circ$: $360^\\circ - (${a}^\\circ + ${b}^\\circ + ${c}^\\circ) = ${d}^\\circ$.`,
              i
            )
          );
        }
        break;
      }

      case 9: {
        // Circles
        if (type === 0) {
          const cAng = ((k % 7) + 4) * 10;
          list.push(
            createMcq(
              id,
              `An arc subtends $\\angle AOB = ${cAng}^\\circ$ at the centre $O$ of a circle. The angle subtended at a point $C$ on the remaining circle is:`,
              `$${cAng / 2}^\\circ$`,
              [`$${cAng}^\\circ$`, `$${cAng * 2}^\\circ$`, `$${180 - cAng}^\\circ$`],
              `By Theorem 9.7, $\\angle ACB = \\frac{1}{2}\\angle AOB = \\frac{${cAng}^\\circ}{2} = ${cAng / 2}^\\circ$.`,
              i
            )
          );
        } else if (type === 1) {
          const a = ((k % 8) + 4) * 10;
          list.push(
            createMcq(
              id,
              `In a cyclic quadrilateral $PQRS$, if $\\angle P = ${a}^\\circ$, then opposite angle $\\angle R$ equals:`,
              `$${180 - a}^\\circ$`,
              [`$${a}^\\circ$`, `$${90}^\\circ$`, `$${360 - a}^\\circ$`],
              `Opposite angles of a cyclic quadrilateral sum to $180^\\circ$: $180^\\circ - ${a}^\\circ = ${180 - a}^\\circ$.`,
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
          const [d, halfC, r] = triples;
          list.push(
            createMcq(
              id,
              `A chord of length $${halfC * 2}\\text{ cm}$ is at a distance of $${d}\\text{ cm}$ from the centre. The radius of the circle is:`,
              `$${r}\\text{ cm}$`,
              [`$${halfC}\\text{ cm}$`, `$${d + halfC}\\text{ cm}$`, `$${r + 2}\\text{ cm}$`],
              `Perpendicular from centre bisects chord into $${halfC}\\text{ cm}$. Radius $r = \\sqrt{${d}^2 + ${halfC}^2} = ${r}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const ang = ((k % 5) + 2) * 10;
          list.push(
            createMcq(
              id,
              `$AB$ is a diameter of a circle with centre $O$ and $C$ is any point on the circle. If $\\angle CAB = ${ang}^\\circ$, then $\\angle CBA$ is:`,
              `$${90 - ang}^\\circ$`,
              [`$${ang}^\\circ$`, `$${180 - ang}^\\circ$`, `$${90}^\\circ$`],
              `Angle in a semicircle $\\angle ACB = 90^\\circ$. So $\\angle CBA = 90^\\circ - ${ang}^\\circ = ${90 - ang}^\\circ$.`,
              i
            )
          );
        } else {
          const ch = (k % 8) + 5;
          list.push(
            createMcq(
              id,
              `Two chords $AB$ and $CD$ of a circle subtend equal angles at the centre. If $AB = ${ch}\\text{ cm}$, then $CD$ is:`,
              `$${ch}\\text{ cm}$`,
              [`$${ch * 2}\\text{ cm}$`, `$${ch / 2}\\text{ cm}$`, `$${ch + 3}\\text{ cm}$`],
              `Chords subtending equal angles at the centre are equal in length, so $CD = ${ch}\\text{ cm}$.`,
              i
            )
          );
        }
        break;
      }

      case 10: {
        // Heron's Formula
        if (type === 0) {
          const scale = (k % 5) + 1;
          const a = 3 * scale;
          const b = 4 * scale;
          const c = 5 * scale;
          const area = 6 * scale * scale;
          list.push(
            createMcq(
              id,
              `Using Heron’s formula, find the area of a triangle with sides $${a}\\text{ cm}, ${b}\\text{ cm}, ${c}\\text{ cm}$:`,
              `$${area}\\text{ cm}^2$`,
              [`$${area * 2}\\text{ cm}^2$`, `$${a + b + c}\\text{ cm}^2$`, `$${area + 6}\\text{ cm}^2$`],
              `$s = \\frac{${a}+${b}+${c}}{2} = ${6 * scale}$. Area $= \\sqrt{s(s-a)(s-b)(s-c)} = ${area}\\text{ cm}^2$.`,
              i
            )
          );
        } else if (type === 1) {
          const side = ((k % 6) + 2) * 2;
          const areaCoeff = (side * side) / 4;
          list.push(
            createMcq(
              id,
              `The area of an equilateral triangle of side $${side}\\text{ cm}$ is:`,
              `$${areaCoeff}\\sqrt{3}\\text{ cm}^2$`,
              [`$${side * 3}\\text{ cm}^2$`, `$${areaCoeff * 2}\\sqrt{3}\\text{ cm}^2$`, `$${areaCoeff}\\text{ cm}^2$`],
              `Area $= \\frac{\\sqrt{3}}{4}a^2 = \\frac{\\sqrt{3}}{4}(${side})^2 = ${areaCoeff}\\sqrt{3}\\text{ cm}^2$.`,
              i
            )
          );
        } else if (type === 2) {
          const p = ((k % 8) + 3) * 6;
          list.push(
            createMcq(
              id,
              `An equilateral triangle has perimeter $${p}\\text{ cm}$. Its semi-perimeter $s$ and side $a$ are:`,
              `$s = ${p / 2}\\text{ cm}, \\; a = ${p / 3}\\text{ cm}$`,
              [
                `$s = ${p}\\text{ cm}, \\; a = ${p / 3}\\text{ cm}$`,
                `$s = ${p / 2}\\text{ cm}, \\; a = ${p / 2}\\text{ cm}$`,
                `$s = ${p / 3}\\text{ cm}, \\; a = ${p / 2}\\text{ cm}$`,
              ],
              `Semi-perimeter $s = \\frac{${p}}{2} = ${p / 2}\\text{ cm}$ and side $a = \\frac{${p}}{3} = ${p / 3}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 3) {
          const scale = (k % 4) + 1;
          const a = 5 * scale;
          const b = 12 * scale;
          const c = 13 * scale;
          const area = 30 * scale * scale;
          list.push(
            createMcq(
              id,
              `Sides of a triangular park are $${a}\\text{ m}, ${b}\\text{ m}, ${c}\\text{ m}$. Its area is:`,
              `$${area}\\text{ m}^2$`,
              [`$${area / 2}\\text{ m}^2$`, `$${area * 2}\\text{ m}^2$`, `$${(a + b + c) * 2}\\text{ m}^2$`],
              `$s = ${15 * scale}$. Area $= \\sqrt{${15 * scale}(${10 * scale})(${3 * scale})(${2 * scale})} = ${area}\\text{ m}^2$.`,
              i
            )
          );
        } else {
          const factor = (k % 3) + 2;
          list.push(
            createMcq(
              id,
              `If every side of a triangle is multiplied by $${factor}$, its area becomes:`,
              `$${factor * factor}$ times`,
              [`$${factor}$ times`, `$${factor * 2}$ times`, `$${factor * factor * factor}$ times`],
              `Scaling every side by $k = ${factor}$ scales area by $k^2 = ${factor}^2 = ${factor * factor}$ times.`,
              i
            )
          );
        }
        break;
      }

      case 11: {
        // Surface Areas and Volumes
        if (type === 0) {
          const triples = [
            [3, 4, 5],
            [6, 8, 10],
            [5, 12, 13],
            [7, 24, 25],
          ][k % 4];
          const [r, h, l] = triples;
          list.push(
            createMcq(
              id,
              `A cone has base radius $${r}\\text{ cm}$ and height $${h}\\text{ cm}$. Its slant height $l$ is:`,
              `$${l}\\text{ cm}$`,
              [`$${r + h}\\text{ cm}$`, `$${l + 2}\\text{ cm}$`, `$${h}\\text{ cm}$`],
              `$l = \\sqrt{r^2 + h^2} = \\sqrt{${r}^2 + ${h}^2} = ${l}\\text{ cm}$.`,
              i
            )
          );
        } else if (type === 1) {
          const r = 7 * ((k % 3) + 1);
          const l = (k % 5) + 10;
          const csa = 22 * (r / 7) * l;
          list.push(
            createMcq(
              id,
              `Find the curved surface area of a cone with radius $${r}\\text{ cm}$ and slant height $${l}\\text{ cm}$ ($\\pi = \\frac{22}{7}$):`,
              `$${csa}\\text{ cm}^2$`,
              [`$${csa * 2}\\text{ cm}^2$`, `$${csa + 154}\\text{ cm}^2$`, `$${Math.round(csa / 2)}\\text{ cm}^2$`],
              `$\\text{CSA} = \\pi r l = \\frac{22}{7} \\times ${r} \\times ${l} = ${csa}\\text{ cm}^2$.`,
              i
            )
          );
        } else if (type === 2) {
          const r = (k % 5) + 2;
          const sa = 4 * r * r;
          list.push(
            createMcq(
              id,
              `The surface area of a sphere of radius $${r}\\text{ cm}$ in terms of $\\pi$ is:`,
              `$${sa}\\pi\\text{ cm}^2$`,
              [`$${2 * r * r}\\pi\\text{ cm}^2$`, `$${3 * r * r}\\pi\\text{ cm}^2$`, `$${r * r}\\pi\\text{ cm}^2$`],
              `Surface area of sphere $= 4\\pi r^2 = 4\\pi(${r})^2 = ${sa}\\pi\\text{ cm}^2$.`,
              i
            )
          );
        } else if (type === 3) {
          const r = (k % 4) + 2;
          list.push(
            createMcq(
              id,
              `The total surface area of a solid hemisphere of radius $${r}\\text{ cm}$ is:`,
              `$${3 * r * r}\\pi\\text{ cm}^2$`,
              [`$${2 * r * r}\\pi\\text{ cm}^2$`, `$${4 * r * r}\\pi\\text{ cm}^2$`, `$${r * r}\\pi\\text{ cm}^2$`],
              `TSA of solid hemisphere $= 3\\pi r^2 = 3\\pi(${r})^2 = ${3 * r * r}\\pi\\text{ cm}^2$.`,
              i
            )
          );
        } else {
          const r = 3 * ((k % 3) + 1);
          const vCoeff = (4 * Math.pow(r, 3)) / 3;
          list.push(
            createMcq(
              id,
              `The volume of a sphere of radius $${r}\\text{ cm}$ in terms of $\\pi$ is:`,
              `$${vCoeff}\\pi\\text{ cm}^3$`,
              [`$${vCoeff / 2}\\pi\\text{ cm}^3$`, `$${4 * r * r}\\pi\\text{ cm}^3$`, `$${r * r * r}\\pi\\text{ cm}^3$`],
              `$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(${r})^3 = ${vCoeff}\\pi\\text{ cm}^3$.`,
              i
            )
          );
        }
        break;
      }

      case 12:
      default: {
        // Statistics
        if (type === 0) {
          const low = ((k % 9) + 1) * 10;
          const width = ((k % 3) + 1) * 10;
          const high = low + width;
          list.push(
            createMcq(
              id,
              `The class mark of the class interval $${low}\\text{--}${high}$ is:`,
              `$${(low + high) / 2}$`,
              [`$${width}$`, `$${low}$`, `$${high}$`],
              `Class mark $= \\frac{\\text{Lower} + \\text{Upper}}{2} = \\frac{${low}+${high}}{2} = ${(low + high) / 2}$.`,
              i
            )
          );
        } else if (type === 1) {
          const minV = (k % 10) + 5;
          const maxV = minV + ((k % 7) + 12);
          list.push(
            createMcq(
              id,
              `If the lowest observation is $${minV}$ and highest is $${maxV}$, the range of the data is:`,
              `$${maxV - minV}$`,
              [`$${maxV + minV}$`, `$${(maxV + minV) / 2}$`, `$${maxV - minV + 1}$`],
              `Range $= \\text{Max} - \\text{Min} = ${maxV} - ${minV} = ${maxV - minV}$.`,
              i
            )
          );
        } else if (type === 2) {
          const freq = ((k % 6) + 2) * 3;
          const w = 15;
          const minW = 5;
          const adj = (freq / w) * minW;
          list.push(
            createMcq(
              id,
              `In a histogram with minimum class width $${minW}$, a class of width $${w}$ has frequency $${freq}$. Its adjusted rectangle height is:`,
              `$${adj}$`,
              [`$${freq}$`, `$${freq * 3}$`, `$${adj + 2}$`],
              `Adjusted frequency $= \\frac{${freq}}{${w}} \\times ${minW} = ${adj}$.`,
              i
            )
          );
        } else if (type === 3) {
          const mid = ((k % 8) + 2) * 10 + 5;
          const w = 10;
          list.push(
            createMcq(
              id,
              `If the class mark is $${mid}$ and class size is $${w}$, the lower and upper limits are:`,
              `$${mid - w / 2}\\text{--}${mid + w / 2}$`,
              [
                `$${mid - w}\\text{--}${mid + w}$`,
                `$${mid}\\text{--}${mid + w}$`,
                `$${mid - w / 2}\\text{--}${mid}$`,
              ],
              `Lower $= ${mid} - \\frac{${w}}{2} = ${mid - w / 2}$, Upper $= ${mid} + \\frac{${w}}{2} = ${mid + w / 2}$.`,
              i
            )
          );
        } else {
          list.push(
            createMcq(
              id,
              `In a histogram, the area of each rectangle is proportional to:`,
              'Frequency of the corresponding class',
              ['Class mark', 'Cumulative frequency', 'Upper class limit'],
              'By definition, histogram rectangle areas represent class frequencies.',
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
