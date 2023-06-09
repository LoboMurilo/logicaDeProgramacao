function verificarMulta(){

    //referencia ao conteudo 
    let inVelocidade = document.getElementById("inVelocidade");
    let inCondutor = document.getElementById("inCondutor");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor da referencia
    let velEstrada = Number(inVelocidade.value);
    let velCondutor = Number(inCondutor.value);

    //tratando os dados de entrada
    if(isNaN(velEstrada) || isNaN(velCondutor) || velEstrada == "" || velCondutor == ""){
        alert("Digite os dados corretamente!");
        inVelocidade.focus();
        inVelocidade.value = "";
        inCondutor.value = "";
        return;
    }

    //variaveis de auxilio
    let multaLeve = velEstrada * 1.20;

    if(velCondutor <= velEstrada){
        outResposta.textContent = "Sem Multa!";
        outResposta.style.color = "green";
    }else if (velCondutor <= multaLeve){
        outResposta.textContent = "Multa Leve!";
        outResposta.style.color = "brown";
    }else{
        outResposta.textContent = "Multa Grave!";
        outResposta.style.color = "red";
    }

}

//referencia do botao
let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarMulta);