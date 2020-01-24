function exibirPartesNome() {

    var inNome = document.getElementById("inNome");
    var nome = inNome.value;
    var divNome = document.getElementById("divNome");

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Digite o nome completo!");
        inNome.focus();
        return;
    }
    var h3 = divNome.getElementsByTagName("h3")

    if(h3){
        for (var i = h3.length - 1; i >= 0; i--) {
            divNome.removeChild(h3[i]);
        }
        
    }

    console.log(nome);
    var nomePartes = nome.split(" ");
    for(var i = 0; i < nomePartes.length; i++){
        var h3 = document.createElement("h3");
        var parteNome = document.createTextNode(nomePartes[i]);
        h3.appendChild(parteNome);
        h3.style.color = geraCor();
        divNome.appendChild(h3);        
    }

    



}

function geraCor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}


var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirPartesNome);