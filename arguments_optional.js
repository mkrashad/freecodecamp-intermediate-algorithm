function addTogether() {
  const a = arguments[0];
  const b = arguments[1];
  if (arguments.length === 1 && typeof a === 'number') {
    const total = function sumTwoAnd() {
      if (typeof a === 'number' && typeof arguments[0] === 'number') {
        return a + arguments[0];
      }
      return undefined;
    };
    return total;
  }
  if (arguments.length > 1 && typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

addTogether(2)([6])
