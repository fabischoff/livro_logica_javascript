function revenda() {
    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");

    var outModelo = document.getElementById("outModelo");
    var outValorVenda = document.getElementById("outValorVenda");

    var modelo = inModelo.value;
    var ano = inAno.value;
    var preco = inPreco.value;

    if (modelo.length < 3 || modelo == "") {
        alert("Digite o modelo do carro!");
        inModelo.value = "";
        inModelo.focus();
        return;
    }

    if (ano < 2 || ano == 0) {
        alert("Digite o ano corretamente!");
        inAno.focus();
        return;
    }

    if (preco == 0 || isNaN(preco)) {
        alert("Digite o preço corretamente!");
        inPreco.focus();
        return;
    }

    var classificacao = classificarCarro(ano);
    var precoDeVenda = calcularPrecoDeVenda(preco, classificacao);

    outModelo.textContent = modelo + " - " + classificacao;
    outValorVenda.textContent = "Preço de Venda R$: " + precoDeVenda.toFixed(2);

}

function classificarCarro(ano) {
    var anoAtual = new Date().getFullYear();
    if(anoAtual == ano) return "Novo";
    if (anoAtual - ano < 2) {
        return "Seminovo";
    } else return "Usado";

}

function calcularPrecoDeVenda(preco, classificao) {
    if (classificao == "Novo" ) {
        return precoDeVenda = preco * 1.08;
    } else
        return precoDeVenda = preco * 1.1;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", revenda)