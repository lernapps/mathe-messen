// Logic of the "Schere" figure: a parallelogram is cut along its height and the cut triangle is moved to the other
// side, which makes a rectangle. Pure functions; the area stays the same in every step.
export type Point = { x: number; y: number };
export type Step = 0 | 1 | 2;
export type Shapes = {
  /** The part that stays: the parallelogram in step 0, the trapezoid in step 1, step 2. */
  body: Point[];
  /** The cut triangle (absent in step 0, where the parallelogram is one piece). */
  triangle: Point[];
  /** The cut line from the top corner down to the base. */
  cut: Point[];
};

/** The corners for a parallelogram with base g, height h and top shifted by s to the right (0 < s <= g). */
export function shapes(step: Step, g: number, h: number, s: number): Shapes {
  const tri = (dx: number): Point[] => [
    { x: 0 + dx, y: h },
    { x: s + dx, y: h },
    { x: s + dx, y: 0 },
  ];
  const parallelogram: Point[] = [
    { x: 0, y: h },
    { x: g, y: h },
    { x: s + g, y: 0 },
    { x: s, y: 0 },
  ];
  const rest: Point[] = [
    { x: s, y: h },
    { x: g, y: h },
    { x: s + g, y: 0 },
    { x: s, y: 0 },
  ];
  const cut: Point[] = [
    { x: s, y: 0 },
    { x: s, y: h },
  ];
  if (step === 0) return { body: parallelogram, triangle: [], cut: [] };
  if (step === 1) return { body: rest, triangle: tri(-0.5), cut };
  return { body: rest, triangle: tri(g), cut: [] };
}

/** The area of a polygon (shoelace formula), 0 for fewer than 3 corners. */
export function area(points: Point[]): number {
  if (points.length < 3) return 0;
  let sum = 0;
  points.forEach((a, i) => {
    const b = points[(i + 1) % points.length] ?? a;
    sum += a.x * b.y - b.x * a.y;
  });
  return Math.abs(sum) / 2;
}

/** The combined area of everything shown in a step. */
export function totalArea(step: Step, g: number, h: number, s: number): number {
  const sh = shapes(step, g, h, s);
  return area(sh.body) + area(sh.triangle);
}

/** The next step after "Dreieck abschneiden" or "Dreieck umlegen"; the reset gives 0. */
export function next(step: Step): Step {
  return step === 0 ? 1 : 2;
}

/** The box (x, y, width, height) in the units of the figure that holds every step. */
export function viewBox(g: number, h: number, s: number): { x: number; y: number; w: number; h: number } {
  const pad = 0.4;
  return { x: -0.5 - pad, y: -pad, w: g + s + 0.5 + 2 * pad, h: h + 0.5 + 2 * pad };
}
