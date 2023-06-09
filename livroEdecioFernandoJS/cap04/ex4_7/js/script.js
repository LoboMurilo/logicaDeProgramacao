function preencherEspaço(){

    //referencia ao conteudo
    let inSimbolo = document.getElementById("inSimbolo");
    let outResposta = document.getElementById("outResposta");

    //obter valor do conteudo
    let simbolo = Number(inSimbolo.value);

    //tratando dados de entrada
    if(simbolo == 0 || isNaN(simbolo)){
        alert("Digite os dados corretamente!");
        inSimbolo.value = "";
        inSimbolo.focus();
        return;
    }

    //variavel auxiliar
    let acumula = "";

    for(let i = 1; i <= simbolo; i++){

        if(i % 2 != 0){
            acumula += "*";
        }else{
            acumula += "-";
        }
    }

    outResposta.textContent = acumula;
}

//referencia ao botao
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", preencherEspaço);