// var hoje = new Date();
// var amanha = new Date();

// var dia = amanha.getDate();
// amanha.setDate(dia + 1);



// console.log(hoje);
// console.log(dia);
// console.log("Hoje: " + hoje + "\nAmanhã: " + amanha);

// console.log("Dia: " + hoje.toDateString() + "\nHora: " + hoje.toTimeString());

var anoAtual = new Date().getFullYear();
console.log(anoAtual);

var idade = 39;
var anoNasc = anoAtual - idade;
console.log("Você nasceu em " + anoNasc);