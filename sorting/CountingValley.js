function countingValleys(steps, path) {
   
    let Valley = path.split('')
    let count = 0
    let result = 0
    for(let step=0; step<steps; step++){
        if(count == 0 && Valley[step].toLowerCase() == 'd'){
            count -= 1
            result += 1
        } else if(Valley[step].toLowerCase() == 'd'){
            count -= 1
        } else {
            count += 1
        }
    }
    return result

}