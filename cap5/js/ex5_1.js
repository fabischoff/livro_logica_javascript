var pacientes = []; //declara vetor global

function adicionarPaciente(){
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    if(nome == ""){
        alert("Informe o nome do Paciente!");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);

    var listaPacientes = "";

    for(var i = 0; i < pacientes.length; i++ ){
        listaPacientes += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = listaPacientes;

    inPaciente.value = "";
    inPaciente.focus();
}

function adicionarPacienteUrgencia(){
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    if(nome == ""){
        alert("Informe o nome do Paciente!");
        inPaciente.focus();
        return;
    }

    // pacientes.push(nome);
    pacientes.unshift(nome);

    var listaPacientes = "";

    for(var i = 0; i < pacientes.length; i++ ){
        listaPacientes += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = listaPacientes;

    inPaciente.value = "";
    inPaciente.focus();
}

function atendimentoPaciente(){
    if(pacientes.length == 0){
        alert("Não há pacientes para atendimento!");
        inPaciente.focus();
        return;
    }

    // var inPaciente = document.getElementById("inPaciente");
    // var paciente = inPaciente.value;

    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();

    outAtendimento.textContent = atender;
    
    var listaPacientes = "";

    for(var i = 0; i < pacientes.length; i++ ){
        listaPacientes += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = listaPacientes;


}


var btAdicionar = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click",adicionarPacienteUrgencia);

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarPaciente);

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atendimentoPaciente);