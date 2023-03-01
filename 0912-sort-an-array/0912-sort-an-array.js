/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums
    }
    const mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid))


    return merge(left, right)
};

function merge(left, right) {
    let sortedArr = [] 
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right]
};