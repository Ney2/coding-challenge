function insertionSort1(n, arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let value = arr[arr.length - 1];
  for(let i =1; i<=arr.length; i++) {
    if(arr[arr.length -i-1] > value) {
      arr[arr.length - i] = arr[arr.length -i -1];
      console.log(arr.join(" "));
    } else {
      let temp = arr[arr.length-i-1];
      arr[arr.length - i] = value;
      value = temp;
      console.log(arr.join(" "));
    }
    if (JSON.stringify(arr) === JSON.stringify(sorted)) {
      break;
    }
  } 
}