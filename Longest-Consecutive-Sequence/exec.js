class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      let lengthCount = 0;

      if (set.has(current - 1)) {
        continue;
      }

      while (set.has(current)) {
        current++;
        lengthCount++;
      }

      result = Math.max(result, lengthCount);
      lengthCount = 0;
    }

    console.log(result);
    return result;
  }
}

const sol = new Solution();
const res = sol.longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]);
// const res = sol.longestConsecutive([2, 20, 4, 10, 3, 4, 5]);
