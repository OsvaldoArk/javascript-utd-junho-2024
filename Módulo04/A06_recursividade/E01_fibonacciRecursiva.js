// 1 1 2 3 5 8 13 21 34 55

console.log(fib(15))


//0 1
function fib(numero){
    if(numero <= 0) return 1;

    return fib(numero-2) + fib(numero-1); 
}

