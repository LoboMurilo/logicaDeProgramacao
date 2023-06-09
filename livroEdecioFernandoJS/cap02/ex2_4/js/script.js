function calcularPreco(){

    let inPreco = document.getElementById("inPreco");
    let inConsumo = document.getElementById("inConsumo");
    let outResposta = document.getElementById("outResposta");

    let preco = Number(inPreco.value);
    let consumo = Number(inConsumo.value);

    let valorPagar = (preco / 1000) * consumo;
    outResposta.textContent = "Valor a pagar R$: " + valorPagar.toFixed(2); 

}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);