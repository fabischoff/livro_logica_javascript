function calcularNotas() {
  //cria as referências

  var inSaque = document.getElementById("inSaque");
  var valorSaque = Number(inSaque.value);

  var outRespostaNota100 = document.getElementById("outRespostaNota100");
  var outRespostaNota50 = document.getElementById("outRespostaNota50");
  var outRespostaNota10 = document.getElementById("outRespostaNota10");

  //Limpa mensagens (caso hajá segunda execução)
  outRespostaNota100.textContent = "";
  outRespostaNota50.textContent = "";
  outRespostaNota10.textContent = "";

  if (valorSaque == 0 || isNaN(valorSaque)) {
    alert("Digite um valor!");
    inSaque.focus();
    return;
  }

  //verifica se saque não é múltipo de 10
  if (valorSaque % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
    inSaque.focus();
    return;
  }

  //calcula notas de 100, 50 e 10
  var notasCem = Math.floor(valorSaque / 100);
  //   alert(notasCem);
  var resto = valorSaque % 100;
  var notasCinquenta = Math.floor(resto / 50);
  resto = valorSaque % 50;
  var notasDez = Math.floor(resto / 10);

  //exibe as notas apenas se houver

  if (notasCem > 0)
    outRespostaNota100.textContent = "Notas de R$ 100: " + notasCem;
  if (notasCinquenta > 0)
    outRespostaNota50.textContent = "Notas de R$ 50: " + notasCinquenta;
  if (notasDez > 0)
    outRespostaNota10.textContent = "Notas de R$ 10: " + notasDez;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularNotas);
