function gerarEmail (){

    var inNome = document.getElementById("inNome");
    var outEmail = document.getElementById("outEmail");

    var nome = inNome.value;

    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Digite o nome completo!!");
        inNome.focus();
        return;
    }

    var partesNome = nome.split(" ");
    var email = "";

    for(var i = 0 ; i < partesNome.length -1 ; i++){
        email += partesNome[i].charAt(0);
    }

    email += partesNome[partesNome.length -1] + "@empresa.com.br";
    outEmail.textContent = "E-mail: " + email.toLowerCase();

    // console.log(email);
    

    

}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click",gerarEmail);