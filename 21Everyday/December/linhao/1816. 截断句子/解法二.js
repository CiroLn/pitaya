/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let end = s.length,
    space = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      ++space;
      if (space == k) {
        end = i;
        break;
      }
    }
  }
  return s.slice(0, end);
};
