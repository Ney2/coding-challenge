/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    nums.sort((a,b) => a - b)
    let start = 0
    let end = nums.length - 1
    let result = []
    let max = -Infinity
  while(start < end) {
    result.push(nums[start] + nums[end])
    start++
    end--
  }
  max = result.reduce((a, b) => Math.max(a, b), max);
  return max
};