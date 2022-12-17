var pancakeSort = function(arr) {
var result = [];
var key = arr.length;
while(key>0){
    while(arr[key-1]!==key){  
    let index = arr.indexOf(key);
    if(index==0){
    arr = arr.slice(0,key).reverse().concat(arr.slice(key));
    result.push(key);    
    }else{
    arr = arr.slice(0,index+1).reverse().concat(arr.slice(index+1));
    result.push(index+1);    
    }}
    key--;  
}
  return result; 
};