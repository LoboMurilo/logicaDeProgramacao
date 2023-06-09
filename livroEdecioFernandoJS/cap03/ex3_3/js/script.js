function calcularTaxa(){
    let inBairro = document.getElementById("inBairro");
    let outTaxa = document.getElementById("outTaxa");

    let baixo = inBairro.value;
    let taxaEntrega;

    switch(baixo){
        case "centro":
            taxaEntrega = 5;
            break;
        case "fragata":
        case "três Vendas":
            taxaEntrega = 7;
            break;
        case "laranjal":
            taxaEntrega = 10;
            break;
        default:
            taxaEntrega = 8;
    }

    outTaxa.textContent = "Taxa de Entrega: " + taxaEntrega.toFixed(2);

}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularTaxa);