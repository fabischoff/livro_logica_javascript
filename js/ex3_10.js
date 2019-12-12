function validarLadosTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");

  var outRespostaValidadeTriangulo = document.getElementById(
    "outRespostaValidadeTriangulo"
  );

  var outRespostaTipoTriangulo = document.getElementById(
    "outRespostaTipoTriangulo"
  );

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  var triangulo = false;

  if (ladoA == 0 || isNaN(ladoA)) {
    alert("Digite um número para o lado A!");
    inLadoA.value = "";
    inLadoA.focus();
    return;
  }
  if (ladoB == 0 || isNaN(ladoB)) {
    alert("Digite um número para o lado B!");
    inLadoB.value = "";
    inLadoB.focus();
    return;
  }
  if (ladoC == 0 || isNaN(ladoC)) {
    alert("Digite um número para o lado C!");
    inLadoC.value = "";
    inLadoC.focus();
    return;
  }

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outRespostaValidadeTriangulo.textContent =
      "Lados não podem formar um triângulo";
  } else {
    outRespostaValidadeTriangulo.textContent =
      "Lados podem formar um triângulo";
    if (ladoA == ladoB && ladoB == ladoC) {
      outRespostaTipoTriangulo.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outRespostaTipoTriangulo.textContent = "Tipo: Isóceles";
    } else outRespostaTipoTriangulo.textContent = "Tipo: Escaleno";
  }
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", validarLadosTriangulo);
