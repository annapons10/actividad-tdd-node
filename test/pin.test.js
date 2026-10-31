import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido(pin)', () => {

  // PIN válidos
  it('debe devolver true para PIN válidos de 4 y 6 dígitos', () => {
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('123456')).toBe(true);
  });

  // Valores nulos o vacíos
  it('debe devolver false si el PIN es null, undefined o está vacío', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
    expect(esPinValido('')).toBe(false);
  });

  // Longitud incorrecta
  it('debe devolver false si el PIN no tiene 4 o 6 dígitos', () => {
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
    expect(esPinValido('1234567')).toBe(false);
  });

  // Caracteres no permitidos
  it('debe devolver false si contiene caracteres que no son dígitos', () => {
    expect(esPinValido('12a4')).toBe(false);
    expect(esPinValido('12 4')).toBe(false);
    expect(esPinValido('12-4')).toBe(false);
  });

  // Todos los dígitos iguales
  it('debe devolver false si todos los dígitos son iguales', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('888888')).toBe(false);
    expect(esPinValido('33333')).toBe(false);
  });

}); 