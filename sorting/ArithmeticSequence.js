/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
 var isArithmetic = function(array) {
    let result = []
    let final = []
    for(let i=1; i<array.length;i++) {
      result.push(array[i] - array[i-1])
    }
    let res = new Set(result).size ==1
     return res
  }
  
  
  var checkArithmeticSubarrays = function(nums, l, r) {
    let splice = []
    let ans = []
    for(let i=0; i<l.length; i++) {
      splice = nums.slice(l[i], r[i] + 1)
      splice = splice.sort((a,b) => a - b)
     let final = isArithmetic(splice)
      ans.push(final)
    }
  
    return ans
  };