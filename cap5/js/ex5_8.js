var noticias = [];

function adicionarNoticia() {

    var inNoticia = document.getElementById("inNoticia");
    var noticia = inNoticia.value;

    if (noticia == "") {
        alert("Digite uma notícia!");
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);
    var quantNoticia = document.getElementById("quantNoticia");
    if (noticias.length > 0) {
        quantNoticia.textContent = "Notícias Cadastradas: " + noticias.length;
    }

    inNoticia.focus();
    inNoticia.value = "";
}

function listarNoticia() {
    var numero = Number(prompt("Digite a quantidade de notícias:"));
    if (numero > noticias.length || isNaN(numero)) {
        alert("Digite um número válido!");
        return;
    }
    var outLista = document.getElementById("outLista");
    outLista.textContent = "";
    outLista.textContent = numero == 1 ? ("Última notícia:\n") : numero + " Últimas notícias:\n";
    outLista.textContent += '-------------------------------------\n'

    var inverterNoticias = noticias.slice();
    inverterNoticias.reverse();

    for (var i = 0; i < numero; i++) {
        outLista.textContent += (inverterNoticias.length - i) + "º) " + inverterNoticias[i] + '\n';
    }
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticia);

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarNoticia);