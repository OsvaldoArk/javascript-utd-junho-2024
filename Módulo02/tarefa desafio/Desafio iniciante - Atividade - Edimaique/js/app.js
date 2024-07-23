let numeroSecreto = gerarNumero();
let numeroTentativas = 10;
let tenta = 0;
const btnInicio = document.getElementById("btnIniciarChutar");
const inputInicial = document.getElementById("inputNumber");
const btnNovoJogo = document.getElementById("btnNovoJogo");
let pResult = document.getElementById("pResult");

function telaInicial() {
  inputInicial.focus();
  inputInicial.removeAttribute("disabled");
  inputInicial.value = "";
  btnInicio.removeAttribute('disabled');
  btnNovoJogo.setAttribute("disabled", "");
}

telaInicial();

function gerarNumero() {
  let numeroAleatorio = Math.ceil(Math.random() * 100);
  return numeroAleatorio;
}

function verificarJogada() {
  inputInicial.removeAttribute("disabled");
  btnInicio.innerText = "Chutar";
    tenta++;
    let pluralTentativas = tenta > 1 ? "tentativas" : "tentativa";
    let pluralTentativasRestam = numeroTentativas - tenta > 1 ? "tentativas" : "tentativa";
    let numeroMaiorMenor = inputInicial.value > numeroSecreto ? "Menor" : "Maior";
    let totalTentativas = numeroTentativas - tenta;
    let pluralResta = totalTentativas > 1 ? "Restam" : "Resta";
    
    if (inputInicial.value == numeroSecreto) {
      pResult.innerText = `Parabéns! Você acertou em ${tenta} ${pluralTentativas}!`;
      btnNovoJogo.removeAttribute('disabled');
      btnInicio.setAttribute('disabled','');
      inputInicial.value = "";
      inputInicial.setAttribute('disabled', '');

    } else if(totalTentativas === 0){
       pResult.innerText = `Você esgotou suas tentativas! Inicie um Novo Jogo e tente novamente.`;
       btnInicio.setAttribute('disabled','');
       btnNovoJogo.removeAttribute('disabled');
       inputInicial.value = "";
       inputInicial.setAttribute('disabled', '');
      
    }else{
      pResult.innerText = `Tente um número ${numeroMaiorMenor}! ${pluralResta} ${totalTentativas} ${pluralTentativasRestam}!`;
      piscarMensagem();
    }
  }

function iniciarNovoJogo(){
  telaInicial();
  pResult.innerText = "Escolha um número de 1 a 100";
  tenta = 0;
  numeroSecreto = gerarNumero(); 
}

function piscarMensagem() {
  pResult.classList.remove('piscar');
  void pResult.offsetWidth;
  pResult.classList.add('piscar');
}

btnInicio.addEventListener("click", ()=>{
  if(isNaN(inputInicial.value) || inputInicial.value < 1 || inputInicial.value > 100){
    pResult.innerText = `Por favor, Digite um número de 1 a 100`;
    piscarMensagem();
    return;
}
  verificarJogada();
});
btnNovoJogo.addEventListener('click', iniciarNovoJogo);