var numero = 100, divisor = 1, contador = 0;

while(divisor<=numero){

    if(numero % divisor == 0)
        contador++;

    divisor++;
}

if(contador == 2)
    console.log("o número "+numero+" é primo pois tem 2 divisores.");
else    
    console.log("o número "+numero+" não é primo pois tem "+contador+" divisores.");
