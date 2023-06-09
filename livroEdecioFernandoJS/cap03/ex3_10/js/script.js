function formarTriangulo(){

    //referencia ao conteudo
    let inLadoA = document.getElementById("inLadoA");
    let inLadoB = document.getElementById("inLadoB");
    let inLadoC = document.getElementById("inLadoC");
    let outResposta = document.getElementById("outResposta");

    //obtendo valor do conteudo
    let ladoA = Number(inLadoA.value);
    let ladoB = Number(inLadoB.value);
    let ladoC = Number(inLadoC.value);

    //tratando a entrada de dados
    if(isNaN(ladoA) || ladoA == "" || isNaN(ladoB) || ladoB == "" || isNaN(ladoC) || ladoC == ""){
        alert("Por favor, digite os dados corretamente.");
        return;
    }

    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)){

        outResposta.textContent = "Os lados não podem formar um triângulo.";
        outResposta.style.color = "red";

    }else{
        outResposta.textContent = "Os lados podem formar um triângulo.";
        outResposta.style.color = "green";
        tipagemTriangulo();
    }


}

//referenciar botao
let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", formarTriangulo);

function tipagemTriangulo(){
    // referencia ao conteudo
    let inLadoA = document.getElementById("inLadoA");
    let inLadoB = document.getElementById("inLadoB");
    let inLadoC = document.getElementById("inLadoC");
    let outTipo = document.getElementById("outTipo");

    //obtendo valor do conteudo
    let ladoA = Number(inLadoA.value);
    let ladoB = Number(inLadoB.value);
    let ladoC = Number(inLadoC.value)

    if(ladoA === ladoB && ladoC === ladoB){
        outTipo.textContent = "EQUILÁTERO";
    }else if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA ){
        outTipo.textContent = "ESCALENO";
    }else{
        outTipo.textContent = "ISÓSCELES";
    }

}