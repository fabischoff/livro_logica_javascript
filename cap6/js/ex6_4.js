function gerarCracha(){
    var inNome = document.getElementById("inNome");
    var outNome = document.getElementById("outNome");
    

    var nome = inNome.value;

    if(nome == "" || nome.indexOf(" ") == -1 ){
        alert("Digite o nome completo do participante!");
        inNome.focus();
        return;
    }

    var primeiroEspaco = nome.indexOf(" ");
    var ultimoEspaco = nome.lastIndexOf(" ");

    var cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco);

    
    outNome.textContent = "Crachá: " + cracha;

}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click",gerarCracha);
