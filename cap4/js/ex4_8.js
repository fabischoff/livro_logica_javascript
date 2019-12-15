function repetirFruta() {
    var inFruta = document.getElementById("inFruta");
    var fruta = inFruta.value;

    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    var outResposta = document.getElementById("outResposta");

    listaFruta = "";

    for (var i = 0; i < numero; i++) {
        if (i < numero - 1) {
            listaFruta += fruta + " * ";
        }else listaFruta += fruta;
    }

    outResposta.textContent = listaFruta;
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", repetirFruta);