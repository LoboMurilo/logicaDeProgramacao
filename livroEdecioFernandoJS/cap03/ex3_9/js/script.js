function cobrarTempo(){

    //referencia ao conteúdo
    let inValor = document.getElementById("inValor");
    let outTempo = document.getElementById("outTempo");
    let outTroco = document.getElementById("outTroco");

    //obtendo valor do conteúdo
    let valor = Number(inValor.value);

    //var auxiliar
    let troco = 0;

    //tratando a entrada de dados
    if(valor < 1 || isNaN(valor)){
        alert("Valor insuficiente! Considerar valor da tabela.");
        inValor.value = "";
        inValor.focus();
        return;
    }


    if(valor >= 1 && valor < 1.75){
        outTempo.textContent = "Tempo: 30 min.";
        troco = valor - 1;
    }else if(valor < 3){
        outTempo.textContent = "Tempo: 60 min.";
        troco = valor - 1.75;
    }else{
        outTempo.textContent = "Tempo: 120 min.";
        troco = valor - 3;
    }

    outTroco.textContent = "";

    if(troco > 0){
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }


}

//referenciando conteudo do botao
let btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click", cobrarTempo);