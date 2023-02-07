/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    let n = fruits.length;
    let type1 = fruits[0], type2 = -1;
    let combos = 1;
    let curLen = 1, max = 1;
    for(let i=1;i<n;i++)
    {
        if(fruits[i] != type1 && fruits[i] != type2 && type2!=-1)
        {
            max = Math.max(curLen, max);
            curLen = combos + 1;
            type2 = type1; 
            type1 = fruits[i];
            combos = 1;
            continue;
        }
        if(fruits[i] == type1)
            combos++;
        else
        {
            type2 = type1;
            type1 = fruits[i];
            combos = 1;
        }
        curLen++;
    }
    return Math.max(max,curLen);
};