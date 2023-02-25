/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let max = 0;
    let min = prices[0];
    
    for(let i=0; i<prices.length; i++) {
        let sell = prices[i];
        let profit = sell - min;
        max = Math.max(max,profit);
        if(sell<min) {
            min = sell;
        }
    }
    
    return max;
};