import caesarCipher from "./caesarCipher";

describe("Caesar Cipher encryption", () => {
  test("The word 'dog' with a shift of 1 should become 'eph'", () => {
    expect(caesarCipher("dog", 1)).toBe("eph");
  });

  test("Wrapping, the word 'xyz' with a shift of 3 should become 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Case Preservation, the word 'HeLLo' with a shift of 3 should become 'KhOOr'", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Punctuation, the word 'Hello, World!' with a shift of 3 should become 'Khoor, Zruog!'", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
