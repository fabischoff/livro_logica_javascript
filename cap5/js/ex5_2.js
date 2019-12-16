var erros = [];

var sorteado = Math.floor(Math.random() * 100) + 1;
alert(sorteado);

const CHANCES = 6;

function adivinharNumero() {

    var inNumero = document.getElementById("inNumero");
    var btApostar = document.getElementById("btApostar");
    var btJogar = document.getElementById("btJogar");

    var numero = Number(inNumero.value);

    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Digite um número entre 1 e 100!");
        inNumero.focus();
        inNumero.values = "";
        return;
    }

    var outDicas = document.getElementById("outDicas");
    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");

    if (numero == sorteado) {
        alert("Parabéns! Você acertou!!!");
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDicas.textContent = "Parabéns!! Número sorteado: " + sorteado;
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tentou  novamente.");
        }
        else {
            erros.push(numero);
            var numErros = erros.length;
            var numChances = CHANCES - numErros;
            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram ...");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDicas.textContent = "Fim de jogo!! Número sorteado: " + sorteado;
            } else {
                var dica = numero < sorteado ? "Maior" : "Menor";
                outDicas.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    inNumero.value = "";
    inNumero.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", adivinharNumero);

function jogarNovamente() {
    location.reload();
}
var btJogar = document.getElementById("btJogar");
// var btJogar = document.getElementById("btJogar");
// btJogar.addEventListener("click", jogarNovamente);
btJogar.addEventListener("click", jogarNovamente);