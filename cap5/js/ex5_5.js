var clubes = [];

function adicionarClube() {
    var inClube = document.getElementById("inClube");
    var clube = inClube.value;

    if (clube == "") {
        alert("Digite o nome do clube corretamente!");
        inClube.focus();
        inClube.value = "";
        return;
    } else {

        clubes.push({
            nome: clube
        });

        listarClubes();

        inClube.value = "";
        inClube.focus();
    }
}

function listarClubes() {
    var lista = "";
    if (clubes.length == 0) {
        alert("Não há clubes cadastrados!");
        return;
    }

    for (var i = 0; i < clubes.length; i++) {
        // alert("teste");
        lista += (i + 1) + ". " + clubes[i].nome + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

function montarTabela() {
    // var lista = document.getElementById("outLista");
    lista = "";

    var copia = clubes.slice();
    //alert(copia.length % 2);

    if (copia.length % 2 == 1 || copia.length == 0) {
        document.getElementById("outLista").textContent = "Não há como montar a tabela.";
       //alert("teste");
        //document.getElementById("outLista").textContent = "tteste";
        return;
    }
    var aux = copia.length - 1;
    for (var i = 0; i < aux; i++) {
        if (i <= aux / 2) {
            lista += copia[i].nome + " x " + copia[aux].nome + "\n";
            aux -= 1;
        }
    }
    document.getElementById("outLista").textContent = lista;

}

var btCriarTabela = document.getElementById("btCriarTabela");
btCriarTabela.addEventListener("click", montarTabela);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);