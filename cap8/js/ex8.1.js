function trocarClube() {
    // cria referência aos elementos da página
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");

    // var clube; // define variável que irá receber o nome do clube
    var clubes = ["Brasil", "Pelotas", "Farroupilha"];

    for (var i = 0; i < clubes.length; i++) {
        if (inputSradio[i].checked) {
            var selecao = i;
            break;
        }
    }

    if (selecao <= clubes.length - 1) {
        // define as classes de divTitulo: row e cores do clube
        divTitulo.className = "row cores" + clubes[selecao];
        // modifica a imagem de acordo com a seleção do cliente
        imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
        imgClube.className = "exibe"; // exibe a imagem
        imgClube.alt = "Símbolo do " + clubes[selecao]; // modifica atributo alt

        //salva no navegador a escolha do cliente
        localStorage.setItem("clube", clubes[selecao])
    } else {
        divTitulo.className = "row";
        imgClube.className = "oculta";
        imgClube.alt = "";
        localStorage.removeItem("clube");
    }
}

// captura os elementos do radiobutton
var rbBrasil = document.getElementById("rbBrasil");
var rbPelotas = document.getElementById("rbPelotas");
var rbFarroupilha = document.getElementById("rbFarroupilha");

// // associa ao evento change a function trocarClube
// rbBrasil.addEventListener("change", trocarClube);
// rbPelotas.addEventListener("change", trocarClube);
// rbFarroupilha.addEventListener("change", trocarClube);

var inputSradio = document.getElementsByTagName("input");
for (var i = 0; i < inputSradio.length; i++) {
    inputSradio[i].addEventListener("change", trocarClube);
}

function verificarVisita(){
    var contadorVisita = document.getElementById("contadorVisita");
    var numeroVisita = 0
    if(localStorage.getItem("visita")){
        numeroVisita = Number(localStorage.getItem("visita"));
        var mensagem = "Que bom que você voltou! Esta é a sua visita de número " + Number(numeroVisita) + " ao nosso site!!";
    }else{
        mensagem = "Muito bem-vindo! Esta é a sua primeira visita ao nosso site!!"
    }
    
    numeroVisita += 1;
    localStorage.setItem("visita", numeroVisita)
    contadorVisita.textContent = mensagem;
}

function verificarClube() {

    // se já estiver salvo algum clube
    if (localStorage.getItem("clube")) {

        var clube = localStorage.getItem("clube"); // obtém o nome do clube

        // conforme o clube, marca um dos elementos do input type radio
        if (clube == "Brasil") {
            inputSradio[0].checked = true;
        } else if (clube == "Pelotas") {
            inputSradio[1].checked = true;
        } else {
            inputSradio[2].checked = true;
        }

        trocarClube(); // chama a function que troca a imagem e cores
    }
}
// chama function que verifica se cliente já selecionou clube anteriormente
verificarClube();
verificarVisita();