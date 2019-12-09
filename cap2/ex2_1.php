<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title> Capítulo 2 </title>
</head>

<body>
    <h1>Programa Olá Você !!</h1>
    <p>
        Nome: <input type="text" id="nome">
        <input type="button" id="mostrar" value="Mostrar">
        <span id="erro_nome"></span>
    </p>

    <p id="resposta"></p>

    <script>
        function mostrarOla() {
            var inputNome = document.getElementById("nome");
            var nome = inputNome.value;
            console.log(nome);
            if (nome.length == 0) {
                console.log('menor que 5');
                alert('Campo vazio!')

                document.getElementById("erro_nome").textContent = 'input com erro.';
            }
            document.getElementById("resposta").textContent = nome;


        };

        vamostrar = document.getElementById("mostrar");
        mostrar.onclick = mostrarOla;
    </script>
    <!--<script src="../js/arquivo.js"></script>-->
</body>

</html>