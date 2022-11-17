/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    nums.sort((a,b) => a - b);
    
    for (let i = 1; i < nums.length - 1; i++) {
        if ((nums[i-1] + nums[i+1]) / 2 === nums[i]) {
            for (let j = 0; j < nums.length; j++) {
                if ((nums[i-1] + nums[i+1]) / 2 != nums[j]) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
    
    return nums;
};