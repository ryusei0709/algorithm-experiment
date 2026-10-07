class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const str = s.toLocaleLowerCase();
    const replaceStr = str.replace(/[^a-zA-Z0-9]/g, '');
    let strEndIndex = replaceStr.length - 1;
    let i = 0;
    while (replaceStr.length > i) {
      if (replaceStr[strEndIndex] !== replaceStr[i]) {
        return false
      }
      i++
      strEndIndex--
    }

    return true;
  }
}

const sol = new Solution();
// const res = sol.isPalindrome('tab a cat');
const res = sol.isPalindrome('Was it a car or a cat I saw?');
console.log(res)
