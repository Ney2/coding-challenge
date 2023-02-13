/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let rev = digits.reverse();
    let i = 0;

    function add(arr, i) {
        if (i!==arr.length) {
            if (arr[i] + 1 > 9) {
                arr[i] = (arr[i] + 1) % 10;
                i++
                add(arr, i)
            } else {
                arr[i] = arr[i] + 1
            }
        } else {
            arr.push(1)
        }
    }

    add(rev, i)

    return rev.reverse(); 
};