var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }

  strs.sort();
  
  const start = strs[0];
  const end = strs[strs.length - 1];
  console.log(strs);
  const minLen = Math.min(start.length, end.length);
  for (let i = 0; i < minLen; i++) {
    if (start[i] != end[i]) {
      console.log('i: ', i);
      return start.slice(0, i);
    }
  }
  return start.slice(0, minLen);
};

const strs = ["flower","flow","flight"];
longestCommonPrefix(strs);