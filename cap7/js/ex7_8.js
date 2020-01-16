var outDesconto = document.getElementById("outDesconto");
var outValorAPagar = document.getElementById("outValorAPagar");
var inValorVacina = document.getElementById("inValorVacina");
var convenio = document.getElementById("convenio");
var inConvenio = document.getElementById("inConvenio");


function verificarConvenio() {
    if (rbSim.checked) {
        convenio.className = "exibe";
    } else {
        convenio.className = "oculta";
    }
}

function calcularDesconto(valor, taxaDesconto) {
    return (valor * taxaDesconto);
}

function calcularValorVacina() {
    limparCampos();
    var valorVacina = Number(inValorVacina.value);

    if (valorVacina == "" || isNaN(valorVacina)) {
        alert("Digite o valor correto!");
        inValorVacina.focus();
        return;
    }

    var desconto = 0.1;

    if (rbSim.checked) {
        var convenio = inConvenio.selectedIndex;

        if (convenio == 0) {
            desconto = 0.2;
        } else if (convenio == 1) {
            desconto = 0.5;
        }
    }

    var valorDesconto = calcularDesconto(valorVacina, desconto);
    outDesconto.textContent = "Desconto R$: " + valorDesconto.toFixed(2);
    outValorAPagar.textContent = "A pagar R$: " + Number(valorVacina - valorDesconto).toFixed(2);
}

function limparCampos() {
    outDesconto.textContent = "";
    outValorAPagar.textContent = "";
    
}
var btCalcularDesconto = document.getElementById("btCalcularDesconto");
btCalcularDesconto.addEventListener("click", calcularValorVacina);

rbSim.addEventListener("change", calcularValorVacina);
rbNao.addEventListener("change", calcularValorVacina);

rbSim.addEventListener("change", verificarConvenio);
rbNao.addEventListener("change", verificarConvenio);

inConvenio.addEventListener("change",calcularValorVacina)

