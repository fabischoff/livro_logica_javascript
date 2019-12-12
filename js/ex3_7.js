function parOUImpar() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Digite um número!");
    inNumero.focus();
    return;
  }

  if (numero % 2 == 0) {
    outResposta.textContent = numero + " é Par.";
  } else {
    outResposta.textContent = numero + " é Ímpar.";
  }

  i;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", parOUImpar);
