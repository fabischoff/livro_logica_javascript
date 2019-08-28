<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
        <title> Exemplo 2.3 </title>
    </head>
    <body>
        Elaborar um programa para uma revenda de veículos. O programa deve ler o
        modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) 
        e o saldo em 12x. 
        
        <h1>Revenda de Veículos</h1>
        <p>Veículo:<input type="text" name="" id="inVeiculo"></p>
        <p>Preço R$:<input type="text" name="" id="inPreco"></p>
        <p><input type="button" value="Ver Promoção" id="btVerPromocao"></p>
        <h3 id="outVeiculo"></h3>
        <h3 id="outEntrada"></h3>
        <h3 id="outParcela"></h3>
        <script src="../js/ex2_3.js"></script>
    </body>
</html>