 

const buscaLetra = async () => {

    const resposta = await fetch('https://api.lyrics.ovh/v1/coldplay/trouble');

    const letra = await resposta.json();

    console.log(letra);
}

buscaLetra();