var btbtCalcular = document.getElementById("btCalcular");
btbtCalcular.addEventListener("click", function () {
    var inPreco = document.getElementById("inPreco");
    var outFormasPagamento = document.getElementById("outFormasPagamento");
    var preco = inPreco.value;

    if (preco == "" || isNaN(preco)) {
        alert("Digite um preço válido!");
        inPreco.focus();
        return;
    }

    var lista = "Opções de pagamento:\n";
    var linha = "";
    for (var i = 1; i <= 10; i++) {
        linha = i + "x de R$: " + (preco / i).toFixed(2) + "\n";
        lista += linha;
    }
    outFormasPagamento.textContent = lista;
});