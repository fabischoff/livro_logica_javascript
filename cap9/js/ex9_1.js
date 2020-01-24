recuperarTarefas();


function adicionarTarefa() {
    var inTarefa = document.getElementById("inTarefa");
    var tarefa = inTarefa.value;

    if (tarefa == "") {
        alert("Digite a tarefa!");
        inTarefa.focus();
        return;
    }

    var divQuadro = document.getElementById("divQuadro");
    var h5 = document.createElement("h5");
    var texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    inTarefa.value = "";
    inTarefa.focus();
}

function selecionarTarefa() {
    // alert("Selecionar Tarefa!!!")
    var h5 = document.getElementsByTagName("h5");
    var numH5 = h5.length;
    // console.log("TCL: selecionarTarefa -> h5.length", h5.length)
    if (numH5 == 0) {
        alert("Não há tarefas para selecionar!!");
        return;
    }

    var aux = -1;

    for (var i = 0; i < numH5; i++) {
        if (h5[i].className == "tarefaSelecionada") {
            h5[i].className = "tarefaNormal";
            aux = i;
            break;
        }
    }

    if (aux == numH5 - 1) {
        aux = -1;
    }

    h5[aux + 1].className = "tarefaSelecionada";

}

function retirarTarefa() {
    // alert("Retirar Tarefa!");
    var divQuadro = document.getElementById("divQuadro");
    var h5 = document.getElementsByTagName("h5");
    var numH5 = h5.length;

    if (numH5 == 0) {
        alert("Não há tarefas para exclusão!");
        return;
    }

    var aux = -1;

    for (var i = 0; i < numH5; i++) {
        if (h5[i].className == "tarefaSelecionada") {
            aux = i;
            break;
        }
    }

    if (aux == -1) {
        alert("Selecinar uma tarefa para remocão!");
    }

    if (confirm("Excluir Tarefa " + h5[aux].textContent + " ?")) {
        divQuadro.removeChild(h5[aux]);
    }

}

function gravarTarefa() {
    // alert("Gravar Tarefa")
    var h5 = document.getElementsByTagName("h5");
    var numH5 = h5.length;

    if (numH5 == 0) {
        alert("Não há tarefas para salvar!");
        return;
    }

    var tarefas = "";

    for (var i = 0; i < numH5; i++) {
        tarefas += h5[i].textContent + ";";
    }
    localStorage.setItem("tarefas", tarefas.substr(0, tarefas.length - 1));
    if (localStorage.getItem("tarefas")) {
        alert("Tarefas salvas!");
        location.reload(true);
        }
    }

    function recuperarTarefas(){
        if(localStorage.getItem("tarefas")){
            var tarefas = localStorage.getItem("tarefas").split(";").sort();
            var divQuadro = document.getElementById("divQuadro");
            for(var i = 0; i < tarefas.length; i++){
                var h5 = document.createElement("h5");
                var texto = document.createTextNode(tarefas[i]);
                h5.appendChild(texto);
                divQuadro.appendChild(h5);
            }
        }
    }

    var btGravar = document.getElementById("btGravar");
    btGravar.addEventListener("click", gravarTarefa);

    var btRetirar = document.getElementById("btRetirar");
    btRetirar.addEventListener("click", retirarTarefa);

    var btSelecionar = document.getElementById("btSelecionar");
    btSelecionar.addEventListener("click", selecionarTarefa);

    var btAdicionar = document.getElementById("btAdicionar");
    btAdicionar.addEventListener("click", adicionarTarefa);