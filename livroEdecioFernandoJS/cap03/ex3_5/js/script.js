function calcularRaiz(){
    
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");
    let outTipoRaiz = document.getElementById("outTipoRaiz");

    let numero = Number(inNumero.value);
    let raiz = Math.sqrt(numero);

    if(numero == "" || isNaN(numero)){
        alert("Informe um número válido!");
        inNumero.focus();
        return;
    }

    outResposta.textContent = "Raíz de: " + numero + " é: " + raiz;

    if(numero % raiz > 0){
        // (raiz == math.floor(raiz)) outra forma de válidar
        outTipoRaiz.textContent += "Raiz não perfeita!";
    }else{
        outTipoRaiz.textContent += "Raiz perfeita!";
    }

}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularRaiz);

