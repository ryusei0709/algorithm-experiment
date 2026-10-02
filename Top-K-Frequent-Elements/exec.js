class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {

    const hash = {}
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) {
        hash[nums[i]] = 1
      } else {
        hash[nums[i]]++
      }
    }

    const entriyArr = Object.entries(hash);

    let result = [];
    let watchArr = [];
    
    for (let i = 0; i < entriyArr.length; i++) {
      if (result.length < k) {

        result.push(Number(entriyArr[i][0]))
        watchArr.push(entriyArr[i][1])

      } else {
        const min = Math.min(...watchArr);
        const targetIndex = watchArr.indexOf(min);

        if (watchArr[targetIndex] < entriyArr[i][1]) {

          watchArr[targetIndex] = entriyArr[i][1]
          result[targetIndex] = Number(entriyArr[i][0])

        }
      }
    }
    return result
  }

}

const sol = new Solution();
const res = sol.topKFrequent([7, 7], 1);
// const res = sol.topKFrequent([1, 2, 2, 3, 3, 3], 2);