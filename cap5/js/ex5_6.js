var numeros = [];

function adicionarNumero() {

    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    if (inNumero.value == '' || isNaN(numero)) {
        alert("Digite um número válido!");
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    if (verificarNumero(numero)) {
        alert("Numero repetido.")
    } else {
        numeros.push(numero);
    }

    inNumero.value = "";
    inNumero.focus();

    listarNumero();
}

function listarNumero() {
    var lista = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        lista += ", " + numeros[i];
    }
    document.getElementById("outLista").textContent = lista;
}

function verificarNumero(numero) {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] == numero) {
            return true;
        }
    }
}

function verificarOrdem () {
    var aux = numeros[0];
    for (var i = 1; i <= numeros.length; i++) {
        if (numeros[i] < aux) {
            alert("Números fora de ordem!");
            return;
        }else {
            aux = numeros[i];
        }
    }
    alert("Números em ordem!");
}


var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificarOrdem);