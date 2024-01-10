function rot13(str) {
  const newArr = [];
  var newChar;
  for (let i in str) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78) {
      newChar = str.charCodeAt(i) + 13;
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      newChar = str.charCodeAt(i) - 13;
    } else {
      newChar = str.charCodeAt(i);
    }
    newArr.push(String.fromCharCode(newChar));
  }
  return newArr.join('');
}
