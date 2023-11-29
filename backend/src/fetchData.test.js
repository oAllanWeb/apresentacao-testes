const fetchData = require('./fetchData');

// jest.mock('./example', () => ({
//   fetchData: jest.fn(() => 'Dados fictícios'),
// }));

test('Exemplo de teste assíncrono com dados fictícios', async () => {
  const data = await fetchData();
  expect(data).toEqual({ name: 'allan', email: 'allanweb019@gmail.com' });
});
