function repetirFruta(){

    // referencia ao conteúdo
    let inFruta = document.getElementById("inFruta");
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor do conteúdo
    let fruta = inFruta.value;
    let numero = Number(inNumero.value);

    //tratando a entrada de dados
    if(fruta === "" || numero == 0 || isNaN(numero)){
        alert("Digite corretamente os dados!")
        inFruta.focus();
        inFruta.value = "";
        return;
    }

    //variavel auxiliar
    let acumulador = "";

    for(let i = 0; i < numero-1; i++){
        //foi colocar o menos 1 para que o asteristico não
        //apareça no final
        acumulador += fruta + "*";
    }

    //aqui é adicionado a fruta sem o asteristico
    acumulador += fruta;
    
    outResposta.textContent = acumulador;
}

//referencia ao botao
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", repetirFruta);