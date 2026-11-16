class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      // 左側が昇順になっているか？
      if (nums[left] <= nums[mid]) {
        // 左側が昇順
        if (nums[left] <= target && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
        // 右側が昇順になっているか？
      } else {
        // 右側が昇順
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return -1;
  }
}

const sol = new Solution();
const res = sol.search([1, 3], 3);
// const res = sol.search([3, 5, 6, 0, 1, 2], 4);
// const res = sol.search([3, 4, 5, 6, 1, 2], 1);
console.log(res);
