function calcularPromocao(){
    //cria referência aos elementos da página
    var inMedicamento = document.getElementById("inMedicamento");
    var inPrecoMedicamento = document.getElementById("inPrecoMedicamento");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPrecoPromocao = document.getElementById("outPrecoPromocao");
    
    //obtém conteúdo dos campos de entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPrecoMedicamento.value);
    
    //calcula o valor da promocao
    var valor = parseInt(preco) * 2;
    
    //altera o conteúdo da linha de resposta
    outMedicamento.textContent = "Promocão de " + medicamento;
    outPrecoPromocao.textContent = "Leve 2 por apenas R$: " + valor.toFixed(2);
    
}

//cria referência ao elemento btMostrarPromocao
var btMostrarPromocao = document.getElementById("btMostrarPromocao");

//registra um evento associado ao botão  para carregar um funcão
btMostrarPromocao.addEventListener("click",calcularPromocao);