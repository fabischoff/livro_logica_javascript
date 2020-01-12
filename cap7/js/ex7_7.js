function gerarSenha() {
    var inNomeAluno = document.getElementById("inNomeAluno");
    var nomeAluno = inNomeAluno.value;

    var outSenha = document.getElementById("outSenha");


    if (!validarNome(nomeAluno)) {
        alert("Digite um nome completo!");
        inNomeAluno.focus();
        return;
    }



    outSenha.textContent = "Senha Inicial: " + obterNome(nomeAluno) + contarVogais(nomeAluno.toLowerCase());

}

var btGerarSenha = document.getElementById("btGerarSenha");
btGerarSenha.addEventListener("click", gerarSenha);

function validarNome(nome) {
    if (nome == "" || nome.indexOf(" ") == -1) {
        return false;
    }
    return true;
}

function obterNome(nome) {
    var nomeAluno = nome.split(" ");
    return nomeAluno[nomeAluno.length - 1].toLowerCase();
}

function contarVogais(nome) {
    var vogais = ["a", "e", "i", "o", "u"];
    var numeroVogais = "";
    for (var i = 0; i < vogais.length; i++) {
        for (var j = 0; j < nome.length; j++) {
            if (nome.charAt(j).includes(vogais[i])) {
                numeroVogais++;
            }
        }
    }
    return numeroVogais < 10 ? "0" + numeroVogais : numeroVogais;
   
}