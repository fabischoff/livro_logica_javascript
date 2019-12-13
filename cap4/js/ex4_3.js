do {
  var num = Number(prompt("Digite um número: "));
  if (num == 0 || isNaN(num)) {
    alert("Digite um número válido!");
  }
} while (num == 0 || isNaN(num));

//declara e inicializa variável que irá exibir pares
var pares = "Pares entre 1 e " + num + ":\n";

//isola o primeiro par (para evitar última vírgula)
if (num > 1) {
  pares = pares + 2;
}

//isola para acumular pares (inicia em 4, pois o 2 já foi atribuído)
for (var i = 4; i <= num; i++) {
  pares = pares + ", " + i;
}

//exibe lista dos números pares

alert(pares);
