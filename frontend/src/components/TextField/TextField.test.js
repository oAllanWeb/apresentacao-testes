import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('Testando componente input', () => {
  test('quando não passar id e name componente deve mostra mensagem', () => {
    render(<TextField></TextField>);
    const linkElement = screen.getByText(
      /Passe um id e um name para o componentes/i
    );
    expect(linkElement).toBeInTheDocument();
  });
});
