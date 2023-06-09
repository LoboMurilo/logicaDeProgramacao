function dobrarOuTiplicar(){

    //referencia ao conteudo
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor
    let numero = Number(inNumero.value);


    if(numero % 2 == 0){
        outResposta.textContent = "O dobro de: " + numero + 
        " é: " + (numero * 2);
    }else{
        outResposta.textContent = "O triplo de: " + numero + 
        " é: " + (numero * 3)
    }

}
let outResposta = document.getElementById("outResposta");

// var sair = confirm("Confirmar saida?");
// outResposta.textContent = sair;


//referencia do botao
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", dobrarOuTiplicar);