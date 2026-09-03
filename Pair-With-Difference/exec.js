class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  findPair(nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
      
      if(hash[nums[i]] !== undefined) {
        return [hash[nums[i]], i]
      } 
      
      const addition = nums[i] + k;
      hash[addition] = i
    }

    return []
  }
}

function runTests() {
  const solution = new Solution();

  const tests = [
    {
      nums: [3, 8, 12, 5],
      k: 5,
      expected: [0, 1],
    },
    {
      nums: [10, 4, 7, 15],
      k: 5,
      expected: [0, 3],
    },
    {
      nums: [1, 2, 3],
      k: 10,
      expected: [],
    },
    {
      nums: [20, 1, 3, 25],
      k: 5,
      expected: [0, 3],
    },
    {
      nums: [5, 100, 200, 9],
      k: 4,
      expected: [0, 3],
    },
  ];

  for (let i = 0; i < tests.length; i++) {
    const { nums, k, expected } = tests[i];

    const result = solution.findPair(nums, k);

    const passed =
      JSON.stringify(result) === JSON.stringify(expected);

    console.log(
      `Test ${i + 1}:`,
      passed ? "✅ PASS" : "❌ FAIL"
    );

    if (!passed) {
      console.log("  nums:", nums);
      console.log("  k:", k);
      console.log("  expected:", expected);
      console.log("  result:", result);
    }
  }
}

runTests();