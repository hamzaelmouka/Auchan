const regexNom = /^[A-Za-zÀ-ÿ '\-]{3,30}$/;
const regexPrix=/^[0-9.]+$/;
a

export function Numbervalide(x,a) {
    if (regexPrix.test(a.value.trim()) && Number(a.value) > 0) {
        x.textContent = "";
        return true;
    } else {
        x.textContent = " entre un nembre positive .";
        return false;
    }
}

export function nomvalide(x,a) {
    if (regexNom.test(a.value.trim())) {
        x.textContent = "";
        return true;
    } else {
        x.textContent = " entre un nom entre 3 et 30 caracter .";
        return false;
    }
}
