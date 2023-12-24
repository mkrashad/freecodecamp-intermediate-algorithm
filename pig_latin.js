// Pig Latin

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

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
