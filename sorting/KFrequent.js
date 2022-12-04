/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let result = []
    let res = []
    let final = []
    let i = 0
    let j = 0
    nums = nums.sort((a,b) => a - b)
    while(i < nums.length) {
      let count = 0
      while(nums[i]==nums[j]) {
        count++
        j++
      }
      result.push(count)
      final.push(nums[i])
      i=j
    }
    for(let i=0; i<k; i++) {
      let max = Math.max(...result)
      let index = result.indexOf(max)
      result[index] = -Infinity
      res.push(final[index])
    }
    return(res)
  };