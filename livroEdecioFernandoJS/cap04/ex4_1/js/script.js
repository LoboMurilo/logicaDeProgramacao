function criarTabuada(){

    //referencia ao conteudo
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor do conteúdo
    let numero = Number(inNumero.value);

    //tratando a entrada de dados
    if(numero == 0 || isNaN(numero)){
        alert("Digite corretamente os dados.");
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    //cria variavel auxiliar e limpa o conteúdo da mesma
    let resposta = "";


    for(let i = 1; i <= 10; i++){
        resposta += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    outResposta.textContent = resposta;

}

let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", criarTabuada);