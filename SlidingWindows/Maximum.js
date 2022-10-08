/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
 var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    let max = 0;
    let firstSum = 0;
    let secondSum = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < nums.length){
        firstSum += nums[i];
        if(i - j + 1 === firstLen){
            k = 0;
            secondSum = 0;
            while(k < nums.length){
                secondSum += nums[k];
                if(k - j + 1 === secondLen){
                    max = Math.max(max, firstSum + secondSum);
                    secondSum -= nums[j];
                    j++;
                }
                k++;
            }
            firstSum -= nums[j];
            j++;
        }
        i++;
    }
    return max; 
};