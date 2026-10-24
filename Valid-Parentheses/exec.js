class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stackArr = [];
    const map = {
      '{': '}',
      '(': ')',
      '[': ']',
    };

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
        stackArr.push(s[i]);
      } else {
        const openBracket = stackArr.pop();
        if (map[openBracket] !== s[i]) {
          return false;
        }
      }
    }
    return stackArr.length === 0;
  }
}

const sol = new Solution();
const res = sol.isValid('[(])');
// const res = sol.isValid('[');
// const res = sol.isValid('([{}])');

console.log(res);
