const soma = require('./soma');

test('somando 1 + 2 tem que ser igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});
