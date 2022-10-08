/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {

    let count_less = 0;
    let count_target = 0;
 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target)
            count_target++;
        if (nums[i] < target)
            count_less++;
    }
    let ans = [];
    while (count_target--) {
        ans.push(count_less++);
    }
    return ans;
};