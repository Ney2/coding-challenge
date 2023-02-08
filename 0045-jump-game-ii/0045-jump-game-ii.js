/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let steps = 0
  let currentJumpIndex = 0
  let nextJumpIndex = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextJumpIndex = Math.max(i + nums[i], nextJumpIndex)
    if (i === currentJumpIndex) {
      steps += 1
      currentJumpIndex = nextJumpIndex
    }
  }
  return steps
};