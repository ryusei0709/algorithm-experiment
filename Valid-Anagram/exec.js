class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {

    const sortStr = s.split('').sort().join('')
    const sortStrT = t.split('').sort().join('')

    if (sortStr === sortStrT) {
      return true
    }

    return false
  }

}

const sol = new Solution();
const res = sol.isAnagram('racecar', 'carrace')
