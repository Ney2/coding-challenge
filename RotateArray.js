/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k %= nums.length
    const reverse = (left, right) => {
      const middle = Math.floor((left + right) / 2)
      for (let i = left; i <= middle; i++) {
        const temp = nums[i]
        nums[i] = nums[right - (i - left)]
        nums[right - (i - left)] = temp
      }
    }
    reverse(0, nums.length - 1)
    reverse(0, k - 1)
    reverse(k, nums.length - 1)
  };