const soma = require('./soma');
describe('testando função soma', () => {
  test('somando 1 + 2 tem que ser igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
  });

  test('quando passamos um numero e uma sting deve retornar mensagem de erro', () => {
    expect(soma('1', '2')).toBe(
      'os parâmetros da função soma devem ser numéricos'
    );
  });
});
