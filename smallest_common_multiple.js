function smallestCommons(arr) {
  let [min, max] = arr.sort((min, max) => min - max);
  let multiple = max;
  for (let i = min; i <= max; i++) {
    if (multiple % i !== 0) {
      multiple += max;
      i = min - 1;
    } else if (i == max) {
      return multiple;
    }
  }
  return arr;
}
console.log(smallestCommons([1, 5]))
