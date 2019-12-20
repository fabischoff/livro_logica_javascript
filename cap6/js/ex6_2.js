function montarDica () {
    var inFruta = document.getElementById("inFruta");
    var outDica = document.getElementById("outDica");

    var fruta = inFruta.value;
    

    if(fruta == ""){
        alert("Informe a fruta!");
        inFruta.focus();
        return;
    }

    var resposta = fruta.charAt(0);
    var estrelas = "*";
    var tam = fruta.length;
    console.log(fruta.length)
    console.log(estrelas);

    for(var i = 1; i < tam; i++){
        if(fruta.charAt(i) == fruta.charAt(0)){
            resposta += fruta.charAt(0);
        }else {
            resposta += "_";
        }
        estrelas +=  "*";
    }

    outDica.textContent = resposta;
    console.log(estrelas);
    inFruta.value = estrelas;
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", montarDica);