document.getElementById('buscar').addEventListener('click', async ()=>{

    const banda = document.getElementsByName('banda')[0].value;

    const musica = document.getElementsByName('musica')[0].value;

    const requisicao = await fetch(`https://api.lyrics.ovh/v1/${banda}/${musica}`);

    const resposta = await requisicao.json();

    console.log(resposta);

    const sessao = document.getElementsByClassName('letra')[0];

    sessao.style.width = '200px'

    const textoFormatado = resposta.lyrics.replace('\n','</br>')

    sessao.innerHTML = textoFormatado

});