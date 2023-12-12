function indexOf(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return i;
      }
    }
    return -1;
  }
var fruits = ["apple", "banana", "cherry", "date"];
var index = indexOf(fruits, "cherry");
console.log("Index of 'cherry' is: " + index); 

var notFoundIndex = indexOf(fruits, "grape");
console.log("Index of 'grape' is: " + notFoundIndex); 
