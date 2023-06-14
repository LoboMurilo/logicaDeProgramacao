function verificarPerfeito(){

    //referencia ao conteudo
    let inNumero = document.getElementById("inNumero");
    let outDivisores = document.getElementById("outDivisores");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor do conteudo
    let numero = Number(inNumero.value);

    //variavel auxiliar
    let acumula = "Divisores de " + numero + ": 1";
    let somaDivisor = 1;

    for(let i = 2; i <= numero; i++){

        if(numero % i == 0 && i != numero){
            acumula+= ", " + i;
            somaDivisor += i;
        }

    }

    outDivisores.textContent = acumula + " (soma: " + somaDivisor + ")"; 

    if(numero === somaDivisor){
        outResposta.textContent = numero + " é Perfeiro!";
    }else{
        outResposta.textContent = numero + " Não é Perfeiro!";
    }

}

//referencia ao botao
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", verificarPerfeito);