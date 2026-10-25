class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  containsNearbyDuplicate(nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] !== undefined) {
        const duplicateIndex = hash[nums[i]];
        const distance = Math.abs(i - duplicateIndex);

        // If you find it, return true.
        if (distance <= k) {
          return true;
        }
      }

      hash[nums[i]] = i;
    }

    return false;
  }
}

const tests = [
  { nums: [1, 2, 3, 1], k: 3, expected: true },
  { nums: [1, 2, 3, 1], k: 2, expected: false },
  { nums: [1, 0, 1, 1], k: 1, expected: true },
  { nums: [1, 2, 3, 1, 2, 3], k: 2, expected: false },
  { nums: [1, 1], k: 0, expected: false },
  { nums: [5], k: 1, expected: false },
  { nums: [1, 2, 1, 2, 1], k: 1, expected: false },
  { nums: [1, 2, 1, 2, 1], k: 2, expected: true },
  { nums: [-1, 2, -1], k: 2, expected: true },
];

const solution = new Solution();

tests.forEach(({ nums, k, expected }, i) => {
  const result = solution.containsNearbyDuplicate(nums, k);
  const passed = result === expected;

  console.log(`Test ${i + 1}: ${passed ? 'PASS' : 'FAIL'}`, `| Expected: ${expected}, Got: ${result}`);
});
