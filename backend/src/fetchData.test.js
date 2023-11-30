let fetchData = require('./fetchData');

jest.mock('./fetchData');

fetchData = jest.fn();

fetchData.mockImplementation(async () => ({
  name: 'allan',
  email: 'allanweb019@gmail.com',
}));

test('Exemplo de teste assíncrono com dados fictícios', async () => {
  
  const data = await fetchData();
  expect(data).toEqual({ name: 'allan', email: 'allanweb019@gmail.com' });
});
