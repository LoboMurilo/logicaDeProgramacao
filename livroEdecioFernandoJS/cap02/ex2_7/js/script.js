function calcularPromocao(){

    let inProduto = document.getElementById("inProduto");
    let inPreco = document.getElementById("inPreco");
    let outPromocao = document.getElementById("outPromocao");
    let outDesconto = document.getElementById("outDesconto");

    let produto = inProduto.value;
    let preco = Number(inPreco.value);
    
    let desconto = preco * 0.50;
    let produtoPromocao = (preco * 3 ) - desconto;


    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + produtoPromocao.toFixed(2);

    outDesconto.textContent = "O 3º produto custa apenas R$: " + desconto.toFixed(2);


}

let btPromocao =document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao);