/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  const rows = strs.length;
  const cols = strs[0].length;

  for (let i = 0; i < cols; i++) {
    const char = strs[0][i];
    for (let j = 1; j < rows; j++) {
      if (strs[j].length == i || strs[j][i] != char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};
