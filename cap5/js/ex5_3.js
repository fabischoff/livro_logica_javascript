var carros = [];

function adicionarCarro() {
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");

    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    if (modelo == "") {
        alert("Informe o modelo!!");
        inModelo.focus();
        inModelo.value = "";
        return;
    }

    if (preco == 0 || isNaN(preco)) {
        alert("Digite o preço correto!!");
        inPreco.value = "";
        inPreco.focus();
    }

    carros.push({ modelo: modelo, preco: preco });

    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros();

}
function listarCarros() {
    if (carros.length == 0) {
        alert("Não há carros na lista");
        return;
    }
    var lista = "";

    for (var i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }
    document.getElementById("outLista").textContent = lista;
}

function filtrarCarros() {

    var maximo = Number(prompt("Qual o valor máximo que deseja pagar?"));

    if (maximo == 0 || isNaN(maximo)) {
        return;
    }

    var lista = "";

    for (var i = 0; i < carros.length; i++) {
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
        }
    }
    var outLista = document.getElementById("outLista");
    if (lista == 0) {
        outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
    } else {
        outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n--------------------\n" + lista;
    }

}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarro);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);

var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);