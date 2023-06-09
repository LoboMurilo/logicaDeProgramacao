function criarEstrela(){

    //referencia ao conteudo
    let inLinhas = document.getElementById("inLinhas");
    let outEstrelas = document.getElementById("outEstrelas");

    //obtendo valor do conteudo
    let linhas = Number(inLinhas.value);

    //variavel auxiliar
    let acumula = "";

    for(let i = 1; i <= linhas; i++){

        for(let j = 1; j <= i; j++){
            acumula += "*"
        }

        acumula += "\n";
    }

    outEstrelas.textContent = acumula;

}

//referencia ao botao
let btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrela);