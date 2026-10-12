class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        const prevIndex = map.get(nums[i]);
        const abs = Math.abs(prevIndex - i);

        if (abs <= k) {
          return true;
        }
      }

      map.set(nums[i], i);
    }

    return false;
  }

  // /**
  //  * @param {number[]} nums
  //  * @param {number} k
  //  * @return {boolean}
  //  */
  // containsNearbyDuplicate(nums, k) {
  //   const hash = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (hash[nums[i]] !== undefined) {
  //       const prexIndex = hash[nums[i]];
  //       const abs = Math.abs(prexIndex - i);
  //       if (abs <= k) {
  //         return true;
  //       }
  //       hash[nums[i]] = i;
  //     }
  //     hash[nums[i]] = i;
  //   }

  //   return false;
  // }
}

// Test Cases
const sol = new Solution();

const tests = [
  { nums: [1, 2, 3, 1], k: 3, expected: true },
  { nums: [1, 2, 3, 1], k: 2, expected: false },
  { nums: [1, 0, 1, 1], k: 1, expected: true },
  { nums: [1, 2, 3, 4], k: 3, expected: false },
  { nums: [1, 1], k: 0, expected: false },
  { nums: [5, 5], k: 1, expected: true },
  { nums: [1, 2, 3, 2, 1], k: 2, expected: true },
  { nums: [1, 2, 3, 1, 2, 3], k: 2, expected: false },
];

tests.forEach(({ nums, k, expected }, index) => {
  const result = sol.containsNearbyDuplicate(nums, k);
  const passed = result === expected;

  console.log(`Test ${index + 1}: ${passed ? 'PASS' : 'FAIL'}`);

  if (!passed) {
    console.log(`  Input: ${JSON.stringify(nums)}, k=${k}`);
    console.log(`  Expected: ${expected}`);
    console.log(`  Actual: ${result}`);
  }
});
