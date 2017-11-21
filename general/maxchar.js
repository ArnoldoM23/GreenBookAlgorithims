// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const tracker = {};
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (tracker[str[i]]) {
      tracker[str[i]]++;
    } else {
      tracker[str[i]] = 1;
    }
  }

  for (let key in tracker) {
    if (tracker[key] > result) {
      result = key;
    }
  }

  return result;
};

module.exports = maxChar;
