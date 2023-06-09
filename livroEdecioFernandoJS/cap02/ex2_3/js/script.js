function revendaCarro(){
    let inModelo = document.getElementById("inModelo");
    let inPreco = document.getElementById("inPreco");
    let outModelo = document.getElementById("outModelo");
    let outEntrada = document.getElementById("outEntrada");
    let outParcela = document.getElementById("outParcela");


    let modelo = inModelo.value;
    let preco = Number(inPreco.value);
    let valorEntrada = preco * 0.50;
    let valorParcela = (preco - valorEntrada) / 12;

    outModelo.textContent = "Promoção: " + modelo;
    outEntrada.textContent = "Entrada de R$: " + valorEntrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + valorParcela.toFixed(2);

}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", revendaCarro);