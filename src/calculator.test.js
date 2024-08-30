import Calculator from "./calculator";

describe("Basic calculator operations", () => {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  test("Addition, 1 + 2 should become 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("Addition, 1 + 'dog' should become 'Input is not valid'", () => {
    expect(calculator.add(1, "dog")).toBe("Input is not valid");
  });

  test("Subtraction, 3 - 1 should become 2", () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });

  test("Multiplication, 4 x 3 should become 12", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test("Division, 12 / 6 should become 2", () => {
    expect(calculator.divide(12, 6)).toBe(2);
  });
});
