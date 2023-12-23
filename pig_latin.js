function translatePigLatin(str) {
  const consonant = /a|e|i|o|u/;
  const strArr = str.split('');
  if (!str[0].match(consonant)) {
    let index = 0;
    let endStr = [];
    let slicedStr;
    while (strArr[index] && !strArr[index].match(consonant)) {
      endStr.push(str[index]);
      index++;
      slicedStr = str.substr(index, str.length);
    }
    return slicedStr + endStr.join('') + 'ay';
  }
  return str + 'way';
}

console.log(translatePigLatin('rhythm'));
