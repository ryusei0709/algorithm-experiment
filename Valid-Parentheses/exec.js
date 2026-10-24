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
        const pop = stackArr.pop();
        if (map[pop] !== s[i]) {
          return false;
        }
      }
    }

    return stackArr.length !== 0 ? false : true;
  }
}

const sol = new Solution();
const res = sol.isValid('[(])');
// const res = sol.isValid('[');
// const res = sol.isValid('([{}])');

console.log(res);
