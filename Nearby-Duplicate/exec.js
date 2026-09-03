class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  containsNearbyDuplicate(nums, k) {

    const hash = {}
    for (let i = 0; i < nums.length; i++) {

      if (hash[nums[i]] === undefined) {
        hash[nums[i]] = i
      } else {
        const prevIndex = hash[nums[i]];
        const abstract = Math.abs(i - prevIndex);

        if (abstract <= k) {
          return true
        }
        hash[nums[i]] = i
      }
    }
    return false

  }
}

function runTests() {
  const solution = new Solution();

  const tests = [
    {
      nums: [1, 2, 3, 1],
      k: 3,
      expected: true,
    },
    {
      nums: [1, 2, 3, 1],
      k: 2,
      expected: false,
    },
    {
      nums: [1, 0, 1, 1],
      k: 1,
      expected: true,
    },
    {
      nums: [1, 2, 3, 4, 5],
      k: 3,
      expected: false,
    },
    {
      nums: [5, 5],
      k: 1,
      expected: true,
    },
    {
      nums: [1, 2, 1],
      k: 1,
      expected: false,
    },
    {
      nums: [3, 2, 3],
      k: 2,
      expected: true,
    },
    {
      nums: [1, 2, 3, 1, 2, 3],
      k: 2,
      expected: false,
    },
  ];

  tests.forEach((test, index) => {
    const result = solution.containsNearbyDuplicate(
      test.nums,
      test.k
    );

    const passed = result === test.expected;

    console.log(
      `Test ${index + 1}: ${passed ? "✅ PASS" : "❌ FAIL"}`
    );

    if (!passed) {
      console.log(" nums:", test.nums);
      console.log(" k:", test.k);
      console.log(" expected:", test.expected);
      console.log(" result:", result);
    }
  });
}

runTests();