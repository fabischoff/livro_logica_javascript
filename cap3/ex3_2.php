<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="../css/estilos.css">
    <title>Exemplo 3.2</title>
</head>

<body>
    <img src="img/ex3_2.jpg" alt="Balança de Peso">
    <h1>Programa Cálculo do Peso Ideal</h1>
    <p>Nome: <input type="text" id="inNome"></p>
    <p>Sexo:
        <input type="radio" name="sexo" id="rbMasculino">Masculino
        <input type="radio" name="sexo" id="rbFeminino">Feminino
    </p>
    <p>Altura:
        <input type="text" id="inAltura">
    </p>
    <p>
        <input type="button" value="Calcular Peso Ideal" id="btCalcular">
        <input type="button" value="Limpar Campos" id="btLimpar">
    </p>
    <h3 id="outResposta"></h3>
    <script src="../js/ex3_2.js"></script>
</body>

</html>