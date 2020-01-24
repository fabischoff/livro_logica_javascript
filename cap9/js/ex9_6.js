function adicionarclube() {
    var inClube = document.getElementById("inClube");
    var clube = inClube.value;

    if (clube == "") {
        alert("Digite um clube!");
        inClube.focus();
        return;
    }

    var divClube = document.getElementById("divClube");
    var h5 = document.createElement('h5');
    var nomeClube = document.createTextNode(clube);
    h5.appendChild(nomeClube);
    h5.style.textAlign = 'right';
    h5.style.fontStyle = 'italic';
    divClube.appendChild(h5);

    inClube.value = "";
    inClube.focus();
}

function montarTabela() {
    // alert("teste");
    var divClube = document.getElementById("divClube");
    var h5 = divClube.getElementsByTagName("h5");

    if (h5.length % 2 == 1) {
        alert("Número ímpar");
        return;
    }
    var tbCampeonato = document.getElementById("tbCampeonato");
    for (var i = 0, j = 1; i < (h5.length / 2); i++, j++) {
        var linha = tbCampeonato.insertRow(-1);
        var col1 = linha.insertCell(0);
        var col2 = linha.insertCell(1);
        col1.textContent = h5[i].textContent;
        col2.textContent = h5[j].textContent;
    }
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarclube);

var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela)