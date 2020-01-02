const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

function calcularMultaJuros() {
    var inValor = document.getElementById("inValor");
    var inDataVenc = document.getElementById("inDataVenc");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");

    var dataVenc = inDataVenc.value;
    var valor = Number(inValor.value);

    if(dataVenc == ""){
        alert("Selecione uma data!");
        return;
    }
    // console.log(valor);

    if(valor == "" || valor == 0 || isNaN(valor)){
        alert("Digite um valor para a conta!");
        inValor.focus;
        return;
    }

    var hoje = new Date();
    var vencimento = new Date();

    console.log(dataVenc);
    var partes = dataVenc.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1] - 1));
    vencimento.setFullYear(Number(partes[0]));

    var atraso = hoje - vencimento;

    var multa = 0;
    var juros = 0;
    
    if(atraso > 0){
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    }

    var total = valor + multa + juros;
   
    outJuros.value = juros.toFixed(2);
    outMulta.value = multa.toFixed(2);
    outTotal.value = (total).toFixed(2);
    
    
}

function limparCampos () {
    location.reload(true);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);


var btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos);