

function findLargestNumbers(arr) {
  let largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let currentLargest = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > currentLargest) {
        currentLargest = arr[i][j];
      }
    }

    largestNumbers.push(currentLargest);
  }

  return largestNumbers;
}

const numbers = [
  [43, 24, 51, 12],
  [21, 9, 11, 49],
  [27, 18, 51, 12]
];

const result = findLargestNumbers(numbers);
console.log(result);