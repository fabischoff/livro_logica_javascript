function exibirVelas() {

    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);

    if (idade <= 0 || idade > 120 || isNaN(idade)) {
        alert("Digite uma idade válida em 1 e 120 anos!");
        inIdade.focus();
        return;
    }

    var divVelas = document.getElementById("divVelas");

    for (var i = 0; i < idade.length; i++) {
        var vela = document.createElement("img");
        vela.src = "img/" + idade[i] + '.jpg';
        vela.alt = 'velo de ' + idade[i] + " anos";
        // novaMoeda.className = classe;
        divVelas.appendChild(vela);
    }

    var btExibir = document.getElementById("btExibir");
    btExibir.disabled = true;
}

function novasVelas() {
    var inIdade = document.getElementById("inIdade");
    inIdade.value = "";
    var btExibir = document.getElementById("btExibir");
    btExibir.disabled = false;
    var divVelas = document.getElementById("divVelas");
    var imagem = divVelas.getElementsByTagName("img");

    for (var i = imagem.length - 1; i >= 0; i--) {
        divVelas.removeChild(imagem[i]);
    }

}


var btNovasVelas = document.getElementById("btNovasVelas");
btNovasVelas.addEventListener("click", novasVelas);

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirVelas);