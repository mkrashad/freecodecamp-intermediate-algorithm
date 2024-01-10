function checkCashRegister(price, cash, cid) {
  let currencyUnit = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];

  let change = cash - price;
  let count = 0;
  let unit = '';
  let removeItem = '';
  let newCid = [];

  while (change > 0) {
    let found = false;

    for (let i in currencyUnit) {
      if (currencyUnit[i][0] === removeItem) {
        currencyUnit.splice(i, 1);
      }

      if (change >= currencyUnit[i][1]) {
        count = currencyUnit[i][1];
        unit = currencyUnit[i][0];
        break;
      }
    }

    [change, cid, removeItem, newCid] = calculateChange(
      count,
      unit,
      change,
      cid,
      removeItem,
      newCid
    );
  }

  let totalRemainingCash = cid.reduce((acc, curr) => acc + curr[1], 0);
  if (totalRemainingCash === 0.5) {
    return { status: 'CLOSED', change: cid };
  }
  if (newCid.length === 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    return { status: 'OPEN', change: getTotalChange(newCid) };
  }
}

function calculateChange(count, unit, change, cid, removeItem, newCid) {
  let newChange = 0;
  for (let i in cid) {
    if (unit === cid[i][0] && cid[i][0] === 0) {
    }
    if (unit === cid[i][0]) {
      cid[i][1] = cid[i][1] - count;
      newChange = change - count;
      newCid.push([cid[i][0], count]);
      if (cid[i][1] === 0) {
        removeItem = cid[i][0];
      }
      if (cid[i][1] < 0) {
        newCid = [];
        cid[i][1] = 0;
      }
    }
  }
  return [newChange, cid, removeItem, newCid];
}

function getTotalChange(arr) {
  const resultArray = [];
  for (const [type, value] of arr) {
    let found = false;
    // Check if the type already exists in the result array
    for (const entry of resultArray) {
      if (entry[0] === type) {
        // If the type exists, add the value to its total
        entry[1] += value;
        found = true;
        break;
      }
    }

    // If the type doesn't exist, add a new entry
    if (!found) {
      resultArray.push([type, value]);
    }
  }
  return resultArray;
}

checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);
