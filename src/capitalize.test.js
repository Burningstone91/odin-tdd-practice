import capitalize from "./capitalize";

test("HUNDE should become HUNDE", () => {
  expect(capitalize("HUNDE")).toBe("HUNDE");
});

test("Capitalize a lowercase Word", () => {
  expect(capitalize("katzen")).toBe("Katzen");
});

test("Capitalize a mixed word", () => {
  expect(capitalize("mäUsE")).toBe("MäUsE");
});

test("Capitalize a word with numbers", () => {
  expect(capitalize("1Pfau")).toBe("1Pfau");
});
