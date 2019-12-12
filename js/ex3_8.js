function verificarVelocidade() {
  var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
  var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");

  var outResposta = document.getElementById("outResposta");

  velocidadePermitida = Number(inVelocidadePermitida.value);
  velocidadeCondutor = Number(inVelocidadeCondutor.value);

  if (velocidadePermitida == 0 || isNaN(velocidadePermitida)) {
    alert("Digite uma velocidade permitida válida!");
    inVelocidadePermitida.value = "";
    inVelocidadePermitida.focus();
    return;
  }
  if (velocidadeCondutor == 0 || isNaN(velocidadeCondutor)) {
    alert("Digite uma velocidade para o condutor válida!");
    inVelocidadeCondutor.value = "";
    inVelocidadeCondutor.focus();
    return;
  }

  if (velocidadeCondutor <= velocidadePermitida) {
    outResposta.textContent = "Situação: Sem Multa.";
  } else if (
    velocidadeCondutor <
    velocidadePermitida * 0.2 + velocidadePermitida
  )
    outResposta.textContent = "Situação: Multa leve.";
  else {
    outResposta.textContent = "Situação: Multa Gravek.";
  }
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", verificarVelocidade);
