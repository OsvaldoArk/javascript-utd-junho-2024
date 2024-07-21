//15 + 14 + 13 + 12+ 11+ 10+ 9 + 8+ 7 + 6+ 5 + 4 + 3 + 2 + 1 + 0
function somaRecursiva(numero){
    if(numero == 0) return numero;

    return numero + somaRecursiva(numero-1);
}

// 6! = 6 X 5 X 4 X 3 X 2 X 1
function fatorialRecursivo(numero){
    if(numero == 1) return numero;

    return numero * fatorialRecursivo(numero-1);
}


console.log(fatorialRecursivo(6));