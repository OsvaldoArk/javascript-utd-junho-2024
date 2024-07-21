function apagar(gatilho){

    const lista = document.querySelector('#ranking');

    lista.removeChild(gatilho.parentElement);
}

document.querySelector('button').addEventListener('click',()=>{

    const banda = document.querySelector('input').value;

    const lista = document.querySelector('#ranking');

    const item = document.createElement('li');

    item.innerText = banda+' ';

    const botao = document.createElement('input');

    botao.type= 'submit';
    botao.value = 'apagar';
    botao.setAttribute('onClick','apagar(this)');

    item.appendChild(botao);

    lista.appendChild(item);
});