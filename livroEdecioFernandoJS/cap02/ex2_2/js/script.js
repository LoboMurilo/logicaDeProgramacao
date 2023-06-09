// Elaborar um programa para uma Vídeo Locadora, que leia o título e a
// duração de um lme em minutos. Exiba o título do lme e converta a
// duração para horas e minutos, conforme destacado na Figura 

function duracaoConvertida(){

    let inFilme = document.getElementById("inFilme");
    let inDuracao = document.getElementById("inDuracao");

    let filme = inFilme.value;
    let duracao = Number(inDuracao.value);

    let horas = Math.floor( duracao / 60 );
    let minutos = duracao % 60;

    let outResposta = document.getElementById("outResposta");
    outResposta.style.fontSize = "20px";

    outResposta.textContent = 
    "Filme: " + filme + "\n" +
    "Hora(s): " + horas + "\n" +
    "Minuto(s): " + minutos;

}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", duracaoConvertida);