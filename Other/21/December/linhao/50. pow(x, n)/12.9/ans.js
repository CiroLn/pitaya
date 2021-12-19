/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const left = [],
    right = [];
  for (let i = 0; i < trust.length; i++) {
    left[i] = trust[i][0];
    right[i] = trust[i][1];
  }

  for (let j = 0; j < n; j++) {
    if (left[j] == n - 1 && right[j] == 0) {
      return j;
    }
  }
  return -1;
};
