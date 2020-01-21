function adicionarProdutos() {
    var inProduto = document.getElementById("inProduto");
    var produto = inProduto.value;

    if (produto == "" || produto.length < 3) {
        alert("Digite um produto válido!");
        inProduto.value = "";
        inProduto.focus();
        return;
    }

    armazenarProdutos(produto);
    listarProdutos();
}

function listarProdutos() {
    var outListaProdutos = document.getElementById("outListaProdutos");
    var listaDeProdutos = "Produtos Adicionados";
    listaDeProdutos += "\n------------------------\n";
    if (localStorage.getItem("produtos")) {
        listaDeProdutos = localStorage.getItem("produtos").split(";").join("\n");
    }

    outListaProdutos.textContent = listaDeProdutos;
}

function limpar() {
    if (confirm("Apagar lista de produtos?")) {
        var outListaProdutos = document.getElementById("outListaProdutos");
        outListaProdutos.textContent = "";
        localStorage.removeItem("produtos");
    }
}

function armazenarProdutos(produto) {
    if (localStorage.getItem("produtos")) {

        var listaProdutos = localStorage.getItem("produtos").split(";");
        listaProdutos.push(produto);
        listaProdutos.sort();
        localStorage.setItem("produtos", listaProdutos.join(";"));
    } else {
        localStorage.setItem("produtos", produto);
    }

}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProdutos);

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limpar);