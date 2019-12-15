function calculaNumeroPerfeito() {
    var inNumero = document.getElementById("inNumero");
    var outDivisores = document.getElementById("outDivisores");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido!");
        inNumero.value = "";
        inNumero.focus();
        return
    }

    var soma = 0;
    var divisores = "Divisores do " + numero + ": ";

    if (numero % 2 == 0) {

        for (var i = 1; i < (numero / 2); i++) {
            if (numero % i == 0) {
                soma += i;
                divisores += i + ', ';
            }

        }
        soma += numero / 2;
        divisores += numero / 2 + " (soma: " + numero + ")";

        if (soma == numero) {
            outResposta.textContent = numero + " é um Número Perfeito.";
        }
        outDivisores.textContent = divisores;


    }else {
        outDivisores.textContent = "Não é um número perfeito.";
        outResposta.textContent = "";
    }
       
}



var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", calculaNumeroPerfeito);