function analyzeArray(arr) {
  if (!isNumberArray(arr)) return "Not a valid array!";

  let output = {};
  output.average = arr.reduce((a, b) => a + b) / arr.length;
  output.min = Math.min(...arr);
  output.max = Math.max(...arr);
  output.length = arr.length;

  return output;
}

function isNumberArray(arr) {
  if (Array.isArray(arr)) {
    for (let el of arr) {
      if (typeof el !== "number") {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

export default analyzeArray;
