/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolValues = new Map();
  symbolValues.set("I", 1);
  symbolValues.set("V", 5);
  symbolValues.set("X", 10);
  symbolValues.set("L", 50);
  symbolValues.set("C", 100);
  symbolValues.set("D", 500);
  symbolValues.set("M", 1000);

  let ans = 0;
  let n = s.length;
  // IV
  for (let i = 0; i < n; i++) {
    const temp = symbolValues.get(s[i]); // 取到罗马字符
    if (i < n - 1 && temp < symbolValues.get(s[i + 1])) {
      ans -= temp;
    } else {
      ans += temp;
    }
  }
  return ans;
};

const s = "MCMXCIV";

romanToInt(s);
