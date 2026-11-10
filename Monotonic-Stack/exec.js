class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  nextGreaterElement(nums) {
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
  // /**
  //  * @param {number[]} nums
  //  * @return {number[]}
  //  */
  // nextGreaterElement(nums) {
  //   const result = Array(nums.length).fill(-1);
  //   for (let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //       if(nums[i] < nums[j]) {
  //         result[i] = nums[j]
  //         break
  //       }
  //     }
  //   }

  //   return result
  // }
}
const testCases = [
  {
    nums: [2, 1, 5, 3, 4],
    expected: [5, 5, -1, 4, -1],
  },
  {
    nums: [6, 4, 3, 2, 1],
    expected: [-1, -1, -1, -1, -1],
  },
  {
    nums: [1, 2, 3, 4, 5],
    expected: [2, 3, 4, 5, -1],
  },
  {
    nums: [1, 3, 2, 4, 3, 5],
    expected: [3, 4, 4, 5, 5, -1],
  },
  {
    nums: [5],
    expected: [-1],
  },
  {
    nums: [3, 3, 3, 3],
    expected: [-1, -1, -1, -1],
  },
  {
    nums: [2, 2, 3, 1, 3],
    expected: [3, 3, -1, 3, -1],
  },
  {
    nums: [-3, -1, -2, 0],
    expected: [-1, 0, 0, -1],
  },
  {
    nums: [10, 5, 8, 3, 7, 12],
    expected: [12, 8, 12, 7, 12, -1],
  },
  {
    nums: [4, 1, 2, 3, 5],
    expected: [5, 2, 3, 5, -1],
  },
];

const solution = new Solution();

testCases.forEach(({ nums, expected }, index) => {
  const actual = solution.nextGreaterElement([...nums]);

  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(`Test ${index + 1}: ${passed ? 'PASS ✅' : 'FAIL ❌'}`);

  if (!passed) {
    console.log('Input:   ', nums);
    console.log('Expected:', expected);
    console.log('Actual:  ', actual);
  }
});
