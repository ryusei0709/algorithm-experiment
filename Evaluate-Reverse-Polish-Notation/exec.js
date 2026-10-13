class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let numsArr = [];
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '+') {
        const rightVal = numsArr.pop();
        const leftVal = numsArr.pop();
        const result = leftVal + rightVal;
        numsArr.push(result);
      } else if (tokens[i] === '-') {
        const rightVal = numsArr.pop();
        const leftVal = numsArr.pop();
        const result = leftVal - rightVal;
        numsArr.push(result);
      } else if (tokens[i] === '*') {
        const rightVal = numsArr.pop();
        const leftVal = numsArr.pop();
        const result = leftVal * rightVal;
        numsArr.push(result);
      } else if (tokens[i] === '/') {
        const rightVal = numsArr.pop();
        const leftVal = numsArr.pop();
        const result = Math.trunc(leftVal / rightVal);
        numsArr.push(result);
      } else {
        numsArr.push(Number(tokens[i]));
      }
    }

    return numsArr[0];
  }
}

const sol = new Solution();
// const res = sol.evalRPN(['1', '2', '+', '3', '*', '4', '-']);
const res = sol.evalRPN(['4', '13', '5', '/', '+']);
console.log(res);
