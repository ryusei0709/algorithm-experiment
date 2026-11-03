class Solution {
  /**
   * @param {number[]} nums
   */
  nextGreaterNumber(nums) {
    const result = Array(nums.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums.length; i++) {
      while (nums[i] > nums[stack.at(-1)]) {
        const prevIndex = stack.pop();
        result[prevIndex] = nums[i];
      }
      stack.push(i);
    }

    return result;
  }
}

const sol = new Solution();

const testCases = [
  { input: [3, 1, 4, 2, 5], expected: [4, 4, 5, 5, -1] },
  { input: [2, 1, 3], expected: [3, 3, -1] },
  { input: [5, 4, 3, 2], expected: [-1, -1, -1, -1] },
  { input: [1, 2, 3, 4], expected: [2, 3, 4, -1] },
  { input: [5], expected: [-1] },
  { input: [2, 2, 3], expected: [3, 3, -1] },
  { input: [1, 3, 2, 4], expected: [3, 4, 4, -1] },
  { input: [4, 1, 2, 3], expected: [-1, 2, 3, -1] },
  { input: [3, 3, 3], expected: [-1, -1, -1] },
  { input: [6, 2, 5, 1, 7], expected: [7, 5, 7, 7, -1] },
];

testCases.forEach(({ input, expected }, index) => {
  const actual = sol.nextGreaterNumber(input);
  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(`Test ${index + 1}: ${passed ? 'PASS ✅' : 'FAIL ❌'}`);

  if (!passed) {
    console.log('Input:   ', input);
    console.log('Expected:', expected);
    console.log('Actual:  ', actual);
  }
});
