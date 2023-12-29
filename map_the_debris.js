function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = arr.map((a) => {
    return {
      name: a.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(a.avgAlt + earthRadius, 3) / GM)
      ),
    };
  });
  return newArr;
}

orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
]);
