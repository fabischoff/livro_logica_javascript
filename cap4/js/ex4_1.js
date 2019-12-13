function tabuada() {
  var inNumero = document.getElementById("inNumero");
  var outTabuada = document.getElementById("outTabuada");

  var numero = Number(inNumero.value);
  var tabuada = "";

  if (numero == 0 || isNaN(numero)) {
    alert("Digite um número válido!");
    inNumero.value = "";
    inNumero.focus();
    return;
  }

  for (var i = 1; i <= 10; i++) {
    tabuada = tabuada + numero + " X " + i + " = " + i * numero + "\n";
  }

  outTabuada.textContent = tabuada;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", tabuada);
