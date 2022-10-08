/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    let i = 0;
    let j = 0;
    let max = 0;
    let count = 0;
    let basket = {};
    while(j < fruits.length){
        if(!basket[fruits[j]]){
            count++;
        }
        basket[fruits[j]] = (basket[fruits[j]] || 0) + 1;
        while(count > 2){
            basket[fruits[i]]--;
            if(basket[fruits[i]] === 0){
                count--;
            }
            i++;
        }
        max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
};