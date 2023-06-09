function mostrarPromocao(){

    let inMedicamento = document.getElementById("inMedicamento");
    let inPreco = document.getElementById("inPreco");
    let outMedicamento = document.getElementById("outMedicamento");
    let outPromocao = document.getElementById("outPromocao");

    let medicamento = inMedicamento.value;
    let preco = Number(inPreco.value);
    let precoPromocao = Math.floor(preco * 2);
    
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apenas R$: " + precoPromocao.toFixed(2);

}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocao);