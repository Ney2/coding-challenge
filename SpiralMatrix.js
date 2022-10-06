/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let ret = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            ret.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            ret.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ret.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ret.push(matrix[i][left]);
            }
            left++;
        }
    }
    return ret;
};