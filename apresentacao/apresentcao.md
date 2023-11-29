---
theme: gaia
_class: lead
paginate: true
backgroundColor: #EDEDED
marp: true
---

# **Introdução em Testes para desenvolvedores Javascript**

---

# **Quem sou eu?**

### Allan da Silva

- Desenvolvedor Web há 10 anos
- Coordenador do DevCia e colaborador do DevParaná
- Futuro Professor Universitário
- Desempregado

---

### Por que Testes Automatizados?

Antes de mergulharmos nos detalhes técnicos, é importante entender por que investir em testes automatizados. Eles oferecem uma maneira eficiente de verificar se o código está funcionando conforme o esperado, facilitando a detecção precoce de bugs e a manutenção contínua do software.

---

## Instalando

### Passo 1: Instalar o Jest e módulos relacionados:

Certifique-se de que você tenha o Jest instalado como dependência de desenvolvimento. Você pode instalar o Jest usando o npm:

```bash
npm install --save-dev jest
```

---

### Passo 2: Adicionar scripts ao package.json:

No seu arquivo package.json, adicione scripts para executar os testes e gerar a cobertura de código. Por exemplo:

```json

"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

---

### Agora você pode executar os testes com:

```bash
npm test
```

## Ou, para executar os testes em modo de observação:

```bash
npm run test:watch
```

---

### E para gerar a cobertura de código:

```bash
npm run test:coverage
```

Esses são os passos básicos para configurar o Jest com observação (watch) e cobertura de código em uma aplicação Node.js. Certifique-se de ajustar as configurações conforme necessário para atender às necessidades específicas do seu projeto.

Mais configurações acesse o [site do jest](https://jestjs.io/pt-BR/)

---

# Escrevendo Testes:

- Teste simples

```JS
// Arquivo de teste (exemplo.test.js)
const soma = require('./exemplo');

test('soma 1 + 2 é igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});
// Arquivo a ser testado (exemplo.js)
function soma(a, b) {
  return a + b;
}
module.exports = soma;

```

---

- Mocks

```js
// example.test.js
const { fetchData } = require('./example');

jest.mock('./example', () => ({
  fetchData: jest.fn(() => 'Dados fictícios'),
}));

test('Exemplo de teste assíncrono com dados fictícios', async () => {
  const data = await fetchData();
  expect(data).toEqual('Dados fictícios');
});
```

---

# **React Testing Library**

### O que é a RTL?

Uma biblioteca para testar componentes React com
foco na interação do usuário com os componentes.

[Guia de instalação](https://testing-library.com/docs/user-event/install)

---

### Exemplo Básico de Teste

```jsx
import { render, screen } from '@testing-library/react';
import MeuComponente from './MeuComponente';

test('Renderiza MeuComponente corretamente', () => {
  render(<MeuComponente />);
  const elemento = screen.getByText('TextoEsperado');
  expect(elemento).toBeInTheDocument();
});
```

---

# **Bora por a mão na massa**

[Link para projeto no git]

---

# **Cypress**

### o que é Cypress?

Definição: Cypress é uma ferramenta de automação de testes de ponta a ponta (end-to-end) projetada para simplificar e acelerar o processo de teste em aplicações web.

[Guia de Instalação](https://docs.cypress.io/guides/getting-started/installing-cypress)

[Guia de Configuração](https://docs.cypress.io/guides/getting-started/opening-the-app)

---

### Exemplo de Código

```js
describe('Suite de Teste', () => {
  it('Deveria visitar a página de exemplo', () => {
    cy.visit('https://www.exemplo.com');
    cy.contains('Bem-vindo');
  });
});
```

---

# **Obrigado!!**

---

### Coisas para ver e aprender mais

- Links das documentações
  - [Jest](https://jestjs.io/pt-BR/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Cypress](https://www.cypress.io/)
- [BDD com Cypress e Cucumber](https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766)
- Videos
  - [Testes no React com Jest & Testing Library](https://www.youtube.com/watch?v=0hVXjqHwvI0)
  - [Testes em JS(Fernanda Kipper)](https://www.youtube.com/watch?v=Ru6Tr7Q75IQ&list=PLNCSWIsR6ADKpmPxQ6ETmTtpbxdjR2tVo)
