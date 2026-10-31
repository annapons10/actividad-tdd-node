export function fibonacci(n) {
    if(n < 0){
        throw new RangeError('solo números enteros ≥ 0');
    }

    if(n === 0) return 0;

    let anterior =0;
    let actual = 1;

    for(let i = 2; i <= n; i++){
        const siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }

    return actual;
} 