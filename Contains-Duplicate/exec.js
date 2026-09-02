class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {

    const hash = {};
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] !== undefined) {
        return true
      } else {
        hash[nums[i]] = 1
      }
    }

    return false
  }

}

const sol = new Solution();
const res = sol.hasDuplicate([1, 2, 3, 3]);
