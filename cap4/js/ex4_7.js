function gerarEstrela() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");
  var numero = inNumero.value;
  var estrelas = "";

  for (var i = 1; i <= numero; i++) {
    estrelas += estrelas + "*_";
  }

  outResposta.textContent = estrelas;
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", gerarEstrela);
