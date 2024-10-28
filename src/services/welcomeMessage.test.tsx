// welcomeMessage.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Welcome Message Function', () => {
  it('displays a welcome alert on button click', () => {
    // Espiamos a função global alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App />);

    // Encontra o botão de login
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    // Verifica se o alerta foi chamado com a mensagem correta
    expect(alertSpy).toHaveBeenCalledWith('Bem-vindo ao sistema!');

    // Limpa o mock do alerta
    alertSpy.mockRestore();
  });
});
