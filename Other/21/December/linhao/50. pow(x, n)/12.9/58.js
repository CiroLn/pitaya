/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const n = s.length;
  let count = 0;
  for (let i = n - 1; i > -1; i--) {
    if (s[i] != " ") {
      count++;
    } else {
      if (count > 0) {
        return count;
      }
    }
  }
  return count;
};
