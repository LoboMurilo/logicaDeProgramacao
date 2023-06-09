function preverReproducao(){

    //referencia ao conteudo
    let inChincila = document.getElementById("inChincila");
    let inAnos = document.getElementById("inAnos");
    let outPrevisao = document.getElementById("outPrevisao");

    //obtendo valor do conteudo
    let chincila = Number(inChincila.value);
    let anos = Number(inAnos.value);

    //tratando a entrada de dados
    if( chincila < 2 || chincila == "" || isNaN(chincila) || 
    isNaN(anos) || anos == ""){
        alert("Digite corretamente os dados (Necessário 2 ou mais chincilas)");
        inChincila.focus();
        inChincila.value = "";
        return;
    }

    //variavel auxiliar
    let acumula = "1º Ano: " + chincila + " Chinchilas \n";

    for(let i = 2; i <= anos; i++){
        chincila *= 3;
        acumula += i + "º Ano: " + chincila + " Chincilas \n";
    }

    outPrevisao.textContent = acumula;
}

//referencia ao botao
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", preverReproducao);