var candidatos = [];

function adicionarCandidato() {

    var inCandidato = document.getElementById("inCandidato");
    var inAcerto = document.getElementById("inAcerto");
    var acerto = Number(inAcerto.value);
    var candidato = inCandidato.value;

    if (candidato == "") {
        alert("Digite o nome do candidato!");
        inCandidato.value = "";
        inCandidato.focus();
        return;
    }

    if (acerto == 0 || isNaN(acerto)) {
        alert("Digite um número válido!");
        inAcerto.value = "";
        inAcerto.focus();
        return;
    }

    candidatos.push({
        nome: candidato,
        acerto: acerto
    });

    listar();

}

function listar() {
    if (candidatos.length == 0) {
        alert("Não há candidatos!");
        return;
    }
    var lista = "";

    for (var i = 0; i < candidatos.length; i++) {
        lista += candidatos[i].nome + " - " + candidatos[i].acerto + " acertos\n";
    }

    document.getElementById("outLista").textContent = lista;

    inCandidato.value = "";
    inCandidato.focus();

    inAcerto.value = "";
}

function segundaFase() {
    if (candidatos.length == 0) {
        alert("Não há candidatos!");
        return;
    }

    var acerto = Number(prompt("Digite o número de acertos!"));
    if (acerto == 0 || isNaN(acerto)) {
        alert("Digite um número válido!!");
        return;
    }

    var copia = candidatos.slice();

    copia.sort(function (a, b) {
        return a.acerto - b.acerto
    });
    copia.reverse();

    var lista = "";


    for (var i = 0; i < copia.length; i++) {
        if (copia[i].acerto >= acerto) {
            lista += copia[i].nome + " - " + copia[i].acerto + "\n";
        }
    }

    // lista.sort(function (a,b){return a.acerto -b.acerto});
    if (lista == "") {
        alert("Não há aprovados.");
    } else {
        document.getElementById("outLista").textContent = "";
        document.getElementById("outLista").textContent = lista;
    }
    inCandidato.value = "";
    inCandidato.focus();

    inAcerto.value = "";
}

var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", segundaFase);

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listar);