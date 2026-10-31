import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
  it('devuelve 0 para n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('devuelve 1 para n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it.each([
    [2, 1],
    [3, 2],
    [5, 5],
    [10, 55],
  ])('fibonacci(%i) = %i', (n, esperado) => {
    expect(fibonacci(n)).toBe(esperado);
  });

  it('lanza RangeError para números negativos', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-5)).toThrow('solo números enteros ≥ 0');
  });
});