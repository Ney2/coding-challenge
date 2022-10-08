/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.prefixSum = [];
    for(let i = 0; i < matrix.length; i++){
        this.prefixSum[i] = [];
        let sum = 0;
        for(let j = 0; j < matrix[i].length; j++){
            sum += matrix[i][j];
            this.prefixSum[i][j] = sum;
        }
    }  
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
 NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for(let i = row1; i <= row2; i++){
        sum += this.prefixSum[i][col2] - (col1 == 0 ? 0 : this.prefixSum[i][col1 - 1]);
    }
    return sum;  
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */