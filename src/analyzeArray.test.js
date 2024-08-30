import analyzeArray from "./analyzeArray";

describe("Analyze Array", () => {
  test("The array [1,8,3,4,2,6] should return an object with avg: 4, min: 1, max: 8, length: 6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("The array [1,8,3,'d',2,6] should return 'Not a valid array'", () => {
    expect(analyzeArray([1, 8, 3, "d", 2, 6])).toBe("Not a valid array!");
  });

  test("The array '12345678' should return 'Not a valid array'", () => {
    expect(analyzeArray("12345678")).toBe("Not a valid array!");
  });
});
