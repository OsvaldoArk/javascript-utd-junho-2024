document.getElementById("acao").addEventListener("click",()=>{
    alert("Você não deveria ter apertado este botão!");
});

var botao = document.getElementsByTagName('button');
botao = document.getElementsByClassName('botoes');
botao = document.getElementsByName('josivaldo');

//----------------------------------------------------
botao = document.querySelector('button');
botao = document.querySelector('.botoes');
botao = document.querySelector('#acao');

botao = document.querySelectorAll('button');
botao = document.querySelectorAll('.botoes');
botao = document.querySelectorAll('#acao');

console.log(botao[0]);

//---------------------------------------------------------

var div = document.querySelector(".painel");

div.innerHTML = `<input type='text' placeholder='digite seu nome' />
                 <label> item 1
                 <input type='radio' name='item' />
                 </label>
                 <label> item 2
                 <input type='radio' name='item' />
                 </label>
                 <label> item 3
                 <input type='radio' name='item' />
                 </label>`

