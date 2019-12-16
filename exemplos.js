// var idades = [5, 6, 8, 3, 6, 9];
// console.log(idades.length);
// console.log(idades.indexOf(6));
// console.log(idades.lastIndexOf(6));
// console.log(idades.indexOf(7));

var carros = [];
carros.push({modelo:"Fusca",preco:6500});
carros.push({modelo:"Escort",preco:7800});

for(var i = 0; i < carros.length; i++){
    console.log(carros[i].modelo + " - R$: " + carros[i].preco);
}