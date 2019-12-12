function calcularRaiz() {
  //criar as referências
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  //   alert(numero);
  if (numero == 0 || isNaN(numero)) {
    alert("Digite um número!");
    inNumero.focus();
    return;
  }

  var raiz = Math.sqrt(numero);

  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz;
  } else {
    alert(Math.floor(raiz));
    outResposta.textContent = "Não há raiz exata para " + numero;
  }
}

//referência ao botão

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularRaiz);
