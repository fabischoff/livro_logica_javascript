function inverterPalavra() {
    var inPalavra = document.getElementById("inPalavra");
    var outPalavraInvertida = document.getElementById("outPalavraInvertida");
    var palavra = inPalavra.value;

    var tamanhoPalavra = palavra.length;
    var palavraInvertida = palavra.charAt(tamanhoPalavra - 1).toUpperCase();

    for (var i = tamanhoPalavra -1 ; i > 0; i--) {

        palavraInvertida += palavra[i - 1].toLowerCase();

    }

    outPalavraInvertida.textContent = palavraInvertida;


}

var btInverter = document.getElementById("btInverter");
btInverter.addEventListener("click", inverterPalavra);