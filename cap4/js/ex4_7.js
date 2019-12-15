function gerarEstrela() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");
  var numero = Number(inNumero.value);
  var estrelas = "";

  for (var i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
      estrelas += "-";
    }else {
      estrelas += "*";
    }
  }

  outResposta.textContent = estrelas;
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", gerarEstrela);
