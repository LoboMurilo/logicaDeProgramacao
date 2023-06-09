function verificarHora(){

    let inHoraBR = document.getElementById("inHoraBR");
    let outHoraFR = document.getElementById("outHoraFR");

    let horaBR = Number(inHoraBR.value);
    let horaFR = horaBR + 5;

    if(horaBR == "" || isNaN(horaBR)){
        alert("Digite corretamente a hora do Brasil!");
        console.log(horaBR);
        inHoraBR.focus();
        return;
    }

    if(horaFR > 24){
        horaFR -= 24;
    }

    outHoraFR.textContent = "Hora na França: " + horaFR.toFixed(2);

}

let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificarHora);