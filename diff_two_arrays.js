// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [];
  const mergeArray = arr1.concat(arr2);
  mergeArray.forEach((element) => {
    if (!arr1.includes(element) || !arr2.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
