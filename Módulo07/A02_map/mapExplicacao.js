const numeros = [1,2,3,4,5,6,7];

const quadrado = numeros.map(numero => {
    if(numero%2===0){
        return numero**2;
    }else{
        return numero**3;
    }
});

const quadradoFacil = numeros.map(numero => numero%2===0?numero**2:numero**3);

console.log(quadradoFacil);