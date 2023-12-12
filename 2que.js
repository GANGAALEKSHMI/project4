function removeDuplicates(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
var numbers = [1,8, 8, 2, 3, 3, 4,12,12, 9];
var uniqueNumbers = removeDuplicates(numbers);
console.log("Array with duplicates removed: " + uniqueNumbers); 