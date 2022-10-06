/**
 * @param {number[]} nums
 * @return {number}
 */
 var minIncrementForUnique = function(nums) {
    let ret = 0;
    let count = new Array(40000).fill(0);
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 1) {
            ret += count[i] - 1;
            count[i + 1] += count[i] - 1;
        }
    }
    return ret; 
};