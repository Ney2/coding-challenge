function countingSort(arr) {
    let count = 0;
    let array = new Array(100).fill(0);
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<array.length; j++) {
     if(arr[i] === j) {
       let temp = array[j];
      count = temp +1;
       array[j] = count;
     }
   }
 }
 return array;
}