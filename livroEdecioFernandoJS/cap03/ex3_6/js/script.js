function sacarDinheiro() {

    let inSaque = document.getElementById("inSaque");
    let outNotas = document.getElementById("outNotas");

    let saque = Number(inSaque.value);

    //tratamento de entrada de dados
    if(saque == "" || isNaN(saque)){
        alert("Informe um valor compativel com as notas para SAQUE!");
        inSaque.value = "";
        inSaque.focus();
        return;
    }

    let nota100 = 0
    let nota50 = 0;
    let nota10 = 0;
    let resto = 0;

    //inicio if else
    if (saque % 10 > 0) {
        outNotas.textContent = "Não é possível sacar esse valor!";
    } else {
        //iniciando por nota de 100
        if (saque >= 100) {
            nota100 = Math.floor(saque / 100);
            resto = saque % 100;

            if (resto >= 50) {
                nota50 = Math.floor(resto / 50);
                resto = resto % 50;
            }

            if (resto >= 10) {
                nota10 = resto / 10;
            }
        }

        //iniciando por nota de 50
        if (saque >= 50 && saque < 100) {
            nota50 = Math.floor(saque / 50);
            resto = saque % 50;

            if (resto >= 10) {
                nota10 = resto / 10;
            }
        }

        //iniciando por 10
        if (saque >= 10 && saque < 50) {
            nota10 = saque / 10;
        }

        outNotas.textContent = "Notas de R$ 100: " + nota100 + "\n" + "Notas de R$ 50: " + nota50 + "\n" +
        "Notas de R$ 10: " + nota10;

    }

    //fim do if else



}

let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", sacarDinheiro);