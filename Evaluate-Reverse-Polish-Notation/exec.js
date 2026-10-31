class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let calcStackArr = [];
    const calcSymbol = ['+', '-', '/', '*'];
    for (let i = 0; i < tokens.length; i++) {
      if (calcSymbol.includes(tokens[i])) {
        const rightVal = calcStackArr.pop();
        const leftVal = calcStackArr.pop();

        if (tokens[i] === '+') {
          const calc = leftVal + rightVal;
          calcStackArr.push(calc);
        } else if (tokens[i] === '*') {
          const calc = leftVal * rightVal;
          calcStackArr.push(calc);
        } else if (tokens[i] === '/') {
          const calc = leftVal / rightVal;
          calcStackArr.push(Math.trunc(calc));
        } else if (tokens[i] === '-') {
          const calc = leftVal - rightVal;
          calcStackArr.push(calc);
        }
      } else {
        calcStackArr.push(Number(tokens[i]));
      }
    }

    return calcStackArr[0];
  }
}

const sol = new Solution();
const res = sol.evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
// const res = sol.evalRPN(['4', '13', '5', '/', '+']);
// const res = sol.evalRPN(['1', '2', '+', '3', '*', '4', '-']);
console.log(res);
