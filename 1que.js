function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
var numbers = [2,5,7,8,4];
var total = sumArray(numbers);
console.log("The sum of all elements is: " + total); 