/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let ans = "",
    space = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      ++space;
      if (space == k) {
        break;
      }
    }
    ans += s[i];
  }
  return ans;
};
