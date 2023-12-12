function isEmptyArray(array) {
    return array.length === 0;
  }
  
var emptyArray = [];
var nonEmptyArray = [1, 2, 3];

console.log(isEmptyArray(emptyArray));      
console.log(isEmptyArray(nonEmptyArray));    
