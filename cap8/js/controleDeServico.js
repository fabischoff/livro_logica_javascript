var outServicoVeiculo = document.getElementById("outServicoVeiculo");
contarServico();
// listarServicos();

function adicionarServico() {

    var inServico = document.getElementById("inServico");
    var servico = inServico.value;

    if (servico == "") {
        alert("Digite um serviço válido!");
        inServico.value = "";
        inServico.focus();
        return;
    }

    armazenarServico(servico);
    contarServico();
    // listarServicos();
}

function listarServicos() {
    
    if (localStorage.getItem("servico")) {
        // listaDeServicos = localStorage.getItem("servico").split(";").join('\n');
        listaDeServicos = localStorage.getItem("servico").split(";");
    } else {
        outServicoVeiculo.textContent = "Não há serviços cadastrados!" ;
        return;
    }

    outServicoVeiculo.textContent = listaDeServicos[0];
    listaDeServicos.shift();
    armazenarServico(listaDeServicos);
    contarServico();
}

function armazenarServico(servico) {
    if (Array.isArray(servico)) {
        localStorage.removeItem("servico");
        localStorage.setItem("servico", servico.join(";"));
        return;
    }

    if (localStorage.getItem("servico")) {
        var servicos = localStorage.getItem("servico").split(";");
        servicos.push(servico);
        servicos.sort();
        localStorage.setItem("servico", servicos.join(";"));
    } else {
        localStorage.setItem("servico", servico);
    }
}

function contarServico() {
    var outQuantServico = document.getElementById("outQuantServico");
    if (localStorage.getItem("servico")) {
        var servicos = localStorage.getItem("servico").split(";");
        outQuantServico.textContent = servicos.length;
        // outServicoVeiculo.textContent = "";
        // console.log(servicos.length);
    } else
        outQuantServico.textContent = 0;
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarServico);

var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener("click", listarServicos)