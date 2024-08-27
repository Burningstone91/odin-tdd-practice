import reverseString from "./reverseString";

test("Alphabet should become tebahplA", () => {
  expect(reverseString("Alphabet")).toBe("tebahplA");
});

test("'12345' should become '54321'", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("'A text with space' should become 'ecaps htiw txet A'", () => {
  expect(reverseString("A text with space")).toBe("ecaps htiw txet A");
});

test("12345 should become undefined", () => {
  expect(reverseString(12345)).toBe(undefined);
});
