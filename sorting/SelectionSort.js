//User function Template for javascript

/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
  select(arr,i){
     selectionSort(arr, i);
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
      for(let i=0; i<navigator; i++) {
          for(let j=i+1; j<navigator; j++) {
              if(arr[i] > arr[j]) {
                  let temp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp;
              }
          }
      }
      return arr;
  }
    
}