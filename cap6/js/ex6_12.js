
var parcelas = 6;

var lista = "";
var dia, mes, ano, diaZero, mesZero;

var data = new Date();

for(var i = 0; i <= parcelas; i++){
    data.setMonth(data.getMonth()+ 1);
    dia = data.getDate();
    mes = data.getMonth() + 1;
    ano = data.getFullYear();

    diaZero = dia < 10 ? "0" + dia : dia;
    mesZero = mes < 10 ? "0" + mes : mes;
    
    lista += i + " Parcela: " + diaZero + "/" + mesZero + "/" + ano + "\n";

}

console.log(lista);
