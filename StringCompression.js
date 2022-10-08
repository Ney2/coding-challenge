/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let i = 0;
    let j = 0;
    let count = 1;
    while(j < chars.length){
        if(chars[j] === chars[j+1]){
            count++;
        }else{
            chars[i] = chars[j];
            i++;
            if(count > 1){
                let countString = count.toString();
                for(let k = 0; k < countString.length; k++){
                    chars[i] = countString[k];
                    i++;
                }
            }
            count = 1;
        }
        j++;
    }
    return i;  
};