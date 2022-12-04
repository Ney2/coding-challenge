function diagonalDifference(arr) {
    let right_sum = 0
    let left_sum = 0
  for(let i=0; i<arr.length;i++) {
    for(let j=0; j<arr.length; j++) {
      if(i==j) {
        right_sum += arr[i][j]
      }
      if(i+j == arr.length -1){
        left_sum +=arr[i][j]
      }
  }    
  
  }
  return(Math.abs(right_sum - left_sum))
  }