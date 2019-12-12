function calculaTempo() {
  var inValor = document.getElementById("inValor");
  var outRespostaTempo = document.getElementById("outRespostaTempo");
  var outRespostaTroco = document.getElementById("outRespostaTroco");

  valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert("Digite um valor válido!");
    inValor.value = "";
    inValor.focus();
    return;
  }
  // alert(valor);
  var tempo = 0;
  var troco = 0;

  if (valor < 1.0) {
    alert("Valor insuficiente!");
  } else if (valor == 1.0) {
    tempo = 30;
  } else if (valor > 1.0 && valor < 3.0) {
    tempo = 60;
    troco = valor - 1.75;
  } else if (valor >= 3) {
    tempo = 120;
    troco = valor - 3;
  }
  if (tempo != 0) outRespostaTempo.textContent = "Tempo: " + tempo + " min.";
  if (troco != 0) outRespostaTroco.textContent = "Troco: R$" + troco;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculaTempo);
