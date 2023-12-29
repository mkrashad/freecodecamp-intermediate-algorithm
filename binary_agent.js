function binaryAgent(str) {
  let newArr = [];
  str.split(' ').forEach((element) => {
    let binarryArr = element.split('');
    let total = 0;
    let power = 7;
    for (let i = 0; i < binarryArr.length; i++) {
      if (binarryArr[i] === '1') {
        let decimal = Math.pow(2, power);
        total += decimal;
      }
      power--;
    }
    newArr.push(String.fromCharCode(total));
  });
  return newArr.join('');
}
binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
