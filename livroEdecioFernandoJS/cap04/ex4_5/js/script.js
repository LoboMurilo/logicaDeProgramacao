let contador = 0;
let resposta = "";
let soma = 0;
function cadastrarConta(){

    //referenciar conteudo
    let inDescricao = document.getElementById("inDescricao");
    let inValor = document.getElementById("inValor");
    let outConta = document.getElementById("outConta");
    let outQtd = document.getElementById("outQtd");

    //recebendo valor da referencia
    let descricao = inDescricao.value;
    let valor = Number(inValor.value);

    //tratando os dados de entrada
    if(valor == 0 || isNaN(valor) || descricao === ""){
        alert("Digite corretamente os dados");
        inDescricao.focus();
        return;
    }

    resposta += descricao + " - Valor R$: " + valor.toFixed(2) + "\n";

    soma +=valor;
    contador++;
    
    outConta.textContent = resposta + "=======================";
    outQtd.textContent = "Conta(s): " + contador + " - Total R$: " + soma.toFixed(2);


    //limpa os campos e posiciona o curso em inDescricao
    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();

}

let btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", cadastrarConta);