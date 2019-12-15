function criarEstrelas() {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);
    var outResposta = document.getElementById("outResposta");

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido!");
        inNumero.focus();
        inNumero.value = "";
        return;
    }
    estrelas = "";
    numeroEstrelas = 0;

    for (var i = 1; i <= numero; i++) {
        while(i > numeroEstrelas) {
            estrelas += '*';
            numeroEstrelas++;
        }
        numeroEstrelas = 0;
        estrelas += '\n';
    }

    outResposta.textContent = estrelas;



}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", criarEstrelas);