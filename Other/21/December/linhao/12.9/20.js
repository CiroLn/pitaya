/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map();
  map.add(')', '(');
  map.add('}', '{');
  map.add(']', '[');

  map.add('(', ')');
  map.add('{', '}');
  map.add('[', ']');
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      stack.push(s[i]);
    }else {
      
    }
  }
};
