/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n > 0) {
    return quickMul(x, n);
  }
  return 1 / quickMul(x, n);
};

function quickMul(x, n) {
  if (n == 0) {
    return 1;
  }
  let y = quickMul(x, Number.parseInt(n / 2)); // εδΈεζ΄
  if (n % 2 == 0) {
    return y * y;
  }
  return y * y * x;
}
