function calcularMulta() {
    var inDataInfracao = document.getElementById("inDataInfracao");
    var dataInfracao = inDataInfracao.value;
    console.log("TCL: calcularMulta -> inDataInfracao", dataInfracao);

    var inValorMulta = document.getElementById("inValorMulta");
    var valorMulta = inValorMulta.value;

    var outDataLimite = document.getElementById("outDataLimite");
    var valorDesconto = document.getElementById("valorDesconto");

    if (dataInfracao == "") {
        alert("Digite uma data!");
        inDataInfracao.focus();
        return;
    }

    if (valorMulta == "" || isNaN(valorMulta)) {
        alert("Digite um valor válido!");
        inValorMulta.focus();
        inValorMulta.value = "";
        return;
    }

    var parteData = dataInfracao.split("-");
    console.log("TCL: calcularMulta -> parteData", parteData)

    var dataLimite = new Date();
    dataLimite.setFullYear(Number(parteData[0]));
    dataLimite.setMonth(Number(parteData[1]) - 1);
    dataLimite.setDate(Number(parteData[2]));

    var dia = dataLimite.getDate();    // obtém o dia da multa
    console.log("TCL: calcularMulta -> parteData", parteData[2])

    dataLimite.getDate();
    console.log("TCL: calcularMulta -> dataLimite.getDate();", dataLimite.getDate());
    dataLimite.setDate(dia + 90);
    console.log("TCL: calcularMulta -> dataLimite.getDate();", dataLimite.getDate());

    var dia = dataLimite.getDate();
    var mes = dataLimite.getMonth() + 1;
    var ano = dataLimite.getFullYear();

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;

    outDataLimite.textContent = "Data Limite para Pagto com Desconto: " + dia + "/" + mes + "/" + ano;

    var desc = valorMulta * 0.8;

    valorDesconto.textContent = "Valor com Desconto R$: " + desc.toFixed(2);
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calcularMulta);