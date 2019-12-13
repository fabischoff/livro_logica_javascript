function decrescente() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);
  var valor = "Entre " + numero + " e 1:" + "\n" + numero;
  if (numero == 0 || isNaN(numero)) {
    alert("Digite um número válido!");
    inNumero.value = "";
    inNumero.focus();
    return;
  }
  //   alert(numero);
  for (var i = numero - 1; i > 0; i--) {
    valor += "," + i;
  }

  outResposta.textContent = valor;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", decrescente);
