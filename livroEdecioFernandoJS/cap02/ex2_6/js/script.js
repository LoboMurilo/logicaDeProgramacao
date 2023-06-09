function calcularPagamento(){

    let inValor = document.getElementById("inValor");
    let inTempo = document.getElementById("inTempo");
    let outPreco = document.getElementById("outPreco");

    let valor = Number(inValor.value);
    let tempo = Number(inTempo.value);
    let preco = Math.ceil(tempo/15) * valor;

    outPreco.textContent = "Valor a Pagar R$: " + preco.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPagamento);