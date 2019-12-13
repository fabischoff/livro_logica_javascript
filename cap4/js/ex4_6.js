function verificarNumeroPrimo() {
  var inNumeroPrimo = document.getElementById("inNumeroPrimo");
  var outResposta = document.getElementById("outResposta");

  var numeroPrimo = inNumeroPrimo.value;

  if (numeroPrimo == 0 || isNaN(numeroPrimo)) {
    alert("Digite um número válido!");
    inNumeroPrimo.value = "";
    inNumeroPrimo.focus();
  }

  var numDivisores = 0;
  var temDivisor = 0;

  //   for (var i = 1; i <= numeroPrimo; i++) {
  //     if (numeroPrimo % i == 0) {
  //       numDivisores++;
  //     }
  //   }
  //   if (numDivisores == 2) {
  //     outResposta.textContent = numeroPrimo + " É primo";
  //   } else {
  //     outResposta.textContent = numeroPrimo + " não é primo";
  //   }

  for (var i = 2; i <= numeroPrimo; i++) {
    if (numeroPrimo % i == 0) {
      temDivisor = 1;
      break;
    }
  }
  if (numeroPrimo > 1 && !temDivisor) {
    outResposta.textContent = numeroPrimo + " É primo";
  } else {
    outResposta.textContent = numeroPrimo + " não é primo";
  }
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", verificarNumeroPrimo);
