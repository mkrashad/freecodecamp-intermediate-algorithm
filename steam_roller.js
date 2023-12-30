function steamrollArray(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      const steamRol = steamrollArray(element);
      newArr = newArr.concat(steamRol);
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}
steamrollArray([1, [2], [3, [[4]]]]);
