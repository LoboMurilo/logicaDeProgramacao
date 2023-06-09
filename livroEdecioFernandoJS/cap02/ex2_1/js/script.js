function mostrarOla() {
    let inputNome = document.getElementById("nome");
    let nome = inputNome.value;

    resposta = document.getElementById("resposta");
    resposta.textContent = "Olá, " + nome;
    resposta.style.fontWeight = "bold";
    resposta.style.fontSize = "20px";

    let main = document.querySelector("main");
    main.style.backgroundColor = "blue";


    inputNome.value = "";
    inputNome.focus();
}


let btMostrar = document.getElementById("mostrar");
// btMostrar.onclick = mostrarOla;

// para adicionar uma função dentro da variavel , não utilize parenteses.

btMostrar.addEventListener("click", mostrarOla);
//listener , o nome do evento não precisa ser precediso por "on"