# actividad-tdd-node

Práctica de TDD con Node.js. 

Incluye dos funciones desarrolladas a partir de sus pruebas:

- `fibonacci(n)`: devuelve el término n de la sucesión de Fibonacci.
- `esPinValido(pin)`: verifica si un pin es válido. 

Los tests se ejecutan con Vitest desde la terminal y también de manera automática en GitHub Actions, en cada push a develop y PR a `main`. 

## Ejecutar los tests

    npm ci
    npm test