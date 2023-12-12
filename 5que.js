function sortArray(array) {
    array.sort((a, b) => a - b);
    return array;
  }
var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var sortedNumbers = sortArray(numbers);
console.log("Sorted array: " + sortedNumbers); // Output: "Sorted array: 1,1,2,3,3,4,5,5,5,6,9"
    