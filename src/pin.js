export function esPinValido(pin) {

    if (typeof pin !== 'string' || pin.length === 0) {
        return false;
    }

    if (!/^\d{4}$|^\d{6}$/.test(pin)) {
        return false;
    }

    if (/^(\d)\1+$/.test(pin)) {
        return false;
    }

    return true;
} 