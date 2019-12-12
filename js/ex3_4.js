function calcularFuso() {
  //   alert("teste");
  //cria referência aos elementos manipulados pela function
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraFranca = document.getElementById("outHoraFranca");
  var btExibir = document.getElementById("btExibir");

  //obtem o conteúdo dos campos de edição da página
  var horaBrasil = Number(inHoraBrasil.value);

  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Informe a hora no Brasil correntamente.");
    inHoraBrasil.focus();
    return;
  }

  var horaFranca = horaBrasil + 5;

  //se passar das 24 horas

  if (horaFranca > 24) {
    horaFranca -= 24;
  }

  //apresenta a resposta
  outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

//   //cria referência ao elemento btCalcular e registra evento
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
