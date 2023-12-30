function truthCheck(collection, pre) {
  let boolVal = true;
  collection.forEach((element) => {
    if (!element[pre]) {
      boolVal = false;
    }
  });
  return boolVal;
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'isBot'
);
