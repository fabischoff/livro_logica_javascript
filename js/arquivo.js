
function mostrarOla () {
    var inputNome = document.getElementById("nome");
    var nome = inputNome.value;
    document.getElementById("resposta").textContent = nome;
};

var mostrar = document.getElementById("mostrar");
mostrar.onclick = mostrarOla;

        