const getRandomInt = require('./getRandomInt');

const data = [
  { name: 'Allan', email: 'allanweb019@gmail.com' },
  { name: 'Amanda', email: 'amanda@gmail.com' },
  { name: 'Davi', email: 'davi@gmail.com' },
];

async function fetchData() {
  return data[getRandomInt(0, 3)];
}

module.exports = fetchData;
