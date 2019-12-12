function calcularValorTempoTotal(){
    //cria referência aos elementos da página
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    
       
    //obtém conteúdo dos campos de entrada
    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    
    //calcula o valor da promocao
    var desconto3Produto = preco * .5;
    var valorAPagar =  preco * 2 + desconto3Produto; 
        
    //altera o conteúdo da linha de resposta
    outDescricaoPromocao.textContent = "produto - " + 'Promoção: Leve 3 por R$:' + valorAPagar;
    outValorPreco3Produto.textContent = "O 3º produto custa apenas R$: " + desconto3Produto.toFixed(2);
    
}

//cria referência ao elemento btMostrarPromocao
var btCalcularValor = document.getElementById("btCalcularValor");

//registra um evento associado ao botão  para carregar um funcão
btCalcularValor.addEventListener("click",calcularValorTempoTotal);