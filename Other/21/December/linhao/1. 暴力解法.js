/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans *= x;
  }
  return ans;
};
