const arr = [2, 8, 2, 3, 5, 6, 6, 7, 8, 9, 10];

function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates(arr));

// Output: [2, 8, 3, 5, 6, 7, 9, 10]
