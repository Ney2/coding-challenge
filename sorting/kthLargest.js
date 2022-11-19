/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
 var kthLargestNumber = function(nums, k) {
    nums.sort((a, b) => b.length - a.length || b.localeCompare(a));
    return nums[k - 1];
};