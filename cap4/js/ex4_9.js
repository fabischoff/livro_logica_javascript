function previsaoDeChinchilas(){
    var inNumeroChinchila = document.getElementById("inNumeroChinchila");
    var inNumeroAnos = document.getElementById("inNumeroAnos");
    var outResposta = document.getElementById("outResposta");

    var numeroChinchila = Number(inNumeroChinchila.value);
    var numeroAnos = Number(inNumeroAnos.value);

    if(numeroChinchila < 2 || isNaN(numeroChinchila)){
        alert("Digite um número maior ou igual a 2!");
        inNumeroChinchila.focus();
        inNumeroChinchila.value = "";
        return;
    }

    if(numeroAnos == 0 || isNaN(numeroAnos)){
        alert("Digite um valor de anos válido!");
        inNumeroAnos.focus();
        inNumeroAnos.value = "";
        return;
    }

    var previsao = 1 + "º ano: " + numeroChinchila + " chinchilas.\n";

    for(var i = 2 ; i <= numeroAnos; i++){
        previsao += i + "º ano: " + (numeroChinchila *= 3) + " chinchilas.\n";  

    }

    outResposta.textContent = previsao;

}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", previsaoDeChinchilas);