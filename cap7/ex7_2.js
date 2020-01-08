function calcularMedia () {
    if(arguments.length == 0){
        console.log("Informe, no mínimo, uma nota");
        return;
    }
    var soma = 0;
    var numNotas = arguments.length;

    for(var i = 0; i < numNotas; i++){
        soma += arguments[i];
    }
    var media = soma / numNotas;
    console.log("Média das notas: " + media.toFixed(2));
}

calcularMedia(5,6,8);
calcularMedia(6);
calcularMedia(10,5);