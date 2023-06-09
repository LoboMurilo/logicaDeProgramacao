function calcularMedia() {

    let inNome = document.getElementById("inNome");
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let outMedia = document.getElementById("outMedia");
    let outSituacao = document.getElementById("outSituacao");

    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);
    let media = (nota1 + nota2) / 2;
    let corpo = document.querySelector("body");

    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    if (media >= 7) {

        outSituacao.textContent = "Parabéns, " + nome + "! Você foi Aprovado(a)!";
        outSituacao.style.color = "blue";
        corpo.style.backgroundColor = "Lightblue";

    }else if(media >= 4){
        outSituacao.textContent = "Estude mais, " + nome + "! Você está de Recuperação!";
        outSituacao.style.color = "Yellow";
        corpo.style.backgroundColor = "Orange";

    } else {

        outSituacao.textContent = "Que vergonha, " + nome + "! Você foi Reprovado(a)!";
        outSituacao.style.color = "red";
        corpo.style.backgroundColor = "Darkgrey";
    }

}

// referenciar o botão e o listenner

let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularMedia);