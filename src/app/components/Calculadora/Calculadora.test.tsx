// Calculator.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculadora';
import React from 'react';

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  // Test para la suma
  it('should perform an addition correctly', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  // Test para la resta
  it('should perform a subtraction correctly', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  // Test para la multiplicación
  it('should perform a multiplication correctly', () => {
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  // Test para la división
  it('should perform a division correctly', () => {
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  // Test para el manejo de división por cero
  it('should handle divide by zero with "Error"', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  // Test para la potenciación
  it('should calculate power correctly', () => {
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('^'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  // Test para la raíz cuadrada
  it('should calculate square root correctly', () => {
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('√'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  // Test para el cambio de signo
  it('should toggle sign correctly', () => {
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByText('-9')).toBeInTheDocument();
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByText('9')).toBeInTheDocument();
  });

  // Test para el botón de reset
  it('should clear the display when RESET is clicked', () => {
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('RESET'));
    expect(screen.getByText('')).toBeInTheDocument();
  });

  // Test para verificar la funcionalidad de borrado
  it('should delete the last character correctly when DEL is clicked', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('DEL'));
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});

