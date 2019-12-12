function calcularPeso() {
  //   alert("teste");
  //cria referência aos elementos manipulados pela function
  var inNome = document.getElementById("inNome");
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var inAltura = document.getElementById("inAltura");
  var outReposta = document.getElementById("outResposta");

  //obtem o conteúdo dos campos de edição da página
  var nome = inNome.value;
  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var altura = Number(inAltura.value);

  //verifica se o nome foi prenchido e sexo selecionado

  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo.");
    inNome.focus(); //posiciona no campo de edição inNome
    return;
  }
  //   alert(altura);
  //se altura vazio (0) ou NaN
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente.");
    inAltura.focus();
    return;
  }

  //se masculino
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2);
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  //apresenta a resposta
  outReposta.textContent =
    nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}

//   //cria referência ao elemento btCalcular e registra evento
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
  //recarrega a página
  location.reload(true);
  //posiciona (joga o foco ) no elemento inNome
  document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
