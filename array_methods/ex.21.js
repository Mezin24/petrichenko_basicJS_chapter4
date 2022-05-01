'use strict';

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data.reduce(
    (acc, cur) => (cur.amount > 0 ? (acc += cur.amount) : acc),
    0
  );
};

const getTotalIncomeAmount = (data) => {
  if (data.some((item) => item.amount < 0)) {
    return data.reduce((acc, cur) => cur.amount + acc, 0);
  } else {
    return getPositiveIncomeAmount(data);
  }
};

console.log(getTotalIncomeAmount(funds));
