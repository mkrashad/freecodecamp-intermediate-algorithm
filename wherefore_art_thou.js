function whatIsInAName(collection, source) {
  let foundCollection = [];
  collection.forEach((col, index) => {
    let foundMismatch = false;
    for (let item in source) {
      console.log(source[item], col[item]);
      if (col[item] !== source[item]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      foundCollection.push(collection[index]);
    }
  });

  return foundCollection;
}



console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
