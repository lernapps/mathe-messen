import { expect, test } from "vite-plus/test";
import { area, next, shapes, totalArea, viewBox } from "./Schere.ts";

test("the area stays g · h in every step", () => {
  const cases: [number, number, number][] = [
    [6, 4, 2],
    [5, 3, 1],
    [8, 2, 3],
  ];
  for (const [g, h, s] of cases) {
    for (const step of [0, 1, 2] as const) {
      expect(totalArea(step, g, h, s)).toBeCloseTo(g * h);
    }
  }
});

test("after the move the parts form a rectangle with the cut triangle on the right", () => {
  const sh = shapes(2, 6, 4, 2);
  expect(sh.triangle.map((p) => p.x)).toEqual([6, 8, 8]);
  expect(area(sh.body)).toBeCloseTo(6 * 4 - (2 * 4) / 2);
  expect(area(sh.triangle)).toBeCloseTo((2 * 4) / 2);
});

test("step 0 is one piece without a cut, step 1 shows the cut line", () => {
  expect(shapes(0, 6, 4, 2).cut).toEqual([]);
  expect(shapes(0, 6, 4, 2).triangle).toEqual([]);
  expect(shapes(1, 6, 4, 2).cut).toHaveLength(2);
});

test("next goes from 0 to 1 and from 1 to 2, the box holds the figure", () => {
  expect(next(0)).toBe(1);
  expect(next(1)).toBe(2);
  const box = viewBox(6, 4, 2);
  expect(box.x).toBeLessThan(-0.5);
  expect(box.x + box.w).toBeGreaterThan(8);
});
