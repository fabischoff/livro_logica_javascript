var criancas = [];

function adicionarCriancas() {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    var nome = inNome.value;
    var idade = Number(inIdade.value);
    if (nome == "") {
        alert("Digite um nome!");
        inNome.focus();
        inNome.value = "";
        return;
    }

    if (idade == "" || isNaN(idade)) {
        alert("Digite uma idade válida!");
        inIdade.focus();
        inIdade.value = "";
        return;
    }

    criancas.push({
        nome: nome,
        idade: idade
    });

    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas();
}

function listarCriancas() {
    if (criancas.length == 0) {
        alert("Não há crianças na lista!");
        return;
    }

    var lista = "";

    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
    }
    document.getElementById("outLista").textContent = lista;
}

function resumirLista() {
    if (criancas.length == 0) {
        alert("Não há crianças na lista!");
    }

    var copia = criancas.slice();

    copia.sort(function (a, b) {
        return a.idade - b.idade;
    });

    var resumo = "";

    var aux = copia[0].idade;
    var nomes = [];

    for (var i = 0; i < copia.length; i++) {
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            resumo += aux + " ano(s): " + nomes.length + " crianças - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade;
            nomes = [];
            nomes.push(copia[i].nome);
        }
    }
    resumo += aux + " ano(s): " + nomes.length + " crianças - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    document.getElementById("outLista").textContent = resumo;
}

var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click",resumirLista);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);