/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0
    let i = 0
    let product = 1
    
    if(k<=1) return 0;
    
    for(let j=0; j<nums.length; j++) {
        product = product * nums[j]
        while(product>=k) {
            product = product / nums[i++]
        }
        count += j-i+1
    }
    
    return count
};