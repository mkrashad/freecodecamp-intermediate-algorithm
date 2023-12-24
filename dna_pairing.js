// DNA Pairing

// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  const strArr = str.split('');
  let pairArr = [];
  strArr.forEach((element) => {
    let firstPair = [];
    let secondPair = [];
    switch (element) {
      case 'A':
        firstPair.push('A');
        secondPair.push('T');
        break;
      case 'T':
        firstPair.push('T');
        secondPair.push('A');
        break;
      case 'C':
        firstPair.push('C');
        secondPair.push('G');
        break;
      case 'G':
        firstPair.push('G');
        secondPair.push('C');
        break;
      default:
        return;
    }
    pairArr.push(firstPair.concat(secondPair));
  });

  return pairArr;
}

console.log(pairElement('CTCTA'));
