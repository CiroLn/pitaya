/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = longestCommonPrefixHelp(prefix, strs[i]);
    console.log(prefix);
    if (prefix.length == 0) {
      return "";
    }
  }
  return prefix;
};

var longestCommonPrefixHelp = function (str1, str2) {
  const len = Math.min(str1.length, str2.length);
  let index = 0;
  while (index < len && str1[index] == str2[index]) {
    index++;
  }
  return str1.substr(0, index);
};

const strs = ["flower","flow","flight"]
longestCommonPrefix(strs);
