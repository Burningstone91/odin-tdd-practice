const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCipher(str, shift) {
  let encString = [];

  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i].toLowerCase()) === -1) {
      encString.push([str[i]]);
    } else {
      let shiftedChar = getShiftedChar(str[i].toLowerCase(), shift);
      if (isUpperCase(str[i])) shiftedChar = shiftedChar.toUpperCase();
      encString.push(shiftedChar);
    }
  }

  return encString.join("");
}

function getShiftedChar(char, shift) {
  let index = alphabet.indexOf(char) + shift;
  if (index > 25) index -= 26;
  return alphabet[index];
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

export default caesarCipher;
