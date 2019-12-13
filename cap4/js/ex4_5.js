var numContas = 0;
var valTotal = 0;
var descricao = "";

function listarConta() {
  var inDescricaoConta = document.getElementById("inDescricaoConta");
  var inValorAPagar = document.getElementById("inValorAPagar");

  var outDescricaoConta = document.getElementById("outDescricaoConta");
  var outTotal = document.getElementById("outTotal");

  var descricaoConta = inDescricaoConta.value;
  var valorAPagar = Number(inValorAPagar.value);

  if (descricaoConta == "") {
    alert("Digite a descrição da conta!");
    inDescricaoConta.focus();
    return;
  }

  if (valorAPagar == 0 || isNaN(valorAPagar)) {
    alert("Digite o valor da conta!");
    inValorAPagar.value = "";
    inValorAPagar.focus();
    return;
  }

  numContas++;
  valTotal += valorAPagar;

  descricao += descricaoConta + " - " + "R$: " + valorAPagar.toFixed(2) + "\n";

  outDescricaoConta.textContent =
    descricao + "------------------------------------";

  var contaPlural = numContas > 1 ? "contas" : "conta";

  outTotal.textContent =
    numContas +
    (numContas > 1 ? " contas" : " conta") +
    " - Total R$: " +
    valTotal.toFixed(2);

  inDescricaoConta.focus();
  inDescricaoConta.value = "";
  inValorAPagar.value = "";
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", listarConta);
