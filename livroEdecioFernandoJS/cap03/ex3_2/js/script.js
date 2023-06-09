// 22 * altura
// 2
// (para homens); e 21
// * altura
// 2
// (para mulheres).

function calcularIMC(){

    let inNome = document.getElementById("inNome")
    let rdMasculino = document.getElementById("rdMasculino");
    let rdFeminino = document.getElementById("rdFeminino");
    let inAltura = document.getElementById("inAltura");
    let outResposta = document.getElementById("outResposta");


    //obtendo valor
    let nome = inNome.value;
    let altura = Number(inAltura.value);
    masculino = rdMasculino.checked;
    feminino = rdFeminino.checked;

    let imc;

    //tratamento dos dados selecionados
    if(nome == "" || (masculino === false && feminino === false) || altura == ""){
        alert("Por favor, informe NOME, SEXO e ALTURA.");
        inNome.focus();
        return;
    }

    //tratamento da altua
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente!");
        inAltura.focus();
        return;
    }

    //calculando peso ideal

    if(masculino){
        imc = 22 * ( altura * altura);
    }else{
        imc = 21 * (altura * altura);
    }

    outResposta.textContent = nome + ": Seu peso ideal é: " + imc.toFixed(2) + " Kg";

}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularIMC);


function limparCampo(){
    let inNome = document.getElementById("inNome");
    let inAltura = document.getElementById("inAltura");
    let rdMasculino = document.getElementById("rdMasculino");
    let rdFeminino = document.getElementById("rdFeminino");
    let outResposta = document.getElementById("outResposta");

    inNome.value = "";
    inAltura.value = "";
    rdMasculino.checked = false;
    rdFeminino.checked = false;
    outResposta.textContent = "";
    inNome.focus();

}

let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampo);



//MÉTODO PARA LIMPAR OS CAMPOS RECARREGAND A PÁGINA

// método location.reload().
// function limparCampos() {
// // recarrega a página
// location.reload();
// // posiciona (joga o foco) no elemento inNome
// document.getElementById("inNome").focus();
// }
// var btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click", limparCampos);método location.reload().
// function limparCampos() {
// // recarrega a página
// location.reload();
// // posiciona (joga o foco) no elemento inNome
// document.getElementById("inNome").focus();
// }
// var btLimpar = document.getElementById("btLimpar");
// btLimpar.addEventListener("click", limparCampos);