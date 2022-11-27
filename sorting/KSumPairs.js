/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b)
    let i = 0
    let j = nums.length -1
    let count = 0
    while(i < j) {
      if(nums[i] + nums[j] > k) {
        j--
      } 
      else if(nums[i] + nums[j] < k) {
        i++
      } else {
        i++
        j--
        count++
      }
    }
    return count
  };