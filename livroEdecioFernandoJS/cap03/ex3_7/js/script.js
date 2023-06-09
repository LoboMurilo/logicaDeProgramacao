function verificaParImpar(){

    //referencia
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor
    let numero = Number(inNumero.value);

    //tratando a entrada dos dados
    if(isNaN(numero)){
        alert("Digite um número válido!");
        inNumero.focus();
        inNumero.value = "";
        return;
    }

    if(numero % 2 == 0){
        outResposta.textContent = numero + " é Par!";
        outResposta.style.color = "red";
    }else {
        outResposta.textContent = numero + " é Ímpar!";
        outResposta.style.color = "blue";
    }

}

//referencia botao
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificaParImpar);