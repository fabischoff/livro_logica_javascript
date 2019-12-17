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

    var lista = "";

    for (var i = 0; i <= candidatos.length; i++){
        lista += candidatos[i].nome;
        // candidatos[i].candidato + " - " +candidatos[i].acerto + "\n";
    }

    document.getElementById("outLista").textContent = lista;



}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);