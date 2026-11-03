const assert = require('node:assert/strict');
class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [];
    let count = 0;
    for (let i = 0; i < temperatures.length; i++) {
      for (let j = i; j < temperatures.length; j++) {
        if (temperatures[i] < temperatures[j]) {
          stack.push(count);
          count = 0;
          break;
        } else if (j === temperatures.length - 1) {
          stack.push(0);
        } else {
          count++;
        }
      }
    }

    return stack;
  }
}

const sol = new Solution();

const testCases = [
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    input: [30, 40, 50, 60],
    expected: [1, 1, 1, 0],
  },
  {
    input: [60, 50, 40, 30],
    expected: [0, 0, 0, 0],
  },
  {
    input: [30, 30, 31],
    expected: [2, 1, 0],
  },
  {
    input: [30],
    expected: [0],
  },
  {
    input: [30, 30, 30],
    expected: [0, 0, 0],
  },
  {
    input: [30, 40, 30, 50],
    expected: [1, 2, 1, 0],
  },
  {
    input: [30, 38, 30, 36, 35, 40, 28],
    expected: [1, 4, 1, 2, 1, 0, 0],
  },
];

testCases.forEach(({ input, expected }, index) => {
  const actual = sol.dailyTemperatures(input);

  try {
    assert.deepStrictEqual(actual, expected);
    console.log(`✅ Test ${index + 1}: PASS`);
  } catch {
    console.log(`❌ Test ${index + 1}: FAIL`);
    console.log('Input:   ', input);
    console.log('Expected:', expected);
    console.log('Actual:  ', actual);
  }
});
