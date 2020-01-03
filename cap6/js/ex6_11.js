function gerarCitacao() {
    var inNome = document.getElementById("inNome");
    var outNomeCitacao = document.getElementById("outNomeCitacao");

    var nome = inNome.value;
    var partesNome = nome.split(" ");
    

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Digite um nome válido!")
        inNome.focus();
        return;
    }

    var nomeCitacao = partesNome[partesNome.length - 1].toUpperCase() + ',';
    
    for (var i = 0 ; i <= partesNome.length -2; i++) {
        nomeCitacao += partesNome[i].charAt(0).toUpperCase() + '.' ;
    }

    outNomeCitacao.textContent = "Citação Bibliográfica: " + nomeCitacao;

}

var btGerarCitacao = document.getElementById("btGerarCitacao");
btGerarCitacao.addEventListener("click", gerarCitacao);