export function esPinValido(pin) {

    if (typeof pin !== 'string') {
        return false;
    }

    const longitudValida = [4, 6].includes(pin.length);
    const soloDigitos = /^\d+$/.test(pin);
    const digitosIguales = /^(\d)\1+$/.test(pin);

    return longitudValida && soloDigitos && !digitosIguales;
}