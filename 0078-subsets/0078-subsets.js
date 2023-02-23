/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  function findSubset(array, subset) {
    result.push([...subset]);
    for(let i = 0; i < array.length; i++) {
        subset.push(array[i]);
        findSubset(array.slice(i + 1), subset);
        subset.pop();
    }
}
    let result = [];
    findSubset(nums, []);
    return result;  
};