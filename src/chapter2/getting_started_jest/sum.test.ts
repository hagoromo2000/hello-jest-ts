import { sum } from "./sum";

test("1 + 2 の返り値が 3 である", () => {
  expect(sum(1, 2)).toBe(3);
});
