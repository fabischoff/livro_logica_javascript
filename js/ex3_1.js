function calcularMedia() {
  //cria referência aos elementos manipulados pelo programa
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outSituacao = document.getElementById("outSituacao");
  var outMedia = document.getElementById("outMedia");

  //obtém contéudo dos campos de entrada
  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  //Calcula valor da média
  var media = (nota1 + nota2) / 2;

  //Altera o contéudo dos parágrafos de resposta
  outMedia.textContent = "Média das Notas: " + media.toFixed(2);

  //cria a condição

  if (media >= 7) {
    //altera o texto e o estilo da cor do elemento outSituacao

    outSituacao.textContent =
      "Parabéns " + nome + "!" + " Você foi: aprovado(a).";
    outSituacao.style.color = "blue";
  } else {
    outSituacao.textContent = "Ops " + nome + " ... Você foi reprovado(a).";
    outSituacao.style.color = "red";
  }
}

//cria uma referência ao elemento btVerPromocao (botão)
var btResultado = document.getElementById("btResultado");
//registra um evento associado ao botão para carregar uma função
btResultado.addEventListener("click", calcularMedia);
