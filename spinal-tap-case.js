//Spinal Tap Case

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let newStr = [];
  str.split('').forEach((element, index) => {
    if (index !== 0 && /[A-Z]/.test(element)) {
      newStr.push(' ');
    }
    newStr.push(element);
  });
  return newStr
    .filter((s) => s !== '_')
    .join('')
    .split(' ')
    .filter((str) => str !== '')
    .join('-')
    .toLocaleLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
