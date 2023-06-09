function diminuirNumero(){

    //referenciar ao conteudo
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor do conteudo
    let numero = Number(inNumero.value);

    //tratando a entrada de dados
    if(numero == 0 || isNaN(numero)){
        alert("Digite corretamente os dados.");
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    //criando variavel auxiliar e a limpando
    let resposta = "Entre: " + numero + " e 1: ";

    for( let i = numero; i >= 1; i--){
        if( i != 1){
            resposta += i + ", ";
        }else{
            resposta += i + ".";
        }
    }

    // melhor forma
    
    // for(let i = numero; i > 1; i--){
    //     resposta += i + ", ";
    // }

    // resposta += "1.";

    outResposta.textContent = resposta;

}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", diminuirNumero);