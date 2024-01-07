function convertToRoman(num) {
  const arabicToRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNums = [];
  let index = 0;
  while (num !== 0) {
    for (let i in arabicToRoman) {
      if (num >= arabicToRoman[i]) {
        num = num - arabicToRoman[i];
        romanNums.push(i);
        break;
      }
    }
    index++;
  }
  return romanNums.join('');
}

console.log(convertToRoman(29))
