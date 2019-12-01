function calcularValorTempoTotal(){
    //cria referência aos elementos da página
    var inValor = document.getElementById("inValor");
    var inTempoCliente = document.getElementById("inTempoCliente");
    var outValorAPagar = document.getElementById("outValorAPagar");
   
    
    //obtém conteúdo dos campos de entrada
    var valor = inValor.value;
    var tempoCliente = Number(inTempoCliente.value);
    
    //calcula o valor da promocao
    var valorAPagar = Math.ceil(tempoCliente / 15) * 2 ; 
        
    //altera o conteúdo da linha de resposta
    outValorAPagar.textContent = "Valor a Pagar R$: " + valorAPagar.toFixed(2);
    
}

//cria referência ao elemento btMostrarPromocao
var btCalcularValor = document.getElementById("btCalcularValor");

//registra um evento associado ao botão  para carregar um funcão
btCalcularValor.addEventListener("click",calcularValorTempoTotal);