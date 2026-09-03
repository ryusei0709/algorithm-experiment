class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   * not brute force process
   */
  twoSum(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {

      if (hash[nums[i]] !== undefined) {
        return [i, hash[nums[i]]]
      }

      const findNum = target - nums[i];
      hash[findNum] = i
    }

  }

  // /**
  //  * @param {number[]} nums
  //  * @param {number} target
  //  * @return {number[]}
  //  * brute force process
  //  */
  // twoSum(nums, target) {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       const calc = nums[i] + nums[j];
  //       if(calc === target) {
  //         return [i , j]
  //       }
  //     }
  //   }
  // }

}

const sol = new Solution();
const res = sol.twoSum([4, 5, 6], 10);
// const res = sol.twoSum([3, 4, 5, 6], 7);
console.log(res)
