function verificarPrimo(){

    //referencia ao conteudo
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor do conteudo
    let numero = Number(inNumero.value);

    //tratando a entrada de dados
    if(numero == 0 || isNaN(numero)){
        alert("Digite corretamente os dados");
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    //variavel auxiliar
    let contador = 0;

    for( let i = 1; i <= numero; i++){

        if(numero % i == 0){
            contador++;
        }

        if(contador > 2){
            break;
        }
    }

    if(contador > 2){
        outResposta.textContent = numero + " não é primo!";
        outResposta.style.color = "red";
    }else{
        outResposta.textContent = numero + " é primo!";
        outResposta.style.color = "green";
    }

}

//referencia ao botao
let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPrimo);