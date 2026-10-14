class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const arr = [];
    const hash = {};
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const calc = nums[i] + nums[left] + nums[right];
        if (calc === 0) {
          const resultArr = [nums[i], nums[left], nums[right]];
          const text = resultArr.join(',');
          arr.push([nums[i], nums[left], nums[right]]);
          hash[text] = resultArr;
          right--;
          left++;
        } else if (calc > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
    return Object.values(hash)
  }
}

const sol = new Solution();
// const res = sol.threeSum([
//   34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86, 56, 94, 74, 83, -14, 28, -66, 46,
//   -49, 62, -11, 43, 65, 77, 12, 47, 61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49,
// ]);
const res = sol.threeSum([-1, 0, 1, 2, -1, -4]);
console.log(res);
